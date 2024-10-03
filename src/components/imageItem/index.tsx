import { Figure } from "@/components/imageItem/style.ts";
import {useNavigate} from "react-router-dom";

const ImageItem = ({src, alt, imageId}: {src: string; alt: string; imageId: string}) => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(`/preview/${imageId}`)
  }

  return (
    <Figure onClick={handleNavigate}>
      <img src={src} alt={alt} />
    </Figure>
  )
}
export default ImageItem

