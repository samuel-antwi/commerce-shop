<script setup lang="ts">
  import { v4 as uuid } from "uuid"

  const navLinks = [
    { id: uuid(), link: "my-details" },
    { id: uuid(), link: "orders" },
    { id: uuid(), link: "address" },
    { id: uuid(), link: "payment-methods" },
    { id: uuid(), link: "orders" },
  ]
</script>

<template>
  <div>
    <h1>hello</h1>
  </div>
</template>
