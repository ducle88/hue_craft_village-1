import { STARTUP_CHATBOT_NOTEBOOK_URL } from "@/data/startup";
import type { CareerCounselingPageData } from "@/data/career-counseling/types";

/** Nội dung tham chiếu Huế Craft Village 4.0 — Chuyên mục Khởi nghiệp - Kinh doanh (Google Sites). */
export const startupGuidePages: CareerCounselingPageData[] = [
  {
    slug: "quy-trinh-khoi-nghiep",
    pageTitle: "Quy trình khởi nghiệp — Chuyên mục khởi nghiệp",
    metaDescription:
      "Quy trình khởi nghiệp 6 bước: ý tưởng, đánh giá cơ hội, nghiên cứu thị trường, kế hoạch kinh doanh, huy động nguồn lực và vận hành.",
    eyebrow: "Chuyên mục khởi nghiệp",
    title: "Quy trình khởi nghiệp",
    introParagraphs: [
      "Khởi nghiệp là hành trình biến ý tưởng thành giá trị kinh tế – xã hội bền vững, gắn với làng nghề và xu hướng kinh doanh hiện đại.",
    ],
    sections: [
      {
        title: "1. Hình thành và xác định ý tưởng kinh doanh",
        blocks: [
          {
            type: "paragraphs",
            items: [
              "Khởi nghiệp là việc cá nhân hoặc doanh nghiệp bắt đầu một nghề nghiệp, sự nghiệp mới. Đặc biệt, khởi nghiệp sáng tạo dựa trên đam mê, trải nghiệm và công nghệ để tạo ra sản phẩm mới giải quyết nhu cầu thị trường.",
            ],
          },
          {
            type: "bullets",
            items: [
              "Nguồn phát sinh ý tưởng: quan sát vấn đề chưa được giải quyết, khoảng trống thị trường hoặc từ sở thích cá nhân.",
              "Xác định giá trị: kết hợp sáng tạo, kinh nghiệm và kiến thức khoa học; tận dụng nền tảng số hóa để kết nối di sản văn hóa với giá trị kinh tế hiện đại.",
            ],
          },
        ],
      },
      {
        title: "2. Đánh giá cơ hội kinh doanh",
        blocks: [
          {
            type: "paragraphs",
            items: [
              "Một ý tưởng tốt chưa chắc đã là cơ hội kinh doanh tốt; cần kiểm tra qua thế \"chân kiềng\" thành công:",
            ],
          },
          {
            type: "bullets",
            items: [
              "Tính khả thi của ý tưởng: sản phẩm/dịch vụ có đáp ứng nhu cầu thực tế của thị trường mục tiêu không.",
              "Yếu tố thị trường: quy mô thị trường có đủ lớn và có tiềm năng tăng trưởng hay không.",
              "Yếu tố cơ hội: đây có phải thời điểm thích hợp để bắt đầu và bạn có lợi thế cạnh tranh so với đối thủ không.",
            ],
          },
        ],
      },
      {
        title: "3. Nghiên cứu và phân tích thị trường",
        blocks: [
          {
            type: "paragraphs",
            items: [
              "Thu thập thông tin về khách hàng và đối thủ cạnh tranh là bước then chốt trước khi triển khai.",
            ],
          },
          {
            type: "bullets",
            items: [
              "Phân tích khách hàng: xác định người mua mục tiêu theo địa lý, độ tuổi, thu nhập và lý do mua hàng.",
              "Mô hình 5 thành tố: Hàng hóa, Cung, Cầu, Giá cả và Phương thức giao dịch.",
              "Chiến lược 4P: Sản phẩm (Product), Giá cả (Price), Phân phối (Place) và Khuyến mãi (Promotion).",
            ],
          },
        ],
      },
      {
        title: "4. Lập kế hoạch kinh doanh",
        blocks: [
          {
            type: "paragraphs",
            items: [
              "Bản kế hoạch thường dài 25–30 trang, nêu rõ mục tiêu và chiến lược của doanh nghiệp.",
            ],
          },
          {
            type: "bullets",
            items: [
              "Các bước: viết ý tưởng cơ bản → thu thập số liệu → sàng lọc ý tưởng → phác họa mô hình kinh doanh → lập bản kế hoạch thu hút đầu tư.",
              "Nội dung chính: kế hoạch marketing, sản xuất, đội ngũ quản lý và phân tích tài chính dự toán 3–5 năm.",
            ],
          },
        ],
      },
      {
        title: "5. Huy động nguồn lực và tài chính",
        blocks: [
          {
            type: "paragraphs",
            items: ["Vốn là điều kiện tiền đề để hiện thực hóa mọi ý tưởng."],
          },
          {
            type: "bullets",
            items: [
              "Nguồn vốn tự có: tiết kiệm cá nhân hoặc vốn góp của các thành viên sáng lập.",
              "Vốn huy động: vay người thân, thẻ tín dụng, crowdfunding hoặc bán sản phẩm trước khi sản xuất.",
              "Xây dựng đội ngũ: tìm cộng sự cùng chí hướng, nhiệt huyết và năng lực bổ trợ.",
            ],
          },
        ],
      },
      {
        title: "6. Vận hành và quản trị",
        blocks: [
          {
            type: "bullets",
            items: [
              "Quản lý tài chính: kiểm soát dòng tiền, hạn chế chi phí cố định, đặt mục tiêu tài chính theo tuần/tháng.",
              "Quản lý nhân sự: xây dựng văn hóa doanh nghiệp, chính sách thưởng phạt công bằng, quan tâm sự hài lòng nhân viên.",
              "Thích ứng: theo dõi phản hồi khách hàng và điều chỉnh mô hình kinh doanh khi thị trường thay đổi.",
            ],
          },
          {
            type: "paragraphs",
            items: [
              "Khởi nghiệp giống như gieo hạt mầm sáng tạo: ý tưởng là hạt giống, thị trường là mảnh đất, nguồn lực là nước và phân bón, còn sự kiên trì của bạn là ánh nắng giúp cây vượt qua bão giông để trở thành cây cổ thụ vững chãi.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "tai-lieu-khoi-nghiep",
    pageTitle: "Tài liệu khởi nghiệp — Chuyên mục khởi nghiệp",
    metaDescription:
      "Tài liệu khởi nghiệp: khái niệm, tố chất người khởi nghiệp, ý tưởng, kế hoạch kinh doanh, quản lý nguồn lực và xu hướng số.",
    eyebrow: "Chuyên mục khởi nghiệp",
    title: "Tài liệu khởi nghiệp",
    introParagraphs: [
      "KHỞI NGHIỆP – HÀNH TRÌNH TỪ Ý TƯỞNG ĐẾN GIÁ TRỊ",
      "Khởi nghiệp ngày nay không chỉ là thành lập doanh nghiệp, mà còn là quá trình khám phá năng lực, nuôi dưỡng tư duy sáng tạo và tạo giá trị cho xã hội. Tài liệu giúp học sinh hiểu đúng – nghĩ đúng – làm từng bước đúng về khởi nghiệp trong bối cảnh chuyển đổi số.",
    ],
    sections: [
      {
        title: "1. Khái niệm và vai trò của khởi nghiệp",
        blocks: [
          {
            type: "paragraphs",
            items: [
              "Khởi nghiệp (khởi sự doanh nghiệp) là quá trình bắt đầu hoạt động nghề nghiệp, kinh doanh hoặc sự nghiệp mới. Khởi nghiệp sáng tạo nhấn mạnh đam mê, trải nghiệm thực tiễn và ứng dụng khoa học – công nghệ để tạo sản phẩm, dịch vụ hoặc mô hình kinh doanh mới.",
            ],
          },
          {
            type: "bullets",
            items: [
              "Giúp cá nhân chủ động về tài chính và thời gian.",
              "Tạo việc làm, giảm áp lực thất nghiệp.",
              "Thúc đẩy kinh tế địa phương và đổi mới sáng tạo trong cộng đồng.",
            ],
          },
        ],
      },
      {
        title: "2. Những tố chất cần có của người khởi nghiệp",
        blocks: [
          {
            type: "bullets",
            items: [
              "Khát vọng vươn lên và làm giàu chính đáng.",
              "Năng lực sáng tạo, tạo sự khác biệt và tìm cơ hội trong môi trường biến động.",
              "Kiến thức và kỹ năng về sản phẩm, thị trường, tài chính và lập kế hoạch.",
              "Sự kiên trì và bản lĩnh trước thất bại.",
            ],
          },
        ],
      },
      {
        title: "3. Hình thành ý tưởng và nhận diện cơ hội",
        blocks: [
          {
            type: "paragraphs",
            items: [
              "Ý tưởng thường xuất phát từ quan sát cuộc sống, vấn đề chưa được giải quyết hoặc nhu cầu chưa đáp ứng đầy đủ. Một ý tưởng chỉ có giá trị khi hội tụ đủ “thế chân kiềng”: tính khả thi, nhu cầu thị trường và thời điểm triển khai phù hợp.",
            ],
          },
        ],
      },
      {
        title: "4. Xây dựng kế hoạch kinh doanh",
        blocks: [
          {
            type: "paragraphs",
            items: [
              "Kế hoạch kinh doanh (Business Plan) giúp hiện thực hóa ý tưởng, bao gồm phân tích thị trường (4P), kế hoạch hoạt động và phân tích tài chính. Với học sinh, có thể xây dựng ở quy mô nhỏ phù hợp dự án học tập.",
            ],
          },
        ],
      },
      {
        title: "5. Quản lý nguồn lực: tài chính và nhân sự",
        blocks: [
          {
            type: "bullets",
            items: [
              "Tài chính: kiểm soát dòng tiền, sử dụng vốn hiệu quả, huy động từ tiết kiệm, gia đình hoặc gây quỹ cộng đồng.",
              "Nhân sự: xây dựng nhóm cùng chí hướng, phân công rõ ràng và văn hóa hợp tác ngay từ đầu.",
            ],
          },
        ],
      },
      {
        title: "6. Khởi nghiệp trong xu thế số và gắn với di sản",
        blocks: [
          {
            type: "paragraphs",
            items: [
              "Khởi nghiệp gắn với công nghệ số và bảo tồn giá trị truyền thống. Số hóa làng nghề, kết hợp di sản với thương mại điện tử mở hướng đi bền vững — như dự án Huế Craft Village 4.0.",
              "Khởi nghiệp giống gieo hạt mầm sáng tạo: cần ý tưởng tốt, chăm sóc bền bỉ và nguồn lực phù hợp để hạt mầm bén rễ vững chắc.",
            ],
          },
        ],
      },
    ],
    externalLinks: [
      {
        label: "Tài liệu khởi nghiệp (Google Drive)",
        href: "https://drive.google.com/drive/folders/1hdSOEZU1RpRndQxVluI4bgk_Yz2frjq5?usp=drive_link",
      },
    ],
  },
  {
    slug: "chatbot-ho-tro-tu-van-khoi-nghiep",
    pageTitle: "Chatbot hỗ trợ tư vấn khởi nghiệp — Chuyên mục khởi nghiệp",
    metaDescription:
      "Giới thiệu Chatbot tư vấn hỗ trợ khởi nghiệp: định hướng nghề, xây dựng ý tưởng, kết nối làng nghề và cập nhật xu hướng trên NotebookLM.",
    eyebrow: "Chuyên mục khởi nghiệp",
    title: "Chatbot hỗ trợ tư vấn khởi nghiệp",
    introParagraphs: [
      "Chào mừng bạn đến với công cụ hỗ trợ thông minh \"Chatbot tư vấn hỗ trợ khởi nghiệp\" — trợ lý đồng hành cùng học sinh trong định hướng nghề nghiệp và phát triển dự án sáng tạo.",
    ],
    sections: [
      {
        title: "Chức năng nổi bật",
        blocks: [
          {
            type: "bullets",
            items: [
              "Tư vấn định hướng nghề nghiệp có cơ sở khoa học dựa trên nhu cầu thị trường lao động và xu hướng Công nghiệp 4.0; hỗ trợ trắc nghiệm hướng nghiệp trong cửa sổ trò chuyện.",
              "Hỗ trợ xây dựng và hiện thực hóa ý tưởng: giải đáp quy trình khởi nghiệp từ hình thành ý tưởng đến các bước dự án cụ thể.",
              "Kết nối di sản văn hóa với giá trị kinh tế: gợi ý mô hình kinh doanh từ làng nghề (dệt Dèng, gốm Phước Tích, hoa giấy Thanh Tiên…).",
              "Giải đáp kiến thức chuyên sâu: vai trò khởi nghiệp, mục đích lập nghiệp, quản lý tài chính và nhân sự.",
              "Cập nhật tin tức và xu hướng khởi nghiệp trong nước và quốc tế để tìm khoảng trống thị trường.",
            ],
          },
          {
            type: "paragraphs",
            items: [
              "Chatbot tư vấn khởi nghiệp giống như la bàn số — không thay bạn bước đi, nhưng cung cấp chỉ dẫn khoa học và kiến thức nền tảng để bạn đi đúng hướng trên hành trình biến đam mê thành hiện thực.",
            ],
          },
        ],
      },
    ],
    externalLinks: [
      {
        label: "Chatbot hỗ trợ tư vấn khởi nghiệp (NotebookLM)",
        href: STARTUP_CHATBOT_NOTEBOOK_URL,
      },
    ],
    cta: {
      label: "Mở Chatbot khởi nghiệp (NotebookLM)",
      href: STARTUP_CHATBOT_NOTEBOOK_URL,
      description: "Trợ lý AI tư vấn khởi nghiệp trên nền tảng Google NotebookLM.",
    },
  },
];

export function getStartupGuidePage(slug: string): CareerCounselingPageData | undefined {
  return startupGuidePages.find((p) => p.slug === slug);
}

export const startupGuideNavItems = startupGuidePages.map((p) => ({
  label: p.title,
  href: `/khoi-nghiep/${p.slug}`,
}));
