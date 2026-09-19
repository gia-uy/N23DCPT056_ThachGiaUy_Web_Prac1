import Header from "../components/Header";
import "./globals.css";

export const metadata = {
  title: "Blog Listing - Thạch Gia Uy",
  description: "Bài thực hành 1 NextJS & Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className="min-h-screen flex flex-col bg-[#f4efe7] text-[#3e3630] antialiased">
        <Header />
        <div className="flex-1">{children}</div>
        <footer className="mt-12 border-t border-[#dfe8ee] bg-[#f7f5f1] py-6 text-center text-sm text-[#6f7276]">
          © 2026 - Thạch Gia Uy (MSV: N23DCPT056)
        </footer>
      </body>
    </html>
  );
}
