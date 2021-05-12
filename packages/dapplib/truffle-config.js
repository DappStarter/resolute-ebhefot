require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clog swift suggest firm crater remain proof half clinic orange trouble'; 
let testAccounts = [
"0x46b5bfc25348cd30875c9a8e8a123ed95c98ea6516ae8a6e1ea4e43b17993cb5",
"0xccc0809309903daf104dbdf665b270aca8462d9f1509866ce41ac0b427bbf521",
"0xebd3460ea70d72072378ac380be2501912d782e93655a484290877146ad44148",
"0x745c677fb5e291d006accaf16037206f00d26cac316b497c4d9ed4cd7d7664c0",
"0xf8199a6b0c58e703d65af94c070333cd6d7ed4f15fb851a5fba0236b9cfff9a0",
"0x747009d069154739464ef76360bd8d6508605c2c761e83c3f7c1a0eff9187421",
"0x74679a295fd79278b53990536761efcdc8196ae49533825e2a8a657597136690",
"0x43035d0187dc6bf6d15402b8a960f091dcb21fa7f7ad38f79ad22bceddfe0f7b",
"0x3347a306127ef6dc41b6993fdcee7cac8b968e1e2575a7bf65deb2db82ed6d8b",
"0xa06e48510081f9067a503db907a3783576e2c8c78b2ce7ac0aa2c5b8883fd0f1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
