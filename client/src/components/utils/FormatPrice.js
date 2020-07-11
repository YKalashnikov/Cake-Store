const toCurrency = price => {
    return new Intl.NumberFormat('en-US', {
      currency: 'USD',
      style: 'currency'
    }).format(price)
  }

export default toCurrency;