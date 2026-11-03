// Bộ thẻ ghi nhớ: IC3 SPARK GS6 - Level 3 - Bài 1: Công nghệ trong đời sống
// Mỗi thẻ: tag (nhóm), front (mặt trước, chỉ có chữ), back (mặt sau; xuống dòng bằng ký tự n có dấu gạch ngược, **chữ** = in đậm),
// imgBack hoặc img (hình hiện ở mặt sau/đáp án), icon (chữ thay thế nếu không có hình)
window.DECK = {
  title: "Công nghệ trong đời sống",
  subtitle: "SPARK Level 3 · Bài 1",
  backUrl: "index.html#/0/0/2", // nút Quay lại / Về danh sách sẽ mở trang Level này
  icon: "🛰️",
  color: "blue",
  cards: [
    { tag: "Dữ liệu thời gian thực", icon: "⏱️", front: "Dữ liệu thời gian thực (Real-time Data) là gì?", back: "Là dữ liệu được **tạo ra hoặc thu thập liên tục** và được **cung cấp cho người dùng ngay lập tức**." },
    { tag: "Dữ liệu thời gian thực", img: "decks/img/realtime-mine.png", front: "Công nhân ở các khu mỏ khác nhau có thể làm gì với dữ liệu thời gian thực?", back: "**Chia sẻ dữ liệu thời gian thực** để **phối hợp làm việc**." },
    { tag: "Dữ liệu thời gian thực", img: "decks/img/realtime-health.png", front: "Y tá có thể sử dụng dữ liệu thời gian thực để làm gì?", back: "**Theo dõi dữ liệu y tế** thời gian thực để **hỗ trợ bệnh nhân từ xa**." },

    { tag: "GPS", icon: "📍", front: "GPS là viết tắt của cụm từ nào?", back: "**Global Positioning System**\n(Hệ thống định vị toàn cầu)" },
    { tag: "GPS", icon: "🛰️", front: "Hệ thống định vị toàn cầu (GPS) là gì?", back: "Là một **mạng lưới các vệ tinh và thiết bị thu tín hiệu** được sử dụng để **xác định vị trí** của một đối tượng trên **bề mặt Trái Đất**." },

    { tag: "Ngành nghề", img: "decks/img/industries.png", front: "Kể tên một số ngành nghề sử dụng công nghệ.", back: "**Y tế**\n**Giao thông**\n**Xây dựng**\n**Thời tiết**\n**Sức khỏe – Thể thao**\n**Nông nghiệp**" },
    { tag: "Ngành nghề", img: "decks/img/ind-health.png", front: "Công nghệ được sử dụng trong ngành Y tế như thế nào?", back: "**Bác sĩ** theo dõi và phân tích **dữ liệu sức khỏe** của bệnh nhân." },
    { tag: "Ngành nghề", img: "decks/img/ind-traffic.png", front: "Công nghệ được sử dụng trong ngành Giao thông như thế nào?", back: "**Tài xế** sử dụng **GPS** để **tìm đường** và **tránh tắc đường**." },
    { tag: "Ngành nghề", img: "decks/img/ind-build.png", front: "Công nghệ được sử dụng trong ngành Xây dựng như thế nào?", back: "**Kỹ sư** theo dõi **tiến độ công trình** bằng **phần mềm** và **thiết bị thông minh**." },
    { tag: "Ngành nghề", img: "decks/img/ind-weather.png", front: "Công nghệ được sử dụng trong lĩnh vực Thời tiết như thế nào?", back: "Giúp **theo dõi thời tiết**, **dự báo bão** để **cảnh báo kịp thời**." },
    { tag: "Ngành nghề", img: "decks/img/ind-sport.png", front: "Công nghệ được sử dụng trong lĩnh vực Sức khỏe – Thể thao như thế nào?", back: "**Thiết bị đeo thông minh** theo dõi **nhịp tim**, **năng lượng tiêu thụ** và **quá trình vận động**." },
    { tag: "Ngành nghề", img: "decks/img/ind-farm.png", front: "Công nghệ được sử dụng trong ngành Nông nghiệp như thế nào?", back: "Giúp **giám sát cây trồng**, **điều khiển tưới nước** và **phun thuốc tự động**." }
  ]
};
