"use client";

import styles from "./Button.module.css";

interface ButtonProps {
  label: string;
  type: "submit" | "button";
  onClick?: () => void;
}

const Button = ({ label, type = "button", onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={styles.button} type={type}>
      {label}
    </button>
  );
};

export default Button;
