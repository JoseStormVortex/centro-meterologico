const options = {
    key: "iHzdNZ4i3sv2rS3uc46DR7p6ShM6NG8u",
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