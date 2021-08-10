<template>
    <layout>
        <section class="section">
            <p>Main is it?</p>
            <!-- <card title="Section Title">
                <p>Hello New Corrad!</p>
            </card> -->
        </section>
        <section class="section">
            <p>Components</p>
            <h1>Header 1</h1>
            <h2>Header 2</h2>
            <h3>Header 3</h3>
            <h4>Header 4</h4>
            <h5>Header 5</h5>
            <h6>Header 6</h6>
            <ol>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
            </ol>

            <input placeholder="Hello Test" />
            <div class="flex flex-col gap-4 items-start">
                <button class="btn btn-primary">Holla</button>
                <button class="btn btn-secondary">Holla</button>
                <button class="btn btn-info">Holla</button>
                <button class="btn btn-success">Holla</button>
                <button class="btn btn-warning">Holla</button>
                <button class="btn btn-danger">Holla</button>
                <button class="btn btn-light">Holla</button>
                <button class="btn btn-dark">Holla</button>
            </div>
            <!-- <card title="Buttons">
                <button class="solid_primary">Primary</button>
                <button class="solid_secondary">Secondary</button>
                <button class="solid_info">Info</button>
                <button class="solid_success">Success</button>
                <button class="solid_warning">Warning</button>
                <button class="solid_danger">Danger</button>
                <button class="solid_light">Light</button>
                <button class="solid_dark">Dark</button>
            </card> -->
        </section>
    </layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "@/components/layouts/Default.vue";

export default defineComponent({
    name: "Home",
    components: {
        Layout,
    },
});
</script>
