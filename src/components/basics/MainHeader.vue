<template>
    <header
        class="
            bg-white
            h-header
            flex flex-row
            shadow-md
            items-center
            justify-between
            px-8
            py-2
            sticky
            top-0
            z-100
        "
    >
        <button class="btn-sm btn-primary" @click="toggleSidebar">
            <!-- <i class="fas fa-bars" /> -->
            Hello
        </button>
        <div>
            <p>Header</p>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";

export default defineComponent({
    name: "MainHeader",
    props: {},
    setup() {
        const store = useStore();

        return {
            store,
            toggleSidebar: () => store.commit("layout/toggleSidebar"),
        };
    },
});
</script>
