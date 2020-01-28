import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>Hey!</h1>
      <Link href="/sell">
        <a>Sell!</a>
      </Link>
    </>
  );
};

export default Home;
