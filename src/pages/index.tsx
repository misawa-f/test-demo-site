import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>テストデモサイト</title>
      </Head>
      <div className="container mx-auto p-8 max-w-md">
        <h1 className="text-3xl font-bold text-gray-800">テストデモサイト</h1>
        <ul className="list-disc pl-5 mt-4">
          <li>
            <Link
              href="/locators"
              className="text-xl text-sky-500 hover:underline"
            >
              Locator
            </Link>
          </li>
          <li>
            <Link
              href="/actions"
              className="text-xl text-sky-500 hover:underline"
            >
              Action
            </Link>
          </li>
          <li>
            <Link
              href="/assertions"
              className="text-xl text-sky-500 hover:underline"
            >
              Assertion
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
