
// Initalize the menu with correct options
(function(root, $) {

    $(document).ready(function() {

        // Set up correct element to use

        if(wp_menufication.customMenuElement) {
            var element = $(wp_menufication.customMenuElement);
        }
        else {
            $(wp_menufication.element).parent().addClass( wp_menufication.element.substr(1) );
            $(wp_menufication.element).children().first().unwrap();

            var element = $("." + wp_menufication.element.substr(1) );

            if(element.length > 1) {
                element.last().remove();
            }
        }

        // Hide first h3 and "skip to content" for default wp page menu
        if(wp_menufication.is_page_menu) {
            element.children('h3').first().hide();
            element.children('a').first().hide();
        }

        element.menufication({

            // Basic settings
            toggleElement:          wp_menufication.toggleElement || null,
            hideDefaultMenu:        wp_menufication.hideDefaultMenu == "on" ? true : false,
            childMenuSupport:       wp_menufication.childMenuSupport == "on" ? true : false,
            childMenuSelector:      wp_menufication.childMenuSelector || '.sub-menu',
            activeClassSelector:    wp_menufication.activeClassSelector || '.current-menu-item',
            onlyMobile:             wp_menufication.onlyMobile == 'on' ? true : false,
            menuText:               wp_menufication.menuText,
            addHomeLink:            wp_menufication.addHomeLink == "on" ? true : false,
            addHomeText:            wp_menufication.addHomeText || null,

            // Advanced settings
            triggerWidth:           wp_menufication.triggerWidth || null,
            scrollSpeed:            wp_menufication.scrollSpeed || 0.6,
            supportAndroidAbove:    wp_menufication.supportAndroidAbove || 3.5,
            customFixedHeader:      wp_menufication.customFixedHeader || null,
            enableSwipe:            wp_menufication.enableSwipe != 'on' ? false : true,
            allowedTags:            wp_menufication.allowedTags
        });

    });

})(window, jQuery);
