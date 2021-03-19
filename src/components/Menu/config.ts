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
        href: "https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xb183b6E504FB7e27C0a19AD43B0B5f2Ac3d67bf5",
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
        href: 'https://pancakeswap.info/token/0xb183b6E504FB7e27C0a19AD43B0B5f2Ac3d67bf5',
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
