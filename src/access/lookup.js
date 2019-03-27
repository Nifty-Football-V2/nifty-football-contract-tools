const contracts = require('../access/contracts');

const BuyNowMarketplaceAbi = require('../abi/BuyNowMarketplace');
const FutballCardsAbi = require('../abi/FutballCards');
const FutballCardsBlindPackAbi = require('../abi/FutballCardsBlindPack');
const HeadToHeadAbi = require('../abi/HeadToHead');


module.exports = function getContractForNetworkAndAddress(network, address) {

    if (contracts.getNiftyFootballNft(network).address === address) {
        return {
            abi: FutballCardsAbi,
            deploymentBlock: contracts.getNiftyFootballNft(network).deploymentBlock,
            network: contracts.getNetwork(network),
            address,
        };
    }
    if (contracts.getHeadToHeadGame(network).address === address) {
        return {
            abi: HeadToHeadAbi,
            deploymentBlock: contracts.getHeadToHeadGame(network).deploymentBlock,
            network: contracts.getNetwork(network),
            address,
        };
    }

    if (contracts.getNiftyFootballBlindPack(network).address === address) {
        return {
            abi: FutballCardsBlindPackAbi,
            deploymentBlock: contracts.getNiftyFootballBlindPack(network).deploymentBlock,
            network: contracts.getNetwork(network),
            address,
        };
    }

    if (contracts.getNiftyFootballMarketplace(network).address === address) {
        return {
            abi: BuyNowMarketplaceAbi,
            deploymentBlock: contracts.getNiftyFootballMarketplace(network).deploymentBlock,
            network: contracts.getNetwork(network),
            address,
        };
    }

    throw new Error(`Unknown address [${address}] for network [${network}]`);
};
