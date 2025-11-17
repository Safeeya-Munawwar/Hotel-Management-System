import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/")
      .then(res => setMessage(res.data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold text-blue-600">{message}</h1>
    </div>
  );
}

export default App;
