//localhost:3000/news

import { Fragment } from "react";
import Link from "next/link";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/nextjs">NextJS Framework</Link>
        </li>
        <li>
          <Link href="/reactjs">NextJS Framework</Link>ReactJS Framework
        </li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
