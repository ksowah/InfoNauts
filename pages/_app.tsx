import '../styles/globals.css'
import "react-toastify/dist/ReactToastify.css";
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import {StateProvider} from "../context/stateProvider"
import {initialState} from "../context/initialState"
import reducer from "../context/reducer"
function MyApp({ Component, pageProps }: AppProps) {
  return(
    <AnimatePresence exitBeforeEnter>
      <ToastContainer position='top-center' />
      <StateProvider reducer={reducer} initialState = {initialState}>
      <Component {...pageProps} />
      </StateProvider>
    </AnimatePresence>
  ) 
}

export default MyApp
