<script lang="ts" setup>
import dayjs from "dayjs";
import Prism from "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import { Article } from "~~/types/content";

useHead({
  script: [
    {
      src: "https://giscus.app/client.js",
      crossorigin: "anonymous",
      async: true,
      "data-repo": "peterkimzz/blog",
      "data-repo-id": "MDEwOlJlcG9zaXRvcnkzMjAyNTkyMTY=",
      "data-category": "Blog Comments",
      "data-category-id": "DIC_kwDOExbEkM4B-8Mf",
      "data-mapping": "title",
      "data-reactions-enabled": 1,
      "data-emit-metadata": 0,
      "data-theme": "light",
      "data-lang": "ko",
    },
  ],
});
const route = useRoute();

onMounted(() => {
  Prism.highlightAll();
});

// const {
//   data: article,
//   pending,
//   error,
// } = useLazyAsyncData(() => {
//   return queryContent<Article>(route.path).findOne();
// });

const { data, pending, error } = await useAsyncData(
  `content-${route.path}`,
  async () => {
    // fetch document where the document path matches with the cuurent route
    let article = queryContent().where({ _path: route.path }).findOne();

    // get the surround information,
    // which is an array of documeents that come before and after the current document
    let surround = queryContent()
      .only(["_path", "title", "description"])
      .sort({ created: -1 })
      .findSurround(route.path);
    return {
      article: await article,
      surround: await surround,
    };
  }
);
</script>

<template>
  <div>
    <div v-if="pending">Loading..</div>
    <template v-else>
      <template v-if="error">Error</template>
      <template v-else>
        <header class="py-6 text-center">
          <Container>
            <time
              :datetime="data?.article?.created"
              class="block pb-2 text-gray-500"
            >
              {{ dayjs(data?.article?.created).format("YYYY년 M월 D일") }}
            </time>
            <h1 class="text-xl font-bold text-gray-900">
              {{ data?.article?.title }}
            </h1>
          </Container>
        </header>

        <section>
          <Toc :links="data?.article.body.toc.links" />
        </section>

        <!-- <div>
          {{ Object.keys(article) }}
        </div>
        <div>{{ article.body }}</div> -->

        <main>
          <Container>
            <article
              class="prose-md sm:prose-lg prose prose-img:mx-auto prose-a:underline-offset-2 prose-headings:no-underline mx-auto py-6"
            >
              <ContentDoc />
            </article>
          </Container>
        </main>

        <section class="py-6">
          <Container>
            {{ data?.surround }}
          </Container>
        </section>

        <section>
          <Container>
            <div class="giscus border-t py-6"></div>
          </Container>
        </section>
      </template>
    </template>
  </div>
</template>

<style></style>
