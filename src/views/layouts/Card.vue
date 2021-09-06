<template>
    <Layout>
        <section class="flex flex-col gap-2">
            <h1>Single Card Layout</h1>
        </section>
        <section class="flex flex-col gap-8">
            <Card title="Introduction">
                <p>This is the single card layout.</p>
                <div class="max-w-3xl">
                    <code-highlight languange="typescript">
                        {{ codeSample.importCard }}
                    </code-highlight>
                </div>

                <img
                    src="@/assets/images/single_card_layout.png"
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
    <CardLayout>
        <!-- Your content -->
    </CardLayout>
</template>

<script setup lang="ts">
import CardLayout from "@/components/layouts/Card.vue";
<script>`,
};
</script>
