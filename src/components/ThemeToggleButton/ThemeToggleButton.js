"use client";
import React from "react";
import { Sun, Moon } from "react-feather";
import Cookies from "js-cookie";
import VisuallyHidden from "@/components/VisuallyHidden";
import { LIGHT_TOKENS, DARK_TOKENS } from "@/constants";
import styles from "./ThemeToggleButton.module.css";

function ThemeToggleButton({ initialTheme }) {
  const [theme, setTheme] = React.useState(initialTheme);

  function handleToggleTheme() {
    const nextTheme = theme === "light" ? "dark" : "light";

    setTheme(nextTheme);

    Cookies.set("color-theme", nextTheme, {
      expires: 1000,
    });

    const root = document.documentElement;
    const colors = nextTheme === 'light' ? LIGHT_TOKENS : DARK_TOKENS;

    root.setAttribute('data-color-theme', nextTheme);
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }

  return (
    <button className={styles.action} onClick={handleToggleTheme}>
      {theme === "light" ? <Sun size="1.5rem" /> : <Moon size="1.5rem" />}
      <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
    </button>
  );
}

export default ThemeToggleButton;
