# @zensoft-br/zenclient

Este projeto visa desenvolver um software cliente inovador, desenhado para integrar-se perfeitamente com o sistema de gestão Zen ERP. Nosso objetivo é oferecer uma solução que não apenas melhore a eficiência operacional, mas também enriqueça a experiência dos desenvolvedores através de funcionalidades intuitivas e personalizadas. Ideal para desenvolvedores que desejam explorar novas possibilidades e criar soluções impactantes no ecossistema Zen ERP.

## Install

```js
npm install @zensoft-br/zenclient
```

## Import

```js
import ZenClient from "@zensoft-br/zenclient";
```

## Connect

### Creating a client using a new connection (generates a new token)

```js
const client = await ZenClient.connect("tenant_or_host", "user", "password",
  {
    "locale": "pt-BR",
    "timeZone": "America/Sao_Paulo",
  },
);

```

### Creating a client using an existing token

```js
const client = ZenClient.createFromToken("tenant_or_host", "token");
```

## Fetch methods (client.web)

Coleção de métodos otimizados para interação direta com endpoints via solicitações fetch.

### Fetching blob

```js
const blob = await client.web.fetchBlob("/catalog/category");
```

### Fetching json

```js
const json = await client.web.fetchJson("/catalog/category");
```

### Fetching text

```js
const text = await client.web.fetchText("/catalog/category");
```

### Fetching response

```js
const response = await client.web.fetch("/catalog/category");
```

### Fetching response and validating status (throw error if status >= 300)

```js
const response = await client.web.fetchOk("/catalog/category");
```

### Handling response (throw error if status >= 300)

```js
const response = await client.web.fetch("/catalog/category");
await client.web.handleResponse(response);
```

## API wrappers (client.api)

Coleção de objetos que representam a estrutura da API e podem ser utilizados para acessar a API de forma mais simplificada e orientada a objetos.

### Calling api methods (not fully implemented)

```js
const categoryList = await client.api.catalog.categoryRead("q=id==1001");
```

## Internationalization (client.i18n)

Conjunto avançado de funções especializadas na tradução de textos e na formatação de datas e números de acordo com a localização do operador.

### Fetching resources

```js
const i18n = await client.i18n; // first call returns a promise, next calls returns an object

i18n.getResource("@@:/@word/yes"); // returns "Sim" for "pt-BR"
i18n.format("@@:/catalog/category/error/notFound", "TOYS"); // returns "Categoria TOYS não encontrada" for "pt-BR"
i18n.formatDate("2000-01-31"); // returns "31/01/2024" for "pt-BR"
i18n.formatDate(new Date("2000-01-31")); // returns "31/01/2024" for "pt-BR"
i18n.formatNumber(1000.12345, { digits: 2 }); // returns "1.000,12" for "pt-BR"
i18n.formatNumber(1000.12345, { minDigits: 2, maxDigits: 4 }); // returns "1.000,1234" for "pt-BR"
```
