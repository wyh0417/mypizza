<template>
    <div class="NewPizza mt-3">
        <h3 class="text-center text-warning">添加新的Pizza</h3>
        <form>
            <div class="form-group">
                <label for="input1" class="text text-warning">品种</label>
                <input type="text" class="form-control" v-model="newPizza.name" id="input1" placeholder="请输入您的Pizza种类">
            </div>
             <div class="form-group" >
                <label for="input2" class="text text-warning">商品描述</label>
                <textarea class="form-control" id="input2" v-model="newPizza.description" rows="3" placeholder="请写出这款Pizza有什么特点..."></textarea>
            </div>
            <h4 class="text-warning">尺寸 & 价格</h4>
            <div class="row">
                <div class="form-group col-4 ml-5">
                    <label class="lable1" for="input3">尺寸:</label>
                    <select class="form-control" id="input3" v-model="newPizza.size1">
                        <option>5</option>
                        <option>7</option>
                        <option>10</option>
                        <option>12</option>
                        <option>14</option>
                    </select>
                </div>
                <div class="form-group col-5 ml-5">
                    <label for="input4" class="lable1">价格:</label>
                    <input type="text" class="form-control" id="input4" v-model="newPizza.price1">
                </div>
            </div>
            <div class="row">
                <div class="form-group col-4 ml-5">
                    <label class="lable1" for="input3">尺寸:</label>
                    <select class="form-control" id="input3" v-model="newPizza.size2">
                        <option>7</option>
                        <option>5</option>
                        <option>10</option>
                        <option>12</option>
                        <option>14</option>
                    </select>
                </div>
                <div class="form-group col-5 ml-5">
                    <label for="input4" class="lable1">价格:</label>
                    <input type="text" class="form-control" id="input4" v-model="newPizza.price2">
                </div>
            </div>
            <button class="btn btn-primary btn-block" @click.prevent="addPizza">添加Pizza</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'NewPizza',
    data () {
        return {
            newPizza:{}
        }
    },
    methods: {
        addPizza(){
            var data = {
                name:this.newPizza.name,
                description:this.newPizza.description,
                options:[
                {
                    size:this.newPizza.size1,
                    price:this.newPizza.price1
                },
                {
                    size:this.newPizza.size2,
                    price:this.newPizza.price2
                },
                ]
            }
            // 把输入的内容传进 野狗云
            axios.post('./menu-wyh.json',data)
            .then(res=>{
                console.log(res.data)
                this.$router.push('/menu')
            })
            
            
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .text{
        font-size: 21px;
    }
</style>
