import Mock from 'mockjs'
import homeApi from './home.js'


Mock.mock('/home/getData',homeApi.getStatisticalData )
