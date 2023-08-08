<script setup lang="ts">
const dayjs = useDayjs();

const { data: articles } = await useLazyAsyncData(() =>
  queryContent().sort({ created: -1 }).find()
);
</script>

<template>
  <main>
    <MaxWidthContainer>
      <ul class="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 py-10">
        <li v-for="article in articles">
          <NuxtLink :to="article._path" class="block hover:no-underline group">
            <h3
              class="text-xl text-gray-900 font-bold leading-tight pb-2 group-hover:underline tracking-[-0.01em]"
            >
              {{ article.title }}
            </h3>

            <p class="line-clamp-3 text-gray-600/90 font-medium">
              {{ article.description }}
            </p>

            <div class="flex items-center justify-between gap-1.5 pt-1">
              <time
                :datetime="dayjs(article.created).utc().toString()"
                class="text-gray-900 font-medium"
              >
                {{ dayjs(article.created).format("YYYY년 M월 D일") }}
              </time>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </MaxWidthContainer>
  </main>
</template>
