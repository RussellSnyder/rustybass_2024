import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav>header Coming soon</nav>
      <main className="max-w-screen-lg m-auto px-4 py-8">{children}</main>
      <footer>footer Coming soon</footer>
    </>
  );
  // TODO figure out how to do a static layout
  // return (
  //   <html lang="en" suppressHydrationWarning>
  //     <body className={inter.className} suppressHydrationWarning>
  //       {children}
  //     </body>
  //   </html>
  // );
}
