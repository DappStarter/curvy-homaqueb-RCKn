require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside venture story dash remain comfort install climb metal genre'; 
let testAccounts = [
"0xb6d529964be8ee41b5d36efaa8c17c5f69760e88cb6a1b8fd77a423bb83b6a6a",
"0xeb4a2d01f515f66ffda229d619bc2508f1d7097dc19c639085e6da69b321463f",
"0xcd9a3e8eeb3073264f0e54e01b86b7de20a96283809bd80b6b888b6aac948049",
"0x73b420061166ca9211ffec73313e28a5aeb37514dde74d1dc6ea5b3175bcd641",
"0xb0a479e2fb904a35ea783ecaf07f56c8e5975a1472874f5e32bb554a3a6d5b10",
"0xddf0e46b4f044d110347db87c528587941747b4da1464d387db11fb9df15bace",
"0xe9ad0a18e584316830a4cd306b42d6ab11e8700e51c76cdc2166919e1ee20b50",
"0x727ab431d9d8f163274ce3bb4c79c0906f190af29dc1ea36314c66bb4373fa1f",
"0x6104585ee11f3698ed513c3d1338b8c8a3af99edb878f3f26b5fa844aaee9477",
"0x204d850db0fbc503f64625fcfbcfcd782a1e4d9f5935b5147cb6e4c48fc48d58"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


