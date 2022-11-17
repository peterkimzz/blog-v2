<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  meta: [
    { name: "robots", content: "index, follow" },
    {
      name: "viewport",
      content:
        "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no",
    },
  ],
  link: [
    {
      as: "style",
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable.css",
    },
    // {
    //   rel: "icon",
    //   href: "https://ocisyojqcaxdfjragftg.supabase.co/storage/v1/object/public/public/favicon.svg",
    // },
  ],
  script: [],
});
</script>
