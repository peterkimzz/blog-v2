<script setup lang="ts">
defineProps(["links"]);

const flattenLinks = (links) => {
  let _links = links
    .map((link) => {
      let _link = [link];
      if (link.children) {
        // recursively flatten children links
        let flattened = flattenLinks(link.children);
        _link = [link, ...flattened];
      }
      return _link;
    })
    .flat(1);
  return _links;
};
</script>

<template>
  <nav>
    <header>
      <h3 class="text-lg font-bold">목차</h3>
    </header>
    <ul class="py-1">
      <li v-for="link of flattenLinks(links)" :key="link.id">
        <a
          :href="`#${link.id}`"
          class="block border-l py-0.5 pl-4 hover:font-semibold"
        >
          {{ link.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>
