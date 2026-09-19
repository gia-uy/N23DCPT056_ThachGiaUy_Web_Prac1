import Link from "next/link";
import Badge from "./Badge";

const colorMap = {
  mist: "bg-[#c7d3db] text-[#3e3630] border-[#b5c4cf]",
  stone: "bg-[#a79a8a] text-[#fffaf2] border-[#95897d]",
  cream: "bg-[#fcf7df] text-[#3e3630] border-[#efe7c9]",
  ink: "bg-[#3e3630] text-[#f4efe7] border-[#2c2825]",
};

export default function BlogCard({ post }) {
  const badgeClass = colorMap[post.color] || colorMap.mist;

  return (
    <article className="flex h-full flex-col justify-between rounded-[1.8rem] border border-[#dfe8ee] bg-[#f8f6f3] p-5 shadow-[0_10px_25px_rgba(62,54,48,0.06)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(62,54,48,0.1)]">
      <div>
        <div className="mb-4">
          <Badge label={post.tag} color={post.color || "mist"} />
        </div>

        <h2 className="mb-3 text-xl font-black leading-snug text-[#3e3630] line-clamp-2">
          {post.title}
        </h2>

        <p className="mb-5 text-sm leading-6 text-[#4a4743] line-clamp-4">
          {post.body}
        </p>
      </div>

      <div className="flex items-center justify-between border-t border-[#e7e0d9] pt-4">
        <span className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-semibold ${badgeClass}`}>
          #{post.tag}
        </span>
        <Link
          href={`/blog/${post.id}`}
          className="rounded-full bg-[#3e3630] px-4 py-2 text-sm font-semibold text-[#f4efe7] transition hover:bg-[#2d2825]"
        >
          Xem thêm
        </Link>
      </div>
    </article>
  );
}
