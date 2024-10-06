import { useImages } from "@/providers/imagesProvider.tsx";
import { PreviewImage } from "@/pages/imagePreview/styled.ts";
import { Loader } from "@/components/loader";
import { useState } from "react";

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
