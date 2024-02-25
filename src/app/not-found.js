import React from "react";
import styles from "./homepage.module.css";
import { BLOG_TITLE } from "@/constants";

export const metadata = {
  title: `404 • ${BLOG_TITLE}`,
  description: "This page doesn't exist",
};

function NotFound() {
  return (
    <div className={styles.wrapper}>
      <h1>404</h1>
      <p>
        You are totally in the wrong place. Do not pass GO; do not collect $200.
      </p>
    </div>
  );
}

export default NotFound;
