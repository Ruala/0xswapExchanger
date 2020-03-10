import 'select2/dist/js/select2.min';
import 'select2/dist/css/select2.min.css';

$(()=>{
    //simple select
    (() => {
        const $select = $('select');

        $select.select2({
            minimumResultsForSearch: Infinity,
            templateSelection: formatState,
            templateResult: formatState,
        });

        function formatState (state) {
            if (!state.id) {
                return state.text;
            }
            const baseUrl = "/images/logo";
            const $state = $(
                '<span class="exchange__name"><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.svg" class="exchange__logo" /> ' + state.text + '</span>'
            );
            return $state;
        }
    })();
});
