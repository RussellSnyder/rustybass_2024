import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Header } from "./header";
import { Footer } from "./footer";
import style from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header className={style.header} />
      <main className={`${style.main}`}>
        <div className="max-w-screen-lg m-auto py-8">{children}</div>
      </main>
      <Footer className={style.footer} />
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
