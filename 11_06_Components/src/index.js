import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Puck } from '@puckeditor/core';
import puckConfig from './admin-puck-config';
import { savePageData, loadPageData } from './services/puck-storage';

// ─────────────────────────────────────────
// Phiên bản dữ liệu — tăng lên để reset cache cũ
// ─────────────────────────────────────────
const RESET_VERSION = 'v5';

// ─────────────────────────────────────────
// Dữ liệu mặc định: 3 section chính của trang chủ
// ─────────────────────────────────────────
const initialData = {
  content: [
    {
      id: 'BannerSenHong-default',
      type: 'BannerSenHong',
      props: puckConfig.components.BannerSenHong.defaultProps
    },
    {
      id: 'Departments-default',
      type: 'Departments',
      props: puckConfig.components.Departments.defaultProps
    },
    {
      id: 'AboutUs-default',
      type: 'AboutUs',
      props: puckConfig.components.AboutUs.defaultProps
    }
  ],
  root: {}
};

// ─────────────────────────────────────────
// App
// ─────────────────────────────────────────
const App = () => {
  const [data, setData] = useState(() => {
    // Reset cache nếu phiên bản dữ liệu thay đổi
    const savedVersion = localStorage.getItem('puck-data-version');
    if (savedVersion !== RESET_VERSION) {
      localStorage.removeItem('puck-page-data');
      localStorage.setItem('puck-data-version', RESET_VERSION);
    }

    // Tải dữ liệu đã lưu hoặc dùng dữ liệu mặc định
    const saved = loadPageData();
    return saved || initialData;
  });

  const handlePublish = (newData) => {
    const saved = savePageData(newData);
    setData(newData);
    if (saved) {
      alert('✅ Đã lưu bố cục thành công!');
    } else {
      alert('⚠️ Có lỗi khi lưu. Vui lòng thử lại.');
    }
  };

  const handleReset = () => {
    if (window.confirm('⚠️ Bạn có chắc chắn muốn đặt lại bố cục mặc định? Hành động này sẽ xóa toàn bộ thay đổi đã lưu.')) {
      localStorage.removeItem('puck-page-data');
      localStorage.setItem('puck-data-version', RESET_VERSION);
      window.location.reload();
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Thanh công cụ quản trị */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 24px',
        background: '#1e293b',
        color: '#ffffff',
        fontFamily: '"Outfit", "Segoe UI", sans-serif',
        borderBottom: '1px solid #334155',
        zIndex: 100,
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '20px' }}>🌸</span>
          <strong style={{ fontSize: '15px', letterSpacing: '0.5px', fontWeight: '700' }}>
            TRANG QUẢN TRỊ WEBSITE - ĐẤT SEN HỒNG
          </strong>
          <span style={{
            fontSize: '11px',
            background: '#0f172a',
            color: '#94a3b8',
            padding: '3px 10px',
            borderRadius: '999px',
            marginLeft: '8px',
            border: '1px solid #334155'
          }}>
            {data.content.length} sections • {RESET_VERSION}
          </span>
        </div>
        <button
          onClick={handleReset}
          style={{
            background: '#ef4444',
            color: '#ffffff',
            border: 'none',
            borderRadius: '6px',
            padding: '8px 16px',
            fontSize: '13px',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(239, 68, 68, 0.2)',
            transition: 'all 0.2s ease',
            outline: 'none'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#dc2626'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#ef4444'}
        >
          Đặt lại bố cục mặc định 🔄
        </button>
      </div>
      <div style={{ flex: 1 }}>
        <Puck
          config={puckConfig}
          data={data}
          onPublish={handlePublish}
        />
      </div>
    </div>
  );
};

// ─────────────────────────────────────────
// Mount
// ─────────────────────────────────────────
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
