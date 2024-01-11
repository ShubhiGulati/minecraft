// NavBar.js
// NavBar.js
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav>
      <Link href="/">
        <a>About</a>
      </Link>
      <Link href="/about">
        <a>Schedule</a>
      </Link>
      <Link href="/services">
        <a>Prizes</a>
      </Link>
      <Link href="/contact">
        <a>Rules</a>
      </Link>
      <Link href="/tracks">
        <a>Tracks</a>
      </Link>
      <Link href="/judges">
        <a>Judges</a>
      </Link>
      <Link href="/contact">
        <a>FAQ</a>
      </Link>
      {/* Styling with styled-jsx */}
      <style jsx>{`
        nav {
          background-color: #1F1F1F;
          overflow: hidden;
        }

        a {
          float: left;
          display: block;
          color: white;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
        }

        a:hover {
          background-color: #ddd;
          color: black;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
