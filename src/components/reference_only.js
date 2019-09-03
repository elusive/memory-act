!function(t) {
    function e(r) {
        if (i[r])
            return i[r].exports;
        var s = i[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(s.exports, s, s.exports, e),
        s.l = !0,
        s.exports
    }
    var i = {};
    return e.m = t,
    e.c = i,
    e.i = function(t) {
        return t
    }
    ,
    e.d = function(t, i, r) {
        e.o(t, i) || Object.defineProperty(t, i, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }
    ,
    e.n = function(t) {
        var i = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return e.d(i, "a", i),
        i
    }
    ,
    e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    e.p = "/",
    e(e.s = 13)
}([function(t, e, i) {
    "use strict";
    t.exports = [{
        id: 0
    }, {
        id: 1
    }, {
        id: 2
    }, {
        id: 3
    }, {
        id: 4
    }, {
        id: 5
    }, {
        id: 6
    }, {
        id: 7
    }, {
        id: 8
    }, {
        id: 9
    }, {
        id: 10
    }, {
        id: 11
    }]
}
, function(t, e, i) {
    "use strict";
    function r(t, e) {
        for (; (t = t.parentElement) && !t.classList.contains(e); )
            ;
        return t
    }
    var s = i(11)
      , n = i(12)
      , o = i(10)
      , a = []
      , c = function() {
        this.$table = document.querySelector(".memory-game-table"),
        this.table = [],
        this.rows = 6,
        this.cols = 4,
        this.guess = null,
        this.paused = !1
    };
    c.prototype.init = function(t) {
        a = t,
        this.addListeners(),
        o.pageview("indexPage")
    }
    ,
    c.prototype.start = function(t) {
        this.cards = this.shuffleCardsArray(a.concat(a)),
        this.table = this.buildTable(),
        this.renderTable(),
        n.start(),
        o.pageview("gamePage"),
        "Restart" === t && o.sendEvent("restarted")
    }
    ,
    c.prototype.buildTable = function() {
        for (var t = [], e = 0; e < this.rows; e++) {
            t[e] = [];
            for (var i = 0; i < this.cols; i++)
                t[e][i] = s(this.cards[e * this.cols + i], e, i)
        }
        return t
    }
    ,
    c.prototype.addListeners = function() {
        this.$table.addEventListener("click", this.cardClicked.bind(this))
    }
    ,
    c.prototype.cardClicked = function(t) {
        var e = this
          , i = r(t.target, "memory-game-cell");
        if (i) {
            var s = i.parentElement
              , n = this.table[s.rowIndex][i.cellIndex];
            this.paused || n.isMatch() || n.isPick() || (n.setPick(),
            this.guess ? n.is(this.guess) ? (this.guess.setMatch(),
            n.setMatch(),
            this.guess = null) : (this.paused = !0,
            setTimeout(function() {
                e.guess.reset(),
                n.reset(),
                e.guess = null,
                e.paused = !1
            }, 600)) : this.guess = n,
            this.win() && this.stop())
        }
    }
    ,
    c.prototype.win = function() {
        var t = this;
        24 === document.querySelectorAll(".matched").length && (n.pause(),
        setTimeout(function() {
            t.showWinModal()
        }, 600))
    }
    ,
    c.prototype.showWinModal = function() {
        o.pageview("completePage");
        var t = document.querySelector(".modalWrapper")
          , e = document.createElement("p");
        t.querySelector(".modal__header").innerHTML = "Cogragualtions!!",
        e.innerHTML = "You have completed in " + n.getMin() + " : " + n.getSec(),
        t.querySelector(".modal__body").innerHTML = "",
        t.querySelector(".modal__body").appendChild(e),
        t.querySelector(".startGame").innerHTML = "Restart",
        t.classList.remove("hide")
    }
    ,
    c.prototype.renderTable = function() {
        for (var t = "", e = 0; e < this.rows; e++) {
            t += "<tr>";
            for (var i = 0; i < this.cols; i++)
                t += '<td class="memory-game-cell">',
                t += this.table[e][i].render(),
                t += "</td>";
            t += "</tr>"
        }
        this.$table.innerHTML = t
    }
    ,
    c.prototype.shuffleCardsArray = function(t) {
        for (var e = t.length; e > 0; ) {
            var i = Math.floor(Math.random() * e);
            e--;
            var r = t[e];
            t[e] = t[i],
            t[i] = r
        }
        return t
    }
    ,
    t.exports = new c
}
, function(t, e) {}
, function(t, e, i) {
    t.exports = i.p + "images/144.png"
}
, function(t, e, i) {
    t.exports = i.p + "images/168.png"
}
, function(t, e, i) {
    t.exports = i.p + "images/192.png"
}
, function(t, e, i) {
    t.exports = i.p + "images/48.png"
}
, function(t, e, i) {
    t.exports = i.p + "images/72.png"
}
, function(t, e, i) {
    t.exports = i.p + "images/96.png"
}
, function(t, e, i) {
    t.exports = i.p + "manifest.json"
}
, function(t, e, i) {
    "use strict";
    t.exports = {
        pageview: function(t) {
            return ga("send", "pageview", t)
        },
        sendEvent: function(t) {
            ga("send", "event", t)
        }
    }
}
, function(t, e, i) {
    "use strict";
    var r = function(t, e, i) {
        this.match = !1,
        this.pick = !1,
        this.value = t,
        this.row = e,
        this.col = i
    };
    r.prototype.isMatch = function() {
        return this.match
    }
    ,
    r.prototype.setMatch = function() {
        this.match = !0,
        this.pick = !1,
        this.update()
    }
    ,
    r.prototype.isPick = function() {
        return this.pick
    }
    ,
    r.prototype.setPick = function() {
        this.pick = !0,
        this.update()
    }
    ,
    r.prototype.reset = function() {
        this.pick = !1,
        this.match = !1,
        this.update()
    }
    ,
    r.prototype.is = function(t) {
        return this.value.id === t.getValue().id
    }
    ,
    r.prototype.getValue = function() {
        return this.value
    }
    ,
    r.prototype.render = function() {
        var t = '<div class="card" data-row=' + this.row + " data-col=" + this.col + " data-id=" + this.value.id + ">";
        return t += '<div class="inside">',
        t += '<div class="front">',
        t += "<div>" + this.value.id + "</div>",
        t += "</div>",
        t += '<div class="back">',
        t += "<div>M</div>",
        t += "</div>",
        t += "</div>",
        t += "</div>"
    }
    ,
    r.prototype.update = function() {
        var t = document.querySelector('div[data-row="' + this.row + '"][data-col="' + this.col + '"]')
          , e = t.querySelector(".inside");
        this.pick ? e.classList.add("picked") : e.classList.remove("picked"),
        this.match ? e.classList.add("matched") : e.classList.remove("mached")
    }
    ,
    t.exports = function(t, e, i) {
        return new r(t,e,i)
    }
}
, function(t, e, i) {
    "use strict";
    var r = function() {
        this.$time = document.querySelector(".time"),
        this.min = 0,
        this.sec = 0,
        this.interval = null
    };
    r.prototype.start = function() {
        var t = this;
        (this.min > 0 || this.sec > 0) && this.stop(),
        this.interval = setInterval(function() {
            t.sec++,
            60 === t.sec && (t.min++,
            t.sec = 0),
            t.render()
        }, 1e3)
    }
    ,
    r.prototype.stop = function() {
        this.pause(),
        this.min = 0,
        this.sec = 0,
        this.render()
    }
    ,
    r.prototype.pause = function() {
        clearInterval(this.interval),
        this.interval = null
    }
    ,
    r.prototype.getMin = function() {
        return this.min < 10 ? "0" + this.min : this.min
    }
    ,
    r.prototype.getSec = function() {
        return this.sec < 10 ? "0" + this.sec : this.sec
    }
    ,
    r.prototype.getTime = function() {
        return this.getMin() + " : " + this.getSec()
    }
    ,
    r.prototype.render = function() {
        this.$time.innerHTML = this.getMin() + " : " + this.getSec()
    }
    ,
    t.exports = new r
}
, function(t, e, i) {
    "use strict";
    i(2),
    i(9),
    i(5),
    i(4),
    i(3),
    i(8),
    i(7),
    i(6);
    var r = i(1)
      , s = i(0);
    r.init(s);
    var n = document.querySelector(".startGame")
      , o = document.querySelector(".modalWrapper");
    n.addEventListener("click", function() {
        o.classList.add("hide"),
        r.start(this.innerText)
    }),
    "serviceWorker"in navigator && (navigator.serviceWorker.register("./sw.js").then(function(t) {
        console.log("Service Worker Registered")
    }),
    navigator.serviceWorker.ready.then(function(t) {
        console.log("Service Worker Ready")
    }))
}
]);
