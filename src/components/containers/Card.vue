<template>
    <div
        class="
            py-6
            px-8
            bg-white
            shadow-sm
            rounded-md
            flex flex-col
            gap-4
            transition-all
            duration-300
        "
        :class="[cardType, cardClass]"
    >
        <div class="flex flex-col" v-if="title || subtitle">
            <h3 v-if="title">{{ title }}</h3>
            <p class="text-light-100" v-if="subtitle">{{ subtitle }}</p>
        </div>
        <hr class="text-light-50" v-if="title || subtitle" />
        <div class="flex flex-col gap-4">
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Card",
    props: {
        title: {
            type: String,
        },
        subtitle: {
            type: String,
        },
        cardType: {
            type: String,
            default: "default",
            validator(value: string) {
                return [
                    "default",
                    "info",
                    "success",
                    "warning",
                    "danger",
                    "dark",
                    "light",
                ].includes(value);
            },
        },
        cardClass: {
            type: String,
        },
    },
});
</script>
