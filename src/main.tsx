import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "@/providers/routerProvider.tsx";

createRoot(document.getElementById('root')!).render(<RouterProvider/>,)
