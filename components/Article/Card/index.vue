<script setup lang="ts">
import dayjs from "dayjs";

type PropsType = {
  path: string;
  title: string;
  description: string;
  created: string;
  category: string;
};
const props = defineProps<PropsType>();
</script>

<template>
  <li>
    <NuxtLink :to="props.path">
      <h2 class="pt-1 pb-1.5 text-lg font-semibold leading-tight text-gray-900">
        {{ props.title }}
      </h2>
      <p class="line-clamp-3 text-gray-500">
        {{ props.description }}
      </p>
      <div class="flex items-center gap-1">
        <span :datetime="props.created" class="pt-1">
          {{ dayjs(props.created).format("YYYY년 M월 D일") }}
        </span>
        <span>·</span>
        <span class="uppercase">{{ props.category }}</span>
      </div>
    </NuxtLink>
  </li>
</template>
