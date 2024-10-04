import {createContext, type ReactNode, useContext, useEffect, useState} from 'react'
import fetchData from "@/utils/fetchData";
import {IMAGES_API} from "@/utils/constants";
import {useNavigate, useParams} from "react-router-dom";

export interface ImagesContextType {
  imageList: any[]
  previewImage: any
  loading: boolean
}

export const ImagesContext = createContext<ImagesContextType>({
  imageList: [],
  previewImage: null,
  loading: true
})

export const ImagesProvider = ({children}: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true)
  const [images, setImages] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);
  const { imageId } = useParams()
  const navigate = useNavigate()
  console.log('images... ', images)
  const handlePreviewImage = (imageId: string) => {
    const image = images.find((img: any) => img.id == imageId);
    if (image) {
      setPreviewImage(image)
    } else {
      navigate('/')
    }
  }

  useEffect(() => {
    fetchData(`${IMAGES_API}?page=3&per_page=20`).then((res: any) => {
      setImages(res.photos)
      setLoading(false)
    }).catch(e => {
      console.log('Failed to fetch images: ', e)
      setLoading(false)
    })
  }, []);

  useEffect(() => {
    if (!loading) {
      if(imageId) {
        handlePreviewImage(imageId)
      } else {
        setPreviewImage(null)
      }
    }
  }, [loading, imageId]);

  return (
    <ImagesContext.Provider
      value={{
        imageList: images,
        previewImage,
        loading
      }}
    >
      {children}
    </ImagesContext.Provider>
  )
}


export const useImages = (): ImagesContextType => {
  return useContext(ImagesContext)
}