import {createContext, Dispatch, type ReactNode, SetStateAction, useContext, useEffect, useState} from 'react'
import fetchData from "@/utils/fetchData";
import {IMAGES_API, IMAGES_API_ENDPOINT} from "@/utils/constants";
import {useNavigate, useParams} from "react-router-dom";
import { useDebounce } from "@/hooks";

export interface ImagesContextType {
  imageList: any[]
  searchValue: '',
  setSearchValue: Dispatch<SetStateAction<string>>,
  previewImage: any
  loading: boolean
}

export const ImagesContext = createContext<ImagesContextType>({
  imageList: [],
  searchValue: '',
  setSearchValue: () => {},
  previewImage: null,
  loading: true
})

export const ImagesProvider = ({children}: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true)
  const [images, setImages] = useState([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const debouncedSearchValue: string = useDebounce(searchValue, 800);
  const [previewImage, setPreviewImage] = useState(null);
  const { imageId } = useParams()
  const navigate = useNavigate()
  const handlePreviewImage = (imageId: string) => {
    const image = images.find((img: any) => img.id == imageId);
    if (image) {
      setPreviewImage(image)
    } else {
      navigate('/')
    }
  }

  const fetchImages = async (search?: string) => {
    setLoading(true)
    try {
      let res: {photos: any[]}
      if(search) {
        res = await fetchData(`${IMAGES_API}${IMAGES_API_ENDPOINT.SEARCH}${search}`)
      } else {
        res = await fetchData(`${IMAGES_API}${IMAGES_API_ENDPOINT.GET_LIST}?page=1&per_page=20`)
      }
      setImages(res.photos)
    } catch (e) {
      console.log("Failed to fetch images: ", e)
    }
    setLoading(false)

  }

  useEffect(() => {
    fetchImages(debouncedSearchValue)
  }, [debouncedSearchValue]);

  useEffect(() => {
    if (loading) return;

    if (imageId) {
      handlePreviewImage(imageId);
    } else {
      setPreviewImage(null);
    }
  }, [loading, imageId]);

  return (
    <ImagesContext.Provider
      value={{
        imageList: images,
        previewImage,
        searchValue,
        setSearchValue,
        loading
      } as ImagesContextType}
    >
      {children}
    </ImagesContext.Provider>
  )
}


export const useImages = (): ImagesContextType => {
  return useContext(ImagesContext)
}