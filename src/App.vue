<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  import {query,getUsers} from '@/api/mockApi'
  
  export default {
    mounted(){
      query()
      .then(res => {
        console.log(res);
      })
      .catch((err) => {
        
      });

      getUsers()
      .then(res=>{
        
      })

      

    }

  }
  /**改变font-size 做适配*/
  // document.addEventListener('DOMContentLoaded', ()=>{
  //   const html = document.querySelector('html')
  //   let fontSize = window.innerWidth / 10
  //   fontSize = fontSize > 50 ? 50 : fontSize
  //   html.style.fontSize = fontSize + 'px'
  // })


</script>
<style lang="scss" scoped>

</style>
