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
        external: true
      },
      {
        label: "Liquidity",
        href: "https://exchange.pancakeswap.finance/#/pool",
        external: true
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
    label: 'Blizzard',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x2F16b8901957C1c3694958D27ba5f872080C3325',
        external: true
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
        external: true
      },
      {
        label: "Docs",
        href: "https://blizzardmoney.medium.com",
        external: true
      },
      {
        label: "Blog",
        href: "https://blizzardmoney.medium.com",
        external: true
      },
    ],
  },
]

export default config
