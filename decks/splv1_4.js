// Bộ thẻ ghi nhớ: IC3 SPARK GS6 - Level 1 - Bài 4: Hệ điều hành và chương trình ứng dụng
// Mỗi thẻ: tag (nhóm), front (mặt trước, chỉ có chữ), back (mặt sau; xuống dòng bằng ký tự n có dấu gạch ngược, **chữ** = in đậm),
// imgBack hoặc img (hình hiện ở mặt sau/đáp án), icon (chữ thay thế nếu không có hình)
window.DECK = {
  title: "Hệ điều hành và chương trình ứng dụng",
  subtitle: "SPARK Level 1 · Bài 4",
  backUrl: "index.html#/0/0/0", // nút Quay lại / Về danh sách sẽ mở trang Level này
  icon: "🪟",
  color: "green",
  cards: [
    { tag: "Hệ điều hành", front: "Hệ điều hành (Operating System) là gì?", back: "Là một **phần mềm** giúp máy tính thực hiện **một chức năng hoặc nhiều nhiệm vụ**." },
    { tag: "Hệ điều hành", front: "Hệ điều hành có những chức năng nào?", back: "**Quản lí các thiết bị phần cứng**\n**Quản lí các tập tin được lưu trữ** trên máy tính" },
    { tag: "Hệ điều hành", img: "decks/img/splv1_4_os-desktop.png", front: "Kể tên một số hệ điều hành trên máy tính.", back: "**Linux**\n**Microsoft Windows**" },
    { tag: "Hệ điều hành", img: "decks/img/splv1_4_os-mobile.png", front: "Kể tên một số hệ điều hành trên thiết bị di động.", back: "**Android**\n**iOS**" },
    { tag: "Hệ điều hành", imgBack: "decks/img/splv1_4_os-mobile.png", front: "Android và iOS là hệ điều hành dùng trên loại thiết bị nào?", back: "Hệ điều hành trên **thiết bị di động**." },
    { tag: "Hệ điều hành", imgBack: "decks/img/splv1_4_os-desktop.png", front: "Linux và Microsoft Windows là hệ điều hành dùng trên loại thiết bị nào?", back: "Hệ điều hành trên **máy tính**." },

    { tag: "Giao diện Windows", img: "decks/img/splv1_4_taskbar.png", front: "Thanh tác vụ (Taskbar) là gì? Thường nằm ở đâu?", back: "Là một **phần giao diện của hệ điều hành**, thường nằm ở **phía dưới màn hình** trên Windows." },
    { tag: "Giao diện Windows", img: "decks/img/splv1_4_start-btn.png", front: "Nút Start nằm ở đâu và dùng để làm gì?", back: "Nằm ở **góc trái thanh tác vụ**, giúp truy cập **các ứng dụng, cài đặt và chức năng hệ thống**." },
    { tag: "Giao diện Windows", front: "Khi nhấn nút Start và xem qua danh sách ứng dụng, em sẽ thấy các ứng dụng đã cài đặt sắp xếp theo thứ tự nào?", back: "Theo **thứ tự bảng chữ cái**." },
    { tag: "Giao diện Windows", img: "decks/img/splv1_4_search-box.png", front: "Search Box (Thanh tìm kiếm) nằm ở đâu và dùng để làm gì?", back: "Thường nằm **cạnh nút Start**, cho phép tìm kiếm **ứng dụng, tập tin** hoặc **thông tin trực tuyến**." },

    { tag: "Chương trình ứng dụng", img: "decks/img/splv1_4_desktop-apps-2.png", front: "Kể tên một số chương trình ứng dụng trên máy tính để bàn.", back: "**Microsoft Word**\n**Microsoft Excel**\n**Microsoft PowerPoint**\n**Adobe Photoshop**" },
    { tag: "Chương trình ứng dụng", front: "Microsoft Word dùng để làm gì?", back: "**Xử lí văn bản**" },
    { tag: "Chương trình ứng dụng", front: "Microsoft Excel dùng để làm gì?", back: "**Xử lí bảng tính**" },
    { tag: "Chương trình ứng dụng", front: "Microsoft PowerPoint dùng để làm gì?", back: "**Trình chiếu**" },
    { tag: "Chương trình ứng dụng", front: "Phần mềm nào dùng để xử lí văn bản, bảng tính, trình chiếu, thiết kế đồ họa?", back: "**Chương trình ứng dụng** trên máy tính để bàn." }
  ]
};
