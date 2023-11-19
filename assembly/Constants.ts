import { Base58 } from "@koinos/sdk-as";

export namespace Constants {
  export const NAME: string = "Koinos Army Journey"
  export const SYMBOL: string = "JOURNEY";
  export const MINT_PRICE: u64 = 15000000000;
  export const MINT_FEE: bool = true;
  export const MAX_SUPPLY: u64 = 600; // number of NFTs to be minted
  export const START_TIME: u64 = 1701201600000; // Unix UTC time in milliseconds
  export const NFT_KCMB: Uint8Array = Base58.decode("1AhGbSHUVaTWV1oqJRSTihsi2ofEvvYevg");
  export const NFT_REX: Uint8Array = Base58.decode("1N2AhqGGticZ8hYmwNPWoroEBvTp3YGsLW");
  export const URI: string = "https://bafybeidpoz4n7ritm2v4j2b4v4eghqiit4dwwnmttuiwtkn7glartm3aee.ipfs.nftstorage.link";
  export const OWNER: Uint8Array = Base58.decode("1Bz14B1LkAQyvvqGKDxBe8ER6eb3RYMmuu"); // NFT creator

  // token mint
  // export const TOKEN_PAY: Uint8Array = Base58.decode("1FaSvLjQJsCJKq5ybmGsMMQs8RQYyVv8ju"); // testnet
  export const TOKEN_PAY: Uint8Array = Base58.decode("15DJN4a8SgrbGhhGksSBASiSYjGnMU8dGL"); // mainnet
  export const ADDRESS_PAY: Uint8Array = Base58.decode("15DgcuEkx5vvniVetRUWhXogQu59UYiyC2"); // mint fees receiver
}
