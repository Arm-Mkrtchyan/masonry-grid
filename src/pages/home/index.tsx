import {useImages} from "@/providers/imagesProvider.tsx";
import ImageItem from "@/components/imageItem";
import {ImagesContainer} from "@/pages/home/styled.ts";

function Home() {
  const {imageList} = useImages()

  return (
    <ImagesContainer>
      { imageList.map(img => (
        <ImageItem
          src={ img.src.medium }
          imageId={ img.id }
          alt={ img.alt }
          key={ img.id }
        />)
      ) }
    </ImagesContainer>
  )
}

export default Home
