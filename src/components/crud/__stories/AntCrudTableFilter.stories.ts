import AntCrudTableFilter from '../AntCrudTableFilter.vue';
import {
  type Meta, type StoryObj,
} from '@storybook/vue3';
import {
  vueRouter,
} from 'storybook-vue3-router';
import {
  AntMultiSelect
} from "@antify/ui";
import {ref} from "vue";

const meta: Meta<typeof AntCrudTableFilter> = {
  title: 'Crud/Crud Table Filter',
  component: AntCrudTableFilter,
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
  argTypes: {},
  decorators: [
    vueRouter(),
  ],
};

export default meta;

type Story = StoryObj<typeof AntCrudTableFilter>;

export const Docs: Story = {
  render: (args) => ({
    components: {
      AntCrudTableFilter,
    },
    setup() {
      return {
        args,
      };
    },
    template: `
      <div class="dashed">
        <AntCrudTableFilter
          v-model:search="args.search"
          v-bind="args"
        />
      </div>
    `,
  }),
  args: {},
};

export const withDropdownContent: Story = {
  render: (args) => ({
    components: {
      AntCrudTableFilter,
      AntMultiSelect,
    },
    setup() {
      const selectValue = ref(['1'])
      const options = [
        {
          label: '1',
          value: '1',
        },
        {
          label: '2',
          value: '2',
        },
        {
          label: '3',
          value: '3',
        }
      ]

      return {
        args,
        selectValue,
        options,
      };
    },
    template: `
      <div class="dashed">
        <AntCrudTableFilter
          v-model:search="args.search"
          v-bind="args"
        >
          <template #dropdownContent>
            <AntMultiSelect v-model="selectValue" :options="options" />
          </template>
        </AntCrudTableFilter>
      </div>
    `,
  }),
  args: {},
};
