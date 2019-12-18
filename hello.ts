import {parse} from '@babel/parser'

let code = `
class Hello {
  @debug()
  hello(name) {
    console.log(\`Hello, \${name}!\`)
  }
}
`;

const ast = parse(code, {
    plugins: [
      ['decorators', {decoratorsBeforeExport: false}],
    ]
  }
);

console.log(JSON.stringify(ast, null, 4))
