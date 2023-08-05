import React from 'react';
import ticketAnimation from './assets/ticket_animation.gif';
import ConnectWallet from './components/ConnectWallet';
import './styles/App.scss';

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="mintInformation">
          <div className="title">
            <svg className="svgLine" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 10">
              <g fill="#61DAFB">
                <path d="m0 0h1120" fill="#01a09e" stroke="#01a09e" strokeWidth="20" />
              </g>
            </svg>
            <h3 className="callActionText">Aproveche esta ofeta limitada!</h3>
          </div>
          <h2 className="titleText">Venta de tickets</h2>
          <ConnectWallet />
        </div>
        <div className="imgContainer">
          <img id="ticketAnimation" alt="Ticket" src={ticketAnimation}></img>
          {/* <button className="mintButton mobileVersion">Mint now</button> */}
        </div>
      </div>
    </div>
  );
};

export default App;
