
 module.exports.getDate = function() {
    let today = new Date();
    let currentday = today.getDay();
    let option = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    return today.toLocaleDateString("en-US", option);

}

module.exports.getDay = function() {
    let today = new Date();
    let currentday = today.getDay();
    let option = {
        weekday: "long",
    }

    return today.toLocaleDateString("en-US", option);
  
}
