
function renderSpace(req, res) {
    var data = {
        title: 'FlexBoard - Space', 
        header: 'Main Header',
        scriptPath: 'dist/space/bundle.js',
        stylePath: 'dist/space/space.css'
    }

    res.render('space', data);
}


//Public API
module.exports = {
    renderSpace: renderSpace,
}