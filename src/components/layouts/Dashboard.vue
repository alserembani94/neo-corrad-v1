<template>
    <div class="bg-baseBg min-h-screen flex flex-row w-full">
        <main-sidebar />
        <section class="flex flex-1 flex-col">
            <main-header />
            <main class="flex flex-col gap-8 p-8 flex-1">
                <slot />
            </main>
        </section>
    </div>
</template>

<script setup lang="ts">
import MainHeader from "../containers/MainHeader.vue";
import MainSidebar from "../containers/MainSidebar.vue";
</script>
