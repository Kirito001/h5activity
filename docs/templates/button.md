---
title: '按钮'
---

# 按钮

最常用的组件之一，几乎出现在每个页面

### 参数

#### color
- 类型: `String`
- 默认值: `#EEEEEE`

#### block
- 类型: `Boolean`
- 默认值: `false`

#### width
- 类型: `Number`
- 默认值: `auto`

#### height
- 类型: `Number`
- 默认值: `auto`

``` vue
<template>
	<a-btn :color="item" v-for="item in color" block>button</a-btn>
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
<a-btn width="300" :color="item" v-for="item in color" block>button</a-btn>
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