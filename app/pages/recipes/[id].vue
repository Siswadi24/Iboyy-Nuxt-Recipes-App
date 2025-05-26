<script setup lang="ts">
import { type Recipe } from "../../../types/types";
const { id } = useRoute().params;

const { data, error } = useFetch<Recipe>(`https://dummyjson.com/recipes/${id}`);

if (error.value) {
    throw createError({
        status: error.value?.statusCode,
        statusText: error.value?.statusMessage,
    });
}

useSeoMeta({
    title: data.value?.name,
    description: "Recipes for you to cook!",
    ogTitle: data.value?.name,
    ogDescription: "Recipes for you to cook!",
    ogImage: data.value?.image,
    ogUrl: `http:localhost:3001/recipes/${data.value?.id}`,
    twitterTitle: data.value?.name,
    twitterDescription: "Recipes for you to cook!",
    twitterImage: data.value?.image,
    twitterCard: "summary",
});
</script>

<template>
    <div class="flex flex-col max-w-screen-lg container py-20">
        <!-- Header -->
        <div class="flex flex-col mb-6">
            <h2 class="text-5xl mb-4 font-semibold">{{ data?.name }}</h2>
            <div class="flex gap-4 text-xl mb-6">
                <div class="flex items-center gap-1">
                    <Icon name="svg-spinners:clock" class="text-green-500"></Icon>
                    <span>{{ data?.cookTimeMinutes }}</span>
                </div>
                <div class="flex items-center gap-1">
                    <Icon name="mdi:fire" class="text-green-500"></Icon>
                    <span>{{ data?.caloriesPerServing }}</span>
                </div>
                <div class="flex items-center gap-1">
                    <Icon name="mdi:star" class="text-green-500"></Icon>
                    <span>{{ data?.rating }} ({{ data?.reviewCount }})</span>
                </div>
            </div>
            <hr />
        </div>

        <!--Image  -->
        <NuxtImg :src="data?.image" densities="x1" sizes="xs:100vw sm:100vw md:100vw lg:100vw"
            class="w-full max-h-[500px] object-cover rounded-md shadow-sm mb-12" alt="" />

        <!-- Ingredients -->
        <div class="mb-8">
            <h2 class="text-3xl font-semibold mb-4">Bahan</h2>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-lg">
                <li v-for="ingredient in data?.ingredients" :key="ingredient">
                    <label class="flex gap-2 items-center">
                        <input class="hidden peer" type="checkbox" />
                        <div
                            class="relative w-6 h-6 rounded-full border-2 border-dodgeroll-gold flex items-center justify-center peer-checked:after:absolute peer-checked:after:w-4 peer-checked:after:h-4 peer-checked:after:bg-dodgeroll-gold peer-checked:after:rounded-full">
                        </div>
                        <span class="peer-checked:line-through">
                            {{ ingredient }}
                        </span>
                    </label>
                </li>
            </ul>

        </div>

        <!-- Instructions -->
        <div>
            <h2 class="text-3xl font-medium mb-2">Cara Membuat</h2>
            <ul class="flex flex-col text-lg gap-4">
                <li v-for="(instruction, index) in data?.instructions" :key="instruction" class="flex gap-2">
                    <span
                        class="flex items-center justify-center bg-dodgeroll-gold w-7 h-7 rounded-full text-white text-sm">
                        {{ index + 1 }}
                    </span>
                    <span class="flex-1">{{ instruction }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
