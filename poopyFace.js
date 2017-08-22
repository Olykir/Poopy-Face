/*
1.0.0 Version
function poopyFace(name) {
    if(!name) return "You must include a name"
        return name + " is a poopy face!"
}
*/

/*
1.1.0 Version
exports.poopyFace = function(name) {
    return name + " is a poopy face!"
}
*/

function poopyFace(name, content) {

    if(!name) return "You must include a name"
        if(!content) return name + "is a poopy face!"
        return name + content
}

module.exports = poopyFace


