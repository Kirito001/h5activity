---
title: 边框
---

# 边框

以 2px 为一个等级划分，直到 24px；
默认边框颜色：`rgba(0, 0, 0, 0.2)`

`outline` = `border`

<div class="pa-2 d-inline-block outline">outline</div>
<div class="pa-2 d-inline-block mr-1 mb-1" :class="`outline-${item}`" v-for="item in 12">outline-{{item}}</div>

### 圆角边

以 4px 为一个等级划分，直到 48px；

`rounded` = `border-radius`

<div class="pa-8 d-inline-block outline" :class="`rounded-${item}`" v-for="item in 12">rounded-{{item}}</div>
<div class="pa-8 d-inline-block outline rounded-pill">rounded-pill</div>

<style lang="scss" scoped>
@import '../plugin/h5activity.scss';
</style>