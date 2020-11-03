---
title: 弹性布局
---

# 弹性布局

任何元素都可用转换为 flexbox 容器；
给父元素应用 `d-flex` 或者 `d-inline-flex` 就可用愉快的布局子元素了；

### flex 方向

父元素使用以下class可以决定子元素的排列方式
- `flex-row` = `flex-direction: row` 默认方向，从左到右
- `flex-row-reverse` = `flex-direction: row-reverse` 从右到做
- `flex-column` = `flex-direction: column` 从上到下
- `flex-column-reverse` = `flex-direction: column-reverse` 从下到上

<template>
<div class="outline pa-1 mb-1 d-flex flex-row">
	<span class="ma-1">flex-row 1</span>
	<span class="ma-1">flex-row 2</span>
	<span class="ma-1">flex-row 3</span>
</div>
<div class="outline pa-1 mb-1 d-flex flex-row-reverse">
	<span class="ma-1">flex-row-reverse 1</span>
	<span class="ma-1">flex-row-reverse 2</span>
	<span class="ma-1">flex-row-reverse 3</span>
</div>
<div class="outline pa-1 mb-1 d-flex flex-column">
	<span class="ma-1">flex-column 1</span>
	<span class="ma-1">flex-column 2</span>
	<span class="ma-1">flex-column 3</span>
</div>
<div class="outline pa-1 mb-1 d-flex flex-column-reverse">
	<span class="ma-1">flex-column-reverse 1</span>
	<span class="ma-1">flex-column-reverse 2</span>
	<span class="ma-1">flex-column-reverse 3</span>
</div>
</template>

### justify

用于设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式
- `justify-start` = `justify-content: flex-start` flex开始的方向
- `justify-center` = `justify-content: center` 子元素居中
- `justify-end` = `justify-content: flex-end` flex结束的方向
- `justify-space-b` = `justify-content: space-between` 两边不留白，子元素之间空白相等
- `justify-space-a` = `justify-content: space-around` 子元素朝flex方向两边的空白平分

<template>
<div class="outline pa-1 mb-1 d-flex justify-start">
	<span class="ma-1">justify-start</span>
	<span class="ma-1">justify-start</span>
	<span class="ma-1">justify-start</span>
</div>
<div class="outline pa-1 mb-1 d-flex justify-center">
	<span class="ma-1">justify-center</span>
	<span class="ma-1">justify-center</span>
	<span class="ma-1">justify-center</span>
</div>
<div class="outline pa-1 mb-1 d-flex justify-end">
	<span class="ma-1">justify-end</span>
	<span class="ma-1">justify-end</span>
	<span class="ma-1">justify-end</span>
</div>
<div class="outline pa-1 mb-1 d-flex justify-space-b">
	<span class="ma-1">justify-space-b</span>
	<span class="ma-1">justify-space-b</span>
	<span class="ma-1">justify-space-b</span>
</div>
<div class="outline pa-1 mb-1 d-flex justify-space-a">
	<span class="ma-1">justify-space-a</span>
	<span class="ma-1">justify-space-a</span>
	<span class="ma-1">justify-space-a</span>
</div>
</template>

### align

定义flex子项在flex容器的当前行的侧轴（纵轴）方向上的对齐方式
- `align-start` = `align-items: flex-start` flex方向的侧轴方向的开头
- `align-center` = `align-items: center` 子元素侧向居中
- `align-end` = `align-items: flex-end` flex方向的侧轴方向的结束
- `align-baseline` = `align-items: baseline` 
- `align-stretch` = `align-items: stretch` 子元素被拉伸铺满侧轴

<template>
flex- <select v-model="flex">
	<option>row</option>
	<option>row-reverse</option>
	<option>column</option>
	<option>column-reverse</option>
</select>
justify- <select v-model="justify">
	<option>start</option>
	<option>center</option>
	<option>end</option>
	<option>space-b</option>
	<option>space-a</option>
</select>
align- <select v-model="align">
	<option>start</option>
	<option>center</option>
	<option>end</option>
	<option>baseline</option>
	<option>stretch</option>
</select>
<div class="outline my-1 d-flex" :class="`flex-${flex} justify-${justify} align-${align}`" style="min-height:30vh">
	<span class="pa-2 outline">align-start 1</span>
	<span class="pa-2 outline">align-start 2</span>
	<span class="pa-2 outline">align-start 3</span>
</div>
</template>

<script>
export default {
	data() {
		return {
			flex: 'row',
			justify: 'start',
			align: 'start'
		}
	}
}
</script>

<style lang="scss">
@import '../plugin/h5-activity.scss';
</style>