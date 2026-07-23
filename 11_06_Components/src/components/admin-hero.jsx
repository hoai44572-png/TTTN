import React, { useEffect } from 'react';

// ─────────────────────────────────────────────────────────
// Inject keyframes một lần duy nhất
// ─────────────────────────────────────────────────────────
const injectHeroStyles = () => {
  if (document.getElementById('admin-hero-styles')) return;
  const style = document.createElement('style');
  style.id = 'admin-hero-styles';
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&display=swap');

    @keyframes heroFadeUp {
      from { opacity: 0; transform: translateY(28px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes heroShimmer {
      0%   { background-position: -200% center; }
      100% { background-position:  200% center; }
    }

    .hero-btn { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important; outline: none !important; }
    .hero-btn:hover  { transform: translateY(-3px) scale(1.05) !important; }
    .hero-btn:active { transform: translateY(0px) scale(0.96) !important; }

    .hero-btn-primary {
      background: linear-gradient(135deg, #3b82f6, #1d4ed8) !important;
      color: #ffffff !important;
      border: none !important;
      box-shadow: 0 8px 24px rgba(59,130,246,0.40) !important;
    }
    .hero-btn-primary:hover {
      background: linear-gradient(135deg, #2563eb, #1e40af) !important;
      box-shadow: 0 14px 32px rgba(59,130,246,0.55) !important;
    }

    .hero-btn-secondary {
      background: linear-gradient(135deg, #7c3aed, #a855f7) !important;
      color: #ffffff !important;
      border: none !important;
      box-shadow: 0 8px 24px rgba(124,58,237,0.40) !important;
    }
    .hero-btn-secondary:hover {
      background: linear-gradient(135deg, #6d28d9, #9333ea) !important;
      box-shadow: 0 14px 32px rgba(124,58,237,0.55) !important;
    }

    .hero-btn-outline {
      background: transparent !important;
      color: #ffffff !important;
      border: 2px solid rgba(255,255,255,0.75) !important;
      box-shadow: 0 4px 16px rgba(255,255,255,0.10) !important;
    }
    .hero-btn-outline:hover {
      background: rgba(255,255,255,0.18) !important;
      border-color: #ffffff !important;
      box-shadow: 0 10px 28px rgba(255,255,255,0.25) !important;
      color: #ffffff !important;
    }
  `;
  document.head.appendChild(style);
};

// ─────────────────────────────────────────────────────────
// AdminHero Component
// ─────────────────────────────────────────────────────────
const AdminHero = ({
  title    = 'Chào mừng đến với website',
  subtitle = 'Chúng tôi cung cấp những sản phẩm và dịch vụ tốt nhất',
  buttons  = [],
  background = {},
  layout   = {}
}) => {
  useEffect(() => { injectHeroStyles(); }, []);

  // ── Nền ──
  const getBackgroundStyle = () => {
    const bg = background || {};
    if (bg.type === 'gradient') {
      return {
        background: `linear-gradient(${bg.direction || 'to bottom right'}, ${bg.fromColor || '#667eea'}, ${bg.toColor || '#764ba2'})`
      };
    }
    if (bg.type === 'image' && bg.bg_image) {
      return {
        backgroundImage: `url('${bg.bg_image}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      };
    }
    return { backgroundColor: bg.color || '#667eea' };
  };

  // ── Căn lề nội dung ──
  const align = layout.align || 'center';
  const textAlign = align;
  const justifyContent =
    align === 'left'  ? 'flex-start' :
    align === 'right' ? 'flex-end'   : 'center';
  const alignItems =
    align === 'left'  ? 'flex-start' :
    align === 'right' ? 'flex-end'   : 'center';

  // ── Class nút theo style ──
  const getBtnClass = (style) => {
    switch (style) {
      case 'primary':   return 'hero-btn hero-btn-primary';
      case 'secondary': return 'hero-btn hero-btn-secondary';
      case 'outline':   return 'hero-btn hero-btn-outline';
      default:          return 'hero-btn hero-btn-primary';
    }
  };

  return (
    <section
      style={{
        ...getBackgroundStyle(),
        position: 'relative',
        padding: '120px 40px',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        boxSizing: 'border-box',
        fontFamily: '"Outfit", "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
      }}
    >
      {/* Subtle radial overlay để tăng depth */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.10) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div style={{
        position: 'relative',
        zIndex: 1,
        width: '100%',
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems,
        textAlign,
        animation: 'heroFadeUp 0.75s ease both'
      }}>
        {/* Tiêu đề */}
        {title && (
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            fontWeight: '800',
            color: '#ffffff',
            margin: '0 0 20px 0',
            lineHeight: '1.15',
            letterSpacing: '-1px',
            maxWidth: '900px',
            textShadow: '0 2px 20px rgba(0,0,0,0.15)'
          }}>
            {title}
          </h1>
        )}

        {/* Subtitle */}
        {subtitle && (
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: 'rgba(255,255,255,0.90)',
            margin: '0 0 40px 0',
            lineHeight: '1.7',
            maxWidth: '700px',
            fontWeight: '400'
          }}>
            {subtitle}
          </p>
        )}

        {/* Danh sách nút */}
        {buttons && buttons.length > 0 && (
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent
          }}>
            {buttons.map((btn, idx) => (
              <a key={idx} href={btn.url || '#'} style={{ textDecoration: 'none' }}>
                <button
                  className={getBtnClass(btn.style || 'primary')}
                  style={{
                    padding: '14px 32px',
                    borderRadius: '10px',
                    fontSize: '15px',
                    fontWeight: '700',
                    fontFamily: 'inherit',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    letterSpacing: '0.3px',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {btn.text}
                  {btn.style === 'outline' ? (
                    <span style={{ fontSize: '16px', opacity: 0.85 }}>↗</span>
                  ) : (
                    <span style={{ fontSize: '16px' }}>→</span>
                  )}
                </button>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminHero;
