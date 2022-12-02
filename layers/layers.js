var wms_layers = [];

var lyr_221022_NDVI_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "221022_NDVI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/221022_NDVI_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-9895954.807860, 5447796.802043, -9835676.582829, 5504359.947832]
                            })
                        });
var lyr_221107NDVI_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "221107 NDVI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/221107NDVI_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-9895954.807860, 5447796.802043, -9835676.582829, 5504359.947832]
                            })
                        });
var lyr_221123NDVI_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "221123 NDVI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/221123NDVI_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-9895954.807860, 5447796.802043, -9835676.582829, 5504359.947832]
                            })
                        });
var format_NDVITrends221123_3 = new ol.format.GeoJSON();
var features_NDVITrends221123_3 = format_NDVITrends221123_3.readFeatures(json_NDVITrends221123_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NDVITrends221123_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NDVITrends221123_3.addFeatures(features_NDVITrends221123_3);
var lyr_NDVITrends221123_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NDVITrends221123_3, 
                style: style_NDVITrends221123_3,
                interactive: true,
    title: 'NDVI Trends 221123<br />\
    <img src="styles/legend/NDVITrends221123_3_0.png" /> -0.0767 - 0.0434<br />\
    <img src="styles/legend/NDVITrends221123_3_1.png" /> 0.0434 - 0.055<br />\
    <img src="styles/legend/NDVITrends221123_3_2.png" /> 0.055 - 0.0652<br />\
    <img src="styles/legend/NDVITrends221123_3_3.png" /> 0.0652 - 0.0754<br />\
    <img src="styles/legend/NDVITrends221123_3_4.png" /> 0.0754 - 0.0847<br />\
    <img src="styles/legend/NDVITrends221123_3_5.png" /> 0.0847 - 0.0943<br />\
    <img src="styles/legend/NDVITrends221123_3_6.png" /> 0.0943 - 0.1043<br />\
    <img src="styles/legend/NDVITrends221123_3_7.png" /> 0.1043 - 0.117<br />\
    <img src="styles/legend/NDVITrends221123_3_8.png" /> 0.117 - 0.1423<br />\
    <img src="styles/legend/NDVITrends221123_3_9.png" /> 0.1423 - 0.3395<br />'
        });

lyr_221022_NDVI_0.setVisible(false);lyr_221107NDVI_1.setVisible(false);lyr_221123NDVI_2.setVisible(false);lyr_NDVITrends221123_3.setVisible(true);
var layersList = [lyr_221022_NDVI_0,lyr_221107NDVI_1,lyr_221123NDVI_2,lyr_NDVITrends221123_3];
lyr_NDVITrends221123_3.set('fieldAliases', {'CVTTXCD': 'CVTTXCD', 'CVTTXDSCRP': 'CVTTXDSCRP', 'PARCELID': 'PARCELID', 'STATEDAREA': 'STATEDAREA', 'OWNERNME1': 'OWNERNME1', 'OWNERNME2': 'OWNERNME2', 'OWNERNAMES': 'OWNERNAMES', 'PSTLADDRES': 'PSTLADDRES', 'PSTLADDR_1': 'PSTLADDR_1', 'PSTLCITY': 'PSTLCITY', 'PSTLSTATE': 'PSTLSTATE', 'PSTLZIP5': 'PSTLZIP5', 'PSTLZIP4': 'PSTLZIP4', 'FULLCSZ': 'FULLCSZ', 'SCHLTXCD': 'SCHLTXCD', 'SCHLDSCRP': 'SCHLDSCRP', 'LNDVALUE': 'LNDVALUE', 'CNTASSDVAL': 'CNTASSDVAL', 'CNTTXBLVAL': 'CNTTXBLVAL', 'ASSMTURL': 'ASSMTURL', 'SRCREF': 'SRCREF', 'PRPRTYDSCR': 'PRPRTYDSCR', 'GISACRE': 'GISACRE', 'SITEADDRES': 'SITEADDRES', 'SITECSZ': 'SITECSZ', 'CVTURL': 'CVTURL', 'TAX_PAR_ID': 'TAX_PAR_ID', 'LASTUPDATE': 'LASTUPDATE', 'HOOKDATE': 'HOOKDATE', '221022mean': '221022mean', '221107mean': '221107mean', '221123mean': '221123mean', });
lyr_NDVITrends221123_3.set('fieldImages', {'CVTTXCD': 'Hidden', 'CVTTXDSCRP': 'Hidden', 'PARCELID': 'TextEdit', 'STATEDAREA': 'Hidden', 'OWNERNME1': 'Hidden', 'OWNERNME2': 'Hidden', 'OWNERNAMES': 'Hidden', 'PSTLADDRES': 'Hidden', 'PSTLADDR_1': 'Hidden', 'PSTLCITY': 'Hidden', 'PSTLSTATE': 'Hidden', 'PSTLZIP5': 'Hidden', 'PSTLZIP4': 'Hidden', 'FULLCSZ': 'Hidden', 'SCHLTXCD': 'Hidden', 'SCHLDSCRP': 'Hidden', 'LNDVALUE': 'Hidden', 'CNTASSDVAL': 'Hidden', 'CNTTXBLVAL': 'Hidden', 'ASSMTURL': 'Hidden', 'SRCREF': 'Hidden', 'PRPRTYDSCR': 'Hidden', 'GISACRE': 'TextEdit', 'SITEADDRES': 'TextEdit', 'SITECSZ': 'TextEdit', 'CVTURL': 'Hidden', 'TAX_PAR_ID': 'Hidden', 'LASTUPDATE': 'Hidden', 'HOOKDATE': 'Hidden', '221022mean': 'TextEdit', '221107mean': 'TextEdit', '221123mean': 'TextEdit', });
lyr_NDVITrends221123_3.set('fieldLabels', {'PARCELID': 'inline label', 'GISACRE': 'inline label', 'SITEADDRES': 'inline label', 'SITECSZ': 'inline label', '221022mean': 'inline label', '221107mean': 'inline label', '221123mean': 'inline label', });
lyr_NDVITrends221123_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});