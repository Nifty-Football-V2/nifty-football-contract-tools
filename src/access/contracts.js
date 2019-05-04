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
            address: '0x98677e631aAC2a42CfFFB376CA2D1dB0793cA80f',
            deploymentBlock: 7692815
        },
        ropsten: {
            address: '0xb0D8b4f4d1b1Cb706F44E3a23b7D37387E6Ec3B9',
            deploymentBlock: 5526863
        },
        rinkeby: {
            address: '0x58f122449948767a00eB67282e6A7a5B118061Ad',
            deploymentBlock: 4321198
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
            address: '0xbc5370374FE08d699cf7fcd2e625A93BF393cCC4',
            deploymentBlock: 7692821
        },
        ropsten: {
            address: '0xAC87C3a75566d4dd497b8658ca9259acD8e6937a',
            deploymentBlock: 5526868
        },
        rinkeby: {
            address: '0xcF9b8ad9586E0718Ca4ab3cfB8CdFe2b6247982A',
            deploymentBlock: 4321200
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
            address: '0xf6db17228226465c99fe09fe36d5e5bee438be3f',
            deploymentBlock: 7692908
        },
        ropsten: {
            address: '0xb23f0a404B2194c1F33EbF9f05FBe546F917C9Bc',
            deploymentBlock: 5526874
        },
        rinkeby: {
            address: '0x5127Cfff9E22D0CCe754a96fe300408323B2Da6c',
            deploymentBlock: 4321203
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
            address: '0x30008a3685f12b498d546bca7893449fa8bfb153',
            deploymentBlock: 7692923
        },
        ropsten: {
            address: '0x1589638201c2f7399a8345926bb7aEbceAf95e54',
            deploymentBlock: 5526883
        },
        rinkeby: {
            address: '0xB363492F0a1665F9Da5C6Dd4955E2e7577c76439',
            deploymentBlock: 4321207
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
