<template>
    <Layout class="bg-primary-500">
        <div class="flex flex-col items-center text-center gap-4">
            <div class="h-10 w-40 object-contain mb-8">
                <img src="@/assets/logo/logo-corrad.svg" alt="Corrad" />
            </div>
            <h1>Sign In</h1>
            <p class="text-dark-400">Please sign in to continue</p>
            <Input
                id="email"
                type="email"
                autocomplete="email"
                label="Email"
                label-position="top"
            />
            <Input
                type="password"
                autocomplete="new-password"
                id="new-password"
                label="Password"
                label-position="top"
                v-model="password.new"
            />
            <Input
                type="password"
                autocomplete="new-password"
                id="confirm-new-password"
                label="Confirm Password"
                label-position="top"
            />
            <button
                class="btn-base btn-primary w-full mt-8"
                @click="$router.push('/')"
            >
                Sign In
            </button>
            <p>{{ validator.level.toString() }}</p>
        </div>
    </Layout>
</template>

<script setup lang="ts">
import Layout from "@/components/layouts/Card.vue";
import Input from "@/components/forms/Input.vue";
import { reactive, watchEffect, computed } from "vue";
import usePasswordScore from "@/hooks/usePasswordScore";

type Password = {
    new: string;
    confirm: string;
};

const password = reactive<Password>({
    new: "",
    confirm: "",
});

const validator = computed(() => usePasswordScore(password.new));

// const handleUpdate = (newValue: string) => {
//     console.log(newValue);
// };
</script>
