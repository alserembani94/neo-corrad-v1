<template>
    <div :class="labelPosition">
        <p class="text-xs ml-4 h-3 mt-1">{{ inputMessage }}</p>
        <input
            :id="props.id"
            type="text"
            v-bind="$attrs"
            v-model="inputElement"
            :placeholder="labelPosition === 'float' ? '' : placeholder"
        />
        <label :for="props.id" :data-filled="!!inputElement">{{
            props.label
        }}</label>
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
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
});

const inputElement = ref(props.defaultValue || "");
const inputMessage = ref("Test");

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
        @apply translate-x-4 translate-y-10 pointer-events-none transition-all duration-200 text-light-600;
    }
}
</style>
