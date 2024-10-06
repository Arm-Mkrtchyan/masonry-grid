import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Figure } from "./style.ts";

interface IProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  imageId: string
}

const ImageItem = (
  {
    src,
    alt,
    imageId,
    width,
    height
  }: IProps) => {
  const navigate = useNavigate()
  const ref = useRef<any>()
  const [loaded, setLoaded] = useState(false)

  const handleNavigate = () => {
    navigate(`/preview/${imageId}`)
  }
  const handleImageLoaded = () => {
    setLoaded(true)
  }

  useEffect(() => {
    if (ref.current) {
      const contRect = ref.current?.getBoundingClientRect()
      const contWidth = contRect?.width
      const contHeight = contRect?.width / (width / height)
      ref.current.style.width = `${contWidth}px`
      ref.current.style.height = `${contHeight}px`
    }
  }, [ref.current])

  useEffect(() => {
    if (loaded) {
      ref.current.style.width = `auto`
      ref.current.style.height = `auto`
    }
  }, [loaded])

  return (
    <Figure ref={ref} onClick={handleNavigate}>
      <img src={src} alt={alt} onLoad={handleImageLoaded}/>
    </Figure>
  )
}
export default React.memo(ImageItem);

