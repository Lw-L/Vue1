<template>
   <div class="box">
      <div class="header">
          <router-link to="/main/home/first">关注</router-link>
          <router-link to="/main/home/hot">热门</router-link>
      </div>
      <div class="content">
          <router-view />
      </div>
   </div>
</template>


<script>
export default {
    data(){
        return{

        }
    },
    created(){
        
    }
}
</script>


<style lang="scss">
    .header{
        width: 100%;
        height: 40px;
        display: flex;
        a{
            flex: 1;
            text-align: center;
            line-height: 40px;
            background: #eee;
        }
    }
</style>
