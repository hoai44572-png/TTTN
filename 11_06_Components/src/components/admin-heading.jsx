import React from 'react';

// AdminHeading — render thẻ h1-h6 với đầy đủ inline style, không phụ thuộc Tailwind.
const AdminHeading = ({ content = 'Tiêu đề', level = 2, align = 'left' }) => {
  const Tag = `h${Math.min(Math.max(Number(level), 1), 6)}`;

  const sizeMap = {
    1: { fontSize: '2.5rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '24px' },
    2: { fontSize: '2rem',   fontWeight: '700', lineHeight: '1.3', marginBottom: '20px' },
    3: { fontSize: '1.6rem', fontWeight: '700', lineHeight: '1.3', marginBottom: '16px' },
    4: { fontSize: '1.3rem', fontWeight: '600', lineHeight: '1.4', marginBottom: '14px' },
    5: { fontSize: '1.1rem', fontWeight: '600', lineHeight: '1.4', marginBottom: '12px' },
    6: { fontSize: '1rem',   fontWeight: '500', lineHeight: '1.5', marginBottom: '10px' },
  };

  return (
    <Tag
      style={{
        textAlign: align,
        color: '#0f172a',
        margin: 0,
        padding: 0,
        fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        letterSpacing: level <= 2 ? '0.3px' : '0',
        ...sizeMap[level] || sizeMap[2]
      }}
    >
      {content}
    </Tag>
  );
};

export default AdminHeading;
