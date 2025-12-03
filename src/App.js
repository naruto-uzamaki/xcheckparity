import { useState } from 'react';
import './App.css';

function App() {

  const [parity, setParity] = useState("");
  const [data, setData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const num = Number(data);

    if (isNaN(num)) {
      setParity("NA");
      return;
    }

    if (num % 2 === 0) {
      setParity("Even");
    } else {
      setParity("Odd");
    };
  }

  const renderContent = () => {
    if (parity === "NA") {
      return <p>Not a valid number!</p>;
    }

    if (parity === "Even") {
      return <p>The number {data} is even!</p>
    }

    if (parity === "Odd") {
      return <p>Oops, {data} is odd!</p>
    }
    return null;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <h1>Even or Odd Checker</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <input name='number' placeholder='Enter a number' value={data} onChange={(e) => setData(e.target.value)} />
        <button type='submit' style={{ padding: "10px", backgroundColor: "blue", color: "white", margin: "10px", borderRadius: "8px" }}>Check</button>
      </form>
      {renderContent()};
    </div>
  );
}

export default App;
