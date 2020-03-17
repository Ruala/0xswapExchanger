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

            if (!$item) return;

            $item.addClass('exchange__item_focused');
        }

        function removeFocus(e) {
            const $item = $(e.target).closest('.exchange__item');

            if (!$item) return;

            $item.removeClass('exchange__item_focused');
        }
    })();

    //enter max balance
    (() => {
        const $parent = $('.exchange');

        $parent.on('click', enterMax);

        function enterMax(e) {
            const $balance = $(e.target).closest('.exchange__balance');

            if (!$balance) return;

            const $item = $balance.closest('.exchange__item');
            const $input = $item.find('.exchange__input');
            const sum = parseFloat( $balance.find('.exchange__sum').text() );

            $input.val(sum);
        }
    })();

    //numberAnimate
    (() => {
        console.dir($.fn.numberAnimate);
        const $target = $('.number-animate');
        $target.numberAnimate();

        $('.exchange__input').keypress(function(e){
            if(e.which === 13){
                e.preventDefault();
                $target.numberAnimate('set', $(this).val());
            }
        });
    })();
});
