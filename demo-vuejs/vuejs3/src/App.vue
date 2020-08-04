<template>
  <div id="app">
    <ul v-for ="(set,index) in sets" :key=index>
    <li v-for ="n in even(set)"  :key=n>{{ n }}
  </li>
</ul>
  </div>
</template>
<script>
export default {
  name:"app",
  data() {
    return{
sets: [
            [1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10],
            [6, 7, 8, 9, 10]
        ]
    }
        
    },
    methods: {
        even: function(numbers) {
            return numbers.filter(function(number) {
                return number % 2 === 0
            })
        }
    }
}
</script>


<style lang="scss">

</style>
