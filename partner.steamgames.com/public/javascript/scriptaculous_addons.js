/* Version of autocompleter that scrolls to entire list rather than individual elements
     (keyboard navigation is very jumpy in original implementation) */
Autocompleter.Local.Scroll = Class.create(Autocompleter.Local, {
    initialize: function(element, update, array, options) {
        this.baseInitialize(element, update, options);
        this.options.array = array;
    },

    markPrevious: function() {
        if (this.index > 0) this.index--
            else this.index = this.entryCount - 1;
        // orig: this.getEntry(this.index).scrollIntoView(true);
        this.getEntry(this.index).parentNode.scrollIntoView(false);
    },

    markNext: function() {
        if (this.index < this.entryCount - 1) this.index++
            else this.index = 0;
        // orig: this.getEntry(this.index).scrollIntoView(false);
        this.getEntry(this.index).parentNode.scrollIntoView(false);
    }
});