```
npm install @zensoft-br/zenclient
```

## Usage

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

### Fetching from api

```js
const categoryList = await client.api.catalog.categoryRead("q=id==1001");
```
