<template>
  <div id="app">
    <ul class="tabs">
      <li @click="changeTabs('login')">Sign In</li>
      <li @click="changeTabs('register')">Sign Up</li>
    </ul>
    <hr>   
    <div class="login" v-if="tabsSelected == 'login'">
      <h2>Form Sign In</h2>
      <form action="">
        <input type="user" placeholder="Username">
        <input type="pass" placeholder="Passwords">
      </form>
      </div> 
      <div class="register" v-else-if="tabsSelected == 'register'">
      <h2>Form Sign Up</h2>
      <form action="">
        <input type="user" placeholder="Username">
        <input type="pass" placeholder="Passwords">
        <input type="pass" placeholder="Password Again">
      </form>
      </div> 
    
  </div>
</template>


<script>
export default {
  name: "app",
 data() {
        return {
            tabsSelected: 'login'
        }
    },
    methods: {
        changeTabs(tabs) {
            return this.tabsSelected = tabs;
        }
    }
}
</script>
<style lang="scss">

.tabs{
  margin: 0;
  padding: 0;
  li{
    cursor: pointer;
    display: inline-block;
    padding: 10px 15px;
    border: 1px solid #000;
  }
  
  
}

</style>
