(function($) {
    $.fn.iBox = function(options) {
        var defaults = {
            iBoxURL: "images/",
            opacity: 0.5,
            callBack: null,
            auto: false,
            timeout: 0,
            target: null,
            requestType: null,
            title: "Message",
            drag: true,
            iframeWH: {
                width: 500,
                height: 300
            },
            html: ''
        },
        _this = this;

        this.TCDOS = $.extend(defaults, options);
        var iBoxHtml, B = null,
        C = null,
        $win = $(window),
        $t = $(this);

        //弹窗容器
        iBoxHtml = '<div id="iBox">';
        iBoxHtml += '<div class="iBox_popup">';
        iBoxHtml += '<table><tr><td>';
        iBoxHtml += '<div class="iBox_body">';
        iBoxHtml += '<div class="iBox_title"><span>' + _this.TCDOS.title + '</span><i class="iBox_close"></i></div>';
        iBoxHtml += '<div class="iBox_content" id="iBox_Content"></div>';
        iBoxHtml += '</div>';
        iBoxHtml += '<td></tr></table>';
        iBoxHtml += '</div>';
        iBoxHtml += '</div>';

        this.showBox = function() {
            $("#iBox_overlay").remove();
            $("#iBox").remove();
            B = $("<div id='iBox_overlay' class='iBox_hide'></div>").hide().addClass('iBox_overlay_bg').css('opacity', _this.TCDOS.opacity).dblclick(function() {
                _this.close();
            }).appendTo('body').fadeIn(300);
            C = $(iBoxHtml).appendTo('body');
            handleClick();
        }

        //点击
        function handleClick() {
            var con = C.find("#iBox_Content");
            if (_this.TCDOS.requestType && $.inArray(_this.TCDOS.requestType, ['iframe', 'ajax', 'img']) != -1) {
                con.html("<div class='iBox_load'><div id='iBox_loading'><img src='" + _this.TCDOS.iBoxURL + "ibox-loading.gif' /></div></div>");
                if (_this.TCDOS.requestType === "img") {
                    var img = $("<img />");
                    img.attr("src", _this.TCDOS.target);
                    img.load(function() {
                        img.appendTo(con.empty());
                        setPosition();
                    });
                } else {
                    if (_this.TCDOS.requestType === "ajax") {
                        $.get(_this.TCDOS.target,
                        function(data) {
                            content = con;
                            contentHtml = data;
                            con.html(data);
                            C.find('.iBox_close').click(_this.close);
                            setPosition();
                        })
                    } else {
                        ifr = $("<iframe name='iBoxIframe' style='width:" + _this.TCDOS.iframeWH.width + "px;height:" + _this.TCDOS.iframeWH.height + "px;' scrolling='auto' frameborder='0' src='" + _this.TCDOS.target + "'></iframe>");
                        ifr.appendTo(con.empty());
                        ifr.load(function() {
                            try {
                                $it = $(this).contents();
                                $it.find('.iBox_close').click(_this.close);
                                fH = $it.height();
                                fW = $it.width();
                                w = $win;
                                newW = Math.min(w.width() - 180, fW);
                                newH = Math.min((w.height() - 100), fH);
                                if (!newH) return;
                                var lt = sizePosition(newW);
                                C.css({
                                    left: lt[0],
                                    top: lt[1]
                                });
                                $(this).css({
                                    height: newH,
                                    width: newW
                                });
                            } catch(e) {
                            }
                        });
                    }
                }
            } else {
                if (_this.TCDOS.target) {
                    $(_this.TCDOS.target).clone(true).show().appendTo(con.empty());
                } else {
                    if (_this.TCDOS.html) {
                        con.html(_this.TCDOS.html);
                    } else {
                        $t.clone(true).show().appendTo(con.empty());
                    }
                }
            }
            afterHandleClick();
        }

        //点击后
        function afterHandleClick() {
            setPosition();
            C.show().find('.iBox_close').click(_this.close).hover(function() {
                $(this).addClass("on");
            },
            function() {
                $(this).removeClass("on");
            });
            $(document).unbind('keydown.iBox').bind('keydown.iBox',
            function(e) {
                if (e.keyCode === 27) {
                    _this.close();
                }
                return true
            });
            typeof _this.TCDOS.callBack === 'function' ? _this.TCDOS.callBack() : null;
            _this.TCDOS.drag ? drag() : null;
            if (_this.TCDOS.timeout) {
                setTimeout(_this.close, _this.TCDOS.timeout);
            }
        }

        //位置属性设置
        function setPosition() {
            if (!C) return false;
            var width = C.width(),
            lt = sizePosition(width);
            C.css({
                left: lt[0],
                top: lt[1]
            });
            var $dh = $(document).height(),
            $wh = $win.height();
            $h = Math.max($dh, $wh);
            B.height($h).width($win.width())
        }

        //计算位置
        function sizePosition(w) {
            l = ($win.width() - w) / 2;
            t = $win.scrollTop() + $win.height() / 9;
            return [l, t];
        }

        //拖拽
        function drag() {
            var dx, dy, moveout;
            var T = C.find('.iBox_title').css('cursor', 'move');
            T.bind("selectstart",
            function() {
                return false;
            });
            T.mousedown(function(e) {
                dx = e.clientX - parseInt(C.css("left"));
                dy = e.clientY - parseInt(C.css("top"));
                C.mousemove(move).mouseout(out).css('opacity', 0.8);
                T.mouseup(up);
            });
            //移动
            function move(e) {
                moveout = false;
                if (e.clientX - dx < 0) {
                    l = 0;
                } else if (e.clientX - dx > $win.width() - C.width()) {
                    l = $win.width() - C.width();
                } else {
                    l = e.clientX - dx;
                }
                C.css({
                    left: l,
                    top: e.clientY - dy
                });

            }
            //边界
            function out(e) {
                moveout = true;
                setTimeout(function() {
                    moveout && up(e);
                },
                10);
            }
            function up(e) {
                C.unbind("mousemove", move).unbind("mouseout", out).css('opacity', 1);
                T.unbind("mouseup", up);
            }
        }

        //关闭
        this.close = function() {
            if (C) {
                B.remove();
                C.stop().fadeOut(300,
                function() {
                    C.remove();
                })
            }
        }

        //resize	
        $win.resize(function() {
            setPosition();
        });

        //触发方式
        _this.TCDOS.auto ? _this.showBox() : $t.click(function() {
            _this.showBox();
            return false;
        });
        return this;
    };
})(jQuery);