---
title: '文本'
---

# 字体

### 大小

以 `fs-20` 为最小字体（也就是750宽度设计图上 `font-size: 20px`）；每级增加 2，一直到 64；
- `fs` = `font-size`

### 行高

以 `lh-20` 为最小行高（也就是750宽度的设计图上 `ling-height: 20px`）；每级增加 2；一直到 64;
- `lh` = `line-height`

### 文字对齐

对所有行元素有效

- `text-left` = `text-align: left` 文本靠左
- `text-center` = `text-align: center` 文本居中
- `text-right` = `text-align: right` 文本靠右

fs- <select v-model="fontSize" style="min-width:100px">
	<option v-for="(item, i) in 23" :key="i">{{20 + i * 2}}</option>
</select>

lh- <select v-model="lineHeight">
	<option>auto</option>
	<option v-for="(item, i) in 23" :key="i">{{20 + i * 2}}</option>
</select>

<template>
<div>
	<button @click="_align('left')">text-left</button>
	<button @click="_align('center')">text-center</button>
	<button @click="_align('right')">text-right</button>
	<br/><br/>
	<div class="pa-2" :class="`fs-${fontSize} lh-${lineHeight} text-${textAlign}`" style="border: 1px solid #ccc">
		fs-{{fontSize}}</br/>
		lh-{{lineHeight}}<br/>
		text-{{textAlign}}
	</div>
</div>
</template>

<br/>

### 文字不换行，超过长度省略

<br/>`class="text-truncate"`

<p class="text-truncate">文字不换行，超过长度省略文字不换行，超过长度省略文字不换行，超过长度省略文字不换行，超过长度省略文字不换行，超过长度省略文字不换行，超过长度省略</p>

### 文字粗细和斜体

<br/>
<p class="fw-black">class="fw-black" 最粗</p>
<p class="fw-bold">class="fw-bold" 700粗细</p>
<p class="fw-medium">class="fw-medium" 500粗细</p>
<p class="fw-regular">class="fw-regular" 400粗细</p>
<p class="fw-light">class="fw-light" 300粗细</p>
<p class="fw-thin">class="fw-thin" 100粗细</p>
<p class="fw-italic">class="fw-italic" 倾斜文字</p>

<script>
export default {
	data() {
		return {
			fontSize: 20,
			lineHeight: 24,
			textAlign: 'left'
		}
	},
	methods: {
		_align(align) {
			this.textAlign = align;
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../plugin/h5activity.scss';
</style>