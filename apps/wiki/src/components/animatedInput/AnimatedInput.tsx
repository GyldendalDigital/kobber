import { useEffect, useState } from "react";
import * as styles from "./animatedInput.module.css";

let knutDone = false;

/** Half assed attempt to make a fancy input */
export const AnimatedInput = () => {
  const [placeHolder, setPlaceHolder] = useState<string | undefined>("");

  const knut = "Knut?";
  const gud = "Gyldendal DS?";

  useEffect(() => {
    const timeoutID = window.setTimeout(() => {
      if (placeHolder == undefined) return;

      if (knutDone) {
        setPlaceHolder(gud.slice(0, placeHolder.length + 1));
      } else {
        setPlaceHolder(knut.slice(0, placeHolder.length + 1));
      }
      if (placeHolder === knut) {
        knutDone = true;
        setTimeout(() => {
          setPlaceHolder("");
        }, 2000);
      }
      if (placeHolder === gud) {
        setTimeout(() => {
          setPlaceHolder(undefined);
        }, 2000);
      }
    }, 250);

    return () => window.clearTimeout(timeoutID);
  }, [placeHolder]);

  return (
    <input
      className={styles.input}
      type="text"
      name="forslag"
      placeholder={placeHolder}
      autoComplete="off"
    />
  );
};
