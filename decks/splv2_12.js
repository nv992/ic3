// Bộ thẻ ghi nhớ: IC3 SPARK GS6 - Level 2 - Bài 1, 2: Hệ điều hành và các hệ điều hành thông dụng
// Mỗi thẻ: tag (nhóm), front (mặt trước, chỉ có chữ), back (mặt sau; xuống dòng bằng ký tự n có dấu gạch ngược, **chữ** = in đậm),
// imgBack hoặc img (hình hiện ở mặt sau/đáp án), icon (chữ thay thế nếu không có hình)
window.DECK = {
  title: "Hệ điều hành và các hệ điều hành thông dụng",
  subtitle: "SPARK Level 2 · Bài 1, 2",
  backUrl: "index.html#/0/0/1", // nút Quay lại / Về danh sách sẽ mở trang Level này
  icon: "⚙️",
  color: "teal",
  cards: [
    { tag: "Hệ điều hành là gì?", img: "decks/img/os-diagram.png", front: "Hệ điều hành (Operating System) là gì?", back: "Là một **phần mềm hệ thống**, là một **chương trình máy tính đặc biệt**, **quản lí tất cả các phần mềm và phần cứng** trên máy tính." },
    { tag: "Hệ điều hành là gì?", img: "decks/img/os-desktop.png", front: "Nếu không có hệ điều hành thì máy tính sẽ như thế nào?", back: "Máy tính **không khởi động được**." },
    { tag: "Hệ điều hành là gì?", icon: "⌨️", front: "Nếu không có hệ điều hành Windows thì chuột và bàn phím sẽ như thế nào?", back: "**Chuột** và **bàn phím** không hoạt động được." },
    { tag: "Hệ điều hành là gì?", icon: "📱", front: "Nếu không có hệ điều hành iOS, em không thể làm gì trên điện thoại iPhone?", back: "Không thể **cài Game** trên điện thoại iPhone." },

    { tag: "Chức năng", img: "decks/img/os-hardware.png", front: "Hệ điều hành quản lí và kiểm soát giao tiếp giữa các thiết bị nào?", back: "Giữa các **thiết bị phần cứng**." },
    { tag: "Chức năng", img: "decks/img/os-apps.png", front: "Hệ điều hành kiểm soát giao tiếp giữa những gì?", back: "Giữa các **chương trình ứng dụng** và **thiết bị phần cứng**." },
    { tag: "Chức năng", img: "decks/img/os-files.png", front: "Hệ điều hành quản lí những gì được lưu trữ trên máy tính?", back: "Quản lí các **tập tin** được lưu trữ trên máy tính (sao chép, di chuyển, xóa, …)." },

    { tag: "Driver", img: "decks/img/printer-problem.png", front: "Laptop không nhận máy in. Em cần làm gì?", back: "Cài **Driver** máy in vào máy tính." },
    { tag: "Driver", img: "decks/img/driver-girl.png", front: "Khi kết nối thiết bị mới (ví dụ: máy in) vào máy tính, hệ điều hành cần phần mềm đặc biệt nào?", back: "Phần mềm đặc biệt gọi là **Driver**." },
    { tag: "Driver", img: "decks/img/driver-diagram.png", front: "Driver là gì?", back: "Là **phần mềm** giúp **hệ điều hành hiểu và giao tiếp với thiết bị**." },
    { tag: "Driver", icon: "🔧", front: "Mỗi thiết bị phần cứng cần gì để có thể hoạt động trên hệ thống máy tính?", back: "Cần **một Driver riêng**." },
    { tag: "Driver", icon: "🌐", front: "Nếu không có Driver cho thiết bị, em có thể làm gì?", back: "Tải driver từ **trang Web của nhà sản xuất** thiết bị đó." },

    { tag: "Hệ điều hành máy tính", img: "decks/img/win-mac.png", front: "Hai hệ điều hành phổ biến nhất của máy tính để bàn và máy tính xách tay là gì?", back: "**Windows** (do Microsoft phát hành)\n**macOS** (do Apple phát hành)" },
    { tag: "Hệ điều hành máy tính", img: "decks/img/win-os.png", front: "Hệ điều hành Windows do hãng nào phát hành?", back: "**Microsoft**" },
    { tag: "Hệ điều hành máy tính", img: "decks/img/mac-os.png", front: "Hệ điều hành macOS do hãng nào phát hành?", back: "**Apple**" },

    { tag: "Phiên bản và ấn bản", img: "decks/img/version-edition.png", front: "Phiên bản (Version) và ấn bản (Edition) của hệ điều hành là gì? Cho ví dụ.", back: "**Phiên bản (Version)**: các lần ra mắt mới của hệ điều hành, ví dụ **Windows 10**, **Windows 11**.\n**Ấn bản (Edition)**: các bản dành cho nhu cầu khác nhau, ví dụ **Home**, **Pro**, **Education**." },

    { tag: "Hệ điều hành khác", img: "decks/img/chromeos.png", front: "ChromeOS do hãng nào phát hành và dùng trên thiết bị nào?", back: "Do **Google** phát hành, dùng trên **Chromebook** – máy tính nhẹ, chủ yếu **làm việc trực tuyến**." },
    { tag: "Hệ điều hành khác", img: "decks/img/linux.png", front: "Linux là hệ điều hành như thế nào?", back: "Hệ điều hành **mã nguồn mở**, **miễn phí**, thường dùng trong **lập trình** và **máy chủ**." },

    { tag: "Phần mềm khác", icon: "🧰", front: "Phần mềm tiện ích (Utility Software) là gì?", back: "Là phần mềm giúp người dùng **tối ưu hóa hệ thống**, **quản lí tập tin** và **bảo vệ máy tính**." },
    { tag: "Phần mềm khác", icon: "🛡️", front: "Phần mềm chống virus là gì?", back: "Là phần mềm có khả năng **bảo vệ, phát hiện, cảnh báo và loại bỏ** các virus máy tính đang xâm nhập và tấn công máy tính của người dùng." }
  ]
};
