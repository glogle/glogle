<template>
  <div id="app">
    <router-view :winWidth="winWidth" :winHeight="winHeight"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      winWidth:'',
      winHeight:'',
      
    }
  },
  methods: {
    getWindeowSize:function(){
      this.winWidth = document.body.scrollWidth; // 网页正文全文宽
      this.winHeight =  document.body.scrollHeight; //网页正文全文高
    }

  },
  created(){
    this.getWindeowSize()
    console.log(this.winWidth,this.winHeight)
  }
}
</script>

<style>
body,html{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
