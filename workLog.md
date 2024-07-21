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
