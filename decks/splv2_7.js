// Bộ thẻ ghi nhớ: IC3 SPARK GS6 - Level 2 - Bài 7: Mạng
// Mỗi thẻ: tag (nhóm), front (mặt trước, chỉ có chữ), back (mặt sau; xuống dòng bằng ký tự n có dấu gạch ngược, **chữ** = in đậm),
// imgBack hoặc img (hình hiện ở mặt sau/đáp án), icon (chữ thay thế nếu không có hình)
window.DECK = {
  title: "Mạng",
  subtitle: "SPARK Level 2 · Bài 7",
  backUrl: "index.html#/0/0/1", // nút Quay lại / Về danh sách sẽ mở trang Level này
  icon: "🌐",
  color: "teal",
  cards: [
    // ===== Khái niệm mạng =====
    { tag: "Khái niệm mạng", img: "decks/img/splv2_7_network.png", front: "Mạng (Network) là gì?", back: "Là **hệ thống** để **di chuyển** các **đối tượng hoặc thông tin** từ nơi này đến nơi khác." },
    { tag: "Khái niệm mạng", front: "Mạng giúp em làm gì?", back: "Giúp **kết nối** và **trao đổi** thông tin hoặc tài nguyên." },
    { tag: "Khái niệm mạng", img: "decks/img/splv2_7_traffic.png", front: "Mạng giao thông là gì?", back: "Là hệ thống **đường, cầu, ngã tư** giúp **xe cộ di chuyển**." },
    { tag: "Khái niệm mạng", img: "decks/img/splv2_7_phone.png", front: "Mạng điện thoại là gì?", back: "Là hệ thống **đường dây** và **trạm thu phát** giúp **cuộc gọi truyền đi**." },
    { tag: "Khái niệm mạng", img: "decks/img/splv2_7_mobile.png", front: "Mạng di động là gì?", back: "Là hệ thống **trạm 3G/4G/5G** giúp điện thoại **kết nối không dây**." },
    { tag: "Khái niệm mạng", front: "Điểm chung của tất cả các mạng là gì?", back: "Đều giúp **KẾT NỐI** các thứ lại với nhau để **TRAO ĐỔI** thông tin hoặc tài nguyên." },

    // ===== Mạng máy tính và Internet =====
    { tag: "Mạng máy tính và Internet", img: "decks/img/splv2_7_computer.png", front: "Mạng máy tính (Computer Network) là gì?", back: "Là các **máy tính được kết nối với nhau** để **giao tiếp** và **chia sẻ thông tin**." },
    { tag: "Mạng máy tính và Internet", img: "decks/img/splv2_7_computer.png", front: "Các thiết bị máy tính được kết nối với nhau để trao đổi dữ liệu và chia sẻ tài nguyên được gọi là gì?", back: "**Mạng máy tính** (Computer Network)" },
    { tag: "Mạng máy tính và Internet", img: "decks/img/splv2_7_globe.png", front: "Mạng kết nối các máy tính trên toàn cầu được gọi là gì?", back: "**Internet**" },

    // ===== Ứng dụng của mạng =====
    { tag: "Ứng dụng của mạng", img: "decks/img/splv2_7_network_app.png", front: "Kể tên 7 ứng dụng của mạng trong đời sống.", back: "**Giao tiếp & truyền thông**\n**Chia sẻ tài nguyên**\n**Mua sắm trực tuyến**\n**Giải trí**\n**Mạng xã hội**\n**Học tập trực tuyến**\n**An ninh & giám sát**" },
    { tag: "Ứng dụng của mạng", front: "Ứng dụng giao tiếp & truyền thông của mạng gồm những gì?", back: "**Email**\n**Chat**\n**Gọi Internet**\n**Video call**" },
    { tag: "Ứng dụng của mạng", front: "Ứng dụng chia sẻ tài nguyên của mạng gồm những gì?", back: "**Máy in chung**\n**Chia sẻ tệp**\n**Cloud**\n**Tiết kiệm thời gian**" },
    { tag: "Ứng dụng của mạng", front: "Ứng dụng mua sắm trực tuyến của mạng gồm những gì?", back: "**Tìm kiếm**\n**Mua hàng**\n**Thanh toán**\n**Giao hàng**" },
    { tag: "Ứng dụng của mạng", front: "Ứng dụng học tập trực tuyến của mạng gồm những gì?", back: "**Lớp học online**\n**Bài giảng video**\n**Tìm tài liệu**\n**Học ngoại ngữ**" },
    { tag: "Ứng dụng của mạng", front: "Ứng dụng an ninh & giám sát của mạng gồm những gì?", back: "**Camera thông minh**\n**Khóa cửa thông minh**\n**Chuông báo**\n**Giám sát qua mạng**" },

    // ===== Lưu trữ đám mây =====
    { tag: "Lưu trữ đám mây", img: "decks/img/splv2_7_computing.png", front: "Điện toán (Computing) là gì?", back: "Là việc sử dụng **máy tính** hoặc các **thiết bị điện tử** để **xử lý và làm việc với thông tin, dữ liệu** như tính toán, lưu trữ hoặc thực hiện các tác vụ khác." },
    { tag: "Lưu trữ đám mây", img: "decks/img/splv2_7_cloud.png", front: "Điện toán đám mây (Cloud Computing) là gì?", back: "Là một **dịch vụ công nghệ** cho phép chúng ta **lưu trữ, xử lý và truy cập dữ liệu** thông qua **Internet**." },
    { tag: "Lưu trữ đám mây", img: "decks/img/splv2_7_cloud-storage.png", front: "Lưu trữ đám mây (Cloud Storage) là gì?", back: "Là một **phần quan trọng của điện toán đám mây**, cho phép **lưu trữ thông tin dữ liệu** và **truy cập từ mọi lúc mọi nơi** khi có kết nối Internet." },
    { tag: "Lưu trữ đám mây", front: "Kể tên 3 lợi ích của lưu trữ đám mây.", back: "**Tự động đồng bộ**\n**Truy cập linh hoạt**\n**An toàn bảo mật**" },
  ]
};
