import React, { ReactNode } from "react";

interface GridProps {
  columns: number;
  children: ReactNode;
}

const Grid: React.FC<GridProps> = ({ columns, children }) => {
  return (
    <div className="grid-container">
      {React.Children.map(children, (child, index) => (
        <div key={index} className="grid-column">
          {child}
        </div>
      ))}
      <style jsx>{`
        .grid-container {
          display: grid;
          grid-template-columns: repeat(${columns}, 1fr);
          grid-gap: 16px;
          margin: 16px;
          border-radius: 16px;
          border-width: 0px;
        }
        .grid-column {
          background-color: #ffffff;
          padding: 16px;
          /* height: 300px; */
          border-radius: 12px;
          box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        }
      `}</style>
    </div>
  );
};

export default Grid;
