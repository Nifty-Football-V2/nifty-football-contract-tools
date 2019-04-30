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
            address: "0x2120599d379492452e2Ad95d8E348ed24b94F04b",
            deploymentBlock: 5507374
        },
        rinkeby: {
            address: "0x5412C3F20e0D7E98a3b839065958e979788DC9eA",
            deploymentBlock: 4299871
        },
        local: {
            address: "",
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
            address: "0x55787a03dA7BD3dF55539aA7c65B357584c9Eb21",
            deploymentBlock: 5507367
        },
        rinkeby: {
            address: "0x170ED091263b8Dd08d682B423B61285411FB133f",
            deploymentBlock: 4299867
        },
        local: {
            address: "",
            deploymentBlock: 0
        }
    });
};

module.exports = {
    getNetwork,
    networkSplitter,
    getNiftyFootballBlindPack,
    getNiftyFootballNft,
};
