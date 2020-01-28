import Link from "next/link";

const Nav = () => {
  return (
    <>
      <Link href="/">
        <a>Home!</a>
      </Link>
      <Link href="/sell">
        <a>Sell!</a>
      </Link>
    </>
  );
};

export default Nav;
