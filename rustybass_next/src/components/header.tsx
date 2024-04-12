import { useRouter } from "next/router";
import Link from "next/link";

interface Props {
  className?: string;
}

const activeClass = "bg-slate-700/20";
const linkClass = "text-lg px-4 py-10";

export const Header = ({ className }: Props) => {
  const router = useRouter();

  const isActive = (href: string) => router.pathname.startsWith(href);

  return (
    <header
      className={`bg-white/50 ${className} flex items-center justify-between`}
    >
      <nav className="max-w-screen-lg m-auto flex grow justify-between text-lg">
        <ul className="w-full flex items-center">
          <li>
            <Link href="/" className="text-3xl">
              Rustybass
            </Link>
          </li>
        </ul>
        <ul className="w-full flex items-center justify-end">
          <li>
            <Link
              href="/blog"
              className={`${linkClass} ${isActive("/blog") ? activeClass : ""}`}
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
