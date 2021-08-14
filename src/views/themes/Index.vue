<template>
    <layout>
        <section class="flex flex-col gap-2">
            <h1>Themes</h1>
        </section>
        <section class="flex flex-col gap-8">
            <card title="Introduction">
                <p>
                    We are proudly using Tailwind, a utility-first CSS framework
                    packed with classes that can be composed to build any
                    design, directly in your markup. To explore more information
                    about TailwindCSS, you can head to
                    <a
                        href="https://tailwindcss.com/docs"
                        rel="noopener noreferrer"
                        target="_blank"
                        >Tailwind documentation</a
                    >.

                    <br />

                    On top of TailwindCSS, we are also expanding the themes, so
                    you can also customize the themes either using our templates
                    by modifying <code>src/index.css</code>, or just modify
                    <code>tainwind.config.js</code> directly.
                </p>
            </card>
        </section>

        <section class="grid grid-cols-1 gap-8">
            <card title="Colors">
                <p>
                    We are extending existing Tailwind Colors profile,
                    handpicked just for you.
                </p>
                <div
                    v-for="color in colorProfile"
                    :key="`color-${color}`"
                    class="flex flex-row flex-wrap"
                >
                    <p class="w-40 mt-4">
                        <code>{{ color }}</code>
                    </p>
                    <div class="flex flex-row flex-wrap gap-3">
                        <div
                            v-for="shade in shades"
                            :key="`color-${color}-${shade}`"
                            class="flex flex-col items-center"
                        >
                            <div
                                class="w-16 h-16 rounded-lg shadow-md"
                                :class="`bg-${color}-${shade}`"
                            />
                            <p class="text-sm mt-2">{{ shade }}</p>
                        </div>
                    </div>
                </div>
                <p>
                    There are also other colors that are declared for the sake
                    of consistency.
                </p>
                <div class="flex flex-row flex-wrap gap-3">
                    <div class="flex flex-col items-center">
                        <div class="w-16 h-16 rounded-lg bg-white shadow-md" />
                        <p class="text-sm mt-2"><code>white</code></p>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="w-16 h-16 rounded-lg bg-black shadow-md" />
                        <p class="text-sm mt-2"><code>black</code></p>
                    </div>
                    <div class="flex flex-col items-center">
                        <div class="w-16 h-16 rounded-lg bg-baseBg shadow-md" />
                        <p class="text-sm mt-2"><code>baseBg</code></p>
                    </div>
                </div>
            </card>
        </section>
    </layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "@/components/layouts/Default.vue";
import Card from "@/components/containers/Card.vue";
import "vue-code-highlight/themes/duotone-sea.css";
import "vue-code-highlight/themes/window.css";

export default defineComponent({
    name: "Themes",
    components: {
        Layout,
        Card,
        // CodeHighlight,
    },
    setup() {
        const colorProfile = [
            "primary",
            "secondary",
            "info",
            "success",
            "warning",
            "danger",
            "dark",
            "light",
        ];
        const shades = [100, 200, 300, 400, 500, 600, 700, 800, 900];
        return { shades, colorProfile };
    },
});
</script>
