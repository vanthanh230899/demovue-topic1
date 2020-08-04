// data: {
//       activeColor: 'red',
//       fontSize: 30
//     }

var vueObjectClassBinding = new Vue({
  el: "#vue_object",
  data: {
      activeColor: 'red',
      fontSize: 30,
      styleObject: {
        color: 'red',
        fontSize: '13px'
      },
      baseStyles:{
        fontSize: '16px',
        display: 'block'
      },
      overridingStyles:{
        color: 'red',
        background: 'yellow'
      }
    }
});
