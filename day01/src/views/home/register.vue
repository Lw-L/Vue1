<template>
    <div class="logbox">
        <div class="header">
            <p>圈子注册</p>
        </div>
        <div class="main">
            <input type="text" placeholder="用户名">
            <input type="password" placeholder="登录密码">
            <button>注册</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){

    },
    methods: {
        
    },
}
</script>
<style lang="scss" scoped>
    .logbox{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .header{
            width: 100%;
            height: .8rem;
            background: #eee;
            span{
               float: left;
            }
            p{
                font-size: .32rem;
                text-align: center;
                line-height: .8rem;
            }
            
        }
        .main{
            width: 100%;
            flex: 1;
            input{
                width: 7rem;
                height: .8rem;
                margin-left: .2rem;
                border: none;
                background: #f2f2f2;
            }
            button{
                width: 7rem;
                height: 0.8rem;
                margin-left: .2rem;
                border: none;
                background: #f76968;
                color: #fff;
            }
            a{
                display: block;
                font-size: .28rem;
                color: #101010;
                margin-top: .3rem;
                margin-left: .2rem;
            }
        }
    }
</style>