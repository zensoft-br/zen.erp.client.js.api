# @zensoftbr/zenerpclient

Este projeto visa desenvolver um software cliente inovador, projetado para integrar-se perfeitamente com o sistema de gestão Zen Erp. Nosso objetivo é oferecer uma solução que não apenas melhore a eficiência operacional, mas também enriqueça a experiência dos desenvolvedores através de funcionalidades intuitivas e personalizadas. Ideal para desenvolvedores que desejam explorar novas possibilidades e criar soluções impactantes no ecossistema Zen Erp.

## Instalação

```bash
npm install @zensoftbr/zenerpclient
```

## jsconfig.json

Pode ser necessário configurar o arquivo `jsconfig.json` para que o intellisense do VS Code funcione corretamente.

```json
{
  "compilerOptions": {
    "module": "NodeNext"
  }
}
```

## Importação

Os componentes devem ser importados individualmente, possibilitando a realização de tree-shaking no projeto.

```js
import { connect } from "@zensoftbr/zenerpclient";
import { PersonService } from "@zensoftbr/zenerpclient/api/catalog/person/PersonService";

const z = await connect("tenant", "user", "password", {
  locale: "pt-BR",
  timeZone: "America/Sao_Paulo",
});

const personService = new PersonService(z);
const person = await personService.personReadById(1001);
```

Também é possível importar o bundle completo em uma variável e utilizar esta variável para acessar os componentes.

```js
import * as Z from "@zensoftbr/zenerpclient";

const z = await Z.connect("tenant", "user", "password", {
  locale: "pt-BR",
  timeZone: "America/Sao_Paulo",
});

const personService = new Z.api.catalog.person.PersonService(z);
const person = await personService.personReadById(1001);
```

> **Atenção**
>
> Independentemente do formato utilizado, procure manter um padrão de uso no projeto para facilitar manutenções no código.

## Conexão

### Inicializando e conectando um cliente

```js
import { connect } from "@zensoftbr/zenerpclient";

const z = await connect("tenant", "user", "password", {
  locale: "pt-BR",
  timeZone: "America/Sao_Paulo",
});

```

### Criando um cliente a partir de um token

```js
import { createFromToken } from "@zensoftbr/zenerpclient";

const z = createFromToken("tenant", "token");
```

## Métodos `fetch` (z.web)

Coleção de métodos otimizados para interação direta com endpoints via solicitações fetch.

### Fetch de blob

```js
const blob = await z.web.fetchBlob("/catalog/category");
```

### Fetch de json

```js
const json = await z.web.fetchJson("/catalog/category");
```

### Fetch de texto

```js
const text = await z.web.fetchText("/catalog/category");
```

### Fetch de response

```js
const response = await z.web.fetch("/catalog/category");
```

### Fetch de response com validação de status 

Este método lança um erro se o status for >= 300

```js
const response = await z.web.fetchOk("/catalog/category");
```

### Tratamento de response

Este método lança um erro se o status for >= 300

```js
const response = await z.web.fetch("/catalog/category");
await z.web.handleResponse(response);
```

## Encapsulamento de API (z.api)

Coleção de objetos que representam a estrutura da API e podem ser utilizados para acessar a API de forma mais simplificada e orientada a objetos.

### Chamando métodos da API

As classes de serviços devem ser instanciadas com uma instância do cliente como argumento do construtor.

```js
import { CatalogService } from "@zensoftbr/zenerpclient/api/catalog/CatalogService";

const catalogService = new CatalogService(z);
```

```js
import { CatalogService } from "@zensoftbr/zenerpclient/api/catalog/CatalogService";
import { Category } from "@zensoftbr/zenerpclient/api/catalog/Category";

const catalogService = new CatalogService(z);

let category = new Category();
category.code = "TOOLS";
category.description = "Tools";

category = await catalogService.categoryCreate(category);
```

```js
import { SaleService } from "@zensoftbr/zenerpclient/api/sale/SaleService";

const saleService = SaleService(z);

let sale;

sale = await saleService.saleOpPrepare(1001);
sale = await saleService.saleOpApprove(1001);
```

## Internacionalização (z.i18n)

Conjunto avançado de funções especializadas na tradução de textos e na formatação de datas, horas e números de acordo com a nacionalidade e localização do operador.

### Traduzindo chaves de recursos

```js
const i18n = await z.i18n; // primeira chamada retorna uma promise, próximas chamadas retornam um objeto

i18n.getResource("@@:/@word/yes"); // retorna "Sim" para "pt-BR", "Yes" para "en-US"
i18n.format("@@:/catalog/category/error/notFound", "ACESSORIOS"); // retorna "Categoria ACESSORIOS não encontrada" para "pt-BR"
```

### Formatando dados

```js
i18n.formatDate("2024-01-31"); // retorna "31/01/2024" para "pt-BR"
i18n.formatDate(new Date("2024-01-31")); // retorna "31/01/2024" para "pt-BR"
i18n.formatNumber(1000.12345, { digits: 2 }); // retorna "1.000,12" para "pt-BR"
i18n.formatNumber(1000.12345, { minDigits: 2, maxDigits: 4 }); // retorna "1.000,1234" para "pt-BR"
```
