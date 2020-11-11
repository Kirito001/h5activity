---
title: 使用前提
---

### 尺寸

设计图应该为 `750px * auto`，高度随意；因为我会以750px为设计尺寸，将元素占有的 px 宽度去换算成vw；所以你只需要专注元素的实际px

### meta
用这个 mete 标签比较合适h5端的表现；禁止页面缩放

``` html
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover">
```