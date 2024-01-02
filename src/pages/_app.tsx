import type { AppProps } from 'next/app'
import { globalStyle } from '@/styles/global'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

globalStyle()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer />
      <Component {...pageProps} />
    </>
  )
}
