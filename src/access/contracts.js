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
            address: "0x4289275F8e39Fc881d09bbE2F312eD256794D2Be",
            deploymentBlock: 5469538
        },
        rinkeby: {
            address: "0x484C1c5D504AE9c2F2880Bf8257eCBb889dbfaB1",
            deploymentBlock: 4265290
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
            address: "0x56a919eCb5EeD6f2C6b228290C1E5414a85da97A",
            deploymentBlock: 5469528
        },
        rinkeby: {
            address: "0x5ef5E9caE498D2CD3CB631B730C0310141aA0970",
            deploymentBlock: 4265284
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
