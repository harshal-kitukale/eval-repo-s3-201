import '../styles/globals.css'
import Githubpage from './githubpage'
export default function App({ Component, pageProps }) {
  return <>
    <Githubpage />
    <Component {...pageProps} />
  </>
}
