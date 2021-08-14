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
        return {};
    },
});
</script>
