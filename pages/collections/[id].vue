<script setup lang="ts">
  const route = useRoute()

  const collectionId = route.params.id

  const { data } = await useFetch(
    `http://localhost:9000/store/products?&collection_id[]=pcol_01G33P7H6B884PYZ80QMC2DERB`
  )

  console.log(data.value)
</script>

<template>
  <div class="pt-10 width-wrapper-md">
    <h1>Collection name</h1>
  </div>
</template>
