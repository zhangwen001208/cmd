import {Mock} from 'mockjs'
import homeApi from './home.js'
import userApi from './user.js'


Mock.mock('/home/getData',homeApi.getStatisticalData )

Mock.mock(/user\/add/, 'post',userApi.createUser)
Mock.mock(/user\/add/, 'post',userApi.updateUser)