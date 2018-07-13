/**
 * Created by Administrator on 2017/3/27 0027.
 */
/*
    * 针对地图全局配置
    * */

var arcgisCssLink = "http://cityworks.cn/arcgis_js_v320_api/arcgis_js_api/library/3.20/3.20/esri/css/esri.css";


function loadStyle(url){
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(link);
}

function loadScript(){

    document.write("<script type='text/javascript' src='http://api.map.baidu.com/api?v=2.0&ak=3GhQnaMZC1PF4U86IuKs7wIO4AnhwyqP'></script>");
}


var mapConfig = {

    mapId: '5555',
    url: "http://121.201.65.133:2001/arcgis/rest/services/szmap_10_170117/MapServer",
    mapType: "tiled",
    scale: '715.48155171871',
    level: '11',
    extent:{
      xmax:106845.70780098543,
      ymax:54047.27319746484,
      xmin:87001.91811340605,
      ymin:18751.785939823654,
      // xmax:113.90645352905051,
      // ymax:22.796252280092517,
      // xmin:113.76912442748801,
      // ymin:22.571375876283923,
    },
    isShowStreet:true,
    Load3dMap: true,
    Load2dMap: true,
};

if(mapConfig.Load2dMap){
    loadStyle(arcgisCssLink);
}

if(mapConfig.isShowStreet){
    loadScript();
}



var  layerConfig =  {
    geometeryServiceUrl : "http://121.201.65.133:2001/arcgis/rest/services/Utilities/Geometry/GeometryServer",
    arcgisAPIUrl : "http://cityworks.cn/arcgis_js_v320_api/arcgis_js_api/library/3.20/3.20/init.js",
    geometryPdfUrl: "http://10.10.120.2:6080/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task"
}

