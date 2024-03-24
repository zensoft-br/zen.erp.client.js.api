import "dotenv/config";
import * as Z from "../dist/esm/index.js";

// const client = Z.createFromToken(
//   process.env.TENANT,
//   process.env.TOKEN);

const client = await Z.connect(
  process.env.TENANT,
  process.env.USER,
  process.env.PASSWORD);

// const systemService = new Z.api.system.SystemService(client);
// let lockToken = await systemService.lockOpAcquire("mylock", undefined, "5s");
// lockToken = await systemService.lockOpAcquire("mylock", "5s", "5s");
// await systemService.lockOpExtend("mylock", lockToken, "5s");
// await systemService.lockOpRelease("mylock", lockToken);

const storageService = new Z.api.system.storage.StorageService(client);

await storageService.userPutNumber("test", 1.5);
console.log(await storageService.userGetNumber("test"));

await storageService.userPutString("test", "1");
console.log(await storageService.userGetString("test"));

await storageService.userPut("test", { a: 1 });
console.log(await storageService.userGet("test"));

const fileService = new Z.api.system.file.FileService(client);
console.log(await fileService.fileOpReadContent(25969));
