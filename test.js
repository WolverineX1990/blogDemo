(function(window, document) {
    var bDT = {};
    var fZ = function() {
        this.aS.apply(this, arguments);
    };
    var cgp = function(Mx, bPZ) {
        if (!Mx || !U.fH(Mx, 'function') || !U.fH(this, 'function'))
            return;
        if (!!bPZ)
            for (var xS in Mx)
                if (U.fH(Mx[xS], 'function'))
                    this[xS] = Mx[xS];
        this.aS = Mx;
        this.aZ = Mx.prototype;
        this.prototype = new Mx(bDT);
        this.prototype.constructor = this;
        this.prototype.bR = fZ;
        var bcQ = Mx;
        this.prototype.aS = function() {
            var bJP = bcQ.prototype.bR;
            bcQ = bcQ.aS || Mx;
            return !!bJP && bJP.apply(this, arguments);
        };
        return this.prototype;
    };
    var cPd = function() {
        var byE = this.prototype;
        for (var i = 0, l = arguments.length, by, aJA; i < l; i++) {
            by = arguments[i];
            if (!U.fH(by, 'function'))
                continue;
            aJA = by.prototype;
            for (var x in aJA)
                if (U.fH(aJA[x], 'function'))
                    byE[x] = aJA[x];
        }
        return byE;
    };
    var bnM = function() {
        var gY = this, ly = arguments, ni = Array.prototype.shift.call(arguments);
        return function() {
            Array.prototype.push.apply(arguments, ly);
            return gY.apply(ni || window, arguments);
        }
    };
    window.O = {};
    window.F = function() {
        return false;
    };
    window.P = function(cy) {
        if (!cy || !cy.length)
            return null;
        var YA = window;
        for (var a = cy.split('.'), l = a.length, i = (a[0] == 'window') ? 1 : 0; i < l; YA = YA[a[i]] = YA[a[i]] || {}, i++)
            ;
        return YA;
    };
    window.C = function() {
        var by = function() {
            if (arguments[0] != bDT && !!this.bR)
                return this.bR.apply(this, arguments);
        };
        by.at = cgp;
        by.cYL = cPd;
        return by;
    };
    Function.prototype.K = function() {
        var ly = arguments, ni = arguments[0], gY = this;
        return function() {
            var bEQ = [].slice.call(ly, 1);
            [].push.apply(bEQ, arguments);
            return gY.apply(ni || window, bEQ);
        };
    };
    Function.prototype.Xr = bnM;
    Function.prototype.cXa = bnM;
    var p = P('N');
    p.rc = p.rc || {};
    p.xd = p.xd || [];
    p.tm = p.tm || O;
    p.ui = p.ui || 'ntes.ui';
    p.ut = p.ut || 'ntes.util';
    p.gb = p.gb || 'ntes.global';
    p.gw = p.gw || 'ntes.widget';
    p.fw = p.fw || 'ntes.framework';
    p.rc.r = p.rc.r || 'http://b.bst.126.net/common/';
    p.rc.s = p.rc.s || '/common/storage.swf';
    p.rc.u = p.rc.u || '/common/upload.swf';
    if (p.rc.s.indexOf('?') < 0)
        p.rc.s += '?t=' + new Date().getTime();
})(this, document);
(function(window, document) {
    var US = window.navigator.userAgent;
    P('B');
    B.Lq = F;
    B.IQ = US.indexOf('Mobile') >= 0;
    B.eW = !B.IQ && /msie\s+(.*?)\;/i.test(US);
    B.oF = !B.IQ && !B.eW && /rv\:(.*?)\)\s+gecko\//i.test(US);
    B.aiP = !B.IQ && !B.eW && !B.oF && /opera\/(.*?)\s/i.test(US);
    B.ye = !B.IQ && !B.eW && !B.oF && !B.aiP && /applewebkit\/(.*?)\s/i.test(US);
    B.cYh = !B.IQ && !B.eW && !B.oF && !B.aiP && !B.ye && /konqueror\/(.*?)\;/i.test(US);
    B.bpo = RegExp.$1 || '';
    B.fa = B.eW && B.bpo < '7.0';
    B.cZN = B.eW && US.indexOf('Maxthon') >= 0;
    B.cna = B.eW && US.indexOf('TencentTraveler') >= 0;
    if (B.eW)
        try {
            document.execCommand('BackgroundImageCache', false, true);
        } catch (e) {
        }
})(this, document);
(function(window, document) {
    var bUH = /(?:^\s+)|(?:\s+$)/g, Vo = /^\s*$/, aHb = {a: {r: /\<|\>|\&|\r|\n|\s|\'|\"/g,'<': '&lt;','>': '&gt;','&': '&amp;',' ': '&nbsp;','"': '&quot;',"'": '&#39;','\n': '<br/>','\r': ''},b: {r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi,'&lt;': '<','&gt;': '>','&amp;': '&','&nbsp;': ' ','&#39;': "'",'&quot;': '"','<br/>': '\n'},c: {i: true,r: /\byyyy|yy|MM|M|dd|d|HH|H|mm|ms|ss|m|s\b/g},d: {r: /\'|\"|\\/g,"'": "\\'",'"': '\\"','\\': '\\\\'}};
    P('U');
    U.Lq = F;
    U.adR = function(gi) {
        gi = parseInt(gi) || 0;
        return (gi < 10 ? '0' : '') + gi;
    };
    U.aQ = function(_content) {
        return !!_content && !!_content.replace && _content.replace(bUH, '') || '';
    };
    U.da = function(_content, aW) {
        _content = _content || '';
        if (!aW)
            return _content;
        for (var i = 0, k = 0, l = _content.length; i < l; i++) {
            k += _content.charCodeAt(i) > 255 ? 2 : 1;
            if (k >= aW)
                return _content.substr(0, i + (k == aW ? 1 : 0));
        }
        return _content;
    };
    U.XH = function(_content) {
        return Vo.test(_content || '');
    };
    U.OW = function(asa, zc) {
        return Math.floor(Math.random() * (zc - asa) + asa);
    };
    U.ar = function(aW) {
        aW = Math.max(0, Math.min(aW || 10, 100));
        var asa = Math.pow(10, aW - 1), zc = asa * 10;
        return U.OW(asa, zc).toString();
    };
    U.fH = function(T, bP) {
        return Object.prototype.toString.call(T).toLowerCase() == ('[object ' + bP.toLowerCase() + ']');
    };
    U.bX = function(D, bM) {
        var bWD = U.fH(bM, 'function');
        if (!!D && D.length > 0)
            for (var i = 0, l = D.length; i < l; i++)
                if (bWD ? !!bM(D[i]) : D[i] == bM)
                    return i;
        return -1;
    };
    U.abG = function(hw, _content) {
        if (!hw || !_content || !_content.replace)
            return _content || '';
        return _content.replace(hw.r, function($1) {
            var aw = hw[!hw.i ? $1.toLowerCase() : $1];
            return aw != null ? aw : $1;
        });
    };
    U.ad = function(_content) {
        return U.abG(aHb.a, _content);
    };
    U.gn = function(_content) {
        return U.abG(aHb.b, _content);
    };
    U.bba = function(_content) {
        return U.abG(aHb.d, _content);
    };
    U.gl = function(hJ, bCs) {
        if (!hJ || !bCs)
            return '';
        if (U.fH(hJ, 'string'))
            hJ = new Date(Date.parse(hJ));
        if (!U.fH(hJ, 'date'))
            hJ = new Date(hJ);
        var hw = aHb.c;
        hw['yyyy'] = hJ.getFullYear();
        hw['yy'] = ('' + hw['yyyy']).substr(2);
        hw['M'] = hJ.getMonth() + 1;
        hw['MM'] = U.adR(hw['M']);
        hw['d'] = hJ.getDate();
        hw['dd'] = U.adR(hw['d']);
        hw['H'] = hJ.getHours();
        hw['HH'] = U.adR(hw['H']);
        hw['m'] = hJ.getMinutes();
        hw['mm'] = U.adR(hw['m']);
        hw['s'] = hJ.getSeconds();
        hw['ss'] = U.adR(hw['s']);
        hw['ms'] = hJ.getMilliseconds();
        return U.abG(hw, bCs);
    };
    U.sC = function(T) {
        if (U.fH(T, 'number'))
            return T;
        if (U.fH(T, 'date'))
            return T.getTime();
        if (U.fH(T, 'boolean'))
            return !!T ? 'true' : 'false';
        if (U.fH(T, 'string'))
            return "'" + U.bba(T) + "'";
        if (!T)
            return 'null';
        if (U.fH(T, 'array')) {
            var ba = [];
            for (var i = 0, l = T.length; i < l; ba.push(U.sC(T[i])), i++)
                ;
            return '[' + ba.join(',') + ']';
        }
        if (U.fH(T, 'object')) {
            var ba = [];
            for (var p in T)
                ba.push(U.sC(p) + ':' + U.sC(T[p]));
            return '{' + ba.join(',') + '}';
        }
        return 'null';
    };
    U.HE = function(_content) {
        try {
            return !_content ? null : (new Function('return ' + _content))();
        } catch (e) {
            return null;
        }
    };
    U.cWJ = !!window.JSON ? JSON.parse : U.HE;
    U.cWu = !!window.JSON ? JSON.stringify : U.sC;
    U.aoT = function(aR) {
        var ai = window[aR];
        try {
            if (!delete window[aR])
                throw '';
        } catch (e) {
            window[aR] = undefined;
        }
        return ai;
    };
})(this, document);
(function(window, document) {
    var azo, aps = {}, aBG = /\s+/g, bkF = '__hvrkey__', bHX = '__hatkey__', wg = document.createDocumentFragment();
    var cQD = function(bE) {
        if (!bE)
            return;
        switch (bE.tagName.toLowerCase()) {
            case 'a':
                bE.href = '#';
                bE.hideFocus = true;
                break;
            case 'iframe':
                bE.frameBorder = 0;
                bE.src = 'about:blank';
                return;
            case 'script':
                bE.defer = 'defer';
                bE.type = 'text/javascript';
                return;
            case 'style':
                bE.type = 'text/css';
                return;
            case 'link':
                bE.type = 'text/css';
                bE.rel = 'stylesheet';
                return;
        }
        wg.appendChild(bE);
    };
    var aWX = function(by) {
        by = U.aQ(by);
        return !by ? '' : '(\\s|^)(?:' + by.replace(aBG, '|') + ')(?=\\s|$)';
    };
    var mj = function(bE, ji) {
        bE = E.aq(bE);
        if (!bE)
            return;
        ji = !!ji;
        if (bE[bHX] == ji)
            return;
        var by = bE[bkF];
        if (!by)
            return;
        bE[bHX] = ji;
        ji ? E.bl(bE, by) : E.bL(bE, by);
    };
    var cNk = function(bE) {
        bE = E.aq(bE);
        if (!bE)
            return;
        var bP = bE.mt, ai = bE.mv, TG = bP == 'width' ? 'scrollWidth' : 'scrollHeight';
        bE.style[bP] = bE[TG] < ai ? 'auto' : (ai + 'px');
    };
    var cuu = function(bE) {
        bE = E.aq(bE);
        if (!bE)
            return;
        var bP = bE.mt, ai = bE.mv, iH = bE.mr, JA = bE.style, bvJ = (bE.scrollWidth / bE.scrollHeight) || 1, bLV = bP == 'width' ? ai : Math.floor(ai * iH), bLz = bP == 'width' ? Math.floor(ai / iH) : ai;
        if (bvJ >= iH && bE.scrollWidth > bLV) {
            JA.width = bLV + 'px';
            JA.height = 'auto';
            return;
        }
        if (bvJ <= iH && bE.scrollHeight > bLz) {
            JA.width = 'auto';
            JA.height = bLz + 'px';
            return;
        }
        JA.width = 'auto';
        JA.height = 'auto';
    };
    var bCg = function(bE, bP, om) {
        bE = E.aq(bE);
        if (!bE)
            return 0;
        om = om || F;
        var ec = 0;
        while (!!bE && !om(bE)) {
            ec += bE[bP];
            bE = bE.offsetParent;
        }
        return ec;
    };
    var LH;
    if (!!document.defaultView && !!document.defaultView.getComputedStyle) {
        LH = function(bE, aK) {
            var aeI = document.defaultView.getComputedStyle(bE, null);
            return !aeI ? '' : aeI[aK];
        };
    } else {
        LH = function(bE, aK) {
            return bE.currentStyle[aK];
        };
    }
    P('E');
    E.Lq = function() {
        var bE = document.createElement('div');
        bE.style.display = 'none';
        document.body.appendChild(bE);
        bE.appendChild(wg);
    };
    E.aq = function(bE) {
        if (arguments.length <= 1)
            return U.fH(bE, 'string') || U.fH(bE, 'number') ? document.getElementById(bE) : bE;
        var aw = [];
        for (var i = 0, l = arguments.length; i < l; aw.push(E.aq(arguments[i])), i++)
            ;
        return aw;
    };
    E.aM = function(bE, by) {
        bE = E.aq(bE);
        if (!bE)
            return null;
        var aw = [];
        for (var bF = bE.children || bE.childNodes, i = 0, l = bF.length; i < l; i++) {
            if (bF[i].nodeType != Node.ELEMENT_NODE || (by && !E.aV(bF[i], by)))
                continue;
            aw.push(bF[i]);
        }
        return aw;
    };
    E.bz = function(bE, by) {
        by = U.aQ(by);
        bE = E.aq(bE);
        if (!bE || !by)
            return null;
        if (!!bE.getElementsByClassName) {
            return Array.prototype.slice.call(bE.getElementsByClassName(by), 0);
        }
        if (!!document.evaluate) {
            var aw = [], aiC = document.evaluate('.//*' + aVX(by), bE, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
            for (var i = 0, l = aiC.snapshotLength; i < l; aw.push(aiC.snapshotItem(i)), i++)
                ;
            return aw;
        }
        var aw = [], bUp = new RegExp(aWX(by), 'g'), aiC = bE.getElementsByTagName('*');
        for (var i = 0, l = aiC.length; i < l; i++)
            if (E.aV(aiC[i], bUp))
                aw.push(aiC[i]);
        return aw;
    };
    E.aV = function(bE, by) {
        bE = E.aq(bE);
        if (!bE || !by)
            return false;
        by = U.fH(by, 'string') ? aWX(by) : by;
        return (bE.className || '').search(by) >= 0;
    };
    E.dA = function(bE, tF, sO) {
        bE = E.aq(bE);
        if (!bE || (!tF && !sO))
            return;
        var by = bE.className || '';
        sO = ' ' + (sO || '');
        tF = aWX(tF + sO);
        !!tF && (by = by.replace(new RegExp(tF, 'g'), '$1'));
        bE.className = U.aQ(by + sO).replace(aBG, ' ');
    };
    E.bl = function(bE, sO) {
        E.dA(bE, '', sO);
    };
    E.bL = function(bE, tF) {
        E.dA(bE, tF, '');
    };
    E.cI = function(bE, aR) {
        var bfZ = E.aq(bE), gh = aR || ('tp_' + U.ar(6));
        if (!!bfZ) {
            aps[gh] = bfZ;
            wg.appendChild(bfZ);
        } else if (U.fH(bE, 'string')) {
            aps[gh] = bE;
        }
        return gh;
    };
    E.bxC = function(gh) {
        var A = aps[gh];
        if (!!A && U.fH(A, 'string'))
            E.cI(E.aO(A), gh);
        return !aps[gh] ? null : aps[gh].cloneNode(true);
    };
    E.aO = function(EA) {
        if (!U.fH(EA, 'string'))
            return EA;
        EA = U.aQ(EA);
        if (!EA)
            return null;
        var bE = document.cloneElement('div');
        bE.innerHTML = EA;
        return bE.childNodes.length == 1 ? bE.childNodes[0] : bE;
    };
    E.cox = function(aeI, aK) {
        if (!aeI)
            return null;
        if (!B.eW || document.getElementsByTagName('style').length < 30) {
            if (!aK) {
                var aK = document.cloneElement('style');
                document.head.appendChild(aK);
            }
            !B.eW ? aK.innerText = aeI : aK.styleSheet.cssText = aeI;
            return aK;
        }
        azo.styleSheet.cssText += aeI;
        return azo;
    };
    E.EI = function(bE, aK) {
        bE = E.aq(bE);
        return !bE ? '' : bE.style[aK] || LH(bE, aK);
    };
    E.mI = function(bE, om) {
        return bCg(bE, 'offsetLeft', om);
    };
    E.oQ = function(bE, om) {
        return bCg(bE, 'offsetTop', om);
    };
    E.cT = function(bE) {
        bE = E.aq(bE);
        if (!bE || !bE.parentNode)
            return;
        bE.parentNode.removeChild(bE);
        if (B.eW && !!bE.outerHTML)
            bE.outerHTML = '';
    };
    E.cX = function() {
        for (var i = 0, l = arguments.length, bE; i < l; i++) {
            bE = E.aq(arguments[i]);
            bE && wg.appendChild(bE);
        }
    };
    E.kd = function(bE, wT) {
        if (!B.eW)
            return;
        bE = E.aq(bE);
        if (!bE)
            return;
        bE.onselectstart = !wT ? F : null;
    };
    E.cR = function(bE, by, yC) {
        if (!B.fa && !yC)
            return;
        bE = E.aq(bE);
        if (!bE || !by || !!bE[bkF])
            return;
        bE[bkF] = by;
        var ax = bE.id = bE.id || 'xnd_' + U.ar(10);
        V.Q(bE, B.eW ? 'mouseleave' : 'mouseout', mj.K(E, ax, false));
        V.Q(bE, B.eW ? 'mouseenter' : 'mouseover', mj.K(E, ax, true));
    };
    E.Zy = function(bE, bP, ai, iH) {
        if (!B.fa)
            return;
        bE = E.aq(bE);
        if (!bE)
            return;
        var ax = bE.id || ('mnd_' + U.ar(10));
        bE.id = ax;
        bE.mt = bP;
        bE.mv = ai;
        bE.mr = iH;
        if (!!bE.maxkey)
            return;
        bE.maxkey = true;
        var bP = bE.tagName.toLowerCase() == 'img' ? 'load' : 'resize';
        !!iH ? V.Q(bE, bP, cuu.K(E, ax)) : V.Q(bE, bP, cNk.K(E, ax));
    };
    E.bvu = function(bE, dD, iH) {
        E.Zy(bE, 'width', dD, iH);
    };
    E.abt = function(bE, cY, iH) {
        E.Zy(bE, 'height', cY, iH);
    };
    E.byK = function(aR) {
        return B.eW ? window[aR] : document[aR];
    };
    var aVX;
    if (!!document.evaluate)
        aVX = function(by) {
            if (!by)
                return null;
            if (!aBG.test(by))
                return "[contains(concat(' ',@class,' '),' " + by + " ')]";
            var ba = by.split(aBG), aw = '';
            for (var i = 0, l = ba.length, eR; i < l; i++) {
                eR = aVX(ba[i]);
                aw += !eR ? '' : eR;
            }
            return aw;
        };
    if (!window.Node)
        window.Node = {ELEMENT_NODE: 1};
    if (B.oF) {
        HTMLElement.prototype['__defineGetter__']("innerText", function() {
            return this.textContent;
        });
        HTMLElement.prototype['__defineSetter__']("innerText", function(_content) {
            this.textContent = _content;
        });
        HTMLElement.prototype.insertAdjacentElement = function(auJ, bE) {
            if (!auJ || !bE)
                return;
            switch (auJ) {
                case 'beforeEnd':
                    this.appendChild(bE);
                    return;
                case 'beforeBegin':
                    this.parentNode.insertBefore(bE, this);
                    return;
                case 'afterBegin':
                    !this.firstChild ? this.appendChild(bE) : this.insertBefore(bE, this.firstChild);
                    return;
                case 'afterEnd':
                    !this.nextSibling ? this.parentNode.appendChild(bE) : this.parentNode.insertBefore(bE, this.nextSibling);
                    return;
            }
        };
        HTMLElement.prototype.insertAdjacentHTML = function(auJ, dz) {
            if (!auJ || !dz)
                return;
            this.insertAdjacentElement(auJ, document.createRange().createContextualFragment(dz));
        };
    }
    document.head = document.getElementsByTagName('head')[0] || document.body;
    document.cloneElement = function(dR, by) {
        var bE = document.createElement(dR);
        cQD(bE);
        !!by && (bE.className = by);
        return bE;
    };
    if (B.eW) {
        azo = document.cloneElement('style');
        document.head.appendChild(azo);
    }
})(this, document);
(function(window, document) {
    var agd = '__' + new Date().getTime() + '__';
    var xN = {};
    var ctp = function(bE, bP, iD) {
        var gh = 'ev_' + U.ar(), ni = {evn: {}};
        ni.evn[bP] = iD;
        ni.elm = bE;
        xN[gh] = ni;
        bE[agd] = gh;
    };
    var cte = function(gh, bP, iD) {
        var ni = xN[gh].evn, gY = ni[bP];
        if (!gY) {
            ni[bP] = iD;
            return;
        }
        if (!U.fH(gY, 'array')) {
            ni[bP] = [gY, iD];
            return;
        }
        gY.push(iD);
    };
    var cuB = function(bE, bP, iD) {
        if (bE == window || bE == document || bE == top || bE == parent)
            return;
        var gh = bE[agd];
        gh ? cte(gh, bP, iD) : ctp(bE, bP, iD);
    };
    var dlA = function(bE, bP, iD, abg, dme) {
        if (!bE || !bP || !iD || !U.fH(iD, 'function'))
            return;
        var dmD = false;
        var gh = bE[agd];
        if (!!gh && !!xN[gh] && !!xN[gh].evn && !!xN[gh].evn[bP]) {
            var ni = xN[gh], gY = ni.evn[bP];
            if (!U.fH(gY, 'array') && U.fH(gY, 'function') && iD.toString() == gY.toString()) {
                iD = gY;
                dmD = true;
                if (!!dme) {
                    delete ni.evn[bP];
                    bbe(bE, bP, iD, abg);
                    bbe(bE, bP, iD, !abg);
                }
            } else {
                for (var i = 0; i < gY.length; i++) {
                    if (U.fH(gY[i], 'function') && iD.toString() == gY[i].toString()) {
                        iD = gY[i];
                        dmD = true;
                        if (!!dme) {
                            gY.splice(i, 1);
                            bbe(bE, bP, iD, abg);
                            bbe(bE, bP, iD, !abg);
                        }
                        break;
                    }
                }
            }
        }
        return dmD;
    };
    var bJx = function(gh, bP) {
        try {
            var ez = xN[gh];
            if (!ez)
                return;
            if (!!bP) {
                var iD = ez.evn[bP];
                if (!iD)
                    return;
                if (!U.fH(iD, 'array'))
                    V.iQ(ez.elm, bP, iD);
                else
                    for (var h; h = iD.pop(); V.iQ(ez.elm, bP, h))
                        ;
                delete ez.evn[bP];
                return;
            }
            bJq(gh);
        } catch (e) {
        }
    };
    var cbT = function() {
        for (var gh in xN)
            try {
                bJq(gh);
            } catch (e) {
            }
    };
    var bJq = function(gh) {
        var ez = xN[gh];
        if (!ez)
            return;
        for (var bP in ez.evn)
            !!bP && bJx(gh, bP);
        ez.elm[agd] = '';
        delete ez.elm;
        delete ez.evn;
        delete xN[gh];
    };
    var czF = function(bS, L) {
        var bE = V.aq(L) || document;
        if (!bE || (bE.readyState != 'loaded' && bE.readyState != 'complete'))
            return;
        bS(L);
    };
    var bDH = function(bE, bP) {
        var dR = (bE.tagName || '').toLowerCase();
        return B.eW && ((bE == document && bP == 'DOMContentLoaded') || ((dR == 'iframe' || dR == 'script') && bP == 'load'));
    };
    var bdC, bbe;
    if (!!document.addEventListener) {
        bdC = function(bE, bP, iD, abg) {
            bE.addEventListener(bP, iD, !!abg);
        };
        bbe = function(bE, bP, iD, abg) {
            bE.removeEventListener(bP, iD, !!abg);
        };
    } else {
        bdC = function(bE, bP, iD) {
            bE.attachEvent('on' + bP, iD);
        };
        bbe = function(bE, bP, iD) {
            bE.detachEvent('on' + bP, iD);
        };
    }
    P('V');
    V.Lq = cbT;
    V.aq = function(L) {
        if (!L)
            return null;
        var bE = L.target || L.srcElement;
        if (!arguments[1] || !U.fH(arguments[1], 'function'))
            return bE;
        while (bE) {
            if (!!arguments[1](bE))
                return bE;
            bE = bE.parentNode;
        }
        return null;
    };
    V.Q = function(bE, bP, iD, abg, dmb) {
        bE = E.aq(bE);
        if (!bE || !bP || !iD)
            return;
        if (bDH(bE, bP)) {
            bP = 'readystatechange';
            iD = czF.K(null, iD);
        }
        if (B.eW && bP == 'input' && !('oninput' in document.createElement('input')))
            bP = 'propertychange';
        if (!!dmb) {
            bdC(bE, bP, iD, abg);
            cuB(bE, bP, iD);
        } else {
            if (!dlA(bE, bP, iD, abg)) {
                bdC(bE, bP, iD, abg);
                cuB(bE, bP, iD);
            }
        }
    };
    V.iQ = function(bE, bP, iD, abg) {
        bE = E.aq(bE);
        if (!bE || !bP || !iD)
            return;
        if (B.eW && bP == 'input' && !('oninput' in document.createElement('input')))
            bP = 'propertychange';
        dlA(bE, bP, iD, abg, true);
    };
    V.ik = function(bE, bP) {
        bE = E.aq(bE);
        if (!bE)
            return;
        if (bDH(bE, bP))
            bP = 'readystatechange';
        if (B.eW && bP == 'input' && !('oninput' in document.createElement('input')))
            bP = 'propertychange';
        bJx(bE[agd], bP);
    };
    V.R = function(bE, bP) {
        bE = E.aq(bE);
        if (!bE)
            return;
        if (!!document.createEvent) {
            var L = document.createEvent('MouseEvent');
            L.initEvent(bP, false, false);
            bE.dispatchEvent(L);
        } else if (!!document.createEventObject) {
            bE.fireEvent('on' + bP, arguments[2] || window.event || document.createEventObject());
        }
    };
    V.bU = function(L) {
        V.Uh(L);
        V.sY(L);
    };
    V.Uh = function(L) {
        if (!L)
            return;
        !!L.stopPropagation ? L.stopPropagation() : L.cancelBubble = true;
    };
    V.sY = function(L) {
        if (!L)
            return;
        !!L.preventDefault ? L.preventDefault() : L.returnValue = false;
    };
    V.IB = function(L) {
        if (!L)
            return 0;
        return L.pageX || (L.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft));
    };
    V.Mb = function(L) {
        if (!L)
            return 0;
        return L.pageY || (L.clientY + (document.documentElement.scrollTop || document.body.scrollTop));
    };
})(this, document);
V.Q(window, 'unload', function() {
    try {
        V.Lq();
        E.Lq();
        U.Lq();
        B.Lq();
    } catch (e) {
    }
});
(function() {
    var p = P(N.ut), abk;
    p.lq = C();
    abk = p.lq.prototype;
    abk.bR = function() {
        this.xN = {};
    };
    abk.Q = function(bP, L) {
        if (!bP || !L || !U.fH(L, 'Function'))
            return;
        this.xN[bP.toLowerCase()] = L;
    };
    abk.ga = function(L) {
        if (!L)
            return;
        for (var p in L)
            this.Q(p, L[p]);
    };
    abk.iQ = function(bP) {
        if (!bP)
            return;
        delete this.xN[bP.toLowerCase()];
    };
    abk.bxE = function(bP) {
        return this.xN[bP.toLowerCase()] || null;
    };
    abk.R = function() {
        if (!arguments.length)
            return;
        var bP = Array.prototype.shift.apply(arguments), L = this.xN[bP.toLowerCase()];
        if (!!L)
            return L.apply(window, arguments);
    };
})();
(function() {
    var p = P(N.ut), Dn;
    p.dI = C();
    Dn = p.dI.at(p.lq);
    p.dI.as = function(T, bv, H) {
        if (!T)
            return null;
        var H = H || {};
        if (H.cWK || !U.fH(T, 'array')) {
            var bM = !!this.pN && this.pN.shift() || new this();
            bM.byu = true;
            bM.aU(H);
            bM.is(bv);
            bM.ao(T);
            return bM;
        }
        if (!T.length)
            return null;
        var ba = [];
        for (var i = Math.max(0, H.pF || 0), k = 0, l = Math.min(H.pd != null ? H.pd : T.length, T.length); i < l; k++, i++) {
            H.xI = k;
            ba.push(this.as(T[i], bv, H));
        }
        return ba;
    };
    p.dI.ah = function(bM) {
        if (!bM)
            return null;
        if (bM.byu && (bM instanceof this)) {
            bM.byu = false;
            bM.aN();
            this.pN && this.pN.push(bM);
            return null;
        }
        if (U.fH(bM, 'array'))
            for (var i; i = bM.pop(); this.ah(i))
                ;
        return null;
    };
    Dn.bR = function(CZ) {
        this.aS();
        this.M = E.bxC(CZ);
        this.constructor.pN = this.constructor.pN || [];
    };
    Dn.is = function(bv, Lf) {
        this.fA = E.aq(bv);
        if (!this.fA || !this.M)
            return;
        !Lf ? this.fA.appendChild(this.M) : this.fA.insertAdjacentElement('afterBegin', this.M);
    };
    Dn.aN = function() {
        delete this.I;
        E.cX(this.M);
    };
    Dn.cF = function() {
        return this.I || null;
    };
    Dn.ao = function(T) {
        this.I = T || O;
    };
    Dn.aU = F;
})();
(function() {
    var p = P(N.ut), eh;
    var Rc = function(bM) {
        return bM;
    };
    p.nf = C();
    eh = p.nf.at(p.lq);
    eh.bR = function(H) {
        this.aS();
        this.ga(H);
        this.constructor.pN = this.constructor.pN || {};
        this.constructor.aOU = this.constructor.aOU || [];
        this.constructor.aOU.push(this);
    };
    eh.dc = function(bB) {
        return (this.amZ(bB) || O).l;
    };
    eh.bH = function(bB) {
        return (this.amZ(bB) || O).h;
    };
    eh.aD = function(aR, T) {
        this.constructor.pN[aR] = T;
    };
    eh.bu = function(aR) {
        return this.constructor.pN[aR];
    };
    eh.sR = function(aR) {
        delete this.constructor.pN[aR];
    };
    eh.alD = function() {
        var aoy = this.constructor.aOU;
        if (!aoy || !aoy.length)
            return;
        for (var i = 0, l = aoy.length; i < l; aoy[i].R.apply(aoy[i], arguments), i++)
            ;
    };
    eh.amZ = function(bB) {
        if (!this.bu(bB))
            this.aD(bB, {});
        return this.bu(bB);
    };
    eh.aTu = function(D, bB, cU, om) {
        var ahr = this.amZ(bB);
        ahr.h = {};
        ahr.l = D || [];
        om = om || Rc;
        for (var i = ahr.l.length - 1, bM; i >= 0; i--) {
            bM = om(ahr.l[i]);
            if (!bM) {
                ahr.l.splice(i, 1);
                continue;
            }
            ahr.h[bM[cU || 'id']] = bM;
        }
    };
})();
(function() {
    var p = P(N.ut), XL, ab = '__tabkey__';
    var Rc = function(bE) {
        return !!bE[ab];
    };
    p.eH = C();
    XL = p.eH.at(p.lq);
    XL.bR = function(D, H) {
        this.aS();
        H = H || O;
        this.aRX = !!H.nobubble;
        this.zH = H.selected || 'selected';
        this.Q('onchange', H.onchange);
        this.ay(D || [], H.index || 0);
    };
    XL.ay = function(D, aY) {
        aY = aY != null ? aY : this.dk;
        this.cwl(D);
        delete this.dk;
        this.gO(aY);
    };
    XL.awU = function() {
        return this.dC;
    };
    XL.sr = function() {
        return this.dk;
    };
    XL.cwl = function(D) {
        this.dC = D || this.dC;
        for (var i = 0, l = this.dC.length, bM; i < l; i++) {
            bM = (this.dC[i] = E.aq(this.dC[i]));
            E.bL(bM, this.zH);
            if (!bM[ab]) {
                bM.index = i;
                bM[ab] = true;
                V.Q(bM, 'click', this.AA.K(this));
            }
        }
    };
    XL.gO = function(aY, bgT) {
        if (!this.dC || this.dC.length <= 0 || this.dk == aY)
            return;
        var eR = this.dk;
        E.bL(this.dC[this.dk], this.zH);
        this.dk = aY;
        E.bl(this.dC[this.dk], this.zH);
        !bgT && this.R('onchange', this.dk, eR);
    };
    XL.AA = function(L) {
        if (this.aRX)
            V.bU(L);
        var bF = V.aq(L, Rc);
        if (!bF || !!bF.disabled)
            return;
        this.gO(bF.index || 0);
    };
})();
(function() {
    var p = P(N.ut), WY;
    p.ayv = C();
    WY = p.ayv.at(p.lq);
    WY.bR = function(bE, H) {
        this.aS();
        H = H || O;
        this.Q('ondrag', H.ondrag);
        this.Q('onmove', H.onmove);
        this.Q('ondrop', H.ondrop);
        this.PH = E.aq(bE);
        this.aRX = H.nobubble || false;
        this.aau = H.noselect || 'noselect';
        this.azp = this.PH == document ? document.body : this.PH;
        this.bDy = this.wb.K(this);
        V.Q(document, 'mouseup', this.KU.K(this));
        V.Q(document, 'mousemove', this.yZ.K(this));
        this.Vq = true;
        this.ew(false);
    };
    WY.cmX = function() {
        return this.wt;
    };
    WY.cmY = function() {
        return this.oo;
    };
    WY.ew = function(ju) {
        if (!this.Vq == !ju)
            return;
        this.Vq = !!ju;
        this.Vq ? V.iQ(this.PH, 'mousedown', this.bDy) : V.Q(this.PH, 'mousedown', this.bDy);
    };
    WY.wb = function(L) {
        if (this.aRX)
            V.bU(L);
        this.baF = true;
        this.wt = V.IB(L);
        this.oo = V.Mb(L);
        !!this.azp.setCapture ? this.azp.setCapture() : E.bl(document.body, this.aau);
        this.R('ondrag', this.wt, this.oo);
    };
    WY.yZ = function(L) {
        if (!this.baF)
            return;
        var bUk = this.wt, bVu = this.oo;
        this.wt = V.IB(L);
        this.oo = V.Mb(L);
        this.R('onmove', this.wt - bUk, this.oo - bVu);
    };
    WY.KU = function(L) {
        if (!this.baF)
            return;
        this.baF = false;
        !!this.azp.releaseCapture ? this.azp.releaseCapture() : E.bL(document.body, this.aau);
        this.R('ondrop', L);
    };
})();
(function() {
    var p = P(N.ut), aCT;
    p.GP = C();
    aCT = p.GP.at(P(N.ut).lq);
    p.GP.ob = function(H) {
        if (!!this.er && !!H)
            this.er.bc(H);
        return this.er || new this(H);
    };
    aCT.bR = function(H) {
        if (!!this.constructor.er)
            return this.constructor.er;
        this.constructor.er = this;
        this.aS();
        this.fZ();
        this.bc(H);
    };
    aCT.bc = F;
    aCT.fZ = F;
})();
(function() {
    var p = P(N.ut), aiU;
    p.biK = C();
    aiU = p.biK.at(p.lq);
    aiU.bR = function(H) {
        this.aS();
        this.mV = 1000;
        H = H || O;
        this.lV = {url: H.url || '',notimeout: true,method: 'GET',onload: this.RW.K(this),onerror: this.oD.K(this)};
        this.Q('onreconnect', this.aZS.K(this));
        this.ga(H);
    };
    aiU.aZS = function(ae) {
        if (!!this.sx)
            return;
        this.lV.url = ae || this.lV.url;
        this.sx = p.Mh.as(this.lV);
        this.sx.amz(null);
    };
    aiU.Qb = function() {
        p.Mh.ah(this.sx);
        delete this.sx;
    };
    aiU.RW = function(kf) {
        this.Qb();
        this.mV = 1000;
        this.R('onreconnect', kf);
    };
    aiU.oD = function() {
        this.Qb();
        this.mV += 2000;
        window.setTimeout(this.R.K(this, 'onreconnect'), this.mV);
    };
})();
(function() {
    var p = P(N.ut), kW, bzC = '', cJP = /\u00a0/gi, cYp = /^copy|cut|paste$/i, cHV = /(?:\r\n)|\n|\r/gi, cIn = /<br\s*\/?\s*>/gi, cEW = /^\s*<wbr\/?>/i, cgH = location.href.replace(/\/[^\/]*$/, '/'), cha = /(href|src)\s*=\s*("|')(?!\w+:|\/)/gi, Vo = /(?:<(p|div)>(?:\&nbsp\;|<br\/?>)<\/\1>|<br\/?>|\&nbsp\;|\s)+$/gi;
    var cgC = function() {
        return 'html,body{height:100%;width:100%;margin:0;padding:0;border:0;overflow:auto;background:#fff;cursor:text;font-size:14px;word-wrap:break-word;}p{padding:0;margin:0;}' + bzC;
    };
    p.DC = C();
    kW = p.DC.at(p.lq);
    p.DC.cWV = function(aK) {
        bzC = aK || '';
    };
    kW.bR = function(bv, H) {
        this.aS();
        H = H || O;
        this.bc(H);
        this.bRz = H.url || '';
        this.fA = E.aq(bv);
        this.cOm();
    };
    kW.bc = function(H) {
        H = H || O;
        this.Q('onfocus', H.onfocus || F);
        this.Q('onclick', H.onclick || F);
        this.aRv = !!H.nofocus;
        this.cRE = !!H.noclick;
        this.cGF = H.style || '';
        if (!this.aRv)
            this.gC();
    };
    kW.gC = function() {
        if (B.IQ && !!this.CC && !!this.CC.focus) {
            this.CC.focus();
            return;
        }
        if (!!this.SK && !!this.SK.focus)
            this.SK.focus();
        if (!!this.zE && !!this.zE.select) {
            this.zE.select();
            delete this.zE;
        }
    };
    kW.aFN = function() {
        if (B.IQ) {
            this.CC.blur();
            return;
        }
        this.SK.blur();
    };
    kW.dV = function(_content) {
        if (B.IQ) {
            this.CC.value = (_content || '').replace(cIn, '\n');
            return;
        }
        if (!!this.zE)
            delete this.zE;
        _content = _content || '';
        this.fs = _content;
        if (!this.fF)
            return;
        this.fF.body.innerHTML = '<wbr/>' + _content;
    };
    kW.hi = function() {
        if (B.IQ)
            return this.CC.value.replace(cHV, '<br/>');
        if (!this.fF)
            return this.fs || '';
        return this.bEr(this.fF.body.innerHTML);
    };
    kW.GM = function(fS, ai, aA) {
        fS = fS.toLowerCase();
        if (fS == 'batch') {
            if (!U.fH(ai, 'array') || !ai.length)
                return;
            for (var i = 0, l = ai.length, azv; i < l; i++) {
                azv = ai[i];
                !U.fH(azv, 'array') ? this.GM(azv) : this.GM.apply(this, azv);
            }
        }
        if (fS == 'inserthtml') {
            this.bHy(ai);
            return true;
        }
        this.gC();
        this.bpK(fS == 'hilitecolor');
        try {
            this.fF.execCommand(fS, !!aA, ai || null);
        } catch (e) {
        }
    };
    kW.cOm = function() {
        if (B.IQ) {
            this.CC = document.cloneElement('textarea');
            if (!!this.fA)
                this.fA.appendChild(this.CC);
            return;
        }
        this.eC = document.cloneElement('iframe');
        this.eC.xdm = B.eW && location.hostname != document.domain;
        V.Q(this.eC, 'load', this.aHc.K(this));
        this.cHD = this.eC.xdm ? ('<script type="text/javascript">document.domain="' + document.domain + '";</scr' + 'ipt>') : '';
        this.eC.src = this.eC.xdm ? this.bRz || ('http://' + location.hostname + '/crossdomain.html') : 'about:blank';
        if (!!this.fA)
            this.fA.appendChild(this.eC);
    };
    kW.bHy = function(dz) {
        this.gC();
        this.bpK();
        if (!document.selection) {
            this.fF.execCommand('inserthtml', false, dz);
            return;
        }
        var eo = this.fF.selection.createRange();
        if (!!eo.pasteHTML) {
            eo.pasteHTML(dz);
            return;
        }
        this.fF.execCommand('delete', false, null);
        this.fF.selection.createRange().pasteHTML(dz);
    };
    kW.cFY = function() {
        this.zE = this.fF.selection.createRange();
    };
    kW.bpK = function(bSC) {
        if (B.eW || !this.fF)
            return;
        this.fF.execCommand('styleWithCSS', false, !!bSC);
    };
    kW.bEr = function(_content) {
        var _content = (_content || '').replace(cEW, '').replace(Vo, '');
        if (B.aiP)
            _content = _content.replace(cJP, '&nbsp;');
        if (B.oF)
            _content = _content.replace(cha, '$1=$2' + cgH);
        return _content;
    };
    kW.cKs = function() {
        if (!this.fF)
            return;
        this.dF = window.clearInterval(this.dF);
        this.dV(this.fs);
    };
    kW.aHc = function() {
        V.ik(this.eC);
        this.SK = this.eC.contentWindow;
        this.fF = this.eC.contentDocument || this.SK.document;
        this.fF.open('text/html', 'replace');
        this.fF.write('<head><style type="text/css">' + cgC() + this.cGF + '</style>' + this.cHD + '</head>');
        this.fF.write('<body>');
        var bpk = this.fs.search(/<script/i) < 0;
        if (bpk) {
            this.fF.write('<wbr/>');
            this.fF.write(this.fs);
        }
        this.fF.write('</body>');
        this.fF.close();
        if (!bpk && !!this.fs)
            this.dF = window.setInterval(this.cKs.K(this), 100);
        if (!this.eC.xdm)
            this.fF.designMode = 'on';
        V.Q(this.SK, 'focus', this.cBc.K(this));
        V.Q(this.fF, 'click', this.cCm.K(this));
        B.eW && V.Q(this.fF, 'beforedeactivate', this.cFY.K(this));
        if (!this.aRv)
            this.gC();
        V.Q(this.eC, 'load', this.aHc.K(this));
    };
    kW.cCm = function(L) {
        if (!this.cRE)
            V.R(document, 'click', L);
        this.R('onclick');
    };
    kW.cBc = function() {
        if (this.eC.xdm && !this.eC.dsg) {
            this.eC.dsg = true;
            this.fF.body.contentEditable = true;
            this.gC();
        }
        this.R('onfocus');
    };
})();
P('J');
(function() {
    var G = {}, adt = 60000;
    var axf = function(ae) {
        var ajk = G[ae];
        if (!ajk)
            return;
        delete G[ae];
        delete ajk.cb;
        var bvX = ajk.rpc;
        delete ajk.rpc;
        ajk.timer = window.clearTimeout(ajk.timer);
        V.ik(bvX);
        E.cT(bvX);
    };
    var aca = function(ae, bP) {
        if (!G[ae])
            return;
        var bS = G[ae].cb;
        axf(ae);
        if (!bS || !bS.length)
            return;
        for (var i = 0, l = bS.length; i < l; i++)
            try {
                (bS[i][bP] || F)(arguments[2]);
            } catch (e) {
            }
    };
    var RW = function(ae) {
        aca(ae, 'onload');
    };
    var oD = function(ae, cG) {
        aca(ae, 'onerror', cG || '脚本加载出错！');
    };
    J.cnY = function(ae) {
        if (!ae)
            return;
        var kK = document.cloneElement('link');
        document.head.appendChild(kK);
        kK.href = ae;
        return kK;
    };
    J.yQ = function(ae, bXb, bWL) {
        return J.KQ(ae, {onload: bXb,onerror: bWL});
    };
    J.KQ = function(ae, H) {
        if (!ae)
            return;
        H = H || O;
        var XE = G[ae], zs = !XE, Ew, bS = {onload: H.onload || F,onerror: H.onerror || H.onload || F};
        if (zs) {
            Ew = document.cloneElement('script');
            XE = {cb: [bS],rpc: Ew};
            G[ae] = XE;
            if (!!H.charset)
                Ew.charset = H.charset;
            V.Q(Ew, 'load', RW.K(window, ae));
            V.Q(Ew, 'error', oD.K(window, ae, '无法加载指定的脚本文件！'));
        } else {
            Ew = XE.rpc;
            XE.cb.unshift(bS);
            XE.timer = window.clearTimeout(XE.timer);
        }
        if (H.timeout != 0)
            XE.timer = window.setTimeout(oD.K(window, ae, '请求超时！'), H.timeout || adt);
        if (zs) {
            Ew.src = ae;
            document.head.appendChild(Ew);
        }
        return Ew;
    };
})();
P('J');
(function() {
    var aMu, G = {}, cNz = [location.host, location.host, document.domain], ckP = /^(?:[\w]+\:\/\/)?(.*?\.([\w]+\.[\w]+)(?:\:[\d]+)?)(?:\/|$)/i, dfv = /^(?:[\w]+\:\/\/)?(.*?\.?([\w]+\.[\w]+)(?:\:[\d]+)?)(?:\/|$)/i;
    var aeo = function(ae) {
        if (/^\s*\//.test(ae))
            return cNz;
        var ba = ae.match(ckP);
        if (!!ba && ba.length > 0 && ba[0] == ae) {
            ba = ae.match(dfv);
        }
        return !ba || ba.length < 3 ? [] : ba;
    };
    var cSd = function(kG) {
        try {
            if (!kG)
                return null;
            if (!!kG.gx)
                return kG.gx();
            if (!!kG.XMLHttpRequest)
                return new kG.XMLHttpRequest();
            if (!!aMu)
                return new kG.ActiveXObject(aMu);
            var bhC = ['Msxml2.XMLHTTP.6.0', 'Msxml2.XMLHTTP.3.0', 'Msxml2.XMLHTTP.4.0', 'Msxml2.XMLHTTP.5.0', 'MSXML2.XMLHTTP', 'Microsoft.XMLHTTP'];
            for (var i = 0, l = bhC.length, v; i < l; i++) {
                try {
                    v = new kG.ActiveXObject(bhC[i]);
                    aMu = bhC[i];
                    return v;
                } catch (e) {
                }
            }
            return null;
        } catch (e) {
            return null;
        }
    };
    var bpz = function(kg) {
        var ez = G[kg];
        if (!ez)
            return;
        try {
            ez.w = E.aq(kg).contentWindow;
        } catch (e) {
        }
    };
    J.a = bpz;
    if (document.readyState == null)
        V.Q(document, 'DOMContentLoaded', function() {
            try {
                document.readyState = 'complete';
            } catch (e) {
            }
        });
    J.cqt = function(kg) {
        var ba = aeo(kg);
        kg = ba[1] || location.host;
        var tE = G[kg];
        if (!tE) {
            this.oq(kg, true);
            return null;
        }
        return tE.p.shift() || cSd(tE.w);
    };
    J.coD = function(kg, tE) {
        if (!tE)
            return;
        delete tE.onreadystatechange;
        tE.abort();
    };
    J.clE = function(kg) {
        var ba = aeo(kg);
        kg = ba[1] || location.host;
        var tE = G[kg];
        return tE && tE.w || null;
    };
    J.clT = function(kg) {
        var ba = aeo(kg);
        return !!ba[1] && ba[1] != location.host;
    };
    J.oq = function(kg, yC) {
        if (kg == location.host) {
            G[kg] = {w: window,p: []};
            return;
        }
        var ba = aeo(kg);
        if (ba[2] != document.domain)
            return;
        if (!ba[1] || !!G[ba[1]])
            return;
        var ae = kg.toLowerCase().indexOf('http://') >= 0 ? kg : ('http://' + ba[1] + '/crossdomain.html?t=20100205');
        G[ba[1]] = {w: null,p: []};
        if (document.readyState != 'complete' && !yC) {
            document.write('<iframe width="0" height="0" src="' + ae + '" id="' + ba[1] + '" name="' + ba[1] + '" onload="J.a(\'' + ba[1] + '\');" style="display:none;"></iframe>');
            return;
        }
        var DB = document.cloneElement('iframe');
        DB.width = 0;
        DB.height = 0;
        DB.id = ba[1];
        DB.style.display = 'none';
        V.Q(DB, 'load', bpz.K(null, ba[1]));
        document.body.appendChild(DB);
        DB.src = ae;
    };
    J.oq(location.host);
    if (!!N.xd && N.xd.length > 0) {
        for (var i = 0, l = N.xd.length; i < l; J.oq(N.xd[i]), i++)
            ;
        delete N.xd;
    }
    V.Q(document, 'keypress', function(L) {
        L.keyCode == 27 && V.bU(L);
    });
})();
(function() {
    var p = P(N.ut), KL, pN = [], cjy = 100, bQd = 40000;
    p.Mh = C();
    KL = p.Mh.at(p.lq);
    p.Mh.as = function(H) {
        var tE = pN.shift() || new this();
        tE.aU(H);
        return tE;
    };
    p.Mh.ah = function(tE) {
        if ((tE instanceof this) && tE.cyR()) {
            tE.aN();
            pN.push(tE);
        }
    };
    KL.cyR = function() {
        return this.ana;
    };
    KL.aU = function(H) {
        this.ana = true;
        H = H || O;
        this.btR = cjy;
        this.EW = H.url || '';
        this.aAW = !H.sync;
        this.cHH = H.rtype || 'text';
        this.aDx = H.ctype || 'text/plain';
        this.cUj = H.method || 'POST';
        this.PQ = H.headers || null;
        this.uL = H.interval || bQd;
        this.cRA = H.notimeout || false;
        this.Q('onload', H.onload || F);
        this.Q('onerror', H.onerror || F);
        this.Q('ontimeout', H.ontimeout || H.onerror || F);
    };
    KL.amz = function(T) {
        if (!this.EW) {
            this.R('onerror', '请提供请求的地址!');
            return;
        }
        if (!this.cRA && !this.acu)
            this.dF = window.setTimeout(this.cIQ.K(this), this.uL);
        this.sx = J.cqt(this.EW);
        if (!this.sx) {
            this.acu = window.setTimeout(this.amz.K(this, T), this.btR);
            this.btR += 200;
            return;
        }
        if (B.aiP && J.clT(this.EW))
            this.bRR(T);
        else if (B.eW)
            this.bQW(T);
        else
            this.ayw(T);
    };
    KL.aN = function() {
        this.ana = false;
        this.iQ('onload');
        this.iQ('onerror');
        this.iQ('ontimeout');
        J.coD(this.EW, this.sx);
        delete this.sx;
        if (!!this.dF)
            this.dF = window.clearTimeout(this.dF);
        if (!!this.acu)
            this.acu = window.clearTimeout(this.acu);
    };
    KL.ayw = function(T) {
        try {
            this.sx.open(this.cUj, this.EW, this.aAW);
            this.sx.setRequestHeader('Content-Type', this.aDx);
            if (!!this.PQ)
                for (var x in this.PQ) {
                    if (x == 'limit')
                        continue;
                    this.sx.setRequestHeader(x, this.PQ[x]);
                }
            if (this.aAW)
                this.sx.onreadystatechange = this.Lp.K(this);
            this.sx.send(T);
            if (!this.aAW)
                this.Lp();
        } catch (e) {
            this.R('onerror', '无法发送请求,' + e.message);
        }
    };
    KL.bQW = function(T) {
        !this.aAW ? this.ayw(T) : window.setTimeout(this.ayw.K(this, T), 100);
    };
    KL.bRR = function(T) {
        try {
            var kG = J.clE(this.EW);
            if (!kG.b) {
                kG.b = kG.document.createElement('input');
                kG.b.type = 'button';
                kG.document.body.appendChild(kG.b);
            }
            kG.b.onclick = this.ayw.K(this, T);
            kG.b.click();
        } catch (e) {
        }
    };
    KL.cPA = function() {
        switch (this.cHH.toLowerCase()) {
            case 'xml':
                return this.sx.responseXML;
            case 'text':
                return this.sx.responseText;
            case 'json':
                try {
                    return eval('(' + this.sx.responseText + ')');
                } catch (e) {
                }
                ;
        }
        return null;
    };
    KL.Lp = function() {
        try {
            if (!this.sx || this.sx.readyState != 4)
                return;
            if (!!this.dF)
                this.dF = window.clearTimeout(this.dF);
            if (this.sx.status != 200) {
                this.R('onerror', '服务器返回异常[' + this.sx.status + ']!');
                return;
            }
            this.R('onload', this.cPA());
        } catch (e) {
            this.R('onerror', '网络异常，请检查网络状况!');
        }
    };
    KL.cIQ = function() {
        if (!!this.acu)
            this.acu = window.clearTimeout(this.acu);
        if (!this.dF)
            return;
        this.dF = window.clearTimeout(this.dF);
        this.R('ontimeout', '请求超时！');
    };
})();
(function() {
    var G = {};
    var aqb = function(T) {
        if (!T)
            return null;
        var ba = [];
        for (var p in T)
            ba.push(encodeURIComponent(p) + '=' + encodeURIComponent(T[p]));
        return ba.join('&');
    };
    var Lq = function(gh) {
        var ni = G[gh];
        if (!ni)
            return;
        P(N.ut).Mh.ah(ni.req);
        delete ni.req;
        delete ni.onload;
        delete ni.onerror;
        delete G[gh];
    };
    var RW = function(gh, T) {
        var ni = G[gh];
        if (!ni)
            return;
        try {
            ni.onload(T);
        } catch (e) {
        }
        Lq(gh);
    };
    var oD = function(gh, cG) {
        var ni = G[gh];
        if (!ni)
            return;
        try {
            ni.onerror(cG);
        } catch (e) {
        }
        Lq(gh);
    };
    J.tj = function(vL, H) {
        if (!vL)
            return;
        H = H || O;
        var T = aqb(H.data), bMS = (H.method || '').toUpperCase() == 'GET';
        if (bMS && T)
            vL += (vL.indexOf('?') < 0 ? '?' : '&') + T;
        var gh = U.ar(), ni = {url: vL,sync: !!H.sync,rtype: H.type,ctype: H.ctype || 'application/x-www-form-urlencoded',method: H.method,headers: H.header,interval: H.timeout,notimeout: H.timeout == 0,onload: RW.K(null, gh),onerror: oD.K(null, gh)};
        G[gh] = {req: P(N.ut).Mh.as(ni),onload: H.onload || F,onerror: H.onerror || H.onload || F};
        G[gh].req.amz(bMS ? null : T);
        return gh;
    };
})();
P('J');
(function() {
    var bhk = F, Rc = F, adt = 0, aWw = 0, PQ = null;
    J.cWO = function(bSz) {
        bhk = bSz || F;
    };
    J.cWc = function(om) {
        Rc = om || F;
    };
    J.cvS = function(bVw) {
        adt = Math.max(0, parseInt(bVw) || 0);
    };
    J.afU = function(bMv) {
        aWw = bMv;
    };
    J.cYD = function(bVU) {
        PQ = bVU || null;
    };
    var G = {}, mF;
    var cuh = function(xU, bmb) {
        if (!mF)
            return;
        for (var i = 0, l = bmb.length, ai; i < l; i++) {
            ai = aqb(bmb[i], xU);
            !!ai && (mF.m[xU + '-param' + i] = ai);
        }
    };
    var aqb = function(T, xU) {
        if (T == undefined)
            return 'null:null';
        if (U.fH(T, 'boolean'))
            return 'boolean:' + (!!T ? 'true' : 'false');
        if (U.fH(T, 'number'))
            return 'number:' + T;
        if (U.fH(T, 'string'))
            return 'string:' + encodeURIComponent(T);
        if (U.fH(T, 'date'))
            return 'Date:' + T.getTime();
        if (U.fH(T, 'array'))
            return bTQ(T, xU);
        if (U.fH(T, 'object'))
            return bTs(T, xU);
        if (U.fH(T, 'function'))
            return '';
        return 'default:' + T;
    };
    var bTQ = function(D, xU) {
        var ba = [];
        for (var i = 0, l = D.length, aaw, ai; i < l; i++) {
            mF.p++;
            aaw = xU + '-e' + mF.p;
            ai = aqb(D[i], xU);
            if (!ai)
                continue;
            mF.m[aaw] = ai;
            ba.push('reference:' + aaw);
        }
        return 'Array:[' + ba.join(',') + ']';
    };
    var bTs = function(ni, xU) {
        var ba = [], aaw, ai;
        for (var p in ni) {
            mF.p++;
            aaw = xU + '-e' + mF.p;
            ai = aqb(ni[p], xU);
            if (!ai)
                continue;
            mF.m[aaw] = ai;
            ba.push(encodeURIComponent(p) + ':reference:' + aaw);
        }
        return 'Object_Object:{' + ba.join(',') + '}';
    };
    var bKP = function(T, aAV) {
        if (!T)
            return null;
        var ba = [], bTI = aAV == '&';
        for (var p in T)
            ba.push(bTI ? (encodeURIComponent(p) + '=' + encodeURIComponent(T[p])) : (p + '=' + T[p]));
        return ba.join(aAV || '\n');
    };
    var auB = function(aA, vL, by, xS) {
        var buO = false;
        if (!mF) {
            this.akE();
            buO = true;
        }
        var ly = Array.prototype.slice.call(arguments, 0);
        mF.t = ly.shift() || 0;
        mF.u = ly.shift();
        var xU = 'c' + mF.m.callCount;
        mF.m[xU + '-scriptName'] = ly.shift();
        mF.m[xU + '-methodName'] = ly.shift();
        mF.m[xU + '-id'] = mF.m.callCount;
        var fC = {c: F,e: null};
        if (ly.length > 0 && !!ly[ly.length - 1] && U.fH(ly[ly.length - 1], 'function')) {
            fC.c = ly.pop();
        }
        if (ly.length > 0 && !!ly[ly.length - 1] && U.fH(ly[ly.length - 1], 'function')) {
            fC.e = fC.c;
            fC.c = ly.pop();
        }
        mF.h[mF.m.callCount] = fC;
        cuh(xU, ly);
        mF.m.callCount++;
        if (buO)
            this.ahW();
    };
    var bQv = function(mh) {
        var gX = G[mh];
        if (!gX)
            return;
        var bvV = '';
        if (gX.u.indexOf('?') >= 0) {
            var ba = gX.u.split('?');
            gX.u = ba.shift();
            bvV = '?' + ba.join('?');
        }
        gX.u += '/call/plaincall/';
        gX.u += gX.m.callCount > 1 ? 'Multiple.' + gX.m.callCount + '.dwr' : gX.m['c0-scriptName'] + '.' + gX.m['c0-methodName'] + '.dwr';
        gX.u += bvV;
        var afd = gX.t % 10;
        if (afd == 1 || afd == 2)
            gX.u = gX.u + (gX.u.indexOf('?') >= 0 ? '&' : '?') + bKP(gX.m, '&');
        if (gX.t == 2) {
            J.yQ(gX.u, null, aIF.K(window, mh));
            return;
        }
        var H = {url: gX.u,sync: gX.t >= 10,interval: adt,headers: PQ,onload: cCh.K(window, mh),onerror: cCg.K(window, mh)};
        adt = 0;
        if (!!PQ && PQ.limit != -1)
            PQ = null;
        if (afd == 1) {
            H.method = 'GET';
            gX.r = P(N.ut).Mh.as(H);
            gX.r.amz(null);
            return;
        }
        H.method = 'POST';
        gX.r = P(N.ut).Mh.as(H);
        gX.r.amz(bKP(gX.m, '\n'));
    };
    var cCh = function(mh, kf) {
        try {
            !kf || kf.search('//#DWR') < 0 ? aIF(mh, '返回数据不合法!') : (new Function(kf))();
        } catch (e) {
            aIF(mh, e.message);
        }finally {
            bMy(mh);
        }
    };
    var aIF = function(mh, cG) {
        bhk(cG);
        var gX = G[mh];
        if (!gX)
            return;
        gX = gX.h;
        for (var p in gX)
            bDm(gX[p], cG);
    };
    var cCg = function(mh, cG) {
        aIF(mh, cG);
        bMy(mh);
    };
    var RW = function(mh, je, T) {
        var gX = G[mh];
        if (!gX)
            return;
        try {
            gX.h[je].c(T);
        } catch (e) {
            oD(mh, je, e);
        }
    };
    var cTd = function(mh, GV) {
        var gX = G[mh];
        if (!gX)
            return;
        for (var i = 0, l = gX.m.callCount; i < l; oD(mh, i, GV, true), i++)
            ;
    };
    var oD = function(mh, je, GV) {
        bhk(GV);
        var gX = G[mh];
        if (!gX)
            return;
        bDm(gX.h[je], GV);
    };
    var bDm = function(iD, cG) {
        if (!iD || Rc(cG))
            return;
        !iD.e ? iD.c(null) : iD.e(cG);
    };
    var bMy = function(mh) {
        var gX = G[mh];
        if (!gX)
            return;
        P(N.ut).Mh.ah(gX.r);
        delete gX.r;
        delete gX.h;
        delete G[mh];
    };
    J.akE = function() {
        if (mF)
            return;
        mF = {h: {},p: 0,m: {callCount: 0,scriptSessionId: '${scriptSessionId}187'}};
    };
    J.ahW = function() {
        if (!mF || !mF.u) {
            mF = null;
            return;
        }
        var mh = aWw || U.ar(6);
        aWw = 0;
        mF.m.batchId = mh;
        G[mh] = mF;
        mF = null;
        bQv(mh);
    };
    J.bi = function(vL, by, xS) {
        Array.prototype.unshift.call(arguments, 0);
        auB.apply(J, arguments);
    };
    J.qx = function(vL, by, xS) {
        Array.prototype.unshift.call(arguments, 10);
        auB.apply(J, arguments);
    };
    J.hc = function(vL, by, xS) {
        Array.prototype.unshift.call(arguments, 1);
        auB.apply(J, arguments);
    };
    J.bwI = function(vL, by, xS) {
        Array.prototype.unshift.call(arguments, 11);
        auB.apply(J, arguments);
    };
    J.afr = function(vL, by, xS) {
        Array.prototype.unshift.call(arguments, 2);
        auB.apply(J, arguments);
    };
    P('dwr.engine');
    dwr.engine['_remoteHandleCallback'] = RW;
    dwr.engine['_remoteHandleException'] = oD;
    dwr.engine['_remoteHandleBatchException'] = cTd;
})();
(function() {
    var Gw = {}, HH = {};
    var aCt = [];
    var cIh = /\t/g, bts = /\s+/g, cIp = /\n/g, cGR = /\r\n?/g, cGx = /\|\|/g, cIi = /#@@#/g;
    var ajX = {a: {r: /\n|\\|\'/g,'\n': '\\n','\\': '\\\\','\'': '\\\''}};
    var cMo = function(fW) {
        if (fW[2] != 'in')
            throw 'bad for loop statement: ' + fW.join(' ');
        aCt.push(fW[1]);
        return 'var __HASH__' + fW[1] + ' = ' + fW[3] + ',' + fW[1] + ',' + fW[1] + '_count=0;' + 'if (!!__HASH__' + fW[1] + ')' + 'for(var ' + fW[1] + '_key in __HASH__' + fW[1] + '){' + fW[1] + ' = __HASH__' + fW[1] + '[' + fW[1] + '_key];' + 'if (!' + fW[1] + '||typeof(' + fW[1] + ')=="function") continue;' + fW[1] + '_count++;';
    };
    var cJn = function() {
        var fW = aCt[aCt.length - 1];
        return '}; if(!__HASH__' + fW + '||!' + fW + '_count){';
    };
    var cKq = function() {
        aCt.pop();
        return '};';
    };
    var cIC = function(fW) {
        if (fW[2] != 'as')
            throw 'bad for list loop statement: ' + fW.join(' ');
        var bW = fW[1].split('..');
        if (bW.length > 1) {
            return 'for(var ' + fW[3] + ',' + fW[3] + '_index=0,_beg=' + bW[0] + ',_end=' + bW[1] + ',' + fW[3] + '_length=parseInt(_end-_beg+1);' + fW[3] + '_index<' + fW[3] + '_length;' + fW[3] + '_index++){' + fW[3] + ' = _beg+' + fW[3] + '_index;';
        } else {
            return 'for(var __LIST__' + fW[3] + ' = ' + fW[1] + ',' + fW[3] + ',' + fW[3] + '_index=0,' + fW[3] + '_length=__LIST__' + fW[3] + '.length;' + fW[3] + '_index<' + fW[3] + '_length;' + fW[3] + '_index++){' + fW[3] + ' = __LIST__' + fW[3] + '[' + fW[3] + '_index];';
        }
    };
    var cJE = function(fW) {
        if (!fW || !fW.length)
            return;
        fW.shift();
        var bx = fW[0].split('(')[0];
        return 'var ' + bx + ' = function' + fW.join('').replace(bx, '') + '{var __OUT=[];';
    };
    var bq = {blk: /^\{(cdata|minify|eval)/i,tag: 'forelse|for|list|if|elseif|else|var|macro|break',def: {'if': {pfix: 'if(',sfix: '){',pmin: 1},'else': {pfix: '}else{'},'elseif': {pfix: '}else if(',sfix: '){',pdft: 'true'},'/if': {pfix: '}'},'for': {pfix: cMo,pmin: 3},'forelse': {pfix: cJn},'/for': {pfix: cKq},'list': {pfix: cIC,pmin: 3},'/list': {pfix: '};'},'break': {pfix: 'break;'},'var': {pfix: 'var ',sfix: ';'},'macro': {pfix: cJE},'/macro': {pfix: 'return __OUT.join(\'\'); };'}},ext: {'trim': U.aQ,'rand': U.ar,'escape': U.ad,'format': U.gl,'string': U.bba,'substr': U.da,'default': function(ai, bVW) {
                return ai || bVW;
            }}};
    var cJV = function(_content, qF) {
        var fW = _content.slice(1, -1).split(bts), lE = bq.def[fW[0]];
        if (!lE) {
            aFU(_content, qF);
            return;
        }
        if (!!lE.pmin && lE.pmin >= fW.length)
            throw 'Statement needs more parameters:' + _content;
        qF.push((!!lE.pfix && typeof (lE.pfix) != 'string') ? lE.pfix(fW) : (lE.pfix || ''));
        if (!!lE.sfix) {
            if (fW.length <= 1) {
                if (!!lE.pdft)
                    qF.push(lE.pdft);
            } else {
                for (var i = 1, l = fW.length; i < l; i++) {
                    if (i > 1)
                        qF.push(' ');
                    qF.push(fW[i]);
                }
            }
            qF.push(lE.sfix);
        }
    };
    var aFU = function(_content, qF) {
        if (!_content)
            return;
        var aEV = _content.split('\n');
        if (!aEV || !aEV.length)
            return;
        for (var i = 0, l = aEV.length; i < l; i++) {
            cKF(aEV[i], qF);
        }
    };
    var cKF = function(_content, qF) {
        var avX = '}', avM = -1, aW = _content.length, awE, nI, akN, aIq, amT;
        while ((avM + avX.length) < aW) {
            awE = '${';
            nI = '}';
            akN = _content.indexOf(awE, avM + avX.length);
            if (akN < 0)
                break;
            if (_content.charAt(akN + 2) == '%') {
                awE = '${%';
                nI = '%}';
            }
            aIq = _content.indexOf(nI, akN + awE.length);
            if (aIq < 0)
                break;
            aGp(_content.substring(avM + avX.length, akN), qF);
            amT = _content.substring(akN + awE.length, aIq).replace(cGx, '#@@#').split('|');
            for (var i = 0, l = amT.length; i < l; amT[i] = amT[i].replace(cIi, '||'), i++)
                ;
            qF.push('__OUT.push(');
            bMh(amT, qF);
            qF.push(');');
            avX = nI;
            avM = aIq;
        }
        aGp(_content.substring(avM + avX.length), qF);
    };
    var aGp = function(_content, qF) {
        if (!_content)
            return;
        qF.push('__OUT.push(\'' + U.abG(ajX.a, _content) + '\');');
    };
    var bMh = function(akM, qF) {
        if (!akM || !akM.length)
            return;
        if (akM.length == 1) {
            qF.push(akM.pop());
            return;
        }
        var bcX = akM.pop().split(':');
        qF.push('__MDF[\'' + bcX.shift() + '\'](');
        bMh(akM, qF);
        if (bcX.length > 0)
            qF.push(',' + bcX.join(':'));
        qF.push(')');
    };
    var cJo = function(_content) {
        _content = U.aQ(_content).replace(cGR, '\n').replace(cIh, '    ');
        var Rd = ['if(!__CTX) return \'\';var __OUT=[];with(__CTX){'];
        var aap = -1, aW = _content.length;
        var vd, ahG, auf, asX, Sv, asR, bfM, asO;
        while ((aap + 1) < aW) {
            vd = aap;
            vd = _content.indexOf("{", vd + 1);
            while (vd >= 0) {
                ahG = _content.indexOf("}", vd + 1);
                auf = _content.substring(vd, ahG);
                asX = auf.match(bq.blk);
                if (!!asX) {
                    Sv = asX[1].length + 1;
                    asR = _content.indexOf('}', vd + Sv);
                    if (asR >= 0) {
                        bfM = asR - vd - Sv <= 0 ? ('{/' + asX[1] + '}') : auf.substr(Sv + 1);
                        Sv = _content.indexOf(bfM, asR + 1);
                        if (Sv >= 0) {
                            aFU(_content.substring(aap + 1, vd), Rd);
                            asO = _content.substring(asR + 1, Sv);
                            switch (asX[1]) {
                                case 'cdata':
                                    aGp(asO, Rd);
                                    break;
                                case 'minify':
                                    aGp(asO.replace(cIp, ' ').replace(bts, ' '), Rd);
                                    break;
                                case 'eval':
                                    if (!!asO)
                                        Rd.push('__OUT.push((function(){' + asO + '})());');
                                    break;
                            }
                            vd = aap = Sv + bfM.length - 1;
                        }
                    }
                } else if (_content.charAt(vd - 1) != '$' && _content.charAt(vd - 1) != '\\' && auf.substr(auf.charAt(1) == '/' ? 2 : 1).search(bq.tag) == 0) {
                    break;
                }
                vd = _content.indexOf("{", vd + 1);
            }
            if (vd < 0)
                break;
            ahG = _content.indexOf("}", vd + 1);
            if (ahG < 0)
                break;
            aFU(_content.substring(aap + 1, vd), Rd);
            cJV(_content.substring(vd, ahG + 1), Rd);
            aap = ahG;
        }
        aFU(_content.substring(aap + 1), Rd);
        Rd.push('};return __OUT.join(\'\');');
        return new Function('__CTX', '__MDF', Rd.join(''));
    };
    E.aI = function(gh, T, bcj) {
        try {
            T = T || {};
            if (!Gw[gh] && !HH[gh])
                return '';
            if (!Gw[gh]) {
                Gw[gh] = cJo(HH[gh]);
                delete HH[gh];
            }
            T.defined = function(aR) {
                return T[aR] != null;
            };
            if (!!bcj)
                for (var p in bq.ext)
                    bcj[p] = bq.ext[p];
            return Gw[gh](T, bcj || bq.ext);
        } catch (e) {
            return e.message || '';
        }
    };
    E.of = function(_content) {
        if (!_content)
            return '';
        var gh, bE = this.aq(_content);
        if (!!bE) {
            gh = bE.id;
            _content = bE.value || bE.innerText;
        }
        gh = gh || ('ck_' + U.ar());
        HH[gh] = _content;
        return gh;
    };
})();
(function() {
    P('U');
    var awg, cIv = /\s*\;\s*/, fU = new Date(), chJ = fU.getTime(), cVd = 24 * 60 * 60 * 1000;
    var bzv = function(aR, ai) {
        if (arguments[3])
            fU.setTime(chJ + arguments[3] * cVd);
        var vL = arguments[4] ? ('path=' + arguments[4] + ';') : '', kg = arguments[2] ? ('domain=' + arguments[2] + ';') : '', bXj = arguments[3] ? ('expires=' + fU.toGMTString() + ';') : '';
        return aR + '=' + ai + ';' + kg + vL + bXj;
    };
    U.rA = function(aR) {
        return awg[aR] || '';
    };
    U.cWk = function(aR) {
        document.cookie = bzv(aR, '', arguments[1], -100, arguments[2]);
        delete awg[aR];
    };
    U.zj = function(aR, ai) {
        document.cookie = bzv.apply(null, arguments);
        awg[aR] = ai;
    };
    U.cpk = function() {
        awg = {};
        for (var i = 0, ba = document.cookie.split(cIv), l = ba.length, aY; i < l; i++) {
            aY = ba[i].indexOf('=');
            awg[ba[i].substring(0, aY)] = ba[i].substr(aY + 1);
        }
    };
    U.cpk();
})();
(function() {
    P('U');
    var uN = 8, bLG = '0123456789abcdef';
    var cNL = function(x, y) {
        x[y >> 5] |= 0x80 << ((y) % 32);
        x[(((y + 64) >>> 9) << 4) + 14] = y;
        var a = 1732584193, b = -271733879, c = -1732584194, d = 271733878;
        for (var i = 0, l = x.length, bnU, blO, bnX, boi; i < l; i += 16) {
            bnU = a;
            blO = b;
            bnX = c;
            boi = d;
            a = xg(a, b, c, d, x[i + 0], 7, -680876936);
            d = xg(d, a, b, c, x[i + 1], 12, -389564586);
            c = xg(c, d, a, b, x[i + 2], 17, 606105819);
            b = xg(b, c, d, a, x[i + 3], 22, -1044525330);
            a = xg(a, b, c, d, x[i + 4], 7, -176418897);
            d = xg(d, a, b, c, x[i + 5], 12, 1200080426);
            c = xg(c, d, a, b, x[i + 6], 17, -1473231341);
            b = xg(b, c, d, a, x[i + 7], 22, -45705983);
            a = xg(a, b, c, d, x[i + 8], 7, 1770035416);
            d = xg(d, a, b, c, x[i + 9], 12, -1958414417);
            c = xg(c, d, a, b, x[i + 10], 17, -42063);
            b = xg(b, c, d, a, x[i + 11], 22, -1990404162);
            a = xg(a, b, c, d, x[i + 12], 7, 1804603682);
            d = xg(d, a, b, c, x[i + 13], 12, -40341101);
            c = xg(c, d, a, b, x[i + 14], 17, -1502002290);
            b = xg(b, c, d, a, x[i + 15], 22, 1236535329);
            a = xM(a, b, c, d, x[i + 1], 5, -165796510);
            d = xM(d, a, b, c, x[i + 6], 9, -1069501632);
            c = xM(c, d, a, b, x[i + 11], 14, 643717713);
            b = xM(b, c, d, a, x[i + 0], 20, -373897302);
            a = xM(a, b, c, d, x[i + 5], 5, -701558691);
            d = xM(d, a, b, c, x[i + 10], 9, 38016083);
            c = xM(c, d, a, b, x[i + 15], 14, -660478335);
            b = xM(b, c, d, a, x[i + 4], 20, -405537848);
            a = xM(a, b, c, d, x[i + 9], 5, 568446438);
            d = xM(d, a, b, c, x[i + 14], 9, -1019803690);
            c = xM(c, d, a, b, x[i + 3], 14, -187363961);
            b = xM(b, c, d, a, x[i + 8], 20, 1163531501);
            a = xM(a, b, c, d, x[i + 13], 5, -1444681467);
            d = xM(d, a, b, c, x[i + 2], 9, -51403784);
            c = xM(c, d, a, b, x[i + 7], 14, 1735328473);
            b = xM(b, c, d, a, x[i + 12], 20, -1926607734);
            a = yb(a, b, c, d, x[i + 5], 4, -378558);
            d = yb(d, a, b, c, x[i + 8], 11, -2022574463);
            c = yb(c, d, a, b, x[i + 11], 16, 1839030562);
            b = yb(b, c, d, a, x[i + 14], 23, -35309556);
            a = yb(a, b, c, d, x[i + 1], 4, -1530992060);
            d = yb(d, a, b, c, x[i + 4], 11, 1272893353);
            c = yb(c, d, a, b, x[i + 7], 16, -155497632);
            b = yb(b, c, d, a, x[i + 10], 23, -1094730640);
            a = yb(a, b, c, d, x[i + 13], 4, 681279174);
            d = yb(d, a, b, c, x[i + 0], 11, -358537222);
            c = yb(c, d, a, b, x[i + 3], 16, -722521979);
            b = yb(b, c, d, a, x[i + 6], 23, 76029189);
            a = yb(a, b, c, d, x[i + 9], 4, -640364487);
            d = yb(d, a, b, c, x[i + 12], 11, -421815835);
            c = yb(c, d, a, b, x[i + 15], 16, 530742520);
            b = yb(b, c, d, a, x[i + 2], 23, -995338651);
            a = yK(a, b, c, d, x[i + 0], 6, -198630844);
            d = yK(d, a, b, c, x[i + 7], 10, 1126891415);
            c = yK(c, d, a, b, x[i + 14], 15, -1416354905);
            b = yK(b, c, d, a, x[i + 5], 21, -57434055);
            a = yK(a, b, c, d, x[i + 12], 6, 1700485571);
            d = yK(d, a, b, c, x[i + 3], 10, -1894986606);
            c = yK(c, d, a, b, x[i + 10], 15, -1051523);
            b = yK(b, c, d, a, x[i + 1], 21, -2054922799);
            a = yK(a, b, c, d, x[i + 8], 6, 1873313359);
            d = yK(d, a, b, c, x[i + 15], 10, -30611744);
            c = yK(c, d, a, b, x[i + 6], 15, -1560198380);
            b = yK(b, c, d, a, x[i + 13], 21, 1309151649);
            a = yK(a, b, c, d, x[i + 4], 6, -145523070);
            d = yK(d, a, b, c, x[i + 11], 10, -1120210379);
            c = yK(c, d, a, b, x[i + 2], 15, 718787259);
            b = yK(b, c, d, a, x[i + 9], 21, -343485551);
            a = TI(a, bnU);
            b = TI(b, blO);
            c = TI(c, bnX);
            d = TI(d, boi);
        }
        return [a, b, c, d];
    };
    var cNl = function(b) {
        var ba = [];
        for (var i = 0, l = b.length * 4; i < l; ba.push(bLG.charAt((b[i >> 2] >> ((i % 4) * 8 + 4)) & 0xF) + bLG.charAt((b[i >> 2] >> ((i % 4) * 8)) & 0xF)), i++)
            ;
        return ba.join('');
    };
    var cMN = function(s) {
        var bIk = [], bTN = (1 << uN) - 1;
        for (var i = 0, l = s.length * uN; i < l; bIk[i >> 5] |= (s.charCodeAt(i / uN) & bTN) << (i % 32), i += uN)
            ;
        return bIk;
    };
    var TI = function(x, y) {
        var bKS = (x & 0xFFFF) + (y & 0xFFFF), bQt = (x >> 16) + (y >> 16) + (bKS >> 16);
        return (bQt << 16) | (bKS & 0xFFFF);
    };
    var cOe = function(x, y) {
        return (x << y) | (x >>> (32 - y));
    };
    var aEb = function(q, a, b, x, s, t) {
        return TI(cOe(TI(TI(a, q), TI(x, t)), s), b);
    };
    var xg = function(a, b, c, d, x, s, t) {
        return aEb((b & c) | ((~b) & d), a, b, x, s, t);
    };
    var xM = function(a, b, c, d, x, s, t) {
        return aEb((b & d) | (c & (~d)), a, b, x, s, t);
    };
    var yb = function(a, b, c, d, x, s, t) {
        return aEb(b ^ c ^ d, a, b, x, s, t);
    };
    var yK = function(a, b, c, d, x, s, t) {
        return aEb(c ^ (b | (~d)), a, b, x, s, t);
    };
    U.bvf = function(_content) {
        return cNl(cNL(cMN(_content), _content.length * uN));
    };
})();
(function() {
    var p = P(N.ui), Au;
    var zS, aP = /\#\<.*?\>/gi;
    p.fp = function(aK, bvy) {
        if (!aK || !aK.replace)
            return;
        if (!zS)
            zS = [];
        if (!!bvy)
            aK = aK.replace(aP, '.' + bvy);
        zS.push(aK);
    };
    p.aYV = function() {
        if (!zS)
            return;
        E.cox(zS.join(''));
        zS = null;
    };
    p.eB = C();
    Au = p.eB.at(P(N.ut).lq);
    p.eB.as = function(bv, H) {
        H = H || {};
        H.group = !!H.singleton && '__singleton__' || H.group;
        var pS;
        if (!!H.group) {
            this.Cg = this.Cg || {};
            pS = this.Cg[H.group];
        }
        if (!pS) {
            this.pN = this.pN || [];
            pS = this.pN.shift();
        }
        if (!!pS) {
            pS.aN(true);
            pS.aU(bv, H);
        } else {
            pS = new this(bv, H);
        }
        if (!!H.group)
            this.Cg[H.group] = pS;
        return pS;
    };
    p.eB.ah = function(pS) {
        if (!(pS instanceof this) || pS.aXV())
            return null;
        var nR = pS.cnm();
        if (!!nR && !this.Cg[nR])
            return null;
        pS.aN();
        if (!!nR)
            delete this.Cg[nR];
        this.pN = this.pN || [];
        this.pN.push(pS);
        return null;
    };
    Au.bR = function(bv, H) {
        this.aS();
        p.aYV();
        this.M = document.cloneElement('div', this.ap());
        this.M.innerHTML = this.bd() || '';
        this.bT();
        this.aU(bv, H);
    };
    Au.aN = function(aLF) {
        if (!this.bxE('onbeforedestroy'))
            return;
        this.R('onbeforedestroy');
        this.iQ('onbeforedestroy');
        this.bpL();
        E.bL(this.M, this.de);
        delete this.de;
    };
    Au.aU = function(bv, H) {
        H = H || O;
        this.Cg = H.group;
        this.bc(H);
        this.is(bv, !!H.before);
    };
    Au.bc = function(H) {
        H = H || O;
        this.de = H['class'] || '';
        E.bl(this.M, this.de);
        this.bGC = B.eW && !!H.hackhover;
        this.Q('onbeforedestroy', H.onbeforedestroy || F);
    };
    Au.oA = function() {
        return this.M;
    };
    Au.is = function(bv, Lf) {
        if (!this.M)
            return;
        bv = E.aq(bv);
        if (!bv)
            return;
        this.fA = bv == document.documentElement ? document.body : bv;
        this.btZ(Lf);
    };
    Au.cnm = function() {
        return this.Cg || null;
    };
    Au.aXV = function() {
        return !this.ana;
    };
    Au.bpL = function() {
        this.ana = false;
        this.bGC ? this.M.style.display = 'none' : E.cX(this.M);
    };
    Au.btZ = function(Lf) {
        if (!this.fA || !this.M)
            return;
        !Lf ? this.fA.appendChild(this.M) : this.fA.insertAdjacentElement('afterBegin', this.M);
        if (this.bGC)
            this.M.style.display = '';
        this.ana = true;
    };
    Au.ap = F;
    Au.bd = F;
    Au.bT = F;
})();
(function() {
    var p = P(N.ui), MR, aP = 'ui-' + U.ar();
    p.fp('#<uispace> .zcvr,#<uispace> .zhnt{display:none;position:fixed;_position:absolute;z-index:80;} #<uispace> .zcvr{top:0;left:0;width:100%;height:100%;background:url(' + N.rc.r + 'empty.png);} #<uispace> .zhnt{top:5px;right:5px;padding:4px;color:#000;background:#ffffae;z-index:120;}', aP);
    p.bro = C();
    MR = p.bro.at(p.eB, true);
    MR.bbx = function(cG) {
        this.DH();
        this.alH(cG);
    };
    MR.alH = function(cG) {
        this.kS.innerText = cG || ' ';
        if (B.fa)
            this.kS.style.top = (document.body.scrollTop || document.documentElement.scrollTop) + 'px';
        this.kS.style.display = 'block';
    };
    MR.kz = function() {
        this.uY();
        this.kS.style.display = 'none';
    };
    MR.DH = function() {
        if (B.fa) {
            var fR = document.documentElement || document.body;
            this.lj.style.width = fR.scrollWidth + 'px';
            this.lj.style.height = fR.scrollHeight + 'px';
        }
        this.lj.style.display = 'block';
    };
    MR.uY = function() {
        this.lj.style.display = 'none';
    };
    MR.ap = function() {
        return aP;
    };
    MR.bd = function() {
        return '<div class="zcvr">&nbsp;</div><div class="zhnt">&nbsp;</div>';
    };
    MR.bT = function() {
        var A = E.aM(this.M);
        this.lj = A[0];
        this.kS = A[1];
    };
    var dF, er, awo = 0;
    var Lc = function() {
        if (!er)
            er = p.bro.as(document.body, {'class': 'uiutil'});
        return er;
    };
    var vH = function() {
        dF = window.clearTimeout(dF);
        E.kz();
    };
    E.bN = function(cG, bgS, blo) {
        if (!!blo) {
            dF = window.clearTimeout(dF);
            awo = 0;
        } else if (!!dF) {
            awo++;
        } else {
            dF = window.setTimeout(vH, 5000);
        }
        var pS = Lc();
        !bgS ? pS.bbx(cG) : pS.alH(cG);
    };
    E.DH = function() {
        Lc().DH();
    };
    E.kz = function() {
        if (!!dF)
            return;
        Lc().kz();
    };
    E.uY = function() {
        Lc().uY();
    };
})();
(function() {
    var p = P(N.ui), za, afh, ciW = /\s+/i;
    p.agn = C();
    za = p.agn.at(p.eB, true);
    za.bR = function(bv, H) {
        this.eC = document.cloneElement('iframe', this.ap() + '-hack');
        this.aS(bv, H);
    };
    za.aN = function() {
        E.bL(this.eC, this.aVY);
        E.cX(this.eC);
        delete this.aVY;
        p.agn.aZ.aN.call(this);
        this.dV('');
        this.cEv();
    };
    za.bc = function(H) {
        H = H || O;
        p.agn.aZ.bc.call(this, H);
        var A = this.de.split(ciW) || [];
        this.aVY = (A[A.length - 1] || '') + '-frm';
        E.bl(this.eC, this.aVY);
        this.Q('onshow', H.onshow || F);
        this.Q('onclose', H.onclose || F);
        this.Q('onready', H.onready || F);
        this.Q('onbeforeshow', H.onbeforeshow || F);
        this.Q('onbeforeclose', H.onbeforeclose || F);
    };
    za.dV = function(_content) {
        _content = _content || '';
        typeof (_content) == 'string' ? this.tT.innerHTML = _content : this.tT.appendChild(_content);
        this.R('onready', this.tT);
    };
    za.sN = function(en, du, VD) {
        if (en == null || du == null)
            return;
        var aK = this.M.style;
        du += VD ? (parseInt(aK.top) || 0) : 0;
        en += VD ? (parseInt(aK.left) || 0) : 0;
        aK.top = du + 'px';
        aK.left = en + 'px';
        this.aGR(en, du);
    };
    za.is = function(bv) {
        this.fA = E.aq(bv);
    };
    za.bm = function() {
        this.R('onbeforeshow');
        this.btZ();
        this.Yb();
        this.Id();
        this.R('onshow');
    };
    za.Qb = function(L) {
        this.R('onbeforeclose');
        this.bpL();
        E.cX(this.eC);
        this.aUd(L);
        this.R('onclose');
    };
    za.Yb = function() {
        if (!!this.tM)
            return;
        var aK = this.eC.style;
        aK.width = this.M.offsetWidth + 'px';
        aK.height = this.M.offsetHeight + 'px';
        this.M.insertAdjacentElement('beforeBegin', this.eC);
    };
    za.aGR = function(en, du) {
        if (!!this.tM)
            return;
        var aK = this.eC.style;
        aK.top = du + 'px';
        aK.left = en + 'px';
    };
    za.cEv = F;
    za.Id = F;
    za.aUd = F;
    p.aeF = C();
    afh = p.aeF.at(P(N.ui).eB, true);
    p.aeF.bm = function(H) {
        var bv = !!H && H.parent || null;
        !!this.er ? this.er.aU(bv, H) : this.er = new this(bv, H);
        this.er.bm();
    };
    p.aeF.aj = function() {
        if (!this.er)
            return;
        this.er.aj();
    };
    afh.bR = function(bv, H) {
        this.cz = this.aeW(H);
        this.aS(bv, H);
        E.bL(this.M, this.ap());
        this.cz.dV(this.M);
    };
    afh.is = function(bv) {
        if (!this.cz)
            return;
        bv = E.aq(bv);
        if (!bv)
            return;
        this.cz.is(bv);
    };
    afh.bm = function() {
        if (!this.cz)
            return;
        this.cz.bm();
    };
    afh.aj = function() {
        if (!this.cz)
            return;
        this.cz.Qb();
    };
    afh.aeW = function(H) {
        H['class'] = (this.ap() || '') + ' ' + (H['class'] || '');
        delete H.content;
    };
    afh.bc = F;
})();
(function() {
    var p = P(N.ui), Xs, bnY, aP = 'ui-' + U.ar();
    p.fp('#<uispace>-hack{position:absolute;z-index:99;} #<uispace>{position:absolute;z-index:100;border:1px solid #97abc9;background-color:#fff;}', aP);
    p.sG = C();
    Xs = p.sG.at(p.agn, true);
    Xs.bc = function(H) {
        H = H || O;
        p.sG.aZ.bc.call(this, H);
        this.tM = !B.fa || !H.hack;
        this.dV(H.content);
    };
    Xs.ap = function() {
        return aP;
    };
    Xs.bT = function() {
        this.tT = this.M;
        V.Q(this.M, 'click', V.Uh.K(V));
        V.Q(document, 'click', this.Qb.K(this));
    };
    Xs.Id = function() {
        if (!!this.tM)
            return;
        this.aGR(parseInt(E.EI(this.M, 'left')) || 0, parseInt(E.EI(this.M, 'top')) || 0);
    };
    p.Tg = C();
    bnY = p.Tg.at(p.aeF, true);
    bnY.aeW = function(H) {
        H = H || {};
        H.hackhover = true;
        p.Tg.aZ.aeW.call(this, H);
        return p.sG.as(null, H);
    };
})();
(function() {
    var p = P(N.ui), jf, yE, Os, aP = 'ui-' + U.ar();
    var asH = 'js-zncls-102';
    p.fp('#<uispace>-hack{position:absolute;z-index:99;} #<uispace>-cover{position:absolute;top:0;left:0;width:100%;height:100%;background:url(' + N.rc.r + 'empty.png);z-index:10;} #<uispace>{position:absolute;top:0;left:0;z-index:100;text-align:center;border:1px solid #97abc9;background-color:#fff;} #<uispace> .ztbr{height:30px;line-height:30px;text-align:left;background-color:#5e9ff7;font-size:14px;font-weight:bold;color:#fff;} #<uispace> .zmov{cursor:move;} #<uispace> .zttl{width:85%;padding-left:10px;} #<uispace> .zcls{position:absolute;top:5px;right:10px;width:20px;height:20px;overflow:hidden;cursor:pointer;z-index:5;} #<uispace> .zcnt{padding:10px;min-height:100px;_height:100px;font-size:12px;} #<uispace> .zext{display:none;} #<uispace>.js-zncls-102 .zcls{display:none;}', aP);
    p.fp('.zbwin{color:#000;border:1px solid #aaa;background-color:#fff;} .zbwin .zcls{top:8px;background:url(' + N.rc.r + 'widget/wincls.gif) no-repeat 2px center;text-indent:50px;} .zbwin .ztbr{height:35px;line-height:35px;color:#000;background:url(' + N.rc.r + 'widget/winbar.gif) repeat-x;} .zbwin .zact{margin:10px 0;text-align:center;} .zbwin .ztxt{height:1.3em;padding-top:3px;} .zbwin .zbtn{height:28px;padding:0 8px;font-size:14px;cursor:pointer;} .zbwin .zbtnok{font-weight:bold;} .zbwin .zbtncc{margin-left:20px;}');
    p.yi = C();
    jf = p.yi.at(p.agn, true);
    jf.bc = function(H) {
        H = H || O;
        p.yi.aZ.bc.call(this, H);
        this.aql = !!H.nocenter;
        this.ayG = !!H.nooverflow;
        this.tM = (B.fa && !!H.nohack) || (!B.fa && !H.iframe);
        !H.noclose ? E.bL(this.M, asH) : E.bl(this.M, asH);
        this.iV(H.title);
        this.dV(H.content);
    };
    jf.iV = function(kf, Yk) {
        this.VC[Yk ? 'innerHTML' : 'innerText'] = kf || '';
    };
    jf.ew = function(ju) {
        if (!this.lj)
            this.lj = document.cloneElement('div', aP + '-cover');
        if (!ju) {
            E.cX(this.lj);
            return;
        }
        if (B.fa) {
            var aK = this.lj.style;
            aK.width = this.M.offsetWidth + 'px';
            aK.height = this.M.offsetHeight + 'px';
        }
        this.M.appendChild(this.lj);
    };
    jf.azs = function(dD, VD) {
        dD += !VD ? 0 : this.M.offsetWidth;
        if (!this.tM)
            this.eC.style.width = dD + 'px';
        this.M.style.width = dD + 'px';
    };
    jf.ay = function(bms) {
        E.cX(this.eC);
        if (!bms)
            this.Id();
        this.Yb();
    };
    jf.ap = function() {
        return aP;
    };
    jf.bd = function() {
        return '<div class="zcls zflg" title="关闭">&#215;</div> <div class="ztbr noselect"><div class="zttl thide zflg">&nbsp;</div></div> <div class="zcnt zflg"></div> <div class="zext zext0">&nbsp;</div><div class="zext zext1">&nbsp;</div> <div class="zext zext2">&nbsp;</div><div class="zext zext3">&nbsp;</div> <div class="zext zext4">&nbsp;</div><div class="zext zext5">&nbsp;</div>';
    };
    jf.bT = function() {
        var A = E.bz(this.M, 'zflg');
        this.VC = A[1];
        this.tT = A[2];
        E.kd(A[1].parentNode);
        E.kd(A[1].parentNode);
        V.Q(A[0], 'mousedown', this.Qb.K(this));
    };
    jf.Id = function() {
        if (!!this.aql)
            return;
        var sh = document.documentElement || document.body, Kz = document.body || document.documentElement;
        this.sN((sh.scrollLeft || Kz.scrollLeft) + Math.max(0, sh.clientWidth - this.M.clientWidth) / 2, (sh.scrollTop || Kz.scrollTop) + Math.max(0, sh.clientHeight - this.M.clientHeight) / 2);
    };
    jf.aUd = V.bU.K(V);
    p.bO = C();
    yE = p.bO.at(p.yi, true);
    yE.bR = function(bv, H) {
        this.aS(bv, H);
        this.ahe = new (P(N.ut).ayv)(this.VC.parentNode, {ondrag: this.wb.K(this),onmove: this.yZ.K(this)});
    };
    yE.bT = function() {
        p.bO.aZ.bT.call(this);
        E.bl(this.VC.parentNode, 'zmov');
    };
    yE.Id = function() {
        if (!!this.aql) {
            this.M.style.top = '';
            this.M.style.left = '';
            this.sN(parseInt(E.EI(this.M, 'left')) || 0, parseInt(E.EI(this.M, 'top')) || 0);
            return;
        }
        p.bO.aZ.Id.call(this);
    };
    yE.wb = function() {
        if (!this.ayG)
            return;
        var fR = document.documentElement;
        this.bhO = fR.scrollWidth - this.M.offsetWidth;
        this.bjg = fR.scrollHeight - this.M.offsetHeight;
    };
    yE.yZ = function(ms, ot) {
        if (!this.ayG) {
            this.sN(ms, ot, true);
            return;
        }
        var aK = this.M.style;
        this.sN(Math.max(0, Math.min(this.bhO, (parseInt(aK.left) || 0) + ms)), Math.max(0, Math.min(this.bjg, (parseInt(aK.top) || 0) + ot)));
    };
    p.TS = C();
    Os = p.TS.at(p.aeF, true);
    Os.cnA = function(att) {
        if (!this.fk.nomove == !!att)
            return;
        this.fk.nomove = !att;
        var bv = this.cz.oA().parentNode;
        E.cX(this.M);
        this.cz.constructor.ah(this.cz);
        this.cz = this.fk.nomove ? p.yi.as(bv, this.fk) : p.bO.as(bv, this.fk);
        this.cz.dV(this.M);
        this.bm();
    };
    Os.aeW = function(H) {
        this.fk = H || {};
        p.TS.aZ.aeW.call(this, this.fk);
        if (!this.fk.nocover) {
            this.fk.onclose = E.uY;
            this.fk.onbeforeshow = E.DH;
        }
        return !this.fk.nomove ? p.bO.as(null, this.fk) : p.yi.as(null, this.fk);
    };
})();
(function() {
    var p = P(N.ui), HY;
    var cuw = function(cG) {
        window.alert(cG);
    };
    p.JY = C();
    HY = p.JY.at(p.eB, true);
    HY.bc = function(H) {
        H = H || O;
        this.ew(false);
        this.azT = !!H.html;
        this.Vo = !!H.empty;
        this.YV = !!H.fixed;
        this.cag = !!H.cfixed;
        this.po = H.maxlength || 0;
        this.dV(H.content || '');
        this.Q('onok', H.onok || F);
        this.Q('oncc', H.oncc || F);
        this.Q('onerror', H.onerror || cuw);
        p.JY.aZ.bc.call(this, H);
    };
    HY.aAl = function(bE) {
        if (!B.eW)
            return;
        try {
            var eo = document.body.createTextRange();
            eo.moveToElementText(E.aq(bE) || this.M.parentNode);
            eo.select();
        } catch (e) {
        }
    };
    HY.gC = function() {
        !this.gz || this.gz.gC();
    };
    HY.dV = function(_content) {
        !this.gz || this.gz.dV.apply(this.gz, arguments);
    };
    HY.hi = function() {
        return !!this.gz && this.gz.hi() || '';
    };
    HY.rg = function() {
        var _content = this.hi();
        if (!this.Vo && !_content) {
            this.gC();
            return '请输入内容！';
        }
        if (!!this.po && _content.length > this.po) {
            this.gC();
            return '输入内容超过长度[' + this.po + '个字符]限制！';
        }
        return null;
    };
    HY.bJ = function() {
        var cG = this.rg();
        if (!!cG) {
            this.R('onerror', cG);
            return;
        }
        this.ew(true);
        try {
            this.bCq();
        } catch (e) {
        }
        this.YV || this.constructor.ah(this);
    };
    HY.eD = function() {
        this.cag || this.constructor.ah(this);
        this.R('oncc');
    };
    HY.bCq = function() {
        this.R('onok', this.hi());
    };
    HY.ew = F;
})();
(function() {
    var p = P(N.ui), Np, pB, aP = 'ui-' + U.ar();
    var azj = 'js-zhvr-900';
    p.fp('#<uispace>{position:relative;zoom:1;text-align:left;} #<uispace>-hack{position:absolute;z-index:99;} #<uispace> .zcom{width:200px;border:1px solid #aaa;} #<uispace> .zcse{visibility:hidden;position:absolute;top:20px;left:0;background:#fff;} #<uispace> .zitm{width:100%;height:20px;line-height:20px;cursor:default;} #<uispace> .zitm.js-zhvr-900{background-color:#316ac5;} #<uispace> .zcse .js-login-hovered{background-color:#ddd;color:#fff;}', aP);
    p.byI = C();
    Np = p.byI.at(P(N.ut).dI, true);
    Np.bR = function() {
        this.aS();
        this.M = document.cloneElement('div', 'zitm thide');
        V.Q(this.M, 'click', this.AA.K(this));
        if (!this.UY) {
            V.Q(this.M, 'mouseout', this.nG.K(this));
        }
        V.Q(this.M, 'mouseover', this.aMC.K(this));
    };
    Np.aU = function(H) {
        H = H || O;
        this.UY = H.forlogin || false;
        this.LD(false);
        this.dk = H.xI;
        this.Q('onclick', H.onclick || F);
        this.Q('onmouseover', H.onmouseover || F);
    };
    Np.LD = function(ji) {
        ji ? E.bl(this.M, azj) : E.bL(this.M, azj);
    };
    Np.ao = function(ai) {
        if (!!ai && !!ai.noaction) {
            this.cQn = true;
            this.qr = ai || {};
            this.M.title = this.qr.value;
            this.M.innerText = this.qr.value;
            this.M.style.color = '#aaa';
            this.M.style.backgroundColor = '#fff';
        } else {
            this.M.style.color = '';
            this.M.style.backgroundColor = '';
            this.cQn = false;
            this.qr = ai || '';
            this.M.title = this.qr;
            this.M.innerText = this.qr;
        }
    };
    Np.ED = function() {
        return this.qr;
    };
    Np.AA = function(L) {
        V.bU(L);
        this.R('onclick', this.qr);
    };
    Np.aMC = function() {
        this.LD(true);
        this.R('onmouseover', this.dk);
    };
    Np.nG = function() {
        if (!this.UY) {
            this.LD(false);
        }
    };
    p.SY = C();
    pB = p.SY.at(p.eB, true);
    pB.bR = function(bv, H) {
        H = H || O;
        this.UY = H.forlogin || false;
        if (!!this.UY) {
            azj = 'js-login-hovered';
        }
        this.dU = {forlogin: this.UY,onclick: this.aJG.K(this),onmouseover: this.cFb.K(this)};
        this.eC = document.cloneElement('iframe', this.ap() + '-hack');
        this.aS(bv, H);
    };
    pB.aN = function() {
        p.SY.aZ.aN.call(this);
        this.aAi();
    };
    pB.bc = function(H) {
        H = H || O;
        this.lV = H.option || p.byI;
        p.SY.aZ.bc.call(this, H);
        this.Q('onenter', H.onenter || F);
        this.Q('onchange', H.onchange || F);
        this.Q('onselect', H.onselect || F);
        this.tM = !B.fa || !H.hack;
    };
    pB.aze = function(D, aY) {
        if (!D || !D.length) {
            if (this.tM) {
                this.eC.style.display = 'none';
            }
            return;
        }
        if (!this.UY) {
            this.dk = -1;
        } else {
            if (!!aY) {
                this.dk = aY;
            }
            if (this.dk === undefined || this.dk === -1)
                this.dk = 1;
        }
        this.aJ = this.lV.as(D, this.iX, this.dU);
        if (!!this.UY && !!this.aJ[this.dk]) {
            E.bl(this.aJ[this.dk].M, azj);
        }
        this.iX.style.visibility = 'visible';
        if (!this.tM) {
            this.bOt();
        }
    };
    pB.bOt = function() {
        this.eC.style.display = '';
        this.eC.style.width = this.iX.offsetWidth + 'px';
        this.eC.style.height = this.iX.offsetHeight + 'px';
    };
    pB.is = function() {
        p.SY.aZ.is.apply(this, arguments);
        if (!this.tM) {
            this.eC.style.top = this.iX.offsetTop + 'px';
            this.eC.style.left = this.iX.offsetLeft + 'px';
            this.eC.style.display = 'none';
            this.M.insertAdjacentElement('afterBegin', this.eC);
            alert(this.M.innerHTML);
        }
    };
    pB.ED = function() {
        return this.sT.value;
    };
    pB.cvn = function(ai) {
        this.sT.value = ai || '';
    };
    pB.gC = function() {
        this.sT.focus();
    };
    pB.rV = function() {
        this.sT.select();
    };
    pB.ap = function() {
        return aP;
    };
    pB.bd = function() {
        return '<input class="zcom ztxt" type="text" tabindex="10" autocomplete="off"/><div class="zcom zcse"></div>';
    };
    pB.bT = function() {
        var A = E.aM(this.M);
        this.sT = A[0];
        this.iX = A[1];
        V.Q(this.sT, 'click', V.bU.K(V));
        V.Q(this.sT, 'blur', this.Uc.K(this));
        V.Q(this.sT, 'keypress', this.Qa.K(this));
        V.Q(this.sT, 'input', this.PJ.K(this));
        V.Q(document, 'click', this.aAi.K(this));
        V.Q(document, 'keydown', this.acf.K(this));
    };
    pB.Qa = function(L) {
        if (L.keyCode != 13)
            return;
        this.R('onenter');
    };
    pB.PJ = function() {
        var ai = U.aQ(this.sT.value);
        this.aAi();
        if (!ai)
            return;
        this.R('onchange', ai);
    };
    pB.acf = function(L) {
        if (this.iX.style.visibility != 'visible')
            return;
        var fB = L.keyCode;
        if (fB == 13) {
            this.Uc();
        } else if (fB == 38 || fB == 40) {
            this.cUO(fB - 39);
        }
    };
    pB.aJG = function(ai) {
        if (!!ai && !!ai.noaction) {
            if (!!this.aJ[1] && !!this.aJ[1].qr) {
                this.sT.value = this.aJ[1].qr || '';
                this.R('onselect', this.sT.value);
            }
        } else {
            this.sT.value = ai || '';
            this.R('onselect', this.sT.value);
        }
    };
    pB.cFb = function(aY) {
        var bM = this.aJ[this.dk];
        if (!this.UY) {
            if (!!bM)
                bM.LD(false);
            this.dk = aY;
        } else {
            if (aY != 0 && this.dk != aY) {
                if (!!bM)
                    bM.LD(false);
                this.dk = aY;
            }
        }
    };
    pB.aAi = function() {
        this.iX.style.visibility = 'hidden';
        this.aJ = this.lV.ah(this.aJ);
        if (!this.tM) {
            this.eC.style.display = 'none';
        }
    };
    pB.cUO = function(aA) {
        var bM = this.aJ[this.dk];
        if (!!bM)
            bM.LD(false);
        this.dk = (this.dk + aA) % this.aJ.length;
        if (this.dk < 0)
            this.dk = this.aJ.length - 1;
        var bM = this.aJ[this.dk];
        if (!!bM)
            bM.LD(true);
    };
    pB.Uc = function() {
        if (!this.aJ || !this.aJ.length)
            return;
        this.aJG(this.aJ[Math.max(0, Math.min(this.dk, this.aJ.length - 1))].ED());
        this.aAi();
        this.R('onenter');
    };
})();
(function() {
    var p = P(N.fw), sL, xE, HH = {};
    var IJ = function(D, ec, dQ) {
        if (!D)
            return false;
        for (var i = ec, l = ec + dQ; i < l; i++)
            if (D[i] == null)
                return false;
        return true;
    };
    var cKS = function(D, ec, dQ) {
        var wA = -1, nI = -1, bqs = ec + 2 * dQ, bnF = Math.max(0, ec - dQ);
        for (var i = bnF; i < bqs; i++) {
            if (D[i] == null) {
                nI = i;
                if (wA < 0)
                    wA = i;
            }
        }
        if (wA < 0)
            return null;
        if (nI - wA + 1 < dQ) {
            if (wA == bnF)
                wA = nI - dQ + 1;
            else if (nI == bqs)
                nI = wA + dQ - 1;
        }
        return [wA, nI - wA + 1];
    };
    p.eQ = C();
    sL = p.eQ.at(P(N.ut).nf);
    sL.bR = function(H) {
        this.aS(H);
        this.qv = 'idx_' + U.ar(6);
    };
    sL.fE = function(bB) {
        bB = bB || this.qv;
        this.sR(bB);
        this.dT(bB);
    };
    sL.bH = function(bB) {
        bB = bB || this.qv;
        this.dT(bB);
        return this.bu(bB).hash;
    };
    sL.dc = function(bB) {
        bB = bB || this.qv;
        this.dT(bB);
        return this.bu(bB).list;
    };
    sL.dP = function(bB, bZ) {
        bB = bB || this.qv;
        this.dT(bB);
        this.bu(bB).total = bZ || 0;
    };
    sL.ef = function(bB) {
        bB = bB || this.qv;
        this.dT(bB);
        return this.bu(bB).total;
    };
    sL.aUC = function(H) {
        var bB = (H || O).ckey || this.qv, bZ = this.ef(bB);
        if (bZ != null) {
            this.R('ontotalload', bB, bZ);
        } else if (this.zT(bB)) {
            this.cOR(H, this.ani.K(this, bB));
        } else {
            this.lF(H, this.ani.K(this, bB));
        }
    };
    sL.ani = function(bB, bZ) {
        bZ = bZ || 0;
        this.dP(bB, bZ);
        this.R('ontotalload', bB, bZ);
    };
    sL.awU = function(H) {
        H = H || O;
        var dQ = H.limit, ec = H.offset, bB = bB || H.ckey, D = this.dc(bB), bNo = IJ(D, ec, dQ), bZ = this.ef(H.ckey);
        if (bNo || !dQ || !bZ) {
            this.R('onlistload', bB, ec, ec + dQ);
            if (!!H.lazy || !dQ)
                return;
        }
        var ly = !!H.lazy ? [ec, dQ] : cKS(D, ec, dQ);
        if (!ly || ly.length != 2)
            return;
        ly[1] = Math.max(0, Math.min(ly[1], bZ - ly[0]));
        if (!ly[1])
            return;
        H.limit = ly[1];
        H.offset = ly[0];
        this.dW(H, this.SF.K(this, ly[0], ly[1], bB, H.hkey, !bNo));
    };
    sL.SF = function(ec, dQ, bB, cU, adY, D) {
        this.ee(D, cU, bB, ec);
        if (!!D && D.length < dQ)
            this.dP(bB, Math.min(this.ef(bB), this.dc(bB).length));
        if (!!adY)
            this.R('onlistload', bB, ec, !!D && D.length > 0 ? ec + D.length : ec);
    };
    sL.cnd = function(bB, ec, dQ) {
        dQ = dQ || 0;
        ec = ec || 0;
        return (ec + dQ) < (this.ef(bB) || Number.MAX_VALUE);
    };
    sL.jO = function(bM, bB, cU, zs) {
        if (!bM)
            return;
        var D = this.dc(bB), bD = this.bH(bB);
        !zs ? D.push(bM) : D.unshift(bM);
        if (!!cU)
            bD[bM[cU]] = bM;
        this.dP(bB, this.ef(bB) + 1);
    };
    sL.dX = function(bB, cC) {
        var D = this.dc(bB), bD = this.bH(bB), aY = U.bX(D, bD[cC]);
        if (aY >= 0) {
            delete bD[cC];
            D.splice(aY, 1);
        }
        this.dP(bB, this.ef(bB) - 1);
    };
    sL.dT = function(bB) {
        if (!!this.bu(bB))
            return;
        this.aD(bB, {list: [],hash: {}});
    };
    sL.ee = function(D, cU, bB, ec) {
        if (!D)
            return;
        ec = ec || 0;
        var bXr = this.dc(bB), bWZ = this.bH(bB);
        for (var i = 0, l = D.length, bM; i < l; i++) {
            bM = D[i] || null;
            bXr[i + ec] = bM;
            if (!!bM && !!bM[cU])
                bWZ[bM[cU]] = bM;
        }
    };
    sL.zT = function(bB) {
        return false;
    };
    sL.cOR = function(H, bS) {
        var bB = H.ckey || this.qv;
        if (!!HH[bB])
            return;
        HH[bB] = bS || F;
        this.dW(H, this.caR.K(this, bB, H.hkey));
    };
    sL.caR = function(bB, cU, D) {
        D = D || [];
        this.ee(D, cU, bB);
        var bS = HH[bB];
        delete HH[bB];
        bS(D.length);
    };
    sL.dW = F;
    sL.lF = F;
    var bFy = function(ez) {
        return ez instanceof p.eQ;
    };
    p.fe = C();
    xE = p.fe.at(P(N.ut).lq);
    xE.bR = function(by, ez, H) {
        this.aS();
        this.wQ = document.cloneElement('div', 'lhint');
        this.aZQ(by);
        this.gm(ez);
        this.bc(H);
    };
    xE.aZQ = function(by) {
        if (!!this.de)
            this.aJ = this.de.ah(this.aJ);
        this.de = by;
    };
    xE.gm = function(ez) {
        this.aUN();
        this.G = ez;
        if (!bFy(this.G))
            return;
        this.G.Q('onlistload', this.ceY.K(this));
        this.G.Q('ontotalload', this.caJ.K(this));
    };
    xE.bc = function(H) {
        H = H || O;
        this.ej = H.opage || {};
        this.dU = H.oitem || {};
        this.ds = H.ocache || {};
        if (this.ej.dirty) {
            this.ej.index = this.ej.dirty;
            delete this.ej.dirty;
        }
        this.Q('onempty', H.onempty || this.bN.K(this, '没有数据！'));
        this.Q('onloading', H.onloading || this.bN.K(this, '数据列表加载中...'));
        this.Q('onloaderror', H.onloaderror || this.bN.K(this, '数据列表加载出错，请重试！'));
        this.Q('onafterchange', H.onafterchange || F);
        this.Q('onbeforechange', H.onbeforechange || F);
        this.cIr();
        if (!!this.ej.bclass)
            this.ej.onchange = this.UM.K(this);
        this.G.aUC(this.ds);
    };
    xE.oy = function() {
        return this.aJ;
    };
    xE.aN = function() {
        this.aZQ();
        this.gm();
        if (!!this.dY)
            this.dY = this.dY.constructor.ah(this.dY);
        delete this.ej;
        delete this.dU;
        delete this.ds;
    };
    xE.ay = function() {
        if (!!this.dY) {
            var aEu = this.ej;
            aEu.dirty = aEu.dirty || aEu.index;
            aEu.index = this.dY.sr();
        }
        this.G.aUC(this.ds);
    };
    xE.bN = function(mZ) {
        this.wQ.innerText = mZ || '';
        this.dU.icase.innerHTML = '';
        this.dU.icase.appendChild(this.wQ);
    };
    xE.cIr = function() {
        this.ej.bclass = null;
        if (!!this.dY)
            this.dY = this.dY.constructor.ah(this.dY);
        switch (this.ej.type || 0) {
            case 0:
                this.ej.bclass = P(N.ui).Jm;
                return;
            case 1:
                this.ej.bclass = P(N.ui).alT;
                return;
            case 3:
                this.ej.bclass = P(N.ui).bqc;
                this.G.dP(this.ds.ckey, Math.min(this.G.ef(this.ds.ckey) || Number.MAX_VALUE, Number.MAX_VALUE));
                return;
        }
    };
    xE.bBN = function(Ec) {
        var aK = !Ec ? 'none' : '', bE = E.aq(this.ej.pcase);
        if (!!bE)
            bE.style.display = aK;
        bE = E.aq(this.ej.bcase);
        if (!!bE)
            bE.style.display = aK;
    };
    xE.aUN = function() {
        if (!this.G)
            return;
        this.G.iQ('onlistload');
        this.G.iQ('ontotalload');
    };
    xE.VV = function() {
        if (!this.de || !bFy(this.G))
            return;
        this.aJ = this.de.ah(this.aJ);
        this.bBN(false);
        var bZ = this.G.ef(this.ds.ckey);
        if (bZ >= 0) {
            this.R('onloading');
        } else {
            this.R('onloaderror');
        }
        this.ds.offset = this.dU.pF;
        this.ds.limit = Math.max(0, Math.min(this.ds.number, bZ - this.ds.offset));
        this.G.awU(this.ds);
    };
    xE.UM = function(aY) {
        this.R('onbeforechange', this.aJ);
        var bZ = this.G.ef(this.ds.ckey);
        this.dU.pd = Math.min(aY * this.ds.number, bZ != null ? bZ : Number.MAX_VALUE);
        this.dU.pF = Math.max(0, (aY - 1) * this.ds.number);
        this.VV();
    };
    xE.caJ = function(bB, bZ) {
        if (!!this.ds.ckey && this.ds.ckey != bB)
            return;
        this.ds.number = this.ds.number || bZ;
        this.ej.total = Math.ceil(bZ / this.ds.number);
        if (!this.ej.bclass) {
            this.UM(1);
        } else if (!this.dY) {
            this.dY = this.ej.bclass.as(this.ej.pcase, this.ej);
            if (!!this.ej.bcase)
                this.dY.cps(this.ej.bcase);
        } else {
            this.ej.bparent = this.ej.bcase;
            this.dY.aU(this.ej.pcase, this.ej);
        }
    };
    xE.ceY = function(bB, wA, nI) {
        if ((!!this.ds.ckey && this.ds.ckey != bB) || this.dU.pd < wA || (this.ej.type != 3 && this.dU.pF > Math.max(0, nI - 1)))
            return;
        this.de.ah(this.aJ);
        E.cX(this.wQ);
        this.dU.icase.innerHTML = '';
        var D = this.G.dc(bB);
        if (!D || !D.length || !this.dU.pd) {
            this.R('onempty');
        } else {
            this.aJ = this.de.as(D, this.dU.icase, this.dU);
            this.bBN(true);
            if (!!this.dY && this.ej.type == 3) {
                this.dY.bwB(!this.G.cnd(this.ds.ckey, this.dU.pF, this.ds.number));
                if (wA == nI) {
                    this.dY.bxc(this.dY.sr() - 1);
                    return;
                }
            }
            this.R('onafterchange', this.aJ);
        }
    };
})();
(function() {
    var p = P(N.fw), Mo, AF, Dr;
    p.nq = C();
    AF = p.nq.at(P(N.fw).eQ);
    AF.GA = function(H) {
        H = H || O;
        !H.item ? this.aDX(H.ckey, H.hkey, null) : this.DU(H, this.aDX.K(this, H.ckey, H.hkey));
    };
    AF.aDX = function(bB, cU, bM) {
        this.jO(bM, bB, cU, true);
        this.R('onitemadd', bM);
    };
    AF.axz = function(H) {
        H = H || O;
        !H.item ? this.ahT(H.ckey, '', false) : this.yz(H, this.ahT.K(this, H.ckey, H.item[H.hkey]));
    };
    AF.ahT = function(bB, cC, cV) {
        if (!!cV)
            this.dX(bB, cC);
        this.R('onitemdelete', cV);
    };
    AF.cyC = function(H) {
        H = H || O;
        if (!H.item) {
            this.R('onitemupdate', false);
            return;
        }
        var bS = this.bUF.K(this, H.ckey, H.item.obj[H.hkey], H.item.cmd, H.item.itm);
        switch (H.item.cmd) {
            case 0:
                this.bAL(H, bS);
                return;
            case 1:
                this.EL(H, bS);
                return;
            case 2:
                this.QW(H, bS);
                return;
        }
    };
    AF.bUF = function(bB, cC, bP, bG, bM) {
        if (!!bM) {
            switch (bP) {
                case 0:
                    this.bly(bB, cC, bM);
                    break;
                case 1:
                    this.Da(bB, cC, bM);
                    break;
                case 2:
                    this.QD(bB, cC, bG);
                    break;
            }
        }
        this.R('onitemupdate', bM);
    };
    AF.DU = F;
    AF.yz = F;
    AF.Da = F;
    AF.bly = F;
    AF.QD = F;
    AF.EL = F;
    AF.bAL = F;
    AF.QW = F;
    p.Dd = C();
    Mo = p.Dd.at(P(N.ut).dI, true);
    Mo.aU = function(H) {
        H = H || O;
        this.bw = H.oedit || {};
        this.Q('onadd', H.onadd || F);
        this.Q('ondelete', H.ondelete || F);
        this.Q('onupdate', H.onupdate || F);
    };
    Mo.aN = function() {
        if (!!this.bI)
            this.bI = this.bI.constructor.ah(this.bI);
        p.Dd.aZ.aN.call(this);
    };
    Mo.bCP = function(fS) {
        if (!this.bw.iclass)
            return;
        this.bw.data = this.I;
        this.bw.onok = this.aSK.K(this, fS);
        this.bI = this.bw.iclass.as(this.bw.parent || this.M, this.bw);
    };
    Mo.aSK = function(fS, dJ) {
        var bM = {itm: this.I,ipt: dJ};
        fS == 1 ? this.oJ(1, bM) : this.R('onadd', bM);
    };
    Mo.jQ = function() {
        this.bCP(0);
    };
    Mo.ig = function() {
        this.bCP(1);
    };
    Mo.oJ = function(fS, bM) {
        bM = bM || {};
        fS == 2 && (bM = {itm: bM});
        bM.cmd = fS || 0;
        bM.obj = this.I;
        this.R('onupdate', bM);
    };
    Mo.gQ = function() {
        if (!window.confirm('确定要删除该记录？'))
            return;
        this.R('ondelete', this.I);
    };
    Mo.Hv = function(dR) {
        if (!!this.bI) {
            if (!!this.bI.ew) {
                this.bI.ew(dR);
            }
        }
    };
    p.nJ = C();
    Dr = p.nJ.at(P(N.fw).fe);
    Dr.gm = function(ez) {
        p.nJ.aZ.gm.call(this, ez);
        if (!this.G)
            return;
        this.G.Q('onitemadd', this.cuO.K(this));
        this.G.Q('onitemdelete', this.ccg.K(this));
        this.G.Q('onitemupdate', this.cbf.K(this));
    };
    Dr.bc = function(H) {
        H = H || O;
        H.oitem = H.oitem || {};
        H.oitem.oedit = H.oedit || {};
        H.oitem.onadd = this.bEg.K(this);
        H.oitem.ondelete = this.aTw.K(this);
        H.oitem.onupdate = this.cKb.K(this);
        var gY = this.cCZ.K(this);
        this.Q('onitemadd', H.onitemadd || gY);
        this.Q('onitemdelete', H.onitemdelete || gY);
        this.Q('onitemupdate', H.onitemupdate || gY);
        p.nJ.aZ.bc.call(this, H);
    };
    Dr.GA = function(bM) {
        if (!bM)
            return;
        this.bEg(bM);
    };
    Dr.aUN = function() {
        if (!this.G)
            return;
        this.G.iQ('onitemadd');
        this.G.iQ('onitemdelete');
        this.G.iQ('onitemupdate');
        p.nJ.aZ.aUN.call(this);
    };
    Dr.cCZ = function(cV) {
        !!cV ? this.ay() : E.bN('暂时无法完成操作，请稍后再试！', true);
    };
    Dr.bEg = function(bM) {
        this.ds.item = bM;
        this.G.GA(this.ds);
    };
    Dr.cuO = function(ey) {
        this.R('onitemadd', ey, this.ds);
    };
    Dr.aTw = function(T) {
        this.ds.item = T;
        this.G.axz(this.ds);
    };
    Dr.ccg = function(ey) {
        this.R('onitemdelete', ey, this.ds);
    };
    Dr.cKb = function(bM) {
        this.ds.item = bM;
        this.G.cyC(this.ds);
    };
    Dr.aiE = function() {
        var cJ = this.oy();
        if (!!cJ && (cJ.length > 0)) {
            for (var aW = cJ.length; aW--; ) {
                if (this.ds.item.obj == cJ[aW].cF()) {
                    cJ[aW].Hv(false);
                }
            }
        }
    };
    Dr.cbf = function(ey) {
        this.aiE();
        this.R('onitemupdate', ey, this.ds);
    };
})();
(function() {
    var p = P(N.fw), il, afb, cjR = 2, cbG = 6000, avE = [], cbj = 30, cjY = /^(.*?)\//, cbH = {1: 'bimg',2: 'bimg',3: 'ph'}, cbF = ['t', 'count', 'name', 'ut'], cke = 'http://photo.163.com/photo/image/sniff.png?', cba = {a: {i: ['curl', 'surl', 'lurl'],u: ['purl', 'comm']},p: {i: ['ourl', 'murl', 'surl', 'turl', 'qurl'],u: ['comm']}};
    var bTr = function(aAs) {
        aAs = (aAs || '').split(';');
        var bD = {};
        for (var i = 0, l = aAs.length; i < l; bD[aAs[i]] = i, i++)
            ;
        return bD;
    };
    var aBP = function(ae) {
        return !ae || ae.indexOf('http://') >= 0;
    };
    var ckM = function(ae, bP) {
        return aBP(ae) ? ae : ae.replace(cjY, 'http://img$1.' + cbH[bP] + '.126.net/');
    };
    var aqp = function(yg, HF, Nc, MU) {
        var aA = !!HF ? -1 : 1, WZ = Nc[yg], XM = MU[yg];
        return aA * (WZ == XM ? 0 : (XM > WZ ? -1 : 1));
    };
    var bPN = function(bD, Nc, MU) {
        return bD[MU.id] > bD[Nc.id] ? -1 : 1;
    };
    var bPz = function(D, yg, HF) {
        if (!D || !D.length)
            return;
        D.sort(aqp.K(null, yg, HF));
    };
    var bOW = function(D, bD) {
        if (!D || !D.length || !bD)
            return;
        D.sort(bPN.K(null, bD));
    };
    var bLg = function(D, T) {
        if (!D || !D.length || !T)
            return;
        if (T.st == 8) {
            if (!T.seqStr)
                return;
            T.seqMap = bTr(T.seqStr);
            bOW(D, T.seqMap);
        } else {
            bPz(D, cbF[Math.floor(T.st / 2)], !!T.st % 2);
        }
    };
    p.aDM = C();
    il = p.aDM.at(P(N.ut).nf);
    il.bR = function(H) {
        this.aS(H);
        H = H || O;
        this.cGb = H.relation || 0;
        var tR = H.host || O;
        this.pM = {userName: tR.photo163HostName || tR.userName};
        var uJ = H.visitor || O, bxi = uJ.photo163VisitorName || uJ.userName;
        this.bCv = 'http://api.blog.163.com/' + (tR.userName || '') + '/dwr';
        this.rs = 'http://photo.163.com/photo/' + (this.pM.userName || '') + '/dwr' + (bxi ? ('?u=' + bxi) : '');
    };
    il.Gg = function(ey) {
        avE.push(U.gl(new Date(), 'yyyy-MM-dd HH:mm:ms.ms') + ' ' + this.pM.userName + ' ' + ey);
        if (avE.length > cbj)
            avE.shift();
    };
    il.csG = function() {
        return avE.join('\n');
    };
    il.cWt = function() {
        avE = [];
    };
    il.bgd = function(ey) {
        (new Image()).src = cke + ey;
    };
    il.bFE = function(baZ) {
        this.bgd('t=UserSpaceError&u=' + this.pM.userName + '&f=' + baZ);
    };
    il.cNI = function(ae) {
        this.bgd('t=AlbumUndefinedError&u=' + this.pM.userName + '&url=' + ae);
    };
    il.cOh = function(ae) {
        this.bgd('t=PhotoUndefinedError&u=' + this.pM.userName + '&url=' + ae);
    };
    il.adb = function(T, bP) {
        var dZ = cba[bP];
        if (!dZ || !T)
            return T;
        var A = dZ.u || [];
        for (var i = 0, l = A.length, ae; i < l; i++) {
            ae = T[A[i]];
            T[A[i]] = aBP(ae) ? ae : ('http://' + ae);
        }
        A = dZ.i || [];
        for (var i = 0, l = A.length; i < l; T[A[i]] = ckM(T[A[i]], T.s), i++)
            ;
        return T;
    };
    il.xD = function() {
        return this.bu('ud-' + this.pM.userName);
    };
    il.avs = function(T) {
        T = T || {};
        var ae = T.cacheFileUrl;
        T.st = T.seqType;
        delete T.seqType;
        T.cacheFileUrl = (aBP(ae) ? '' : 'http://') + ae;
        this.aD('ud-' + this.pM.userName, T);
    };
    il.cPU = function() {
        var T = this.xD();
        if (!!T) {
            this.agi(T);
            return;
        }
        this.Gg('getUserSpace begin ...');
        J.cvS(cbG);
        J.bi(this.rs, 'UserSpaceBean', 'getUserSpace', this.pM.userName, this.agi.K(this), this.cdt.K(this));
    };
    il.agi = function(T) {
        this.Gg('getUserSpace end and hasdata[' + !!T + ']');
        T = T || {};
        T.userType = T.userType != null ? T.userType : -2;
        this.avs(T);
        this.cga();
    };
    il.cdt = function(GV) {
        if (!!GV) {
            if (GV.errCode == 1) {
                this.bFE('blog_errcode_1');
                this.agi(null);
                return;
            }
        }
        this.bFE('photo');
        this.Gg('getUserSpace from photo error then from blog');
        J.bi(this.bCv, 'AlbumBeanNew', 'getUserSpace', this.agi.K(this), this.cdu.K(this));
    };
    il.cdu = function() {
        this.bFE('blog');
        this.agi(null);
    };
    il.bbV = function() {
        var cQ = (this.xD() || O).albumCount;
        return cQ == null || cQ > 0;
    };
    il.acN = function() {
        return (this.xD() || O).userType || 0;
    };
    il.mp = function(aG) {
        return (this.bu('ab-h-' + this.pM.userName) || O)[aG];
    };
    il.pR = function() {
        var bB = 'ab-l-' + this.pM.userName, D = this.bu(bB);
        if (!D && !this.bbV()) {
            D = [];
            this.aD(bB, D);
            this.aD('ab-h-' + this.pM.userName, {});
        }
        return D;
    };
    il.HO = function() {
        var D = this.pR();
        !D ? this.cPU() : this.R('onalbumlistload');
    };
    il.cga = function() {
        if (this.acN() < 0) {
            (this.xD() || {}).albumCount = 0;
            this.R('onalbumlistload');
            return;
        }
        this.aUl();
    };
    il.aUl = function() {
        var D = this.pR();
        if (!!D) {
            this.R('onalbumlistload');
            return;
        }
        var ae = (this.xD() || O).cacheFileUrl || '';
        this.Gg('getAlbumList url=' + ae + ' begin ...');
        J.KQ(ae, {timeout: 0,onload: this.amg.K(this)});
    };
    il.amg = function() {
        this.aD('ab-l-' + this.pM.userName, []);
        this.aD('ab-h-' + this.pM.userName, {});
        var T = this.xD(), D = U.aoT('g_a$' + T.userId + 'd');
        this.Gg('getAlbumList end and hasdata[' + !!D + ']');
        if (!D)
            this.cNI(T.cacheFileUrl);
        T.seqStr = U.aoT('g_a$' + T.userId + 's') || '';
        if (!!D && D.length > 0) {
            T.albumCount = 0;
            T.photoCount = 0;
            for (var i = 0, l = D.length; i < l; this.bog(D[i]), i++)
                ;
            this.aqc();
        }
        this.R('onalbumlistload');
    };
    il.bog = function(aa) {
        if (!this.aIs(aa))
            return;
        var T = this.xD(), D = this.bu('ab-l-' + this.pM.userName), bD = this.bu('ab-h-' + this.pM.userName);
        D.push(aa);
        T.albumCount++;
        T.photoCount += aa.count || 0;
        bD[aa.id] = this.adb(aa, 'a');
    };
    il.aqc = function() {
        bLg(this.pR(), this.xD());
    };
    il.aIs = function(aa) {
        return !!aa && aa.count > 0 && aa.au == 0 ? aa : null;
    };
    il.JB = function(aG) {
        var cQ = (this.mp(aG) || O).count;
        return cQ == null || cQ > 0;
    };
    il.axv = function(aG, aY) {
        return this.qh(aG)[aY];
    };
    il.acx = function(aG, gH) {
        var bD = this.bu('pt-h-' + aG);
        return !bD ? null : bD[gH];
    };
    il.qh = function(aG) {
        var bB = 'pt-l-' + aG, D = this.bu(bB);
        if (!D && !this.JB(aG)) {
            D = [];
            this.aD(bB, D);
            this.aD('pt-h-' + aG, {});
        }
        return D;
    };
    il.JE = function(aG) {
        var D = this.qh(aG);
        if (!!D) {
            this.R('onphotolistload', aG);
            return;
        }
        var aa = this.mp(aG) || O, ae = aa.purl;
        if (!!ae) {
            this.Gg('getPhotoList url=' + ae + ' begin ...');
            J.KQ(ae, {timeout: 0,onload: this.bBz.K(this, aG)});
            return;
        }
        this.Gg('getPhotoFileUrl begin ...');
        J.bi(this.rs, 'AlbumBean', 'getAlbumData', aG, '', '', aa.dmt || 0, false, this.cQg.K(this, aG));
    };
    il.bBz = function(aG) {
        var aa = this.mp(aG), D = U.aoT('g_p$' + aG + 'd');
        aa.rtry = aa.rtry || 0;
        if (!D && aa.rtry < cjR) {
            aa.rtry++;
            aa.purl = '';
            this.Gg('getPhotoList error and retry[' + aa.rtry + ']');
            this.JE(aG);
            return;
        }
        this.aD('pt-l-' + aG, []);
        this.aD('pt-h-' + aG, {});
        this.Gg('getPhotoList end and hasdata[' + !!D + ']');
        if (!D)
            this.cOh(aa.purl);
        aa.seqStr = U.aoT('g_p$' + aG + 's') || '';
        if (!!D && D.length > 0) {
            aa.count = 0;
            for (var i = 0, l = D.length; i < l; this.bnQ(aG, D[i]), i++)
                ;
            this.aqg(aG);
        }
        this.R('onphotolistload', aG);
    };
    il.cQg = function(aG, ae) {
        this.Gg('getPhotoFileUrl end and url=' + ae);
        ae = aBP(ae) ? ae : ('http://' + ae);
        if (!ae) {
            this.bBz(aG);
            return;
        }
        this.mp(aG).purl = ae;
        this.JE(aG);
    };
    il.bnQ = function(aG, dg) {
        if (!this.cgT(dg))
            return;
        var T = this.mp(aG);
        if (!!T)
            T.count++;
        var D = this.qh(aG);
        if (!D) {
            delete T.purl;
            return;
        }
        D.push(dg);
        var bD = this.bu('pt-h-' + aG);
        bD[dg.id] = this.adb(dg, 'p');
    };
    il.aqg = function(aG) {
        var aa = this.mp(aG), aae = this.qh(aG);
        bLg(aae, aa);
        var bAb = aa.cvid;
        if (!bAb)
            return;
        var aY = U.bX(aae, function(bM) {
            return bM.id == bAb;
        });
        if (aY <= 0)
            return;
        aae.unshift.apply(aae, aae.splice(aY, 1));
    };
    il.cgT = function(dg) {
        dg.name = dg.desc;
        return dg;
    };
    p.bgC = C();
    afb = p.bgC.at(p.aDM);
    afb.bR = function(H) {
        H = H || {};
        H.visitor = H.host;
        H.visitor.photo163VisitorName = H.host.photo163HostName;
        this.aS(H);
    };
    afb.agi = function(T) {
        this.Gg('getUserSpace end and hasdata[' + !!T + ']');
        if (!!T && T.userType != -1) {
            this.avJ(T, 0);
            return;
        }
        var bP = !T ? -2 : -1;
        J.bi(this.rs, 'UserSpaceBean', 'getUserSpaceWithSec', this.pM.userName, this.avJ.Xr(this, bP));
    };
    afb.avJ = function(T, bP) {
        T = T || {};
        T.userType = bP;
        this.avs(T);
        this.aUl();
    };
    afb.bUl = function(bP) {
        J.afr(this.bCv, 'AlbumBeanNew', 'needUpdateModifyTime', bP || '');
    };
    afb.En = function(aa) {
        J.bi(this.rs, 'AlbumBean', 'create', aa.name, aa.desc, aa.type, aa.password || '', aa.question || '', this.Rr.K(this));
    };
    afb.Rr = function(aa) {
        if (!!aa) {
            this.bog(aa);
            this.aqc();
            this.bUl('CreateAlbum');
        }
        this.R('onalbumadd', aa.id);
    };
})();
P('nb.c');
P('nb.m');
P('nb.w');
P('nb.l');
P('nb.x');
P('nb.p');
(function() {
    var p = P('nb.x'), aFS = '__scrkey__', hg = '__tglkey__', bam = 'nbw-tgl', cQv = 'js-bgc9-hover', amd = 60 * 1000, aTR = 60 * amd, cYE = 24 * aTR, wN = /\@|\_|(?:\.\.)/, vx = /(?:\.|\.www)$/, cHs = /(?:<embed.*?>)(<\/embed>)?/gi, cHI = /'|"/g, cIt = /(?:p|\/p|br)\b|img\ssrc="http\:\/\/b\.bst\.126\.net\//i, bHq = {}, aOB = {};
    var bZB = function() {
        if (window.name != '_neblog' && /^http:\/\/([^\/]+\.)?blog.163.com/.test(document.referrer)) {
            var By = U.HE(window.name);
            if (!!By)
                aOB[By.op] = By;
        }
        window.name = '_neblog';
        var bF = E.aq('blog-163-com-template');
        if (!bF)
            return;
        var A = bF.getElementsByTagName('textarea');
        if (!!A && A.length > 0)
            for (var i = 0, l = A.length, bP, bM; i < l; i++) {
                bM = A[i];
                if (!bM.id)
                    continue;
                bP = U.aQ(bM.name.toLowerCase());
                if (bP == 'jst') {
                    E.of(bM);
                    continue;
                }
                if (bP == 'txt') {
                    nb.x.ao(bM.id, bM.value || '');
                    continue;
                }
                if (bP == 'ntp') {
                    E.cI(bM.value || '', bM.id);
                    continue;
                }
            }
        E.cT(bF);
    };
    var bVN = function(ax, bS, L) {
        V.Uh(L);
        V.R(document, 'click');
        var ajq = E.aV(ax, bam);
        ajq ? E.bL(ax, bam) : E.bl(ax, bam);
        !!bS && bS(!ajq);
    };
    var bUj = function(ax) {
        var bE = E.aq(ax);
        if (!bE)
            return;
        var aK = bE.style;
        aK.display = aK.display == 'none' ? '' : 'none';
    };
    var cIk = function(L) {
        var bE = V.aq(L);
        if (!bE)
            return;
        document.sbody.scrollTop += bE.scrollTop;
        bE.scrollTop = 0;
    };
    var cLn = function(bE) {
        return bE == document.mbody;
    };
    var aHk = function(bE) {
        return bE == document.sbody;
    };
    p.a = function(_content, bE) {
        _content = '<' + U.aQ(_content.replace(/<|>/g, ' ').replace(/\bon.*?\b/ig, '')) + '>';
        bE.insertAdjacentHTML('beforeBegin', _content);
        var bv = bE.parentNode;
        E.cT(bE);
        var Nq = E.aM(bv);
        for (var i = 0; i < Nq.length; i++) {
            if (Nq[i].tagName == 'EMBED') {
                if ((Nq[i].src || '').indexOf('bookview.swf') > -1) {
                    Nq[i].height = Math.floor(bv.scrollWidth * 500 / 849) + 'px';
                }
            }
        }
    };
    p.b = function(L) {
        p.bwY(V.aq(L));
    };
    p.c = function(yY, L) {
        if (!!nb.c.dn)
            return;
        V.bU(L);
        nb.l.cO.bm({target: yY});
    };
    p.vI = function(bE, bQh, bXh) {
        var om = !bXh ? cLn : aHk;
        return !bQh ? E.oQ(bE, om) : E.mI(bE, om);
    };
    p.LD = function(bE) {
        if (!B.fa)
            return;
        if (!U.fH(bE, 'array')) {
            E.cR(bE, cQv);
        }
        for (var i = 0, l = bE.length; i < l; p.LD(bE[i]), i++)
            ;
    };
    p.Dl = function(bE, bS) {
        bE = E.aq(bE);
        if (!bE || !!bE[hg])
            return;
        bE[hg] = true;
        var ax = bE.id = bE.id || ('xnd_' + U.ar(10));
        if (!U.fH(bS, 'function')) {
            bS = E.aq(bS);
            if (!!bS) {
                var adC = bS.id = bS.id || ('xnd_' + U.ar(10));
                bS = bUj.K(null, adC);
            }
        }
        V.Q(bE, 'click', bVN.K(null, ax, bS));
    };
    p.mU = function(bE) {
        document[B.ye ? 'body' : 'sbody'].scrollTop = p.vI(bE, false, true) || 0;
    };
    p.bvz = function(bE) {
        if (!B.fa)
            return;
        bE = E.aq(bE);
        if (!bE || bE[aFS])
            return;
        bE[aFS] = true;
        V.Q(bE, 'scroll', cIk);
    };
    p.apR = function(D, aR, om) {
        var hw = {};
        om = om || F;
        if (!!D && D.length > 0)
            for (var i = 0, l = D.length, bM; i < l; i++) {
                bM = D[i];
                if (!bM)
                    continue;
                hw[bM[aR]] = bM;
                om(bM);
            }
        return hw;
    };
    p.jx = function(hJ) {
        if (!hJ)
            return;
        if (U.fH(hJ, 'string'))
            hJ = parseInt(hJ);
        var bAy = new Date(Date.parse(Date.servTime)), bzB = new Date(hJ), gP = bAy.getTime() - hJ;
        if (gP > 13 * aTR)
            return U.gl(hJ, (bzB.getFullYear() != bAy.getFullYear() ? 'yyyy-' : '') + 'MM-dd HH:mm');
        for (var i = 12; i > 0; i--)
            if (gP > i * aTR)
                return i + '小时前';
        if (gP > 30 * amd)
            return '半小时前';
        if (gP > 15 * amd)
            return '一刻钟前';
        if (gP > 10 * amd)
            return '10分钟前';
        if (gP > 5 * amd)
            return '5分钟前';
        return '1分钟前';
    };
    p.ay = function(ae, T) {
        if (!ae)
            return;
        if (!!T && !!T.op)
            window.name = U.sC(T);
        location.href = ae;
    };
    p.arb = function(bv, T) {
        bv = E.aq(bv);
        if (!bv)
            return;
        if (!!T) {
            var ba = [];
            for (var p in T)
                ba.push(p + '="' + T[p] + '"');
            ba.push('allownetworking="' + (T.network ? 'all' : 'internal') + '"');
            T = ba.join(' ');
        }
        bv.innerHTML = '<embed ' + (T || '') + ' type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" wmode="transparent" quality="high" allowscriptaccess="never"></embed>';
    };
    p.CX = function(aR) {
        return aOB[aR] || null;
    };
    p.cwj = function(aR, ai) {
        aOB[aR] = ai;
    };
    p.ao = function(aR, T) {
        bHq[aR] = T;
    };
    p.cF = function(aR) {
        return bHq[aR];
    };
    p.ED = function(aR) {
        var ai = window[aR];
        try {
            if (!delete window[aR])
                throw '';
        } catch (e) {
            window[aR] = undefined;
        }
        return ai;
    };
    p.aeM = function(dR, dj) {
        return p.bQ(dj) + nb.c.clL(dR);
    };
    p.bQ = function(dj) {
        dj = dj || nb.c.bC.userName;
        return !dj && 'http://blog.163.com/' || (vx.test(dj) || dj.search(wN) >= 0 ? ('http://blog.163.com/' + dj + '/') : ('http://' + dj + '.blog.163.com/'));
    };
    p.gr = function(dj, bP) {
        var tR = nb.c.bC;
        if (dj == tR.userName) {
            var qS = !bP ? tR.f60 : tR.f140;
            if (!!qS)
                return qS;
        }
        return location.fce + (dj || nb.c.bC.userName) + '&b=' + (bP || 0);
    };
    p.Lo = function(jC) {
        if (!jC)
            return 'http://blog.163.com/';
        return ('http://blog.163.com/u/' + jC + '/');
    };
    p.Sd = function(jC, bP) {
        return location.passportfce + (jC || nb.c.bC.userName) + '&b=' + (bP || 0);
    };
    p.LU = function(dj, bP) {
        return location[dj === nb.c.aH.userName ? 'fce' : 'fce2'] + (dj || nb.c.bC.userName) + '&b=' + (bP || 0);
    };
    p.LA = function(bpv, ax) {
        if (!bpv || !ax)
            return 'http://photo.163.com';
        return 'http://photo.163.com/' + bpv + '/pp/' + ax + '.html';
    };
    p.aVV = function(arg) {
        return location.api + 'cap/captcha.jpgx?parentId=' + (arg || nb.c.bC.userId) + '&r=';
    };
    p.aZx = function(_content) {
        return (_content || '').replace(cHs, function($1) {
            return $1.toLowerCase() == '</embed>' ? '' : '<div title="点击查看" class="js-video bdwa bds0 bdc0 fc05" onclick="nb.x.a(\'' + $1.replace(cHI, '&quot;') + '\',this);">请点击查看影音文件...</div>'
        });
    };
    p.bwY = function(bE) {
        if (!bE || !bE.href)
            return;
        !bE.target ? location.href = bE.href : window.open(bE.href, bE.target);
    };
    p.cYm = function(_content) {
        var aA = false;
        return (_content || '').replace(/<|>|\s/g, function($1) {
            aA = aA || $1 == '<' && (_content.substr(arguments[1] + 1, 40) || '').search(cIt) == 0;
            if (aA) {
                aA = $1 != '>';
                return $1;
            }
            switch ($1) {
                case '<':
                    return '&lt;';
                case '>':
                    return '&gt;';
                case ' ':
                    return '&nbsp;';
            }
            return $1;
        });
    };
    p.cyH = function(aA) {
        J.bi(location.dwr, 'UserBeanNew', 'updateGuide', aA);
    };
    p.ajJ = function(dJ, by) {
        var placeholder = dJ.getAttribute('placeholder');
        if (!!placeholder) {
            if (dJ.value == "") {
                dJ.value = placeholder;
                E.bl(dJ, by || 'ssl-fc2');
            }
            V.Q(dJ, 'focus', function() {
                if (this.value == placeholder) {
                    E.bL(this, by || 'ssl-fc2');
                    this.value = "";
                }
            }.K(dJ));
            V.Q(dJ, 'blur', function() {
                if (this.value == "") {
                    E.bl(this, by || 'ssl-fc2');
                    this.value = placeholder;
                }
            }.K(dJ));
        }
    };
    p.clx = function(name) {
        return (/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(name));
    };
    p.Sd = function(passportname, bP) {
        return 'http://os.blog.163.com/common/ava.s?passport=' + passportname + '&b=' + (bP || 0);
    };
    p.cXh = function(passportname) {
        if (passportname.slice(-8) === "@163.com")
            return passportname.replace("@163.com", "");
        if (passportname.slice(-8) === "@126.com")
            return passportname.replace("@126.com", "@126");
        else if (passportname.slice(-8) === "@188.com")
            return passportname.replace("@188.com", "@188");
        else if (passportname.slice(-13) === "@popo.163.com")
            return passportname.replace("@popo.163.com", ".popo");
        else if (passportname.slice(-12) === "@vip.163.com")
            return passportname.replace("@vip.163.com", ".vip");
        else if (passportname.slice(-9) === "@yeah.net")
            return passportname.replace("@yeah.net", "@yeah");
        else if (passportname.slice(-5) === "@game")
            return passportname;
        else if (passportname.slice(-12) === "@vip.126.com")
            return passportname;
        return passportname;
    };
    p.yJ = function(photo163Name) {
        if (photo163Name.slice(-4) === "@126")
            return photo163Name.replace("@126", "@126.com");
        else if (photo163Name.slice(-4) === "@188")
            return photo163Name.replace("@188", "@188.com");
        else if (photo163Name.slice(-5) === ".popo")
            return photo163Name.replace(".popo", "@popo.163.com");
        else if (photo163Name.slice(-4) === ".vip")
            return photo163Name.replace(".vip", "@vip.163.com");
        else if (photo163Name.slice(-5) === "@yeah")
            return photo163Name.replace("@yeah", "@yeah.net");
        else if (photo163Name.slice(-5) === "@game")
            return photo163Name;
        else if (photo163Name.slice(-12) === "@vip.126.com")
            return photo163Name;
        else if (p.clx(photo163Name)) {
            return photo163Name;
        } else {
            return photo163Name + "@163.com";
        }
    };
    p.dfe = function(_content) {
        _content = _content || '';
        var dec = /(<img(?:|[^>]+?)(?=\ssrc))(?:\ssrc)(=.*?>)/gi;
        return _content.replace(dec, '$1 lazysrc$2');
    };
    p.dlB = function(dmP, iZ) {
        try {
            var gA = new Image();
            gA.src = 'http://blog.163.com/newpage/images/analyse.png?act=' + dmP + '&t=' + new Date().getTime() + '&href=' + (iZ || '');
        } catch (e) {
        }
    };
    bZB();
    document.lbody = E.aq('blog-163-com-layer') || document.body;
    document.cbody = E.aq('blog-163-com-container') || document.body;
    document.sbody = E.aq('blog-163-com-ie6body') || document.documentElement || document.body;
    document.mbody = document.cbody.parentNode.parentNode || document.body;
    document.column = E.aM(document.cbody, 'nb-jsp');
    p.bvz(document.cbody.parentNode);
})();
(function() {
    var p = P('nb.c'), wR = nb.x.ED('UD') || O, bq = nb.x.ED('CF') || {};
    var cQs = function() {
        bq.cj = bq.cj.join(',');
        if (!!bq.ci && bq.ci.length > 0) {
            for (var i = 0, l = bq.ci.length; i < l; J.oq(bq.ci[i]), i++)
                ;
            delete bq.ci;
        }
        var Rq = '&r=' + p.bC.imageUpdateTime;
        p.bC.f60 = nb.x.gr(p.bC.userName) + Rq;
        p.bC.f140 = nb.x.gr(p.bC.userName, 1) + Rq;
    };
    var bkz = function(aR, dE) {
        return (bq[aR] || '').search('(?:^|,|;)' + dE + '(?:,|;|$)') >= 0;
    };
    var cKA = function(bW) {
        bW = bW.replace(';;', ',');
        if (!bW || bW == ',')
            return '';
        var ba = bW.split(';'), agE = [];
        while (ba.length > 0) {
            for (var i = 0, dE; i < ba.length; i++) {
                if (typeof (ba[i]) == 'string' && !!ba[i])
                    ba[i] = ba[i].split(',');
                if (!!ba[i] && ba[i].length > 0) {
                    dE = ba[i].shift();
                    if (!dE)
                        continue;
                    agE.push(dE);
                    if (p.bdI(dE)) {
                        bq.hud = bq.hud || [];
                        bq.hud.push(dE);
                    }
                    if (p.bce(dE)) {
                        bq.hfv = bq.hfv || [];
                        bq.hfv.push(dE);
                    }
                } else {
                    ba.splice(i, 1);
                    i--;
                }
            }
        }
        return agE.join(',');
    };
    p.crB = bq.cb || '';
    p.hP = !!bq.cd;
    p.ant = !!bq.ca;
    p.cmJ = !!bq.cw;
    p.dn = !!bq.cc;
    p.gf = bq.ck || 0;
    p.bC = wR.host;
    p.aH = wR.visitor || O;
    p.bdH = p.gf >= bq.cp.nr;
    p.Kj = bq.cp.fr != 2;
    p.cnz = bq.cp.cr;
    p.qu = p.gf >= bq.cp.cr;
    p.KW = bq.cp.cr;
    p.cyz = bq.cp.vr;
    p.bdf = false;
    p.bvS = bq.cu;
    p.cYP = bq.cv;
    p.ayg = bq.ct.nav;
    p.coW = bq.ct.enabled;
    p.bcy = bq.ct.defaultnav;
    p.csV = function() {
        return this.IL().tl || 3;
    };
    p.clL = function(dR) {
        return bq.cm[dR || 0] || "";
    };
    p.hZ = function() {
        if (bq.seq == null)
            bq.seq = bq.ce.indexOf(';') < 0 ? bq.ce : cKA(bq.ce);
        return bq.seq;
    };
    p.IL = function() {
        return bq.co || O;
    };
    p.apq = function() {
        return {l: bq.cf,t: this.IL().ti,m: bq.ce};
    };
    p.ahY = function(aR) {
        if (aR == 'fv')
            return bq.hfv;
        if (aR == 'ud')
            return bq.hud;
        return null;
    };
    p.crs = function(dE) {
        if (p.bce(dE))
            return 5;
        if (p.bdI(dE))
            return 10;
        return dE;
    };
    p.bxA = function() {
        return bq.cr;
    };
    p.aVm = function() {
        return bq.cq;
    };
    p.cng = function() {
        return !!this.IL().pv;
    };
    p.bdI = function(dE) {
        return dE > 0 && !p.bwS(dE) && !p.bce(dE);
    };
    p.bwS = function(dE) {
        return bkz('cj', dE);
    };
    p.bce = function(dE) {
        return bkz('cl', dE);
    };
    p.bcZ = function(dE) {
        return bkz('ce', dE);
    };
    p.cqi = function(dE) {
        bq.ce += ',' + dE;
    };
    p.cmD = function() {
        return bq.wc;
    };
    p.aJe = function() {
        return p.bdf;
    };
    cQs();
})();
(function() {
    var p = P('nb.w'), my, IK;
    p.fc = C();
    IK = p.fc.at(P(N.ut).lq);
    IK.bR = function(cW, T) {
        this.aS();
        this.az = cW;
        this.bq = T || {};
        if (!this.az)
            return;
        this.M = this.az.csT();
        this.az.Q('onmaction', this.Fy.K(this));
        this.az.Q('ontaction', this.aOL.K(this));
        this.az.Q('onchange', this.cDX.K(this));
        this.az.Q('onreappend', this.bBH.K(this));
        this.az.Q('onbeforechange', this.cCM.K(this));
    };
    IK.cDX = function() {
        var eR = this.axw, bmk = this.beR();
        this.axw = bmk;
        eR != bmk && this.HB();
        this.mB();
    };
    IK.beR = function() {
        return this.az.EQ();
    };
    IK.aU = F;
    IK.Fy = F;
    IK.aOL = F;
    IK.bBH = F;
    IK.HB = F;
    IK.mB = F;
    IK.cCM = F;
    p.eq = C();
    my = p.eq.at(P(N.ut).lq);
    my.bR = function(bF) {
        this.aS();
        this.M = E.aq(bF);
        this.baU = document.cloneElement('div', 'nb-cv opacity l');
        var A = E.bz(this.M, 'nb-jsc');
        if (A.length < 3) {
            this.iX = A[0];
        } else {
            this.yj = A[0];
            this.xJ = A[1];
            this.iX = A[2];
            this.cLB();
            nb.x.bvz(this.iX.parentNode);
        }
        var bF = E.aM(this.iX, 'nb-init');
        this.cPy(bF && bF[0] || null);
    };
    my.aU = function(T) {
        if (!this.bp)
            return;
        this.bp.aU(T);
    };
    my.cA = function() {
        try {
            if (!!this.bp)
                return;
            var by = nb.m.aVe(this.M.id);
            if (!by)
                return;
            this.bp = new by(this, this.p);
            delete this.p;
        } catch (e) {
            alert('模块构建异常:' + e.message);
        }
    };
    my.ew = function(ju, mZ) {
        if (!ju) {
            E.cX(this.baU);
            E.kz();
            return;
        }
        E.bN(mZ, true, true, 'fail');
        this.M.appendChild(this.baU);
        if (B.fa) {
            var aK = this.baU.style;
            aK.width = this.M.clientWidth + 'px';
            aK.height = this.M.clientHeight + 'px';
        }
    };
    my.jp = function() {
        return this.M.id;
    };
    my.oA = function() {
        return this.M;
    };
    my.bxl = function() {
        return this.xJ;
    };
    my.cmb = function() {
        return this.yj.parentNode.parentNode;
    };
    my.csT = function() {
        return this.iX;
    };
    my.cmv = function() {
        return this.yj;
    };
    my.bxV = function() {
        return this.aVZ || 0;
    };
    my.iV = function(aF, Yk) {
        this.yj[!Yk ? 'innerText' : 'innerHTML'] = aF || '模块标题';
    };
    my.dV = function(_content) {
        this.iX.innerHTML = _content || '&nbsp;';
    };
    my.EQ = function() {
        return E.aV(this.M.parentNode, 'js-narrow');
    };
    my.eE = function(bOC, ajs) {
        var A = E.bz(bOC, 'xtag');
        if (!A || !A.length)
            return;
        for (var i = 0, l = A.length; i < l; V.Q(A[i], 'mousedown', this.vs.K(this, ajs, i)), i++)
            ;
    };
    my.cLB = function() {
        this.eE(this.xJ, 'onmaction');
        this.eE(this.yj, 'ontaction');
        if (!nb.c.hP)
            return;
        var A = this.cmb();
        E.cR(A, 'js-hover-777');
        A = A.getElementsByTagName('a');
        if (!!A && A.length > 0)
            for (var i = 0, l = A.length; i < l; V.Q(A[i], 'mousedown', V.Uh), i++)
                ;
        A = E.bz(this.xJ, 'ztag');
        V.Q(A[0], 'mousedown', this.VZ.K(this));
    };
    my.cPy = function(bF) {
        var dz, Ew;
        if (!!bF) {
            var A = bF.getElementsByTagName('textarea') || [];
            for (var i = A.length - 1, bP, bM; i >= 0; i--) {
                bM = A[i];
                bP = U.aQ(bM.name.toLowerCase());
                if (bP == 'js') {
                    Ew = bM.value || '';
                    continue;
                }
                if (bP == 'html') {
                    dz = bM.value || '';
                    continue;
                }
                if (!bM.id)
                    continue;
                if (bP == 'jst') {
                    E.of(bM);
                    continue;
                }
                if (bP == 'txt') {
                    nb.x.ao(bM.id, bM.value || '');
                    continue;
                }
                if (bP == 'ntp') {
                    E.cI(bM.value || '', bM.id);
                    continue;
                }
            }
            E.cT(bF);
        }
        this.chc(Ew);
        if (!!dz)
            this.dV(dz);
    };
    my.VZ = function(L) {
        V.bU(L);
        this.R('onhide', this.M.id);
    };
    my.vs = function(ajs, aY, L) {
        V.bU(L);
        this.R(ajs, aY);
    };
    my.chc = function(JJ) {
        JJ = U.aQ(JJ || '');
        if (!!JJ) {
            try {
                new Function(JJ).call(this);
                this.aVZ = this.p && this.p.b;
            } catch (e) {
                try {
                    var JJ = JJ.replace(/\u2028/g, '');
                    new Function(JJ).call(this);
                    this.aVZ = this.p && this.p.b;
                } catch (e2) {
                }
            }
        }
        if (this.aVZ == null)
            this.aVZ = 2;
    };
})();
(function() {
    var p = P('nb.m'), fm = {}, bUB = 100, aoH = {ud: {m: 'getCustomModulesData'},fv: {m: 'getResourceModulesData'}}, cJO = 100, cIV = 4, aim = [];
    var ajZ = function(pS) {
        return pS instanceof nb.w.eq;
    };
    var bee = function(cW) {
        if (!U.fH(cW, 'array'))
            return !!p.aVe(cW);
        for (var i = 0, l = cW.length; i < l; i++)
            if (!bee(cW[i]))
                return false;
        return true;
    };
    var beS = function(cW) {
        if (!U.fH(cW, 'array')) {
            p.oz(cW).cA();
            return;
        }
        J.akE();
        for (var i = 0, l = cW.length; i < l; beS(cW[i]), i++)
            ;
        J.ahW();
    };
    var cMD = function() {
        if (!nb.c.ant)
            return;
        for (var m in aoH) {
            if (!nb.c.ahY(m))
                continue;
            J.bi(location.dwr, 'SetupBeanNew', aoH[m].m, nb.c.bC.userId, cfw.K(null, m));
        }
    };
    var cfw = function(aR, D) {
        var T = aoH[aR];
        if (!D || !D.length || !T)
            return;
        T.l = nb.c.ahY(aR);
        T.d = nb.x.apR(D, 'id');
        bud(aR);
    };
    var cGu = function(aR, T) {
        if (!T)
            return;
        beS(T.id);
        var cW = p.oz(T.id);
        if (!!cW)
            cW.aU(T);
    };
    var bud = function(aR) {
        var T = aoH[aR];
        if (!T || !T.l || !T.l.length) {
            delete aoH[aR];
            return;
        }
        if (bee(T.l[0]))
            cGu(aR, T.d[T.l.shift()]);
        window.setTimeout(bud.K(null, aR), bUB);
    };
    var btB = function() {
        if (!aim.length)
            return;
        if (bee(aim[0]))
            beS(aim.shift());
        if (!aim.length)
            return;
        window.setTimeout(btB, cJO);
    };
    p.cqy = function(D) {
        if (!D || !D.length)
            return;
        var A;
        for (var i = 0, l = D.length, cW, azR; i < l; i++) {
            cW = p.byj(D[i]);
            if (!cW || !nb.c.bwS(D[i]))
                continue;
            azR = cW.bxV();
            if (azR == null || azR == 2)
                continue;
            if (azR == 1) {
                aim.push(D[i]);
                continue;
            }
            if (!A || A.length >= cIV) {
                A = [];
                aim.push(A);
            }
            A.push(D[i]);
        }
        btB();
        cMD();
    };
    p.byj = function(dE) {
        var cW = p.oz(dE);
        if (!cW) {
            cW = new nb.w.eq(dE);
            fm[dE] = cW;
            cW.cA();
        }
        return cW;
    };
    p.oz = function(dE) {
        return fm[dE];
    };
    p.aVe = function(dE) {
        var YA = P('nb.p.m' + nb.c.crs(dE));
        return nb.c.hP ? YA.dM : YA.db;
    };
    p.cA = function(dE) {
        if (!p.aVe(dE))
            return;
        var cW = p.oz(dE);
        if (!!cW && nb.c.bcZ(dE) && cW.bxV() == 2)
            cW.cA();
    };
})();
(function() {
    var p = P('nb.w'), aqC, cYM = 'js-fx-124', clb = 'http://blog.163.com/public/theme/single/?t=';
    p.brO = C();
    aqC = p.brO.at(P(N.ut).GP, true);
    aqC.fZ = function() {
        this.M = document.cloneElement('div', 'nbw-win nbw-tfv wsy clearfix');
        this.M.innerHTML = nb.x.cF('nb-txt-c0');
        this.bV = E.aM(this.M, 'ztag');
        this.bV[3] = E.aM(this.bV[3]);
    };
    aqC.aXj = function(dK) {
        return;
    };
    aqC.vs = function(aA) {
        if (!this.GJ)
            return;
        if (aA == 2) {
            nb.x.ay(clb + (this.GJ.ut || this.GJ.ti) + (this.GJ.ud ? ('&c=' + this.GJ.ui) : ''));
            return;
        }
        if (!nb.c.dn) {
            nb.l.cO.bm();
            return;
        }
        if (!window.confirm(!aA ? '确定要使用此风格？' : '确定要收藏此风格？'))
            return;
        var xS = !aA ? 'useThisTheme' : 'collectThisThemeToMyFavourite';
        this.bV[3][aA].disabled = true;
        E.bN('数据保存中...', true, false, 'loading');
        J.bi(location.dwr, 'SetupBeanNew', xS, this.GJ.ut || this.GJ.ti, this.GJ.ui || nb.c.bC.userId, this.cvA.K(this, aA));
    };
    aqC.cvA = function(aA, cV) {
        E.kz();
        if (!cV) {
            this.bV[3][flag].disabled = false;
            E.bN('暂时无法保存数据，请稍后再试！', true, false, 'fail');
            return;
        }
        if (!aA)
            nb.x.ay(nb.x.bQ(nb.c.aH.userName));
    };
})();
(function() {
    var p = P(N.ui), zk, aP = 'ui-' + U.ar();
    p.fp('#<uispace> .iblock{display:-moz-inline-box;display:inline-block;*display:inline;zoom:1;} #<uispace> .fs1{font-size:14px;} #<uispace> .fw1{font-weight:bold;} #<uispace> .noselect{user-select:none;-moz-user-select:none;-webkit-user-select:none;-khtml-user-select:none;-o-user-select:none;} #<uispace> .zcvr,#<uispace> .zhnt{display:none;position:fixed;_position:absolute;z-index:80;} #<uispace> .zcvr{top:0;left:0;width:100%;height:100%;background:url(' + N.rc.r + 'empty.png);} #<uispace> .zhnt{position:absolute;height:36px;line-height:36px;top:5px;right:5px;padding:11px 10px 11px 4px;color:#000;z-index:120;vertical-align:middle;} #<uispace> .showhint-0{background-image:url(/common/showhint/hintbg.png);background-repeat:no-repeat;background-position:-7px -1px;_background-image:url(/common/showhint/hintbg2.png);} #<uispace> .showhint-1{background-image:url(/common/showhint/hintbg_right.png);background-repeat:no-repeat;background-position:0px 0px;width:20px;_background-image:url(/common/showhint/hintbg2_right.png);} #<uispace> .showhint-2{background-image:url(/common/showhint/hinticon.png);background-repeat:no-repeat;} #<uispace> .showhint-2-0{background-position:0 1px;} #<uispace> .showhint-2-1{background-position:0 -45px;} #<uispace> .showhint-2-2{background-position:0 -90px;} #<uispace> .showhint-3{background-image:url(/common/showhint/loading.gif);background-repeat:no-repeat;} #<uispace> .typeicon{width:25px;height:25px;padding:4px 5px 7px 6px;margin:0 10px 0 15px;line-height:25px;vertical-align:middle;} #<uispace> .typeicon .loading{width:25px;height:25px;line-height:25px;vertical-align:middle;} #<uispace> .bg_right{position:absolute;right:-20px;top:2px;z-index:120;display:block;height:36px;padding:11px 0 11px 0;} #<uispace> .txthint{vertical-align:middle;} #<uispace> .showhint-bg{position:absolute;right:0;top:0;width:200px;height:30px;background:#f5f5f5;border:1px solid #ccc;} #<uispace>-hack{display:none;position:absolute;z-index:101;width:100%;height:100%;overflow:hidden;}', aP);
    p.bry = C();
    zk = p.bry.at(p.eB, true);
    zk.bR = function(bv, H) {
        this.aS(bv, H);
        V.Q(window, 'resize', this.agp.K(this));
        this.tM = (B.fa && !!H.nohack) || (!B.fa && !H.iframe);
        if (!this.tM) {
            this.eC = document.cloneElement('iframe', this.ap() + '-hack');
            this.eC.style.filter = 'progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)';
            if (B.fa) {
                var fR = E.aq('blog-163-com-ie6body');
                V.Q(fR, 'scroll', this.cBO.K(this));
            }
        }
        E.kd(this.kS, false);
        E.kd(this.Nz, false);
    };
    zk.cBO = function() {
        var aK = this.eC.style;
        aK.display = 'none';
        if (this.Nz.style.display == 'block' && this.kS.style.display == 'block') {
            aK.display = 'block';
        }
    };
    zk.Yb = function() {
        if (!!this.tM)
            return;
        var aK = this.eC.style;
        aK.display = 'block';
        aK.top = (parseInt(this.kS.style.top) + 7) + 'px';
        aK.right = (parseInt(this.kS.style.right) - 6) + 'px';
        aK.width = (this.kS.offsetWidth + 5) + 'px';
        aK.height = (this.kS.offsetHeight - 13) + 'px';
        this.M.insertAdjacentElement('beforeBegin', this.eC);
    };
    zk.cRZ = function() {
        if (!!this.eC)
            this.eC.style.display = 'none';
    };
    zk.agp = function() {
        if (this.lj.style.display == 'block') {
            this.DH(this.boh, this.kJ);
        }
        if (this.Nz.style.display == 'block' && this.kS.style.display == 'block') {
            this.bJo();
        }
    };
    zk.bbx = function(cG, aaR, SH, sq, oN) {
        this.DH(sq, oN);
        this.alH(cG, aaR, SH);
    };
    zk.alH = function(cG, aaR, SH) {
        if (aaR == 'fail') {
            E.bL(this.agL, 'showhint-3');
            E.dA(this.aSZ, 'showhint-2-0 showhint-2-2', 'showhint-2-1');
        } else if (aaR == 'loading') {
            E.bl(this.agL, 'showhint-3');
            E.dA(this.aSZ, 'showhint-2-0 showhint-2-1', 'showhint-2-2');
        } else {
            E.bL(this.agL, 'showhint-3');
            E.dA(this.aSZ, 'showhint-2-1 showhint-2-2', 'showhint-2-0');
        }
        this.bVg.innerText = cG || ' ';
        this.bJo(SH);
        this.Yb();
    };
    zk.kz = function(NY) {
        if (!NY) {
            this.uY();
        }
        this.Nz.style.display = 'none';
        this.kS.style.display = 'none';
        this.cRZ();
    };
    zk.DH = function(sq, oN) {
        this.boh = sq;
        this.kJ = oN;
        if (!!sq) {
            this.lj.style.backgroundColor = sq;
        } else {
            this.lj.style.backgroundColor = '';
        }
        if (!!oN || oN === 0) {
            this.lj.style.opacity = oN / 100;
            this.lj.style.filter = 'alpha(opacity=' + oN + ')';
        } else {
            this.lj.style.opacity = '';
            this.lj.style.filter = '';
            try {
                this.lj.style.removeAttribute('filter');
            } catch (e) {
            }
        }
        if (B.fa) {
            var fR = document.documentElement || document.body;
            this.lj.style.width = fR.scrollWidth + 'px';
            this.lj.style.height = fR.scrollHeight + 'px';
        }
        this.lj.style.display = 'block';
    };
    zk.uY = function() {
        this.lj.style.display = 'none';
    };
    zk.ap = function() {
        return aP;
    };
    zk.bd = function() {
        return '<div class="zcvr ztag">&nbsp;</div><div class="showhint-0 zhnt ztag noselect"><span class="iblock showhint-2 showhint-2-0 typeicon ztag"><span class="iblock showhint-3 loading ztag">&nbsp;</span></span><span class="fs1 fw1 txthint ztag"></span><span class="showhint-1 bg_right">&nbsp;</span></div><div style="display:none;" class="showhint-bg ztag noselect">&nbsp;</div>';
    };
    zk.bT = function() {
        var A = E.bz(this.M, 'ztag');
        this.lj = A[0];
        this.kS = A[1];
        this.aSZ = A[2];
        this.agL = A[3];
        this.bVg = A[4];
        this.Nz = A[5];
    };
    zk.bJo = function(SH) {
        this.kS.style.display = 'block';
        var aJy = 0, PV = 0;
        if (!SH) {
            var sh = document.documentElement || document.body, Kz = document.body || document.documentElement;
            aJy = ((sh.scrollLeft || Kz.scrollLeft) + Math.max(0, sh.clientWidth - this.kS.clientWidth) / 2);
            PV = ((sh.scrollTop || Kz.scrollTop) + Math.max(0, sh.clientHeight - this.kS.clientHeight) / 2);
        } else {
            if (B.fa) {
                PV = (document.body.scrollTop || document.documentElement.scrollTop);
            } else {
                PV = 5;
            }
            aJy = 20;
        }
        this.kS.style.right = aJy + 'px';
        this.kS.style.top = PV + 'px';
        this.Nz.style.width = (this.kS.clientWidth - 10) + 'px';
        this.Nz.style.height = (this.kS.clientHeight - 15) + 'px';
        this.Nz.style.top = (PV + 7) + 'px';
        this.Nz.style.right = (aJy - 1) + 'px';
        this.Nz.style.display = 'block';
    };
    var dF, er, awo = 0;
    var Lc = function() {
        if (!er)
            er = p.bry.as(document.body, {'class': 'showhint'});
        return er;
    };
    var vH = function(NY) {
        dF = window.clearTimeout(dF);
        E.kz(false, NY);
    };
    E.bN = function(cG, bgS, blo, aaR, SH, sq, oN, NY) {
        var bgV = 1500;
        if (!!cG || cG.length > 8)
            bgV = 2500;
        if (!!blo) {
            dF = window.clearTimeout(dF);
            awo = 0;
        } else if (!!dF) {
            awo++;
            dF = window.clearTimeout(dF);
            dF = window.setTimeout(vH.K(null, NY), bgV);
        } else {
            dF = window.setTimeout(vH.K(null, NY), bgV);
        }
        var pS = Lc();
        !bgS ? pS.bbx(cG, aaR, SH, sq, oN) : pS.alH(cG, aaR, SH, sq, oN);
    };
    E.DH = function(sq, oN) {
        Lc().DH(sq, oN);
    };
    E.kz = function(bZN, NY) {
        if (!bZN) {
            if (!!dF)
                return;
            Lc().kz(NY);
        } else {
            if (!!dF)
                dF = window.clearTimeout(dF);
            ;
            Lc().kz(NY);
        }
    };
    E.uY = function() {
        Lc().uY();
    };
})();
(function() {
    var p = P('nb.w'), Md, byA, sm, eg, aZt = /empty\.png\?(.*?)(?="|\))/i, SM = 'js-nomsg-090', Zw = 'js-hsmsg-056', aoX = 'js-email-980', dcx = 'js-mbhint', Si = location.api + 'msg/dwr', aph = ['userMsgNewCount', 'comMsgNewCount', 'comReplyMsgNewCount', 'noteMsgNewCount', 'alertMsgNewCount'];
    var jt = function(bD, aR) {
        if (!U.fH(bD, 'String'))
            return bD;
        bD = U.aQ(bD);
        bD = bD.substr(bD.indexOf('#') + 1);
        if (!bD)
            return '';
        bD = bD.split('&');
        for (var i = 0, l = bD.length, d; i < l; i++) {
            d = bD[i].indexOf('=');
            if (bD[i].substring(0, d) === aR) {
                return bD[i].substr(d + 1) || '';
            }
        }
        return '';
    };
    var qV = function(_content) {
        _content = _content || '';
        var aW = 0;
        for (var i = 0, l = _content.length; i < l; i++) {
            aW += _content.charCodeAt(i) > 255 ? 2 : 1;
        }
        return aW;
    };
    var bhS = function(dj) {
        return dj.indexOf('@') < 0 || dj.search('@126|@188|@yeah|@game') >= 0;
    };
    var aQa = function(bE) {
        var ae = aZt.test(E.EI(bE, 'backgroundImage')) ? RegExp.$1 : '';
        return !ae ? '' : (ae.indexOf('http://') >= 0 ? ae : ('http://' + ae));
    };
    p.aDe = C();
    byA = p.aDe.prototype;
    byA.bR = function() {
        nb.c.dn ? nb.w.qX.ob() : nb.w.aXU.ob();
    };
    p.aXU = C();
    sm = p.aXU.at(P(N.ut).GP, true);
    sm.fZ = function() {
        this.M = E.aq('blog-163-com-topbar');
        var A = E.aM(this.M);
        if (!A || !A.length)
            return;
        var D = E.bz(this.M, 'nbw-im');
        if (!!D && D.length > 0)
            for (var i = 0, l = D.length; i < l; E.cR(D[i], 'js-hover-879'), i++)
                ;
        this.cPK(A[0]);
        this.bIb(A[1]);
        this.beb(A[2]);
    };
    sm.cPK = function(bF) {
        this.cMW();
        this.cLU();
    };
    sm.cMW = function() {
        this.bsk = E.aq('topbar_searchBlogArea');
        if (!this.bsk)
            return;
        var A = E.bz(this.bsk, 'ztag');
        this.aLA = A[0];
        this.cIa = A[1];
        this.bta = A[2];
        nb.x.Dl(this.bta.parentNode);
        V.Q(this.bta, 'click', this.Ua.K(this, 'b'));
        V.Q(this.cIa, 'click', this.Ua.K(this, 'a'));
        V.Q(this.aLA, 'keypress', this.Qa.K(this));
        V.Q(this.aLA.form.parentNode, 'mouseover', this.cBV.K(this));
        V.Q(this.aLA.form.parentNode, 'mouseout', this.cAX.K(this));
    };
    sm.cLU = function() {
        this.brE = E.aq('topbar_randShowArea');
        if (!this.brE)
            return;
        var A = E.bz(this.brE, 'randtag') || [];
        if (!!A || A.length > 0) {
            var Rq = U.OW(0, A.length);
            for (var i = 0; i < A.length; i++) {
                if (Rq >= i && Rq < i + 1) {
                    for (var j = 0; j < A.length; j++) {
                        E.bl(A[j], 'phide');
                    }
                    E.bL(A[i], 'phide');
                    break;
                }
            }
        }
    };
    sm.bGH = function() {
        this.bBK = E.aq('topbar_followArea');
        if (!this.bBK)
            return;
        var A = E.bz(this.bBK, 'ztag') || [];
        this.cgw = A[0];
        V.Q(this.cgw, 'click', this.cBp.K(this));
    };
    sm.cBp = function(L) {
        V.bU(L);
        if (nb.c.dn) {
            this.la();
        } else {
            nb.l.cO.bm();
        }
    };
    sm.la = function(PS) {
        if (nb.c.hP)
            return;
        if (!this.zo) {
            this.zo = true;
            J.bi(location.dwr, 'UserFollowBeanNew', 'followUser', nb.c.bC.userId, PS || '', false, this.PM.K(this));
        }
    };
    sm.PM = function(av) {
        this.zo = false;
        if (av == 'success') {
            E.bN('关注用户成功!', true, false, 'success');
        } else if (av == 'failure') {
            E.bN('暂时无法设置关注，请稍后再试！', true, false, 'fail');
        } else if (av == 'friend') {
            E.bN('已经是博友！', true, false, 'fail');
        } else if (av == 'follow') {
            E.bN('您已经关注了此博客！', true, false, 'fail');
        } else if (av == 'maximum') {
            E.bN('你已经关注1000个博客了，关注量太大会让你忽略某些重要的关注信息！', true, false, 'fail');
        } else if (av == 'blacked') {
            E.bN('由于对方权限设置，不允许加关注！', true, false, 'fail');
        } else if (av == 'valCode') {
            nb.l.Il.bm({bJ: this.wY.K(this),title: '关注' + (nb.c.bC.gender)});
        } else {
            E.bN('暂时无法设置关注，请稍后再试！', true, false, 'fail');
        }
    };
    sm.wY = function(nF) {
        this.la(nF);
    };
    sm.bIb = function(bF) {
        if (this.bEG(bF))
            return;
        this.cPv();
        this.bGH();
    };
    sm.cPv = function() {
        this.bGo = E.aq('topbar_loginAndReg');
        if (!this.bGo)
            return;
        var A = E.bz(this.bGo, 'ztag') || [];
        this.bGk = A[0];
        if (!this.bGk)
            return;
        V.Q(this.bGk, 'click', this.yo.K(this));
    };
    sm.bHo = F;
    sm.bEG = function(bF) {
        if (!/USERNAME_FROM_URS\s*=\s*(.*?)(?=\s|;|$)/.test(document.cookie))
            return false;
        var dj = RegExp.$1 || '';
        if (!dj || !bhS(dj))
            return false;
        bF.innerHTML = E.aI('nb-jst-a1', {u: dj});
        return true;
    };
    sm.Ua = function(bP, L) {
        if (bP == 'a')
            V.bU(L);
        this.cQM.href = this.azw.form.action + '&q=' + (this.azw.value || '') + '&t=' + (bP || 'a');
        this.azw.value = '';
        nb.x.bwY(this.cQM);
    };
    sm.cBV = function() {
        try {
            this.azw.focus();
        } catch (e) {
        }
    };
    sm.cAX = function() {
        try {
            this.azw.blur();
        } catch (e) {
        }
    };
    sm.Qa = function(L) {
        if (L.keyCode != 13)
            return;
        this.Ua('a');
    };
    sm.yo = function(L) {
        V.bU(L);
        if (!nb.l.cO)
            return;
        nb.l.cO.bm();
    };
    sm.beb = F;
    p.qX = C();
    eg = p.qX.at(p.aXU, true);
    eg.bIb = function(bF) {
        this.bGH();
        this.cLm();
        this.dfl();
        this.cKT();
        this.dmr();
        this.oV = 0;
        window.setTimeout(this.alG.K(this), 3000);
        this.aSB();
    };
    eg.dmr = function() {
        this.dlz = E.aq('topbar_myLikesArea');
    };
    eg.cPb = function() {
        this.aEZ = E.aq('topbar_blogDetailArea');
        if (!this.aEZ)
            return;
        var A = E.bz(this.aEZ, 'ztag') || [];
        this.ccA = A[0];
        this.cES = A[1];
        V.Q(this.ccA, 'click', this.aRZ.K(this));
        V.Q(this.cES, 'click', this.aNf.K(this));
        if (!!P('nb.p')['m-3']) {
            E.bL(this.aEZ, 'phide');
        } else {
            E.bl(this.aEZ, 'phide');
        }
    };
    eg.aRZ = function() {
        if (!!P('nb.p.m-3.g').citeBlog) {
            P('nb.p.m-3.g').citeBlog();
        }
    };
    eg.aNf = function() {
        if (!!P('nb.p.m-3.g').recommendBlog) {
            P('nb.p.m-3.g').recommendBlog();
        }
    };
    eg.cPz = function() {
        this.aYF = E.aq('topbar_acountArea');
        if (!this.aYF)
            return;
        var A = E.bz(this.aYF, 'ztag') || [];
        this.amw = A[0];
        this.cyy = A[1];
        this.cXO = A[2];
        V.Q(this.amw, 'click', this.cVt.K(this));
        V.Q(document.body, 'click', this.cRj.K(this));
        var jK = '';
        if (!!nb.c.bC.isMultiUserBlog) {
            jK = nb.c.aH.email;
        } else {
            jK = nb.c.bC.email;
        }
        var ba = (jK || '').split('@');
        if (ba.length < 2)
            return;
        var aKu = ba[0];
        var iU = qV(aKu);
        if (iU > 8) {
            aKu = U.da(aKu, 8) + '...';
        }
        this.cyy.innerText = aKu;
        this.aYF.title = jK;
    };
    eg.cRj = function(L) {
        E.bL(this.amw, 'showguidelist');
    };
    eg.cVt = function(L) {
        V.Uh(L);
        if (E.aV(this.amw, 'showguidelist')) {
            E.bL(this.amw, 'showguidelist');
        } else {
            E.bl(this.amw, 'showguidelist');
        }
    };
    eg.cYj = function() {
        this.bGr = E.aq('topbar_welcomeArea');
        if (!this.bGr)
            return;
        var A = E.bz(this.bGr, 'ztag') || [];
        this.amY = A[0];
        this.Fo = A[1];
        var vh = new Date().getTime(), hJ = new Date();
        var aXo, azS, aVw, aVx, byR, bOS;
        aXo = hJ.setHours(3, 0, 0);
        azS = hJ.setHours(6, 0, 0);
        aVw = hJ.setHours(12, 0, 0);
        aVx = hJ.setHours(14, 0, 0);
        byR = hJ.setHours(18, 0, 0);
        hJ = hJ.setHours(24, 0, 0);
        bOS = hJ + (azS - aXo);
        if (vh >= aXo && vh < azS) {
            this.amY.innerText = '凌晨好，';
        } else if (vh >= azS && vh < aVw) {
            this.amY.innerText = '早上好，';
        } else if (vh >= aVw && vh < aVx) {
            this.amY.innerText = '中午好，';
        } else if (vh >= aVx && vh < byR) {
            this.amY.innerText = '下午好，';
        } else {
            this.amY.innerText = '晚上好，';
        }
        var jm = '';
        if (!!nb.c.bC.isMultiUserBlog) {
            jm = U.gn(nb.c.aH.nickName);
        } else {
            jm = U.gn(nb.c.bC.nickName);
        }
        jm = jm || '';
        var iU = qV(jm);
        if (iU > 10) {
            jm = U.da(jm, 10) + '...';
        }
        if (!!nb.c.bC.isMultiUserBlog) {
            this.Fo.href = nb.c.aH.baseUrl || '';
        } else {
            this.Fo.href = nb.c.bC.baseUrl || '';
        }
        this.Fo.innerText = jm;
    };
    eg.cKT = function() {
        this.Zx = E.aq('topbar_messageBoxArea');
        if (!this.Zx)
            return;
        var A = E.bz(this.Zx, 'ztag') || [];
        this.tc = A[0];
        this.QS = A[1];
        this.yO = E.bz(this.Zx, 'mztag') || [];
        V.Q(this.tc.parentNode, 'click', this.cDx.K(this));
    };
    eg.deM = function() {
        this.deR = E.aq('topbar_newPersonalCenterArea');
        if (!this.deR)
            return;
        var A = E.aM(this.deR) || [];
        this.Oz = A[0];
        if (!this.Oz)
            return;
        this.bHo();
    };
    eg.cMf = function() {
        this.Ss = E.aq('topbar_personalCenterArea');
        if (!this.Ss)
            return;
        var A = E.aM(this.Ss) || [];
        this.Oz = A[0];
        if (!this.Oz)
            return;
        var A = E.bz(this.Ss, 'menuItem') || [];
        for (var i = 0; i < A.length; i++) {
            E.cR(A[i], 'js-menuItem-hover');
        }
        this.bHo();
    };
    eg.bQZ = function(eU) {
        if (!this.Ss)
            return;
        if (!!eU) {
            this.SI = E.aq('menuItem_' + eU);
        }
        if (!this.SI) {
            var A = E.bz(this.Ss, 'menuItem') || [];
            if (A.length > 0)
                this.SI = A[A.length - 1];
        }
        if (!this.SI)
            return;
        E.bl(this.Ss, 'js-hover-879');
        E.bl(this.SI, 'js-menuItem-hover');
        E.bl(this.SI, 'js-show-writeblog');
    };
    p.qX.cwt = function(eU) {
        try {
            var CP = p.qX.ob();
            if (!!CP) {
                return CP.bQZ(eU);
            }
        } catch (e) {
        }
    };
    eg.cQr = function() {
        if (!!this.Ss) {
            E.bL(this.Ss, 'js-hover-879');
        }
        if (!!this.SI) {
            E.bL(this.SI, 'js-menuItem-hover');
            E.bL(this.SI, 'js-show-writeblog');
        }
    };
    p.qX.clJ = function() {
        try {
            var CP = p.qX.ob();
            if (!!CP) {
                return CP.cQr();
            }
        } catch (e) {
        }
    };
    eg.dfl = function() {
        this.bBC = E.bz(this.M, 'newEmailCount')[0];
        this.cQh = E.bz(this.M, 'newMiniBlogCount')[0];
    };
    eg.cQX = function() {
        this.aoO = E.aq('topbar_emailBoxArea');
        if (!this.aoO)
            return;
        var A = E.bz(this.aoO, 'ztag') || [];
        this.bBC = A[0];
        this.cQh = A[1];
        V.Q(this.cQh.parentNode, 'click', this.deE.K(this));
    };
    eg.cLm = function() {
        this.bHQ = E.aq('topbar_useThisTheme');
        if (!this.bHQ)
            return;
        var A = E.bz(this.bHQ, 'ztag') || [];
        this.bXF = A[0];
        V.Q(this.bXF, 'click', this.cUz.K(this));
    };
    eg.beb = function(bF) {
        if (!bF) {
            window.setTimeout(this.aAP.K(this), 2000);
            return;
        }
        switch (bF.id) {
            case 'blog-notice-editor':
                this.bHr(bF);
                return;
            case 'blog-notice-email':
                this.bGU(bF);
            case 'blog-notice-newcenter':
                this.cLu(bF);
            case 'blog-notice-newaboutme':
                this.cLL(bF);
                return;
        }
    };
    eg.aBL = function() {
        J.bi(location.dwr, 'UserBeanNew', 'updateUserOnlineStatus');
        window.setTimeout(this.aBL.K(this), 5 * 60 * 1000);
    };
    eg.aSB = function() {
        this.aBL();
    };
    eg.awd = function() {
        if (!this.axL)
            return;
        this.axL.aZS(location.cmt + U.ar());
    };
    eg.cDx = function() {
        this.tc.parentNode.href = this.yO[this.tc.idx || 0].parentNode.href;
    };
    eg.cUz = function(L) {
        V.bU(L);
        if (nb.c.hP) {
            var aHd = nb.w.aEo.ob();
            aHd && aHd.bxY(0);
            return;
        }
        if (!confirm('您确定使用此风格吗？'))
            return;
        J.bi(location.dwr, 'SetupBeanNew', 'copyUserTheme', nb.c.apq().t, nb.c.bC.userId, this.bYZ.K(this));
    };
    eg.bYZ = function(cV) {
        if (!!cV) {
            E.bN('风格保存成功！', true, false, 'success');
        } else {
            E.bN('暂时无法保存风格，请稍后再试！', true, false, 'fail');
        }
    };
    eg.alG = function() {
        this.oV++;
        window.setTimeout(this.alG.K(this), 60000);
        var uJ = nb.c.aH;
        J.hc(Si, 'PollingBean', 'getNewMsgCount', uJ.userId, uJ.userName, this.bmq.K(this));
    };
    eg.bmq = function(cG) {
        if (!cG)
            return;
        var bZ = 0;
        for (var i = aph.length - 1, cQ; i >= 0; i--) {
            cQ = cG[aph[i]] || 0;
            if (cQ > 0)
                this.tc.idx = i;
            this.yO[i].innerText = cQ;
            cQ > 0 ? E.bl(this.yO[i], Zw) : E.bL(this.yO[i], Zw);
            bZ += cQ;
        }
        if (bZ > 0) {
            E.bL(this.Zx, SM);
            this.QS.innerText = bZ;
            E.bl(this.QS, 'js-hasmsgeml_fc1');
        } else {
            this.QS.innerText = 0;
            E.bL(this.QS, 'js-hasmsgeml_fc1');
            E.bl(this.Zx, SM);
        }
        this.aSk();
        this.ddq();
        this.R('onmessageload', cG);
    };
    p.qX.ajE = function(bP) {
        try {
            var CP = p.qX.ob();
            if (!!CP) {
                CP.cmh(bP);
            }
        } catch (e) {
        }
    };
    eg.cmh = function(bP) {
        if (bP < 0 || bP > 4)
            return;
        var bLA = parseInt(this.yO[bP].innerText), bZ = parseInt(this.QS.innerText);
        this.yO[bP].innerText = 0;
        E.bL(this.yO[bP], Zw);
        bZ = bZ - bLA;
        if (bZ > 0) {
            E.bL(this.Zx, SM);
            this.QS.innerText = bZ;
            E.bl(this.QS, 'js-hasmsgeml_fc1');
        } else {
            this.QS.innerText = 0;
            E.bL(this.QS, 'js-hasmsgeml_fc1');
            E.bl(this.Zx, SM);
        }
    };
    eg.ddq = function() {
        if ((this.oV % 3 != 1))
            return;
        if (!this.cQh)
            return;
        var jW = 'http://t.163.com/service/newMessage/' + nb.c.bC.email + '/1/0/0/0/0';
        var dL = {type: 'text',method: 'GET',onload: this.dcm.K(this)};
        J.tj(jW, dL);
    };
    eg.dcm = function(cNd) {
        if (!!cNd) {
            var T = U.HE(cNd);
            if (!!T) {
                var cQ = T.htlCount || 0;
                if (cQ < 0)
                    cQ = 0;
                this.cQh.innerText = cQ;
                this.cQh.parentNode.title = '未读微博消息' + cQ + '条';
                if (!cQ || cQ == '0') {
                    E.bL(this.cQh.parentNode, dcx);
                } else {
                    E.bl(this.cQh.parentNode, dcx);
                }
            }
        }
    };
    eg.deE = function() {
        this.cQh.innerText = 0;
        this.cQh.parentNode.title = '未读微博消息0条';
        E.bL(this.cQh.parentNode, dcx);
    };
    eg.aSk = function() {
        if ((this.oV % 5 != 1))
            return;
        this.bgz();
    };
    eg.blH = function(cQ) {
        if (!this.bBC)
            return;
        cQ = cQ || 0;
        if (cQ < 0)
            cQ = 0;
        this.bBC.innerText = cQ;
        this.bBC.parentNode.title = '未读邮件' + cQ + '封';
        if (!cQ) {
            E.bL(this.bBC.parentNode, aoX);
        } else {
            E.bl(this.bBC.parentNode, aoX);
        }
    };
    eg.bgz = function() {
        if (!this.Lk) {
            var bF = document.cloneElement('div', 'phide');
            document.body.appendChild(bF);
            bF.innerHTML = '<iframe></iframe>';
            this.Lk = E.aM(bF)[0];
            V.Q(this.Lk, 'load', this.bgk.K(this));
        }
        var P_INFO = this.aZa("P_INFO");
        var arr = P_INFO.split("|") || [];
        var username = arr[0] || '';
        username = username.replace('"', '');
        var isLogin = false;
        var domain = "http://msg.mail.163.com";
        if (username.indexOf("@126.com") > -1) {
            domain = "http://msg.mail.126.com";
        }
        if (username.indexOf("@yeah.net") > -1) {
            domain = "http://msg.mail.yeah.net";
        }
        if (username.indexOf("@163.com") > -1) {
            domain = "http://msg.mail.163.com";
        }
        if (username.indexOf("@188.com") > -1) {
            domain = "http://msg.mail.188.com";
        }
        if (username.indexOf("@vip.163.com") > -1) {
            domain = "http://msg.vip.163.com";
        }
        if (username.indexOf("@vip.126.com") > -1) {
            domain = "http://msg.vip.126.com";
        }
        if (arr[0] == nb.c.bC.email) {
            isLogin = true;
        }
        var iframeUrl = "" + domain + "/cgi/mc?funcid=getusrnewmsgcnt&fid=1&addSubFdrs=1" + "&language=0&style=0&template=newmsgres_forblog.htm&username=" + username + '&r=' + U.ar(8);
        if (isLogin) {
            this.Lk.src = iframeUrl;
        }
    };
    eg.bgk = function() {
        try {
            this.blH(parseInt(this.Lk.contentWindow.name) || 0);
        } catch (e) {
        }
    };
    eg.aZa = function(sName) {
        var sSearch = sName + "=";
        if (document.cookie.length > 0) {
            var sOffset = document.cookie.indexOf(sSearch);
            if (sOffset != -1) {
                sOffset += sSearch.length;
                sEnd = document.cookie.indexOf(";", sOffset);
                if (sEnd == -1)
                    sEnd = document.cookie.length;
                return unescape(document.cookie.substring(sOffset, sEnd));
            } else
                return "";
        }
    };
    eg.aAP = function() {
        var uJ = nb.c.aH;
        if (nb.c.ant || nb.c.cmJ) {
            if (!!uJ.isSinaOauthExpired) {
                this.dgt();
                return;
            }
            var ddQ = U.rA('lofterInviteTipClosed' + nb.c.aH.userId);
            if (!ddQ && uJ.isLofterInviteTip) {
                this.ddY();
                return;
            }
            var bZw = U.rA('guanggaotipclosed' + nb.c.aH.userId);
            if (!bZw && uJ.isShowGuanggaoTip) {
                this.bTJ();
                return;
            }
            if (uJ.isShowFaXianTip) {
                this.bQI();
                return;
            }
        }
        J.bi(Si, 'MessageBean', 'getUnReadBulletins', uJ.userId, uJ.userType, this.cuY.K(this));
    };
    eg.dgt = function() {
        if (!this.dfX) {
            this.sl = E.aq('blog-163-com-toptips');
            if (!this.sl)
                return;
            this.dfX = E.aq('sinaoauthtip');
            if (!this.dfX)
                return;
            var A = E.bz(this.dfX, 'close') || [];
            this.dgP = A[0];
            V.Q(this.dgP, 'click', this.dgy.K(this));
            E.bl('blog-163-com', 'bodybgwithtips');
            E.bl('blog-163-com', 'bodystyletip');
            E.bl(this.sl, 'shownewsinaoauthtip');
        }
    };
    eg.dgy = function(L) {
        V.bU(L);
        E.bL('blog-163-com', 'bodybgwithtips');
        E.bL('blog-163-com', 'bodystyletip');
        E.bL(this.sl, 'shownewsinaoauthtip');
        J.bi(location.dwr, 'SinaSiteBean', 'cancelConnect', F);
    };
    eg.ddY = function() {
        if (!this.dfm) {
            this.sl = E.aq('blog-163-com-toptips');
            if (!this.sl)
                return;
            this.dfm = E.aq('$_lofterInviteTip');
            if (!this.dfm)
                return;
            var A = E.bz(this.dfm, 'lofterInviteTag') || [];
            this.des = A[0];
            V.Q(this.des, 'click', this.dfg.K(this));
            E.bl('blog-163-com', 'bodybgwithtips');
            E.bl('blog-163-com', 'bodystyletip');
            E.bl(this.sl, 'shownewlofterinvitetip');
        }
    };
    eg.dfg = function(L) {
        V.bU(L);
        E.bL('blog-163-com', 'bodybgwithtips');
        E.bL('blog-163-com', 'bodystyletip');
        E.bL(this.sl, 'shownewlofterinvitetip');
        U.zj('lofterInviteTipClosed' + nb.c.aH.userId, 1, 'blog.163.com', 10, '/');
    };
    eg.bTJ = function() {
        if (!this.bjK) {
            this.sl = E.aq('blog-163-com-toptips');
            if (!this.sl)
                return;
            this.bjK = E.aq('$_guanggaotip');
            if (!this.bjK)
                return;
            var A = E.bz(this.bjK, 'guanggaotag') || [];
            this.cOB = A[0];
            V.Q(this.cOB, 'click', this.cDA.K(this));
            E.bl('blog-163-com', 'bodybgwithtips');
            E.bl('blog-163-com', 'bodystyletip');
            E.bl(this.sl, 'shownewguanggaotip');
        }
    };
    eg.cDA = function(L) {
        V.bU(L);
        E.bL('blog-163-com', 'bodybgwithtips');
        E.bL('blog-163-com', 'bodystyletip');
        E.bL(this.sl, 'shownewguanggaotip');
        J.bi(location.dwr, 'UserBeanNew', 'closeGuangGaoTip', F);
        return false;
    };
    eg.bQI = function() {
        if (!this.bdv) {
            this.sl = E.aq('blog-163-com-toptips');
            if (!this.sl)
                return;
            this.bdv = E.aq('$_faxiantip');
            if (!this.bdv)
                return;
            var A = E.bz(this.bdv, 'faxiantag') || [];
            this.cgN = A[0];
            V.Q(this.cgN, 'click', this.cBs.K(this));
            E.bl('blog-163-com', 'bodybgwithtips');
            E.bl('blog-163-com', 'bodystyletip');
            E.bl(this.sl, 'shownewfaxiantip');
        }
    };
    eg.cBs = function(L) {
        V.bU(L);
        E.bL('blog-163-com', 'bodybgwithtips');
        E.bL('blog-163-com', 'bodystyletip');
        E.bL(this.sl, 'shownewfaxiantip');
        J.bi(location.dwr, 'UserBeanNew', 'setNeverShowFaXian', F);
    };
    eg.cuY = function(D) {
        this.JL = D || [];
        if (this.JL.length == 1 && this.JL[0].url == 'http://blog.163.com/writegnb.do') {
            this.bTV(this.JL[0]);
            return;
        }
        this.ajB = 0;
        if (!this.aRl) {
            this.sl = E.aq('blog-163-com-toptips');
            if (!this.sl)
                return;
            this.aRl = E.aq('newbulletinstip');
            if (!this.aRl)
                return;
            var A = E.bz(this.aRl, 'tiptag') || [];
            this.ahl = A[0];
            this.apQ = A[1];
            this.TJ = A[2];
            this.gg = A[3];
            V.Q(this.TJ, 'click', this.czc.K(this));
            V.Q(this.gg, 'click', this.cJh.K(this));
        }
        if (this.JL.length > 0) {
            E.bl('blog-163-com', 'bodybgwithtips');
            E.bl(this.sl, 'shownewbulletins');
            if (!!this.JL[0]) {
                this.bme(this.JL[0]);
            }
            if (this.JL.length == 1) {
                E.bl(this.TJ, 'phide');
            } else {
                this.TJ.innerText = '显示下一条';
                E.bL(this.TJ, 'phide');
            }
            if (!!nb.p['m-2'] && !!nb.p['m-2'].bwF)
                nb.p['m-2'].bwF();
        } else {
            E.bL('blog-163-com', 'bodybgwithtips');
            E.bL(this.sl, 'shownewbulletins');
        }
    };
    eg.bTV = function(T) {
        T = T || {};
        T.title = T.title || '';
        if (!this.bkp) {
            this.sl = E.aq('blog-163-com-toptips');
            if (!this.sl)
                return;
            this.bkp = E.aq('goodnightblogtip');
            if (!this.bkp)
                return;
            var A = E.bz(this.bkp, 'tiptag') || [];
            this.bWr = A[0];
            this.TJ = A[1];
            this.gg = A[2];
            V.Q(this.gg, 'click', this.cTl.K(this));
        }
        var aY = T.title.indexOf('马上使用>>');
        var aVK = '', linkTip = '马上使用&gt;&gt;';
        var dz = '';
        if (aY < 0) {
            linkTip = T.title;
        } else {
            aVK = T.title.substring(0, aY);
        }
        if (!!aVK) {
            dz = aVK;
        }
        if (!!linkTip) {
            dz += '<a href="' + T.url + '">' + linkTip + '</a>';
        }
        if (!!dz) {
            dz = '<span class="iblock tipicon">&nbsp;</span>' + dz;
            this.bWr.innerHTML = dz;
        } else {
            return;
        }
        E.bl('blog-163-com', 'bodybgwithtips');
        E.bl(this.sl, 'showgoodnighttips');
    };
    eg.cTl = function(L) {
        V.bU(L);
        E.bL('blog-163-com', 'bodybgwithtips');
        E.bL(this.sl, 'showgoodnighttips');
        J.bi(Si, 'MessageBean', 'updateBulletinLoadTime', nb.c.aH.userId);
    };
    eg.bme = function(T) {
        T = T || {};
        if (!!T && !!T.title) {
            if (!!T.url) {
                E.bl(this.apQ, 'phide');
                E.bL(this.ahl, 'phide');
                this.ahl.href = T.url;
                this.ahl.innerText = T.title;
            } else {
                E.bl(this.ahl, 'phide');
                E.bL(this.apQ, 'phide');
                this.apQ.innerText = T.title;
            }
            if (!!T.title && T.title.length > 1) {
                var bVp = T.title.substring(0, 2);
                if (bVp == '重要') {
                    this.ahl.style.color = '#d90000';
                    this.apQ.style.color = '#d90000';
                } else {
                    this.ahl.style.color = '';
                    this.apQ.style.color = '';
                }
            }
        }
    };
    eg.czc = function(L) {
        V.bU(L);
        if (this.ajB + 1 < this.JL.length) {
            this.ajB += 1;
            this.bme(this.JL[this.ajB]);
        }
        if (this.ajB == -1 || this.JL.length <= 1) {
            E.bl(this.TJ, 'phide');
        } else if (this.ajB + 1 >= this.JL.length) {
            this.TJ.innerText = '显示第一条';
            this.ajB = -1;
        } else {
            this.TJ.innerText = '显示下一条';
        }
    };
    eg.aCo = function(L) {
        E.bl(this.ael, 'js-more-908');
    };
    eg.cJh = function(L) {
        V.bU(L);
        E.bL('blog-163-com', 'bodybgwithtips');
        E.bL(this.sl, 'shownewbulletins');
        J.bi(Si, 'MessageBean', 'updateBulletinLoadTime', nb.c.aH.userId);
    };
    eg.bHr = function(bF) {
        this.Gj = bF;
        var D = E.bz(this.Gj, 'ztag');
        if (!!D && D.length > 0) {
            V.Q(D[0], 'click', this.bNB.K(this, 0));
            V.Q(D[1], 'click', this.bNB.K(this, 1));
        }
        !!bF && (bF.style.display = '');
    };
    eg.bNB = function(bP) {
        J.bi(location.dwr, 'UserBeanNew', 'updateGlobalGuide', 1, this.ceP.K(this, bP));
    };
    eg.ceP = function(bP, cV) {
        if (!cV)
            return;
        if (!bP) {
            E.cX(this.Gj);
            this.aAP();
            return;
        }
        location.href = nb.x.aeM(1) + 'getBlog.do';
    };
    eg.bGU = function(bF) {
        this.Gj = bF;
        var D = E.bz(this.Gj, 'ztag');
        if (!!D && D.length > 0) {
            V.Q(D[0], 'click', this.bMP.K(this, 0));
            V.Q(D[1], 'click', this.bMP.K(this, 1));
        }
    };
    eg.bMP = function(bP) {
        J.bi(location.dwr, 'UserBeanNew', 'updateGlobalGuide', 2, this.ceF.K(this, bP));
    };
    eg.ceF = function(bP, cV) {
        if (!cV)
            return;
        if (!bP) {
            E.cX(this.Gj);
            this.aAP();
            return;
        }
        location.href = nb.x.bQ() + 'setMsgRemind.do';
    };
    eg.cLu = function(bF) {
        this.Gj = bF;
        var D = E.bz(this.Gj, 'ztag');
        if (!!D && D.length > 0) {
            V.Q(D[0], 'click', this.czA.K(this));
            V.Q(D[1], 'click', this.czB.K(this));
        }
        !!bF && (bF.style.display = '');
    };
    eg.czA = function() {
        J.bi(location.dwr, 'UserBeanNew', 'updateGlobalGuide', 4, this.ceD.K(this));
    };
    eg.czB = function() {
        J.bi(location.dwr, 'UserFollowBeanNew', 'useNewBlogCenter', 4, this.cep.K(this));
    };
    eg.ceD = function(cV) {
        if (!cV)
            return;
        E.cX(this.Gj);
    };
    eg.cep = function() {
        E.cX(this.Gj);
        location.href = nb.x.bQ() + 'manage';
    };
    eg.cLL = function(bF) {
        this.Gj = bF;
        var D = E.bz(this.Gj, 'ztag');
        if (!!D && D.length > 0) {
            V.Q(D[0], 'click', this.cAM.K(this));
        }
        !!bF && (bF.style.display = '');
    };
    eg.cAM = function() {
        J.bi(location.dwr, 'UserBeanNew', 'updateGlobalGuide', 6, this.cel.K(this));
    };
    eg.cel = function(cV) {
        if (!cV)
            return;
        E.cX(this.Gj);
    };
    eg.bHo = function() {
        window.setTimeout(this.bCA.K(this), 3000);
    };
    eg.bCA = function() {
        window.setTimeout(this.bCA.K(this), 60000);
        J.bi(location.dwr, 'UserFollowBeanNew', 'hasNewTrack', this.cff.K(this));
    };
    eg.cff = function(bXv) {
        if (!!bXv) {
            var xe = jt(location.hash, 'm');
            var Bi = jt(location.hash, 't');
            if (xe == '0' && Bi == '1') {
                this.Oz.href = nb.c.aH.baseUrl + 'manage/?fromBlogToolBar';
            } else {
                this.Oz.href = nb.c.aH.baseUrl + 'manage/?fromBlogToolBar#m=0&t=1';
            }
            E.bl(this.Oz, 'hasnewtrack');
        } else {
            this.Oz.href = nb.c.aH.baseUrl + 'manage/?fromBlogToolBar';
            E.bL(this.Oz, 'hasnewtrack');
        }
    };
    eg.cnj = function() {
        this.Oz.href = nb.c.bC.baseUrl + 'manage/?fromBlogToolBar';
        E.bL(this.Oz, 'hasnewtrack');
    };
    p.qX.cpS = function() {
        try {
            var CP = p.qX.ob();
            if (!!CP) {
                CP.cnj();
            }
        } catch (e) {
        }
    };
    eg.cRp = function() {
        if (E.aV(this.Oz, 'hasnewtrack')) {
            return true;
        } else {
            return false;
        }
    };
    p.qX.cmE = function() {
        try {
            var CP = p.qX.ob();
            if (!!CP) {
                return CP.cRp();
            }
        } catch (e) {
        }
        return false;
    };
    p.bgr = C();
    Md = p.bgr.at(P(N.ut).GP, true);
    Md.fZ = function() {
        this.jP = {width: '100%','class': 'h'};
        this.eY = E.bz('blog-163-com-banner', 'ztag');
        V.Q(this.eY[3].parentNode, 'click', this.czP.K(this));
    };
    Md.arb = function(ae) {
        if (!ae) {
            this.eY[2].innerHTML = '&nbsp;';
            return;
        }
        this.jP.src = ae;
        nb.x.arb(this.eY[2], this.jP);
    };
    Md.cpE = function() {
        this.bw = [{maxlength: 20,hint: '名称',api: 'updateSpaceName'}, {maxlength: 40,hint: '描述',api: 'updateSpaceDesc'}];
        for (var i = 0, l = this.bw.length, H, A; i < l; i++) {
            A = this.eY[i];
            H = this.bw[i];
            H.empty = true;
            H['class'] = 'nbw-ipt';
            H.onok = this.aSK.K(this, i);
            H.content = !A.innerText ? '' : A.innerText;
            H.hint = '<i>点击这里添加博客' + H.hint + '</i>';
            if (!A.innerText)
                A.innerHTML = H.hint;
            P(N.ui).lP.K(A.parentNode, H);
        }
    };
    Md.aSK = function(aA, ai) {
        E.bN('数据保存中...', true, true, 'loading');
        J.bi(location.dwr, 'SetupBeanNew', this.bw[aA].api, ai, this.ceM.K(this, aA, ai));
    };
    Md.ceM = function(aA, ai, cV) {
        E.kz();
        if (!cV) {
            E.bN('暂时无法更新博客信息，请稍后再试！', true, false, 'fail');
            return;
        }
        var H = this.bw[aA];
        H.content = ai;
        this.eY[aA].innerText = !ai ? H.hint : ai;
    };
    Md.czP = function(L) {
        var bv = this.eY[3].parentNode, iZ = aQa(this.eY[3]) || aQa(bv);
        !iZ ? V.sY(L) : bv.href = iZ;
    };
    Md.cve = function() {
        V.R(this.eY[1].parentNode, 'click');
    };
    Md.cwz = function() {
        V.R(this.eY[0].parentNode, 'click');
    };
})();
(function() {
    var p = P('nb.w'), Md, aDg, Be, aZt = /empty\.png\?(.*?)(?="|\))/i, SM = 'js-nmsg-090', Zw = 'nmsg', aoX = 'js-email-980', Si = location.api + 'msg/dwr', aph = ['userMsgNewCount', 'comMsgNewCount', 'comReplyMsgNewCount', 'noteMsgNewCount', 'alertMsgNewCount'];
    var bhS = function(dj) {
        return dj.indexOf('@') < 0 || dj.search('@126|@188|@yeah|@game') >= 0;
    };
    var aQa = function(bE) {
        var ae = aZt.test(E.EI(bE, 'backgroundImage')) ? RegExp.$1 : '';
        return !ae ? '' : (ae.indexOf('http://') >= 0 ? ae : ('http://' + ae));
    };
    p.bup = C();
    aDg = p.bup.at(P(N.ut).GP, true);
    aDg.fZ = function() {
        this.M = E.aq('blog-163-com-bctopbar');
        if (!this.M)
            return;
        var A = E.aM(this.M);
        if (!A || !A.length)
            return;
        var D = E.bz(this.M, 'nbw-im');
        if (!!D && D.length > 0) {
            E.cR(D[0], 'js-hover-979');
            E.cR(D[1], 'js-hover-979');
            E.cR(D[2], 'js-hover-980');
            E.cR(D[3], 'js-hover-981');
        }
        this.iB(this.M);
    };
    aDg.iB = F;
    aDg.bEG = function(bF) {
        if (!/USERNAME_FROM_URS\s*=\s*(.*?)(?=\s|;|$)/.test(document.cookie))
            return false;
        var dj = RegExp.$1 || '';
        if (!dj || !bhS(dj))
            return false;
        bF.innerHTML = E.aI('nb-jst-a1', {u: dj});
        return true;
    };
    p.cpA = C();
    Be = p.cpA.at(p.bup, true);
    Be.iB = function(bF) {
        var D = E.bz(bF, 'ztag');
        if (!D || !D.length)
            return;
        this.bfW = D[0];
        this.ru = D[1];
        this.yO = E.bz(this.ru, 'xtag');
        this.tc = E.bz(D[2], 'xtag')[0];
        this.oV = 0;
        this.alG();
        this.aSB();
    };
    Be.beb = function(bF) {
        if (!bF) {
            this.aAP();
            return;
        }
        switch (bF.id) {
            case 'blog-notice-editor':
                this.bHr(bF);
                return;
            case 'blog-notice-email':
                this.bGU(bF);
                return;
        }
    };
    Be.aBL = function() {
        J.bi(location.dwr, 'UserBeanNew', 'updateUserOnlineStatus');
        window.setTimeout(this.aBL.K(this), 5 * 60 * 1000);
    };
    Be.aSB = function() {
        this.aBL();
    };
    Be.awd = function() {
        if (!this.axL)
            return;
        this.axL.aZS(location.cmt + U.ar());
    };
    Be.alG = function() {
        this.oV++;
        window.setTimeout(this.alG.K(this), 60000);
        var uJ = nb.c.aH;
        J.hc(Si, 'PollingBean', 'getNewMsgCount', uJ.userId, uJ.userName, this.bmq.K(this));
    };
    Be.bmq = function(cG) {
        if (!cG)
            return;
        var bZ = 0;
        for (var i = 0, cQ; i < aph.length; i++) {
            cQ = cG[aph[i]] || 0;
            if (cQ > 0)
                this.tc.idx = i;
            this.yO[i].innerText = cQ;
            cQ > 0 ? E.bl(this.yO[i], Zw) : E.bL(this.yO[i], Zw);
            bZ += cQ;
        }
        if (bZ > 0) {
            this.bfW.innerText = bZ;
            E.bl(this.ru.parentNode, SM);
        } else {
            E.bL(this.ru.parentNode, SM);
        }
        this.aSk();
        this.R('onmessageload', cG);
    };
    Be.ajE = function(bP) {
        if (bP < 0 || bP > 4)
            return;
        var bLA = this.yO[i].innerText, bZ = this.bfW.innerText;
        this.yO[i].innerText = 0;
        E.bL(this.yO[i], Zw);
        bZ = bZ - this.yO[i].innerText;
        this.bfW.innerText = bZ;
        if (bZ == 0) {
            E.bL(this.ru.parentNode, SM);
        }
    };
    Be.aSk = function() {
        if ((this.oV % 5 != 1))
            return;
        this.bgz();
    };
    Be.blH = function(cQ) {
        cQ = cQ || 0;
        var A = this.tc;
        A.innerText = cQ;
        A = A.parentNode;
        A.title = '未读邮件' + cQ + '封';
        !cQ ? E.bL(A, aoX) : E.bl(A, aoX);
    };
    Be.bgz = function() {
        if (!this.Lk) {
            this.Lk = document.cloneElement('iframe', 'phide');
            V.Q(this.Lk, 'load', this.bgk.K(this));
            document.body.appendChild(this.Lk);
        }
        var P_INFO = this.aZa("P_INFO");
        var arr = P_INFO.split("|");
        var username = arr[0];
        var isLogin = false;
        var domain = "163.com";
        if (username.indexOf("@126.com") > -1) {
            domain = "126.com";
        }
        if (username.indexOf("@yeah.net") > -1) {
            domain = "yeah.net";
        }
        if (username.indexOf("@163.com") > -1) {
            domain = "163.com";
        }
        if (username.indexOf("@188.com") > -1) {
            domain = "188.com";
        }
        if (username.indexOf("@vip.163.com") > -1) {
            domain = "vip.163.com";
        }
        if (arr[2] == 1) {
            isLogin = true;
        }
        var iframeUrl = "http://msg.mail." + domain + "/cgi/mc?funcid=getusrnewmsgcnt&fid=1&addSubFdrs=1" + "&language=0&style=0&template=newmsgres_forblog.htm&username=" + username + '&r=' + U.ar(8);
        if (isLogin) {
            this.Lk.src = iframeUrl;
        }
    };
    Be.bgk = function() {
        try {
            this.blH(parseInt(this.Lk.contentWindow.name) || 0);
        } catch (e) {
        }
    };
    Be.aZa = function(sName) {
        var sSearch = sName + "=";
        if (document.cookie.length > 0) {
            var sOffset = document.cookie.indexOf(sSearch);
            if (sOffset != -1) {
                sOffset += sSearch.length;
                sEnd = document.cookie.indexOf(";", sOffset);
                if (sEnd == -1)
                    sEnd = document.cookie.length;
                return unescape(document.cookie.substring(sOffset, sEnd));
            } else
                return "";
        }
    };
})();
(function() {
    var p = P('nb.w'), wv, adt = 50;
    p.aEo = C();
    wv = p.aEo.at(P(N.ut).GP, true);
    wv.fZ = function() {
        this.bNS = document.cloneElement('div', 'nbw-tbr');
        document.lbody.appendChild(this.bNS);
        V.Q(this.bNS, 'mouseover', this.aMC.K(this));
    };
    wv.aXj = function() {
        if (!!this.aBo)
            return;
        this.bwk();
        var bcW = this.bHK.K(this, true);
        this.GJ = p.brC.ob({onhide: bcW,onshow: this.aTV.K(this, 0),onchange: this.ZF.K(this)});
        this.az = p.biu.ob({onhide: bcW,onshow: this.aTV.K(this, 1),onchange: this.bze.K(this)});
        this.Li = p.bsr.ob({onhide: bcW,onshow: this.aTV.K(this, 2),onchange: this.aTZ.K(this)});
        var A = nb.x.CX('custom');
        if (!!A)
            this.bxY(A.tp);
    };
    wv.bwk = function() {
        this.aBo = true;
    };
    wv.bxY = function(aA) {
        if (!this.aBo)
            return;
        this.bzL();
        this.aGM(aA);
    };
    wv.aMC = function() {
        this.aJV(true);
        if (!this.yj) {
            this.yj = document.cloneElement('div', 'nbw-tbd noul');
            this.yj.innerHTML = nb.x.cF('nb-txt-b0');
            V.Q(this.yj, 'mouseout', this.nG.K(this));
            V.Q(this.yj, 'mouseover', this.czI.K(this));
            var bAp = E.bz(this.yj, 'ztag')[0];
            if (!!bAp) {
                V.Q(bAp, 'click', this.bzL.K(this));
            }
        }
        document.lbody.appendChild(this.yj);
    };
    wv.czI = function() {
        this.bDA = false;
    };
    wv.nG = function() {
        this.bDA = true;
        if (!this.dF)
            this.dF = window.setTimeout(this.aJV.K(this, false), adt);
    };
    wv.aJV = function(yC) {
        if (!!this.bDA || !!yC)
            E.cX(this.yj);
        this.dF = window.clearTimeout(this.dF);
    };
    wv.bzL = function(L) {
        V.bU(L);
        this.aJV(true);
        if (!this.Kg) {
            this.Kg = document.cloneElement('div', 'nbw-tbd');
            this.Kg.innerHTML = nb.x.cF('nb-txt-b1');
            var A = E.bz(this.Kg, 'ztag');
            this.bLq = A[3];
            V.Q(A[3], 'click', this.bze.K(this));
            V.Q(A[0], 'click', this.aGM.K(this, 0));
            V.Q(A[1], 'click', this.aGM.K(this, 1));
            V.Q(A[2], 'click', this.aGM.K(this, 2));
        }
        document.lbody.appendChild(this.Kg);
    };
    wv.bze = function() {
        if (nb.c.ant && this.aBo) {
            this.GJ.aj();
            this.Li.aj();
            this.az.aj();
        }
        this.aJV(true);
        E.cX(this.Kg);
    };
    wv.aGM = function(aA) {
        if (!!nb.c.bC.isQingBlogTheme) {
            if (aA == 1) {
                nb.l.hR.bm({onok: F,cnt: '您正在使用轻酷版风格，不能设置首页内容！',title: '提醒',hiddenCC: true});
                return;
            } else if (aA == 2) {
                nb.l.hR.bm({onok: F,cnt: '您正在使用轻酷版风格，不能设置首页版式！',title: '提醒',hiddenCC: true});
                return;
            } else if (aA == 0) {
                location.href = nb.c.bC.baseUrl + 'dress/#m=0';
                return;
            }
        }
        var By = {op: 'custom',tp: aA || 0};
        if (!nb.c.ant) {
            nb.x.ay(nb.c.bC.baseUrl, By);
            return;
        }
        if (!this.aBo) {
            nb.x.cwj('custom', By);
            return;
        }
        ;
        switch (aA) {
            case 0:
                this.GJ.bm();
                return;
            case 1:
                this.az.bm();
                return;
            case 2:
                this.Li.bm();
                return;
        }
    };
    wv.aTV = function(aA) {
        if (aA != 0 && !!this.GJ)
            this.GJ.aj();
        if (aA != 1 && !!this.az)
            this.az.aj();
        if (aA != 2 && !!this.Li)
            this.Li.aj();
        this.bHK(false);
    };
    wv.ZF = function(dQ) {
        this.Li.cxo(dQ);
    };
    wv.aTZ = function(asZ, bkV) {
        if (asZ < bkV)
            this.az.baW(asZ);
        this.az.ay();
    };
    wv.bHK = function(aiR) {
        if (!this.bLq)
            return;
        this.bLq.style.visibility = !!aiR ? 'visible' : 'hidden';
    };
})();
(function() {
    var p = P('nb.l'), Xs, yE;
    var fZ = function(bv, H) {
        H = H || {};
        H['class'] = 'nbw-win zbwin';
        this.aS(bv || document.lbody, H);
    };
    p.bO = C();
    yE = p.bO.at(P(N.ui).TS, true);
    yE.bR = fZ;
    p.sG = C();
    Xs = p.sG.at(P(N.ui).Tg, true);
    Xs.bR = fZ;
})();
(function() {
    var p = P(N.ui), jf, yE, Os, aP = 'ui-' + U.ar();
    var asH = 'js-zncls-102';
    var cFK = function(bE, by, arl) {
        V.Q(bE, B.eW ? 'mouseleave' : 'mouseout', mj.K(null, bE, by, arl, false));
        V.Q(bE, B.eW ? 'mouseenter' : 'mouseover', mj.K(null, bE, by, arl, true));
    };
    var aTn = function(bF) {
        if (!!bF) {
            bF.style.display = 'block';
            var bVl = document.documentElement.clientHeight;
            var bUD = document.documentElement.scrollTop;
            var bUQ = document.documentElement.clientWidth;
            var bVy = document.documentElement.scrollLeft;
            bF.style.height = bVl + 'px';
            bF.style.width = bUQ + 'px';
            bF.style.top = bUD;
            bF.style.left = bVy;
        }
    };
    var mj = function(bE, by, arl, ji) {
        bE = E.aq(bE);
        if (!bE)
            return;
        if (!!arl)
            E.bL(bE, arl);
        ji ? E.bl(bE, by) : E.bL(bE, by);
    };
    p.fp('#<uispace>-hack,#<uispace>-cvr-hack{position:absolute;z-index:99;} #<uispace>-cover{position:absolute;top:-99999px;left:-99999px;width:100%;height:100%;background:url(' + N.rc.r + 'empty.png);z-index:10;} #<uispace>{position:absolute;top:-99999px;left:-99999px;z-index:100;text-align:center;} #<uispace> .ztbr{height:30px;line-height:30px;text-align:left;background-color:#5e9ff7;font-size:14px;font-weight:bold;/*color:#fff;*/} #<uispace> .zmov{cursor:move;} #<uispace> .zttl{width:85%;padding-left:10px;} #<uispace> .zcls{position:absolute;top:5px;right:10px;width:20px;height:20px;overflow:hidden;cursor:pointer;z-index:5;} #<uispace> .zcnt{padding:10px;min-height:30px;_height:30px;font-size:12px;background-color:#fff;} #<uispace> .zext{display:none;} #<uispace>.js-zncls-102 .zcls{display:none;}', aP);
    p.fp('.nbwindow{color:#000;border:1px solid #beb8ab;} #blog-163-com #blog-163-com-layer .nbwindow{/*height:auto;*/min-height:100px;border:1px solid #beb8ab;} .nbwindow .js-hide{display:none;} .nbwindow .zttl{font-size:12px;} .nbwindow .txtclose{position:absolute;top:4px;_top:5px;right:11px;_right:9px;width:10px;height:10px;line-height:10px;} .nbwindow .zcls{right:12px;top:-1px;width:32px;height:18px;line-height:18px;background:#beb8ab url(' + N.rc.r + 'nbwindow/close_01.png) no-repeat 0px center;color:#646464;text-indent:1px;_text-indent:2px;} .nbwindow .zclshover{background:#cd3503 url(' + N.rc.r + 'nbwindow/close_02.png) no-repeat 0px center;color:#ffe9e1;} .nbwindow .zclsmousedown{background:#ae2601 url(' + N.rc.r + 'nbwindow/close_03.png) no-repeat 0px center;color:#ffd9cb;} .nbwindow .ztbr{height:23px;line-height:23px;margin:0 auto;color:#000;background:#e8e8e6 url(' + N.rc.r + 'nbwindow/top_bg.png) bottom repeat-x;} .nbwindow .zact{margin:10px 0;text-align:center;} .nbwindow .ztxt{height:1.3em;padding-top:3px;} .nbwindow .zbtnbar{height:31px;line-height:31px;background:#eee;} .nbwindow .zbtn{height:28px;padding:0 8px;font-size:14px;cursor:pointer;} .nbwindow .zbtnok{font-weight:bold;} .nbwindow .zbtncc{margin-left:20px;} #blog-163-com .nbwindow .nbwinwrap .nbwinbtnbar{position:absolute;right:-2px;bottom:0;z-index:101;height:22px;line-height:22px;padding:4px 14px 4px 0;margin:0;border:none;background:none;} #blog-163-com .nbwindow .nbwinwrap .nbwinbtnbar .nbwinbtn{height:22px;padding:0px 10px;margin:0 0 0 10px;line-height:22px;*line-height:20px;font-size:12px;font-weight:normal;cursor:pointer;text-align:center;} #blog-163-com .nbwindow .nbwinwrap .nbwinclear{height:0;padding:0;margin:0;border:none;} #blog-163-com .nbwindow .nbwinwrap .nbwinhide{display:none;} #blog-163-com #blog-163-com-layer .nbwinascard{border:none;} .nbwinascard .zcls{display:none;} .nbwinascard .ztbr{display:none;} .nbwinascard .zcnt{padding:0;background:none;} .nbwinascard .zbtnbar{display:none;} #blog-163-com #blog-163-com-layer .nbwinautoheight{height:auto;} #nbwinNeedScroll{position:absolute;z-index:110;overflow:auto;background:url(' + N.rc.r + 'empty.png);} .nbwindow .zcls .txtclose{visibility:hidden;} ');
    p.fp('.nbwinzindex{position:relative;z-index:120;} .nbwinzindex .zcse{z-index:120;} #blog-163-com .nbwindow .nbwinwrap .nbwinlogin{width:230px;padding-bottom:5px;} #blog-163-com .nbwindow .nbwinwrap .nbwinlogin .nbwinloginreg{*height:16px;*line-height:16px;*padding-top:6px;} ');
    if (!B.fa) {
        p.fp('.nbwindow .zext{display:block;position:absolute;} .nbwindow .zext0{left:0;top:-6px;width:100%;height:6px;background:url(' + N.rc.r + 'nbwindow/top_bg.png) top repeat-x;} .nbwindow .zext1{left:0;bottom:-6px;width:100%;height:6px;background:url(' + N.rc.r + 'nbwindow/bottom_bg.png) bottom repeat-x;} .nbwindow .zext2{left:-6px;top:0;width:6px;height:100%;background:url(' + N.rc.r + 'nbwindow/left_bg.png) left repeat-y;} .nbwindow .zext3{right:-6px;top:0;width:6px;height:100%;background:url(' + N.rc.r + 'nbwindow/right_bg.png) right repeat-y;} .nbwindow .zext4{left:-6px;top:-6px;width:12px;height:29px;background:url(' + N.rc.r + 'nbwindow/left_top.png) no-repeat;} .nbwindow .zext5{right:-6px;top:-6px;width:12px;height:29px;background:url(' + N.rc.r + 'nbwindow/right_top.png) no-repeat;} .nbwindow .zext6{left:-6px;bottom:-6px;width:12px;height:37px;background:url(' + N.rc.r + 'nbwindow/left_bottom.png) no-repeat;} .nbwindow .zext7{right:-6px;bottom:-6px;width:12px;height:37px;background:url(' + N.rc.r + 'nbwindow/right_bottom.png) no-repeat;} .nbwinascard .zext{display:none;} ');
    }
    p.yi = C();
    jf = p.yi.at(p.agn, true);
    jf.bR = function(bv, H) {
        H = H || O;
        if (B.eW) {
            this.wO = document.cloneElement('div', this.ap() + '-cvr-hack');
        }
        this.aS(bv, H);
        if (!H.noresize) {
            V.Q(window, 'resize', this.cCj.K(this));
        }
    };
    jf.bm = function() {
        if (!!this.aqW) {
            var bF = E.aq('nbwinNeedScroll');
            aTn(bF);
        }
        E.bL(this.gg, 'zclshover zclsmousedown');
        p.yi.aZ.bm.call(this);
    };
    jf.cCj = function() {
        if (!this.aXV()) {
            this.Id();
            if (!!this.aqW) {
                var bF = E.aq('nbwinNeedScroll');
                aTn(bF);
            }
        }
    };
    jf.bc = function(H) {
        H = H || O;
        p.yi.aZ.bc.call(this, H);
        this.Q('onbtnready', H.onbtnready || F);
        this.aql = !!H.nocenter;
        this.bNp = this.aql && !!H.setFixedPos;
        if (H.leftpos !== 0) {
            this.aKb = H.leftpos || null;
        } else {
            this.aKb = 0;
        }
        if (H.toppos !== 0) {
            this.aGW = H.toppos || null;
        } else {
            this.aGW = 0;
        }
        this.ayG = !!H.nooverflow;
        this.tM = (B.fa && !!H.nohack) || (!B.fa && !H.iframe);
        !H.noclose ? E.bL(this.M, asH) : E.bl(this.M, asH);
        this.aqW = H.needScroll && B.fa && !H.nocover;
        E.bL(this.gg, 'zclshover zclsmousedown');
        if (!!E.aV(this.M, 'nbwinascard')) {
            E.bL(this.M, 'nbwinautoheight');
        } else {
            E.bl(this.M, 'nbwinautoheight');
        }
        this.iV(H.title);
        this.dV(H.content);
        this.azn(H.btnbar);
    };
    jf.iV = function(kf, Yk) {
        this.VC[Yk ? 'innerHTML' : 'innerText'] = kf || '';
    };
    jf.ew = function(ju) {
        if (!this.lj)
            this.lj = document.cloneElement('div', aP + '-cover');
        if (!ju) {
            E.cX(this.lj);
            return;
        }
        if (B.fa) {
            var aK = this.lj.style;
            aK.width = this.M.offsetWidth + 'px';
            aK.height = this.M.offsetHeight + 'px';
        }
        this.M.appendChild(this.lj);
    };
    jf.azs = function(dD, VD) {
        dD += !VD ? 0 : this.M.offsetWidth;
        if (!this.tM)
            this.eC.style.width = dD + 'px';
        this.M.style.width = dD + 'px';
    };
    jf.ay = function(bms) {
        E.cX(this.eC);
        if (!bms)
            this.Id();
        this.Yb();
    };
    jf.Yb = function() {
        if (!!this.tM)
            return;
        if (!!this.wO) {
            var aK = this.wO.style;
            aK.width = this.M.offsetWidth + 'px';
            aK.height = this.M.offsetHeight + 'px';
            this.M.insertAdjacentElement('beforeBegin', this.wO);
        }
        p.yi.aZ.Yb.call(this);
    };
    jf.aGR = function(en, du) {
        en = en || 0;
        du = du || 0;
        if (!!this.tM)
            return;
        if (!!this.wO) {
            var aK = this.wO.style;
            aK.top = du + 'px';
            aK.left = en + 'px';
        }
        p.yi.aZ.aGR.call(this, en, du);
    };
    jf.bsU = function(bOf) {
        this.tM = bOf || false;
    };
    jf.buh = function(ahy) {
        if (!!this.eC) {
            this.eC.style.zIndex = ahy || 0;
        }
        if (!!this.wO) {
            this.wO.style.zIndex = ahy || 0;
        }
    };
    jf.btr = function(sq, oN) {
        if (!this.eC)
            return;
        this.boh = sq;
        this.kJ = oN;
        if (B.eW && !!this.wO) {
            if (!!sq) {
                this.wO.style.backgroundColor = sq;
            } else {
                this.wO.style.backgroundColor = '';
            }
            if (!!oN || oN === 0) {
                this.wO.style.opacity = oN / 100;
                this.wO.style.filter = 'alpha(opacity=' + oN + ')';
            } else {
                this.wO.style.opacity = '';
                this.wO.style.filter = '';
            }
            this.eC.style.opacity = 0;
            this.eC.style.filter = 'alpha(opacity=' + 0 + ')';
        } else {
            if (!!sq) {
                this.eC.style.backgroundColor = sq;
            } else {
                this.eC.style.backgroundColor = '';
            }
            if (!!oN || oN === 0) {
                this.eC.style.opacity = oN / 100;
                this.eC.style.filter = 'alpha(opacity=' + oN + ')';
            } else {
                this.eC.style.opacity = '';
                this.eC.style.filter = '';
            }
        }
    };
    jf.ap = function() {
        return aP;
    };
    jf.bd = function() {
        return '<div class="nbwinwrap"> <div class="zcls zflg" title="关闭"><div class="txtclose">&#215;</div></div> <div class="ztbr noselect zflg"><div class="zttl thide zflg">&nbsp;</div></div> <div class="zcnt zflg"></div> <div class="zbtnbar zflg"></div> <div class="zext zext0">&nbsp;</div> <div class="zext zext1">&nbsp;</div> <div class="zext zext2">&nbsp;</div> <div class="zext zext3">&nbsp;</div> <div class="zext zext4">&nbsp;</div> <div class="zext zext5">&nbsp;</div> <div class="zext zext6">&nbsp;</div> <div class="zext zext7">&nbsp;</div> </div>';
    };
    jf.bT = function() {
        var A = E.bz(this.M, 'zflg');
        this.gg = A[0];
        this.cXv = A[1];
        this.VC = A[2];
        this.tT = A[3];
        this.XU = A[4];
        E.kd(this.VC.parentNode);
        cFK(this.gg, 'zclshover', 'zclsmousedown');
        V.Q(this.gg, 'mousedown', this.cTu.K(this));
        V.Q(this.gg, 'mouseup', this.bAD.K(this));
    };
    jf.cTu = function() {
        E.bl(this.gg, 'zclsmousedown');
    };
    jf.bAD = function() {
        E.bL(this.gg, 'zclsmousedown');
        this.Qb();
        if (!!this.aqW) {
            var bF = E.aq('nbwinNeedScroll');
            if (!!bF) {
                bF.style.display = 'none';
            }
        }
    };
    jf.azn = function(asf, bTe) {
        asf = asf || '';
        if (!!bTe) {
            E.bl(this.XU, 'js-hide');
        } else {
            E.bL(this.XU, 'js-hide');
        }
        typeof (asf) == 'string' ? this.XU.innerHTML = asf : this.XU.appendChild(asf);
        this.R('onbtnready', this.XU);
    };
    jf.pm = function() {
        var A = E.bz(this.M, 'nbwinbtnbar') || [];
        var bmA = A[0];
        if (!!bmA) {
            E.bL(bmA, 'nbwinbtnbar');
        }
        E.bl(bmA, 'nbwinbtnbar');
    };
    jf.aAQ = function(bF, cY) {
        if (!!bF && !!cY && cY > 0) {
            bF.style.height = cY + 'px';
            if (!this.tM && B.fa) {
                this.ay();
            } else {
                if (!B.fa)
                    this.aKh();
            }
        }
    };
    jf.aN = function() {
        this.azn('');
        if (B.eW && !!this.wO) {
            E.cX(this.wO);
        }
        p.yi.aZ.aN.call(this);
    };
    jf.Qb = function(L) {
        if (B.eW && !!this.wO) {
            E.cX(this.wO);
        }
        p.yi.aZ.Qb.call(this);
    };
    jf.Id = function() {
        if (!!this.aql) {
            if (this.bNp) {
                if (this.aKb == null && this.aGW == null) {
                    var cYf = E.EI(this.M, 'left');
                    var cXZ = E.EI(this.M, 'top');
                    this.sN(parseInt(E.EI(this.M, 'left')) || 0, parseInt(E.EI(this.M, 'top')) || 0);
                    if (!B.fa)
                        this.aKh();
                    return;
                }
            } else {
                if (!B.fa)
                    this.aKh();
                return;
            }
        }
        var bXO = this.M.clientWidth, aXw = this.M.clientHeight;
        this.M.style.display = 'none';
        var sh = document.documentElement || document.body, Kz = document.body || document.documentElement;
        var bmV = null, PV = null;
        if (this.aKb != null) {
            bmV = parseInt(this.aKb || 0) || 0;
        } else {
            bmV = (sh.scrollLeft || Kz.scrollLeft) + Math.max(0, sh.clientWidth - bXO) / 2;
            if (E.EI(this.M, 'position') == 'fixed') {
                bmV = Math.max(0, sh.clientWidth - bXO) / 2;
            } else {
                bmV = (sh.scrollLeft || Kz.scrollLeft) + Math.max(0, sh.clientWidth - bXO) / 2;
            }
        }
        if (this.aGW != null) {
            PV = parseInt(this.aGW || 0) || 0;
        } else {
            if (E.EI(this.M, 'position') == 'fixed') {
                PV = Math.max(0, sh.clientHeight - aXw) / 2;
            } else {
                PV = (sh.scrollTop || Kz.scrollTop) + Math.max(0, sh.clientHeight - aXw) / 2;
            }
        }
        this.sN(bmV, PV);
        this.M.style.display = 'block';
        if (!B.fa)
            this.aKh();
    };
    jf.aKh = function() {
        var A = E.bz(this.M, 'zext');
        this.bEb = A[0];
        this.bpY = A[1];
        this.btT = A[2];
        this.bFJ = A[3];
        if (this.M.clientWidth - 12 > 0) {
            this.bEb.style.width = this.bpY.style.width = (this.M.clientWidth - 12) + 'px';
        }
        this.bEb.style.left = this.bpY.style.left = '6px';
        if (this.M.clientHeight - 54 > 0) {
            this.btT.style.height = this.bFJ.style.height = (this.M.clientHeight - 54) + 'px';
        }
        this.btT.style.top = this.bFJ.style.top = '23px';
    };
    jf.aUd = V.bU.K(V);
    p.bO = C();
    yE = p.bO.at(p.yi, true);
    yE.bR = function(bv, H) {
        this.aS(bv, H);
        this.ahe = new (P(N.ut).ayv)(this.VC.parentNode, {ondrag: this.wb.K(this),onmove: this.yZ.K(this)});
    };
    yE.bT = function() {
        p.bO.aZ.bT.call(this);
        E.bl(this.VC.parentNode, 'zmov');
    };
    yE.Id = function() {
        p.bO.aZ.Id.call(this);
    };
    yE.wb = function() {
        if (!this.ayG)
            return;
        var fR = document.documentElement;
        this.bhO = fR.scrollWidth - this.M.offsetWidth;
        this.bjg = fR.scrollHeight - this.M.offsetHeight;
    };
    yE.yZ = function(ms, ot) {
        if (!this.ayG) {
            this.sN(ms, ot, true);
            return;
        }
        var aK = this.M.style;
        this.sN(Math.max(0, Math.min(this.bhO, (parseInt(aK.left) || 0) + ms)), Math.max(0, Math.min(this.bjg, (parseInt(aK.top) || 0) + ot)));
    };
    p.TS = C();
    Os = p.TS.at(p.aeF, true);
    Os.bR = function(bv, H) {
        this.aS(bv, H);
        this.hS = H || O;
        this.cz.azn(this.hS.btnbar || '');
    };
    Os.cnA = function(att) {
        if (!this.fk.nomove == !!att)
            return;
        this.fk.nomove = !att;
        var bv = this.cz.oA().parentNode;
        E.cX(this.M);
        this.cz.constructor.ah(this.cz);
        this.cz = this.fk.nomove ? p.yi.as(bv, this.fk) : p.bO.as(bv, this.fk);
        this.cz.dV(this.M);
        this.cz.azn(this.hS.btnbar || '');
        this.bm();
    };
    Os.iV = function(kf, Yk) {
        if (!!this.cz) {
            this.cz.iV(kf || '', Yk);
        }
    };
    Os.aeW = function(H) {
        this.fk = H || {};
        p.TS.aZ.aeW.call(this, this.fk);
        if (!this.fk.nocover) {
            this.fk.onclose = E.uY.K(E);
            this.fk.onbeforeshow = E.DH.K(E, this.fk.bgcolor || '', this.fk.opacity || '');
        }
        return !this.fk.nomove ? p.bO.as(null, this.fk) : p.yi.as(null, this.fk);
    };
    var p2 = P('nb.l'), Or;
    var fZ = function(bv, H) {
        H = H || {};
        H['class'] = 'nbw-win nbwindow';
        this.aqW = H.needScroll && B.fa && !H.nocover;
        if (!!this.aqW) {
            var bv = bv || document.lbody;
            var bF = E.aq('nbwinNeedScroll');
            if (!bF) {
                bF = document.cloneElement('div', 'nbwinNeedScroll');
                bF.id = 'nbwinNeedScroll';
                bv.appendChild(bF);
            }
            aTn(bF);
            bv = bF;
        }
        this.aS(bv || document.lbody, H);
    };
    p2.bO = C();
    Or = p2.bO.at(P(N.ui).TS, true);
    Or.bR = fZ;
    Or.pm = function() {
        if (B.fa) {
            if (!!this.cz)
                this.cz.pm();
        }
    };
    Or.aAQ = function(bF, cY) {
        if (!!this.cz)
            this.cz.aAQ(bF, cY);
    };
    Or.ay = function() {
        if (!!this.cz)
            this.cz.ay();
    };
    Or.bvm = function(bS) {
        if (!!this.cz && !!this.cz.gg) {
            V.ik(this.cz.gg, 'mouseup');
            V.Q(this.cz.gg, 'mouseup', this.qC.K(this, bS));
        }
    };
    Or.qC = function(bS) {
        if (!!this.cz && !!this.cz.gg) {
            if (!!bS)
                bS();
            this.cz.bAD();
        }
    };
    Or.cpU = function(ahy, sq, oN, cZh) {
        if (!!this.cz && !!this.cz.eC && !!this.cz.bsU) {
            this.cz.bsU(false);
            this.ay();
            this.bvR(ahy);
            this.cvU(sq, oN);
        }
    };
    Or.bvR = function(ahy) {
        if (!!this.cz && !!this.cz.buh) {
            this.cz.buh(ahy);
        }
    };
    Or.cvU = function(sq, oN) {
        if (!!this.cz && !!this.cz.btr) {
            this.cz.btr(sq, oN);
        }
    };
})();
(function() {
    var p = P('nb.l'), vY, aJq = {3: '188',6: 'game'}, bj = ['', '163.com', '126.com', 'popo.163.com', '188.com', 'vip.163.com', 'yeah.net', 'vip.126.com', 'qq.com', 'yahoo.com', 'sina.com'], Vx = {'163.com': {t: '0',p: ''},'popo.163.com': {t: '1',p: '.popo'},'126.com': {t: '2',p: '@126'},'188.com': {t: '3',p: '@188'},'vip.163.com': {t: '4',p: '.vip'},'yeah.net': {t: '5',p: '@yeah'},'vip.126.com': {t: '7',p: '@vip.126.com'},'qq.com': {t: '100',p: ''},'yahoo.com': {t: '100',p: ''},'sina.com': {t: '100',p: ''},'out_com': {t: '100',p: ''}};
    var aFA = function(bP) {
        return bP != '2' && bP != '3' && bP != '5';
    };
    var cPp = function(bP) {
        bP = parseInt(bP) || 0;
        bP = bP == 1 ? 2 : (bP == 2 ? 1 : bP);
        return bj[bP + 1] || bj[0];
    };
    var cfH = function() {
        var ey = U.rA('NEBLOG_LOGIN');
        if (!ey)
            return null;
        ey = ey.split('|');
        if (ey.length < 3 || ey[1] == 'null' || ey[2] == 'null')
            return null;
        return [ey[1], ey[2]];
    };
    var alE = function() {
        return U.rA('NETEASE_LOGIN_USERNAME') || '';
    };
    var bTw = function(bP, dj) {
        U.zj('NETEASE_LOGIN_USERNAME', dj, 'blog.163.com', 100, '/');
    };
    p.cO = C();
    vY = p.cO.at(p.bO, true);
    vY.bR = function(bv, H) {
        H = H || {};
        H.title = '登录网易通行证';
        H.onshow = this.cHb.K(this);
        this.azH = {r: /#<.*?>/gi};
        this.dU = {forlogin: true,onenter: this.abH.K(this),onchange: this.PJ.K(this)};
        this.aS(bv, H);
    };
    vY.bc = function(H) {
        this.aE.reset();
        this.aE[this.ab + '-1'].alg = false;
        this.hn('请输入登录信息');
        H = H || O;
        this.bRW = H.xparam || null;
        var ey = cfH();
        if (!!ey) {
            this.hn('请登录');
            this.zL = ey[1];
            this.xB.cvn(ey[0]);
            this.aE[this.ab + '-1'].alg = true;
            this.aE[this.ab + '-0'].value = ey[1];
        }
        if (U.fH(H.target, 'function')) {
            this.Q('ontarget', H.target);
        } else {
            this.Q('ontarget', F);
            this.bMM = H.target || '';
        }
        this.Q('onregist', H.onregist || this.ceL.K(this));
        p.cO.aZ.bc.call(this, H);
    };
    vY.ap = function() {
        return 'nbw-wlg';
    };
    vY.bd = function() {
        this.ab = 'id-' + U.ar(4);
        return '<form class="box" action="https://reg.163.com/logins.jsp" method="post"> <table class="table"> <tr><td class="col0">&nbsp;</td><td class="col1 ztag fc02">请输入登录信息</td></tr> <tr><td class="col0 fc00">帐　号：</td><td class="nbwinzindex col1 ztag"></td></tr> <tr><td class="col0 fc00">密　码：</td><td class="col1 pwd"><input id="' + this.ab + '-0" name="password" autocomplete="off" class="zwd ztxt" type="password" tabindex="11"/></td></tr> <tr><td class="col0">&nbsp;</td><td class="col1"> <a class="lnk m2a fc04" href="http://reg.163.com/RecoverPassword.shtml">忘记密码？</a> <div class="savelogin"> <div class="autologinarea ztag"><input type="checkbox" id="' + this.ab + '-1" tabindex="12"/><label class="fc01" for="' + this.ab + '-1">自动登录</label></div> <div class="login-tiparea autologin-tiparea ztag" style="display:none"> <div class="login-tiparea-top"></div> <p class="fc01">为了您的信息安全，请不要在网吧或公用电脑上使用此功能！</p> </div> </div> </td></tr> <input name="type" type="hidden" value="1"/> <input name="url" type="hidden" value=""/> <input name="product" type="hidden" value="blog"/> <input name="savelogin" type="hidden" value="0"/> <input name="username" type="hidden" value=""/> <tr class=""><td class="col0">&nbsp;</td><td class="col1 lgi"><a class="lnk m2a fc04 rgi ztag" href="http://reg.163.com/reg/reg.jsp?product=blog&url=http://blog.163.com/ntesRegBlank.html&loginurl=http://blog.163.com/">注册网易通行证--&gt;</a><input class="wbtn wbtnok" type="button" name="' + this.ab + '-a" value="登  录" tabindex="13"/></td></tr> <tr class=""><td class="col0">&nbsp;</td><td class="col1 lgi"><div class="loginmsn"><span class="pleft">使用MSN帐号登录博客</span><div class="ifmlgi"><iframe width="55" scrolling="no" height="24" frameborder="0" src="http://blog.163.com/pub/services/msnconnectnew.html" allowtransparency="yes"></iframe></div></div></td></tr> </table> </form>';
    };
    vY.bT = function() {
        this.aE = this.M.getElementsByTagName('form')[0];
        var A = E.bz(this.M, 'ztag');
        this.agP = A[0];
        this.bXy = A[1];
        this.bos = A[2];
        this.boS = A[3];
        this.bEY = A[4];
        this.xB = P(N.ui).SY.as(this.bXy, this.dU);
        V.Q(this.bEY, 'click', this.cze.K(this));
        V.Q(this.aE, 'keypress', this.Qa.K(this));
        V.Q(this.aE[this.ab + '-a'], 'click', this.yo.K(this));
        V.Q(this.bos, 'mouseover', this.cCq.K(this));
        V.Q(this.bos, 'mouseout', this.cAY.K(this));
    };
    vY.cCq = function(L) {
        V.bU(L);
        this.boS.style.display = '';
    };
    vY.cAY = function(L) {
        V.bU(L);
        this.boS.style.display = 'none';
    };
    vY.hn = function(cG, GV) {
        !GV ? E.bL(this.agP, 'fc03') : E.bl(this.agP, 'fc03');
        this.agP.innerText = cG || '请输入登录信息';
    };
    vY.cze = function() {
        var By = this.R('onregist');
        this.bEY.href = 'http://reg.163.com/reg/reg.jsp' + (!By ? '' : ('?' + By));
    };
    vY.ceL = function() {
        return 'product=blog&url=http://blog.163.com/ntesRegBlank.html&loginurl=http://blog.163.com/';
    };
    vY.cHb = function() {
        this.xB.gC();
        var A = this.aE[this.ab + '-1'];
        A.checked = !!A.alg;
    };
    vY.abH = function() {
        var A = this.aE[this.ab + '-0'];
        this.hn(!A.value ? '请输入密码' : '请登录');
        A.select();
    };
    vY.PJ = function(ai) {
        var D;
        var ge = alE();
        var aY = ai.indexOf('@');
        if (aY >= 0) {
            var bUN = ai.substring(0, aY);
            var aKD = ai.substring(aY + 1);
            if (aKD.indexOf('@') >= 0) {
                return;
            } else {
                if (!!aKD) {
                    var byi = [''];
                    for (var i = 0; i < bj.length; i++) {
                        if (bj[i].indexOf(aKD) == 0) {
                            byi.push(bj[i]);
                        }
                    }
                    D = byi.join(',' + bUN + '@').split(',');
                } else {
                    D = bj.join(',' + ai).split(',');
                }
            }
        } else {
            D = bj.join(',' + ai + '@').split(',');
        }
        if (ge.indexOf(ai) == 0)
            D[0] = ge;
        if (!D[0] || D[0] == D[1])
            D.shift();
        D.splice(0, 0, {value: '请选择或继续输入...',noaction: true});
        var An = 0;
        if (!!aKD) {
            An = 1;
        }
        this.xB.aze(D, An);
    };
    vY.Qa = function(L) {
        if (!L || L.keyCode != 13)
            return;
        var bE = V.aq(L);
        if (bE.name != this.ab + '-a')
            this.yo();
    };
    vY.yo = function() {
        if (this.aE[this.ab + '-a'].disabled)
            return;
        var dj = this.xB.ED(), nD = this.aE[this.ab + '-0'].value;
        dj = dj.split('@');
        var dZ = Vx[dj[dj.length - 1]] || Vx['out_com'];
        dj = dj.join('@');
        if (!dZ || dj.indexOf('@') < 0) {
            this.hn('请输入正确的用户名', true);
            this.xB.rV();
            return;
        }
        if (U.XH(nD)) {
            this.hn('请输入密码');
            this.aE[this.ab + '-0'].focus();
            return;
        }
        this.aE[this.ab + '-a'].disabled = true;
        yY = U.abG(this.azH, this.bMM || this.R('ontarget', dj) || location.href);
        yY = encodeURIComponent(yY);
        if (this.aE[this.ab + '-1'].checked)
            this.aE.savelogin.value = 1;
        this.aE.username.value = dj;
        this.aE.url.value = "http://blog.163.com/loginGate.do?target=" + yY + "&blogActivation=true";
        this.aE.submit();
    };
    vY.ajO = function(bP, dj, nD, zd) {
        this.aE[this.ab + '-a'].disabled = false;
        if (!zd || !zd.type) {
            this.hn((!zd ? '暂时无法验证，请稍后再试' : (zd.type == 0 ? zd.errorMsg : '未注册用户')) || '用户名或密码不正确，请重新输入', true);
            this.aE[this.ab + '-0'].select();
            return;
        }
        if (zd.type == 1)
            bTw(bP, dj);
        var beo = zd.username || dj;
        this.azH['#<user>'] = dj;
        this.azH['#<root>'] = nb.x.bQ(beo);
        yY = U.abG(this.azH, this.bMM || this.R('ontarget', dj) || location.href);
        yY = encodeURIComponent(yY);
        beo = encodeURIComponent(beo);
        dj = encodeURIComponent(dj);
        nD = encodeURIComponent(nD);
        var ae = zd.type == -1 ? "http://blog.163.com/passportIn.do?internal=true&in_username=" + dj + "&in_password=" + nD + "&type=" + bP + "&entry=" + (aJq[bP] || 'urs') + "&target=" + yY : "http://blog.163.com/loginGate.do?username=" + dj + "&target=" + yY;
        nb.x.ay(ae, this.bRW);
    };
})();
(function() {
    var p = P('nb.l'), Wr;
    p.hR = C();
    Wr = p.hR.at(p.bO, true);
    Wr.bR = function(bv, H) {
        H = H || {};
        H.title = H.title || '提示信息';
        this.aS(bv, H);
    };
    Wr.bc = function(H) {
        if (H.onok) {
            this.Q('onok', H.onok);
        }
        if (H.oncc) {
            E.bL(this.Mz, 'phide');
            this.Q('oncc', H.oncc);
        }
        this.cP.innerHTML = H.cnt || '';
        if (!!this.cz)
            this.cz.iV(H.title);
    };
    Wr.ap = function() {
        return 'nbw-msg';
    };
    Wr.bd = function() {
        return '<div class="cnt fs1 ztag"></div> <div class="nbwinbtnbar nbw-act"> <input type="button" class="nbwinbtn wbtn wbtnok ztag" value="确定"> <input type="button" class="nbwinbtn wbtn wbtncc ztag" value="取消"> </div>';
    };
    Wr.bT = function() {
        var A = E.bz(this.M, 'ztag');
        this.cP = A[0];
        this.abf = A[1];
        this.Mz = A[2];
        E.bl(this.Mz, 'phide');
        V.Q(this.abf, 'click', this.bJ.K(this));
        V.Q(this.Mz, 'click', this.eD.K(this));
    };
    Wr.bJ = function() {
        this.aj();
        this.R('onok');
    };
    Wr.eD = function() {
        this.aj();
        this.R('oncc');
    };
})();
(function() {
    var p = P('nb.l'), tJ, aL, aoD = E.aO('<span class="ns follow"><span class="flld">已关注</span> <span class="cancel m2a" onclick="nb.p.w.g.s.cl(1);">&lt;取消</span></span>'), PU = E.aO('<span class="iblock icn0 icn0-016">&nbsp;</span><span class="ul tofollow"  onclick="nb.p.w.g.s.cl(0);">关注他</span>');
    p.bqw = C();
    aL = p.bqw.at(P(N.fw).eQ);
    aL.la = function(wj, PS) {
        J.bi(location.dwr, 'UserFollowBeanNew', 'followUser', nb.c.bC.userId, PS, false, this.R.K(this, 'onfollowset', wj));
    };
    aL.CG = function(wj) {
        J.bi(location.dwr, 'UserFollowBeanNew', 'cancelFollowUser', nb.c.bC.userId, this.R.K(this, 'onfollowset', wj));
    };
    aL.DI = function() {
        J.bi(location.dwr, 'UserBeanNew', 'removeFriend', String(nb.c.aH.userId), false, this.R.K(this, 'delfriend'));
    };
    aL.cqe = function() {
        J.bi(location.dwr, 'UserBeanNew', 'getFriendAndFollowStatus', this.R.K(this, 'getFriendAndFollowStatus'));
    };
    p.aFG = new C();
    tJ = p.aFG.at(p.bO, true);
    tJ.bc = function(H) {
        this.aWN = (nb.c.bC.gender || '') == '她' ? 'F' : 'M';
        this.G.cqe();
        if (nb.c.dn) {
            this.bOp.href = nb.c.aH.baseUrl + 'manage/';
        } else {
            V.Q(this.bOp, 'click', function() {
                nb.l.cO.bm();
            });
        }
        if (nb.c.bC.isMultiUserBlog) {
            this.Hs.style.display = 'none';
        } else {
            this.Hs.style.display = '';
        }
        if (nb.c.bC.isMultiUserBlog && nb.c.aH.isMultiUserMember) {
            this.bAs.style.display = 'none';
            this.GF.style.display = 'none';
            this.bzi.style.display = '';
        } else {
            this.bzi.style.display = 'none';
            this.bAs.style.display = '';
            this.GF.style.display = '';
        }
    };
    tJ.bd = function() {
        var hx = '<div class="wrap"> <div class="user clearfix"> <div class="uface"><a href="' + nb.x.bQ(nb.c.bC.userName) + '"><img src="' + nb.x.LU(nb.c.bC.userName, 1) + '"></a></div> <div class="uinfo"> <div class="uinfoa fw1">' + nb.c.bC.nickName + '</div> <div class="uinfob ztag">加为博友或者关注' + nb.c.bC.gender + '，在<a class="c1 noul ztag" href="javascript:void(0);">博客中心</a>查看' + nb.c.bC.gender + '的更新</div> <div style="display:none" class="uinfob ztag">您已经是该博客的成员，会在<a class="c1 noul" href="' + nb.c.aH.baseUrl + 'manage/">个人中心</a>中默认接收该博客的更新</div> <div class="uinfoc"><span class="ztag frd"></span>&nbsp;&nbsp;<span class="ztag follow"></span><span class="ztag follow"></span></div> </div> <div class="rssto"> <div class="tt clearfix"><div class="text">订阅到阅读器：</div><div class="line">&nbsp;</div></div> <div class="rsslist"> <ul class="clearfix"> <li><a class="rssi rssi-7" target="_blank" href="http://blog.163.com/pub/redirect.html?fromsubscribe&url=http://yuedu.163.com/instantCustomSub.do?customUrl=http://blog.163.com/' + nb.c.bC.userName + '/rss&act=rdwybkdy_20120216_01">订阅到网易阅读</a></li> <li><a class="rssi rssi-0" target="_blank" href="http://blog.163.com/pub/redirect.html?fromsubscribe&url=http://reader.youdao.com/b.do?keyfrom=feedsky&url=http://blog.163.com/' + nb.c.bC.userName + '/rss">订阅到有道</a></li> <li><a class="rssi rssi-1" target="_blank" href="http://blog.163.com/pub/redirect.html?fromsubscribe&url=http://fusion.google.com/add?feedurl=http://blog.163.com/' + nb.c.bC.userName + '/rss"">订阅到Google</a></li> <li><a class="rssi rssi-2" target="_blank" href="http://blog.163.com/pub/redirect.html?fromsubscribe&url=http://www.xianguo.com/subscribe.php?url=http://blog.163.com/' + nb.c.bC.userName + '/rss">订阅到鲜果</a></li> <li><a class="rssi rssi-3" target="_blank" href="http://blog.163.com/pub/redirect.html?fromsubscribe&url=http://www.zhuaxia.com/add_channel.php?url=http://blog.163.com/' + nb.c.bC.userName + '/rss">订阅到抓虾</a></li> <li><a class="rssi rssi-4" target="_blank" href="http://blog.163.com/pub/redirect.html?fromsubscribe&url=http://9.douban.com/reader/subscribe?url=http://blog.163.com/' + nb.c.bC.userName + '/rss">订阅到九点</a></li> <li><a class="rssi rssi-5" target="_blank" href="http://blog.163.com/pub/redirect.html?fromsubscribe&url=http://mail.qq.com/cgi-bin/feed?u=http://blog.163.com/' + nb.c.bC.userName + '/rss">订阅到QQ邮箱</a></li> <li><a class="rssi rssi-6" target="_blank" href="http://blog.163.com/pub/redirect.html?fromsubscribe&url=http://inezha.com/add?url=http://blog.163.com/' + nb.c.bC.userName + '/rss">订阅到MSN</a></li> <li><a class="iblock noul icn1 icn1-0" target="_blank" href="' + nb.c.bC.baseUrl + 'rss">&nbsp;</a></li> </ul> </div> </div> <a class="yuedu" hidefocus="true" target="_blank" href="http://yuedu.163.com/promotion/2012.html?act=rdbkdy_20121023_01&utm_source=bkdy&utm_medium=20121023_01"></a> </div>';
        return hx;
    };
    tJ.bT = function() {
        var A = E.bz(this.M, 'ztag');
        this.G = new p.bqw({'onfollowset': this.rw.K(this),'delfriend': this.AS.K(this),'getFriendAndFollowStatus': this.cdx.K(this)});
        this.bAs = A[0];
        this.bOp = A[1];
        this.bzi = A[2];
        this.Hs = A[3];
        this.GF = A[4];
        this.rC = A[5];
        E.cR(this.GF, 'js-show');
    };
    tJ.cN = function() {
        this.ea();
        this.Jy();
        if (!nb.c.hP) {
            if (nb.x.CX('addfriendInSub'))
                this.lC();
        }
    };
    tJ.Jy = function() {
        if (this.tZ == 'friend') {
            this.Hs.innerHTML = '<span class="ztag frd">我们是博友<span class="cancel m2a"  onclick="nb.p.w.g.s.delf(event);">&lt;取消</span></span>';
            E.cR(this.Hs, 'js-show');
        } else if (this.tZ == 'inviting') {
            this.Hs.innerHTML = '<span class="ns">待确认</span>';
        } else
            this.Hs.innerHTML = '<span class="iblock icn0 icn0-41">&nbsp;</span><span class="ul ztag"  onclick="nb.p.w.g.s.addf(event);">加博友</span>';
        if (this.tZ == 'friend') {
            this.GF.innerHTML = '';
        } else if (this.zh == 'follow') {
            this.GF.innerHTML = aoD.innerHTML;
            E.cR(this.GF, 'js-show');
        } else {
            var akf = E.bz(PU, 'tofollow')[0];
            if (this.aWN == 'F') {
                akf.innerHTML = '关注她';
            } else {
                akf.innerHTML = '关注他';
            }
            this.GF.innerHTML = PU.innerHTML;
        }
    };
    tJ.ea = function() {
        var cy = P('nb.p.w.g.s');
        cy.cl = this.wd.K(this);
        cy.delf = this.uj.K(this);
        cy.addf = this.lC.K(this);
    };
    tJ.wd = function(wj) {
        if (nb.c.hP) {
            nb.l.zn.bm({message: '<center>不能关注自己哦</center>'});
            return;
        }
        if (!nb.c.dn) {
            nb.l.cO.bm({xparam: {'op': 'setfollowInSub'}});
        } else if (wj == 1) {
            nb.l.bgI.bm({title: '取消关注',nickname: nb.c.bC.nickName,onfollowset: this.rw.K(this)})
        } else
            this.G.la(0, '');
    };
    tJ.II = function() {
        this.G.CG(1);
    };
    tJ.uj = function() {
        nb.l.hR.bm({onok: this.EN.K(this),cnt: '<div class="delfrdwin"><span class="fs1">您是否真的要删除该博友？</span><br/> <span class="fs0 fc02">断开博友关系后，你将自动转为对方关注的博客，但是系统不会通知对方</span></div>',title: '删除博友'})
    };
    tJ.EN = function() {
        this.G.DI();
    };
    tJ.lC = function() {
        if (nb.c.hP) {
            nb.l.zn.bm({message: '<center>不能加自己为博友哦</center>'});
            return;
        }
        if (!nb.c.Kj) {
            if (!nb.c.dn)
                nb.l.cO.bm();
            else
                p.Aq.bm({bJ: this.vc.K(this),title: '加为博友'});
        } else {
            !nb.c.dn ? nb.l.cO.bm({xparam: {'op': 'addfriendInSub'}}) : nb.l.yR.bm({onok: this.lL.K(this)});
        }
    };
    tJ.lL = function(ia) {
        if (ia > 0) {
            if (this.zh != 'follow') {
                nb.l.hR.bm({onok: F,cnt: '<span class="fs1">发送邀请成功，您现在已经关注了' + nb.c.bC.gender + '。</span><br/><span class="fs1">以后&nbsp;<a class="fc04" href="' + nb.c.aH.baseUrl + 'manage/' + '">博客中心</a>&nbsp;能收到' + nb.c.bC.gender + '的动态的更新了。</span>',title: '加为博友',hiddenCC: true});
            }
            this.tZ = 'inviting';
            this.zh = 'follow';
        } else if (ia <= -10) {
            this.tZ = 'friend';
        } else {
            this.tZ = '';
            this.zh = '';
        }
        this.Jy();
    };
    tJ.vc = function() {
        this.G.la(0, '');
    };
    tJ.cdx = function(av) {
        this.tZ = av[0];
        this.zh = av[1];
        this.cN();
    };
    tJ.rw = function(wj, av) {
        if (av == 'maximum') {
            E.bN('你已经关注1000个博客了，关注量太大会让你忽略某些重要的关注信息！', true, false, 'fail');
            return;
        }
        if (av == 'blacked') {
            E.bN('由于对方权限设置，不允许加关注！', true, false, 'fail');
            return;
        }
        var cV = av == 'success';
        if (!cV) {
            if (av == 'valCode')
                nb.l.Il.bm({bJ: this.wY.K(this),title: '关注' + (nb.c.bC.gender)});
            else if (av == 'friend') {
                E.bN('已经是博友', true, false, 'fail');
                this.tZ = 'friend';
                this.Jy();
            } else {
                if (wj == 0) {
                    E.bN('暂时无法设置关注，请稍后再试！', true, false, 'fail');
                    return;
                } else {
                    E.bN('暂时无法取消关注，请稍后再试！', true, false, 'fail');
                    return;
                }
            }
        } else {
            if (wj == 0) {
                this.zh = 'follow';
                E.bL(this.rC, 'js-hide');
                this.dF = window.setTimeout(this.Qq.K(this), 3000);
                E.bN('关注用户成功!', true, false, 'success');
            } else {
                this.zh = 'unfollow';
                !E.aV(this.rC, 'js-hide') ? E.bl(this.rC, 'js-hide') : '';
                E.bN('成功取消关注!', true, false, 'success');
            }
            this.Jy();
        }
    };
    tJ.Qq = function() {
        E.bl(this.rC, 'js-hide');
        window.clearInterval(this.dF);
    };
    tJ.AS = function(jb) {
        if (jb) {
            E.bN('取消博友成功!', true, false, 'success');
            this.tZ = '';
            this.zh = '';
            this.Jy();
        } else {
            E.bN('取消博友不成功!', true, false, 'fail');
        }
    };
    tJ.ap = function() {
        return 'nbw-rsslayer';
    }
})();
(function() {
    var p = P('nb.l'), Oo;
    p.bgI = C();
    Oo = p.bgI.at(p.bO, true);
    Oo.bR = function(bv, H) {
        H = H || {};
        H.title = H.title || '取消关注';
        this.aS(bv, H);
    };
    Oo.bc = function(H) {
        H = H || O;
        this.Q('onfollowset', H.onfollowset);
        this.cSG.innerText = H.nickname;
        this.cRP.innerText = H.nickname;
    };
    Oo.ap = function() {
        return 'nbw-ccf-win';
    };
    Oo.bd = function() {
        return '<div class="cnt fs1 thide">您真的要取消关注 <span class="ztag"></span></div> <div class="nbwinbtnbar nbw-act ztag"> <input type="button" class="nbwinbtn wbtn wbtnok ztag" value="确定"> <input type="button" class="nbwinbtn wbtn wbtncc ztag" value="取消"> </div> <div class="nbw-act ztag js-hide"> <img src="http://b.bst.126.net/style/common/loading.gif" style="vertical-align:middle"/><span>正在取消对</span><span class="ztag"></span><span>的关注, 请稍候... </span> </div>';
    };
    Oo.bT = function() {
        var A = E.bz(this.M, 'ztag');
        this.cSG = A[0];
        this.aew = A[1];
        this.abf = A[2];
        this.Mz = A[3];
        this.auO = A[4];
        this.cRP = A[5];
        V.Q(this.abf, 'click', this.bJ.K(this));
        V.Q(this.Mz, 'click', this.eD.K(this));
    };
    Oo.bJ = function() {
        E.bl(this.aew, 'js-hide');
        E.bL(this.auO, 'js-hide');
        J.bi(location.dwr, 'UserFollowBeanNew', 'cancelFollowUser', nb.c.bC.userId, this.cwG.K(this));
    };
    Oo.cwG = function(av) {
        E.bL(this.aew, 'js-hide');
        E.bl(this.auO, 'js-hide');
        this.aj();
        this.R('onfollowset', 1, av);
    };
    Oo.eD = function() {
        this.aj();
    };
})();
(function() {
    var p = P('nb.l'), GC;
    p.yR = C();
    GC = p.yR.at(p.bO, true);
    GC.bR = function(bv, H) {
        H = H || {};
        H.title = '加为博友';
        this.aQr = H.nofollow;
        this.aS(bv, H);
    };
    GC.bc = function(H) {
        this.aE.reset();
        this.aQr = H.nofollow;
        this.Q('onok', H.onok || F);
        p.yR.aZ.bc.call(this, H);
        this.Uv();
        this.cNi();
    };
    GC.ap = function() {
        return 'nbw-waf';
    };
    GC.bd = function() {
        this.ab = 'id-' + U.ar(4) + '-';
        return '<form class="box" onsubmit="return false;"> <div class="tip fc01">' + (this.aQr ? '' : '在博主接受请求之前可以先关注她，接收她的动态更新。') + '</div> <table class="table"> <tr><td class="col0 fc00"><label for="' + this.ab + '0">附　　言：</label></td> <td class="col1"><textarea class="bdc0 ztag" name="' + this.ab + '0" id="' + this.ab + '0"></textarea></td></tr> <tr><td class="col0 fc00"><label>选择分组：</label></td><td class="col1 ztag"></td> <tr class="nbw-vcd"><td class="col0 fc00"><label for="' + this.ab + '3">验 证 码：</label></td><td class="col1"> <input class="ntxt" type="text" maxlength="4" name="' + this.ab + '3" id="' + this.ab + '3"/> <img class="ztag"/> <span class="ztag ul fc04">看不清楚 换一张</span></td></tr> <tr><td class="col0">&nbsp;</td><td class="col1"><div class="nbwinbtnbar act"> <input class="nbwinbtn wbtn wbtnok" type="button" value="发送请求" name="' + this.ab + 'a"/> <input class="nbwinbtn wbtn wbtncc" type="button" value="取 消" name="' + this.ab + 'b"/></div></td></tr> </table> </form>';
    };
    GC.bT = function() {
        var A = E.bz(this.M, 'ztag');
        this.Eo = A[0];
        this.cSB = A[1];
        this.io = A[2];
        V.Q(A[3], 'click', this.Uv.K(this));
        this.aE = this.M.getElementsByTagName('form')[0];
        V.Q(this.aE[this.ab + 'a'], 'click', this.bJ.K(this));
        V.Q(this.aE[this.ab + 'b'], 'click', this.aj.K(this));
        V.Q(this.Eo, 'keyup', this.avv.K(this));
    };
    GC.avv = function() {
        var ai = this.Eo.value, jL = ai.length;
        if (jL > 50) {
            this.Eo.value = ai.substring(0, 50);
            alert('超过最大字数限制50个！');
        }
    };
    GC.cNi = function() {
        if (!!this.aE[this.ab + '4'] || !!this.agL)
            return;
        this.agL = true;
        J.bi(location.dwr, 'LimitVisitBean', 'getVisitorGroups', false, this.cdX.K(this));
    };
    GC.cdX = function(mk) {
        this.agL = false;
        if (!mk) {
            E.bN('暂时无法获取博友列表，请稍后再试！', true, false, 'fail');
            return;
        }
        var ba = ['<select class="bdc0" name="' + this.ab + '4">'];
        for (var i = 0, l = mk.length; i < l; ba.push('<option value="' + mk[i].id + '">' + mk[i].groupName + '</option>'), i++)
            ;
        ba.push('</select>');
        this.cSB.innerHTML = ba.join('');
    };
    GC.bJ = function() {
        var A = this.aE[this.ab + '3'], ai = U.aQ(A.value);
        if (ai.length != 4) {
            alert('请正确输入验证码！');
            A.focus();
            return;
        }
        E.bN('邀请发送中...', true, true, 'loading');
        this.aE[this.ab + 'a'].disabled = true;
        J.bi(location.dwr, 'LimitVisitBean', this.aQr ? 'inviteHostWithMsgAndValcodeNoFollow' : 'inviteHostWithMsgAndValcode', false, false, this.aE[this.ab + '0'].value, this.aE[this.ab + '4'].value, ai, this.blX.K(this), this.blX.K(this));
    };
    GC.blX = function(av) {
        this.aE[this.ab + 'a'].disabled = false;
        var AL = '暂时无法加为好友，请稍后再试！', Vd = true;
        if (av && av.type == 'CaptchaException') {
            E.bN('验证码不正确！', true, false, 'fail');
            this.Uv();
            return;
        } else if (av && av.type == 'KeyWordRuntimeException') {
            E.bN('关键字过滤失败，包含敏感关键字', true, false, 'fail');
            return;
        }
        E.kz();
        av = parseInt(av);
        if (av >= 0) {
            AL = '邀请发送成功！';
            Vd = false;
        }
        if (av <= -10) {
            AL = '添加博友成功！';
            Vd = false;
        }
        if (av == -2) {
            AL = '已经是你的博友！';
            Vd = true;
        }
        if (av == -3) {
            AL = '不能添加自己！';
            Vd = true;
        }
        if (av == -4) {
            AL = '匿名用户不能执行此操作！';
            Vd = true;
        }
        if (av == -5) {
            AL = '对方拒绝任何添加博友请求！';
            Vd = false;
        }
        if (av == -6) {
            AL = '你的博友数已经超过上限，不能主动添加好友，只能接受对方的好友请求！';
            Vd = true;
        }
        if (av == -7) {
            AL = '封禁用户不能执行此操作！';
            Vd = true;
        }
        if (av >= 0 || av <= -10) {
            E.bN(AL, true, false, 'success');
        } else {
            E.bN(AL, true, false, 'fail');
        }
        if (Vd) {
            this.Uv();
            return;
        }
        this.aj();
        this.R('onok', av);
    };
    GC.Uv = function() {
        var nF = 'http://api.blog.163.com/cap/captcha.jpgx?parentId=' + nb.c.bC.userId + '&r=';
        this.io.src = nF + U.ar(5);
    };
})();
(function() {
    var p = P('nb.l'), aeb;
    p.zn = C();
    aeb = p.zn.at(p.bO, true);
    aeb.bR = function(bv, H) {
        H = H || {};
        H.title = H.title || '信息提示';
        this.aS(bv, H);
    };
    aeb.bc = function(H) {
        H = H || O;
        if (!!H.title)
            this.cz.iV(H.title);
        this.Q('onok', H.onok || F);
        if (!!H.oncc) {
            this.bvm(H.oncc);
        }
        E.bl(this.M, H.style);
        this.cP.innerHTML = H.message || '&nbsp;';
    };
    aeb.ap = function() {
        return 'nbw-alt';
    };
    aeb.bd = function() {
        return '<div class="cnt fc00 fs1 ztag"></div> <div class="nbwinbtnbar nbw-act"><input type="button" class="nbwinbtn wbtn wbtnok ztag" value="确定"></div>';
    };
    aeb.bT = function() {
        var A = E.bz(this.M, 'ztag');
        this.cP = A[0];
        V.Q(A[1], 'click', this.bJ.K(this));
    };
    aeb.bJ = function() {
        this.aj();
        this.R('onok');
    };
})();
(function() {
    var p = P('nb.l'), tN, Ri;
    p.Aq = C();
    tN = p.Aq.at(P('nb.l').bO, true);
    tN.bR = function(bv, H) {
        H = H || {};
        this.aS(bv, H);
    };
    tN.bc = function(H) {
        this.aE.reset();
        p.Aq.aZ.bc.call(this, H);
        this.Q('__onOK', H.bJ);
    };
    tN.ap = function() {
        return 'nbw-flw';
    };
    tN.bd = function() {
        this.ab = 'id-' + U.ar(4);
        return '<form class="box" onsubmit="return false;"> <div class="crtabm clearfix""> <div class="contentdesc"><span class="fs0">不好意思，博主谢绝任何人加为博友。</span><br/><br/><span class="fs0">你关注他，就可以在博客中心里接收他的动态。</span></div> <div class="nbwinbtnbar btns3"><input  type="button" value="关注他" class="nbwinbtn btn4 wbtn wbtnok btnok"/><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><input  type="button" value="取&nbsp;消" class="nbwinbtn btn4 wbtn wbtncc"/></div> </div> </form>';
    };
    tN.bT = function() {
        this.aE = this.M.getElementsByTagName('form')[0];
        var A = E.bz(this.M, 'btn4');
        this.jT = A[0];
        this.kB = A[1];
        V.Q(A[0], 'click', this.bJ.K(this));
        V.Q(A[1], 'click', this.be.K(this));
    };
    tN.bJ = function() {
        this.aj();
        this.R('__onOK');
    };
    tN.be = function() {
        this.aj();
    };
    p.Il = C();
    Ri = p.Il.at(P('nb.l').bO, true);
    Ri.bR = function(bv, H) {
        H = H || {};
        this.aS(bv, H);
    };
    Ri.bc = function(H) {
        this.aE.reset();
        p.Il.aZ.bc.call(this, H);
        this.PK = H.userId || '';
        this.acM();
        this.Q('__onOK', H.bJ);
    };
    Ri.ap = function() {
        return 'nbw-vcd-flw';
    };
    Ri.bd = function() {
        this.ab = 'id-' + U.ar(4);
        return '<form class="box" onsubmit="return false;"> <div class="crtabm clearfix""> <div class="contentdesc fc01">由于您今天已关注较多博客，需要输入验证码方能继续</div> <div><span>验&nbsp;证&nbsp;码：</span><input type="text" name="vcd" class="bdwa bds0 bdc0 vcd"><img class="ztag"/><span class="ul ztag" style="color:#3366CC">看不清楚 换一张</span></div> <div class="nbwinbtnbar btns3"><input  type="button" value="提&nbsp;交" class="nbwinbtn btn4 wbtn wbtnok btnok"/><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><input  type="button" value="取&nbsp;消" class="nbwinbtn btn4 wbtn wbtncc"/></div> </div> </form>';
    };
    Ri.bT = function() {
        this.aE = this.M.getElementsByTagName('form')[0];
        this.bWM = this.aE.vcd;
        var A = E.bz(this.aE, 'ztag');
        this.ix = A[0];
        this.aKt = A[1];
        V.Q(this.aKt, 'click', this.acM.K(this));
        A = E.bz(this.M, 'btn4');
        this.jT = A[0];
        this.kB = A[1];
        V.Q(A[0], 'click', this.bJ.K(this));
        V.Q(A[1], 'click', this.be.K(this));
    };
    Ri.acM = function() {
        if (!!this.PK) {
            var bUb = location.api + 'cap/captcha.jpgx?parentId=' + this.PK + '&r=';
            this.ix.src = bUb + U.ar(5);
        } else {
            this.ix.src = location.vcd + U.ar(5);
        }
    };
    Ri.bJ = function() {
        this.aj();
        this.R('__onOK', this.bWM.value);
    };
    Ri.be = function() {
        this.aj();
    };
})();
(function() {
    var p = P('nb.l'), Nk;
    p.avR = C();
    Nk = p.avR.at(p.bO, true);
    Nk.bR = function(bv, H) {
        H = H || {};
        H.title = H.title || '信息提示';
        H.nocover = true;
        H.nocenter = true;
        this.aS(bv, H);
        this.ea();
    };
    Nk.ea = function() {
        P('nb.l.g').closeAipaiIframe = this.axY.K(this);
    };
    Nk.bc = function(H) {
        H = H || O;
        if (!!H.title)
            this.cz.iV(H.title);
        this.Q('onok', H.onok || F);
        E.bl(this.M, H.style);
        new Image().src = 'http://blog.163.com/newpage/images/analyse.png?aipaiopen&name=' + nb.c.aH.userName + '&t=' + new Date().getTime();
    };
    Nk.ap = function() {
        return 'nbw-aipai nbwinascard';
    };
    Nk.bd = function() {
        return '<iframe style="width:287px;height:186px;padding:0;margin:0;border:none;overflow:hidden;" allowTransparency="true" frameborder="0" scrolling="no" src="http://blog.163.com/pub/services/aipaiSpread.html?t=' + new Date().getTime() + '"></iframe>\</div>';
    };
    Nk.axY = function() {
        var gA = new Image();
        gA.onload = this.TO.K(this);
        gA.onerror = this.TO.K(this);
        gA.src = 'http://blog.163.com/newpage/images/analyse.png?aipaiclose&name=' + nb.c.aH.userName + '&t=' + new Date().getTime();
        this.bYg();
    };
    Nk.TO = function() {
        this.aj();
    };
    Nk.bYg = function(callback) {
        J.bi(location.dwr, 'UserBeanNew', 'updateShowAiPaiTime', false);
    };
    window.closeAipaiWinForIframe = function() {
        P('nb.l.g').closeAipaiIframe();
    };
    window.setNeverShowAiPaiForIframe = function(bYu) {
        J.bi(location.dwr, 'UserBeanNew', 'setNeverShowAiPai', bYu);
    };
    window.getNameForIframe = function() {
        return 'frompersonalblog&name=' + nb.c.aH.userName;
    };
    window.isLoginForIframe = function() {
        return nb.c.dn;
    };
})();
(function() {
    var p = P('nb.w'), aHu;
    var bJV = 'ipadclientdownloadtipkey';
    p.cOx = function() {
        var cXQ = window.navigator.userAgent.toLowerCase();
        return cXQ.indexOf('ipad') >= 0;
    };
    p.dic = function() {
        var cXQ = window.navigator.userAgent;
        (/OS ([0-9]_\d[_\d]*) like Mac OS X/i).test(cXQ);
        return RegExp.$1 || '';
    };
    p.bHR = C();
    aHu = p.bHR.at(P(N.ut).lq);
    aHu.bR = function(H) {
        this.aS();
        this.ea();
        this.diU();
    };
    aHu.ea = function() {
        var cy = P('loft.w.g');
        cy.closeIpadClientTip = this.dio.K(this);
    };
    aHu.dio = function() {
        var cWg = 365 * 100;
        U.zj(bJV, '1', 'blog.163.com', cWg, '/');
        if (!!this.aFO) {
            if (!!this.cQd) {
                E.bL(document.body, 'f-trans2');
                document.body.style.backgroundPosition = '';
            }
            this.aFO.style.height = '0';
            this.aFO.style.paddingTop = '0';
            this.aFO.style.display = 'none';
        }
    };
    aHu.diU = function() {
        if (!B.eW && p.cOx()) {
            var ai = U.rA(bJV);
            if (!!ai)
                return;
            var cnb = E.aq('blog-163-com-main');
            if (!cnb)
                return;
            this.dhJ();
            this.cQd = (E.bz(cnb, 'md-bar') || [])[0];
            this.aFO = document.cloneElement('div', 'w-ipadtipbar f-trans');
            this.aFO.style.height = '0';
            this.aFO.style.paddingTop = '3px';
            this.aFO.style.overflow = 'hidden';
            this.aFO.style.visibility = 'hidden';
            this.aFO.innerHTML = '<div class="ipadtipbar wsy"><a class="installIpad" hidefocus="true" href="https://itunes.apple.com/us/app/lofter-wang-yi-qing-bo-ke/id629778124?mt=8" target="_blank">网易轻博客LOFTER推出iPad客户端，感受最有创造力的博客！<span>点击下载&gt;</span></a><a class="closetip" onclick="loft.w.g.closeIpadClientTip();return false;" hidefocus="true" href="#">关闭</a></div>';
            cnb.insertAdjacentElement('beforeBegin', this.aFO);
            window.setTimeout(function() {
                if (!!this.cQd) {
                    E.bl(document.body, 'f-trans2');
                    document.body.style.backgroundPosition = '0 50px';
                }
                this.aFO.style.visibility = '';
                this.aFO.style.height = '50px';
            }.K(this), 5000);
        }
    };
    aHu.dhJ = function() {
        P(N.ui).fp('.w-ipadtipbar{width:100%;height:50px;line-height:50px;background:#2a3136;box-shadow:inset 0 0 3px 0px rgba(0,0,0,0.3);} .w-ipadtipbar .ipadtipbar{position:relative;height:50px;line-height:50px;margin:0 auto;text-align:left;} .w-ipadtipbar .installIpad{color:#fff;font-size:14px;text-decoration:none;} .w-ipadtipbar .installIpad span{font-size:12px;} .w-ipadtipbar .closetip{position:absolute;top:15px;right:0px;width:20px;height:20px;background:url("/newpage/images/ipadtip/ipadtipclose24.png") 1px 1px no-repeat;_background:url("/newpage/images/ipadtip/ipadtipclose8.png") 1px 1px no-repeat;text-indent:-9999px;} .f-trans{transition:all 0.3s linear;-webkit-transition:all 0.3s linear;-moz-transition:all 0.3s linear;-o-transition:all 0.3s linear;} .f-trans2{transition:background-position 0.3s linear;-webkit-transition:background-position 0.3s linear;-moz-transition:background-position 0.3s linear;-o-transition:background-position 0.3s linear;} ');
        P(N.ui).fp('.nb-nbar{min-width:100%;} .w-ipadtipbar .ipadtipbar{width:800px;} .nb-body .wsy{max-width:100%;} ');
        P(N.ui).aYV();
    };
})();
(function() {
    var p = P('nb.w'), djM;
    var bJV = 'mobilelofteracttipkey';
    p.dkB = C();
    djM = p.dkB.at(P(N.ut).lq);
    djM.bR = function(H) {
        this.aS();
        this.ea();
        this.dkg();
    };
    djM.ea = function() {
        var cy = P('loft.w.g');
        cy.closeMobileLofterTip = this.dkC.K(this);
    };
    djM.dkC = function() {
        var cWg = 365 * 100;
        U.zj(bJV, '1', 'blog.163.com', cWg, '/');
        if (!!this.dld) {
            this.dld.style.height = '0';
            window.setTimeout(function() {
                this.dld.style.display = 'none';
            }.K(this), 1000);
        }
    };
    djM.dkg = function() {
        if (B.IQ) {
            var ai = U.rA(bJV);
            if (!!ai)
                return;
            this.dld = document.cloneElement('div', 'w-mobileloftertipbar f-trans');
            this.dld.style.height = '0';
            this.dld.style.overflow = 'hidden';
            this.dld.style.visibility = 'hidden';
            this.dld.innerHTML = '<a class="mobiletipbar" hidefocus="true" href="http://www.lofter.com" target="_blank"> <span class="actttl">LOFTER，简单精致的手机博客</span> <span class="goact" hidefocus="true">点击查看</span> <span class="closetip" onclick="loft.w.g.closeMobileLofterTip();return false;" hidefocus="true" href="#">关闭</span> </a> <div class="bg"></div>';
            document.body.insertAdjacentElement('beforeEnd', this.dld);
            window.setTimeout(function() {
                this.dld.style.visibility = '';
                this.dld.style.height = '330px';
            }.K(this), 1000);
        }
    };
    djM.dhJ = function() {
        P(N.ui).fp('.w-mobileloftertipbar{position:fixed;_position:absolute;bottom:0;left:0;right:0;z-index:1000;width:100%;height:330px;} .w-mobileloftertipbar .mobiletipbar{position:relative;z-index:10;width:100%;padding-top:60px;/*font-family:"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei","\5FAE\8F6F\96C5\9ED1",Arial,Helvetica,simsun,"\u5b8b\u4f53";*/} .w-mobileloftertipbar .actttl{height:105px;line-height:105px;margin:0 0 30px 0;font-size:65px;color:#000;text-align:center;} .w-mobileloftertipbar .goact{display:block;width:320px;height:93px;line-height:93px;margin:0 auto;background:url("/newpage/images/loftertip/mobileicons.png") 0px 0px no-repeat;font-size:40px;color:#fff;text-decoration:none;} .w-mobileloftertipbar .closetip{position:absolute;top:18px;right:18px;width:40px;height:40px;background:url("/newpage/images/loftertip/mobileicons.png") 0px -162px no-repeat;text-indent:-9999px;} .w-mobileloftertipbar .bg{position:absolute;top:0;left:0;right:0;z-index:5;width:100%;height:330px;background:#f0f0f0;opacity:0.8;filter:alpha(opacity=80);} .f-trans{transition:all 0.3s linear;-webkit-transition:all 0.3s linear;-moz-transition:all 0.3s linear;-o-transition:all 0.3s linear;} ');
        P(N.ui).aYV();
    };
})();
(function() {
    var p = P('nb.w'), djC;
    var bJV = 'mobileadbannercookiekey';
    p.cOx = function() {
        var cXQ = window.navigator.userAgent.toLowerCase();
        return cXQ.indexOf('ipad') >= 0;
    };
    p.dic = function() {
        var cXQ = window.navigator.userAgent;
        (/OS ([0-9]_\d[_\d]*) like Mac OS X/i).test(cXQ);
        return RegExp.$1 || '';
    };
    p.dmO = function() {
        var cXQ = window.navigator.userAgent.toLowerCase();
        return cXQ.indexOf('android') >= 0;
    };
    p.dle = C();
    djC = p.dle.at(P(N.ut).lq);
    djC.bR = function(H) {
        this.aS();
        var dmk = !!p.dic();
        if (B.IQ && (dmk || p.dmO()) && !p.cOx()) {
            this.ea();
            this.dlp(dmk);
        }
    };
    djC.dlp = function(dmk) {
        dmk = dmk || false;
        J.bi(location.dwr, 'ADBean', 'getBottomAds4Mobile', dmk, this.dlg.K(this));
    };
    djC.dlg = function(aw) {
        this.dlc = aw;
        if (!!this.dlc && this.dlc['pic_url'] && this.dlc['updateTime']) {
            this.dlk();
        }
    };
    djC.dkv = function() {
        this.dkr(this.dkL);
    };
    djC.ea = function() {
        var cy = P('nb.w.g');
        cy.onADImgLoad = this.dkr.K(this);
        cy.closeMobileADBanner = this.dkb.K(this);
    };
    djC.dkr = function(dkz) {
        if (!dkz || !this.djz)
            return;
        var dD = dkz.width || 3;
        var cY = dkz.height || 1;
        window.setTimeout(function(cY) {
            this.djz.style.visibility = '';
            this.djz.style.height = cY + 'px';
            window.setTimeout(function() {
                E.bL(this.djz, 'f-trans');
                this.djz.style.height = 'auto';
            }.K(this), 300);
        }.K(this, cY), 500);
    };
    djC.dkb = function() {
        var cWg = 365 * 100;
        var dlb = 0;
        if (!!this.dlc && !!this.dlc['updateTime']) {
            dlb = this.dlc['updateTime'];
        } else {
            updateTime = (new Date()).getTime();
        }
        U.zj(bJV, dlb, 'blog.163.com', cWg, '/');
        if (!!this.djz) {
            this.djz.style.height = '0';
            window.setTimeout(function() {
                this.djz.style.display = 'none';
            }.K(this), 1000);
        }
    };
    djC.dlk = function() {
        var ai = U.rA(bJV);
        if (!!ai && ai >= this.dlc['updateTime'])
            return;
        this.djz = document.cloneElement('div', 'w-mobileadbanner f-trans');
        this.djz.style.height = '0';
        this.djz.style.overflow = 'hidden';
        this.djz.style.visibility = 'hidden';
        this.djz.innerHTML = '<a class="mobileadlink ztag" hidefocus="true" href="#" target="_blank"> <img class="ztag" onload="nb.w.g.onADImgLoad(this);" /> <img class="closebtn ztag" onclick="nb.w.g.closeMobileADBanner();return false;" hidefocus="true" src="http://b.bst.126.net/newpage/images/mobileadbanner/closebtn.png"> </a>';
        document.body.insertAdjacentElement('beforeEnd', this.djz);
        var A = E.bz(this.djz, 'ztag');
        this.djL = A[0];
        this.dkL = A[1];
        this.caG = A[2];
        this.djL.href = this.dlc['pic_href'] || '#';
        this.dkL.src = this.dlc['pic_url'];
    };
})();
(function() {
    var bW = nb.c.hZ() || '';
    !!bW && nb.m.cqy(bW.split(','));
    nb.c.cng() && nb.w.brO.ob().aXj(nb.c.IL());
    if (nb.c.hP) {
        var aHd = nb.w.aEo.ob();
        nb.c.ant || aHd.bwk();
    }
    new nb.w.aDe();
    var aAy = nb.w.bgr.ob();
    aAy.arb(nb.c.crB);
    if (nb.c.hP && nb.c.aH.multiUserVisitorRank != 240)
        aAy.cpE();
    var bE = E.aq('$_spaceNameModify_Btn');
    if (!!bE) {
        V.Q(bE, 'click', function() {
            var awJ = bE.innerText;
            E.cT('$_spaceDescShieldInfoArea');
            if (awJ == '修改博客名称') {
                aAy.cwz();
            } else {
                aAy.cve();
            }
        });
    }
    if (nb.x.CX('addfriendInSub') && !nb.c.hP) {
        nb.l.aFG.bm({title: '订阅'});
    }
    V.Q('$_foot_subscribe', 'click', function(L) {
        nb.l.aFG.bm({title: '订阅'});
    });
    V.Q('$_blog_subscribe', 'click', function(L) {
        nb.l.aFG.bm({title: '订阅'});
    });
    if (B.fa) {
        var Yn = function() {
            var fR = document.body;
            var bfb = E.aq('blog-163-com-main');
            var bJF = E.aq('blog-163-com-topbar');
            var bIV = E.aq('blog-163-com-ie6bodywrap');
            var bfp = E.aq('blog-163-com-ie6body');
            var azF = E.aq('blog-163-com-toptips');
            if (!bIV || !bfp) {
                return;
            }
            ;
            if (fR.clientWidth - 17 < bfb.clientWidth) {
                bJF.style.width = bfb.clientWidth + 'px';
                if (!!azF)
                    azF.style.width = (bfb.clientWidth - 2) + 'px';
            } else {
                bJF.style.width = (fR.clientWidth - 17) + 'px';
                if (!!azF)
                    azF.style.width = (fR.clientWidth - 19) + 'px';
            }
            bIV.style.height = (fR.clientHeight - 25) + 'px';
            bfp.style.height = '99%';
            bfp.style.height = '100%';
        };
        var agp = function() {
            Yn();
        };
        V.Q(window, 'resize', agp);
        Yn();
        window.setTimeout(Yn.K(null), 200);
        window.setTimeout(Yn.K(null), 1000);
        window.setTimeout(Yn.K(null), 3000);
        window.setTimeout(Yn.K(null), 6000);
        window.setTimeout(Yn.K(null), 10000);
    }
    if (nb.c.bvS && bW != '-3') {
        if (B.fa)
            nb.l.avR.bm({nomove: true,parent: document.sbody.parentNode,nocenter: true});
        else
            nb.l.avR.bm({nomove: true,nocenter: true});
    }
    var aIc = E.aq('multiUserAccountsArea');
    if (!!aIc) {
        var cPO = function() {
            if (!B.fa)
                return;
            var aIc = E.aq('multiUserAccountsArea');
            if (!aIc)
                return;
            var A = E.bz(aIc, 'mulaccounttag') || [];
            for (var i = 0; i < A.length; i++) {
                E.cR(A[i], 'js-menuhover');
            }
        };
        cPO();
    }
    var Ly = E.aq('bcMultiAccountArea');
    if (!!Ly) {
        var cPY = function() {
            var Ly = E.aq('bcMultiAccountArea');
            if (!Ly)
                return;
            var cZM = E.aq('bcFirstMultiUser');
            var aUt = E.aq('bcShowMultiBlogs');
            var aUW = E.aq('bcMultiBlogList');
            var A = E.bz(aUW, 'mulacitm') || [];
            if (A.length < 2) {
                aUt.style.display = 'none';
            } else {
                aUt.style.display = 'block';
            }
            V.Q(aUt, 'click', cUC.K(this));
            V.Q(document, 'click', aSM.K(this));
        };
        var cUC = function(L) {
            V.bU(L);
            var Ly = E.aq('bcMultiAccountArea');
            var aUW = E.aq('bcMultiBlogList');
            if (B.fa) {
                aUW.style.width = Ly.clientWidth;
            }
            if (E.aV(Ly, 'showaccountlist')) {
                E.bL(Ly, 'showaccountlist');
            } else {
                E.bl(Ly, 'showaccountlist');
            }
        };
        var aSM = function() {
            var Ly = E.aq('bcMultiAccountArea');
            E.bL(Ly, 'showaccountlist');
        };
        cPY();
    }
    P('J').loadScript = J.yQ;
    P('J').postDataByDWR = J.bi;
    if (!!nb.w.bHR)
        new nb.w.bHR();
    if (!!nb.w.dle)
        new nb.w.dle();
})();
