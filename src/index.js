const contracts = require('./access/contracts');

const NiftyFootballTradingCard = require('./abi/NiftyFootballTradingCard');
const NiftyFootballTradingCardBlindPack = require('./abi/NiftyFootballTradingCardBlindPack');
const NiftyFootballTradingCardEliteBlindPack = require('./abi/NiftyFootballTradingCardEliteBlindPack');
const NiftyFootballTradingCardGenerator = require('./abi/NiftyFootballTradingCardGenerator');
const NiftyFootballTradingCardEliteGenerator = require('./abi/NiftyFootballTradingCardEliteGenerator');

module.exports = {
    abi: {
        NiftyFootballTradingCardAbi: NiftyFootballTradingCard,
        NiftyFootballTradingCardBlindPackAbi: NiftyFootballTradingCardBlindPack,
        NiftyFootballTradingCardEliteBlindPackAbi: NiftyFootballTradingCardEliteBlindPack,
        NiftyFootballTradingCardGeneratorAbi: NiftyFootballTradingCardGenerator,
        NiftyFootballTradingCardEliteGeneratorAbi: NiftyFootballTradingCardEliteGenerator,
    },
    contracts,
    getContractForNetworkAndAddress: require('./access/lookup')
};
