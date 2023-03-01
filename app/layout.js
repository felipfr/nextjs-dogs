import { UserStorage } from "@/src/UserContext";
import Header from "@/src/Components/Header";
import Footer from "@/src/Components/Footer";
import "./globals.css";

export const metadata = {
  title: {
    default: 'Fotos',
    template: '%s | Dogs',
  },
  description: "Home do site Dogs, com o feed de fotos.",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#fb1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="apple-touch-icon" href="img/logo192.png" />
        <link rel="manifest" href="manifest.json" />
      </head>
      <UserStorage>
        <body>
          <div className="App">
          <Header />
          <main className="AppBody">{children}</main>
          <Footer />
          </div>
        </body>
      </UserStorage>
    </html>
  );
}
