import "bootstrap/dist/css/bootstrap.min.css";
import { LiaExchangeAltSolid } from "react-icons/lia";
import ExchangeBtn from "./Components/ExchangeBtn";
import { useState } from "react";
import Footer from "./Components/Footer";

function App() {
  const [valorDec, setValorDec] = useState("");
  const [valorBin, setValorBin] = useState("");
  const [isDec2Bin, setIsDec2Bin] = useState(true);

  const handleDecChange = (event) => {
    setValorDec(event.target.value);
  };

  const handleBinChange = (event) => {
    setValorBin(event.target.value);
  };

  const handleExchange = () => {
    if (isDec2Bin) {
      let decValue = parseInt(valorDec, 10);
      if (!isNaN(decValue)) {
        setValorBin(decValue.toString(2));
      }
    } else {
      let binValue = parseInt(valorBin, 2);
      if (!isNaN(binValue)) {
        setValorDec(binValue.toString(10));
      }
    }
  };

  const handleIconClick = () => {
    setIsDec2Bin(!isDec2Bin);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">
        Conversor {isDec2Bin ? "DecToBin" : "BinToDec"}
      </h1>
      <div className="row justify-content-center">
        <div className="col-md-4 mb-3">
          <label className="form-label">
            {isDec2Bin ? "Decimal" : "Binário"}
          </label>
          <input
            type="text"
            className="form-control"
            value={isDec2Bin ? valorDec : valorBin}
            onChange={isDec2Bin ? handleDecChange : handleBinChange}
            placeholder={`Escreva um número ${
              isDec2Bin ? "decimal" : "binário"
            }`}
          />
        </div>
        <div className="col-md-1 d-flex mt-3 align-items-center justify-content-center">
          <LiaExchangeAltSolid onClick={handleIconClick} />
        </div>
        <div className="col-md-4 mb-3">
          <label className="form-label">
            {isDec2Bin ? "Binário" : "Decimal"}
          </label>
          <input
            type="text"
            className="form-control"
            value={isDec2Bin ? valorBin : valorDec}
            readOnly
            placeholder={`Número ${
              isDec2Bin ? "binário" : "decimal"
            } será exibido aqui`}
          />
        </div>
        <div className="col-md-2 justify-content-center d-flex mt-3 align-items-center">
          <ExchangeBtn onClick={handleExchange} />
        </div>
      </div>
      <div className="fixed-bottom justify-content-center d-flex align-items-center text-bg-primary">
        <Footer />
      </div>
    </div>
  );
}

export default App;
