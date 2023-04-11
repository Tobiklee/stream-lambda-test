const { awscdk } = require('projen');

const tsconfig = {
  compilerOptions: {
    lib: [
      'es2019',
      'dom',
    ],
  },
};

const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'stream-lambda-test',
  tsconfig,
  tsconfigDev: tsconfig,
  jest: false,
  deps: [
    'aws-cdk-lib',
    'aws-lambda',
    'axios',
    'ts-jest',
  ], /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();