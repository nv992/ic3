// Bộ thẻ ghi nhớ: IC3 SPARK GS6 - Level 3 - Bài 4: Mạng máy tính, Internet và máy chủ
// Mỗi thẻ: tag (nhóm), front (mặt trước, chỉ có chữ), back (mặt sau; xuống dòng bằng ký tự n có dấu gạch ngược, **chữ** = in đậm),
// imgBack hoặc img (hình hiện ở mặt sau/đáp án), icon (chữ thay thế nếu không có hình)
window.DECK = {
  title: "Mạng máy tính, Internet và máy chủ",
  subtitle: "SPARK Level 3 · Bài 4",
  backUrl: "index.html#/0/0/2", // nút Quay lại / Về danh sách sẽ mở trang Level này
  icon: "🌐",
  color: "blue",
  cards: [
    { tag: "Mạng và Internet", img: "decks/img/net-diagram.png", front: "Mạng máy tính là gì?", back: "Là hệ thống giúp các thiết bị như **máy tính, điện thoại, máy in…** **kết nối với nhau** bằng **dây hoặc không dây** để **chia sẻ thông tin** và **làm việc cùng nhau**." },
    { tag: "Mạng và Internet", icon: "🌍", front: "Internet là gì?", back: "Là **hệ thống mạng toàn cầu** gồm các máy tính và thiết bị được kết nối với nhau, cho phép **truy cập và chia sẻ** thông tin, dữ liệu và tài nguyên." },

    { tag: "Địa chỉ IP và giao thức", img: "decks/img/ip-diagram.png", front: "Địa chỉ IP là gì?", back: "Là một **dãy số duy nhất** được gán cho **mỗi thiết bị** (máy tính, thiết bị thông minh, …) có **kết nối với Internet hoặc mạng máy tính khác**." },
    { tag: "Địa chỉ IP và giao thức", icon: "📍", front: "IP là viết tắt của cụm từ nào?", back: "**Internet Protocol**\n(Giao thức Internet)" },
    { tag: "Địa chỉ IP và giao thức", icon: "📋", front: "Giao thức (Protocol) là gì?", back: "Là **tập hợp các quy tắc** mà máy tính hoặc các thiết bị kĩ thuật số **tuân theo khi giao tiếp với nhau**." },

    { tag: "Máy chủ", img: "decks/img/server-example.png", front: "Máy chủ (Server) là gì?", back: "Là **máy tính đặc biệt** có nhiệm vụ **cung cấp tài nguyên và dịch vụ** cho các **máy tính khác (Client)** trong mạng máy tính hoặc Internet." },
    { tag: "Máy chủ", img: "decks/img/server-example.png", front: "Máy chủ của giáo viên trong phòng tin học có thể làm gì?", back: "Có thể **chia sẻ dữ liệu, tài nguyên** và **theo dõi các máy tính khác** của học sinh." },
    { tag: "Máy chủ", img: "decks/img/webserver.png", front: "Máy tính, điện thoại, máy tính bảng của người dùng gửi yêu cầu trang Web đến máy chủ được gọi là gì?", back: "**Thiết bị của người dùng**\n(**Client** – Máy khách)" },

    { tag: "Máy chủ Web", img: "decks/img/webserver.png", front: "Máy chủ Web (Web Server) là gì?", back: "Là một **loại máy chủ đặc biệt** được dùng để **lưu trữ và chia sẻ các trang Web**." },
    { tag: "Máy chủ Web", img: "decks/img/webserver.png", front: "Khi người dùng yêu cầu trang Web, máy chủ Web làm gì?", back: "**Gửi trang Web đến người dùng**." },

    { tag: "Công cụ AI", img: "decks/img/ai-server.png", front: "Công cụ AI hoạt động trên máy chủ Web như thế nào?", back: "**Nhận yêu cầu qua Internet** và **gửi kết quả về thiết bị** của em." },
    { tag: "Công cụ AI", img: "decks/img/ai-server.png", front: "Kể tên 4 bước hoạt động của công cụ AI trên máy chủ.", back: "**1. Nhập yêu cầu**\n**2. Gửi qua Internet**\n**3. Máy chủ AI xử lí**\n**4. Gửi kết quả trở lại**" }
  ]
};
