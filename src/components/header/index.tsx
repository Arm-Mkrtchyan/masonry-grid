import {
  ImagePreviewDetails,
  StyledHeader,
  PhotographerName,
  BackButton,
  Info,
  PhotoDescription
} from "@/components/header/style.ts";
import { useImages } from "@/providers/imagesProvider.tsx";
import BackIcon from '@/assets/backIcon.svg?react'
import {useNavigate} from "react-router-dom";

const Header = () => {
  const { previewImage } = useImages()
  const navigate = useNavigate()

  const handleBackToHome = () => navigate('/')

  return (
    <StyledHeader>
      { previewImage && (
        <ImagePreviewDetails>
          <BackButton onClick={handleBackToHome}>
            <BackIcon/>
          </BackButton>
          <Info>
            <PhotographerName>{ previewImage.photographer }</PhotographerName>
            <PhotoDescription>{ previewImage.alt }</PhotoDescription>
          </Info>
        </ImagePreviewDetails>
      ) }
    </StyledHeader>
  )
}
export default Header

