<template>
    <div :class="labelPosition">
        <p class="message" :class="{ error: inputHandler.isError }">
            {{ inputHandler.inputMessage }}
        </p>
        <div class="flex flex-row flex-1">
            <div
                class="prefix"
                v-if="!!prefix"
                :class="{ error: inputHandler.isError }"
            >
                <p>{{ prefix }}</p>
            </div>
            <input
                :class="{
                    inputPrefix: !!prefix,
                    inputPostfix: !!postfix,
                    error: inputHandler.isError,
                }"
                :type="type"
                :id="props.id"
                :required="required"
                :placeholder="
                    labelPosition === 'float' ? undefined : placeholder
                "
                :inputmode="inputHandler.inputMode"
                @focus="handleFocus"
                @blur="handleBlur"
                v-bind="$attrs"
                v-model="inputHandler.inputElement"
            />
            <div
                class="postfix"
                v-if="!!postfix"
                :class="{ error: inputHandler.isError }"
            >
                <p>{{ postfix }}</p>
            </div>
        </div>
        <label
            :for="props.id"
            :class="{
                filled: !!inputHandler.inputElement,
                focus: inputHandler.isFocused,
                hasPrefix: !!prefix,
            }"
            >{{ props.label }} {{ required ? "*" : "" }}</label
        >
    </div>
</template>

<script setup lang="ts">
import { defineProps, reactive } from "vue";
// import { faTimes } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const props = defineProps({
    label: {
        type: String,
        default: "Input label",
    },
    id: {
        type: String,
        required: true,
    },
    labelPosition: {
        type: String,
        default: "top",
        validator: (value: string) => {
            return ["top", "side", "float"].indexOf(value) !== -1;
        },
    },
    defaultValue: [String, Number],
    inputValidator: Function,
    placeholder: String,
    type: {
        type: String,
        default: "text",
    },
    prefix: {
        type: String,
    },
    postfix: {
        type: String,
    },
    required: {
        type: Boolean,
        default: false,
    },
});

const inputHandler = reactive({
    inputElement: props.defaultValue || "",
    inputMessage: "",
    isError: false,
    isFocused: false,
    inputMode:
        props.type === "number"
            ? "numeric"
            : props.type === "email"
            ? "email"
            : "text",
});

const handleFocus = () => {
    inputHandler.isError = false;
    inputHandler.isFocused = true;
};

const handleBlur = ({ target }: { target: HTMLInputElement }) => {
    inputHandler.isFocused = false;
    const validityState: ValidityState = target.validity;

    if (!validityState.valid) {
        inputHandler.isError = true;
        inputHandler.inputMessage = target.validationMessage;
    }
};

// const isValid = computed(() => {
//     return (props.inputValidator)
//         ? props.inputValidator(inputElement.value)
//         : true;
// });
</script>

<style scoped lang="postcss">
input {
    @apply border rounded-md border-dark-100 py-2 px-4 flex-1 w-full min-w-input outline-none transition-all duration-300 ease-in-out;
    @apply focus:border-dark-600;

    &.error {
        @apply border-danger-500;
    }

    &.inputPrefix {
        @apply rounded-l-none;
    }

    &.inputPostfix {
        @apply rounded-r-none;
    }
}

.prefix {
    @apply py-2 px-6 rounded-l-md bg-light-600 transition-colors duration-500 ease-in-out;

    &.error {
        @apply bg-danger-500 text-white;
    }
}

.postfix {
    @apply py-2 px-6 rounded-r-md bg-light-600 transition-colors duration-500 ease-in-out;

    &.error {
        @apply bg-danger-500 text-white;
    }
}

.message {
    @apply text-xs max-h-0 ml-4 mt-1 transition-all duration-500 ease-in-out overflow-hidden;
    &.error {
        @apply text-danger-500 max-h-10;
    }
}

.side {
    @apply flex flex-row-reverse items-start;
    label {
        @apply flex-1 max-w-input-label mt-2;
    }
    input {
        @apply ml-8;
    }
}

.top,
.float {
    @apply flex flex-col-reverse;
    label {
        @apply mb-2 text-sm;
    }
}

.float {
    /* input:focus ~ label, */
    label.focus,
    label.filled,
    label.hasPrefix {
        @apply translate-x-0 translate-y-0 text-black;
    }
    label {
        @apply translate-x-4 translate-y-10 pointer-events-none transition-all duration-200 ease-in-out text-light-600;
    }
}
</style>
