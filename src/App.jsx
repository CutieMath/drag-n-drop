import { useState } from "react";
import DragNDrop from "./components/DragNDrop";

const data = [
  { title: "group 1", items: ["1", "2", "3", "4"] },
  { title: "group 2", items: ["5", "6", "7"] },
];

const App = () => {
  return (
    <div className="container">
      <DragNDrop data={data} />
    </div>
  );
};

export default App;
