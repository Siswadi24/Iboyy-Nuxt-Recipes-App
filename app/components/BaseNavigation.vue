<template>
    <div>
        <header class="py-4 border-b">
            <nav class="flex container items-center">
                <NuxtLink to="/" class="flex gap-1 items-center">
                    <NuxtImg width="56px" class="w-14" src="/icon-green.png" format="webp" alt="" />
                    <span class="text-3xl font-bold">IboyyNuxtCipes</span>
                </NuxtLink>
                <ul class="flex gap-6 ml-auto text-xl font-bold capitalize">
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
</template>

<script setup lang="ts">
</script>
