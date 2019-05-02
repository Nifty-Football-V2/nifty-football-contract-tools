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
            address: '0x55787a03dA7BD3dF55539aA7c65B357584c9Eb21',
            deploymentBlock: 5507367
        },
        rinkeby: {
            address: '0x9f8Da275f3B12A7f42a6F4520e7aD5b4abC7b53A',
            deploymentBlock: 4310943
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
            address: '0x2120599d379492452e2Ad95d8E348ed24b94F04b',
            deploymentBlock: 5507374
        },
        rinkeby: {
            address: '0x45B3a2DBB88A9E83677308b375762233679Db639',
            deploymentBlock: 4310946
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
            address: '',
            deploymentBlock: 5507374
        },
        rinkeby: {
            address: '0x2A56C8e2c8d82386C2A9E146b9fedf22612B57a9',
            deploymentBlock: 4310950
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
