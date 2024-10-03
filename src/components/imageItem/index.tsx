import { Figure } from "@/components/imageItem/style.ts";

const ImageItem = ({src, alt}: {src: string; alt: string}) => {
  return (
    <Figure>
      <img src={src} alt={alt} />
    </Figure>
  )
}
export default ImageItem

