import { HeaderComponent, BoxIcon } from "./styles";
import { IoSkull } from "react-icons/io5";

export default function Header() {
  return (
    <HeaderComponent>
      <BoxIcon>
        <IoSkull className="Icon" />
      </BoxIcon>
    </HeaderComponent>
  );
}
