import QRImage from "./assets/images/image-qr-code.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="qr-container">
        <img src={QRImage} alt="" className="qr-image" />
        <body className="body-sec">
          <h3 className="heading">
            Improve your front-end skills by building projects
          </h3>
          <p className="small-text">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </body>
      </div>
    </div>
  );
}

export default App;
