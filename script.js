const options = {
    key: "h8r1YFgpheORAVXR8tO5YSy02mlcBubx",
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
