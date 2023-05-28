import request from './request';

const ENDPOINT = 'api/book';

const getAll = async (params) => {
   const url = `${ENDPOINT}/list`;
   return request.get(url, { params }).then((res) => {
     return res.data.detail;
   });
 };

const bookService = { getAll };

export default bookService;
