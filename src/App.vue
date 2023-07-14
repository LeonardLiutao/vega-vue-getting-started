<template>
  <h1>Hello Vega Vue</h1>

  <VegaInputSelect
      :source="[
        { id: 'male', displayName: 'Male' },
        { id: 'female', displayName: 'Female' },
      ]"
  />
</template>

<script setup>
import {VegaInputSelect} from "@heartlandone/vega-vue";
</script>
