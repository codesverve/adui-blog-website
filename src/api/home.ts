import $http from '@/utils/request';

// 获取分类列表
const categoryList = () => $http.get(`/api/category/category-list`);

export {
  categoryList,
};
