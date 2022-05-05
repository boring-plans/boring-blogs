import fireworks from 'fireworks/lib/fireworks'

export const star = (ev) => {
  const div = document.createElement('div')
  div.style = 'position: fixed; width: 100vw; height:100vh; top: 0; left: 0; z-index: 999;'
  document.body.appendChild(div)
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
    parentNode: div,
  })
  setTimeout(() => div.remove(), 370)
}

export const generalizeAmount = (amount) => {
  const k = Math.floor(amount / 1000)
  const m = Math.floor(amount / 1000000)
  return m > 0 ? `${m}m+` : k > 0 ? `${k}k+` : amount
}
