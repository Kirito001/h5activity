---
title: '间距'
---

# 间距

以4px为基础间距，也就是 `4 / 750 * 100` 的倍数作为间距划分，每个等级都是4的倍数；总共分了16个等级，最高等级64px；
比如，设计图上元素的实际margin是24，对应的样式就是 `class="ma-6"`

- `m` = `margin`
- `p` = `padding`
- `a` = `上下左右`
- `x` = `左右两边`
- `y` = `上下两边`
- `l` = `左边，left 的缩写`
- `r` = `右边，right 的缩写`
- `t` = `上边，top 的缩写`
- `b` = `下边，bottom 的缩写`

m <select v-model="marginDirection">
	<option>a</option>
	<option>x</option>
	<option>y</option>
	<option>l</option>
	<option>r</option>
	<option>t</option>
	<option>b</option>
</select>-
<select v-model="marginSize">
	<option>auto</option>
	<option v-for="(item, i) in 17">{{i}}</option>
	<option v-for="(item, i) in 17">n{{i}}</option>
</select>

p <select v-model="paddingDirection">
	<option>a</option>
	<option>x</option>
	<option>y</option>
	<option>l</option>
	<option>r</option>
	<option>t</option>
	<option>b</option>
</select>-
<select v-model="paddingSize">
	<option v-for="(item, i) in 17">{{i}}</option>
</select>
<div class="act-margin">
	<div class="content" :class="`m${marginDirection}-${marginSize} p${paddingDirection}-${paddingSize}`">
		<div class="act-padding">m{{marginDirection}}-{{marginSize}} p{{paddingDirection}}-{{paddingSize}}</div>
	</div>
</div>

<script>
export default {
	data() {
		return {
			marginDirection: 'a',
			marginSize: '2',
			paddingDirection: 'a',
			paddingSize: '2'
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../plugin/h5activity.scss';

.act-margin {
	background-color: #ffcc80;
	border: 1px solid transparent;
}
.act-padding {
	background-color: #eee;
}
.content {
	height:50px;
	line-height:50px;
	text-align:center;
	background-color: #c5e1a5;
}
</style>