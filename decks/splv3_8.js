// Bộ thẻ ghi nhớ: IC3 SPARK GS6 - Level 3 - Bài 8: Xử lí sự cố công nghệ
// Mỗi thẻ: tag (nhóm), front (mặt trước, chỉ có chữ), back (mặt sau; xuống dòng bằng ký tự n có dấu gạch ngược, **chữ** = in đậm),
// imgBack hoặc img (hình hiện ở mặt sau/đáp án), icon (chữ thay thế nếu không có hình)
// Ảnh: tự thêm file vào decks/img/ với đúng tên bên dưới (chưa có ảnh thì thẻ tự hiện icon thay thế)
window.DECK = {
  title: "Xử lí sự cố công nghệ",
  subtitle: "SPARK Level 3 · Bài 8",
  backUrl: "index.html#/0/0/2", // nút Quay lại / Về danh sách sẽ mở trang Level này
  icon: "🛠️",
  color: "orange",
  cards: [
    { tag: "Khái niệm", img: "decks/img/su-co-cong-nghe.png", icon: "🛠️", front: "Xử lí sự cố công nghệ là gì?", back: "Là quá trình **chuẩn đoán** và **giải quyết** các lỗi máy tính hoặc sự cố kĩ thuật thiết bị công nghệ." },

    { tag: "Các bước xử lí", icon: "🔍", front: "Bước đầu tiên khi gặp sự cố công nghệ là gì?", back: "**Xác định vấn đề** em đang gặp phải." },

    { tag: "Máy tính chạy chậm", img: "decks/img/may-tinh-chay-cham.png", icon: "🐌", front: "Cách xử lí máy tính chạy chậm?", back: "**Đóng** tất cả các ứng dụng **không cần thiết**\n**Xóa** các tập tin **cũ trong thùng rác**\n**Chạy** ứng dụng **Disk Cleanup** hoặc Chương trình chống phân mảnh ổ đĩa **Defragment**" },
    { tag: "Máy tính chạy chậm", icon: "🐌", front: "Máy tính bị chậm, nên làm gì trước tiên?", back: "**Đóng** các ứng dụng hoặc cửa sổ **không sử dụng**." },
    { tag: "Máy tính chạy chậm", icon: "🧹", front: "Disk Cleanup và Defragment dùng để làm gì khi máy tính chạy chậm?", back: "Giúp **dọn dẹp ổ đĩa** và **chống phân mảnh ổ đĩa**, làm máy tính **chạy nhanh hơn**." },

    { tag: "Không thể kết nối Wi-fi", img: "decks/img/khong-ket-noi-wifi.png", icon: "📶", front: "Cách xử lí khi không thể kết nối Wi-fi?", back: "Đảm bảo kết nối **đúng mạng** cần kết nối\n**Đặt lại (Reset)** bộ điều hợp không dây (**Wireless Adapter**) trên thiết bị\n**Liên lạc nhà cung cấp Internet (ISP)** để xác định có phải sự cố bắt nguồn từ nhà cung cấp" },
    { tag: "Không thể kết nối Wi-fi", icon: "📶", front: "Chỉ mình em không kết nối được Internet ở nhà, không ai khác gặp vấn đề này. Nên làm gì trước tiên?", back: "**Khởi động lại (Reset) bộ chuyển đổi không dây (Wireless Adapter)** trên thiết bị của em." },
    { tag: "Không thể kết nối Wi-fi", icon: "📡", front: "ISP là viết tắt của gì? Khi nào cần liên lạc ISP?", back: "ISP là **nhà cung cấp Internet**.\nLiên lạc để xác định **sự cố có bắt nguồn từ nhà cung cấp** hay không." },

    { tag: "Máy in không hoạt động", img: "decks/img/may-in.png", icon: "🖨️", front: "Cách xử lí khi máy in không hoạt động?", back: "**Kiểm tra dây cáp** hoặc kết nối của máy in\n**Kiểm tra kết nối nguồn điện**\n**Kiểm tra lỗi trên bảng điều khiển** máy in" },
    { tag: "Máy in không hoạt động", icon: "🖨️", front: "Máy in ngừng in, nên làm gì trước tiên?", back: "**Kiểm tra dây cáp** hoặc kết nối của máy in." },

    { tag: "Sử dụng AI", img: "decks/img/ai-kiem-tra-loi.png", icon: "🤖", front: "AI có thể giúp em làm gì khi gặp sự cố công nghệ?", back: "AI có thể giúp em **kiểm tra các lỗi công nghệ đơn giản**." },
    { tag: "Sử dụng AI", img: "decks/img/ai-cac-buoc.png", icon: "🤖", front: "Các bước sử dụng AI để gợi ý kiểm tra lỗi đơn giản?", back: "❶ **Mô tả rõ sự cố** cho AI\n❷ **Đọc và lựa chọn** bước kiểm tra phù hợp\n❸ Thực hiện **từng bước đơn giản**\n❹ **Kiểm tra lại** kết quả\n❺ **Không làm** theo hướng dẫn phức tạp nếu chưa hiểu rõ hoặc cần **người lớn hỗ trợ**" },
    { tag: "Sử dụng AI", icon: "⚠️", front: "Cần lưu ý gì khi làm theo gợi ý của AI để sửa lỗi thiết bị?", back: "Luôn thực hiện các **bước kiểm tra an toàn** trước khi thao tác trên thiết bị.\nNếu hướng dẫn **phức tạp** mà chưa hiểu rõ thì **nhờ người lớn hỗ trợ**." }
  ]
};
