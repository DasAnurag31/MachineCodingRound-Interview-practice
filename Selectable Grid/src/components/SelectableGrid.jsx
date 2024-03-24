import React, { useState, useCallback } from "react";

const SelectableGrid = ({ rows, cols }) => {
  // States
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [selectedBoxes, setSelectedBoxes] = useState([]);

  // Event Handlers
  const handleMouseDown = (boxNumber) => {
    setIsMouseDown(true);
    setSelectedBoxes([boxNumber]);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseEnter = (boxNumber) => {
    if (isMouseDown) {
      const startBox = selectedBoxes[0];
      const endBox = boxNumber;

      const startRow = Math.floor((startBox - 1) / cols);
      const startCol = (startBox - 1) % cols;

      const endRow = Math.floor((endBox - 1) / cols);
      const endCol = (endBox - 1) % cols;

      const minRow = Math.min(startRow, endRow);
      const maxRow = Math.max(startRow, endRow);
      const minCol = Math.min(startCol, endCol);
      const maxCol = Math.max(startCol, endCol);

      const selected = [startBox];
      for (let row = minRow; row <= maxRow; row++) {
        for (let col = minCol; col <= maxCol; col++) {
          selected.push(row * cols + col + 1);
        }
      }
      console.log(selected);
      setSelectedBoxes(selected);
    }
  };

  return (
    <div
      className="grid"
      style={{ "--rows": rows, "--cols": cols }}
      onMouseUp={handleMouseUp}
    >
      {Array(rows * cols)
        .fill(0)
        .map((ele, index) => (
          <div
            key={index + 1}
            onMouseDown={() => handleMouseDown(index + 1)}
            onMouseEnter={() => handleMouseEnter(index + 1)}
            className={`box ${
              selectedBoxes.includes(index + 1) ? "selected" : ""
            }`}
          >
            {index + 1}
          </div>
        ))}
    </div>
  );
};

export default SelectableGrid;
