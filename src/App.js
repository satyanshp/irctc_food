import "./App.css";
import { Icon } from "@iconify/react";
import Footer from "./Components/Footer";
import Irctc from "./Components/Irctc";
import Partner from "./Components/Partner";
import Benifits from "./Components/Benifits";
import React from "react";

function App() {
  const [radioValue, setRadioValue] = React.useState("pnr");
  const placeHolder = () => {
    if(radioValue==="pnr"){
      return "PNR number"
    }
    else if(radioValue==="train_Name"){
      return "Train Name / no."
    }
    else{
      return "Station Name"
    }
  }
  return (
    <div className="App">
      <header>
        <nav>
          <img
            src="https://www.zoopindia.com/assets/images/logo-top.webp?w=96&q=75"
            alt="logo"
            width={88}
            height={43.6}
            style={{ marginLeft: "8px" }}
          />
          <button>Login</button>
        </nav>
      </header>
      <section className="main_body">
        <img
          src="https://www.zoopindia.com/_next/image?url=%2Fbanner_21_dec_23.webp&w=580&q=75"
          alt="hearder"
        />
        <h1>Order Food on Train</h1>
        <form id="radio_form" onChange={(e)=>{setRadioValue(e.target.value)}}>
          <div>
            <input 
              type="radio" 
              value="pnr" 
              id="pnr" 
              name="radio_form" 
              checked={radioValue==="pnr"} 
            />
            <label for="pnr">PNR</label>
          </div>
          <div>
            <input
              type="radio"
              value="train_Name"
              id="trainName"
              name="radio_form"
              checked={radioValue==="train_Name"}
            />
            <label for="trainName">Train Name/No.</label>
          </div>
          <div>
            <input
              type="radio"
              value="station"
              id="station"
              name="radio_form"
              checked={radioValue==="station"}
            />
            <label for="station">Station</label>
          </div>
        </form>
        <div className="search">
          <input type="text" placeholder={`Enter ${placeHolder()} to Order`} />
          <button>SUBMIT</button>
        </div>
        <Irctc/>
        <img src="https://www.zoopindia.com/_next/image?url=%2FofferBanner.webp&w=580&q=75" alt="" width={"100%"}/>
        <Partner/>
        <Benifits/>
      </section>
      <footer>
        <nav>
          <div>
            <div>
              <Icon icon="ion:home-outline" width={"90%"} />
            </div>
            <p>Home</p>
          </div>
          <div>
            <div><Icon icon="ion:train-outline" width={"100%"} /></div>
            <p>Train Tools</p>
          </div>
          <div>
          <div><Icon icon="ion:fast-food-outline" width={"100%"} /></div>
            <p>Orders</p>
          </div>
          <div>
          <div><Icon icon="ion:gift-outline" width={"100%"} /></div>
            <p>Offers</p>
          </div>
          <div>
          <div style={{width:'26px',height:'26px'}}><Icon icon="ph:squares-four" width={"100%"} /></div>
            <p style={{marginTop:'5px'}}>Menu</p>
          </div>
        </nav>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
