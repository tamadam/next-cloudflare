"use client";

import styles from "./RandomText.module.css";
import Button from "../../../components/Button/Button";
import { handleContentPageRevalidate } from "@/app/actions/actions";

interface RandomTextProps {
  text: string;
}

const RandomText = ({ text }: RandomTextProps) => {
  return (
    <div className={styles.randomTextContainer}>
      <span>{text}</span>
      <form action={handleContentPageRevalidate}>
        <Button label="Revalidate" type="submit" />
      </form>
    </div>
  );
};

export default RandomText;
