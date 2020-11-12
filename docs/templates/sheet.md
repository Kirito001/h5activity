---
title: '纸片'
---

# 纸片

低级基础组件，可以代替div

::: tip 注意
宽高属性的值不需要写单位，否者会失效
:::

### 参数

#### width
- 类型： `Number`
- 默认值： `100%`

#### height
- 类型： `Number`
- 默认值： `0`

#### color
- 类型: `String`
- 默认值: `transparent`

#### src
- 类型: `String`
- 默认值: `无`

#### absolute
- 类型: `Boolean`
- 默认值: `false`

当使用这个属性时，纸片的 `z-index: 99` 如果没有这个属性，纸片就默认为 `position: relative` 并且 `z-index: 0`

``` html
<a-sheet class="d-flex justify-center align-center fs-24" color="blue" height="80">hello h5activity</a-sheet>
```

<a-sheet class="d-flex justify-center align-center fs-24" color="blue" height="80">hello h5activity</a-sheet>

<style lang="scss" scoped>
@import '../plugin/h5activity.scss';
p {
    margin: inherit
}
</style>