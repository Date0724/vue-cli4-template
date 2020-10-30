<template>
<div class="about">
  <h1>{{msg}}</h1>
</div>
</template>

<script>
import { api } from '@/api/index'
export default {
  data () {
    return {
      msg: '1234'
    }
  },
  created () {
    var query = {
      url: '/api/fd16/getCode',
      method: 'post',
      data: {}
    }
    api(query).then(res => {
      if (res.error_code === 0) {
        //  测试环境去掉,登录信息存入cookie
        if (process.env.NODE_ENV === 'development') {
          console.log('测试环境。。。')
          document.cookie = res.data.SESSION_KEY + '=' + res.data.SESSION_ID
        }
        console.log('请求成功')
      } else {
        console.log('请求失败')
      }
    }, () => {
      console.log('网络错误')
    })
  }
}
</script>

<style scoped="scoped" lang="less">
</style>
