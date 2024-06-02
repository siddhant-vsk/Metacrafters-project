let nftCollection = [];
function mintNFT(name, eyeColor, shirtType, bling) {
    const nft = {
        name: name,
        eyeColor: eyeColor,
        shirtType: shirtType,
        bling: bling
    };
    nftCollection.push(nft);
}
function listNFTs() {
    for (let i = 0; i < nftCollection.length; i++) {
        console.log(`NFT ${i + 1}:`);
        console.log(`Name: ${nftCollection[i].name}`);
        console.log(`Eye Color: ${nftCollection[i].eyeColor}`);
        console.log(`Shirt Type: ${nftCollection[i].shirtType}`);
        console.log(`Bling: ${nftCollection[i].bling}`);
        console.log('-------------------');
    }
}
function getTotalSupply() {
    return nftCollection.length;
}
mintNFT('CryptoPunk', 'Blue', 'Hoodie', 'Gold Chain');
mintNFT('BoredApe', 'Green', 'T-shirt', 'Diamond Ring');
mintNFT('ArtBlock', 'Red', 'Sweater', 'Silver Necklace');
listNFTs();
console.log(`Total Supply: ${getTotalSupply()}`);