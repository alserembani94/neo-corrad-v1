<template>
    <div
        class="
            py-6
            px-8
            bg-white
            shadow-md
            rounded-md
            flex flex-col
            gap-4
            transition-all
            duration-300
        "
        :class="[cardType, cardClass]"
        v-show="!state.isClosed"
    >
        <div class="flex flex-row justify-between items-start">
            <div class="flex flex-col">
                <h3 v-if="title">{{ title }}</h3>
                <p class="text-light-700" :class="[cardType]" v-if="subtitle">
                    {{ subtitle }}
                </p>
            </div>
            <button
                class="p-1"
                :class="[{ hidden: !closable }]"
                @click="closeCard"
            >
                <font-awesome-icon :icon="icon.faTimes" transform="grow-5" />
            </button>
        </div>
        <hr class="text-light-500" :class="[cardType]" />
        <div class="flex flex-col gap-4">
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "vue";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default defineComponent({
    name: "Card",
    props: {
        title: {
            type: String,
            required: true,
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
                    "primary",
                    "secondary",
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
        closable: {
            type: Boolean,
            default: false,
        },
    },
    components: {
        FontAwesomeIcon,
    },
    setup() {
        const state = reactive({
            isClosed: false,
        });
        const closeCard = () => {
            state.isClosed = true;
        };
        const icon = computed(() => ({
            faTimes,
        }));
        return {
            icon,
            state,
            closeCard,
        };
    },
});
</script>

<style scoped lang="pcss">
.primary {
    @apply bg-primary-300 text-white;
}

.secondary {
    @apply bg-secondary-300 text-white;
}

.info {
    @apply bg-info-300 text-white;
}

.success {
    @apply bg-success-300 text-white;
}

.warning {
    @apply bg-warning-300 text-black;
}

.danger {
    @apply bg-danger-300 text-white;
}

.dark {
    @apply bg-dark-300 text-white;
}

.light {
    @apply bg-light-300;
}
</style>
