import React from 'react';

// Section component — container có background, padding, và children (slot).
const containerMap = { sm: '640px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1536px' };

const AdminSection = ({ container = 'lg', background = {}, padding_x = 4, padding_y = 4, children }) => {
  const bgStyle = {};
  if (background.type === 'color') bgStyle.backgroundColor = background.color || 'transparent';
  if (background.type === 'image' && background.bg_image) {
    bgStyle.backgroundImage = `url(${background.bg_image})`;
    bgStyle.backgroundSize = 'cover';
    bgStyle.backgroundPosition = 'center';
  }
  if (background.type === 'gradient') {
    bgStyle.background = `linear-gradient(${background.direction || 'to right'}, ${background.fromColor || '#fff'}, ${background.toColor || '#000'})`;
  }
  
  const opacity = background.opacity !== undefined ? background.opacity : 1;

  return (
    <section style={{ position: 'relative', padding: `${(padding_y || 0) * 4}px ${(padding_x || 0) * 4}px`, overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        ...bgStyle,
        opacity: opacity,
        zIndex: 0,
        pointerEvents: 'none'
      }} />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: containerMap[container] || '1280px', margin: '0 auto' }}>
        {children}
      </div>
    </section>
  );
};

export default AdminSection;
