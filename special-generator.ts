import {Keypair} from "@solana/web3.js"
const text = "kum"

for (;;) {
const keypair = Keypair.generate()
if (!keypair.publicKey.toBase58().toLowerCase().match(text)) {
    continue
}
console.log(`Public key: ${keypair.publicKey.toBase58()}`)
console.log(`Private key: ${keypair.secretKey}`)
break
}


console.log(`✅ Finished!`)