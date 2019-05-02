const contracts = require('./access/contracts');

const NiftyFootballTradingCard = require('./abi/NiftyFootballTradingCard');
const NiftyFootballTradingCardBlindPack = require('./abi/NiftyFootballTradingCardBlindPack');
const NiftyFootballTradingCardEliteBlindPack = require('./abi/NiftyFootballTradingCardEliteBlindPack');

module.exports = {
    abi: {
        NiftyFootballTradingCardAbi: NiftyFootballTradingCard,
        NiftyFootballTradingCardBlindPackAbi: NiftyFootballTradingCardBlindPack,
        NiftyFootballTradingCardEliteBlindPack: NiftyFootballTradingCardEliteBlindPack,
    },
    contracts,
    getContractForNetworkAndAddress: require('./access/lookup')
};
