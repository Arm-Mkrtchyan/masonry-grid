import { useState } from "react";
// Internals
import { useImages } from "@/providers/imagesProvider.tsx";
import { Loader } from "@/components";
import { PreviewImage } from "./styled.ts";

function ImagePreview() {
  const { previewImage } = useImages()
  const [loading, setLoading] = useState(true)

  const handleImageLoaded = () => {
    setLoading(false)
  }

  return (
    <PreviewImage $loading={loading} $background={previewImage?.avg_color}>
      { loading && <Loader/> }
      <img
        src={previewImage?.src.original}
        loading="lazy"
        alt={previewImage?.alt}
        onLoad={handleImageLoaded}
      />
    </PreviewImage>
  )
}

export default ImagePreview
