import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

function NotificationIndicator(): JSX.Element {
  const theme = useContext(ThemeContext);

  return (
    <svg viewBox="0 0 8 8" height="8" width="8" fill={theme.colors.accent}>
      <circle cx="4" cy="4" r="4" />
    </svg>
  );
}

export default NotificationIndicator;
