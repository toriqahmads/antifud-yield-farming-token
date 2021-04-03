import { useEffect } from 'react'
import { usePriceFudBusd } from 'state/hooks'

const useGetDocumentTitlePrice = () => {
  const fudPriceUsd = usePriceFudBusd()

  const fudPriceUsdString = fudPriceUsd.eq(0)
    ? ''
    : ` - $${fudPriceUsd.toNumber().toLocaleString(undefined, {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3,
      })}`

  useEffect(() => {
    document.title = `ANTIFUD.MONEY${fudPriceUsdString}`
  }, [fudPriceUsdString])
}
export default useGetDocumentTitlePrice
