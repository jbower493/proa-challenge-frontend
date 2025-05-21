import "./header.css";
import ProaLogo from "../../assets/proa-logo.png";

export function Header() {
  return (
    <header className="header">
      <img height="70px" src={ProaLogo} alt="Proa" />
    </header>
  );
}
