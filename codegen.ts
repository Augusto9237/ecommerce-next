import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://thekingtesters.saleor.cloud/graphql/',
  documents: ['./src/graphql/**/*.graphql'],
  generates: {
    './src/gql/': {
      preset: 'client',
    },
  },
};
export default config;
