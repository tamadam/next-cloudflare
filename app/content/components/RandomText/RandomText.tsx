"use client";

import styles from "./RandomText.module.css";
import Button from "../../../components/Button/Button";
import {
  handleContentPageRevalidate,
  handleContentPageTagRevalidate,
} from "@/app/actions/actions";

interface RandomTextProps {
  text: string;
}

const RandomText = ({ text }: RandomTextProps) => {
  return (
    <div className={styles.randomTextContainer}>
      <span>{text}</span>
      <Button
        label="RevalidatePath"
        onClick={() => handleContentPageRevalidate()}
      />
      <Button
        label="RevalidateTag"
        onClick={() => handleContentPageTagRevalidate()}
      />
    </div>
  );
};

export default RandomText;
