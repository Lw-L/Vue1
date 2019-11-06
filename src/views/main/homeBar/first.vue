<template>
   <div class="box">
      <div class="header">
          <!-- <div v-for="(item,index) in arr" :key="index">{{item.title}}</div> -->
      </div>
      <div class="content"></div>
   </div>
</template>


<script>
import axios from 'axios'

export default {
    data(){
        return{
            page:1,
            pageSize:10,
            type:""
        }
    },
    watch:{
        $route:function(){
            this.type = this.$route.params['type'];
            this.page = 1;
            this.list = [];

            this.getData();
        }
    },
    methods:{
        async getdata(){
           let data = await axios.get(`/api/list?type=${this.type}&page=${this.page}&pageSize=10`)

        }
    },
    created(){
        
    },
    mounted(){
        this.getdata()
    }
}
</script>


<style lang="scss">

</style>
