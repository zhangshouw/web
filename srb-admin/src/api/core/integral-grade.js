// 引入axios的初始化模块

import request from '@/utils/request'

export default {

  // 定义模块成员
  // 成员方法  获取积分等级列表
  list() {
    return request({
      // 调用axios的初始化模块，发送远程ajax请求
      url: '/admin/core/integralGrade/list',
      method: 'get'
    })
  },

  removeById(id) {
    return request({
      // 调用axios的初始化模块，发送远程ajax请求
      url: '/admin/core/integralGrade/remove/' + id,
      method: 'delete'
    })
  },

  save(integralGrade) {
    return request({
      url: '/admin/core/integralGrade/save',
      method: 'post',
      data: integralGrade
    })
  },

  getById(id) {
    return request({
      url: '/admin/core/integralGrade/getById/' + id,
      method: 'get'
    })
  },

  update(integralGrade) {
    return request({
      url: '/admin/core/integralGrade/update',
      method: 'post',
      data: integralGrade
    })
  }

}
