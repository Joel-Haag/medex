import "bootstrap/dist/css/bootstrap.css";
// import "../styles/globals.css";
import "../styles/styles.css"
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
  }, [])

  useEffect(() => {
    AOS.init({
      // easing: "ease-out-cubic",
      // once: true,
      // offset: 50,
      duration : 2000
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
