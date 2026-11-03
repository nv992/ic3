// Bộ thẻ ghi nhớ: IC3 SPARK GS6 - Level 3 - Bài 2, 3: Lưu trữ thông tin và máy học
// Mỗi thẻ: tag (nhóm), front (mặt trước, chỉ có chữ), back (mặt sau; xuống dòng bằng ký tự n có dấu gạch ngược, **chữ** = in đậm),
// imgBack hoặc img (hình hiện ở mặt sau/đáp án), icon (chữ thay thế nếu không có hình)
window.DECK = {
  title: "Lưu trữ thông tin và máy học",
  subtitle: "SPARK Level 3 · Bài 2, 3",
  backUrl: "index.html#/0/0/2", // nút Quay lại / Về danh sách sẽ mở trang Level này
  icon: "💾",
  color: "blue",
  cards: [
    { tag: "Ổ USB", img: "decks/img/store-usb.png", front: "Ổ USB (USB Flash Drive) là gì?", back: "Là **thiết bị lưu trữ di động**, kết nối qua **cổng USB**. Dùng để **sao chép và chuyển tệp** giữa các thiết bị." },
    { tag: "Ổ USB", icon: "🔌", front: "USB có những tính năng nào?", back: "**Có thể mang theo**\n**Có không gian lưu trữ**\n**Truyền tải tập tin**" },
    { tag: "Ổ USB", icon: "📶", front: "USB có tính năng kết nối không dây không?", back: "**Không**. USB phải **cắm vào cổng USB** của máy tính." },

    { tag: "Ổ đĩa cứng", img: "decks/img/store-hdd.png", front: "Ổ đĩa cứng (HDD – Hard Disk Drive) là gì?", back: "Là thiết bị lưu trữ **dữ liệu lâu dài trong máy tính**. Có thể lưu **nhiều thông tin** và **vẫn giữ dữ liệu khi tắt máy**." },

    { tag: "Ổ đĩa thể rắn", img: "decks/img/store-ssd.png", front: "Ổ đĩa thể rắn (SSD – Solid State Drive) là gì?", back: "Là thiết bị lưu trữ dùng **thay cho ổ cứng truyền thống**. SSD có **tốc độ nhanh** và cũng có thể dùng như **thiết bị lưu trữ gắn ngoài**." },
    { tag: "Ổ đĩa thể rắn", img: "decks/img/store-ssd.png", front: "Thiết bị lưu trữ nào có tốc độ nhanh và dùng thay cho ổ cứng truyền thống?", back: "**SSD** (Solid State Drive)" },

    { tag: "Lưu trữ đám mây", img: "decks/img/cloud.png", front: "Lưu trữ đám mây (Cloud Storage) là gì?", back: "Là một phần quan trọng của **điện toán đám mây**, cho phép **lưu trữ thông tin dữ liệu** và **truy cập từ mọi lúc mọi nơi** khi có **kết nối Internet**." },
    { tag: "Lưu trữ đám mây", icon: "☁️", front: "Kể tên các lợi ích của lưu trữ đám mây.", back: "**Tự động đồng bộ**\n**Truy cập linh hoạt**\n**An toàn bảo mật**" },
    { tag: "Lưu trữ đám mây", icon: "🔄", front: "Lợi ích “Tự động đồng bộ” của lưu trữ đám mây là gì?", back: "Dữ liệu được **tự động đồng bộ hóa** trên **tất cả các thiết bị**." },
    { tag: "Lưu trữ đám mây", icon: "📱", front: "Lợi ích “Truy cập linh hoạt” của lưu trữ đám mây là gì?", back: "Thông tin có thể được truy cập bởi **nhiều thiết bị cùng một lúc**." },
    { tag: "Lưu trữ đám mây", icon: "🔒", front: "Lợi ích “An toàn bảo mật” của lưu trữ đám mây là gì?", back: "Chỉ người **có quyền** mới được truy cập dữ liệu." },

    { tag: "Chọn loại lưu trữ", icon: "☁️", front: "Em muốn dữ liệu được sao lưu và lưu trữ an toàn bởi một công ty khác. Nên dùng loại lưu trữ nào?", back: "**Lưu trữ đám mây** (Cloud Storage)" },
    { tag: "Chọn loại lưu trữ", img: "decks/img/store-usb.png", front: "Em muốn sao chép hình ảnh giữa hai máy tính mà không cần kết nối mạng. Nên dùng loại lưu trữ nào?", back: "**USB**" },
    { tag: "Chọn loại lưu trữ", img: "decks/img/store-hdd.png", front: "Em chỉ muốn lưu trữ dữ liệu trên máy tính xách tay của mình. Nên dùng loại lưu trữ nào?", back: "**Ổ cứng** (Hard Drive)" },
    { tag: "Máy học", img: "decks/img/ml.png", front: "Máy học (ML – Machine Learning) là gì?", back: "Là một phần của **trí tuệ nhân tạo (AI)**, trong đó **máy tính có khả năng tự học** thông qua việc sử dụng **dữ liệu có sẵn** và **tự suy luận** để giải quyết yêu cầu của người dùng." },

    { tag: "Huấn luyện mô hình AI", img: "decks/img/ai-steps.png", front: "Quy trình huấn luyện AI gồm mấy bước? Kể tên các bước.", back: "**1. Xác định vấn đề**\n**2. Thu thập dữ liệu**\n**3. Dạy máy học từ dữ liệu**\n**4. Kiểm tra kết quả**\n**5. Cải tiến**" },
    { tag: "Huấn luyện mô hình AI", img: "decks/img/ai-1.png", front: "Bước 1 của quy trình huấn luyện AI là gì?", back: "**Xác định vấn đề**: xác định AI sẽ giải quyết vấn đề gì." },
    { tag: "Huấn luyện mô hình AI", img: "decks/img/ai-2.png", front: "Bước 2 của quy trình huấn luyện AI là gì?", back: "**Thu thập dữ liệu**: thu thập nhiều dữ liệu liên quan đến vấn đề." },
    { tag: "Huấn luyện mô hình AI", img: "decks/img/ai-3.png", front: "Bước 3 của quy trình huấn luyện AI là gì?", back: "**Dạy máy học từ dữ liệu**: AI học từ dữ liệu và tìm ra quy luật để nhận biết." },
    { tag: "Huấn luyện mô hình AI", img: "decks/img/ai-4.png", front: "Bước 4 của quy trình huấn luyện AI là gì?", back: "**Kiểm tra kết quả**: kiểm tra AI với dữ liệu mới để xem kết quả đúng hay sai." },
    { tag: "Huấn luyện mô hình AI", img: "decks/img/ai-5.png", front: "Bước 5 của quy trình huấn luyện AI là gì?", back: "**Cải tiến**: nếu kết quả chưa tốt, cần **bổ sung dữ liệu** và **huấn luyện lại AI**." },

    { tag: "Khả năng tiếp cận", img: "decks/img/access-people.png", front: "Khả năng tiếp cận công nghệ (Accessibility) là gì?", back: "Là **mục tiêu** tạo ra các **sản phẩm công nghệ** giúp **tất cả mọi người**, bao gồm cả **người khuyết tật**, có thể sử dụng các sản phẩm và dịch vụ công nghệ **một cách dễ dàng và thuận tiện**." },
    { tag: "Khả năng tiếp cận", img: "decks/img/access-reader.png", front: "Phần mềm đọc màn hình giúp người khiếm thị làm gì?", back: "Giúp **sử dụng máy tính** bằng cách **đọc to nội dung trên màn hình**." },
    { tag: "Khả năng tiếp cận", img: "decks/img/access-braille.png", front: "Bàn phím Braille giúp người khiếm thị làm gì?", back: "Giúp **nhập liệu** bằng cách sử dụng các **kí tự Braille**." }
  ]
};
