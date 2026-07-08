import React from 'react';
import AdminHeading from './components/admin-heading';
import AdminText from './components/admin-text';
import AdminImage from './components/admin-image';
import AdminSection from './components/admin-section';
import AdminHero from './components/admin-hero';
import AdminBannerSenHong from './components/admin-banner-senhong';
import AdminDepartments from './components/admin-departments';
import AdminAboutUs from './components/admin-about-us';

export const puckConfig = {
  components: {

    // ─────────────────────────────────────────
    // TIÊU ĐỀ
    // ─────────────────────────────────────────
    Heading: {
      label: 'Tiêu đề',
      fields: {
        content: { type: 'text', label: 'Nội dung' },
        level: {
          type: 'select', label: 'Cấp độ',
          options: [
            { label: 'H1', value: 1 }, { label: 'H2', value: 2 },
            { label: 'H3', value: 3 }, { label: 'H4', value: 4 },
            { label: 'H5', value: 5 }, { label: 'H6', value: 6 }
          ]
        },
        align: {
          type: 'select', label: 'Căn lề',
          options: [
            { label: 'Trái', value: 'left' },
            { label: 'Giữa', value: 'center' },
            { label: 'Phải', value: 'right' }
          ]
        }
      },
      defaultProps: { content: 'Tiêu đề', level: 2, align: 'left' },
      render: (props) => <AdminHeading {...props} />
    },

    // ─────────────────────────────────────────
    // VĂN BẢN
    // ─────────────────────────────────────────
    Text: {
      label: 'Văn bản',
      fields: {
        content: { type: 'textarea', label: 'Nội dung' },
        align: {
          type: 'select', label: 'Căn lề',
          options: [
            { label: 'Trái', value: 'left' },
            { label: 'Giữa', value: 'center' },
            { label: 'Phải', value: 'right' },
            { label: 'Đều', value: 'justify' }
          ]
        }
      },
      defaultProps: { content: 'Nhập văn bản ở đây...', align: 'left' },
      render: (props) => <AdminText {...props} />
    },

    // ─────────────────────────────────────────
    // ẢNH
    // ─────────────────────────────────────────
    Image: {
      label: 'Ảnh',
      fields: {
        src: { type: 'text', label: 'URL ảnh' },
        alt: { type: 'text', label: 'Alt text' },
        width: { type: 'text', label: 'Chiều rộng (vd: 100%, 400px)' },
        height: { type: 'text', label: 'Chiều cao (vd: auto, 300px)' },
        borderRadius: { type: 'text', label: 'Bo góc (vd: 0, 8px, 50%)' },
        align: {
          type: 'select', label: 'Căn lề',
          options: [
            { label: 'Trái', value: 'left' },
            { label: 'Giữa', value: 'center' },
            { label: 'Phải', value: 'right' }
          ]
        }
      },
      defaultProps: {
        src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
        alt: 'Ảnh minh họa',
        width: '100%',
        height: 'auto',
        borderRadius: '0',
        align: 'center'
      },
      render: (props) => <AdminImage {...props} />
    },

    // ─────────────────────────────────────────
    // SECTION (KHUNG BỐ CỤC)
    // ─────────────────────────────────────────
    Section: {
      label: 'Khoảng (Section)',
      fields: {
        container: {
          type: 'select', label: 'Chiều rộng tối đa',
          options: [
            { label: 'Small (640px)', value: 'sm' },
            { label: 'Medium (768px)', value: 'md' },
            { label: 'Large (1024px)', value: 'lg' },
            { label: 'XL (1280px)', value: 'xl' },
            { label: '2XL (1536px)', value: '2xl' }
          ]
        },
        background: {
          type: 'object', label: 'Nền',
          objectFields: {
            type: {
              type: 'select', label: 'Loại nền',
              options: [
                { label: 'Màu đơn', value: 'color' },
                { label: 'Dải màu (Gradient)', value: 'gradient' },
                { label: 'Hình ảnh', value: 'image' }
              ]
            },
            color: { type: 'text', label: 'Màu nền (Hex/RGB)' },
            fromColor: { type: 'text', label: 'Màu bắt đầu Gradient' },
            toColor: { type: 'text', label: 'Màu kết thúc Gradient' },
            direction: { type: 'text', label: 'Hướng Gradient (vd: to right, 135deg)' },
            bg_image: { type: 'text', label: 'URL ảnh nền' },
            opacity: { type: 'number', label: 'Độ mờ nền (0-1)', min: 0, max: 1, step: 0.05 }
          }
        },
        padding_x: { type: 'number', label: 'Padding ngang (đơn vị x4px)', min: 0, max: 32 },
        padding_y: { type: 'number', label: 'Padding dọc (đơn vị x4px)', min: 0, max: 32 },
        content: { type: 'slot' }
      },
      defaultProps: {
        container: 'lg',
        background: { type: 'color', color: '#ffffff', opacity: 1 },
        padding_x: 4,
        padding_y: 8,
        content: []
      },
      render: (props) => <AdminSection {...props} />
    },

    // ─────────────────────────────────────────
    // HERO BANNER
    // ─────────────────────────────────────────
    Hero: {
      label: 'Hero Banner',
      fields: {
        title: { type: 'text', label: 'Tiêu đề lớn' },
        subtitle: { type: 'textarea', label: 'Mô tả ngắn' },
        buttons: {
          type: 'array', label: 'Danh sách nút bấm',
          arrayFields: {
            text: { type: 'text', label: 'Chữ trên nút' },
            url: { type: 'text', label: 'Đường dẫn (URL)' },
            style: {
              type: 'select', label: 'Kiểu nút',
              options: [
                { label: 'Primary (Xanh)', value: 'primary' },
                { label: 'Secondary (Tím)', value: 'secondary' },
                { label: 'Outline (Viền trắng)', value: 'outline' }
              ]
            }
          },
          getItemSummary: (item) => item.text || 'Nút bấm'
        },
        background: {
          type: 'object', label: 'Nền Hero',
          objectFields: {
            type: {
              type: 'select', label: 'Loại nền',
              options: [
                { label: 'Màu đơn', value: 'color' },
                { label: 'Dải màu (Gradient)', value: 'gradient' },
                { label: 'Hình ảnh', value: 'image' }
              ]
            },
            color: { type: 'text', label: 'Màu nền' },
            fromColor: { type: 'text', label: 'Màu bắt đầu Gradient' },
            toColor: { type: 'text', label: 'Màu kết thúc Gradient' },
            direction: { type: 'text', label: 'Hướng Gradient (vd: to bottom right, 135deg)' },
            bg_image: { type: 'text', label: 'URL ảnh nền' }
          }
        },
        layout: {
          type: 'object', label: 'Bố cục nội dung',
          objectFields: {
            align: {
              type: 'select', label: 'Căn lề',
              options: [
                { label: 'Trái', value: 'left' },
                { label: 'Giữa', value: 'center' },
                { label: 'Phải', value: 'right' }
              ]
            }
          }
        }
      },
      defaultProps: {
        title: 'Chào mừng đến với website',
        subtitle: 'Chúng tôi cung cấp những sản phẩm và dịch vụ tốt nhất cho cộng đồng doanh nhân Đồng Tháp',
        buttons: [
          { text: 'Tìm hiểu thêm', url: '#', style: 'primary' },
          { text: 'Liên hệ ngay', url: '#contact', style: 'outline' }
        ],
        background: {
          type: 'gradient',
          fromColor: '#667eea',
          toColor: '#764ba2',
          direction: 'to bottom right'
        },
        layout: { align: 'center' }
      },
      render: (props) => <AdminHero {...props} />
    },

    // ─────────────────────────────────────────
    // BANNER SEN HỒNG
    // ─────────────────────────────────────────
    BannerSenHong: {
      label: 'Cụm Sen Hồng',
      fields: {
        // --- NỀN ---
        backgroundType: {
          type: 'radio', label: 'Loại nền',
          options: [
            { label: 'Màu / Gradient', value: 'color' },
            { label: 'Hình ảnh / GIF', value: 'image' }
          ]
        },
        backgroundValue: { type: 'text', label: 'Mã màu, CSS gradient hoặc URL ảnh nền' },
        alignment: {
          type: 'select', label: 'Vị trí khối nội dung',
          options: [
            { label: 'Trái', value: 'flex-start' },
            { label: 'Giữa', value: 'center' },
            { label: 'Phải', value: 'flex-end' }
          ]
        },
        boxRadius: { type: 'text', label: 'Bo góc khối (vd: 24px, 40px 0px 40px 0px)' },

        // --- BADGE ---
        showBadge: { type: 'radio', label: 'Hiển thị Badge', options: [{ label: 'Có', value: true }, { label: 'Không', value: false }] },
        badgeText: { type: 'text', label: 'Chữ Badge' },
        badgeBgColor: { type: 'text', label: 'Màu nền Badge' },
        badgeTextColor: { type: 'text', label: 'Màu chữ Badge' },

        // --- TIÊU ĐỀ ---
        topText: { type: 'text', label: 'Chữ nhỏ phía trên tiêu đề (uppercase)' },
        topTextColor: { type: 'text', label: 'Màu chữ nhỏ' },
        title: { type: 'text', label: 'Tiêu đề chính' },
        titleColor: { type: 'text', label: 'Màu tiêu đề' },
        titleSize: { type: 'text', label: 'Cỡ chữ tiêu đề (vd: 56px, 4rem)' },
        titleGradient: { type: 'text', label: 'Gradient cho chữ tiêu đề (CSS, để trống = dùng màu đơn)' },

        // --- MÔ TẢ ---
        description: { type: 'textarea', label: 'Đoạn mô tả' },
        descColor: { type: 'text', label: 'Màu mô tả' },
        descSize: { type: 'text', label: 'Cỡ chữ mô tả (vd: 14px)' },

        // --- THỐNG KÊ ---
        showStats: { type: 'radio', label: 'Hiển thị thống kê', options: [{ label: 'Có', value: true }, { label: 'Không', value: false }] },
        stats: {
          type: 'array', label: 'Các chỉ số thống kê',
          getItemSummary: (s) => s.number || 'Chỉ số',
          arrayFields: {
            number: { type: 'text', label: 'Số / Giá trị (vd: 500+)' },
            label: { type: 'text', label: 'Nhãn bên dưới (vd: Doanh nhân)' }
          }
        },

        // --- NÚT CHÍNH ---
        buttonText: { type: 'text', label: 'Chữ nút chính' },
        buttonUrl: { type: 'text', label: 'Đường dẫn nút chính (URL)' },
        buttonBgColor: { type: 'text', label: 'Màu nền nút (ghi đè gradient)' },
        buttonTextColor: { type: 'text', label: 'Màu chữ nút chính' },
        buttonRadius: { type: 'text', label: 'Bo góc nút chính (vd: 999px)' },
        buttonHoverBg: { type: 'text', label: 'Màu nền nút khi hover' },
        buttonHoverTextColor: { type: 'text', label: 'Màu chữ nút khi hover' },

        // --- NÚT PHỤ ---
        showSecondButton: { type: 'radio', label: 'Hiển thị nút phụ', options: [{ label: 'Có', value: true }, { label: 'Không', value: false }] },
        button2Text: { type: 'text', label: 'Chữ nút phụ' },
        button2Url: { type: 'text', label: 'Đường dẫn nút phụ (URL)' },
        button2TextColor: { type: 'text', label: 'Màu chữ nút phụ' },
        button2Radius: { type: 'text', label: 'Bo góc nút phụ (vd: 999px)' },

        // --- ẢNH BÊN PHẢI ---
        showImage: { type: 'radio', label: 'Hiển thị ảnh bên phải', options: [{ label: 'Có', value: true }, { label: 'Không', value: false }] },
        imageUrl: { type: 'text', label: 'URL ảnh bên phải' },
        imageRadius: { type: 'text', label: 'Bo góc ảnh (vd: 24px)' },

        // --- TRANG TRÍ ---
        showDecorations: { type: 'radio', label: 'Hoa sen nổi (decoration)', options: [{ label: 'Có', value: true }, { label: 'Không', value: false }] },
      },
      defaultProps: {
        backgroundType: 'color',
        backgroundValue: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 40%, #a78bfa 75%, #f472b6 100%)',
        alignment: 'flex-start',
        boxRadius: '40px 0px 40px 0px',
        topText: 'LAN TỎA GIÁ TRỊ ĐẤT',
        topTextColor: '#e2e8f0',
        title: 'Sen Hồng',
        titleColor: '#facc15',
        titleSize: '56px',
        description: 'CLB Doanh nhân Đồng Tháp tại TPHCM quy tụ những người con quê hương Đất Sen Hồng. Với tinh thần Hợp tác - Đổi mới - Phát triển, CLB đóng vai trò là cầu nối chiến lược, hợp tác, thúc đẩy giá trị kinh doanh và lan tỏa sẻ chia nghĩa tình quê hương.',
        descColor: '#ffffff',
        descSize: '14px',
        buttonText: 'Tham gia cộng đồng',
        buttonBgColor: '',
        buttonTextColor: '#ffffff',
        buttonRadius: '999px',
        buttonHoverBg: 'linear-gradient(to right, #0060ff 0%, #00cbfe 100%)',
        buttonHoverTextColor: '#facc15'
      },
      render: (props) => <AdminBannerSenHong {...props} />
    },

    // ─────────────────────────────────────────
    // CÁC BAN CHUYÊN MÔN
    // ─────────────────────────────────────────
    Departments: {
      label: 'Các Ban Chuyên Môn',
      fields: {
        backgroundType: {
          type: 'radio', label: 'Loại nền',
          options: [
            { label: 'Màu / Gradient', value: 'color' },
            { label: 'Hình ảnh', value: 'image' }
          ]
        },
        backgroundValue: { type: 'text', label: 'Mã màu, CSS gradient hoặc URL ảnh' },
        mainTitle: { type: 'text', label: 'Tiêu đề chính' },
        titleColor: { type: 'text', label: 'Màu tiêu đề' },
        subTitle: { type: 'text', label: 'Tiêu đề phụ (tên CLB)' },
        items: {
          type: 'array', label: 'Danh sách các Ban',
          getItemSummary: (item) => item.title || 'Ban chuyên môn',
          arrayFields: {
            title: { type: 'text', label: 'Tên Ban' },
            icon: { type: 'text', label: 'URL Icon (PNG/SVG, nền trắng để lọc trắng)' },
            btnText: { type: 'text', label: 'Chữ nút bấm' },
            btnRadius: { type: 'text', label: 'Bo góc nút (vd: 20px)' }
          }
        }
      },
      defaultProps: {
        backgroundType: 'color',
        backgroundValue: 'linear-gradient(135deg, #ffffffff 0%, #ffe4fdff 20%, #8578ffff 100%)',
        mainTitle: 'CÁC BAN CHUYÊN MÔN',
        titleColor: '#1e3a8a',
        subTitle: 'CLB DOANH NHÂN ĐỒNG THÁP TẠI TP. HỒ CHÍ MINH',
        items: [
          {
            title: 'Ban Kinh tế - Đầu tư',
            icon: 'https://cdn-icons-png.flaticon.com/512/3121/3121609.png',
            btnText: 'Xem hoạt động',
            btnRadius: '20px'
          },
          {
            title: 'Ban Văn hóa - Thể thao',
            icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135783.png',
            btnText: 'Xem hoạt động',
            btnRadius: '20px'
          },
          {
            title: 'Ban Xã hội - Cộng đồng',
            icon: 'https://cdn-icons-png.flaticon.com/512/1256/1256650.png',
            btnText: 'Xem hoạt động',
            btnRadius: '20px'
          },
          {
            title: 'Ban Khởi nghiệp',
            icon: 'https://cdn-icons-png.flaticon.com/512/3067/3067416.png',
            btnText: 'Xem hoạt động',
            btnRadius: '20px'
          },
          {
            title: 'Ban Giao thương quốc tế',
            icon: 'https://cdn-icons-png.flaticon.com/512/2885/2885417.png',
            btnText: 'Xem hoạt động',
            btnRadius: '20px'
          }
        ]
      },
      render: (props) => <AdminDepartments {...props} />
    },

    // ─────────────────────────────────────────
    // VỀ CLB & TỔ CHỨC
    // ─────────────────────────────────────────
    AboutUs: {
      label: 'Về CLB & Tổ Chức',
      fields: {
        backgroundType: {
          type: 'radio', label: 'Loại nền',
          options: [
            { label: 'Màu / Gradient', value: 'color' },
            { label: 'Hình ảnh', value: 'image' }
          ]
        },
        backgroundValue: { type: 'text', label: 'Mã màu, CSS gradient hoặc URL ảnh' },
        columns: {
          type: 'array', label: 'Các cột thông tin',
          getItemSummary: (item) => item.title || 'Cột thông tin',
          arrayFields: {
            type: {
              type: 'select', label: 'Loại nội dung',
              options: [
                { label: 'Đoạn văn bản', value: 'text' },
                { label: 'Danh sách nhân sự', value: 'team' }
              ]
            },
            title: { type: 'text', label: 'Tiêu đề cột' },
            content: { type: 'textarea', label: 'Nội dung văn bản (chỉ dùng cho kiểu Text)' },
            image: { type: 'text', label: 'URL ảnh góc dưới (chỉ dùng cho kiểu Text)' },
            members: {
              type: 'array', label: 'Danh sách thành viên (chỉ dùng cho kiểu Team)',
              getItemSummary: (m) => m.name || 'Thành viên',
              arrayFields: {
                name: { type: 'text', label: 'Họ và tên' },
                role1: { type: 'text', label: 'Chức vụ trong CLB' },
                role2: { type: 'text', label: 'Chức vụ Doanh nghiệp' },
                company: { type: 'text', label: 'Tên Doanh nghiệp' },
                avatar: { type: 'text', label: 'URL Ảnh đại diện' }
              }
            }
          }
        }
      },
      defaultProps: {
        backgroundType: 'color',
        backgroundValue: 'linear-gradient(135deg, #f3f4ff 0%, #e8ecfd 40%, #fdf2f8 100%)',
        columns: [
          {
            type: 'text',
            title: 'VỀ CÂU LẠC BỘ',
            content: 'CLB Doanh nhân Đồng Tháp tại TP.HCM là nơi hội tụ các doanh nghiệp, nhà quản lý và cá nhân khởi nghiệp trên địa bàn tỉnh. Với tinh thần kết nối – đồng hành – sẻ chia, CLB đóng vai trò thúc đẩy giá trị kinh doanh trong bối cảnh hội nhập và chuyển đổi số.',
            image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=500&q=80',
            members: []
          },
          {
            type: 'team',
            title: 'CƠ CẤU TỔ CHỨC',
            content: '',
            image: '',
            members: [
              {
                name: 'Trần Văn Khang',
                role1: 'Ủy viên BCH',
                role2: 'Tổng Giám Đốc',
                company: 'Công ty CP Logistics Đồng Tháp',
                avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
              },
              {
                name: 'Đỗ Thu Trang',
                role1: 'Thủ quỹ CLB',
                role2: 'Giám đốc Tài chính',
                company: 'Công ty TNHH Sơn Việt',
                avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
              },
              {
                name: 'Vũ Hoàng Long',
                role1: 'Ủy viên BCH',
                role2: 'Giám đốc Điều hành',
                company: 'Công ty Công nghệ số Mekong',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
              },
              {
                name: 'Nguyễn Minh Triết',
                role1: 'Phó Chủ Tịch',
                role2: 'Chủ tịch HĐQT',
                company: 'Tập đoàn Đầu tư và Phát triển Sa Giang',
                avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
              },
              {
                name: 'Nguyễn Phạm Thanh',
                role1: 'Phó Chủ Tịch',
                role2: 'Chủ tịch HĐQT',
                company: 'Tập đoàn Đầu tư và Phát triển Sa Giang',
                avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80'
              },
              {
                name: 'Nguyễn Minh Ngọc',
                role1: 'Phó Chủ Tịch',
                role2: 'Chủ tịch HĐQT',
                company: 'Tập đoàn Đầu tư và Phát triển Sa Giang',
                avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80'
              }
            ]
          }
        ]
      },
      render: (props) => <AdminAboutUs {...props} />
    }
  },

  // ─────────────────────────────────────────
  // NHÓM COMPONENT TRONG SIDEBAR
  // ─────────────────────────────────────────
  categoryGroups: [
    { title: 'Cơ bản', components: ['Heading', 'Text', 'Image'] },
    { title: 'Layout', components: ['Section'] },
    { title: 'Nâng cao', components: ['Hero', 'BannerSenHong', 'Departments', 'AboutUs'] }
  ],

  // ─────────────────────────────────────────
  // ROOT (Wrapper bao ngoài toàn trang)
  // ─────────────────────────────────────────
  root: {
    render: ({ children }) => (
      <div style={{ minHeight: '100vh', fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
        {children}
      </div>
    )
  }
};

export default puckConfig;