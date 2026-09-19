import BlogCard from "../components/BlogCard";

const topicMap = [
  { id: 1, title: "UI/UX Design System", body: "Thiết kế giao diện có hệ thống màu, khoảng cách và component nhất quán để tăng trải nghiệm người dùng.", tag: "UI/UX", color: "mist" },
  { id: 2, title: "React Hooks trong thực tế", body: "Cách quản lý state, side effect và logic tái sử dụng thông qua hooks trong ứng dụng frontend.", tag: "React", color: "stone" },
  { id: 3, title: "Tailwind CSS hiệu quả", body: "Xây dựng layout, spacing và responsive nhanh hơn bằng utility classes rõ ràng và dễ bảo trì.", tag: "Tailwind", color: "cream" },
  { id: 4, title: "SEO và Accessibility", body: "Tối ưu heading, cấu trúc nội dung và trải nghiệm truy cập để website dễ đọc hơn và thân thiện với người dùng.", tag: "SEO", color: "mist" },
  { id: 5, title: "Performance tối ưu web", body: "Giảm thời gian render, nén tài nguyên và cải thiện trải nghiệm trên thiết bị yếu hơn.", tag: "Performance", color: "stone" },
  { id: 6, title: "Branding qua màu sắc", body: "Màu sắc truyền cảm xúc và tạo nhận diện thương hiệu trong mỗi trải nghiệm sản phẩm.", tag: "Branding", color: "ink" },
  { id: 7, title: "Next.js App Router", body: "Hiểu rõ routing động, layout và dữ liệu trong Next.js để cấu trúc ứng dụng dễ mở rộng.", tag: "Next.js", color: "mist" },
  { id: 8, title: "Gọi API an toàn", body: "Xử lý dữ liệu, error state và loading state khi fetch dữ liệu từ API trong frontend.", tag: "API", color: "cream" },
  { id: 9, title: "Typography trong web", body: "Quy tắc về cỡ chữ, spacing và hierarchy giúp nội dung dễ đọc và chuyên nghiệp hơn.", tag: "Typography", color: "stone" },
  { id: 10, title: "Mobile-first design", body: "Thiết kế cho màn hình nhỏ trước, ưu tiên nội dung và trải nghiệm chạm hiệu quả hơn.", tag: "Mobile", color: "mist" },
  { id: 11, title: "UX Writing cơ bản", body: "Viết microcopy rõ ràng, dễ hiểu và thân thiện để giảm nhầm lẫn trong giao diện người dùng.", tag: "UX", color: "ink" },
  { id: 12, title: "Thử nghiệm A/B", body: "Phân tích CTA, layout và nội dung để cải thiện conversion và tương tác trên landing page.", tag: "Testing", color: "cream" },
];

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Không thể tải dữ liệu bài viết");
  }

  return res.json();
}

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <main className="mx-auto max-w-6xl px-6 py-8 md:py-12">
      <section className="mb-12 rounded-[2rem] border border-[#dfe8ee] bg-[#edf3f7] px-6 py-10 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#6f7276]">
          Blog list
        </p>
        <h1 className="text-4xl font-black tracking-tight text-[#3e3630] md:text-6xl">
          Bài viết mới
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#4a4743] md:text-base">
          Tổng hợp các chủ đề thực tế liên quan đến thiết kế, frontend và trải nghiệm người dùng trong một không gian pastel dễ nhìn.
        </p>
      </section>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {posts.slice(0, 12).map((post, index) => ({
          ...post,
          tag: topicMap[index]?.tag || "Blog",
          color: topicMap[index]?.color || "mist",
          title: topicMap[index]?.title || post.title,
          body: topicMap[index]?.body || post.body,
        })).map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
