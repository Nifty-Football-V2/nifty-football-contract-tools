const contracts = require('../access/contracts');

const NiftyFootballTradingCard = require('../abi/NiftyFootballTradingCard');
const NiftyFootballTradingCardBlindPack = require('../abi/NiftyFootballTradingCardBlindPack');

module.exports = function getContractForNetworkAndAddress(network, address) {

    if (contracts.getNiftyFootballNft(network).address === address) {
        return {
            abi: NiftyFootballTradingCard,
            deploymentBlock: contracts.getNiftyFootballNft(network).deploymentBlock,
            network: contracts.getNetwork(network),
            address,
        };
    }

    if (contracts.getNiftyFootballBlindPack(network).address === address) {
        return {
            abi: NiftyFootballTradingCardBlindPack,
            deploymentBlock: contracts.getNiftyFootballBlindPack(network).deploymentBlock,
            network: contracts.getNetwork(network),
            address,
        };
    }

    throw new Error(`Unknown address [${address}] for network [${network}]`);
};
