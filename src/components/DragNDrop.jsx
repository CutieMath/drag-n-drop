import { useState, useRef } from "react";

const DragNDrop = ({ data }) => {
  const [list, setList] = useState(data);
  const itemBeenDragged = useRef();

  const handleDragStart = (e, params) => {
    console.log("dragstart:", params);
    itemBeenDragged.current = params;
  };

  return (
    <div className="dnd-container">
      {list.map((group, groupIndex) => (
        <div className="dnd-group" key={groupIndex}>
          <div className="group-title">{group.title}</div>
          {group.items.map((item, itemIndex) => (
            <div
              draggable
              onDragStart={(e) => {
                handleDragStart(e, { groupIndex, itemIndex });
              }}
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
