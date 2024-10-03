import {useImages} from "@/providers/imagesProvider.tsx";
import {PreviewHeader, PreviewImage} from "@/pages/imagePreview/styled.ts";
import {Loader} from "@/components/loader";
import {useEffect, useState} from "react";

function ImagePreview() {
  const {previewImage} = useImages()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (previewImage) {
      const img = new Image();
      img.src = previewImage.src.original;
      img.onload = () => {
        setLoading(false);
      };
      img.onerror = () => {
        setLoading(false);
      };
    }
  }, [previewImage]);
  return (
    <PreviewImage>
      {loading ? <Loader/> :
        (
          <>
            <PreviewHeader>
              {previewImage?.photographer}
            </PreviewHeader>
            <img src={previewImage.src.original} loading="lazy" alt={previewImage.alt}/>
          </>
        )}
    </PreviewImage>
  )
}

export default ImagePreview
