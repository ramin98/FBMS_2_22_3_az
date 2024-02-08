import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  let arr = [
    { goodsName: "Koynek1", goodsPrice: 30 },
    { goodsName: "Koynek2", goodsPrice: 30 },
    { goodsName: "Koynek3", goodsPrice: 30 },
    { goodsName: "Koynek4", goodsPrice: 30 },
  ];

  return (
    <>
      <Header/>
      <Main arr={arr}/>
      <Footer arr={arr}/>
    </>
  )
}

export default App
