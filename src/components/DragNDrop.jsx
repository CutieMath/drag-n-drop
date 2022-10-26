import { useState, useRef } from "react";

function DragNDrop({ data }) {
  const [list, setList] = useState(data);
  const [dragging, setDragging] = useState(false);

  const itemBeenDragged = useRef();

  const handleDragStart = (e, params) => {
    console.log("dragstart:", params);
    itemBeenDragged.current = params;
    setDragging(true);
  };

  const getStyles = ({ groupIndex, itemIndex }) => {
    if (
      groupIndex === itemBeenDragged.current.groupIndex &&
      itemIndex === itemBeenDragged.current.itemIndex
    ) {
      return "current dnd-item";
    }
    return "dnd-item";
  };

  return (
    <div className="dnd-container">
      {list.map((group, groupIndex) => (
        <div className="dnd-group" key={group.title}>
          <div className="group-title">{group.title}</div>
          {group.items.map((item, itemIndex) => (
            <div
              draggable
              onDragStart={(e) => {
                handleDragStart(e, { groupIndex, itemIndex });
              }}
              className={
                dragging ? getStyles({ groupIndex, itemIndex }) : "dnd-item"
              }
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default DragNDrop;
