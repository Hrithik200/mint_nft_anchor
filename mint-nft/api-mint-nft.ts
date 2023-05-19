// import express from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import * as anchor from "@coral-xyz/anchor";
// import { Program, Wallet } from "@coral-xyz/anchor";
// import { MintNft } from "./target/types/mint_nft";
// import { TOKEN_PROGRAM_ID, createAssociatedTokenAccountInstruction, getAssociatedTokenAddress, createInitializeMintInstruction, MINT_SIZE } from '@solana/spl-token' // IGNORE THESE ERRORS IF ANY
// const { SystemProgram } = anchor.web3
// const app = express();
// app.use(bodyParser.json());
// app.use(cors());

// // Configure the client to use the local cluster.
// const provider = anchor.AnchorProvider.env();
// const wallet = provider.wallet as Wallet;
// anchor.setProvider(provider);
// const program = anchor.workspace.MintNft as Program<MintNft>;

// app.post("/mint-nft", async (req, res) => {

//   const TOKEN_METADATA_PROGRAM_ID = new anchor.web3.PublicKey(
//     "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
//   );
//   const lamports: number =
//     await program.provider.connection.getMinimumBalanceForRentExemption(
//       MINT_SIZE
//     );
//     const getMetadata = async (
//       mint: anchor.web3.PublicKey
//     ): Promise<anchor.web3.PublicKey> => {
//       return (
//         await anchor.web3.PublicKey.findProgramAddressSync(
//           [
//             Buffer.from("metadata"),
//             TOKEN_METADATA_PROGRAM_ID.toBuffer(),
//             mint.toBuffer(),
//           ],
//           TOKEN_METADATA_PROGRAM_ID
//         )
//       )[0];
//     };

//     const getMasterEdition = async (
//       mint: anchor.web3.PublicKey
//     ): Promise<anchor.web3.PublicKey> => {
//       return (
//         await anchor.web3.PublicKey.findProgramAddressSync(
//           [
//             Buffer.from("metadata"),
//             TOKEN_METADATA_PROGRAM_ID.toBuffer(),
//             mint.toBuffer(),
//             Buffer.from("edition"),
//           ],
//           TOKEN_METADATA_PROGRAM_ID
//         )
//       )[0];
//     };
//     const mintKey: anchor.web3.Keypair = anchor.web3.Keypair.generate();
//     const NftTokenAccount = await getAssociatedTokenAddress(
//       mintKey.publicKey,
//       wallet.publicKey
//     );
//     const mint_tx = new anchor.web3.Transaction().add(
//       anchor.web3.SystemProgram.createAccount({
//         fromPubkey: wallet.publicKey,
//         newAccountPubkey: mintKey.publicKey,
//         space: MINT_SIZE,
//         programId: TOKEN_PROGRAM_ID,
//         lamports,
//       }),
//       createInitializeMintInstruction(
//         mintKey.publicKey,
//         0,
//         wallet.publicKey,
//         wallet.publicKey
//       ),
//       createAssociatedTokenAccountInstruction(
//         wallet.publicKey,
//         NftTokenAccount,
//         wallet.publicKey,
//         mintKey.publicKey
//       )
//     );

//     await provider.sendAndConfirm(mint_tx, [mintKey]);

//     const metadataAddress = await getMetadata(mintKey.publicKey);
//     const masterEdition = await getMasterEdition(mintKey.publicKey);

//     const tx = await program.rpc.mintNft(
//       mintKey.publicKey,
//       "https://gateway.pinata.cloud/ipfs/Qmd4N2mxjRfNTCHwtbgAmHmaF1Qi2tBcS7PPYKqnk2Fn3z",
//       "Anchor",
//       {
//         accounts: {
//           mintAuthority: wallet.publicKey,
//           mint: mintKey.publicKey,
//           tokenAccount: NftTokenAccount,
//           tokenProgram: TOKEN_PROGRAM_ID,
//           metadata: metadataAddress,
//           tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
//           payer: wallet.publicKey,
//           systemProgram: SystemProgram.programId,
//           rent: anchor.web3.SYSVAR_RENT_PUBKEY,
//           masterEdition: masterEdition,
//         },
//       }
//     );
  
//     res.send({ signature: tx });
//   });
//   // Start the server
// const port = 3000;
// app.listen(port, () =>
// console.log("Server running at http://localhost:${port}")
// );