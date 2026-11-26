// Bộ thẻ ghi nhớ: IC3 SPARK GS6 - Level 2 - Bài 8: Kết nối các thiết bị
// Mỗi thẻ: tag (nhóm), front (mặt trước, chỉ có chữ), back (mặt sau; xuống dòng bằng ký tự n có dấu gạch ngược, **chữ** = in đậm),
// imgBack hoặc img (hình hiện ở mặt sau/đáp án), icon (chữ thay thế nếu không có hình)
window.DECK = {
  title: "Kết nối các thiết bị",
  subtitle: "SPARK Level 2 · Bài 8",
  backUrl: "index.html#/0/0/1", // nút Quay lại / Về danh sách sẽ mở trang Level này
  icon: "🔌",
  color: "teal",
  cards: [
    { tag: "Hình thức kết nối", icon: "🔗", front: "Vì sao các thiết bị kĩ thuật số cần được kết nối?", back: "Để các thiết bị có thể **giao tiếp** và **trao đổi dữ liệu** với nhau." },
    { tag: "Hình thức kết nối", icon: "🔌", front: "Kết nối có dây (Wired Connection) là gì?", back: "Dùng **cáp vật lí** để nối **trực tiếp** hai thiết bị." },
    { tag: "Hình thức kết nối", icon: "📶", front: "Kết nối không dây (Wireless Connection) là gì?", back: "Truyền dữ liệu qua **sóng vô tuyến**, **không cần cáp**." },
    { tag: "Hình thức kết nối", icon: "🛡️", front: "Kết nối có dây có những ưu điểm nào?", back: "**Ổn định**\n**Nhanh hơn**\n**Ít bị ảnh hưởng** bởi môi trường" },
    { tag: "Hình thức kết nối", icon: "👍", front: "Kết nối không dây có những ưu điểm nào?", back: "**Tiện lợi**\n**Linh hoạt**\n**Dễ dàng di chuyển** và sử dụng" },
    { tag: "Hình thức kết nối", icon: "📶", front: "Kể tên hai công nghệ kết nối không dây.", back: "**Bluetooth**\n**Wi-Fi**" },

    { tag: "Kết nối có dây", icon: "🖥️", front: "Kết nối màn hình, máy chiếu, Tivi đến máy tính thông qua cổng nào?", back: "**Cổng Video** (Video Port)" },
    { tag: "Kết nối có dây", icon: "📺", front: "Kể tên một số loại cổng Video.", back: "**VGA**\n**DVI**\n**HDMI**" },
    { tag: "Kết nối có dây", icon: "⌨️", front: "Kết nối bàn phím với máy tính bằng loại kết nối có dây nào?", back: "Kết nối có dây **USB**." },
    { tag: "Kết nối có dây", icon: "🔀", front: "USB Hub là gì?", back: "Thiết bị **tập trung nhiều cổng kết nối vào một cổng**." },
    { tag: "Kết nối có dây", icon: "🔋", front: "Ngoài truyền dữ liệu, cáp USB còn có thể dùng để làm gì?", back: "**Sạc pin** cho thiết bị." },
    { tag: "Kết nối có dây", icon: "🌐", front: "Kết nối mạng bằng loại kết nối có dây nào?", back: "Kết nối có dây **Ethernet**." },

    { tag: "Kết nối không dây", icon: "🎧", front: "Kể tên một số thiết bị có thể kết nối không dây Bluetooth với máy tính.", back: "**Tai nghe không dây**\n**Loa Bluetooth**\n**Bàn phím / Chuột không dây**\n**Đồng hồ thông minh**\n**Máy ảnh**" },
    { tag: "Kết nối không dây", icon: "📷", front: "Nhờ kết nối Bluetooth, em có thể làm gì với máy ảnh?", back: "**Tải hình ảnh** từ máy ảnh vào máy tính." },
    { tag: "Kết nối không dây", icon: "🛜", front: "Với kết nối Wi-Fi, em có thể làm những việc gì?", back: "**Xem phim**\n**Tải file**\n**Dùng AI trực tuyến**" },
  ]
};
