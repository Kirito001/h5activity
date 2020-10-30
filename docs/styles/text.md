---
title: '文本'
---

# 文本

以 `font-size: 20px` 为最小字体；每级增加 2px，一直到 64px；
- `fs` = `font-size`

### 行高

以 `line-height: 4vw` 为最小行高；每级增加 2px；一直到 64px;
- `lh` = `line-height`

### 文字对齐

对所有行元素有效

- `text-left` = `text-align: left`
- `text-center` = `text-align: center`
- `text-right` = `text-align: right`

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

<style lang="scss">
@import '../plugin/h5-activity.scss';
</style>