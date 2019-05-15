const NiftyFootballTradingCardAbi = require('./abi/NiftyFootballTradingCard');
const NiftyFootballTradingCardBlindPackAbi = require('./abi/NiftyFootballTradingCardBlindPack');
const NiftyFootballTradingCardEliteBlindPackAbi = require('./abi/NiftyFootballTradingCardEliteBlindPack');
const NiftyFootballTradingCardGeneratorAbi = require('./abi/NiftyFootballTradingCardGenerator');
const NiftyFootballTradingCardEliteGeneratorAbi = require('./abi/NiftyFootballTradingCardEliteGenerator');
const NiftyFootballAdminAbi = require('./abi/NiftyFootballAdmin');

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
            deploymentBlock: 7692821,
            abi: NiftyFootballTradingCardAbi,
        },
        ropsten: {
            address: '0xAC87C3a75566d4dd497b8658ca9259acD8e6937a',
            deploymentBlock: 5526868,
            abi: NiftyFootballTradingCardAbi,
        },
        rinkeby: {
            address: '0xcF9b8ad9586E0718Ca4ab3cfB8CdFe2b6247982A',
            deploymentBlock: 4321200,
            abi: NiftyFootballTradingCardAbi,
        },
        local: {
            address: '',
            deploymentBlock: 0,
            abi: NiftyFootballTradingCardAbi,
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
            deploymentBlock: 7692908,
            abi: NiftyFootballTradingCardBlindPackAbi,
        },
        ropsten: {
            address: '0xb23f0a404B2194c1F33EbF9f05FBe546F917C9Bc',
            deploymentBlock: 5526874,
            abi: NiftyFootballTradingCardBlindPackAbi,
        },
        rinkeby: {
            address: '0x5127Cfff9E22D0CCe754a96fe300408323B2Da6c',
            deploymentBlock: 4321203,
            abi: NiftyFootballTradingCardBlindPackAbi,
        },
        local: {
            address: '',
            deploymentBlock: 0,
            abi: NiftyFootballTradingCardBlindPackAbi,
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
            deploymentBlock: 7692923,
            abi: NiftyFootballTradingCardEliteBlindPackAbi,
        },
        ropsten: {
            address: '0x1589638201c2f7399a8345926bb7aEbceAf95e54',
            deploymentBlock: 5526883,
            abi: NiftyFootballTradingCardEliteBlindPackAbi,
        },
        rinkeby: {
            address: '0xB363492F0a1665F9Da5C6Dd4955E2e7577c76439',
            deploymentBlock: 4321207,
            abi: NiftyFootballTradingCardEliteBlindPackAbi,
        },
        local: {
            address: '',
            deploymentBlock: 0,
            abi: NiftyFootballTradingCardEliteBlindPackAbi,
        }
    });
};

/**
 * @return {address, deploymentBlock}
 */
const getNiftyFootballElitePackGenerator = (network) => {
    return networkSplitter(network, {
        mainnet: {
            address: '0xA23CB096b4e9440cF391818bFBAa7508d93ad219',
            deploymentBlock: 7692920,
            abi: NiftyFootballTradingCardEliteGeneratorAbi,
        },
        ropsten: {
            address: '0xB7D7c4A281f5FEF8562434A3bB607AEf2b822842',
            deploymentBlock: 5526879,
            abi: NiftyFootballTradingCardEliteGeneratorAbi,
        },
        rinkeby: {
            address: '0x831D9B2f49620409c825fd836cad726c9B5920a2',
            deploymentBlock: 4321206,
            abi: NiftyFootballTradingCardEliteGeneratorAbi,
        },
        local: {
            address: '',
            deploymentBlock: 0,
            abi: NiftyFootballTradingCardEliteGeneratorAbi,
        }
    });
};

/**
 * @return {address, deploymentBlock}
 */
const getNiftyFootballRegularPackGenerator = (network) => {
    return networkSplitter(network, {
        mainnet: {
            address: '0xfF511f5E620D75780F200f005A306f7C7bD30EB1',
            deploymentBlock: 7692885,
            abi: NiftyFootballTradingCardGeneratorAbi,
        },
        ropsten: {
            address: '0xe25E15aa517708c9797e2d6C77C218996E5B18D7',
            deploymentBlock: 5526871,
            abi: NiftyFootballTradingCardGeneratorAbi,
        },
        rinkeby: {
            address: '0x62EAeEa012D83828E0354C2E66fa14a6c0312961',
            deploymentBlock: 4321202,
            abi: NiftyFootballTradingCardGeneratorAbi,
        },
        local: {
            address: '',
            deploymentBlock: 0,
            abi: NiftyFootballTradingCardBlindPackAbi,
        }
    });
};

/**
 * @return {address, deploymentBlock}
 */
const getNiftyFootballAdmin = (network) => {
    return networkSplitter(network, {
        mainnet: {
            address: '0x20B1bc618F79D9977b7Cce3F0523128178ea6a7b',
            deploymentBlock: 7719606,
            abi: NiftyFootballAdminAbi,
        },
        ropsten: {
            address: '0xf9A29482c1Ea2DE777a9786B836DD79c35dd6102',
            deploymentBlock: 5556126,
            abi: NiftyFootballAdminAbi,
        },
        rinkeby: {
            address: '0x0',
            deploymentBlock: 0,
            abi: NiftyFootballAdminAbi,
        },
        local: {
            address: '',
            deploymentBlock: 0,
            abi: NiftyFootballAdminAbi,
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
    getNiftyFootballRegularPackGenerator,
    getNiftyFootballElitePackGenerator,
    getNiftyFootballAdmin,
};
