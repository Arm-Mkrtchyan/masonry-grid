import { useImages } from "@/providers/imagesProvider.tsx";
import ImageItem from "@/components/imageItem";
import { EmptyPage, ImagesContainer } from "./styled.ts";

function Home() {
  const { imageList, searchValue } = useImages()

  return (
    <>
      {searchValue && !imageList.length
        ? <EmptyPage>
            No images matched your search.
          </EmptyPage>
        : <ImagesContainer>
          {imageList.map(img => (
            <ImageItem
              src={img.src.medium}
              imageId={img.id}
              width={img.width}
              height={img.height}
              alt={img.alt}
              key={img.id}
            />)
          )}
        </ImagesContainer>
      }
    </>
  )
}

export default Home
