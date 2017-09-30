$(function() {
    var priceCheckboxes = $('form').find('[type=checkbox][data-price]');
    var clearCheckbox = $('form').find('[type=checkbox]').last();
    var selectAllCheckbox = $('form').find('[type=checkbox]').first();
    var priceSpan = $('#price');
    var price = 0;

    priceCheckboxes.on('change', function() {
        var tempPrice = 0;

        priceCheckboxes.each(function() {
            if ($(this).prop('checked')) {
                tempPrice += parseFloat($(this).data('price'));
            }
        });

        price = tempPrice;
        priceSpan.text(price.toFixed(2) + ' zł');
    });

    selectAllCheckbox.on('change', function() {
        if ($(this).prop('checked')) {
            priceCheckboxes.each(function(index, element) {
                $(element).prop('checked', true).change();
            });
            clearCheckbox.prop('checked', false);
        }
    });
    
    clearCheckbox.on('change', function() {
        if ($(this).prop('checked')) {
            priceCheckboxes.each(function(index, element) {
                $(element).prop('checked', false).change();
            });
            selectAllCheckbox.prop('checked', false);
        }
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        console.log(price);
        $('.page-info').text('Do zapłaty: ' + price.toFixed(2) + 'zł.');
    });
});