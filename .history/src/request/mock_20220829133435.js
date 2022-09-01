import Mock from 'mockjs'
import homeApi from './home.js'
import userApi from './user'


Mock.mock('/home/getData',homeApi.getStatisticalData )

Mock.mock(/api\/user\/add/, 'post',userApi.createUser)