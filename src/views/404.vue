<template>
    <layout>
        <div class="flex flex-col items-center justify-center min-h-full gap-4">
            <img
                src="https://www.clipartmax.com/png/full/60-605859_spongebob-caveman-angry-png-caveman-spongebob-png.png"
                alt="I'm sure you are lost"
                class="w-full max-w-md object-contain"
            />
            <p class="text-9xl font-extrabold">404</p>
            <p>Are you lost?</p>
        </div>
    </layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "@/components/layouts/Default.vue";

export default defineComponent({
    name: "Page404",
    components: {
        Layout,
    },
});
</script>
