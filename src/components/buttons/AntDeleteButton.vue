<script lang="ts" setup>
import AntActionButton from './AntActionButton.vue';
import {
  Position, Size, Grouped, State,
} from '@antify/ui';
import {
  faTrash,
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
  canDelete?: boolean;
  tooltipPosition?: Position;
}>(), {
  iconVariant: false,
  canDelete: true,
});
</script>

<template>
  <AntActionButton
    :filled="false"
    :state="State.danger"
    :size="size"
    :disabled="disabled"
    :icon-left="iconVariant ? faTrash : undefined"
    :grouped="grouped"
    :skeleton="skeleton"
    :expanded="expanded"
    :has-permission="canDelete"
    :tooltip-position="tooltipPosition"
    data-e2e="delete-button"
    @click="$emit('click')"
    @blur="$emit('blur')"
  >
    <template
      v-if="!iconVariant"
      #default
    >
      Löschen
    </template>

    <template #invalidPermissionTooltipContent>
      <div>
        Du hast keine Berechtigung um Einträge zu erstellen.<br> Bitte kontaktiere deinen Administrator
      </div>
    </template>
  </AntActionButton>
</template>
