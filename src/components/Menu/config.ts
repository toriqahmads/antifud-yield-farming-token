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
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x40ea269d037734523f701da9084c8c65672137fb',
        external: true,
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/add/BNB/0x40ea269d037734523f701da9084c8c65672137fb',
        external: true,
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
        href: 'https://pancakeswap.info/token/0x40ea269d037734523f701da9084c8c65672137fb',
        external: true,
      },
    ],
  },
  {
    label: 'Github',
    icon: 'GithubIcon',
    href: 'https://github.com/blzd-dev',
    external: true,
  },
  {
    label: 'Blog',
    icon: 'MediumIcon',
    href: 'https://blizzardmoney.medium.com',
    external: true,
  },
  {
    label: 'Audit',
    icon: 'AuditIcon',
    external: true,
    href: '/files/gemzAudit.pdf',
  },
]

export default config
