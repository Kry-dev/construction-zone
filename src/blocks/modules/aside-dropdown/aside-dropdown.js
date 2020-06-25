import $ from "jquery";

// aside dropdown

function asideDropdown() {
    
    let dropdown = $(".aside-dropdown");
    
    if (!dropdown.length) return;
    
    let trigger = $(".dropdown-trigger");
    let close = $(".aside-dropdown__close");
    
    trigger.on("click", function () {
        dropdown.addClass("aside-dropdown--active");
    });
    
    close.on("click", function () {
        dropdown.removeClass("aside-dropdown--active");
    });
    
    $(document).on("click", function (event) {
        if ($(event.target).closest(".dropdown-trigger, .aside-dropdown__inner").length) return;
        dropdown.removeClass("aside-dropdown--active");
        event.stopPropagation();
    });
    
}

asideDropdown();
