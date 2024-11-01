import { ReactNode } from "react";
import "./globals.css";

type RootLayoutprovider = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutprovider) => {
  return (
    <html lang="en">
      <body className={"antialiased"}>{children}</body>
    </html>
  );
};

export default RootLayout;
