<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'


/**
 * 
 *  'export'는 한 파일에서 1번 밖에 사용할 수 있따.
 *  export default 하게 되면 다른 파일에서 이름이 지정되어 있지 않기에
 *  그냥 바로 소스에서 사용할 수 있게 된다.
 * 
 *  // util.js
 *  export default function (x) {
 *    return console.log(x)
 *  }
 * 
 *  // main.js
 *  import util from `util.js`;
 *  console.log(util);      // function (x) { return console.log(x) }
 *  util("hi");
 * 
 *  // app.js
 *  import log from `util.js`;
 *  console.log(log);       // function (x) { return console.log(x) }
 *  log("hi");
 */
export default {
  components: {
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
  }
}
</script>

<style>
  body {
    text-align: center;
    background-color: #F6F6F6;
  }
  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }

</style>
