import "dotenv/config"
import {
    Keypair,
    LAMPORTS_PER_SOL,
    PublicKey,
    SystemProgram,
    Transaction,
    clusterApiUrl,
    Connection,
    sendAndConfirmTransaction
  } from "@solana/web3.js";
  
  let privateKey = process.env["SECRET_KEY"];
  if (privateKey === undefined) {
    console.log("Add SECRET_KEY to .env!");
    process.exit(1);
  }
  const asArray = Uint8Array.from(JSON.parse(privateKey));
  const sender = Keypair.fromSecretKey(asArray);
  
  const connection = new Connection(clusterApiUrl("devnet"));
  
  console.log(`🔑 Our public key is: ${sender.publicKey.toBase58()}`);
  