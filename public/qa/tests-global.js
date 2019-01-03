suite('Global Tests', function(){
    test('page has valid title', function(){
        assert(document.title && document.title.match(/\S/) && document.title.toUpperCase() !== 'TODO');
    });
});

suite('"About" Page Tests', function(){
    test('page should contain link to contact page', function(){
        assert($('a[href="http://localhost:3000/contact/"]').length);
    });
});