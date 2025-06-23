ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KERENTANAN_BANJIR_1 = new ol.format.GeoJSON();
var features_KERENTANAN_BANJIR_1 = format_KERENTANAN_BANJIR_1.readFeatures(json_KERENTANAN_BANJIR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KERENTANAN_BANJIR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KERENTANAN_BANJIR_1.addFeatures(features_KERENTANAN_BANJIR_1);
var lyr_KERENTANAN_BANJIR_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KERENTANAN_BANJIR_1, 
                style: style_KERENTANAN_BANJIR_1,
                popuplayertitle: 'KERENTANAN_BANJIR',
                interactive: true,
    title: 'KERENTANAN_BANJIR<br />\
    <img src="styles/legend/KERENTANAN_BANJIR_1_0.png" /> Rendah<br />\
    <img src="styles/legend/KERENTANAN_BANJIR_1_1.png" /> Sedang<br />\
    <img src="styles/legend/KERENTANAN_BANJIR_1_2.png" /> Tinggi<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_KERENTANAN_BANJIR_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_KERENTANAN_BANJIR_1];
lyr_KERENTANAN_BANJIR_1.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Keterangan': 'Keterangan', });
lyr_KERENTANAN_BANJIR_1.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_KERENTANAN_BANJIR_1.set('fieldLabels', {'Id': 'hidden field', 'gridcode': 'hidden field', 'Keterangan': 'inline label - visible with data', });
lyr_KERENTANAN_BANJIR_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});