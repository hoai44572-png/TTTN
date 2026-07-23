import React, { useEffect } from 'react';

// ─────────────────────────────────────────────────────────
// Keyframe CSS injected once — không cần Tailwind/CSS file
// ─────────────────────────────────────────────────────────
const injectStyles = () => {
  if (document.getElementById('sen-hong-styles')) return;
  const style = document.createElement('style');
  style.id = 'sen-hong-styles';
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&display=swap');

    @keyframes senFloat {
      0%   { transform: translateY(0px)   rotate(0deg)   opacity: 0; }
      10%  { opacity: 0.6; }
      90%  { opacity: 0.4; }
      100% { transform: translateY(-110vh) rotate(720deg); opacity: 0; }
    }
    @keyframes senFadeIn {
      from { opacity: 0; transform: translateY(32px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes senPulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(250, 204, 21, 0.4); }
      50%       { box-shadow: 0 0 0 12px rgba(250, 204, 21, 0); }
    }
    @keyframes senShimmer {
      0%   { background-position: -200% center; }
      100% { background-position: 200% center; }
    }

    .sen-btn-primary {
      transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1) !important;
    }
    .sen-btn-primary:hover {
      transform: translateY(-3px) scale(1.04) !important;
    }
    .sen-btn-primary:active {
      transform: translateY(0px) scale(0.97) !important;
    }
    .sen-btn-secondary {
      transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1) !important;
    }
    .sen-btn-secondary:hover {
      transform: translateY(-3px) scale(1.04) !important;
      background: rgba(255,255,255,0.25) !important;
    }
    .sen-stat-item:hover .sen-stat-number {
      animation: senPulse 1s ease;
    }
    .sen-content-box {
      animation: senFadeIn 0.8s ease forwards;
    }
    .sen-image-box {
      animation: senFadeIn 0.9s 0.15s ease both;
    }

    /* ── RESPONSIVE: Banner Sen Hồng ── */
    .sen-section {
      padding: 80px 60px !important;
    }
    @media (max-width: 1024px) {
      .sen-section {
        padding: 64px 32px !important;
      }
      .sen-content-box {
        max-width: 100% !important;
        padding: 40px 32px !important;
      }
    }
    @media (max-width: 768px) {
      .sen-section {
        padding: 48px 20px !important;
        justify-content: center !important;
      }
      .sen-content-box {
        padding: 32px 24px !important;
      }
      .sen-hero-title {
        font-size: 38px !important;
      }
    }
    @media (max-width: 480px) {
      .sen-section {
        padding: 36px 16px !important;
      }
      .sen-content-box {
        padding: 24px 18px !important;
        border-radius: 24px 0px 24px 0px !important;
      }
      .sen-hero-title {
        font-size: 30px !important;
      }
    }
  `;
  document.head.appendChild(style);
};

// ─────────────────────────────────────────────────────────
// Hoa Sen nổi làm decoration
// ─────────────────────────────────────────────────────────
const LotusParticle = ({ style: extraStyle }) => (
  <div style={{
    position: 'absolute',
    fontSize: '24px',
    userSelect: 'none',
    pointerEvents: 'none',
    ...extraStyle
  }}>
    🌸
  </div>
);

// ─────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────
const AdminBannerSenHong = ({
  // --- NỀN ---
  backgroundType = 'color',
  backgroundValue = 'linear-gradient(135deg, #1e40af 0%, #3b82f6 40%, #a78bfa 75%, #f472b6 100%)',

  // --- VỊ TRÍ ---
  alignment = 'flex-start',

  // --- BO GÓC KHỐI ---
  boxRadius = '40px 0px 40px 0px',

  // --- BADGE ---
  showBadge = true,
  badgeText = 'CLB Doanh nhân Đồng Tháp',
  badgeBgColor = 'rgba(250, 204, 21, 0.18)',
  badgeTextColor = '#facc15',

  // --- CHỮ ---
  topText = 'LAN TỎA GIÁ TRỊ ĐẤT',
  topTextColor = '#e2e8f0',
  title = 'Sen Hồng',
  titleColor = '#facc15',
  titleSize = '56px',
  titleGradient = '',

  // --- MÔ TẢ ---
  description = 'CLB Doanh nhân Đồng Tháp tại TPHCM quy tụ những người con quê hương Đất Sen Hồng. Với tinh thần Hợp tác - Đổi mới - Phát triển, CLB đóng vai trò là cầu nối chiến lược, hợp tác, thúc đẩy giá trị kinh doanh và lan tỏa sẻ chia nghĩa tình quê hương.',
  descColor = '#ffffff',
  descSize = '14px',

  // --- THỐNG KÊ ---
  showStats = true,
  stats = [
    { number: '500+', label: 'Doanh nhân' },
    { number: '10+',  label: 'Năm hoạt động' },
    { number: '50+',  label: 'Sự kiện/năm' }
  ],

  // --- NÚT CHÍNH ---
  buttonText = 'Tham gia cộng đồng',
  buttonUrl = '#',
  buttonBgColor = '',
  buttonBg = 'linear-gradient(to right, #00cbfe 0%, #0060ff 100%)',
  buttonTextColor = '#ffffff',
  buttonRadius = '999px',
  buttonHoverBg = 'linear-gradient(to right, #0060ff 0%, #00cbfe 100%)',
  buttonHoverTextColor = '#facc15',

  // --- NÚT PHỤ ---
  showSecondButton = true,
  button2Text = 'Xem thêm',
  button2Url = '#about',
  button2TextColor = '#ffffff',
  button2Radius = '999px',

  // --- ẢNH / LOGO BÊN PHẢI ---
  showImage = false,
  imageUrl = '',
  imageRadius = '24px',

  // --- TRANG TRÍ ---
  showDecorations = true,
}) => {
  useEffect(() => { injectStyles(); }, []);

  // Xử lý nền động
  let bgStyle = {};
  if (backgroundType === 'image') {
    bgStyle = { backgroundImage: `url(${backgroundValue})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' };
  } else if (backgroundValue && (backgroundValue.includes('gradient') || backgroundValue.includes('linear-') || backgroundValue.includes('radial-'))) {
    bgStyle = { background: backgroundValue };
  } else {
    bgStyle = { backgroundColor: backgroundValue };
  }

  // Gradient text cho tiêu đề
  const titleStyle = titleGradient
    ? {
        background: titleGradient,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        backgroundSize: '200% auto',
        animation: 'senShimmer 3s linear infinite',
        display: 'inline-block'
      }
    : { color: titleColor };

  // Hoa sen nổi (các vị trí cố định cho stable render)
  const petals = showDecorations ? [
    { bottom: '8%',  left: '5%',   animationDuration: '12s', animationDelay: '0s',   fontSize: '20px', opacity: 0.35 },
    { bottom: '15%', left: '18%',  animationDuration: '16s', animationDelay: '2s',   fontSize: '16px', opacity: 0.25 },
    { bottom: '5%',  right: '10%', animationDuration: '14s', animationDelay: '1s',   fontSize: '28px', opacity: 0.30 },
    { bottom: '20%', right: '25%', animationDuration: '18s', animationDelay: '3s',   fontSize: '14px', opacity: 0.20 },
    { bottom: '10%', left: '40%',  animationDuration: '20s', animationDelay: '0.5s', fontSize: '18px', opacity: 0.25 },
    { bottom: '3%',  left: '60%',  animationDuration: '15s', animationDelay: '4s',   fontSize: '22px', opacity: 0.30 },
    { bottom: '25%', right: '5%',  animationDuration: '13s', animationDelay: '1.5s', fontSize: '12px', opacity: 0.20 },
  ] : [];

  return (
    <section className="sen-section" style={{
      ...bgStyle,
      position: 'relative',
      padding: '80px 60px',
      minHeight: '520px',
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box',
      fontFamily: '"Outfit", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      overflow: 'hidden'
    }}>

      {/* ── FLOATING LOTUS DECORATIONS ── */}
      {petals.map((p, i) => (
        <LotusParticle key={i} style={{
          bottom: p.bottom,
          left: p.left,
          right: p.right,
          fontSize: p.fontSize,
          opacity: p.opacity,
          animation: `senFloat ${p.animationDuration} ${p.animationDelay} linear infinite`
        }} />
      ))}

      {/* ── GRADIENT OVERLAY (làm sâu nền) ── */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 20% 50%, rgba(255,255,255,0.06) 0%, transparent 60%)',
        pointerEvents: 'none'
      }} />

      {/* ── CONTENT WRAPPER ── */}
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: alignment,
        gap: '60px',
        position: 'relative',
        zIndex: 1,
        flexWrap: 'wrap'
      }}>

        {/* ── MAIN CONTENT BOX ── */}
        <div className="sen-content-box" style={{
          background: 'rgba(255, 255, 255, 0.10)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderRadius: boxRadius,
          padding: '52px 48px',
          maxWidth: '500px',
          width: '100%',
          boxShadow: '0 25px 60px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.3)',
          border: '1px solid rgba(255,255,255,0.22)',
          boxSizing: 'border-box',
          textAlign: 'left'
        }}>

          {/* Badge */}
          {showBadge && badgeText && (
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: badgeBgColor,
              color: badgeTextColor,
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              padding: '5px 14px',
              borderRadius: '999px',
              border: `1px solid ${badgeTextColor}33`,
              marginBottom: '16px'
            }}>
              🌸 {badgeText}
            </div>
          )}

          {/* Top Text */}
          {topText && (
            <p style={{
              color: topTextColor,
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              margin: '0 0 10px 0',
              opacity: 0.8
            }}>
              {topText}
            </p>
          )}

          {/* Title */}
          <h1 className="sen-hero-title" style={{
            fontSize: titleSize,
            fontWeight: '800',
            margin: '0 0 22px 0',
            lineHeight: '1.05',
            letterSpacing: '-1px',
            ...titleStyle
          }}>
            {title}
          </h1>

          {/* Description */}
          <p style={{
            color: descColor,
            fontSize: descSize,
            fontWeight: '400',
            lineHeight: '1.75',
            margin: '0 0 32px 0',
            opacity: 0.92,
            textAlign: 'justify'
          }}>
            {description}
          </p>

          {/* ── STATS ROW ── */}
          {showStats && stats && stats.length > 0 && (
            <div style={{
              display: 'flex',
              gap: '0',
              marginBottom: '36px',
              borderTop: '1px solid rgba(255,255,255,0.15)',
              borderBottom: '1px solid rgba(255,255,255,0.15)',
              padding: '18px 0'
            }}>
              {stats.map((s, i) => (
                <div key={i} className="sen-stat-item" style={{
                  flex: 1,
                  textAlign: 'center',
                  borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.15)' : 'none',
                  padding: '0 12px'
                }}>
                  <div className="sen-stat-number" style={{
                    color: titleGradient ? '#facc15' : titleColor,
                    fontSize: '26px',
                    fontWeight: '800',
                    lineHeight: 1,
                    marginBottom: '4px',
                    letterSpacing: '-0.5px'
                  }}>
                    {s.number}
                  </div>
                  <div style={{
                    color: descColor,
                    fontSize: '11px',
                    fontWeight: '500',
                    opacity: 0.75,
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase'
                  }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── BUTTON ROW ── */}
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>

            {/* Nút chính */}
            <a href={buttonUrl || '#'} style={{ textDecoration: 'none' }}>
              <button
                className="sen-btn-primary"
                style={{
                  background: buttonBgColor || buttonBg,
                  color: buttonTextColor,
                  borderRadius: buttonRadius,
                  padding: '13px 30px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '700',
                  fontSize: '14px',
                  fontFamily: 'inherit',
                  letterSpacing: '0.3px',
                  boxShadow: '0 8px 24px rgba(0,96,255,0.35)',
                  outline: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  if (buttonBgColor) {
                    e.currentTarget.style.filter = 'brightness(1.12)';
                  } else {
                    e.currentTarget.style.background = buttonHoverBg;
                  }
                  e.currentTarget.style.color = buttonHoverTextColor;
                  e.currentTarget.style.boxShadow = '0 14px 32px rgba(0,96,255,0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'none';
                  e.currentTarget.style.background = buttonBgColor || buttonBg;
                  e.currentTarget.style.color = buttonTextColor;
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,96,255,0.35)';
                }}
              >
                {buttonText} <span style={{ fontSize: '16px' }}>→</span>
              </button>
            </a>

            {/* Nút phụ */}
            {showSecondButton && button2Text && (
              <a href={button2Url || '#'} style={{ textDecoration: 'none' }}>
                <button
                  className="sen-btn-secondary"
                  style={{
                    background: 'rgba(255,255,255,0.12)',
                    color: button2TextColor,
                    borderRadius: button2Radius,
                    padding: '13px 26px',
                    border: '1px solid rgba(255,255,255,0.35)',
                    cursor: 'pointer',
                    fontWeight: '600',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                    letterSpacing: '0.3px',
                    outline: 'none',
                    backdropFilter: 'blur(8px)'
                  }}
                >
                  {button2Text}
                </button>
              </a>
            )}
          </div>
        </div>

        {/* ── IMAGE / LOGO BÊN PHẢI ── */}
        {showImage && imageUrl && (
          <div className="sen-image-box" style={{
            flex: '1 1 300px',
            maxWidth: '420px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img
              src={imageUrl}
              alt="Banner illustration"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: imageRadius,
                boxShadow: '0 30px 80px rgba(0,0,0,0.25)',
                border: '2px solid rgba(255,255,255,0.2)',
                objectFit: 'cover',
                transition: 'transform 0.5s ease, box-shadow 0.5s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.03) rotate(1deg)';
                e.currentTarget.style.boxShadow = '0 40px 100px rgba(0,0,0,0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                e.currentTarget.style.boxShadow = '0 30px 80px rgba(0,0,0,0.25)';
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminBannerSenHong;