import '../styles/global.css';

export default function App({ Component, pageProps}) {
    {/*below is comm */}
    console.log("_app.js", {Component})
    return <Component {...pageProps} />;
}