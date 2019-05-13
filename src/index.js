const contracts = require('./access/contracts');

const NiftyFootballTradingCard = require('./abi/NiftyFootballTradingCard');
const NiftyFootballTradingCardBlindPack = require('./abi/NiftyFootballTradingCardBlindPack');
const NiftyFootballTradingCardEliteBlindPack = require('./abi/NiftyFootballTradingCardEliteBlindPack');
const NiftyFootballTradingCardGenerator = require('./abi/NiftyFootballTradingCardGenerator');
const NiftyFootballTradingCardEliteGenerator = require('./abi/NiftyFootballTradingCardEliteGenerator');
const NiftyFootballAdmin = require('./abi/NiftyFootballAdmin');

module.exports = {
    abi: {
        NiftyFootballTradingCardAbi: NiftyFootballTradingCard,
        NiftyFootballTradingCardBlindPackAbi: NiftyFootballTradingCardBlindPack,
        NiftyFootballTradingCardEliteBlindPackAbi: NiftyFootballTradingCardEliteBlindPack,
        NiftyFootballTradingCardGeneratorAbi: NiftyFootballTradingCardGenerator,
        NiftyFootballTradingCardEliteGeneratorAbi: NiftyFootballTradingCardEliteGenerator,
        NiftyFootballAdminAbi: NiftyFootballAdmin,
    },
    contracts,
    getContractForNetworkAndAddress: require('./access/lookup')
};
