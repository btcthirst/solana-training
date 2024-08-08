import "dotenv/config";
import { Keypair } from "@solana/web3.js";

const secretKey = new Uint8Array(JSON.parse(process.env["SECRET_KEY"]!))
const keypair = Keypair.fromSecretKey(secretKey);

console.log(
  `✅ Finished! We've loaded our keypair securely, using an env file! Our public key is: ${keypair.publicKey.toBase58()}`
);
