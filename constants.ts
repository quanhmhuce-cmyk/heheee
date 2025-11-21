import { GalleryImage, EventDetail, NavItem } from './types';

export const WEDDING_DATE = new Date('2024-12-24T11:00:00');

export const NAV_ITEMS: NavItem[] = [
  { label: 'Trang Chủ', href: '#home' },
  { label: 'Cặp Đôi', href: '#couple' },
  { label: 'Chuyện Tình', href: '#story' },
  { label: 'Bộ Sưu Tập', href: '#gallery' },
  { label: 'Sự Kiện & Bản Đồ', href: '#events' },
  { label: 'Lời Chúc', href: '#rsvp' },
];

// Placeholder for the uploaded bride image. 
// Note: Since I cannot directly access the user's local file upload in this code generation, 
// I am using a high-quality Unsplash image. The user should replace this URL with their hosted image URL.
export const BRIDE_IMAGE_URL = "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop";

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop', caption: 'Khoảnh khắc đầu tiên', size: 'medium' },
  { id: 2, url: 'https://images.unsplash.com/photo-1511285560982-1356c11d4606?q=80&w=600&auto=format&fit=crop', caption: 'Đà Lạt mộng mơ', size: 'small' },
  { id: 3, url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop', caption: 'Ngày chung đôi', size: 'large' },
  { id: 4, url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600&auto=format&fit=crop', caption: 'Huế thương', size: 'small' },
  { id: 5, url: 'https://images.unsplash.com/photo-1522673607200-1645062cd495?q=80&w=800&auto=format&fit=crop', caption: 'Bếp ấm', size: 'medium' },
  { id: 6, url: 'https://images.unsplash.com/photo-1532712938310-34cb3958d42d?q=80&w=600&auto=format&fit=crop', caption: 'Hạnh phúc trọn vẹn', size: 'small' },
];

export const EVENTS: EventDetail[] = [
  {
    title: "Lễ Vu Quy (Nhà Gái)",
    date: "22 Tháng 12, 2024",
    time: "09:00 AM",
    location: "Tư gia Nhà Gái - Thanh Hoá",
    address: "TP. Thanh Hoá, Tỉnh Thanh Hoá",
    // Map showing Thanh Hoa City area
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119882.32470676863!2d105.72345564465632!3d19.80099661272845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3136f7f1d273f333%3A0x5834538502853031!2zVHAuIFRoYW5oIEhvw6EsIFRoYW5oIEhvw6E!5e0!3m2!1svi!2s!4v1710000000000!5m2!1svi!2s",
    image: "https://images.unsplash.com/photo-1519225469958-305eac87d954?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Lễ Thành Hôn (Nhà Trai)",
    date: "24 Tháng 12, 2024",
    time: "11:00 AM",
    location: "Tư gia Nhà Trai - Huế",
    address: "TP. Huế, Thừa Thiên Huế",
    // Map showing Hue City area
    mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61349.633359124695!2d107.55155064044188!3d16.463713059514048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141a115e1a7935f%3A0xbf3b50af70b5c7b7!2zVHAuIEh14bq_LCBUaOG7q2EgVGhpw6puIEh14bq_!5e0!3m2!1svi!2s!4v1710000000001!5m2!1svi!2s",
    image: "https://images.unsplash.com/photo-1542038784456-1ea0e939a143?q=80&w=600&auto=format&fit=crop"
  }
];

export const AI_SYSTEM_INSTRUCTION = `
Bạn là trợ lý ảo cho đám cưới của Minh Trí và Trương Trang.
Phong cách: Sang trọng, nhẹ nhàng, ấm áp và lãng mạn.
Thông tin:
- Chú rể: Minh Trí (Huế).
- Cô dâu: Trương Trang (Thanh Hoá).
- Lễ Vu Quy (Thanh Hoá): 22/12/2024.
- Lễ Thành Hôn (Huế): 24/12/2024.
Nhiệm vụ: Cung cấp thông tin địa điểm, hướng dẫn đường đi đến Huế hoặc Thanh Hoá, và gửi lời cảm ơn lịch thiệp.
`;