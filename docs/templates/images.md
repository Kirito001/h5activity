---
title: '图象'
---

# 图象 `a-img`

代替 img 标签，体验比 img 好，非常的银杏

::: tip 注意
宽高属性的值不需要写单位，否者会失效
:::

<template>
<a-img height="100" src="https://picsum.photos/800/500?random" background-color="#EEEEEE"></a-img>
</template>

### 参数

#### width
- 类型: `String`
- 默认值: `100%`

#### height
- 类型: `String`
- 默认值: `0`

#### background-color
- 类型: `String`
- 默认值: `transparent`

#### src
- 类型: `String`
- 默认值: `无`

图片地址

#### align
- 类型: `String`
- 默认值: `center center`

图片的对齐方式你定，跟 `background-position` 一样

#### transition
- 类型: `String`
- 默认值: `fade`

显示图片时的过度方式，你也可以自定义[过度](https://cn.vuejs.org/v2/guide/transitions.html)

<style lang="scss" scoped>
@import '../plugin/h5activity.scss';
p {
    margin: inherit
}
</style>