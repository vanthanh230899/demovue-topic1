<template>
    <div class="sinhvien" >
        <h1>{{sinhvien.name}} <button v-on:click="deleteSV">xoá</button></h1>
    </div>
</template>

<script>
export default {
    name: 'SinhVien123',
    data(){
        return {

        }
    },
    props:{
        sinhvien:Object,
    },
    methods:{
        deleteSV(){
            var data = this.sinhvien.id;
            this.$emit('xoaUser',data);
        }
    }


}
</script>

<style lang="scss">
    .nen{
        background: red;
    }
</style>