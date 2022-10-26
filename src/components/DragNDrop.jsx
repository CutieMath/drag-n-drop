import { useState } from "react";

const DragNDrop = ({ data }) => {
  const [list, setList] = useState(data);
  return (
    <div className="dnd-container">
      {list.map((group, index) => (
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
