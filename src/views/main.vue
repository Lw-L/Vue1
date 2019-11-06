<template>
   <div class="box">
       <div class="main">
           <router-view/>
       </div>
       <div class="footer">
            <router-link to="/main/home">首页</router-link>
            <router-link to="/main/idear">想法</router-link>
            <router-link to="/main/message">信息</router-link>
            <router-link to="/main/my">我的</router-link>
       </div>
   </div>
</template>


<script>
export default {
    data(){
        return{

        }
    }
}
</script>


<style lang="scss" scoped>
    html,body{
        width: 100%;
        height: 100%;
    }
    .box{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .main{
            width: 100%;
            flex: 1;
        }
        .footer{
            width: 100%;
            height: 40px;
            display: flex;
            background: pink;
            a{
                flex: 1;
                text-align: center;
                line-height: 40px;
            }
        }
    }
</style>
