import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#dfe8ee] bg-[#f4efe7]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-black tracking-tight text-[#3e3630]">
          Uy<span className="text-[#7e8f9d]">Blog</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#4a4743] md:flex">
          <Link href="/" className="transition hover:text-[#3e3630]">
            Trang chủ
          </Link>
          <Link href="/" className="transition hover:text-[#3e3630]">
            Bài viết
          </Link>
        </nav>
      </div>
    </header>
  );
}
