import React from "react";

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`${className} bg-indigo-800 md:flex items-center justify-between`}
    >
      <div className="py-6 max-w-screen-lg m-auto md:flex grow justify-between text-lg">
        <div className="w-full flex items-center justify-center md:justify-start mb-2 md:mb-0">
          <p className="">The online home of Russell Snyder</p>
        </div>
        <div className="w-full flex items-center justify-center md:justify-end">
          <p>&copy; {currentYear} Rustybass. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
