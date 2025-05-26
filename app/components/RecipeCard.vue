<template>
    <div class="flex flex-col shadow rounded-md">
        <NuxtImg :src="recipe.image" sizes="xs:100vw sm:50vw lg:400px" format="webp" densities="x1"
            alt="picture-makanan" />
        <div class="flex flex-col py-6 px-4 flex-1">
            <p class="text-xl lg:text-2xl font-semibold mb-2">
                {{ recipe.name }}
            </p>
            <div class="font-normal w-full bg-white/80 flex gap-8 text-lg lg:text-xl mb-4 mt-auto">
                <div class="flex items-center gap-1">
                    <Icon name="svg-spinners:clock" class="text-green-500"></Icon>
                    <span>{{ recipe.cookTimeMinutes }}</span>
                </div>
                <div class="items-center gap-1">
                    <Icon name="mdi:fire" class="text-green-500" />
                    <span>{{ recipe.caloriesPerServing }}</span>
                </div>
                <div class="items-center gap-1">
                    <Icon name="mdi:star" class="text-green-500" />
                    <span>{{ recipe.rating }} ({{ recipe.reviewCount }})</span>
                </div>
            </div>
            <BaseBtn :to="`/recipes/${recipe.id}`" label="Lihat Resep"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { type Recipe } from "../../types/types";

defineProps<{
    recipe: Recipe
}>()
</script>