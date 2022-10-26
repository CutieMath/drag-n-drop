import React from "react";

const DragNDrop = () => {
  const data = [
    { title: "group 1", items: ["1", "2", "3", "4"] },
    { title: "group 2", items: ["5", "6", "7"] },
  ];
  return (
    <div className="dnd-container">
      {data.map((group, index) => (
        <div className="dnd-group" key={index}>
          <div className="group-title">{group.title}</div>
          {group.items.map((item, itemIndex) => (
            <div draggable className="dnd-item" key={itemIndex}>
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DragNDrop;
