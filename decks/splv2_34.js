// Bộ thẻ ghi nhớ: IC3 SPARK GS6 - Level 2 - Bài 3 + 4: Thông tin đầu vào/đầu ra, bộ nhớ và thiết bị lưu trữ
// Mỗi thẻ: tag (nhóm), front (mặt trước, chỉ có chữ), back (mặt sau; xuống dòng bằng ký tự n có dấu gạch ngược, **chữ** = in đậm),
// imgBack hoặc img (hình hiện ở mặt sau/đáp án), icon (chữ thay thế nếu không có hình)
window.DECK = {
  title: "Thông tin vào/ra, bộ nhớ và thiết bị lưu trữ",
  subtitle: "SPARK Level 2 · Bài 3 + 4",
  backUrl: "index.html#/0/0/1", // nút Quay lại / Về danh sách sẽ mở trang Level này
  icon: "💾",
  color: "teal",
  cards: [
    { tag: "Thông tin vào/ra", front: "Thông tin đầu vào (Input) là gì?", back: "Là thông tin mà em **đưa vào máy tính**." },
    { tag: "Thông tin vào/ra", img: "decks/img/os2-input-ex.png", front: "Cho ví dụ về thông tin đầu vào.", back: "**Chụp ảnh** bằng máy ảnh: ảnh đó là thông tin đầu vào.\n**Ghi âm** bằng máy ghi âm: âm thanh được ghi là thông tin đầu vào." },
    { tag: "Thông tin vào/ra", front: "Thông tin đầu ra (Output) là gì?", back: "Là thông tin **kết quả** được **tạo ra từ máy tính**." },
    { tag: "Thông tin vào/ra", img: "decks/img/os2-output-ex.png", front: "Cho ví dụ về thông tin đầu ra.", back: "**Âm thanh** phát ra từ máy tính.\n**Hình ảnh** hiển thị trên màn hình." },

    { tag: "Bộ nhớ máy tính", front: "Bộ nhớ máy tính có vai trò gì?", back: "Giúp **lưu trữ thông tin**.\nLà thành phần **quan trọng nhất** được sử dụng để **chạy các ứng dụng**." },
    { tag: "Bộ nhớ máy tính", img: "decks/img/os2-ram-rom.png", front: "Máy tính sử dụng hai loại bộ nhớ cơ bản nào?", back: "**ROM** (Read-Only Memory)\n**RAM** (Random Access Memory)" },
    { tag: "Bộ nhớ máy tính", front: "ROM (Read-Only Memory) là loại bộ nhớ nào và dùng để làm gì?", back: "Là **bộ nhớ vĩnh viễn**, dùng để lưu trữ các **thông tin quan trọng** mà **không được sửa đổi**." },
    { tag: "Bộ nhớ máy tính", front: "RAM (Random Access Memory) là loại bộ nhớ nào và dùng để làm gì?", back: "Là **bộ nhớ tạm thời**, dùng để lưu trữ thông tin **trong quá trình máy tính đang hoạt động**." },

    { tag: "Thiết bị lưu trữ", img: "decks/img/os2-storage.png", front: "Kể tên một số thiết bị lưu trữ.", back: "**Ổ cứng (Hard disk)**\n**SSD**\n**USB**\n**Thẻ nhớ**" },

    { tag: "Đơn vị lưu trữ", img: "decks/img/os2-units.png", front: "Kể tên các đơn vị đo dung lượng lưu trữ từ nhỏ đến lớn.", back: "**Byte (B)**\n**Kilobyte (KB)**\n**Megabyte (MB)**\n**Gigabyte (GB)**\n**Terabyte (TB)**" },
  ]
};
