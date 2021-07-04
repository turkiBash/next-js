import { ChakraProvider } from "@chakra-ui/react"
import Header from "../components/Header"
import Footer from '../components/Footer'

const  MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </ChakraProvider>
  )
}

export default MyApp
