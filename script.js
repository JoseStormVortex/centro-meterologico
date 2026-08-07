const options = {
    key: "jNitNusP7qb0VToXI8tJ1Z7ZJNUJf9JS",
    lat: 20.6597,
    lon: -103.3496,
    zoom: 7,
    container: "windy"
};

windyInit(options, function(windyAPI){

    const { store } = windyAPI;

    window.cambiarCapa = function(capa){
        store.set("overlay", capa);
    };

});
