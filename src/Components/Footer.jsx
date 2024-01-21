import { FaRegCopyright } from "react-icons/fa6";
function Footer() {
  return (
    <footer>
      <p className="m-0">
        <FaRegCopyright className="m-1" />
        Copyright {new Date().getFullYear()} Hiago de L. Zavarize. All Rights
        Reserved
      </p>
    </footer>
  );
}

export default Footer;
