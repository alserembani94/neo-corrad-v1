<template>
    <layout>
        <section class="flex flex-col gap-2">
            <h1>Inputs</h1>
        </section>
        <section class="flex flex-col gap-8">
            <card title="Introduction">
                <p>
                    Input is one of the crucial element in a web app. A more
                    intuitive input will ease user experience.
                </p>
            </card>
            <card title="Sample: Side Label">
                <c-input id="test-input-1" label-position="side" label="Name" />
                <c-input
                    id="test-input-2"
                    label-position="side"
                    label="Mother's name"
                    placeholder="Can I be placeholder?"
                />
                <c-input
                    id="test-input-3"
                    label-position="side"
                    label="Father's name"
                    default-value="This is default value"
                />
            </card>
            <card title="Sample: Top Label">
                <c-input id="test-input-1" label-position="top" label="Name" />
                <c-input
                    id="test-input-2"
                    label-position="top"
                    label="Mother's name"
                    placeholder="Can I be placeholder?"
                />
                <c-input
                    id="test-input-3"
                    label-position="top"
                    label="Father's name"
                    default-value="This is default value"
                />
            </card>
            <card title="Sample: Float Label">
                <c-input
                    id="test-input-1"
                    label-position="float"
                    label="Name"
                />
                <c-input
                    id="test-input-2"
                    label-position="float"
                    label="Mother's name"
                    placeholder="Can I be placeholder?"
                />
                <c-input
                    id="test-input-3"
                    label-position="float"
                    label="Father's name"
                    default-value="This is default value, try delete this input to make it submerge again!"
                />
            </card>
            <card title="Sample: Float Label (with grid)">
                <div class="grid grid-cols-2 gap-x-16 gap-y-4">
                    <c-input
                        id="test-input-1"
                        label-position="float"
                        label="Name"
                    />
                    <c-input
                        id="test-input-2"
                        label-position="float"
                        label="Mother's name"
                        placeholder="Can I be placeholder?"
                    />
                    <c-input
                        id="test-input-3"
                        label-position="float"
                        label="Father's name"
                        default-value="This is default value."
                    />
                    <c-input
                        id="test-input-3"
                        label-position="float"
                        label="Father's name"
                        default-value="This is default value."
                    />
                </div>
            </card>
            <card
                title="Sample: Error simulator"
                subtitle="These inputs should be email, try to input an invalid email format"
            >
                <c-input
                    id="test-input-1"
                    label-position="float"
                    label="Email"
                    type="email"
                />
                <c-input
                    id="test-input-1"
                    label-position="float"
                    label="Email"
                    type="email"
                />
                <c-input
                    id="test-input-2"
                    label-position="float"
                    label="Mother's email"
                    placeholder="Can I be placeholder?"
                    type="email"
                />
                <c-input
                    id="test-input-3"
                    label-position="float"
                    label="Father's email"
                    default-value="abc@gmail.com"
                    type="email"
                />
            </card>
        </section>
    </layout>
</template>

<script setup lang="ts">
import Layout from "@/components/layouts/Default.vue";
import Card from "@/components/containers/Card.vue";
import CInput from "@/components/forms/Input.vue";
</script>
