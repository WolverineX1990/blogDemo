var myui = {
  uid:0,
  copyTo : function(A, C) {
    if (A && C)
      for ( var B in C)
        A[B] = C[B];
    return A
  },
  isElement : function(A) {
    return A && A.appendChild
  }
}

myui.MessageBox = {
  alertTitle : "\u63d0\u9192",//提醒 utf-8
  confirmTitle : "\u786e\u8ba4",//确认
  prompTitle : "\u8f93\u5165",//输入
  prompMessage : "\u8bf7\u8f93\u5165\u5185\u5bb9\uff1a",//请输入内容：
  buttonText : {
    ok : "\u786e\u5b9a",//确定
    cancel : "\u53d6\u6d88",//取消
    yes : "\u662f",//是
    no : "\u5426"//否
  },
  show : function(H) {
    H = myui.copyTo( {
      width : "auto",
      height : "auto",
      showModal : true,
      minWidth : 150,
      maxWidth : 800,
      minHeight : 100,
      maxHeight : 350,
      showHeader : true,
      title : "",
      titleIcon : "",
      iconCls : "",
      iconStyle : "",
      message : "",
      html : "",
      spaceStyle : "margin-right:15px",
      showCloseButton : true,
      buttons : null,
      buttonWidth : 58,
      callback : null
    }, H);
    var K = H.callback, E = new mini.Window();
    E.setBodyStyle("overflow:hidden");
    E.setShowModal(H.showModal);
    E.setTitle(H.title || "");
    E.setIconCls(H.titleIcon);
    E.setShowHeader(H.showHeader);
    E.setShowCloseButton(H.showCloseButton);
    var L = E.uid + "$table", P = E.uid + "$content", N = "<div class=\""
        + H.iconCls + "\" style=\"" + H.iconStyle + "\"></div>", S = "<table class=\"mini-messagebox-table\" id=\""
        + L
        + "\" style=\"\" cellspacing=\"0\" cellpadding=\"0\"><tr><td>"
        + N
        + "</td><td id=\""
        + P
        + "\" class=\"mini-messagebox-content-text\">"
        + (H.message || "") + "</td></tr></table>", B = "<div class=\"mini-messagebox-content\"></div>"
        + "<div class=\"mini-messagebox-buttons\"></div>";
    E._bodyEl.innerHTML = B;
    var O = E._bodyEl.firstChild;
    if (H.html) {
      if (typeof H.html == "string")
        O.innerHTML = H.html;
      else if (myui.isElement(H.html))
        O.appendChild(H.html)
    } else
      O.innerHTML = S;
    E._Buttons = [];
    var R = E._bodyEl.lastChild;
    if (H.buttons && H.buttons.length > 0) {
      for ( var J = 0, F = H.buttons.length; J < F; J++) {
        var G = H.buttons[J], M = myui.MessageBox.buttonText[G];
        if (!M)
          M = G;
        var A = new myui.Button();
        A.setText(M);
        A.setWidth(H.buttonWidth);
        A.render(R);
        A.action = G;
        A.on("click", function(B) {
          var A = B.sender;
          if (K)
            K(A.action);
          myui.MessageBox.hide(E)
        });
        if (J != F - 1)
          A.setStyle(H.spaceStyle);
        E._Buttons.push(A)
      }
    } else
      R.style.display = "none";
    E.setMinWidth(H.minWidth);
    E.setMinHeight(H.minHeight);
    E.setMaxWidth(H.maxWidth);
    E.setMaxHeight(H.maxHeight);
    E.setWidth(H.width);
    E.setHeight(H.height);
    E.show();
    var C = E.getWidth();
    E.setWidth(C);
    var D = document.getElementById(L);
    if (D)
      D.style.width = "100%";
    var I = document.getElementById(P);
    if (I)
      I.style.width = "100%";
    var Q = E._Buttons[0];
    if (Q)
      Q.focus();
    else
      E.focus();
    E.on("beforebuttonclick", function(A) {
      if (K)
        K("close");
      A.cancel = true;
      myui.MessageBox.hide(E)
    });
    myui.on(E.el, "keydown", function(A) {
      if (A.keyCode == 27) {
        if (K)
          K("close");
        A.cancel = true;
        myui.MessageBox.hide(E)
      }
    });
    return E.uid
  },
  hide : function(E) {
    if (!E)
      return;
    var B = typeof E == "object" ? E : myui.getbyUID(E);
    if (!B)
      return;
    for ( var A = 0, C = B._Buttons.length; A < C; A++) {
      var D = B._Buttons[A];
      D.destroy()
    }
    B._Buttons = null;
    B.destroy()
  },
  alert : function(C, B, A) {
    return myui.MessageBox.show( {
      minWidth : 250,
      title : B || myui.MessageBox.alertTitle,
      buttons : [ "ok" ],
      message : C,
      iconCls : "mini-messagebox-warning",
      callback : A
    })
  },
  confirm : function(C, B, A) {
    return myui.MessageBox.show( {
      minWidth : 250,
      title : B || myui.MessageBox.confirmTitle,
      buttons : [ "ok", "cancel" ],
      message : C,
      iconCls : "mini-messagebox-question",
      callback : A
    })
  },
  prompt : function(E, D, C, B) {
    var H = "prompt$" + new Date().getTime(), G = E
        || myui.MessageBox.promptMessage;
    if (B)
      G = G
          + "<br/><textarea id=\""
          + H
          + "\" style=\"width:200px;height:60px;margin-top:3px;\"></textarea>";
    else
      G = G
          + "<br/><input id=\""
          + H
          + "\" type=\"text\" style=\"width:200px;margin-top:3px;\"/>";
    var F = myui.MessageBox.show( {
      title : D || myui.MessageBox.promptTitle,
      buttons : [ "ok", "cancel" ],
      width : 250,
      html : "<div style=\"padding:5px;padding-left:10px;\">" + G
          + "</div>",
      callback : function(B) {
        var A = document.getElementById(H);
        if (C)
          C(B, A.value)
      }
    }), A = document.getElementById(H);
    A.focus();
    return F
  },
  loading : function(B, A) {
    return myui.MessageBox.show( {
      minHeight : 50,
      title : A,
      showCloseButton : false,
      message : B,
      iconCls : "mini-messagebox-waiting"
    })
  }
};

