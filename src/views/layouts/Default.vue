<template>
    <layout>
        <section class="flex flex-col gap-2">
            <h1>Default</h1>
        </section>
        <section class="flex flex-col gap-8">
            <card title="Introduction">
                <p>The default layout is the dashboard layout.</p>
                <div class="max-w-3xl">
                    <code-highlight languange="typescript">
                        {{ codeSample.importCard }}
                    </code-highlight>
                </div>

                <img
                    src="@/assets/images/default_layout.jpg"
                    alt="Default NeoCorrad UI"
                />
            </card>
        </section>
    </layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "@/components/layouts/Default.vue";
import Card from "@/components/containers/Card.vue";
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/duotone-sea.css";
import "vue-code-highlight/themes/window.css";

const codeSample = {
    importCard: `<template>
    <layout>
        <!-- Your content -->
    </layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "@/components/layouts/Default.vue";

export default defineComponent({
    components: {
        Layout
    },
});
<script>`,
};

export default defineComponent({
    name: "DefaultLayout",
    components: {
        Layout,
        Card,
        CodeHighlight,
    },
    setup() {
        return {
            codeSample,
        };
    },
});
</script>
