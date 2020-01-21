import React from 'react';
import Link from 'next/link';

const Nav = () => (
  <nav>
    <br />
    <Link href='/'><a>Go to Home</a></Link>
    <br />

    <style jsx>{`
      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-weight: bold;
        margin: 10px;
      }
    `}</style>
  </nav>
)

export default Nav;
