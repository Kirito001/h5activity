---
title: '文本'
---

# 文本

以 `font-size: 20px` 为最小字体；每级增加 2px，一直到 64px；

fs- <select v-model="fontSize" style="min-width:100px">
	<option v-for="(item, i) in 23" :key="i">{{20 + i * 2}}</option>
</select>

<div class="pa-2" :class="`fs-${fontSize}`" style="border: 1px solid #ccc">class="fs-{{fontSize}}"</div>

<script>
export default {
	data() {
		return {
			fontSize: 20
		}
	}
}
</script>

<style lang="scss">
@import '../plugin/h5-activity.scss';
</style>