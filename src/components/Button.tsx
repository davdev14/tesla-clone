import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./button.css?inline";

interface buttonData {
  btnTxt: string;
  background: string;
  border: string;
  borderRadius: string;
  color: string;
  width: string;
  marginTop:string;
}

const Button = component$<buttonData>(
  ({ btnTxt, background, border, borderRadius, color, width, marginTop }) => {
    useStylesScoped$(styles);
    return (
      <div class='container'>
        <button
          type="button"
          style={{
            background,
            border,
            borderRadius,
            color,
            width,
            marginTop,
          }}
        >
          {btnTxt}
        </button>
      </div>
    );
  }
);

export default Button;
