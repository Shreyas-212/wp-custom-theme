import $ from 'jquery';
class Search {
    // 1. Describe and create/initiate object
    constructor() {
        this.openButton = $(".js-search-trigger");
        this.closeButton = $(".fa-window-close");
        this.searchOverlay = $(".search-overlay");
        this.events();
    }

    // 2. events
    events() {
        this.openButton.on("click", this.openOverlay.bind(this));
        this.closeButton.on("click", this.closeOverlay.bind(this));
    }
    // 3. methods
    openOverlay() {
        this.searchOverlay.addClass("search-overlay--active");
        $("body").addClass("body-no-scroll");
    }
    closeOverlay() {
        this.searchOverlay.removeClass("search-overlay--active");
        $("body").removeClass("body-no-scroll");
    }
}

export default Search
