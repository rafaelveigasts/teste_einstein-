module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@modules': './src/modules',
          '@middlewares': './src/shared/infra/server/middlewares',
          '@database': './src/shared/infra/prisma',
          '@config': './src/config',
          '@infra': './src/shared/infra',
          '@shared': './src/shared',
          '@tests': './src/tests'
        },
      },
    ],
    'babel-plugin-transform-typescript-metadata',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
  ignore: ['**/*.test.ts'],
};
