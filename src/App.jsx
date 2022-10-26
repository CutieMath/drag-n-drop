import { useState } from "react";
import DragNDrop from "./components/DragNDrop";

const data = [
  { title: "Group 0", items: ["0", "1", "2", "3"] },
  { title: "Group 1", items: ["4", "5", "6"] },
];

const App = () => {
  return (
    <div className="container">
      <DragNDrop data={data} />
    </div>
  );
};

export default App;
