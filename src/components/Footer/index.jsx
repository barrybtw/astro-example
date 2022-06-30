import { h } from "preact";
import Styles from "./styles.module.scss";

function Footer() {
  return (
    <footer className={Styles.footer}>
      &copy; {new Date().getFullYear()} Barry
      <small className={Styles.byline}>🚀 Built by Barry</small>
    </footer>
  );
}
export default Footer;
