<template>
  <div class="home">
    <div class="student"
      v-for="(item,index) in studentList"
      :key="index"
    >
      {{ item.name }}  -- {{ item.score }}
    </div>
    <el-button @click="show = !show">Click Me</el-button>
  </div>
</template>

<script>

import request from '@/utils/request'
import {getServerList} from '@/api/demo'

export default {
  name: 'Home',
  components: {},
  data(){
    return {
      studentList:[],
      show: true
    }
  },
  computed: {

  },
  created(){
    request.get('/students')
    .then(res=>{
      this.studentList = res.data
      console.log(this.studentList);
    })
    .catch(err=>{
      console.log(err);
    })
    getServerList()
    .then(res=>{
      console.log(res);
    })
  },


}
</script>

<style lang="scss" scoped>
  .home{
    font-size: 24px;
  }
</style>
