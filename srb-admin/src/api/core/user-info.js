import request from '@/utils/request'

export default {
  getPageList(page, limit, searchObj) {
    return request({
      url: `/admin/core/userInfo/list/${page}/${limit}`,  //反引号 `` 是命令替换，命令替换是指Shell可以先执行``中的命令，将输出结果暂时保存，在适当的地方输出。语法:`command`
      method: 'get',
      params: searchObj
    })

  },

  lock(id, status) {
    return request({
      url: `/admin/core/userInfo/lock/${id}/${status}`,
      method: 'put'

    })

  },

  getuserLoginRecordTop50(userId) {
    return request({
      url: `/admin/core/userLoginRecord/listTop50/` + userId,
      method: 'get'

    })


  }


}


