function activateCurrentPage(menuItems){
    var current = location.pathname;
    if (current !== "/") {
    menuItems.each(function(){
        var $this = $(this);
        if($this.attr('href') === current){
            $this.addClass('active');
            $this.attr('aria-current', 'page');
        }
    });
    };
}

activateCurrentPage( $('#nav li a') ); 
