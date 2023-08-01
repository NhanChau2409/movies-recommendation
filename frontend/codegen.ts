import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:4000/',
  documents: ['src/**/*.tsx', 'src/**/*.ts'],
  generates: {
    './src/types/gql/__generated__/': {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      }
    }
  },

};

export default config;