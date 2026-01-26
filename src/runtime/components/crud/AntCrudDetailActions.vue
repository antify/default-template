<script setup lang="ts">
import {
  AntButton,
} from '@antify/ui';
import {
  faAngleLeft,
} from '@fortawesome/free-solid-svg-icons';
import AntSaveAndNewButton from '../buttons/AntSaveAndNewButton.vue';
import AntSaveButton from '../buttons/AntSaveButton.vue';
import {
  InputState,
} from '@antify/ui';

defineEmits([
  'back',
  'save',
  'save-and-new',
]);
withDefaults(defineProps<{
  disabled?: boolean;
  skeleton?: boolean;
  canSave?: boolean;
  tooltipState?: InputState;
  saveTooltipMessage?: string;
  saveAndNewTooltipMessage?: string;
}>(), {
  disabled: false,
  skeleton: false,
  canSave: true,
});
</script>

<template>
  <div
    class="flex justify-between p-2 gap-2 bg-white"
    data-e2e="crud-detail-actions"
  >
    <div class="flex gap-2.5">
      <slot name="buttons-left">
        <AntButton
          :outlined="false"
          :filled="false"
          :icon-left="faAngleLeft"
          :disabled="disabled"
          :skeleton="skeleton"
          @click="$emit('back')"
        >
          Zurück
        </AntButton>
      </slot>
    </div>

    <div class="flex gap-2.5">
      <slot name="before-buttons-right" />
      <slot name="buttons-right">
        <AntSaveAndNewButton
          :skeleton="skeleton"
          :disabled="disabled"
          :can-save="canSave"
          :save-tooltip-message="saveTooltipMessage"
          :tooltip-state="tooltipState"
          @click="$emit('save-and-new')"
        />

        <AntSaveButton
          :skeleton="skeleton"
          :disabled="disabled"
          :can-save="canSave"
          :save-tooltip-message="saveAndNewTooltipMessage"
          :tooltip-state="tooltipState"
          @click="$emit('save')"
        />
      </slot>
      <slot name="after-buttons-right" />
    </div>
  </div>
</template>
