import Mock from 'mockjs'
import homeApi from './home.js'
import userApi from './user.js'


Mock.mock('/home/getData',homeApi.getStatisticalData )

Mock.mock(/user\/add/, 'post',userApi.createUser)
Mock.mock(/user\/edit/, 'post',userApi.updateUser)
Mock.mock(/user\/getUser/, 'get',userApi.getUserList)
Mock.mock(/user\/del/, 'get',userApi.deleteUser)
 




