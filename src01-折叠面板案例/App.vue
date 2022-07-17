<template>
  <div id="app">
    <h3>案例：折叠面板</h3>
    <Panel title="我的一个道姑朋友" :msg="msg"></Panel>
    <PanelG />
  </div>
</template>
<script>
import Panel from '@/components/Panel.vue'
export default {
  components: { Panel },
  data () {
    return {
      msg: '而你撑伞雍我茹'
    }
  }
}
</script>

<style lang="less">
body {
  background-color: #ccc;
  #app {
    width: 400px;
    margin: 20px auto;
    background-color: #fff;
    border: 4px solid blueviolet;
    border-radius: 1em;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
    padding: 1em 2em 2em;
    h3 {
      text-align: center;
    }
  }
}
</style>
