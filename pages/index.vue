<script lang="ts" setup>
import { Articles } from "~~/types/content";

const { data: articles, pending } = await useLazyAsyncData(() => {
  return queryContent<Articles>().sort({ created: -1 }).find();
});
</script>

<template>
  <main class="py-6">
    <Container class="!max-w-full">
      <ul v-if="!pending" class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <ArticleCard
          v-for="article in articles"
          :key="article._path"
          :path="article._path || '#'"
          :title="article.title || 'Title'"
          :description="article.description"
          :category="article.category || 'Category'"
          :created="article.created || 'date'"
        />
      </ul>
    </Container>
  </main>
</template>
