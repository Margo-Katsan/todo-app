import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "./store/store";

export const metadata: Metadata = {
  title: "Todo App",
  description: "Simple todo app with FastAPI and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
