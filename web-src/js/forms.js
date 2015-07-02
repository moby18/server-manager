$('.form-collection').each(function(i, formCollection) {
    var $formCollection = $(formCollection),
        $elements = $formCollection.find('.form-collection-elements'),
        idx = $elements.find('.form-collection-element').length;
    $formCollection.find('.form-collection-add').on('click', function() {
        var prototype = $(this).data('prototype');
        prototype = prototype.replace(/__name__/g, idx++);
        $elements.append($(prototype));
    });
    $elements.on('click', '.form-collection-delete', function() {
        $(this).parents('.form-collection-element').remove();
    });
});
$('input[typeahead]').each(function(i, input) {
    $(input).typeahead(null, {
        display: 'value',
        source: new Bloodhound({
            datumTokenizer: Bloodhound.tokenizers.whitespace,
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            prefetch: $(input).attr('typeahead')
        })
    })
});
