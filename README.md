# @zensoft-br/zenclient

Este projeto visa desenvolver um software cliente inovador, projetado para integrar-se perfeitamente com o sistema de gestão Zen ERP. Nosso objetivo é oferecer uma solução que não apenas melhore a eficiência operacional, mas também enriqueça a experiência dos desenvolvedores através de funcionalidades intuitivas e personalizadas. Ideal para desenvolvedores que desejam explorar novas possibilidades e criar soluções impactantes no ecossistema Zen ERP.

## Instalação

```js
npm install @zensoft-br/zenclient
```

## Importação

```js
import Zen from "@zensoft-br/zenclient";
```

## Conexão

### Inicializando e conectando um cliente

```js
const client = await Zen.connect("tenant_or_host", "user", "password",
  {
    "locale": "pt-BR",
    "timeZone": "America/Sao_Paulo",
  },
);

```

### Criando um cliente a partir de um token

```js
const client = Zen.createFromToken("tenant_or_host", "token");
```

## Métodos `fetch` (client.web)

Coleção de métodos otimizados para interação direta com endpoints via solicitações fetch.

### Fetch de blob

```js
const blob = await client.web.fetchBlob("/catalog/category");
```

### Fetch de json

```js
const json = await client.web.fetchJson("/catalog/category");
```

### Fetch de texto

```js
const text = await client.web.fetchText("/catalog/category");
```

### Fetch de response

```js
const response = await client.web.fetch("/catalog/category");
```

### Fetch de response com validação de status 

Este método lança um erro se o status for >= 300

```js
const response = await client.web.fetchOk("/catalog/category");
```

### Tratamento de response

Este método lança um erro se o status for >= 300

```js
const response = await client.web.fetch("/catalog/category");
await client.web.handleResponse(response);
```

## Encapsulamento de API (Zen.api)

Coleção de objetos que representam a estrutura da API e podem ser utilizados para acessar a API de forma mais simplificada e orientada a objetos.

### Chamando métodos da API

As classes de serviços devem ser instanciadas com uma instância do cliente como argumento do construtor.

```js
const categoryService = new Zen.api.catalog.Service(client);
```

```js
const categoryService = new Zen.api.catalog.Service(client);

let category = new Zen.api.catalog.Category();
category.code = "TOOLS";
category.description = "Tools";

category = await categoryService.categoryCreate(category);
```

```js
const saleService = new Zen.api.sale.Service(client);

let sale;

sale = await saleService.saleOpPrepare(1001);
sale = await saleService.saleOpApprove(1001);
```

## Internacionalização (client.i18n)

Conjunto avançado de funções especializadas na tradução de textos e na formatação de datas, horas e números de acordo com a nacionalidade e localização do operador.

### Traduzindo chaves de recursos

```js
const i18n = await client.i18n; // primeira chamada retorna uma promise, próximas chamadas retornam um objeto

i18n.getResource("@@:/@word/yes"); // retorna "Sim" para "pt-BR", "Yes" para "en-US"
i18n.format("@@:/catalog/category/error/notFound", "ACESSORIOS"); // retorna "Categoria ACESSORIOS não encontrada" para "pt-BR"
```

### Formatando dados

```js
i18n.formatDate("2000-01-31"); // retorna "31/01/2024" para "pt-BR"
i18n.formatDate(new Date("2000-01-31")); // retorna "31/01/2024" para "pt-BR"
i18n.formatNumber(1000.12345, { digits: 2 }); // retorna "1.000,12" para "pt-BR"
i18n.formatNumber(1000.12345, { minDigits: 2, maxDigits: 4 }); // retorna "1.000,1234" para "pt-BR"
```
