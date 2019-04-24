const contracts = require('./access/contracts');

const NiftyFootballTradingCard = require('./abi/NiftyFootballTradingCard');
const NiftyFootballTradingCardBlindPack = require('./abi/NiftyFootballTradingCardBlindPack');

module.exports = {
    abi: {
        NiftyFootballTradingCardAbi: NiftyFootballTradingCard,
        NiftyFootballTradingCardBlindPackAbi: NiftyFootballTradingCardBlindPack,
    },
    contracts,
    getContractForNetworkAndAddress: require('./access/lookup')
};
