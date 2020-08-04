<template>
  <div class="cont">
    <ListSinhVien :listsinhvien=listSinhVien v-on:xoaListUserById='thucThiXoa'/>
    <b-button 
                    size="sm" 
                    class="my-2 my-sm-0" 
                    type="submit" 
                    @click.prevent="getMeal"
                    >Search</b-button>
  </div>
</template>

<script>
import ListSinhVien from './component/CompoListSinhVIen.vue';
export default {
  name: 'app',
  data () {
    return {
      listSinhVien:[
        {id: 1,name:'Văn Thành1',Email:'vienthanh1@gmail.com', active: false},
        {id: 2,name:'Văn Thành2',Email:'vienthanh2@gmail.com', active: false},
        {id: 3,name:'Văn Thành3',Email:'vienthanh3@gmail.com', active: false},
        {id: 4,name:'Văn Thành4',Email:'vienthanh4@gmail.com', active: false},
        {id: 5,name:'Văn Thành5',Email:'vienthanh5@gmail.com', active: false},
        {id: 6,name:'Văn Thành6',Email:'vienthanh6@gmail.com', active: false}
      ]
   }
  },
  components:{
    ListSinhVien
  },
  methods:{
    thucThiXoa(data){
      var indexXoa;
        this.listSinhVien.forEach((element,index) => {
            if(element.id == data){
              element.active = !element.active;
            }
            else{
                element.active = false;
            }
        });
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

$color : red;

.demo{
  .demo1{
    h1{
      color: $color;
    }
  }
}
</style>
