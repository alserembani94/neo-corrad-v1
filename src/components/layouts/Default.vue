<template>
    <div class="bg-baseBg min-h-screen flex flex-row">
        <main-sidebar />
        <section class="flex flex-1 flex-col">
            <main-header />
            <main class="flex flex-col gap-8 p-8">
                <slot />
            </main>
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainHeader from "../basics/MainHeader.vue";
import MainSidebar from "../basics/MainSidebar.vue";
// import { useStore } from "@/store";

export default defineComponent({
    name: "DefaultLayout",
    components: {
        MainHeader,
        MainSidebar,
    },
    setup() {
        // const store = useStore();
        // const tex = ref("Pulopop!");

        return {
            // store,
            // tex,
        };
    },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style scoped lang="scss">
.main {
    &-screen {
        flex: 1;
        display: flex;
        flex-flow: column nowrap;
    }

    &-content {
        padding: 3ch;
        flex: 1;
        display: flex;
        flex-flow: column nowrap;
        row-gap: 3ch;
    }
}
</style> -->
