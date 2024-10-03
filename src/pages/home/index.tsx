import '../../App.css'
import styled from "styled-components";
import { useImages } from "@/providers/imagesProvider.tsx";
import ImageItem from "@/components/imageItem";
import { ImagesContainer } from "@/pages/home/styled.ts";

function Home() {
  const { imageList } = useImages()
  console.log('images. . .', imageList)
  return (
    <ImagesContainer>
      {imageList.map(img => (<ImageItem src={img.src.medium} alt={img.alt} key={img.id}/>))}
    </ImagesContainer>
  )
}

const Image = styled.img`
    
`

export default Home
