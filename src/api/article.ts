import $http from '@/utils/request';

// 获取文章详情
const articleDetails = (params: any) => $http.get(`/api/article/article-details`, {params});
const articleList = (params: any) => $http.get(`/api/article/article-List`, {params});
const articleListByCategory = (params: any) => $http.get(`/api/article/article-list-by-category`, {params});
const articleListByKeywords = (params: any) => $http.get(`/api/article/article-list-by-keywords`, {params});
const articleListByRecommend = () => $http.get(`/api/article/article-list-by-recommend`);
const articleLike = (params: any) => $http.get(`/api/article/article-like`, {params});
const articleDislike = (params: any) => $http.get(`/api/article/article-dislike`, {params});
const articleReads = (params: any) => $http.get(`/api/article/article-reads`, {params});
const articleStatistics = () => $http.get(`/api/article/article-statistics` );

export {
  articleDetails,
  articleList,
  articleListByCategory,
  articleListByKeywords,
  articleListByRecommend,
  articleLike,
  articleDislike,
  articleReads,
  articleStatistics,
};
