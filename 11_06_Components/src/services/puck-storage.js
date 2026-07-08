/**
 * puck-storage.js
 * Service quản lý lưu trữ và đọc dữ liệu trang Puck qua localStorage.
 * Tách logic I/O khỏi component React để dễ bảo trì và mở rộng.
 */

const STORAGE_KEY = 'puck-page-data';

/**
 * Lưu dữ liệu trang vào localStorage.
 * @param {Object} data - Dữ liệu Puck (content, root, zones...)
 */
export const savePageData = (data) => {
  try {
    const serialized = JSON.stringify(data);
    localStorage.setItem(STORAGE_KEY, serialized);
    return true;
  } catch (err) {
    console.error('[puck-storage] Lỗi khi lưu dữ liệu:', err);
    return false;
  }
};

/**
 * Đọc dữ liệu trang từ localStorage.
 * @returns {Object|null} Dữ liệu Puck đã lưu, hoặc null nếu chưa có.
 */
export const loadPageData = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (err) {
    console.error('[puck-storage] Lỗi khi đọc dữ liệu:', err);
    return null;
  }
};

/**
 * Xóa dữ liệu trang đã lưu khỏi localStorage.
 */
export const clearPageData = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (err) {
    console.error('[puck-storage] Lỗi khi xóa dữ liệu:', err);
    return false;
  }
};

/**
 * Kiểm tra xem có dữ liệu đã lưu không.
 * @returns {boolean}
 */
export const hasPageData = () => {
  return Boolean(localStorage.getItem(STORAGE_KEY));
};
