$(function() {
    function updateOutput(e) {
      var list   = e.length ? e : $(e.target);
      var output = list.data('output');

      output.val(window.JSON ? window.JSON.stringify(list.nestable('serialize')) :
      'JSON browser support required for this demo.');
    };

    $('#nestable').nestable({ group: 1 }).on('change', updateOutput);
    $('#nestable2').nestable({ group: 1 }).on('change', updateOutput);

    // output initial serialised data
    updateOutput($('#nestable').data('output', $('#nestable-output')));
    updateOutput($('#nestable2').data('output', $('#nestable2-output')));

    $('#nestable-menu').on('click', function(e) {
      var target = $(e.target);
      var action = target.data('action');

      if (action === 'expand-all') {
        $('.dd').nestable('expandAll');
      }
      if (action === 'collapse-all') {
        $('.dd').nestable('collapseAll');
      }
    });

    $('#nestable3').nestable();
});