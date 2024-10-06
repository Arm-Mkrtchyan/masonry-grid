export interface IImage {
  id: string
  alt: string
  photographer: string
  width: number
  height: number
  src: {[key: string]: string}
}