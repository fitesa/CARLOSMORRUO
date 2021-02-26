var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_ORTOFOTO_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "ORTOFOTO",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ORTOFOTO_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-701533.479903, 4413833.137825, -701327.534125, 4414069.278290]
                            })
                        });
var lyr_NDVIVECINO_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI VECINO",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVIVECINO_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-701443.035802, 4414007.782433, -701347.301040, 4414062.015222]
                            })
                        });
var lyr_GNDVICARLOS_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "GNDVI CARLOS",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/GNDVICARLOS_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-701494.242768, 4413877.068640, -701396.281616, 4414028.641165]
                            })
                        });
var lyr_NDVICARLOS_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI CARLOS",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVICARLOS_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-701494.242768, 4413877.068640, -701396.281616, 4414028.641165]
                            })
                        });

lyr_GoogleHybrid_0.setVisible(true);lyr_ORTOFOTO_1.setVisible(true);lyr_NDVIVECINO_2.setVisible(true);lyr_GNDVICARLOS_3.setVisible(true);lyr_NDVICARLOS_4.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_ORTOFOTO_1,lyr_NDVIVECINO_2,lyr_GNDVICARLOS_3,lyr_NDVICARLOS_4];
