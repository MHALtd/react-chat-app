import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="max-w-[728px] mx-auto text-center">
      <section className="flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative">
        <Navbar />
      </section>
    </div>
  );
}

export default App;
