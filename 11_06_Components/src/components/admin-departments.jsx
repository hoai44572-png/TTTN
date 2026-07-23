import React, { useEffect } from 'react';

// ─────────────────────────────────────────────────────────
// Inject CSS once — responsive grid for department cards
// ─────────────────────────────────────────────────────────
const injectDeptStyles = () => {
  if (document.getElementById('dept-styles')) return;
  const style = document.createElement('style');
  style.id = 'dept-styles';
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&display=swap');

    .dept-section {
      padding: 80px 20px;
      text-align: center;
      font-family: "Outfit", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      min-height: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
    }

    .dept-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 30px 28px;
      max-width: 1100px;
      margin: 0 auto;
    }

    .dept-card {
      background: linear-gradient(180deg, #90bafeff 10%, #2175fdff 50%, #4747f5ff 100%);
      color: #ffffff;
      border-radius: 45px 0px 45px 0px;
      padding: 40px 20px;
      width: 280px;
      min-height: 260px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      box-shadow: 0 15px 35px rgba(23, 76, 179, 0.25);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      flex-shrink: 0;
    }

    .dept-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 25px 45px rgba(23, 76, 179, 0.4);
    }

    .dept-card-btn {
      background: rgba(255, 255, 255, 0.12);
      color: #ffffff;
      border: 1px solid rgba(255, 255, 255, 0.45);
      padding: 7px 22px;
      cursor: pointer;
      font-size: 13px;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s ease;
      outline: none;
      font-family: inherit;
    }

    .dept-card-btn:hover {
      background: rgba(255, 255, 255, 0.25);
      border-color: rgba(255, 255, 255, 0.7);
    }

    /* ── RESPONSIVE ── */
    @media (max-width: 1024px) {
      .dept-section {
        padding: 64px 20px;
      }
      .dept-card {
        width: 260px;
      }
    }

    @media (max-width: 768px) {
      .dept-section {
        padding: 56px 16px;
      }
      .dept-grid {
        gap: 24px 20px;
      }
      .dept-card {
        width: calc(50% - 14px);
        min-width: 200px;
        padding: 32px 16px;
        min-height: 230px;
      }
    }

    @media (max-width: 520px) {
      .dept-section {
        padding: 48px 14px;
      }
      .dept-card {
        width: 100%;
        max-width: 320px;
        min-height: 220px;
      }
    }
  `;
  document.head.appendChild(style);
};

const AdminDepartments = ({
  // 1. Cấu hình nền: gradient đa điểm (Trắng → Xanh → Tím nhạt)
  backgroundType = 'gradient',
  backgroundValue = 'linear-gradient(135deg, #ffffffff 0%, #ffe4fdff 20%, #8578ffff 100%)',

  // 2. Cấu hình tiêu đề
  mainTitle = 'CÁC BAN CHUYÊN MÔN',
  subTitle = 'CLB DOANH NHÂN ĐỒNG THÁP TẠI TP. HỒ CHÍ MINH',
  titleColor = '#1e3a8a',

  // 3. Danh sách các Ban (5 ban mặc định)
  items = [
    {
      id: 1,
      title: 'Ban Kinh tế - Đầu tư',
      icon: 'https://cdn-icons-png.flaticon.com/512/3121/3121609.png',
      btnText: 'Xem hoạt động',
      btnRadius: '20px'
    },
    {
      id: 2,
      title: 'Ban Văn hóa - Thể thao',
      icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135783.png',
      btnText: 'Xem hoạt động',
      btnRadius: '20px'
    },
    {
      id: 3,
      title: 'Ban Xã hội - Cộng đồng',
      icon: 'https://cdn-icons-png.flaticon.com/512/1256/1256650.png',
      btnText: 'Xem hoạt động',
      btnRadius: '20px'
    },
    {
      id: 4,
      title: 'Ban Khởi nghiệp',
      icon: 'https://cdn-icons-png.flaticon.com/512/3067/3067416.png',
      btnText: 'Xem hoạt động',
      btnRadius: '20px'
    },
    {
      id: 5,
      title: 'Ban Giao thương quốc tế',
      icon: 'https://cdn-icons-png.flaticon.com/512/2885/2885417.png',
      btnText: 'Xem hoạt động',
      btnRadius: '20px'
    }
  ]
}) => {
  useEffect(() => { injectDeptStyles(); }, []);

  // Logic xử lý cấu hình nền động từ Props
  let bgStyle = {};
  if (backgroundType === 'image') {
    bgStyle = { backgroundImage: `url(${backgroundValue})`, backgroundSize: 'cover', backgroundPosition: 'center' };
  } else if (backgroundValue && (backgroundValue.includes('gradient') || backgroundValue.includes('linear-') || backgroundValue.includes('radial-'))) {
    bgStyle = { background: backgroundValue };
  } else {
    bgStyle = { backgroundColor: backgroundValue };
  }

  return (
    <section className="dept-section" style={{ ...bgStyle }}>
      {/* KHỐI TIÊU ĐỀ */}
      <div style={{ marginBottom: '55px' }}>
        <h2 style={{
          color: titleColor,
          fontSize: '25px',
          fontWeight: '700',
          margin: '0 0 12px 0',
          letterSpacing: '0.5px',
          fontFamily: '"Outfit", "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
        }}>
          {mainTitle}
        </h2>
        <p style={{
          color: titleColor,
          fontSize: '15px',
          fontWeight: '600',
          margin: 0,
          letterSpacing: '0.3px',
          opacity: 0.95,
          fontFamily: '"Outfit", "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
        }}>
          {subTitle}
        </p>
      </div>

      {/* LƯỚI HIỂN THỊ CÁC BAN (3 hàng trên + 2 hàng dưới, tự responsive) */}
      <div className="dept-grid">
        {items.map((item, index) => (
          <div key={item.id || index} className="dept-card">

            {/* Ảnh Icon */}
            <div style={{ height: '65px', display: 'flex', alignItems: 'center' }}>
              <img
                src={item.icon}
                alt={item.title}
                style={{
                  width: '56px',
                  height: '56px',
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)',
                  opacity: 0.9
                }}
              />
            </div>

            {/* Tiêu đề của từng Ban */}
            <h3 style={{
              fontSize: '16px',
              fontWeight: '600',
              lineHeight: '1.4',
              textAlign: 'center',
              margin: '10px 0 20px 0',
              minHeight: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              letterSpacing: '0.2px',
              fontFamily: 'inherit'
            }}>
              {item.title}
            </h3>

            {/* Nút bấm */}
            <button
              className="dept-card-btn"
              style={{ borderRadius: item.btnRadius || '20px' }}
            >
              {item.btnText} <span style={{ fontSize: '13px', lineHeight: '1' }}>→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdminDepartments;