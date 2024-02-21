import { connect, createFromToken } from "./src/client.js";
import * as api from "./src/api/apiHub.js";

const bundle = {
  connect,
  createFromToken,
  api,
};

export default bundle;