<template>
    <main>
        <section class="bg-[#f1f1f1]">
            <div class="container flex flex-col lg:flex-row items-center py-20 gap-10">
                <div class="flex-1 order-2 lg:order-1 text-center lg:text-left">
                    <h1 class="text-4xl lg:text-6xl font-extrabold mb-6 text-balance">
                        Menjadi Master dalam Perdapuran dan Peresepan: Jadilah Chef Hebat
                        Dalam Keluarga Anda Sekarang!
                    </h1>
                    <p class="text-xl lg:text-2xl mb-8 text-balance">
                        Temukanlah Resep Anda di IboyyNuxtCipes dan Masaklah Makanan
                        Kesenangan Anda
                    </p>
                    <button class="px-4 py-2 text-white self-start bg-dodgeroll-gold rounded-md text-lg cursor-pointer">
                        Cari Resep
                    </button>
                </div>
                <div class="flex-1 order-1 lg:order-2">
                    <NuxtImg sizes="xs:100vm sm:667px" src="/nuxt-course-hero.png" format="webp" densities="x1"
                        alt="picture-hero-makanan" />
                </div>
            </div>
        </section>

        <section class="py-20 container">
            <h2 class="text-3xl lg:text-5xl mb-2">Tampilan, Berbagi, dan Berkolaborasi</h2>
            <p class="text-lg lg:text-xl mb-8">Mari, masaklah makanan kesenanganmu</p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
                <div v-for="recipe in data?.recipes " :key="recipe.id" class="flex flex-col shadow rounded-md">
                    <NuxtImg :src="recipe.image" sizes="xs:100vw sm:50vw lg:400px" format="webp" alt="picture-makanan" />
                    <div class="flex flex-col py-6 px-4 flex-1">
                        <p class="text-xl lg:text-2xl font-semibold mb-2">Recipe Makanan</p>
                        <div class="font-normal w-full bg-white/80 flex gap-8 text-lg lg:text-xl mb-4 mt-auto">
                            <div class="flex items-center gap-1">
                                <Icon name="mdi:clock-time-four-outline" style="color: #f79f1a"></Icon>
                                <span>Waktu</span>
                            </div>
                            <div class=" items-center gap-1">
                                <Icon name="mdi:fire" style="color: #f79f1a" />
                                <span>Kalori</span>
                            </div>
                            <div class="items-center gap-1">
                                <Icon name="mdi:star" style="color: #f79f1a" />
                                <span>Rating</span>
                            </div>
                        </div>
                        <NuxtLink
                            class="px-4 py-2 text-white self-start bg-dodgeroll-gold rounded-md text-base lg:text-lg cursor-pointer">
                            Lihat</NuxtLink>
                    </div>
                </div>
            </div>
            <p class="text-xl">Maaf, Terjadi Kesalahan Mohon Coba Kembali Nanti</p>
        </section>
    </main>
</template>

<script setup lang="ts">
import { type RecipeResponse } from '../../types/types';
const { data, error } = useFetch<RecipeResponse>('https://dummyjson.com/recipes?limit=12');
</script>
