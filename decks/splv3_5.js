// Bộ thẻ ghi nhớ: IC3 SPARK GS6 - Level 3 - Bài 5: Bộ định vị tài nguyên thống nhất (URL)
// Mỗi thẻ: tag (nhóm), front (mặt trước, chỉ có chữ), back (mặt sau; xuống dòng bằng ký tự n có dấu gạch ngược, **chữ** = in đậm),
// imgBack hoặc img (hình hiện ở mặt sau/đáp án), icon (chữ thay thế nếu không có hình)
window.DECK = {
  title: "Bộ định vị tài nguyên thống nhất (URL)",
  subtitle: "SPARK Level 3 · Bài 5",
  backUrl: "index.html#/0/0/2", // nút Quay lại / Về danh sách sẽ mở trang Level này
  icon: "🔗",
  color: "blue",
  cards: [
    { tag: "URL là gì?", front: "URL là viết tắt của cụm từ nào?", back: "**Uniform Resource Locator**\n(Bộ định vị tài nguyên thống nhất)" },
    { tag: "URL là gì?", front: "Bộ định vị tài nguyên thống nhất (URL) là gì?", back: "Là **địa chỉ duy nhất** để **định vị và truy cập** đến các **tài nguyên trên Internet**." },
    { tag: "URL là gì?", front: "Kể tên 2 ví dụ về URL.", back: "**https://www.natgeokids.com**\n**https://www.wikipedia.org/wiki/rung_mua_nhiet_doi**" },

    { tag: "Cấu trúc URL", front: "Một URL bao gồm hai phần cơ bản nào?", back: "**1. Định danh giao thức**\n**2. Tên tài nguyên**" },
      { tag: "Cấu trúc URL", front: "Ngoài hai thành phần cơ bản, URL còn có các thành phần nào?", back: "**Đường dẫn (Path): sau dấu /**\n**Tham số truy vấn (Query Parameters): sau dấu ?**\n**Neo (Anchor): sau dấu #**" },

    { tag: "Cấu trúc URL", front: "Trong URL http://www.ccilearning.com, đâu là phần định danh giao thức?", back: "**http**" },
    { tag: "Cấu trúc URL", front: "Trong URL http://www.ccilearning.com, đâu là phần tên tài nguyên?", back: "**www.ccilearning.com**" },
    { tag: "Cấu trúc URL", front: "Phần định danh giao thức và tên tài nguyên được phân cách bởi những ký tự nào?", back: "**Dấu hai chấm (:)** và **hai dấu gạch chéo (//)**." },
    { tag: "Cấu trúc URL", front: "Giữa giao thức **http** và **https** thì giao thức nào bảo mật hơn?", back: "https" },


    { tag: "Tên tài nguyên", front: "Tên tài nguyên của một URL gồm mấy thành phần chính? Kể tên.", back: "**3 thành phần chính:**\n**1. Tên miền phụ (Sub-Domain)**\n**2. Tên miền (Domain name)**\n**3. Tên miền cấp cao nhất (Top-level Domain)**" },
    { tag: "Tên tài nguyên", front: "Trong tên tài nguyên www.ccilearning.com, đâu là tên miền phụ (Sub-Domain)?", back: "**www**" },
    { tag: "Tên tài nguyên", front: "Trong tên tài nguyên www.ccilearning.com, đâu là tên miền (Domain name)?", back: "**ccilearning**" },
    { tag: "Tên tài nguyên", front: "Trong tên tài nguyên www.ccilearning.com, đâu là tên miền cấp cao nhất (Top-level Domain)?", back: "**com**" },

    { tag: "Tên miền cấp cao nhất", front: "Tên miền cấp cao nhất (Top-level Domain – TLD) cho biết điều gì?", back: "Cho biết **loại tổ chức hoặc quốc gia** của trang web." },
    { tag: "Tên miền cấp cao nhất", front: ".COM là tên miền cấp cao nhất của các tổ chức nào?", back: "**Thương mại**" },
    { tag: "Tên miền cấp cao nhất", front: ".EDU là tên miền cấp cao nhất của các tổ chức nào?", back: "**Giáo dục**" },
    { tag: "Tên miền cấp cao nhất", front: ".GOV là tên miền cấp cao nhất của các tổ chức nào?", back: "**Chính phủ**" },
    { tag: "Tên miền cấp cao nhất", front: ".NET là tên miền cấp cao nhất của các tổ chức nào?", back: "Các tổ chức liên quan đến **mạng**." },
    { tag: "Tên miền cấp cao nhất", front: ".ORG là tên miền cấp cao nhất của các tổ chức nào?", back: "**Phi lợi nhuận**" },

    { tag: "URL hợp lệ", front: "URL hợp lệ là gì?", back: "Là **chuỗi kí tự theo đúng cấu trúc** để **chỉ vị trí** của một tài nguyên trên Internet." },
    { tag: "URL hợp lệ", front: "URL không hợp lệ là gì?", back: "Là URL có **lỗi cú pháp**, **thiếu giao thức**, **tên miền** hoặc **đường dẫn không chính xác**." }
  ]
};
