var Ripple = {
    inserted: function(el, binding){

        // Default values.
        var props = {
            event: isPC() ? 'mousedown' : 'touchstart',
            transition: 400
        };

        setProps(Object.keys(binding.modifiers),props);

        el.addEventListener(props.event, function(event) {
            rippler(event, el, binding.value);
        });
		
		var bg = binding.value || window.getComputedStyle(el)['color'] || '#FFFFFF';
		var zIndex = Ripple.zIndex || '0';

        function rippler(event, el) {
            var target = el;
            // 获得边界，以避免抵消ripple容器的位置
            var targetBorder = parseInt((getComputedStyle(target).borderWidth).replace('px', ''));

            // 获得必要的变量
            var rect        = target.getBoundingClientRect(),
                left        = rect.left,
                top         = rect.top,
                width       = target.offsetWidth,
                height      = target.offsetHeight + 1,	// 有可能不是整数，会被四舍五入，所以+1
                dx          = (isPC() ? event.clientX : event.changedTouches && event.changedTouches[0].clientX) - left,
                dy          = (isPC() ? event.clientY : event.changedTouches && event.changedTouches[0].clientY) - top,
                maxX        = Math.max(dx, width - dx),
                maxY        = Math.max(dy, height - dy),
                style       = window.getComputedStyle(target),
                radius      = Math.sqrt((maxX * maxX) + (maxY * maxY)),
                border      = (targetBorder > 0 ) ? targetBorder : 0;

            // 创建ripple及其容器
            var ripple = document.createElement("div"),
                rippleContainer = document.createElement("div");
                rippleContainer.className = 'ripple-container';
                ripple.className = 'ripple';

            // ripple样式
            ripple.style.marginTop = '0px';
            ripple.style.marginLeft = '0px';
            ripple.style.width = '1px';
            ripple.style.height = '1px';
            ripple.style.transition = 'all ' + props.transition + 'ms cubic-bezier(0.4, 0, 0.2, 1)';
            ripple.style.borderRadius = '50%';
            ripple.style.pointerEvents = 'none';
            ripple.style.position = 'relative';
            ripple.style.zIndex = zIndex;
			ripple.style.opacity = 0.3;
            ripple.style.backgroundColor = bg;

            // ripple容器样式
            rippleContainer.style.position = 'absolute';
            rippleContainer.style.left = 0 - border + 'px';
            rippleContainer.style.top = 0 - border + 'px';
            rippleContainer.style.height = '0';
            rippleContainer.style.width = '0';
            rippleContainer.style.pointerEvents = 'none';
            rippleContainer.style.overflow = 'hidden';

            // 存储目标位置后改变它
            var storedTargetPosition =  ((target.style.position).length > 0) ? target.style.position : getComputedStyle(target).position;
            // 改变目标位置到相对，以保证ripple正确定位
            if (storedTargetPosition !== 'relative') {
                target.style.position = 'relative';
            }

            rippleContainer.appendChild(ripple);
            target.appendChild(rippleContainer);

            ripple.style.marginLeft = dx + "px";
            ripple.style.marginTop  = dy + "px";

            // 不需要设置定位，因为ripple应该是目标和它的相对位置的子元素
            rippleContainer.style.width   = width + "px";
            rippleContainer.style.height  = height + "px";
            rippleContainer.style.borderTopLeftRadius  = style.borderTopLeftRadius;
            rippleContainer.style.borderTopRightRadius  = style.borderTopRightRadius;
            rippleContainer.style.borderBottomLeftRadius  = style.borderBottomLeftRadius;
            rippleContainer.style.borderBottomRightRadius  = style.borderBottomRightRadius;

            rippleContainer.style.direction = 'ltr';

            setTimeout(function() {
                ripple.style.width  = radius * 2 + "px";
                ripple.style.height = radius * 2 + "px";
                ripple.style.marginLeft = dx - radius + "px";
                ripple.style.marginTop  = dy - radius + "px";
            }, 0);

            function clearRipple() {
                setTimeout(function() {
                    ripple.style.backgroundColor = "rgba(0, 0, 0, 0)";
                }, 250);

                // 设置超时以平滑地消除ripple
                setTimeout(function() {
                    rippleContainer.parentNode && rippleContainer.parentNode.removeChild(rippleContainer);
                }, 600);

				if(isPC()) {
					el.removeEventListener('mouseup', clearRipple, false);
				} else {
					el.removeEventListener('touchend', clearRipple, false);
				}

                // 删除事件后，设置位置目标到它的原始的一个
                // 这是为了避免ripple跳出父目标的跳跃效应
                setTimeout(function () {
                    var clearPosition = true;
                    for(var i = 0; i < target.childNodes.length; i++) {
                        if(target.childNodes[i].className === 'ripple-container') {
                            clearPosition = false;
                        }
                    }

                    if(clearPosition) {
                        if(storedTargetPosition !== 'static') {
                            target.style.position = storedTargetPosition;
                        } else {
                            target.style.position = '';
                        }
                    }

                }, props.transition + 250)
            }

            if(event.type === 'touchstart') {
                el.addEventListener('touchend', clearRipple, false);
            } else if(event.type === 'mousedown') {
                el.addEventListener('mouseup', clearRipple, false);
                el.addEventListener('mouseleave', clearRipple, false);
			} else {
                clearRipple();
            }
        }
    }
};

function isPC() {
	return /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ? false : true;
}

function setProps(modifiers,props) {
    modifiers.forEach(function(item) {
        if(isNaN(Number(item)))
            props.event = item;
        else
            props.transition = item;
    });
}

export default Ripple;
