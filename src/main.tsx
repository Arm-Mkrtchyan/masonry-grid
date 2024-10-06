import { createRoot } from 'react-dom/client'
import { RouterProvider } from "@/providers/routerProvider.tsx";
import reportWebVitals from './reportWebVitals';

createRoot(document.getElementById('root')!).render(<RouterProvider/>,)

const sendToAnalytics = (metric: any) => {
  console.log(metric);
};

reportWebVitals(sendToAnalytics);