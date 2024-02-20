# @zensoft-br/zenclient

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

## client.web - Fetch methods

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

## client.api - API wrapper

### Calling api methods (not fully implemented)

```js
const categoryList = await client.api.catalog.categoryRead("q=id==1001");
```

## client.i18n - Internationalization

### Fetching resources

```js
client.i18n.getResource("@@:/@word/yes");
client.i18n.format("@@:/catalog/category/error/notFound", "category");
client.i18n.formatDate("2000-01-31");
client.i18n.formatDate(new Date("2000-01-31"));
client.i18n.formatNumber(1000, { digits: 2 });
client.i18n.formatNumber(1000, { minDigits: 2, maxDigits: 4 });
```
