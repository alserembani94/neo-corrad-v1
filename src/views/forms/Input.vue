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

                <div class="max-w-3xl">
                    <code-highlight languange="typescript">
                        {{ codeSample.importInput }}
                    </code-highlight>
                </div>

                <p>
                    Note that <code>c-input</code> is used instead of native
                    input for for microinteraction control.
                </p>
            </card>
            <card title="Props">
                <p>
                    Here are the list of acceptable props for
                    <code>CInput</code> component:
                </p>

                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr>
                                <td>Props</td>
                                <td>Type</td>
                                <td>Default value</td>
                                <td>Required</td>
                                <td>Notes</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>id</code></td>
                                <td><code>string</code></td>
                                <td></td>
                                <td><code>true</code></td>
                                <td>For render optimization</td>
                            </tr>
                            <tr>
                                <td><code>label</code></td>
                                <td><code>string</code></td>
                                <td>Input label</td>
                                <td><code>false</code></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>labelPosition</code></td>
                                <td><code>string</code></td>
                                <td><code>top</code></td>
                                <td><code>false</code></td>
                                <td class="max-w-xs">
                                    Accepted values:
                                    <code>"top"</code>, <code>"side"</code>,
                                    <code>"float"</code>
                                </td>
                            </tr>
                            <tr>
                                <td><code>defaultValue</code></td>
                                <td>
                                    <code>string</code> | <code>number</code>
                                </td>
                                <td></td>
                                <td><code>false</code></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <code class="mr-1">inputValidator</code>
                                    <font-awesome-icon :icon="faFlask" />
                                </td>
                                <td><code>Function</code></td>
                                <td></td>
                                <td><code>false</code></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>placeholder</code></td>
                                <td><code>string</code></td>
                                <td></td>
                                <td><code>false</code></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>type</code></td>
                                <td><code>string</code></td>
                                <td>text</td>
                                <td><code>false</code></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>prefix</code></td>
                                <td><code>string</code></td>
                                <td></td>
                                <td><code>false</code></td>
                                <td>Appending static text in front of input</td>
                            </tr>
                            <tr>
                                <td><code>postfix</code></td>
                                <td><code>string</code></td>
                                <td></td>
                                <td><code>false</code></td>
                                <td>Appending static text after input</td>
                            </tr>
                            <tr>
                                <td><code>required</code></td>
                                <td><code>boolean</code></td>
                                <td></td>
                                <td><code>false</code></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td colspan="5">
                                    Other input props are also accepted like
                                    <code>min</code>, <code>max</code>,
                                    <code>minlength</code>, etc.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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
                    :required="true"
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
            <card title="Sample: Prefixes and Postfixes">
                <c-input
                    id="test-input-1"
                    label-position="float"
                    label="Price (with prefix)"
                    type="number"
                    min="1"
                    prefix="MYR"
                    minlength="10"
                />
                <c-input
                    id="test-input-1"
                    label-position="float"
                    label="Email (with postfix)"
                    postfix="@corrad.com"
                    minlength="5"
                />
                <c-input
                    id="test-input-1"
                    label-position="float"
                    label="Email (with prefix &amp; postfix)"
                    prefix="user."
                    postfix="@corrad.com"
                    minlength="5"
                />
            </card>
        </section>
    </layout>
</template>

<script setup lang="ts">
import Layout from "@/components/layouts/Default.vue";
import Card from "@/components/containers/Card.vue";
import CInput from "@/components/forms/Input.vue";
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/duotone-sea.css";
import "vue-code-highlight/themes/window.css";
import { faFlask } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const codeSample = {
    importInput: `<template>
    <c-input
        id="test-input-1"
        label-position="float"
        label="Name"
    />
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import CInput from "@/components/forms/Input.vue";
<script>`,
};
</script>
