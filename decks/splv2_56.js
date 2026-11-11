// Bộ thẻ ghi nhớ: IC3 SPARK GS6 - Level 4 - Bài 5 + 6: Thiết bị nhập, thiết bị xuất và thiết bị vừa nhập vừa xuất
// Mỗi thẻ: tag (nhóm), front (mặt trước, chỉ có chữ), back (mặt sau; xuống dòng bằng ký tự n có dấu gạch ngược, **chữ** = in đậm),
// imgBack hoặc img (hình hiện ở mặt sau/đáp án), icon (chữ thay thế nếu không có hình)
const I = n => "decks/img/io4-" + n + ".png";
window.DECK = {
  title: "Thiết bị nhập, thiết bị xuất",
  subtitle: "SPARK Level 2 · Bài 5 + 6",
  backUrl: "index.html#/0/0/3", // nút Quay lại / Về danh sách sẽ mở trang Level này
  icon: "🖱️",
  color: "teal",
  cards: [
    // ---- Thiết bị nhập ----
    { tag: "Thiết bị nhập", front: "Thiết bị nhập (Input Device) là gì?", back: "Là những thiết bị giúp em **gửi, đưa, truyền, nhập thông tin vào máy tính**." },
    { tag: "Thiết bị nhập", front: "Kể tên các thiết bị nhập.", back: "**Bàn phím (Keyboard)**\n**Chuột (Mouse)**\n**Microphone**\n**Camera/ Webcam**\n**Máy quét (Scanner)**\n**Bàn di chuột (Touchpad)**" },

    // ---- Thiết bị xuất ----
    { tag: "Thiết bị xuất", front: "Thiết bị xuất (Output Device) là gì?", back: "Là những thiết bị **đưa kết quả xử lí của máy tính đến con người** dưới dạng **hình ảnh, âm thanh, văn bản in hoặc ánh sáng chiếu**." },
    { tag: "Thiết bị xuất", front: "Nói đơn giản, thiết bị xuất giúp em làm gì?", back: "Giúp em **NHÌN THẤY, NGHE THẤY** hoặc **CẦM ĐƯỢC** kết quả mà máy tính tạo ra." },
    { tag: "Thiết bị xuất", front: "Kể tên 5 thiết bị xuất.", back: "**Màn hình (Monitor / Screen)**\n**Loa (Speaker)**\n**Tai nghe (Headphone)**\n**Máy chiếu (Projector)**\n**Máy in (Printer)**" },
    
    // ---- Nhập và xuất ----
    { tag: "Nhập và xuất", front: "Thiết bị nhập có chức năng gì?", back: "**Gửi thông tin đến máy tính** để xử lí." },
    { tag: "Nhập và xuất", front: "Thiết bị xuất có chức năng gì?", back: "**Nhận thông tin đã xử lí từ máy tính** để con người sử dụng." },

    // ---- Vừa nhập vừa xuất ----
    { tag: "Vừa nhập vừa xuất", img: I("touchscreen"), front: "Màn hình cảm ứng (Touchscreen) đóng vai trò thiết bị xuất khi nào?", back: "Khi **hiển thị hình ảnh, văn bản, giao diện ứng dụng** từ máy tính." },
    { tag: "Vừa nhập vừa xuất", img: I("touchscreen"), front: "Màn hình cảm ứng đóng vai trò thiết bị nhập khi nào?", back: "Khi **nhận lệnh chạm, vuốt, chạm ngón tay** từ người dùng." },
    { tag: "Vừa nhập vừa xuất", img: I("headset"), front: "Tai nghe đàm thoại (Headset) gồm những phần nào?", back: "**Tai nghe (headphone):** thiết bị **xuất**, phát âm thanh ra ngoài.\n**Micrô (microphone):** thiết bị **nhập**, thu âm thanh, giọng nói của người dùng." },
    { tag: "Vừa nhập vừa xuất", img: I("touchscreen"), front: "Màn hình cảm ứng = ? + ?", back: "**Màn hình (xuất)** + **Chuột (nhập)**." },
    { tag: "Vừa nhập vừa xuất", img: I("headset"), front: "Tai nghe đàm thoại = ? + ?", back: "**Tai nghe (xuất)** + **Micrô (nhập)**." },
  ]
};
