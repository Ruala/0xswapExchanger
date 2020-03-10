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
});