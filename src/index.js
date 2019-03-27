const contracts = require('./access/contracts');

const BuyNowMarketplaceAbi = require('./abi/BuyNowMarketplace');
const FutballCardsAbi = require('./abi/FutballCards');
const FutballCardsBlindPackAbi = require('./abi/FutballCardsBlindPack');
const HeadToHeadAbi = require('./abi/HeadToHead');

module.exports = {
    abi: {
        FutballCardsAbi: FutballCardsAbi,
        FutballCardsBlindPackAbi: FutballCardsBlindPackAbi,
        HeadToHeadAbi: HeadToHeadAbi,
        BuyNowMarketplaceAbi: BuyNowMarketplaceAbi,
    },
    contracts,
    getContractForNetworkAndAddress
};
