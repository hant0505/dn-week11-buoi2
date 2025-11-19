import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then(res => res.text())
      .then(setMsg)
      .catch(e => setMsg("Could not reach backend: " + e.message));
  }, []);

  return (
    <div style={{ padding: "40px", fontSize: "18px" }}>
      <h1>React Frontend</h1>
      <p>Backend says: {msg}</p>
      <button onClick={async () => {
        const res = await fetch("/api/cpu");
        const txt = await res.text();
        alert(txt);
      }}>Call CPU endpoint (creates load)</button>
    </div>
  );
}

export default App;
