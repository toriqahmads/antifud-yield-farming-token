import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 2,
    lpSymbol: 'BLZD-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x7c5A7AEf5B3f4b38aCB9629fc5Ad3307e0B65F2B',
    },
    tokenSymbol: 'BLZD',
    tokenAddresses: {
      97: '',
      56: '0x2F16b8901957C1c3694958D27ba5f872080C3325',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    lpSymbol: 'BLZD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0c95e5DE6216b8C44f1c3e33C2c206A78Ad8e8d2',
    },
    tokenSymbol: 'BLZD',
    tokenAddresses: {
      97: '',
      56: '0x2F16b8901957C1c3694958D27ba5f872080C3325',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1B96B92314C44b159149f7E0303511fB2Fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 4,
    lpSymbol: 'BTCB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7561eee90e24f3b348e1087a005f78b4c8453524',
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 5,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x70d8929d04b60af4fb9b58713ebcf18765ade422',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 6,
    lpSymbol: 'CAKE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 7,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  // caves
  {
    pid: 0,
    isTokenOnly: true,
    lpSymbol: 'BLZD',
    lpAddresses: {
      97: '',
      56: '0x7c5A7AEf5B3f4b38aCB9629fc5Ad3307e0B65F2B', // BLZD-BUSD LP
    },
    tokenSymbol: 'BLZD',
    tokenAddresses: {
      97: '',
      56: '0x2F16b8901957C1c3694958D27ba5f872080C3325',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 8,
    isTokenOnly: true,
    lpSymbol: 'ALLOY',
    lpAddresses: {
      97: '',
      56: '0x4bE10283b2183032BE35E6537C9737DF5a3F6C4A', // ALLOY-BNB LP
    },
    tokenSymbol: 'ALLOY',
    tokenAddresses: {
      97: '',
      56: '0x5eF5994fA33FF4eB6c82d51ee1DC145c546065Bd',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 9,
    isTokenOnly: true,
    lpSymbol: 'BIFI',
    lpAddresses: {
      97: '',
      56: '0xd132D2C24F29EE8ABb64a66559d1b7aa627Bd7fD', // BIFI-BNB LP
    },
    tokenSymbol: 'BIFI',
    tokenAddresses: {
      97: '',
      56: '0xCa3F508B8e4Dd382eE878A314789373D80A5190A',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
]

export default farms
