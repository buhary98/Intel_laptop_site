(function() {

    /*====================================
      Animate the sections
    ======================================*/

    var o = document.querySelectorAll(".animate");
        o.length > 0 &&
            (function (e) {
                if ("IntersectionObserver" in window)
                    for (
                        var t = new IntersectionObserver(
                                function (e, t) {
                                    for (var o = 0; o < e.length; o++) e[o].isIntersecting ? (e[o].target.classList.add("in-view"), t.unobserve(e[o].target)) : e[o].target.classList.remove("in-view");
                                },
                                { root: null, rootMargin: "0px", threshold: 0 }
                            ),
                            o = 0;
                        o < e.length;
                        o++
                    ) {
                        var s = e[o];
                        s.classList.add("on"), t.observe(s);
                    }
            })(o);
    
})(); // custom js ends		



