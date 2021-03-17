import { MenuEntry } from '@blzd-dev/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: "Exchange",
        href: "https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x2F16b8901957C1c3694958D27ba5f872080C3325",
      },
      {
        label: "Liquidity",
        href: "https://exchange.pancakeswap.finance/#/pool",
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Caves',
    icon: 'CaveIcon',
    href: '/caves',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x2F16b8901957C1c3694958D27ba5f872080C3325',
      },
    ],
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Github",
        href: "https://github.com/blzd-dev",
      },
      {
        label: "Docs",
        href: "https://docs.blizzard.money",
      },
      {
        label: "Blog",
        href: "https://medium.com/blizzardmoney",
      },
    ],
  },
]

export default config
