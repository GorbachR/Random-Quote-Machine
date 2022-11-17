import React, { useState } from "react";

function ThemeButton({ setTheme }) {
  const [checked, setChecked] = useState(false);
  function handleThemeChange(e) {
    setChecked(e.target.checked);
    setTheme(e.target.checked ? "dark" : "light");
  }

  return (
    <div className="theme-switch mb-1 float-end">
      <input
        className="theme-switch-input min-h-8 w-14"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        checked={checked}
        onChange={handleThemeChange}
      />
    </div>
  );
}

export default ThemeButton;
