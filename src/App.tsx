import './App.css'
import { Outlet } from "react-router-dom";
import { ImagesProvider}  from "@/providers/imagesProvider.tsx";

function App() {

  return (
    <ImagesProvider>
      <Outlet/>
    </ImagesProvider>
  )
}

export default App
