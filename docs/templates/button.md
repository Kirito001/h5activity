---
title: '按钮'
---

# 按钮 ``a-btn``

最常用的组件之一，几乎出现在每个页面

::: tip 注意
宽高属性的值不需要写单位，否者会失效
:::

### 参数

#### color
- 类型: `String`
- 默认值: `#EEEEEE`

#### block
- 类型: `Boolean`
- 默认值: `false`

按钮占满一行

#### width
- 类型: `Number`
- 默认值: `auto`

#### height
- 类型: `Number`
- 默认值: `80`

#### shade
- 类型: `Boolean`
- 默认值: `false`

按钮的阴影

#### rounded
- 类型: `Boolean`
- 默认值: `false`

按钮圆角边

#### tile
- 类型: `Boolean`
- 默认值: `false`

按钮直角边

#### outlined
- 类型: `Boolean`
- 默认值: `false`

真空按钮，背景色透明

#### fab
- 类型: `Boolean`
- 默认值: `false`

圆形按钮，通常在里面放置一个图片，fab按钮宽高 `80 * 80`

#### v-ripple
- 类型: `String`

按钮自带波纹，波纹颜色跟随文字，透明度为0.3，可以自定义颜色，具体使用请看[v-ripple](/directives/ripple)

``` vue
<template>
	<a-btn class="mb-3" :color="item" v-for="item in color" shade tile>CLIKE ME</a-btn>
	<a-btn color="indigo" :color="item" v-for="item in color" fab rounded shade tile>fab</a-btn>
</template>

<script>
export default {
	data() {
		return {
			color: ['red', 'green', 'blue', 'yellow']
		}
	}
}
</script>
```

<template>
<a-btn class="mb-4" :color="item" v-for="item in color" shade tile>CLIKE ME</a-btn>
<a-btn color="indigo" :color="item" v-for="item in color" fab rounded shade tile>fab</a-btn>

</template>

<script>
export default {
	data() {
		return {
			color: ['red', 'green', 'blue', 'yellow']
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../plugin/h5activity.scss';
p {
    margin: inherit
}
</style>