import Link from "next/link";

export const metadata = {
  title: "Itaron DOG",
  description:
    "esta es la página de inición de secion de session de itaron dog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <h1>Nevegacion</h1>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/samuel">Samuel</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
