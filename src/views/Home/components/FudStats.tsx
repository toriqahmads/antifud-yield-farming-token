import React from 'react'
import { Card, CardBody, Heading, Text } from '@blzd-dev/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceFudBusd } from '../../../state/hooks'

const StyledFudStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const FudStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const farms = useFarms()
  const fudPrice = usePriceFudBusd()
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0)
  const fudSupply = getBalanceNumber(circSupply)
  const marketCap = fudPrice.times(circSupply)

  let fudPerBlock = 0
  if (farms && farms[0] && farms[0].fudPerBlock) {
    fudPerBlock = new BigNumber(farms[0].fudPerBlock).div(new BigNumber(10).pow(18)).toNumber()
  }

  return (
    <StyledFudStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(534, 'FUD Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{TranslateString(536, 'Total FUD Supply')}</Text>
          {fudSupply && <CardValue fontSize="14px" value={fudSupply} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(999, 'Market Cap')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(538, 'Total FUD Burned')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} decimals={0} />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(540, 'New FUD/block')}</Text>
          <Text bold fontSize="14px">
            {fudPerBlock}
          </Text>
        </Row>
      </CardBody>
    </StyledFudStats>
  )
}

export default FudStats
