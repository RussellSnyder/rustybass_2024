import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
  // TODO figure out how to do a static layout
  // return (
  //   <html lang="en" suppressHydrationWarning>
  //     <body className={inter.className} suppressHydrationWarning>
  //       {children}
  //     </body>
  //   </html>
  // );
}
