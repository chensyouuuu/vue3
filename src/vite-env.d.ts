/// <reference types="vite/client" />

declare module '*.js' {
    import { ComponentOptions } from 'vue'
    const componentOptions: ComponentOptions
    export default componentOptions
}
