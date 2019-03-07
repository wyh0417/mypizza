<template>
    <div class="NewMenu mt-3">
        <h3 class="text-center text-warning">菜单管理</h3>
        <table class="table text-center">
            <thead class="thead-warning">
                <tr>
                    <th scope="col">序号</th>
                    <th scope="col">品种</th>
                    <th scope="col">删除</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(items,index) in item" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{items.name}}</td>
                    <td>
                        <button class="btn btn-danger" @click='del(items)'>Del</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from "axios"
export default {
    data(){
        return{
            // item:[{name:'芝士'},{name:'榴莲'},{name:'香蕉'}]
            item:[]
        }
    },
    mounted() {
        // 调用野狗云存储的数据
        var that = this
        axios.get('./menu-wyh.json')
        .then(res=>{
            console.log(res.data)   // 所有的对象
            for(var key in res.data){
                // 把key当成对象的id
                console.log(key)     // -L_I0AmJtTFTlVOq
                var ObjId = res.data[key]
                ObjId.id = key
                that.item.push(ObjId)
                
            }
            // console.log(that.item)
        })
    },
    methods: {
        del(items){
            axios.delete('./menu-wyh/'+items.id+'.json')
            .then(res=>{
                console.log('删除成功')
                this.$router.push('/menu') 
            })
        }
    },
}
</script>

<style scoped>
    
</style>