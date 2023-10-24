<template>
  <div>
    <el-container>
      <el-header>
        <div class="header">header</div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <leftSide></leftSide>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          
        </el-container>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
  <el-container>


  </el-container>
</template>

<script setup lang="ts">
import leftSide from './components/leftSide.vue';
</script>
<style lang="scss">
header{
  background-color: #409eff;
}
footer{
  background-color: #409eff;
}
main{
  min-height: 100vh;
}
</style>
