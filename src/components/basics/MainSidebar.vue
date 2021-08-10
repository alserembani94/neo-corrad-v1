<template>
    <section
        class="
            bg-primary-50
            w-sidebar-expand
            h-screen
            sticky
            top-0
            flex-shrink-0
            transition-all
            duration-300
            ease-in-out
        "
        :class="{ collapse: store.state.layout.isSidebarCollapse }"
    >
        <div
            class="
                h-header
                shadow-md
                flex
                items-center
                justify-center
                text-primary-100
                py-2
                px-12
            "
        >
            <img src="@/assets/logo/logo-corrad-white.svg" alt="Corrad" />
        </div>
        <nav class="menu">
            <p>Menu</p>
        </nav>
        <div class="meta">
            <button class="solid_secondary">Meta</button>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";

export default defineComponent({
    name: "MainSidebar",
    props: {},
    setup() {
        const store = useStore();
        // const tex = ref("Pulopop!");

        return {
            store,
            // tex,
        };
    },
});
</script>

<style scoped>
.collapse {
    @apply w-sidebar-collapse;
}
</style>
