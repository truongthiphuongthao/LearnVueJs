var Vue = require('vue');
var data = {a: 1}
console.log(data)

var vm = new Vue({
  data: data
})
vm.a = 2;
console.log(vm.a, data.a);
