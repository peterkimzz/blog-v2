<script lang="ts" setup>
import dayjs from "dayjs";
import { Articles } from "~~/types/content";

const { data: articles, pending } = await useLazyAsyncData(() => {
  return queryContent<Articles>().sort({ created: -1 }).find();
});
</script>

<template>
  <div>
    <main>
      <Container class="max-w-full">
        <ul v-if="!pending" class="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          <li v-for="article in articles">
            <NuxtLink :to="article._path">
              <h2
                class="pt-1 pb-1.5 text-lg font-semibold leading-tight text-gray-900"
              >
                {{ article.title }}
              </h2>
              <p class="line-clamp-3 text-gray-500">
                {{ article.description }}
              </p>
              <div class="flex items-center gap-1">
                <span :datetime="article.created" class="pt-1">
                  {{ dayjs(article.created).format("YYYY년 M월 D일") }}
                </span>
                <span>·</span>
                <span class="uppercase">{{ article.category }}</span>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </Container>
    </main>
  </div>
</template>
