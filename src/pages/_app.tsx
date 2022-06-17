import '@/styles/global.css'
import type { AppProps } from 'next/app'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
       <ToastContainer />
  <Component {...pageProps} />
    </>
  ) 
}
