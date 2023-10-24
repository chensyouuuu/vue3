<template>
    <el-row class="tac">
        <el-col :span="24">
            <el-menu :collapse-transition="false" @open="handleOpen" @close="handleClose" background-color="#ebf1f5"
                text-color="#606266" active-text-color="#2F74FF" :unique-opened="true" class="menu" router>
                <template v-for="(first, index) in myRouter">
                    <!-- 有子路由嵌套 -->
                    <el-sub-menu :index="first.path" v-if="first.children" :key="index">
                        <template v-if="first.children">
                            <el-menu-item-group v-for="(second, sec_index) in first.children" :key="sec_index">
                                <el-menu-item :index="first.path + '/' + second.path"><i class="el-icon-odometer" />
                                    {{ second.name }}
                                </el-menu-item>
                            </el-menu-item-group>
                        </template>
                        <template #title>
                            <span>{{ first.name }}</span>
                        </template>
                    </el-sub-menu>
                    <!-- 单独路由 -->
                    <el-menu-item v-else :index="first.path" :key="'item' + index">
                        <span>{{ first.name }}</span>
                    </el-menu-item>
                </template>

            </el-menu>

        </el-col>
    </el-row>
</template>

<script lang="ts" setup>

import { onMounted } from 'vue'
import routes from "../router/index.js"
// import { ref, reactive } from "vue"

console.log(routes)
const myRouter = routes.options.routes
onMounted(() => {


})
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

</script>
