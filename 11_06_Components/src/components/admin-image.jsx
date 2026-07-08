import React from 'react';

// AdminImage — render ảnh có URL, width, height, align và bo góc, không phụ thuộc Tailwind.
const AdminImage = ({
  src = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  alt = 'Ảnh minh họa',
  width = '100%',
  height = 'auto',
  borderRadius = '0',
  align = 'center'
}) => {
  const marginStyle =
    align === 'center' ? { marginLeft: 'auto', marginRight: 'auto' } :
    align === 'right'  ? { marginLeft: 'auto', marginRight: '0' }   :
                         { marginLeft: '0',    marginRight: 'auto' };

  return (
    <div style={{ padding: '16px', maxWidth: width, ...marginStyle }}>
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: height,
          borderRadius: borderRadius,
          objectFit: 'cover',
          display: 'block',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.02)';
          e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
        }}
      />
    </div>
  );
};

export default AdminImage;
