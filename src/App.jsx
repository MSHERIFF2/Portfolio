
import './App.css'
import Body from './components/body'
import Header from './components/header'
import Footer from './components/footer'



let App = () => {
  return (
    <>
      <div className="container">
        <Header />
        { <Body /> }
        <Footer />
      </div>


    </>
  )
}

export default App
