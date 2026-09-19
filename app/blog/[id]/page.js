import Link from "next/link";
import Badge from "../../../components/Badge";

const articleLibrary = {
  1: {
    title: "UI/UX Design System",
    tag: "UI/UX",
    author: "Thạch Gia Uy",
    summary: "Một hệ thống thiết kế tốt giúp giao diện nhất quán, dễ hiểu và dễ phát triển theo thời gian.",
    sections: [
      "Trong thiết kế giao diện, việc xây dựng một UI system rõ ràng giúp mọi thành phần như nút bấm, card, heading, spacing và màu sắc đều có cách sử dụng thống nhất. Khi các yếu tố này được chuẩn hóa, trải nghiệm người dùng trở nên dễ nhận biết và ít bị nhầm lẫn.",
      "Để thiết kế hiệu quả, đội ngũ cần xác định trước palette màu, typography scale, spacing system và component patterns. Việc này không chỉ giúp giao diện đẹp hơn mà còn giảm thời gian làm lại khi cần mở rộng dự án hoặc thêm tính năng mới.",
      "Một design system không chỉ là tập hợp các style, mà còn là bộ quy tắc để mọi người trên team cùng làm việc theo một hướng. Khi đó, sản phẩm có tính nhất quán cao, dễ bảo trì và dễ tái sử dụng ở các màn hình khác nhau."
    ],
    highlight: "Hệ thống thiết kế giúp giao diện trở nên rõ ràng, ổn định và dễ mở rộng trong quá trình phát triển."
  },
  2: {
    title: "React Hooks trong thực tế",
    tag: "React",
    author: "Thạch Gia Uy",
    summary: "Hooks giúp mã React trở nên rõ ràng hơn khi cần quản lý state, side effect và logic tái sử dụng.",
    sections: [
      "Hooks là công cụ mạnh mẽ trong React vì cho phép component chứa logic mà không cần viết class. Với useState, useEffect, useMemo và useCallback, việc quản lý trạng thái và xử lý dữ liệu trở nên trực quan và dễ kiểm soát hơn.",
      "Trong thực tế, hooks thường được dùng để xử lý form, fetch dữ liệu, kiểm tra loading state và tối ưu performance. Một logic phức tạp nếu viết tách rời sẽ dễ gây khó khăn trong bảo trì, nhưng khi gói gọn trong custom hook thì code trở nên sạch và dễ tái sử dụng.",
      "Điều quan trọng là phải hiểu rõ thời điểm nên dùng hook nào và tránh lạm dụng. Khi áp dụng đúng cách, hooks không chỉ giúp component đơn giản hơn mà còn nâng cao khả năng mở rộng của ứng dụng."
    ],
    highlight: "Hooks giúp code React rõ ràng hơn, dễ bảo trì và dễ tái sử dụng trong các dự án thực tế."
  },
  3: {
    title: "Tailwind CSS hiệu quả",
    tag: "Tailwind",
    author: "Thạch Gia Uy",
    summary: "Tailwind giúp xây dựng giao diện nhanh hơn nhờ các utility class trực quan và dễ tùy biến.",
    sections: [
      "Tailwind CSS nổi bật vì cách tiếp cận utility-first: thay vì viết CSS dài dòng, ta có thể gán trực tiếp class như p-4, flex, rounded-xl, bg-slate-100. Điều này giúp workspace gọn gàng hơn và tiết kiệm thời gian khi dựng layout.",
      "Với kỹ thuật này, việc tạo layout responsive cũng đơn giản hơn rất nhiều nhờ các prefix như sm:, md:, lg:. Bạn chỉ cần định nghĩa điểm ngắt màn hình và component sẽ tự thích ứng theo kích thước hiển thị.",
      "Tailwind không chỉ giúp code nhanh hơn mà còn tăng tính nhất quán trong dự án. Khi mọi thành phần dùng chung một hệ thống spacing và màu sắc, giao diện sẽ trông chuyên nghiệp và dễ bảo trì hơn."
    ],
    highlight: "Sử dụng Tailwind đúng cách giúp tốc độ triển khai UI cao và code sạch hơn rất nhiều."
  },
  4: {
    title: "SEO và Accessibility",
    tag: "SEO",
    author: "Thạch Gia Uy",
    summary: "Website không chỉ đẹp mà còn phải dễ đọc, dễ truy cập và thân thiện với công cụ tìm kiếm.",
    sections: [
      "SEO và accessibility đôi khi bị xem như hai vấn đề riêng biệt, nhưng thực chất cả hai đều hướng tới trải nghiệm tốt hơn cho người dùng. Heading rõ ràng, alt text hợp lý, cấu trúc nội dung tốt sẽ giúp người dùng dễ hiểu hơn và công cụ tìm kiếm dễ đánh giá nội dung.",
      "Các yếu tố như tiêu đề trang, meta description, thứ tự heading, màu contrast và khả năng điều hướng bằng bàn phím đều đóng vai trò rất quan trọng. Khi website được tối ưu cả về mặt kỹ thuật lẫn trải nghiệm, tỷ lệ tương tác sẽ tăng lên đáng kể.",
      "Đây là bước quan trọng cho những dự án muốn lâu dài và đáng tin cậy. Một website responsive, rõ cấu trúc và dễ tiếp cận sẽ tốt hơn cả về mặt UX lẫn hiệu quả kinh doanh."
    ],
    highlight: "SEO và accessibility cùng nhau tạo nên website dễ tìm, dễ dùng và dễ tin cậy hơn."
  },
  5: {
    title: "Performance tối ưu web",
    tag: "Performance",
    author: "Thạch Gia Uy",
    summary: "Tối ưu hiệu năng giúp website chạy nhanh, mượt mà và tiết kiệm tài nguyên hơn trên nhiều thiết bị.",
    sections: [
      "Performance là yếu tố rất quan trọng khi người dùng truy cập website trên điện thoại hoặc mạng chậm. Nếu thời gian render quá lâu, người dùng sẽ cảm thấy khó chịu và rời đi nhanh hơn.",
      "Một số kỹ thuật tối ưu phổ biến bao gồm nén hình ảnh, ưu tiên nội dung quan trọng, giảm JavaScript không cần thiết và tách bundle. Những thay đổi nhỏ nhưng đúng chỗ có thể mang lại hiệu quả lớn cho trải nghiệm người dùng.",
      "Tối ưu hiệu năng không chỉ giúp load nhanh hơn mà còn cải thiện thứ hạng website trên một số tiêu chí đánh giá trải nghiệm. Đây là phần quan trọng trong quá trình phát triển và bảo trì nền tảng."
    ],
    highlight: "Tốc độ tải và độ mượt là yếu tố quyết định đến cảm nhận của người dùng với website."
  },
  6: {
    title: "Branding qua màu sắc",
    tag: "Branding",
    author: "Thạch Gia Uy",
    summary: "Màu sắc có thể truyền cảm xúc, xác định chất lượng thương hiệu và tạo dấu ấn trong lòng người dùng.",
    sections: [
      "Mỗi màu sắc đều mang một cảm xúc khác nhau. Màu xanh thường gợi cảm giác tin cậy và chuyên nghiệp, trong khi màu pastel thường tạo cảm giác dịu, thân thiện và hiện đại. Đây là lý do vì sao branding qua màu sắc lại quan trọng.",
      "Một thương hiệu hiệu quả không chỉ cần logo đẹp mà còn cần hệ thống màu nhất quán trên toàn bộ trải nghiệm người dùng. Từ nút bấm, background, card cho đến typography tất cả phải đồng bộ với sắc thái thương hiệu.",
      "Khi người dùng nhìn thấy một giao diện quen thuộc, họ dễ hình dung thương hiệu đó là ai và cung cấp sản phẩm gì. Vì vậy, màu sắc đóng vai trò rất lớn trong việc tạo nhận diện và sự tin cậy."
    ],
    highlight: "Màu sắc là một phần quan trọng trong nhận diện thương hiệu và cảm giác mà người dùng nhớ về sản phẩm."
  },
  7: {
    title: "Next.js App Router",
    tag: "Next.js",
    author: "Thạch Gia Uy",
    summary: "App Router trong Next.js giúp tổ chức dự án theo cấu trúc rõ ràng và quản lý route linh hoạt hơn.",
    sections: [
      "Next.js App Router đổi mới cách tổ chức routing bằng cách dùng thư mục app và các file page.js, layout.js. Cách này giúp ứng dụng trở nên khoa học hơn, dễ nhìn và dễ mở rộng khi dự án lớn dần.",
      "App Router còn hỗ trợ các tính năng như server component, streaming, dynamic route và layout có tính kế thừa. Điều này rất hữu ích khi cần xây dựng website có nhiều trang, nhiều section và dữ liệu lấy từ API.",
      "Với cấu trúc phù hợp, việc quản lý layout, metadata và route trở nên hiệu quả hơn. Đối với dự án thực tế, đây là một cách tổ chức hiện đại và dễ tương tác với nhiều thành viên trong team."
    ],
    highlight: "App Router giúp project Next.js dễ tổ chức, dễ phát triển và đồng bộ hơn giữa các trang."
  },
  8: {
    title: "Gọi API an toàn",
    tag: "API",
    author: "Thạch Gia Uy",
    summary: "Khi fetch dữ liệu frontend, việc xử lý loading, lỗi và dữ liệu không hợp lệ là yếu tố quan trọng để giữ UX ổn định.",
    sections: [
      "Khi gọi API từ frontend, điều đầu tiên cần làm là kiểm tra trạng thái phản hồi. Nếu server trả lỗi hoặc mạng không ổn định, giao diện phải hiển thị state phù hợp thay vì để người dùng thấy màn hình trống.",
      "Loading state và error state là hai yếu tố thường được bỏ qua nhưng cực kỳ quan trọng. Một skeleton, thông báo lỗi rõ ràng hay nút thử lại sẽ giúp trải nghiệm tốt hơn rất nhiều.",
      "Bên cạnh đó, việc validate dữ liệu đầu vào, xử lý timeout và parse đúng payload cũng giúp ứng dụng trở nên bền vững hơn. Đây là kỹ năng cần thiết trong mọi dự án frontend hiện đại."
    ],
    highlight: "Gọi API không chỉ là fetch data, mà còn là quản lý status, lỗi và trải nghiệm người dùng."
  },
  9: {
    title: "Typography trong web",
    tag: "Typography",
    author: "Thạch Gia Uy",
    summary: "Typography tốt giúp nội dung dễ đọc, rõ trọng tâm và tạo cảm giác chuyên nghiệp cho giao diện.",
    sections: [
      "Đọc nội dung trên web không chỉ phụ thuộc vào từ ngữ mà còn phụ thuộc vào cách chữ được hiển thị. Cỡ chữ, khoảng cách dòng, độ dày và cùng màu sắc đều ảnh hưởng trực tiếp đến trải nghiệm đọc.",
      "Một hệ thống typography hợp lý sẽ giúp người dùng xác định heading, body text và callout một cách dễ dàng. Khi hierarchy rõ ràng, nội dung không bị rối và người đọc dễ nắm bắt thông tin chính.",
      "Đặc biệt với các trang có nhiều thông tin, typography thực sự là thiết kế không thể bỏ qua. Nó làm tăng tính đọc hiểu và giúp website trông chuyên nghiệp hơn."
    ],
    highlight: "Typography đúng cách giúp nội dung dễ hiểu, dễ đọc và có tính thẩm mỹ cao."
  },
  10: {
    title: "Mobile-first design",
    tag: "Mobile",
    author: "Thạch Gia Uy",
    summary: "Thiết kế theo hướng mobile-first giúp tối ưu trải nghiệm trên màn hình nhỏ trước rồi mở rộng cho màn hình lớn hơn.",
    sections: [
      "Trong thời đại di động, hầu hết người dùng truy cập website qua điện thoại. Vì vậy, bắt đầu từ mobile-first là cách tiếp cận hợp lý để ưu tiên nội dung và tương tác quan trọng nhất.",
      "Khi thiết kế từ nhỏ lên, bạn sẽ phải đặt câu hỏi: phần nào cần hiện trước, khoảng cách nào đủ lớn để chạm dễ, và nội dung nào nên được sắp xếp ưu tiên. Điều này giúp product trở nên dễ dùng hơn trên cả màn hình nhỏ lẫn lớn.",
      "Phần lớn các trang web hiện nay đều cần tối ưu cho mọi thiết bị. Mobile-first không chỉ là xu hướng, mà còn là cách đảm bảo trải nghiệm tốt cho người dùng ở mọi điều kiện màn hình."
    ],
    highlight: "Mobile-first là cách thiết kế tập trung vào trải nghiệm thực tế nhất cho người dùng hiện nay."
  },
  11: {
    title: "UX Writing cơ bản",
    tag: "UX",
    author: "Thạch Gia Uy",
    summary: "UX writing giúp giao diện nói rõ ràng, thân thiện và dễ hiểu hơn trong mọi bước tương tác của người dùng.",
    sections: [
      "UX writing không chỉ là viết chữ trên màn hình, mà là cách truyền đạt thông tin để người dùng biết phải làm gì và điều gì đang xảy ra. Một microcopy tốt giúp giảm nhầm lẫn và tăng cảm giác tin cậy.",
      "Ví dụ như nút CTA, thông báo lỗi, trạng thái loading hay hướng dẫn form đều cần được viết rõ, ngắn và phù hợp với ngữ cảnh. Nếu chữ mơ hồ, người dùng sẽ mất thời gian suy nghĩ và cảm giác trải nghiệm xấu đi.",
      "Khi UX writing được làm tốt, sản phẩm giống như đang giao tiếp trực tiếp với người dùng bằng ngôn ngữ rõ ràng, tự nhiên và dễ thân thiện."
    ],
    highlight: "Microcopy tốt là một phần nhỏ nhưng rất mạnh trong việc nâng trải nghiệm người dùng."
  },
  12: {
    title: "Thử nghiệm A/B",
    tag: "Testing",
    author: "Thạch Gia Uy",
    summary: "A/B testing giúp xác định phiên bản nào mang lại hiệu quả cao hơn trong việc thu hút tương tác và chuyển đổi.",
    sections: [
      "Trong quá trình phát triển sản phẩm, rất khó để đoán đúng liệu một thiết kế hay nội dung nào là tối ưu nhất. A/B testing cho phép so sánh hai phiên bản khác nhau trên cùng một mục tiêu để tìm ra giải pháp tốt hơn.",
      "Các yếu tố có thể thử nghiệm bao gồm tiêu đề, CTA, hình ảnh, vị trí nút, màu sắc và cấu trúc nội dung. Mục tiêu là đo hiệu quả bằng dữ liệu thực tế, không chỉ bằng cảm giác chủ quan.",
      "Khi hiểu rõ dữ liệu, team có thể điều chỉnh sản phẩm theo hướng đúng hơn, mang lại trải nghiệm tốt hơn và cải thiện kết quả cuối cùng."
    ],
    highlight: "A/B testing giúp ra quyết định dựa trên dữ liệu thay vì suy đoán, từ đó tối ưu trải nghiệm và hiệu quả."
  }
};

async function getPostDetail(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    return null;
  }
  return res.json();
}

export default async function BlogDetailPage({ params }) {
  const { id } = await params;
  const post = await getPostDetail(id);
  const numericId = Number(id);
  const article = articleLibrary[numericId] || {
    title: post?.title || "Bài viết mới",
    tag: "Blog",
    author: "Thạch Gia Uy",
    summary: "Nội dung bài viết đang được cập nhật theo chủ đề tương ứng.",
    sections: [
      post?.body || "Nội dung chi tiết đang được bổ sung để hoàn thiện trải nghiệm đọc cho người dùng.",
      "Bạn có thể tiếp tục khám phá các bài viết khác trong danh sách blog để tìm hiểu thêm về những chủ đề liên quan."
    ],
    highlight: "Bài viết này đang được bổ sung nội dung chi tiết để phù hợp với chủ đề blog."
  };

  if (!post && !article.title) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="mb-4 text-2xl font-bold text-[#3e3630]">Không tìm thấy bài viết!</h1>
        <Link
          href="/"
          className="inline-block rounded-full bg-[#c7d3db] px-5 py-2.5 font-medium text-[#3e3630] transition hover:bg-[#b7c8d5]"
        >
          ← Back to Blog
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-5 py-8 md:px-6 md:py-12">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#dfe8ee] bg-[#f7f5f1] px-4 py-2 text-sm font-medium text-[#3e3630] transition hover:bg-[#edf3f7]"
      >
        ← Back to Blog
      </Link>

      <article className="rounded-[2rem] border border-[#dfe8ee] bg-[#f9f7f4] p-6 shadow-[0_10px_30px_rgba(62,54,48,0.06)] md:p-10">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <Badge label={article.tag} color="mist" />
          <span className="text-xs text-[#6f7276]">Tác giả: {article.author}</span>
          <span className="text-xs text-[#6f7276]">• Bài viết #{numericId}</span>
        </div>

        <h1 className="mb-6 text-2xl font-black leading-tight text-[#3e3630] md:text-4xl">
          {article.title}
        </h1>

        <div className="space-y-5 text-base leading-8 text-[#4a4743] md:text-lg">
          <p className="text-base font-medium text-[#4a4743]">{article.summary}</p>

          {article.sections.map((paragraph, index) => (
            <p key={`${article.title}-${index}`}>{paragraph}</p>
          ))}

          <div className="rounded-2xl border-l-4 border-[#c7d3db] bg-[#edf3f7] p-4 text-sm italic text-[#4a4743] md:text-base">
            {article.highlight}
          </div>
        </div>
      </article>
    </main>
  );
}
