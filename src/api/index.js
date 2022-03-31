
import request from './config'


const api = {
  getHome() {
    return request.get('/api-geek/index')
  },
  addAudit(data) {
    return request.post('/api-geek/audit/add', data)
  },
  getAuditList(status = 0) {
    return request.get(`/api-geek/audit/list?status=${status}`)
  },
  delAuditNav(data) {
    return request.post('/api-geek/audit/del', data)
  },
  fastRejectAudit() {
    return request.post('/api-geek/audit/fastReject')
  },
  addNav(data) {
    return request.post('/api-geek/nav/add', data)
  },
  editNav(data) {
    return request.post('/api-geek/nav/edit', data)
  },
  delNav(id) {
    return request.post('/api-geek/nav/del', {
      id,
    })
  },
  findNav(id) {
    return request.post('/api-geek/nav/find', {
      id
    })
  },
  login(data) {
    return request.post('/api-geek/login', data)
  },

  getCategoryList() {
    return request.get('/api-geek/category/list')
  },
  addCategory(data) {
    return request.post('/api-geek/category/add', data)
  },
  delCategory(id) {
    return request.post('/api-geek/category/del', { id })
  },
  editCategory(data) {
    return request.post('/api-geek/category/edit', data)
  },
}

export default api