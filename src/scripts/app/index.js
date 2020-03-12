$(()=>{
    //theme switcher
    (() => {
        const $btn = $('#theme-switcher');

        $btn.on('click', toggleTheme);

        function toggleTheme() {
            const $target = $(this);
            const $body = $('body');
            let theme = $target.attr('data-theme');

            switch (theme) {
                case 'day':
                    $body.addClass('uk-light uk-background-secondary');
                    $target.attr('data-theme', 'night');
                    break;
                case 'night':
                    $body.removeClass('uk-light uk-background-secondary');
                    $target.attr('data-theme', 'day');
                    break;
            }
        }
    })();

    //focus highlight
    (() => {
        const $parent = $('.exchange');

        $parent.on('focusin', setFocus);
        $parent.on('focusout', removeFocus);

        function setFocus(e) {
            const $item = $(e.target).closest('.exchange__item');

            $item.addClass('exchange__item_focused');
        }

        function removeFocus(e) {
            const $item = $(e.target).closest('.exchange__item');

            $item.removeClass('exchange__item_focused');
        }
    })();
});