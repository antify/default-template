<script lang="ts" setup>
import {
  InputState,
  AntFormGroupLabel
} from '#default-template';
</script>

<template>
  <AntFormGroup>
    <AntFormGroupLabel>Playground</AntFormGroupLabel>

    <pre class="bg-base-200 p-4 rounded">{{ InputState }}</pre>

    <AntButton @click="$defaultTemplate.toaster.toastSuccess('Toasted')">
      Toast success message
    </AntButton>

    <div class="text-for-white-bg-font bg-custom-color p-2 rounded">
      Color Test
    </div>

    <div class=" border border-base-300 flex flex-col h-[100px]">
      <div>
        <NuxtPage />
      </div>
    </div>
  </AntFormGroup>
</template>
