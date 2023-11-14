import Nav from "../../util/Nav";
import Hero from "./Hero";
// import { useScroll } from "../../context/ScrollEventContext";
function Header() {
  // const scroll = useScroll();
  // console.log(scroll);
  return (
    <>
      <Nav />
      <Hero />
    </>
  );
}

export default Header;
