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
- 类型： `number`
- 默认值： `0`

#### height
- 类型： `number`
- 默认值： `0`

#### color
- 类型: `string`
- 默认值: `transparent`

#### absolute
- 类型: `Boolean`
- 默认值: `false`

当使用这个属性时，该组件的 `z-index: 99` 如果没有这个属性就默认为 `position: relative` 并且 `z-index: 0`

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