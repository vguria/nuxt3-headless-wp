<template>
  <div class="flex rounded-lg bg-gray-200 mx-4 px-2 py-2 border border-gray-400
  ">
    <NuxtImg :src="profilePicture" :alt="name" class="rounded-full size-16 object-cover border-4" />
    <div class="p-2">
      <h4 class="text-lg font-semibold text-left">
        {{ computedName }}
      </h4>
      <p class="text-sm">
        {{ computedDesc }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
  profilePicture: String,
})
const computedName = computed(() => {
  const [computedProp] = props.name.split(',')
  return computedProp
})
const computedDesc = computed(() => {
  let [computedProp] = props.name.split(',').slice(1).flat()
  if (computedProp) {
    computedProp = computedProp.charAt(0).toUpperCase() + computedProp.slice(1);
  }
  return computedProp
})
</script>