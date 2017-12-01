$.ajax({
    url: "",
    dataType: "text",
    success: function(data, status) {
        eval(data);
    },
    error: function(data, status) {
        alert("No se pudo cargar el script\nError: " + status);
    }
});
