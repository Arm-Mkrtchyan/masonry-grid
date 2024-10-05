import { useNavigate } from "react-router-dom";
import {
  ImagePreviewDetails,
  StyledHeader,
  PhotographerName,
  BackButton,
  Info,
  PhotoDescription,
  SearchComponent,
  SearchInput
} from "@/components/header/style.ts";
import { useImages } from "@/providers/imagesProvider.tsx";
import BackIcon from '@/assets/backIcon.svg?react'

const Header = () => {
  const { previewImage, searchValue, setSearchValue } = useImages()
  const navigate = useNavigate()

  const handleBackToHome = () => navigate('/')

  const handleChangeSearchValue = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <StyledHeader>
      { previewImage ? (
        <ImagePreviewDetails>
          <BackButton onClick={handleBackToHome}>
            <BackIcon/>
          </BackButton>
          <Info>
            <PhotographerName>{ previewImage.photographer }</PhotographerName>
            <PhotoDescription>{ previewImage.alt }</PhotoDescription>
          </Info>
        </ImagePreviewDetails>
      ) : (
        <SearchComponent>
          <SearchInput
            type='text'
            placeholder='Search'
            value={searchValue}
            onChange={handleChangeSearchValue}
          />
        </SearchComponent>
      ) }
    </StyledHeader>
  )
}
export default Header

