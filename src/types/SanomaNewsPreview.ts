export interface SanomaNewsPreview {
  id: number
  href: string
  displayDate: string
  title: string
  picture: Picture
  ingress: string
  paidType: string
  storyLogo: string
  category: string
  infoRowEnabled: boolean
}

export interface Picture {
  id: number
  width: number
  height: number
  url: string
  squareUrl: string
  caption: string
  photographer: string
}
