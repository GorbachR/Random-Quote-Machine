import React, { useState } from "react";

function ThemeButton({ setTheme }) {
  const [checked, setChecked] = useState(false);
  function handleThemeChange(e) {
    setChecked(e.target.checked);
    setTheme(e.target.checked ? "dark" : "light");
  }

  return (
    <div className="form-check theme-btn form-switch mb-1 float-right">
      <input
        className="form-check-input theme-btn min-h-8 w-14 "
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
