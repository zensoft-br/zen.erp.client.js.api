https://github.com/microsoft/TypeScript/issues/56412

https://thesametech.com/how-to-build-typescript-project

## package.json

Como esta biblioteca contém apenas classes públicas de uma API, não deve exportar nada no `exports` em `package.json`. Assim, todas as classes ficam disponíveis para importação direta pelos consumidores da biblioteca.

Não funcionou, acho que terei que exportar todos os módulos assim:

Ou testar mais uma vez com esse formato, e adicionar um alias no projeto de destino

"exports": {
  ".": {
    "import": "./dist/esm/index.js"
  },
  "./api/catalog/product/product.module.ts": {
    "import": "./dist/esm/api/catalog/product/product.module.ts"
  }
}