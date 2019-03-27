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

/**
 * @return {address, deploymentBlock}
 */
const getNiftyFootballBlindPack = (network) => {
    return networkSplitter(network, {
        mainnet: {
            address: "",
            deploymentBlock: 0
        },
        ropsten: {
            address: "0x484C1c5D504AE9c2F2880Bf8257eCBb889dbfaB1",
            deploymentBlock: 5287257
        },
        rinkeby: {
            address: "",
            deploymentBlock: 0
        },
        local: {
            address: "0x2Da1eD1095478A8Cdab29d1F4F7884AD90a0C0c0",
            deploymentBlock: 0
        }
    });
};

const getNiftyFootballNft = (network) => {
    return networkSplitter(network, {
        mainnet: {
            address: "",
            deploymentBlock: 0
        },
        ropsten: {
            address: "0x5ef5E9caE498D2CD3CB631B730C0310141aA0970",
            deploymentBlock: 5287249
        },
        rinkeby: {
            address: "",
            deploymentBlock: 0
        },
        local: {
            address: "0x6904f0feF2FdfC3AeDE0124D036Ac4bE3182dDE8",
            deploymentBlock: 0
        }
    });
};

const getNiftyFootballMarketplace = (network) => {
    return networkSplitter(network, {
        mainnet: {
            address: "",
            deploymentBlock: 0
        },
        ropsten: {
            address: "0x170ED091263b8Dd08d682B423B61285411FB133f",
            deploymentBlock: 5287286
        },
        rinkeby: {
            address: "",
            deploymentBlock: 0
        },
        local: {
            address: "0x2A56C8e2c8d82386C2A9E146b9fedf22612B57a9",
            deploymentBlock: 0
        }
    });
};


const getHeadToHeadGame = (network) => {
    return networkSplitter(network, {
        mainnet: {
            address: "",
            deploymentBlock: 0
        },
        ropsten: {
            address: "0x508c2219e28CB9d88BEe3e225BCB4D6a47E407e6",
            deploymentBlock: 5287280
        },
        rinkeby: {
            address: "",
            deploymentBlock: 0
        },
        local: {
            address: "0x7cb8d512aAad53180cc086E3B43f91196978DDC9",
            deploymentBlock: 0
        }
    });
};

module.exports = {
    getNetwork,
    networkSplitter,
    getNiftyFootballBlindPack,
    getNiftyFootballNft,
    getNiftyFootballMarketplace,
    getHeadToHeadGame,
};
