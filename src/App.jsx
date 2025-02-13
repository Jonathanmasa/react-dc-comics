// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// App.jsx

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  // definisco l'array dei links e lo passo come props a header.jsx
  const navbarLinks = [
    { id: 1, text: "Characters", url: "#", current: false },
    { id: 2, text: "Comics", url: "#", current: true },
    { id: 3, text: "Movies", url: "#", current: false },
    { id: 4, text: "TV", url: "#", current: false },
    { id: 5, text: "Games", url: "#", current: false },
    { id: 6, text: "Collectables", url: "#", current: false },
    { id: 7, text: "Videos", url: "#", current: false },
    { id: 8, text: "Fans", url: "#", current: false },
    { id: 9, text: "Views", url: "#", current: false },
    { id: 10, text: "Shop", url: "#", current: false },
  ];
  return (
    <>
      <Header links= {navbarLinks} />
      <Main />
      <Footer />
    </>
  )
}

export default App
