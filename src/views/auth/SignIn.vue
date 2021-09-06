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
                autocomplete="password"
                id="password"
                label="Password"
                label-position="top"
            />
            <button
                class="btn-base btn-primary w-full mt-8"
                @click="$router.push('/')"
            >
                Sign In
            </button>
        </div>
    </Layout>
</template>

<script setup lang="ts">
import Layout from "@/components/layouts/Card.vue";
import Input from "@/components/forms/Input.vue";
</script>
