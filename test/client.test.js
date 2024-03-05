import "dotenv/config";
import Z from "../index.js";

const client = Z.createFromToken(
  process.env.TENANT,
  process.env.TOKEN);

const saleService = new Z.api.sale.Service(client);

let sale;

sale = await saleService.saleOpPrepare(1001);
sale = await saleService.saleOpApprove(1001);
