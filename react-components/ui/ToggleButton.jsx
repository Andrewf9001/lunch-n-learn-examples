import { useState } from "react";

const ToggleButton = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="toggle-button-container">
      <button onClick={() => setIsOpen((prev) => !prev)}>
        {title} {isOpen ? "▲" : "▼"}
      </button>

      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default ToggleButton;
