<template>
  <div class="home">
    <el-page-header @back="goBack" content="首页"></el-page-header>
    <div class="student"
      v-for="(item,index) in studentList"
      :key="index"
    >
      {{ item.name }}  -- {{ item.score }}
    </div>

    <el-row>
      <el-col :span="12"><div class="grid-content bg-purple">qw</div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple-light">wq</div></el-col>
    </el-row>

    <el-button @click="handleClick" >Click Me</el-button>
    <img src="@/assets/images/LOGO.png" alt="">
  </div>
</template>

<script>

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
    
    getServerList()
    .then(res=>{
      console.log(res);
    })
  },
  methods:{
    goBack(){
      
    },
    handleClick(){
      this.$message({
        showClose: true,
        message: '这是一条消息提示'
      });


    }
  }

}
</script>

<style lang="scss" scoped>
  .home{
    font-size: 24px;
  }
</style>
