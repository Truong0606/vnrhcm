# Brainstorm Thiết Kế Website: Ngoại Giao Cây Tre - Đại Hội XIII

## Phương Hướng Thiết Kế Được Chọn

### **Design Movement: Minimalist Elegance meets Traditional Symbolism**
Kết hợp tối giản hiện đại với biểu tượng truyền thống Việt Nam, tạo nên một không gian tôn trọng di sản văn hóa nhưng vẫn giữ sự tinh tế và hiện đại.

#### **Core Principles:**
1. **Sự Cân Bằng Giữa Truyền Thống & Hiện Đại** - Sử dụng các yếu tố truyền thống Việt Nam (cây tre, hoa sen, chữ Hán) nhưng thể hiện qua ngôn ngữ thiết kế hiện đại, tối giản
2. **Không Gian Âm Tính Có Mục Đích** - Whitespace rộng rãi tạo cảm giác tĩnh lặng, suy tư, phản ánh sự kiên định và tự chủ
3. **Hành Trình Khám Phá Từ Từ** - Scroll dọc kéo dài, từng phần lộ dần nội dung, như việc khám phá tư tưởng Hồ Chí Minh
4. **Tính Biểu Tượng Cao** - Mỗi yếu tố thiết kế đều mang ý nghĩa: cây tre = linh hoạt, hoa sen = tinh khiết, đỏ vàng = tổ quốc

#### **Color Philosophy:**
- **Màu Chính**: Đỏ sâu (Crimson Red - #C41E3A) - Màu cách mạng, tình yêu Tổ quốc
- **Màu Phụ**: Vàng ấm (Golden Yellow - #F4B942) - Ánh sáng, hy vọng, sự giàu có của đất nước
- **Nền**: Trắng sáng (Off-White - #F9F7F4) với texture nhẹ - Sạch sẽ, trang nghiêm
- **Accent**: Xanh lục (Deep Green - #1B5E20) - Cây tre, thiên nhiên, sự sống
- **Text**: Xám sâu (Charcoal - #2C2C2C) - Dễ đọc, trang trọng
- **Ý Nghĩa Cảm Xúc**: Kết hợp năng lượng của đỏ-vàng với sự bình tĩnh của xanh lục, tạo cảm giác vừa mạnh mẽ vừa sâu sắc

#### **Layout Paradigm:**
- **Asymmetric Vertical Scroll** - Không dùng grid đối xứng, thay vào đó sử dụng các section có độ cao khác nhau, hình ảnh nằm lệch một bên
- **Diagonal Dividers** - Các phần được ngăn cách bởi đường chéo mềm mại, tạo cảm giác chuyển động
- **Floating Elements** - Các yếu tố thiết kế (cây tre, hoa sen) nổi trên nền, không bị giới hạn trong khung cứng nhắc
- **Vertical Timeline** - Đường thẳng đứng chạy qua giữa trang, kết nối các giai đoạn lịch sử và ý tưởng

#### **Signature Elements:**
1. **Cây Tre Stylized** - Hình vẽ cây tre tối giản, có thể xuất hiện ở header, footer, hoặc làm watermark
2. **Hoa Sen Trang Trí** - Hoa sen nhỏ xinh tạo điểm nhấn ở các góc, biểu tượng của tinh khiết
3. **Đường Chéo Mềm Mại** - SVG divider giữa các section, tạo sự chuyển động nhẹ nhàng
4. **Typography Cổ Điển** - Sử dụng serif font cho heading, tạo cảm giác trang trọng và lịch sử

#### **Interaction Philosophy:**
- **Scroll-triggered Animations** - Các phần tử xuất hiện khi scroll vào, tạo cảm giác khám phá
- **Hover Effects Tinh Tế** - Khi hover vào các phần, có hiệu ứng fade-in nhẹ hoặc scale nhỏ
- **Parallax Subtle** - Hình nền di chuyển chậm hơn text, tạo độ sâu
- **Smooth Transitions** - Tất cả chuyển động mượt mà, không bất ngờ

#### **Animation Guidelines:**
- **Entrance Animations**: Fade-in từ từ (0.6s), slide-up nhẹ nhàng cho text
- **Scroll Animations**: Các phần tử xuất hiện khi scroll vào viewport, không quá nhanh
- **Hover States**: Scale nhỏ (1.02x) với transition 0.3s, không quá rõ ràng
- **Loading States**: Spinner tối giản, có thể là hình cây tre xoay
- **Timing**: Tất cả animation sử dụng ease-in-out, tránh linear

#### **Typography System:**
- **Display Font**: Playfair Display hoặc Crimson Text (serif) - Cho heading lớn, tạo cảm giác cổ điển, trang trọng
- **Body Font**: Inter hoặc Lora (serif nhẹ) - Cho nội dung chính, dễ đọc
- **Accent Font**: Montserrat (sans-serif) - Cho tagline, quote, tạo sự hiện đại
- **Hierarchy**:
  - H1: 48px, Playfair Display, Bold, Crimson Red
  - H2: 36px, Playfair Display, SemiBold, Charcoal
  - H3: 24px, Montserrat, SemiBold, Deep Green
  - Body: 16px, Lora, Regular, Charcoal
  - Caption: 14px, Inter, Regular, Muted Foreground

---

## Các Ý Tưởng Khác (Không Được Chọn)

### Alternative 1: **Modern Brutalism with Vietnamese Motifs**
- Sử dụng các khối hình học lớn, màu sắc tương phản cao
- Typography bold, layout grid chặt chẽ
- Probability: 0.08

### Alternative 2: **Watercolor Art Aesthetic**
- Nền watercolor mềm mại, màu sắc pastel
- Hình vẽ tay, cảm giác organic
- Typography playful, layout organic
- Probability: 0.06

---

## Tóm Tắt Quyết Định Thiết Kế

**Lý Do Chọn Minimalist Elegance:**
- Phản ánh tư tưởng Hồ Chí Minh: đơn giản, sâu sắc, có mục đích
- Tôn trọng biểu tượng truyền thống (cây tre, hoa sen) mà không quá trang trí
- Tạo không gian cho người dùng suy tư, khám phá từ từ
- Phù hợp với chủ đề "ngoại giao cây tre" - linh hoạt nhưng vững chắc
- Dễ bảo trì, dễ mở rộng trong tương lai
