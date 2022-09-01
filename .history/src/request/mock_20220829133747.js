import Mock from 'mockjs'
import homeApi from './home.js'
import userApi from './user'


Mock.mock('/home/getData',homeApi.getStatisticalData )

Mock.mock('/user/add',userApi.createUser)