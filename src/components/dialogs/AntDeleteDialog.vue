<script setup lang="ts">
import {
  AntDialog,
  InputState,
} from '@antify/ui';
import {
  useVModel,
} from '@vueuse/core';

const emit = defineEmits([
  'update:open',
  'close',
  'confirm',
]);
const props = defineProps<{
  open: boolean;
  entity: string;
}>();
const _open = useVModel(props, 'open', emit);
</script>

<template>
  <AntDialog
    v-model:open="_open"
    :state="InputState.danger"
    title="Löschen"
    confirm-text="Löschen"
    cancel-text="Abbrechen"
    data-e2e="delete-dialog"
    @confirm="() => $emit('confirm')"
    @close="() => $emit('close')"
  >
    <div>
      Möchtest du wirklich <span class="font-semibold">{{ entity }}</span> löschen?
    </div>
  </AntDialog>
</template>
