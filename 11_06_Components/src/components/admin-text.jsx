import React from 'react';

// AdminText — render đoạn văn bản với inline style, không phụ thuộc Tailwind.
const AdminText = ({ content = 'Nhập văn bản ở đây...', align = 'left' }) => {
  return (
    <p
      style={{
        textAlign: align,
        color: '#334155',
        fontSize: '1rem',
        lineHeight: '1.8',
        fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        whiteSpace: 'pre-wrap',
        margin: 0,
        padding: 0
      }}
    >
      {content}
    </p>
  );
};

export default AdminText;
