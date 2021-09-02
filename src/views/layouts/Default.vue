<template>
    <Layout>
        <section class="flex flex-col gap-2">
            <h1>Default</h1>
        </section>
        <section class="flex flex-col gap-8">
            <Card title="Introduction">
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
            </Card>
        </section>
    </Layout>
</template>

<script setup lang="ts">
import Layout from "@/components/layouts/Dashboard.vue";
import Card from "@/components/containers/Card.vue";
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/duotone-sea.css";
import "vue-code-highlight/themes/window.css";

const codeSample = {
    importCard: `<template>
    <Layout>
        <!-- Your content -->
    </Layout>
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
</script>
