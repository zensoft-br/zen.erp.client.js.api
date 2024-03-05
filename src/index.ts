import { connect, createFromToken } from "./Client.js";
import * as api from "./api/api.module.js";

const bundle = {
  connect,
  createFromToken,
  api,
};

export default bundle;