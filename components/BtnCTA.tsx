import Link from "next/link";
import { InteractiveHoverButton } from "./InteractiveUIButton";
import { ButtonProps } from "./ui/button";

function BtnCTA({ children, ...restProps }: ButtonProps) {
  return (
    <Link href={"mailto:umersaleem50@gmail.com"}>
      <InteractiveHoverButton {...restProps}>{children}</InteractiveHoverButton>
    </Link>
  );
}

export default BtnCTA;
