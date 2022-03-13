<template>
  <div class="home">
    <div class="student"
      v-for="(item,index) in studentList"
      :key="index"
    >
      {{ item.name }}  -- {{ item.score }}
    </div>
  </div>
</template>

<script>

import request from '@/utils/request'
export default {
  name: 'Home',
  components: {},
  data(){
    return {
      studentList:[]
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
  },


}
</script>

<style lang="scss" scoped>
  .home{
    font-size: 24px;
  }
</style>
