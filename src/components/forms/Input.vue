<template>
    <div :class="labelPosition">
        <p
            class="
                text-xs
                max-h-0
                ml-4
                mt-1
                transition-all
                duration-500
                ease-in-out
                overflow-hidden
            "
            :class="{ error: inputHandler.isError }"
        >
            {{ inputHandler.inputMessage }}
        </p>
        <input
            :id="props.id"
            :type="type"
            v-bind="$attrs"
            v-model="inputHandler.inputElement"
            :placeholder="labelPosition === 'float' ? '' : placeholder"
            @focus="handleFocus"
            @blur="handleBlur"
            :data-error="inputHandler.isError"
        />
        <label :for="props.id" :data-filled="!!inputHandler.inputElement">{{
            props.label
        }}</label>
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
});

const inputHandler = reactive({
    inputElement: props.defaultValue || "",
    inputMessage: "",
    isError: false,
});

const handleFocus = () => {
    inputHandler.isError = false;
};

const handleBlur = ({ target }: { target: HTMLInputElement }) => {
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

    &[data-error="true"] {
        @apply border-danger-500;
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
    input:focus ~ label,
    label[data-filled="true"] {
        @apply translate-x-0 translate-y-0 text-black;
    }
    label {
        @apply translate-x-4 translate-y-10 pointer-events-none transition-all duration-200 ease-in-out text-light-600;
    }
}

.error {
    @apply text-danger-500 max-h-10;
}
</style>
