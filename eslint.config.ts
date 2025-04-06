import antfu from '@antfu/eslint-config'

import { createConfigForNuxt } from '@nuxt/eslint-config'

export default createConfigForNuxt({ features: { standalone: false } })
  .append(antfu({ formatters: true, stylistic: true, typescript: true }))
// @ts-expect-error: типы кривые, так что без них
  .append(import('eslint-plugin-tailwindcss').then(m => m.default.configs['flat/recommended']))
  .append(
    {
      name: 'project/vue',
      rules: {
        'vue/multi-word-component-names': 'off',
      },
    },
  )
