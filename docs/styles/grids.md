---
title: 网格
---

# 网格

如果你用过 [bootstrap grid](https://getbootstrap.com/docs/4.0/layout/grid/) 的网格，那么你对这个并不陌生。使用方式是一致的，唯一的区别是我将网格系统分为24份，由于 `h5activity` 初衷只是为了h5的开发，所以并没有做响应式。

``` html
<div class="row">
	<div class="col-24"></div>
	<div class="offset-3 col-5"></div>
</div>
```

<template>
<div class="row mt-4 text-center">
	<div class="col-8 pa-2 grey outline">col-8</div>
	<div class="col-8 pa-2 grey outline">col-8</div>
	<div class="col-8 pa-2 grey outline">col-8</div>
	<div class="col-24 pa-2 grey outline">col-24</div>
	<div class="col-12 pa-2 grey outline">col-12</div>
	<div class="col-12 pa-2 grey outline">col-12</div>
	<div class="col-7 offset-4 pa-2 grey outline">col-7 offset-4</div>
	<div class="col-9 offset-2 pa-2 grey outline">col-9 offset-2</div>
	<div class="col-4 pa-2 grey outline">col-4</div>
	<div class="col-6 pa-2 grey outline">col-6</div>
	<div class="col-7 pa-2 grey outline">col-7</div>
	<div class="col-7 pa-2 grey outline">col-7</div>
</div>
<br/><br/>

### 用作图片，宫格很不错

<br/>
<div class="row ma-n1">
	<div class="col-12 pa-1">
		<div class="row ma-n1">
			<div class="col-16 pa-1">
				<img class="zoom-custom-imgs" src="https://picsum.photos/500/300?image=10" />
			</div>
			<div class="col-8 pa-1">
				<img class="mb-2 zoom-custom-imgs" src="https://picsum.photos/500/300?image=15" />
				<img class="zoom-custom-imgs" src="https://picsum.photos/500/300?image=25" />
			</div>
			<div class="col-24 pa-1">
				<img class="zoom-custom-imgs" src="https://picsum.photos/500/300?image=30" />
			</div>
		</div>
	</div>
	<div class="col-12 pa-1">
		<div class="row ma-n1">
			<div class="col-24 pa-1">
				<img class="zoom-custom-imgs" src="https://picsum.photos/500/300?image=20" />
			</div>
			<div class="col-12 pa-1">
				<img class="zoom-custom-imgs" src="https://picsum.photos/500/300?image=35" />
			</div>
			<div class="col-12 pa-1">
				<img class="zoom-custom-imgs" src="https://picsum.photos/500/300?image=40" />
			</div>
		</div>
	</div>
</div>

</template>

<style lang="scss" scoped>
@import '../plugin/h5activity.scss';
</style>