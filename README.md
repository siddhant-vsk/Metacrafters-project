# NFT Minting and Collection Management

## Overview

This project demonstrates a simple JavaScript application to create and manage a collection of NFTs (Non-Fungible Tokens). The application includes functions to mint new NFTs, list all minted NFTs, and get the total supply of NFTs in the collection.

## Features

- **Minting NFTs:** You can create new NFTs by providing attributes such as `name`, `eyeColor`, `shirtType`, and `bling`.
- **Listing NFTs:** The application provides a function to list all the NFTs currently in the collection, displaying their attributes.
- **Total Supply:** A function to return the total number of NFTs minted.

## Code Explanation

### Functions

1. **mintNFT(name, eyeColor, shirtType, bling)**
   - Creates a new NFT with the given attributes.
   - Adds the NFT to the `nftCollection` array.
   - Example Usage:
     ```javascript
     mintNFT('CryptoPunk', 'Blue', 'Hoodie', 'Gold Chain');
     ```

2. **listNFTs()**
   - Iterates over the `nftCollection` array and prints out the details of each NFT.
   - Example Output:
     ```
     NFT 1:
     Name: CryptoPunk
     Eye Color: Blue
     Shirt Type: Hoodie
     Bling: Gold Chain
     -------------------
     ```

3. **getTotalSupply()**
   - Returns the total number of NFTs in the collection.
   - Example Usage:
     ```javascript
     console.log(`Total Supply: ${getTotalSupply()}`);
     ```

### Example Usage

Here's how you can use the functions to create and manage your NFT collection:

```javascript
// Mint new NFTs
mintNFT('CryptoPunk', 'Blue', 'Hoodie', 'Gold Chain');
mintNFT('BoredApe', 'Green', 'T-shirt', 'Diamond Ring');
mintNFT('ArtBlock', 'Red', 'Sweater', 'Silver Necklace');

// List all NFTs
listNFTs();

// Get total supply of NFTs
console.log(`Total Supply: ${getTotalSupply()}`);
