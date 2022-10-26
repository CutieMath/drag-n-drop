import { useState } from "react";

const DragNDrop = ({ data }) => {
  const [list, setList] = useState(data);

  const handleDragStart = (e, index) => {
    console.log("dragstart:", e);
  };

  return (
    <div className="dnd-container">
      {list.map((group, index) => (
        <div className="dnd-group" key={index}>
          <div className="group-title">{group.title}</div>
          {group.items.map((item, itemIndex) => (
            <div
              draggable
              onDragStart={handleDragStart}
              className="dnd-item"
              key={itemIndex}
            >
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DragNDrop;
