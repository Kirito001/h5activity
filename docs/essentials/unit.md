---
title: 单位
---

# 单位

`h5-activity` 几乎是使用 vw（视口单位）作为布局单位。

**什么是视口单位？**

在PC端，指的是浏览器的可视区域。
而在移动端，它涉及3个视口：Layout Viewport（布局视口），Visual Viewport（视觉视口），Ideal Viewport（理想视口）。

**视口单位主要包括以下4个**

`vw` --> 1vw等于视口宽度的1%<br/>
`vh` --> 1vh等于视口高度的1%<br/>
`vmin` --> 选取vw和vh中最小的那个<br/>
`vmax` --> 选取vw和vh中最大的那个

比如：浏览器当前高度950px，当前宽度1920px, 1vh = 950px / 100 = 9.5px，1vw = 1920px / 100 = 19.2px

### 游览器兼容
<br/>
<img class="zoom-custom-imgs" src="/available.png" />