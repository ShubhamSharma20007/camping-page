
import './App.css';
import Header from './components/header';
import img1 from "./components/images/Axitec.png"
import img2 from "./components/images/Jinko.png"
import img3 from "./components/images/Nova.png"
import img4 from "./components/images/Solex.png"
import Contact from './components/contact';
import Firstcontainer from './components/firstcontainer';
import Turnel from './components/turnel';
function App() {
  const values =[
    {
      image1:img1,
    },
    {
      image1:img2,
    },
    {
      image1:img3,
    },
    {
      image1:img4,
    },
    {
      image1:img1,
    },
    {
      image1:img2,
    },
    {
      image1:img3,
    },
    {
      image1:img4,
    }

  ]
  

  return (
    <>
    <Header value= {values}/>
    {/* <Turnel/> */}
    <Firstcontainer/>
    {/* <Contact /> */}
    </>
  );
}

export default App;
