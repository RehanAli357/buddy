import { Link } from "react-router-dom";
import { ROUTES } from "../../Routes/routes";
import { LogoTextStyle } from "./style";

const Logo = () => {
  return (
    <Link to={ROUTES.HOME} style={{ textDecoration: "none" }}>
      <LogoTextStyle>Buddy</LogoTextStyle>
    </Link>
  );
};

export default Logo;
