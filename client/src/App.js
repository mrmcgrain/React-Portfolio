import Nav from "./components/Nav/Nav"
import "./global.css"
import { Outlet, useOutlet } from 'react-router'
import About from "./components/About/About"
import './App.css'

function App() {


  return (
    <div className="App">
      <header className="App-header"></header>
      About
      <body>
        <div id="mainContainer" style={{ width: '100%', height: '100%' }} className="flex f-col">

          <section id="topNav">

            <div id="leftNav"
              // className="border"
              style={{ width: '100%' }}
            // style={{marginRight: "20px"}}
            >
              <Nav />
            </div>

          </section>


          <section id='ContentBody'>

            <div id="outletContent" className="border" style={{height: '500px'}}
            // style={{ marginLeft: "20px", width: "40%" }}
            >
              {useOutlet ? <Outlet /> : <About />}
            </div>

          </section>

        </div>



      </body>





    </div >
  );
}

export default App;
