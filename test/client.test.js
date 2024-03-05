import "dotenv/config";
import Z from "../dist/esm/index.js";

// const client = Z.createFromToken(
//   process.env.TENANT,
//   process.env.TOKEN);

const client = await Z.connect(
  process.env.TENANT,
  process.env.USER,
  process.env.PASSWORD);

const categoryList = await client.web.fetchJson("/catalog/category");
console.log(categoryList);