import {createContext, type ReactNode, useContext, useEffect, useState} from 'react'
import fetchData from "@/utils/fetchData";
import { IMAGES_API } from "@/utils/constants";

export interface ImagesContextType {
  imageList: any[]
  loading: boolean
}

export const ImagesContext = createContext<ImagesContextType>({
  imageList: [],
  loading: true
})

export const ImagesProvider = ({children}: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true)
  const [images, setImages] = useState([]);
  console.log('images. ', images)
  useEffect(() => {
    fetchData(IMAGES_API).then((res) => {
      setImages(res.photos)
      // setTimeout(() => {
        setLoading(false)
      // }, 1000)
    }).catch(e => {
      console.log('Failed to fetch images: ', e)
      setLoading(false)
    })
  }, []);

  return (
    <ImagesContext.Provider
      value={ {
        imageList: images,
        loading
      } }
    >
      { children }
    </ImagesContext.Provider>
  )
}


export const useImages = (): ImagesContextType => {
  return useContext(ImagesContext)
}