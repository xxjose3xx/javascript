$.ajax({
    url: "https://raw.githubusercontent.com/xxjose3xx/javascript/master/scripts/farmAssist.user.js",
    dataType: "text",
    success: function(data, status) {
        eval(data);
    },
    error: function(data, status) {
        alert("No se pudo cargar el script\nError: " + status);
    }
});
