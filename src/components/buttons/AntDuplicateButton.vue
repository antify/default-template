<script lang="ts" setup>
import AntActionButton from './AntActionButton.vue';
import {
  Position, Size, Grouped, State,
} from '@antify/ui';
import {
  faCopy,
} from '@fortawesome/free-solid-svg-icons';

defineEmits([
  'click',
  'blur',
]);
withDefaults(defineProps<{
  iconVariant?: boolean;
  size?: Size;
  disabled?: boolean;
  grouped?: Grouped;
  skeleton?: boolean;
  expanded?: boolean;
  canDuplicate?: boolean;
  tooltipPosition?: Position;
}>(), {
  iconVariant: false,
  canDuplicate: true,
});
</script>

<template>
  <AntActionButton
    :filled="false"
    :state="State.base"
    :size="size"
    :disabled="disabled"
    :icon-left="iconVariant ? faCopy : undefined"
    :grouped="grouped"
    :skeleton="skeleton"
    :expanded="expanded"
    :has-permission="canDuplicate"
    :tooltip-position="tooltipPosition"
    data-e2e="duplicate-button"
    @click="$emit('click')"
    @blur="$emit('blur')"
  >
    <template
      v-if="!iconVariant"
      #default
    >
      Duplizieren
    </template>

    <template #invalidPermissionTooltipContent>
      <div>
        Du hast keine Berechtigung um Einträge zu duplizieren.<br> Bitte kontaktiere deinen Administrator
      </div>
    </template>
  </AntActionButton>
</template>
