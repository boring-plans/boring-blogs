import fireworks from 'fireworks/lib/fireworks'

export const star = (ev) => {
  fireworks({
    x: ev.x,
    y: ev.y,
    colors: [
      '#4FC3F7',
      '#4DD0E1',
      '#303F9F',
      '#7E57C2',
      '#F8BBD0',
      '#FFAB91',
      '#E57373',
    ],
    bubbleSizeMaximum: 8,
  })
}

export const generalizeAmount = (amount) => {
  const k = Math.floor(amount / 1000)
  const m = Math.floor(amount / 1000000)
  return m > 0 ? `${m}m+` : k > 0 ? `${k}k+` : amount
}
