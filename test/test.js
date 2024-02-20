import "dotenv/config";
import ZenClient from "../index.js";

const zenClient = ZenClient.createFromTenantAndToken(
  "teste",
  "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI3ZmExMjNmMi1mYWIzLTRhZDgtOThiZC1hZjBiMDU0MGEwMTEiLCJzdWIiOiJzdXBwb3J0QHBlcnNvbmFsc29mdC5jb20uYnIiLCJuYmYiOjE3MDg0MTUxNTYsImlhdCI6MTcwODQxNTE1NiwiZXhwIjoxNzA4NTAxNTU2LCJsb2NhbGUiOiJwdC1CUiIsInRpbWVab25lIjoiQW1lcmljYS9TYW9fUGF1bG8ifQ.61y3xLZN-srfyorcRNLGE4IITsgTr3qHsrMexlCsz9g");

// const zenClient = ZenClient.createFromHostAndToken(
//   "https://teste.zenerp.app.br:8443",
//   "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI3ZmExMjNmMi1mYWIzLTRhZDgtOThiZC1hZjBiMDU0MGEwMTEiLCJzdWIiOiJzdXBwb3J0QHBlcnNvbmFsc29mdC5jb20uYnIiLCJuYmYiOjE3MDg0MTUxNTYsImlhdCI6MTcwODQxNTE1NiwiZXhwIjoxNzA4NTAxNTU2LCJsb2NhbGUiOiJwdC1CUiIsInRpbWVab25lIjoiQW1lcmljYS9TYW9fUGF1bG8ifQ.61y3xLZN-srfyorcRNLGE4IITsgTr3qHsrMexlCsz9g");

// const zenClient = await ZenClient.loginAtTenant(
//   "teste",
//   process.env.zen_user,
//   process.env.zen_password,
//   {
//     "locale": "pt-BR",
//     "timezone": "America/Sao_Paulo",
//   },
// );

// const categoryList = await zenClient.web.fetchJson("/catalog/category");
// console.log(categoryList);

console.log(zenClient.jti);
console.log(zenClient.language);
console.log(zenClient.timeZone);
console.log(zenClient.user);
console.log((await zenClient.i18n).getResource("@@:/@word/yes"));