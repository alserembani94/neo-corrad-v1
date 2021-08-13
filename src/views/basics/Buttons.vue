<template>
    <layout>
        <section class="flex flex-col gap-2">
            <h1>Buttons</h1>
        </section>
        <section class="flex flex-col gap-8">
            <card title="Introduction">
                <p>
                    There are several button styles provided out of the box for
                    you.
                </p>
            </card>
            <card title="Styles">
                <h4>🌟 Button Styles</h4>
                <p>You can choose from one of these styles provided:</p>
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr>
                                <td>Style Category</td>
                                <td>Class</td>
                                <td>Default</td>
                                <td>Disabled</td>
                                <td>Active</td>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- For solid button -->
                            <tr>
                                <td rowspan="8">Solid Style</td>
                                <td><code>btn-primary</code></td>
                                <td>
                                    <button class="btn-primary btn-base">
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-primary btn-base"
                                        disabled
                                    >
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-primary btn-base"
                                        data-active="true"
                                    >
                                        Button
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td><code>btn-secondary</code></td>
                                <td>
                                    <button class="btn-secondary btn-base">
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-secondary btn-base"
                                        disabled
                                    >
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-secondary btn-base"
                                        data-active="true"
                                    >
                                        Button
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td><code>btn-info</code></td>
                                <td>
                                    <button class="btn-info btn-base">
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button class="btn-info btn-base" disabled>
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-info btn-base"
                                        data-active="true"
                                    >
                                        Button
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td><code>btn-success</code></td>
                                <td>
                                    <button class="btn-success btn-base">
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-success btn-base"
                                        disabled
                                    >
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-success btn-base"
                                        data-active="true"
                                    >
                                        Button
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td><code>btn-warning</code></td>
                                <td>
                                    <button class="btn-warning btn-base">
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-warning btn-base"
                                        disabled
                                    >
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-warning btn-base"
                                        data-active="true"
                                    >
                                        Button
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td><code>btn-danger</code></td>
                                <td>
                                    <button class="btn-danger btn-base">
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-danger btn-base"
                                        disabled
                                    >
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-danger btn-base"
                                        data-active="true"
                                    >
                                        Button
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td><code>btn-dark</code></td>
                                <td>
                                    <button class="btn-dark btn-base">
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button class="btn-dark btn-base" disabled>
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-dark btn-base"
                                        data-active="true"
                                    >
                                        Button
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td><code>btn-light</code></td>
                                <td>
                                    <button class="btn-light btn-base">
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button class="btn-light btn-base" disabled>
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-light btn-base"
                                        data-active="true"
                                    >
                                        Button
                                    </button>
                                </td>
                            </tr>
                            <!-- For outline button -->
                            <tr>
                                <td rowspan="8">Outline Style</td>
                                <td><code>btn-primary</code></td>
                                <td>
                                    <button class="btn-primary btn-base">
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-primary btn-base"
                                        disabled
                                    >
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-primary btn-base"
                                        data-active="true"
                                    >
                                        Button
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td><code>btn-secondary</code></td>
                                <td>
                                    <button class="btn-secondary btn-base">
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-secondary btn-base"
                                        disabled
                                    >
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-secondary btn-base"
                                        data-active="true"
                                    >
                                        Button
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td><code>btn-info</code></td>
                                <td>
                                    <button class="btn-info btn-base">
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button class="btn-info btn-base" disabled>
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-info btn-base"
                                        data-active="true"
                                    >
                                        Button
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td><code>btn-success</code></td>
                                <td>
                                    <button class="btn-success btn-base">
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-success btn-base"
                                        disabled
                                    >
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-success btn-base"
                                        data-active="true"
                                    >
                                        Button
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td><code>btn-warning</code></td>
                                <td>
                                    <button class="btn-warning btn-base">
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-warning btn-base"
                                        disabled
                                    >
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-warning btn-base"
                                        data-active="true"
                                    >
                                        Button
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td><code>btn-danger</code></td>
                                <td>
                                    <button class="btn-danger btn-base">
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-danger btn-base"
                                        disabled
                                    >
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-danger btn-base"
                                        data-active="true"
                                    >
                                        Button
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td><code>btn-dark</code></td>
                                <td>
                                    <button class="btn-dark btn-base">
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button class="btn-dark btn-base" disabled>
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-dark btn-base"
                                        data-active="true"
                                    >
                                        Button
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td><code>btn-light</code></td>
                                <td>
                                    <button class="btn-light btn-base">
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button class="btn-light btn-base" disabled>
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-light btn-base"
                                        data-active="true"
                                    >
                                        Button
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4 class="mt-12">↔ Button Sizes</h4>
                <p>You can choose from one of these sizes provided:</p>
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr>
                                <td>Size Category</td>
                                <td>Class</td>
                                <td>Default</td>
                                <td>Disabled</td>
                                <td>Active</td>
                                <td>Specs</td>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- For button size -->
                            <tr>
                                <td rowspan="3">Button Size</td>
                                <td><code>btn-sm</code></td>
                                <td>
                                    <button class="btn-primary btn-sm">
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button class="btn-primary btn-sm" disabled>
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-primary btn-sm"
                                        data-active="true"
                                    >
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <p><code>border-radius: 0.25rem</code></p>
                                    <p><code>padding: 0.5rem 1rem</code></p>
                                    <p><code>font-size: 0.875rem</code></p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>btn-base</code></td>
                                <td>
                                    <button class="btn-primary btn-base">
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-primary btn-base"
                                        disabled
                                    >
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-primary btn-base"
                                        data-active="true"
                                    >
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <p><code>border-radius: 0.25rem</code></p>
                                    <p><code>padding: 0.5rem 1.5rem</code></p>
                                    <p><code>font-size: 1rem</code></p>
                                </td>
                            </tr>
                            <tr>
                                <td><code>btn-lg</code></td>
                                <td>
                                    <button class="btn-primary btn-lg">
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button class="btn-primary btn-lg" disabled>
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <button
                                        class="btn-primary btn-lg"
                                        data-active="true"
                                    >
                                        Button
                                    </button>
                                </td>
                                <td>
                                    <p><code>border-radius: 0.25rem</code></p>
                                    <p><code>padding: 0.5rem 2rem</code></p>
                                    <p><code>font-size: 1.125rem</code></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </card>
        </section>
    </layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "@/components/layouts/Default.vue";
import Card from "@/components/containers/Card.vue";

export default defineComponent({
    name: "About",
    components: {
        Layout,
        Card,
    },
    setup() {
        return {};
    },
});
</script>

<style scoped lang="pcss">
ul {
    @apply list-disc list-inside;
}

code {
    @apply px-1 py-0.5 text-sm bg-light-50 rounded-sm;
}
</style>
