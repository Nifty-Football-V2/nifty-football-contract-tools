const networkSplitter = (network, {ropsten, rinkeby, mainnet, local}) => {
    switch (network) {
        case 1:
        case '1':
        case 'mainnet':
            return mainnet;
        case 3:
        case '3':
        case 'ropsten':
            return ropsten;
        case 4:
        case '4':
        case 'rinkeby':
            return rinkeby;
        case 5777:
        case '5777':
        case 'local':
            return local;
        default:
            throw new Error(`Unknown network ID ${network}`);
    }
};

const getNetwork = (network) => {
    return networkSplitter(network, {
        mainnet: 'mainnet',
        ropsten: 'ropsten',
        rinkeby: 'rinkeby',
        local: 'local'
    });
};

const getNiftyFootballNft = (network) => {
    return networkSplitter(network, {
        mainnet: {
            address: '',
            deploymentBlock: 0
        },
        ropsten: {
            address: '0x0c507Ca24cDa023e94fc9B2B720B945B723D0254',
            deploymentBlock: 5526209
        },
        rinkeby: {
            address: '0xA9f855cEFa6cB63F61c3475daE9f85f77b188327',
            deploymentBlock: 4317280
        },
        local: {
            address: '',
            deploymentBlock: 0
        }
    });
};

/**
 * @return {address, deploymentBlock}
 */
const getNiftyFootballBlindPack = (network) => {
    return networkSplitter(network, {
        mainnet: {
            address: '',
            deploymentBlock: 0
        },
        ropsten: {
            address: '0xdc43F9BDF14CA9F79bF7f4620ffA20912C81a37B',
            deploymentBlock: 5526216
        },
        rinkeby: {
            address: '0x6cDf13ddd381818274ba02957fFffD74578D2be3',
            deploymentBlock: 4317283
        },
        local: {
            address: '',
            deploymentBlock: 0
        }
    });
};

/**
 * @return {address, deploymentBlock}
 */
const getNiftyFootballEliteBlindPack = (network) => {
    return networkSplitter(network, {
        mainnet: {
            address: '',
            deploymentBlock: 0
        },
        ropsten: {
            address: '0x3e302bc53860Bd31Fc23FEfFa94bF2c5b989f60f',
            deploymentBlock: 5526225
        },
        rinkeby: {
            address: '0xc19A05c1F77856a02AB91C80784a6175Da750F80',
            deploymentBlock: 4317290
        },
        local: {
            address: '',
            deploymentBlock: 0
        }
    });
};

module.exports = {
    getNetwork,
    networkSplitter,
    getNiftyFootballBlindPack,
    getNiftyFootballEliteBlindPack,
    getNiftyFootballNft,
};
