```
npm install @zensoft-br/zenclient
```

## Usage

### Creating a client using a new connection (generates a new token)

```js
const zenClient = await ZenClient.login("tenant_or_host", "user", "password",
  {
    "locale": "pt-BR",
    "timeZone": "America/Sao_Paulo",
  },
);

```

### Creating a client using an existing token

```js
const zenClient = ZenClient.createFromToken("tenant_or_host", "token");
```

### Fetching json

```js
const json = await zenClient.web.fetchJson("/catalog/category");
```

### Fetching text

```js
const text = await zenClient.web.fetchText("/catalog/category");
```

### Fetching response

```js
const response = await zenClient.web.fetch("/catalog/category");
```

### Fetching from api

```js
const categoryList = await zenClient.api.catalog.categoryRead("q=id==1001");
```
