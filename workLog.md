# Work Log

- [ScrollScan of `banr1.eth`](https://sepolia.scrollscan.dev/address/0x939461c901a2c882079c84565e42fce064847aa3)
- [ScrollScan API Key](https://scrollscan.com/myapikey)
- [OpenZeppelin Defender Relayer](https://defender.openzeppelin.com/v2/#/manage/relayers)

## Get ETH on Scroll Sepolia using faucet

I got the ETH on Scroll Sepolia using [FaucetMe](https://scroll.faucetme.pro/).

This is the transaction:
https://sepolia.scrollscan.dev/tx/0x616d1d863272a8f6816221925f638c174f14fe6c5af834f999728b1482509598

But the amount was not enough, so I used the bridge to transfer more ETH from Ethereum Sepolia to Scroll Sepolia.
https://sepolia.scroll.io/bridge

Zerion Wallet cannot be connected to this website, so I used Rabby Wallet.

## Get Scrollscan API Key

https://scrollscan.com/myapikey

## Create Relayer on OpenZeppelin Defender and Send ETH to the Relayer

https://defender.openzeppelin.com/v2/#/manage/relayers

## Install packages

```bash
$ yarn
```

## Compile and Test Contracts

```bash
~/workspace/forked-repositories/forked-IntmaxRepo $ yarn backend compile
yarn run v1.22.22
$ yarn workspace backend compile
$ hardhat compile
Downloading compiler 0.8.20
Generating typings for: 16 artifacts in dir: typechain-types for target: ethers-v6
Successfully generated 44 typings!
Compiled 16 Solidity files successfully (evm target: paris).
✨  Done in 7.60s.
```

```bash
~/workspace/forked-repositories/forked-IntmaxRepo $ yarn backend test
yarn run v1.22.22
$ yarn workspace backend test
$ hardhat test

  HelloWorld contract
    ✔ Deployment should assign the total supply of tokens to the owner
    ✔ Check SampleForwarder Address

·-----------------------------|----------------------------|-------------|-----------------------------·
|    Solc version: 0.8.20     ·  Optimizer enabled: false  ·  Runs: 200  ·  Block limit: 30000000 gas  │
······························|····························|·············|······························
|  Methods                                                                                             │
···············|··············|··············|·············|·············|···············|··············
|  Contract    ·  Method      ·  Min         ·  Max        ·  Avg        ·  # calls      ·  jpy (avg)  │
···············|··············|··············|·············|·············|···············|··············
|  HelloWorld  ·  setNewText  ·           -  ·          -  ·      45316  ·            1  ·          -  │
···············|··············|··············|·············|·············|···············|··············
|  Deployments                ·                                          ·  % of limit   ·             │
······························|··············|·············|·············|···············|··············
|  HelloWorld                 ·           -  ·          -  ·     549143  ·        1.8 %  ·          -  │
······························|··············|·············|·············|···············|··············
|  SampleForwarder            ·           -  ·          -  ·    1531129  ·        5.1 %  ·          -  │
·-----------------------------|--------------|-------------|-------------|---------------|-------------·

  2 passing (849ms)

✨  Done in 2.24s.
```

## Deploy Contracts

I tried to deploy the contracts to Scroll Sepolia, but I got an error.

```bash
~/workspace/forked-repositories/forked-IntmaxRepo $ yarn backend deploy --network scrollSepolia
yarn run v1.22.22
$ yarn workspace backend deploy --network scrollSepolia
$ hardhat run scripts/deploy.ts --network scrollSepolia
 ============================================== [start] ================================================
 SampleForwarder deployed to 0xbaD2F472f22B0172dcAF5Ad72FA3C60803000017
ProviderError: replacement transaction underpriced
    at HttpProvider.request (/Users/banriyanahama/workspace/forked-repositories/forked-IntmaxRepo/node_modules/hardhat/src/internal/core/providers/http.ts:90:21)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async HardhatEthersSigner.sendTransaction (/Users/banriyanahama/workspace/forked-repositories/forked-IntmaxRepo/node_modules/@nomicfoundation/hardhat-ethers/src/signers.ts:125:18)
    at async ContractFactory.deploy (/Users/banriyanahama/workspace/forked-repositories/forked-IntmaxRepo/node_modules/ethers/src.ts/contract/factory.ts:111:24)
    at async main (/Users/banriyanahama/workspace/forked-repositories/forked-IntmaxRepo/pkgs/backend/scripts/deploy.ts:19:22)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
error Command failed.
Exit code: 1
Command: /Users/banriyanahama/.nodebrew/node/v18.20.2/bin/node
Arguments: /opt/homebrew/Cellar/yarn/1.22.22/libexec/lib/cli.js deploy --network scrollSepolia
Directory: /Users/banriyanahama/workspace/forked-repositories/forked-IntmaxRepo/pkgs/backend
Output:

info Visit https://yarnpkg.com/en/docs/cli/workspace for documentation about this command.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

I tried to deploy again, and it was successful.

The reason for the first error was probably that the wallet balance was insufficient.

```bash
~/workspace/forked-repositories/forked-IntmaxRepo $ yarn backend deploy --network scrollSepolia
yarn run v1.22.22
$ yarn workspace backend deploy --network scrollSepolia
$ hardhat run scripts/deploy.ts --network scrollSepolia
 ============================================== [start] ================================================
 SampleForwarder deployed to 0xb0ad99037A7783035306f5284B88eE4f2268e036
 HelloWorld deployed to 0x25E0EEc9224E4Ff5D3c14F1BCE06Ee8009c9Ad8E
 =============================================== [end]  ===============================================
✨  Done in 11.63s.
```

## Update constants in frontend

I updated the constants in the frontend.

```bash
export const FORWARDER_CONTRACT_ADDRESS =
  "0xb0ad99037A7783035306f5284B88eE4f2268e036";
export const HELLOWORLD_CONTRACT_ADDRESS =
  "0x25E0EEc9224E4Ff5D3c14F1BCE06Ee8009c9Ad8E";
```

## Verify contracts

I tried to verify the contracts on Scroll Sepolia, but they were already verified.

```bash
~/workspace/forked-repositories/forked-IntmaxRepo $ yarn backend verify --network scrollSepolia
yarn run v1.22.22
$ yarn workspace backend verify --network scrollSepolia
$ npx hardhat verify --network scrollSepolia
 ============================================== [start] ================================================
The contract 0xb0ad99037A7783035306f5284B88eE4f2268e036 has already been verified.
https://sepolia.scrollscan.com/address/0xb0ad99037A7783035306f5284B88eE4f2268e036#code
The contract 0x25E0EEc9224E4Ff5D3c14F1BCE06Ee8009c9Ad8E has already been verified.
https://sepolia.scrollscan.com/address/0x25E0EEc9224E4Ff5D3c14F1BCE06Ee8009c9Ad8E#code
 =============================================== [end]  ===============================================
✨  Done in 3.09s.
```

## Execute gasless transaction

```bash
~/workspace/forked-repositories/forked-IntmaxRepo $ yarn backend gaslessSetNewText --network scrollSepolia
yarn run v1.22.22
$ yarn workspace backend gaslessSetNewText --network scrollSepolia
$ npx hardhat run scripts/relay/gaslessSetScore.ts --network scrollSepolia
 ============================================== [GaslessSetNewText:start] ================================================
tx Hash: 0x8d3d00c5b0f6646df13cbd22261be45d19db7686f92316fcf44119a53b2957bd
 =============================================== [GaslessSetNewText:end]  ===============================================
✨  Done in 26.14s.
```

And I confirmed that the text was updated.

```bash
~/workspace/forked-repositories/forked-IntmaxRepo $ yarn backend getText --network scrollSepolia
yarn run v1.22.22
$ yarn workspace backend getText --network scrollSepolia
$ npx hardhat getText --network scrollSepolia
 ============================================== [start] ================================================
text: newText
 =============================================== [end]  ===============================================
✨  Done in 5.63s.
```

## Start frontend on localhost

I built the frontend.

```bash
~/workspace/forked-repositories/forked-IntmaxRepo $ yarn frontend build
yarn run v1.22.22
$ yarn workspace frontend build
$ next build
   Linting and checking validity of types  .. ⨯ ESLint: Invalid Options: - Unknown options: useEslintrc, extensions - 'extensions' has been removed.
 ✓ Linting and checking validity of types
> [PWA] Compile client (static)
> [PWA] Auto register service worker with: /Users/banriyanahama/workspace/forked-repositories/forked-IntmaxRepo/node_modules/next-pwa/register.js
> [PWA] Service worker: /Users/banriyanahama/workspace/forked-repositories/forked-IntmaxRepo/pkgs/frontend/public/sw.js
> [PWA]   url: /sw.js
> [PWA]   scope: /
> [PWA] Compile server
> [PWA] Compile server
 ✓ Creating an optimized production build
 ✓ Compiled successfully
 ✓ Collecting page data
 ✓ Generating static pages (3/3)
 ✓ Collecting build traces
 ✓ Finalizing page optimization

Route (pages)                              Size     First Load JS
┌ ○ /                                      14.6 kB         204 kB
├   └ css/3ba74a87de66d42e.css             3.63 kB
├   /_app                                  0 B             190 kB
├ ○ /404                                   180 B           190 kB
└ λ /api/requestRelayer                    0 B             190 kB
+ First Load JS shared by all              190 kB
  ├ chunks/framework-8a8ee0a30377ce1f.js   45.4 kB
  ├ chunks/main-ae8474a2c133902e.js        35.2 kB
  ├ chunks/pages/_app-5ab17d789981b623.js  109 kB
  ├ chunks/webpack-fd8027ecb5121007.js     770 B
  └ css/00e42b5195e56917.css               617 B

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)

✨  Done in 17.10s.
```

I started the frontend.

```bash
~/workspace/forked-repositories/forked-IntmaxRepo $ yarn frontend dev
yarn run v1.22.22
$ yarn workspace frontend dev
$ next dev
> [PWA] Compile client (static)
> [PWA] Auto register service worker with: /Users/banriyanahama/workspace/forked-repositories/forked-IntmaxRepo/node_modules/next-pwa/register.js
> [PWA] Service worker: /Users/banriyanahama/workspace/forked-repositories/forked-IntmaxRepo/pkgs/frontend/public/sw.js
> [PWA]   url: /sw.js
> [PWA]   scope: /
> [PWA] Build in develop mode, cache and precache are mostly disabled. This means offline support is disabled, but you can continue developing other functions in service worker.
> [PWA] Compile server
> [PWA] Compile server
  ▲ Next.js 13.5.4
  - Local:        http://localhost:3000
  - Environments: .env.local

 ✓ Ready in 3.3s
 ⚠ GenerateSW has been called multiple times, perhaps due to running webpack in --watch mode. The precache manifest generated after the first call may be inaccurate! Please see https://github.com/GoogleChrome/workbox/issues/1790 for more information.
```

I accessed `http://localhost:3000/` and confirmed that I could connect the wallet and send a transaction.

```bash
 ========================================= [RequestRaler: START] ==============================================
request: {
  from: '0xa09d43CC08EBAB5BE143740A612fD55d79d34FaF',
  to: '0x25E0EEc9224E4Ff5D3c14F1BCE06Ee8009c9Ad8E',
  value: 0n,
  gas: 360000n,
  nonce: 0n,
  deadline: 1721642278n,
  data: '0x2742d0f60000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000f68656c6c6f20494e544d41585821210000000000000000000000000000000000',
  signature: '0xa26e52981338a0c7f0a7b126d1f07469e10c5966678dc0f06f33ea3a9d00b3c957b0b70db08698fd7c808a4486615ca2ef60cff43ff04ccd835db5411554a8d61c'
}
true
tx hash: 0x417829cc30ddee54a18df216311f1b9ce9389949bbf8c5e2fe27704a6ff98543
 ========================================= [RequestRaler: END] ==============================================
 ========================================= [RequestRaler: START] ==============================================
request: {
  from: '0xa09d43CC08EBAB5BE143740A612fD55d79d34FaF',
  to: '0x25E0EEc9224E4Ff5D3c14F1BCE06Ee8009c9Ad8E',
  value: 0n,
  gas: 360000n,
  nonce: 1n,
  deadline: 1721642321n,
  data: '0x2742d0f60000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000f68656c6c6f20494e544d41585821210000000000000000000000000000000000',
  signature: '0x5470a4f9fec510f0f4f25efb045affc8e42d0cdf597e09c1105c808fe7b96d553b46b7821d33697a43dfab606b22ef6a171b214a4b8772ddd5aaccd31b4fd88f1b'
}
true
tx hash: 0x4991a5952837b47116e73fe08c1f82c2cb318b19ab32f97146fb79f27ad07f7c
 ========================================= [RequestRaler: END] ==============================================
```
