const contracts = require('../access/contracts');

const NiftyFootballTradingCard = require('../abi/NiftyFootballTradingCard');
const NiftyFootballTradingCardBlindPack = require('../abi/NiftyFootballTradingCardBlindPack');
const NiftyFootballTradingCardEliteBlindPack = require('../abi/NiftyFootballTradingCardEliteBlindPack');
const NiftyFootballAdmin = require('../abi/NiftyFootballAdmin');

/**
 * For a given address and network, return the required contract info for it
 *
 * @param network the network its deployed to
 * @param address the address to find
 *
 * @throws Error if network/address combo is not found
 *
 * @return {{deploymentBlock: number, address: *, abi, network}}
 */
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

    if (contracts.getNiftyFootballEliteBlindPack(network).address === address) {
        return {
            abi: NiftyFootballTradingCardEliteBlindPack,
            deploymentBlock: contracts.getNiftyFootballEliteBlindPack(network).deploymentBlock,
            network: contracts.getNetwork(network),
            address,
        };
    }

    if (contracts.getNiftyFootballAdmin(network).address === address) {
        return {
            abi: NiftyFootballAdmin,
            deploymentBlock: contracts.getNiftyFootballAdmin(network).deploymentBlock,
            network: contracts.getNetwork(network),
            address,
        };
    }

    throw new Error(`Unknown address [${address}] for network [${network}]`);
};
