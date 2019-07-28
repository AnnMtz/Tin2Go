const loadContent = (file) => {
    if ( file == 'views/inicio.html') {
        console.log("caso uno");
        $(".container-wrapper").load(file, function() {
            $('#submit-button').click(() => {
                console.log('done')
            })
        })
        
    }
}