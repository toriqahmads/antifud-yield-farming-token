import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'FUD-BUSD LP',
    lpAddresses: {
      97: '0xF1E2adB57669611dF272Bf6C73323495C9358270',
      56: '',
    },
    tokenSymbol: 'FUD',
    tokenAddresses: {
      97: '0x40eA269D037734523f701Da9084c8c65672137fb',
      56: '',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    lpSymbol: 'FUD-BNB LP',
    lpAddresses: {
      97: '0x86d14eE9608AE6A4f26F6637dDB9C622D8d5a9F7',
      56: '',
    },
    tokenSymbol: 'FUD',
    tokenAddresses: {
      97: '0x40eA269D037734523f701Da9084c8c65672137fb',
      56: '',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '0x84642De51dD87eFD728aaa9dc94B22e23a9b3c76',
      56: '',
    },
    tokenSymbol: 'FUD',
    tokenAddresses: {
      97: '0x40eA269D037734523f701Da9084c8c65672137fb',
      56: '',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    lpSymbol: 'FUD',
    isTokenOnly: true,
    lpAddresses: {
      97: '0x40eA269D037734523f701Da9084c8c65672137fb',
      56: '',
    },
    tokenSymbol: 'FUD',
    tokenAddresses: {
      97: '0x40eA269D037734523f701Da9084c8c65672137fb',
      56: '',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  // {
  //   pid: 12,
  //   isTokenOnly: true,
  //   lpSymbol: 'WATCH',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xdC6C130299E53ACD2CC2D291fa10552CA2198a6b', // WATCH-BNB LP
  //   },
  //   tokenSymbol: 'WATCH',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7A9f28EB62C791422Aa23CeAE1dA9C847cBeC9b0',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
]

export default farms
