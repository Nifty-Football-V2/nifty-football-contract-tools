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

const getMigrations = (network) => {
    return networkSplitter(network, {
        mainnet: {
            address: '',
            deploymentBlock: 0
        },
        ropsten: {
            address: '0xb0D8b4f4d1b1Cb706F44E3a23b7D37387E6Ec3B9',
            deploymentBlock: 5526863
        },
        rinkeby: {
            address: '',
            deploymentBlock: 0
        },
        local: {
            address: '',
            deploymentBlock: 0
        }
    });
};

const getNiftyFootballNft = (network) => {
    return networkSplitter(network, {
        mainnet: {
            address: '',
            deploymentBlock: 0
        },
        ropsten: {
            address: '0xAC87C3a75566d4dd497b8658ca9259acD8e6937a',
            deploymentBlock: 5526868
        },
        rinkeby: {
            address: '',
            deploymentBlock: 0
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
            address: '0xb23f0a404B2194c1F33EbF9f05FBe546F917C9Bc',
            deploymentBlock: 5526874
        },
        rinkeby: {
            address: '',
            deploymentBlock: 0
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
            address: '0x1589638201c2f7399a8345926bb7aEbceAf95e54',
            deploymentBlock: 5526883
        },
        rinkeby: {
            address: '',
            deploymentBlock: 0
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
    getMigrations,
    getNiftyFootballBlindPack,
    getNiftyFootballEliteBlindPack,
    getNiftyFootballNft,
};
