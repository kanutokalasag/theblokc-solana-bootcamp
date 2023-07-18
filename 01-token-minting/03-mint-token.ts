import 'dotenv/config'
import * as Web3 from '@solana/web3.js'
import * as token from '@solana/spl-token'
import base58 from 'bs58'
import { SystemProgram, LAMPORTS_PER_SOL, sendAndConfirmTransaction } from '@solana/web3.js'

async function main() {
    const connection  = new Web3.Connection(Web3.clusterApiUrl('devnet'));
    const base58DecodedPK = base58.decode(process.env.SOL_PRIVATE_KEY || '');
    const signer =  Web3.Keypair.fromSecretKey(base58DecodedPK);

    const tokenAccount = await token.mintTo(
        connection,
        signer,
        new Web3.PublicKey('GCXSP8jcySBrgUEFHegWeVaa46bLRj1VeUfHasgdGdQF'),
        new Web3.PublicKey('7rhCPVr3mfgPSAvVcH2Nqjs1yPfCVjuT2x5cLaxaAVg'),
        new Web3.PublicKey('7DjEZhRbTxjkkC1jjH4oN6kU46UTCEqKA8s1TnxBcgoT'),
        10000 * LAMPORTS_PER_SOL
    );
    
    console.log('tokenAccount', tokenAccount);
    //3KcnAEtMsygVruJh82E3atTq8FKjxhLNB5odLNmw6xsc6fKU9CXA8bnCwW789zZFZ1PfMKvWTTzWcdYitzUnFSbo
}

main()
