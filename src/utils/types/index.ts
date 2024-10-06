export interface IImage {
  id: string
  alt: string
  photographer: string
  avg_color: string
  width: number
  height: number
  src: {[key: string]: string}
}