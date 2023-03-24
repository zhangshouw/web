import request from '@/utils/request'

export default {
	listByParentId(parentId) {
		return request({
			//调用axios的初始化模块，发送远程ajax请求
			url: '/admin/core/dict/listByParentId/' + parentId,
			method: 'get'
		})



	}




}