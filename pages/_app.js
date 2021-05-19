import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />; //this is whatever is returned, i.e, the page that we currently see.
}

export default MyApp;
