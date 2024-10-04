import React from "react";
import { Figure } from "@/components/imageItem/style.ts";
import {useNavigate} from "react-router-dom";

interface IProps {
  src: string;
  alt: string;
  imageId: string
}

const ImageItem = ({src, alt, imageId}:IProps ) => {
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
export default React.memo(ImageItem);

