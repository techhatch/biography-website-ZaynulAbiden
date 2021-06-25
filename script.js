var i = 0,
    j = 0;
k = 0;
l = 0;
m = 0;
n = 0;
o = 0;
p = 0;
x = 0;
y = 0;
z = 0;

function progress() {
    css();
    html();
    php();
    cpp();
    csharp();
    python();
    java();
    javascript();
    bootstrap();
    wordpress();
    sql();


    function html() {
        if (i == 0) {
            i = 1;
            var html = document.getElementById("html");

            var width = 1;
            var id = setInterval(frame, 20);

            function frame() {
                if (width >= 90) {
                    clearInterval(id);
                    i = 0;
                } else {
                    width++;
                    html.style.width = width + "%";
                }
            }
        }
    }

    function css() {
        if (j == 0) {
            j = 1;
            var css = document.getElementById("css");
            var width = 1;
            var id = setInterval(frame, 20);

            function frame() {
                if (width >= 81) {
                    clearInterval(id);
                    j = 0;
                } else {
                    width++;
                    css.style.width = width + "%";
                }
            }
        }
    }

    function php() {
        if (k == 0) {
            k = 1;
            var php = document.getElementById("php");
            var width = 1;
            var id = setInterval(frame, 20);

            function frame() {
                if (width >= 75) {
                    clearInterval(id);
                    k = 0;
                } else {
                    width++;
                    php.style.width = width + "%";
                }
            }
        }
    }

    function cpp() {
        if (l == 0) {
            l = 1;
            var cpp = document.getElementById("cpp");
            var width = 1;
            var id = setInterval(frame, 20);

            function frame() {
                if (width >= 93) {
                    clearInterval(id);
                    l = 0;
                } else {
                    width++;
                    cpp.style.width = width + "%";
                }
            }
        }
    }

    function csharp() {
        if (m == 0) {
            m = 1;
            var csharp = document.getElementById("csharp");
            var width = 1;
            var id = setInterval(frame, 20);

            function frame() {
                if (width >= 82) {
                    clearInterval(id);
                    m = 0;
                } else {
                    width++;
                    csharp.style.width = width + "%";
                }
            }
        }
    }

    function python() {
        if (n == 0) {
            n = 1;
            var python = document.getElementById("python");
            var width = 1;
            var id = setInterval(frame, 20);

            function frame() {
                if (width >= 89) {
                    clearInterval(id);
                    n = 0;
                } else {
                    width++;
                    python.style.width = width + "%";
                }
            }
        }
    }

    function java() {
        if (o == 0) {
            o = 1;
            var java = document.getElementById("java");
            var width = 1;
            var id = setInterval(frame, 20);

            function frame() {
                if (width >= 70) {
                    clearInterval(id);
                    o = 0;
                } else {
                    width++;
                    java.style.width = width + "%";
                }
            }
        }
    }

    function javascript() {
        if (p == 0) {
            p = 1;
            var javascript = document.getElementById("js");
            var width = 1;
            var id = setInterval(frame, 20);

            function frame() {
                if (width >= 65) {
                    clearInterval(id);
                    p = 0;
                } else {
                    width++;
                    javascript.style.width = width + "%";
                }
            }
        }
    }

    function bootstrap() {
        if (x == 0) {
            x = 1;
            var bootstrap = document.getElementById("bootstrap");
            var width = 1;
            var id = setInterval(frame, 20);

            function frame() {
                if (width >= 60) {
                    clearInterval(id);
                    x = 0;
                } else {
                    width++;
                    bootstrap.style.width = width + "%";
                }
            }
        }
    }

    function wordpress() {
        if (y == 0) {
            y = 1;
            var wordpress = document.getElementById("wp");
            var width = 1;
            var id = setInterval(frame, 20);

            function frame() {
                if (width >= 96) {
                    clearInterval(id);
                    y = 0;
                } else {
                    width++;
                    wordpress.style.width = width + "%";
                }
            }
        }
    }

    function sql() {
        if (z == 0) {
            z = 1;
            var sql = document.getElementById("sql");
            var width = 1;
            var id = setInterval(frame, 20);

            function frame() {
                if (width >= 86) {
                    clearInterval(id);
                    z = 0;
                } else {
                    width++;
                    sql.style.width = width + "%";
                }
            }
        }
    }
}