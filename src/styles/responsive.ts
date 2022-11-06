type Breakpoints = {
  [key: string]: number
}

export const breakpoints: Breakpoints = {
  tablet: 768,
  smartphone: 540,
}

type Mq = {
  [key: string]: string | any
}

const mq: Mq = new Object()
Object.keys(breakpoints).forEach((key) => {
  mq[key] = `@media screen and (max-width: ${breakpoints[key]}px)`
})

export default mq
