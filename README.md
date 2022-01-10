# What this does

This is a test project to see if we can import an esm module and regular js
module with ts-node.

# How to use it

```
npm install
npm start -- -f test.md -o test.html
```

# Sources

## How to generate html from remark

https://www.npmjs.com/package/remark-html

## How to run an esm from ts-node

https://stackoverflow.com/questions/67600063/how-to-use-ts-node-esm-with-node-modules

I copied tsconfig.json and the following line from the above link:

```
  "start": "node --experimental-specifier-resolution=node --experimental-modules --no-warnings --loader ts-node/esm ./src/main.ts"
```
