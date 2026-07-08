import React, { useState } from 'react';

const AdminAboutUs = ({
  // 1. Cấu hình nền lớn phía sau (Hỗ trợ 'color', 'image', hoặc 'gradient' theo dải màu ảnh mẫu)
  backgroundType = 'gradient',
  backgroundValue = 'linear-gradient(135deg, #f3f4ff 0%, #e8ecfd 40%, #fdf2f8 100%)',
  
  columns = [
    {
      id: 'col1',
      type: 'text', 
      title: 'VỀ CÂU LẠC BỘ',
      content: 'CLB Doanh nhân Đồng Tháp tại TP.HCM là nơi hội tụ các doanh nghiệp, nhà quản lý và cá nhân khởi nghiệp trên địa bàn tỉnh. Với tinh thần kết nối – đồng hành – sẻ chia, CLB đóng vai trò thúc đẩy giá trị kinh doanh trong bối cảnh hội nhập và chuyển đổi số.',
      // Ảnh minh họa góc dưới bên trái của cột 1
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=500&q=80' 
    },
    {
      id: 'col2',
      type: 'team', 
      title: 'CƠ CẤU TỔ CHỨC',
      // Phân trang: Mỗi trang hiển thị tối đa 3 thành viên như trong ảnh mẫu
      members: [ 
        { id: 1, name: 'Trần Văn Khang', role1: 'Ủy viên BCH', role2: 'Tổng Giám Đốc', company: 'Công ty CP Logistics Đồng Tháp', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80' },
        { id: 2, name: 'Đỗ Thu Trang', role1: 'Thủ quỹ CLB', role2: 'Giám đốc Tài chính', company: 'Công ty TNHH Sơn Việt', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80' },
        { id: 3, name: 'Vũ Hoàng Long', role1: 'Ủy viên BCH', role2: 'Giám đốc Điều hành', company: 'Công ty Công nghệ số Mekong', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' },
        { id: 4, name: 'Nguyễn Minh Triết', role1: 'Phó Chủ Tịch', role2: 'Chủ tịch HĐQT', company: 'Tập đoàn Đầu tư và Phát triển Sa Giang', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' },
        { id: 5, name: 'Nguyễn Phạm Thanh', role1: 'Phó Chủ Tịch', role2: 'Chủ tịch HĐQT', company: 'Tập đoàn Đầu tư và Phát triển Sa Giang', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80' },
        
        { id: 6, name: 'Nguyễn Minh Ngọc', role1: 'Phó Chủ Tịch', role2: 'Chủ tịch HĐQT', company: 'Tập đoàn Đầu tư và Phát triển Sa Giang', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80'} 
  
      ]
    }
  ]
}) => {
  // Xác định dải màu nền
  let bgStyle = {};
  if (backgroundType === 'image') {
    bgStyle = { backgroundImage: `url(${backgroundValue})`, backgroundSize: 'cover', backgroundPosition: 'center' };
  } else if (backgroundValue && (backgroundValue.includes('gradient') || backgroundValue.includes('linear-') || backgroundValue.includes('radial-'))) {
    bgStyle = { background: backgroundValue };
  } else {
    bgStyle = { backgroundColor: backgroundValue };
  }

  return (
    <section style={{ 
      ...bgStyle, 
      padding: '80px 40px', 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    }}>
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '40px', 
        maxWidth: '1280px', 
        width: '100%',
        margin: '0 auto',
        justifyContent: 'center'
      }}>
        
        {columns.map((col, index) => (
          <div key={col.id || index} style={{ 
            flex: '1 1 500px', 
            maxWidth: '580px',
            backgroundColor: '#ffffff', 
            borderRadius: '24px', 
            padding: '45px 40px',
            boxShadow: '0 15px 40px rgba(30, 58, 138, 0.06)',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            overflow: 'hidden',
            height: '590px', // Khóa cứng chiều cao của 2 block để không bao giờ bị lệch hay co giãn
            boxSizing: 'border-box'
          }}>
            {/* Tiêu đề mục */}
            <h2 style={{ 
              fontSize: '22px', 
              fontWeight: '700', 
              color: '#0f172a', 
              marginBottom: '32px', 
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              display: 'inline-block'
            }}>
              {col.title}
            </h2>

            {/* DẠNG 1: ĐOẠN VĂN GIỚI THIỆU (TEXT COL) */}
            {col.type === 'text' && (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <p style={{ 
                  color: '#475569', 
                  lineHeight: '1.8', 
                  fontSize: '15px',
                  textAlign: 'justify',
                  margin: '0 0 20px 0',
                  fontWeight: '400'
                }}>
                  {col.content}
                </p>
                {col.image && (
                  <div style={{ 
                    position: 'absolute', 
                    bottom: 0, 
                    left: 0, 
                    width: '55%', 
                    height: '240px',
                    opacity: 0.85,
                    pointerEvents: 'none'
                  }}>
                    <img 
                      src={col.image} 
                      alt="illustration" 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        maskImage: 'linear-gradient(to top right, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)',
                        WebkitMaskImage: 'linear-gradient(to top right, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)'
                      }} 
                    />
                  </div>
                )}
              </div>
            )}

            {/* DẠNG 2: DANH SÁCH NHÂN SỰ + SLIDER (TEAM COL) */}
            {col.type === 'team' && (
              <TeamSlider members={col.members} />
            )}

          </div>
        ))}

      </div>
    </section>
  );
};

// Component con được cô lập State để xử lý phân trang độc lập
const TeamSlider = ({ members }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalMembers = members?.length || 0;
  const totalPages = Math.ceil(totalMembers / itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  if (totalPages === 0) return null;

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '350px' }}>
        {members
          ?.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
          ?.map((member, mIdx) => (
            <div key={member.id || mIdx} style={{ 
              display: 'flex', 
              gap: '20px', 
              alignItems: 'center',
              backgroundColor: '#f8fafc',
              padding: '14px 20px',
              borderRadius: '16px',
              border: '1px solid #f1f5f9',
              height: '102px',
              boxSizing: 'border-box',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f1f5f9';
              e.currentTarget.style.transform = 'translateX(6px)';
              e.currentTarget.style.borderColor = '#e2e8f0';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f8fafc';
              e.currentTarget.style.transform = 'translateX(0)';
              e.currentTarget.style.borderColor = '#f1f5f9';
            }}
            >
              <div style={{ overflow: 'hidden', borderRadius: '50%', flexShrink: 0 }}>
                <img 
                  src={member.avatar} 
                  alt={member.name} 
                  style={{ 
                    width: '68px', 
                    height: '68px', 
                    objectFit: 'cover',
                    border: '2px solid #ffffff',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
                    transition: 'transform 0.3s ease'
                  }} 
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.15)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              
              <div style={{ 
                fontSize: '13.5px', 
                color: '#475569', 
                lineHeight: '1.5', 
                flex: 1,
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis'
              }}>
                <div style={{ color: '#0f172a', fontSize: '15px', fontWeight: '700', marginBottom: '2px' }}>
                  Họ tên: {member.name}
                </div>
                <div style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  <strong style={{ color: '#334155', fontWeight: '600' }}>Chức vụ CLB:</strong> {member.role1}
                </div>
                <div style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  <strong style={{ color: '#334155', fontWeight: '600' }}>Chức vụ Doanh nghiệp:</strong> {member.role2}
                </div>
                <div style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  <strong style={{ color: '#334155', fontWeight: '600' }}>Doanh nghiệp:</strong> {member.company}
                </div>
              </div>
            </div>
          ))}
      </div>

      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: '16px',
        marginTop: '20px'
      }}>
        <button 
          onClick={handlePrev}
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            border: 'none',
            backgroundColor: '#e0f2fe',
            color: '#0284c7',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
            outline: 'none'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#bae6fd'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#e0f2fe'}
        >
          ‹
        </button>

        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {Array.from({ length: totalPages }).map((_, dotIdx) => (
            <div 
              key={dotIdx}
              style={{
                width: dotIdx === currentPage ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: dotIdx === currentPage ? '#0284c7' : '#cbd5e1',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>

        <button 
          onClick={handleNext}
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            border: 'none',
            backgroundColor: '#e0f2fe',
            color: '#0284c7',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
            outline: 'none'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#bae6fd'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#e0f2fe'}
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default AdminAboutUs;