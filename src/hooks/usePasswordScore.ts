import { ref, reactive, computed } from "vue";

type Errors = {
    lowerChar: boolean;
    upperChar: boolean;
    specialChar: boolean;
    digitChar: boolean;
    validLength: boolean;
    repetitive: boolean;
};

type Validator = {
    level: number;
    errors: Errors;
};

type UsePasswordScore = (password: string) => Validator;

const usePasswordScore: UsePasswordScore = (password) => {
    const score = ref(0);
    const errors = reactive<Errors>({
        lowerChar: false,
        upperChar: false,
        specialChar: false,
        digitChar: false,
        validLength: false,
        repetitive: false,
    });

    /**
     * Password check score
     * 1. At least one lower case English letter
     * 2. At least one upper case English letter
     * 3. At least one digit
     * 4. At least one special character
     * 5. Minimum 8 in length
     * 6. Reduce score if there is consecutive repetition
     *
     * Need more complex scoring:
     * 1. Alternate between lowercase and uppercase
     * 2. Repetitive letter but lowercase/uppercase
     * 3. Similar char eg. l, 1, I
     */

    const validLower = /^(?=.*?[a-z])/g;
    const validUpper = /^(?=.*?[A-Z])/g;
    const validSpecialChar = /^(?=.*?[#?!@$%^&*-])/g;
    const validDigit = /^(?=.*?[0-9])/g;
    const validLength = /.{8,}/g;
    const noRepetitive = /^(?!.*(\w)\1{3,}).+$/g;

    // Error escape method first
    if (!password.match(validLower)) errors.lowerChar = true;
    if (!password.match(validUpper)) errors.upperChar = true;
    if (!password.match(validSpecialChar)) errors.specialChar = true;
    if (!password.match(validDigit)) errors.digitChar = true;
    if (!password.match(validLength)) errors.validLength = true;
    if (!password.match(noRepetitive)) errors.repetitive = true;

    // General scoring
    if (password.match(validLower)) score.value += 3;
    else score.value -= 2;

    if (password.match(validUpper)) score.value += 3;
    else score.value -= 2;

    if (password.match(validSpecialChar)) score.value += 3;
    else score.value -= 2;

    if (password.match(validDigit)) score.value += 3;
    else score.value -= 2;

    if (password.match(noRepetitive)) score.value += 4;
    else score.value -= 6;

    // Password scoring method
    score.value = score.value + 10 + (password.length - 8) * 2;

    const level = computed(() => {
        const awardedLevel = Math.ceil(score.value / 10);

        return awardedLevel < 0 ? 0 : awardedLevel > 5 ? 5 : awardedLevel;
    });

    return {
        level: level.value,
        errors,
    };
};

export { usePasswordScore as default };
