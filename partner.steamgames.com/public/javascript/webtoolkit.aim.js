/**

Valve notes for this file

This public code is used to abstract away the details of performing
file uploading in an AJAX-y way. It creates a randomly-named iframe in
a hidden div, sticks it into the document, and plumbs in all the
completion code. It jumps through these hoops to ensure that more than
one upload can be in flight at once (otherwise the target divs might
collide).


**/







/**
 *
 * AJAX IFRAME METHOD (AIM)
 * http://www.webtoolkit.info/
 *
 **/

AIM = {

    frame: function(c) {

        var n = 'f' + Math.floor(Math.random() * 99999);
        var d = document.createElement('DIV');
        d.innerHTML = '<iframe style="display:none" src="about:blank" id="' + n + '" name="' + n + '" onload="AIM.loaded(\'' + n + '\')"></iframe>';
        document.body.appendChild(d);

        var i = document.getElementById(n);
        if (c && typeof(c.onComplete) == 'function') {
            i.onComplete = c.onComplete;
        }

        return n;
    },

    form: function(f, name) {
        f.setAttribute('target', name);
    },

    submit: function(f, c) {
        AIM.form(f, AIM.frame(c));
        if (c && typeof(c.onStart) == 'function') {
            return c.onStart();
        } else {
            return true;
        }
    },

    loaded: function(id) {
        var i = document.getElementById(id);
        if (i.contentDocument) {
            var d = i.contentDocument;
        } else if (i.contentWindow) {
            var d = i.contentWindow.document;
        } else {
            var d = window.frames[id].document;
        }
        if (d.location.href == "about:blank") {
            return;
        }

        if (typeof(i.onComplete) == 'function') {
            i.onComplete(d.body.innerHTML);
        }
    }

}