
import { Providers } from "@/redux/provider";

import "../../styles/globals.css";

export const metadata = {
  title: "Portfolio",
  description: "App",
  icons: {
    icon: "/logo3.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="light" content="light only">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
