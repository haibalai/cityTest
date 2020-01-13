/**
 * Created by Administrator on 2017/4/12 0012.
 */


import {baseMapManagerCtrl} from  '../map/BaseMapManagerCtrl';
import {configManagerCtrl} from  '../configmanager/ConfigManagerCtrl';
import {layerManager} from  '../layermanager/LayerManagerCtrl';

import * as esriLoader from 'esri-loader';

export const swipeTool = {};

swipeTool.xmlLoadData = [];

/**
 * 记录swipe widget
 * @type {null}
 */
swipeTool.swipeWidget = null;

/**
 * 图层加载完毕事件处理
 * @type {null}
 */
swipeTool.layerAddHandle = null;
/**
 * 要进行卷帘对比的图层组
 * @type {Array}
 */
swipeTool.layerNames = new Array();
/**
 * 卷帘图层在地图的index
 * @type {{}}
 */
swipeTool.layerNamesIndex = {};
/**
 * 卷帘图层组
 * @type {{}}
 */
swipeTool.swipeLayers = {};
/**
 * 卷帘初始化时，未加载图层
 * @type {Array}
 */
swipeTool.unLoadLayers = new Array();

swipeTool.mapId = '';

/**
 * 停止卷帘
 * @param mapId
 */
swipeTool.stop = function (mapId) {

    for(let item of swipeTool.layerNames)
    {
        layerManager.showLayerByName(mapId,[item],false);
    }
    if(swipeTool.swipeWidget != null)
    {
        swipeTool.swipeWidget.disable();
    }
}

/**
 * 启动卷帘
 * @param mapId
 * @param type
 * @param layerNames
 */
swipeTool.start = function (mapId,type,layerNames) {
    esriLoader.dojoRequire(['esri/Map',
            "esri/dijit/LayerSwipe"
        ],
        (Map,
         LayerSwipe
        ) => {
            swipeTool.mapId = mapId;

            swipeTool.stop(mapId);
            swipeTool.layerNames = layerNames;
            swipeTool.layerNamesIndex = [];
            let map = baseMapManagerCtrl.mapHash[mapId];

            swipeTool.unLoadLayers = [];


            for(let item of layerNames)
            {
                let layerConfig = configManagerCtrl.getLayerConfigByName(item);
                let layerObject = layerManager.getAgsLayerIndexFromMapWithUrl(map,layerConfig.MAPSERVICES);
                let swipeLayer = layerObject.agsLyr;
                let index  = layerObject.index;
                if(swipeLayer != null)
                {
                    swipeTool.swipeLayers[item] = swipeLayer;
                    swipeTool.layerNamesIndex[item] = index;
                }
                else
                {
                    swipeTool.unLoadLayers.push(item);
                }
            }
            if(swipeTool.unLoadLayers.length == 0)
            {
                swipeTool.startHandle(map);
                for(let item of swipeTool.layerNames)
                {
                    layerManager.showLayerByName(mapId,[item],true);
                }

            }
            else
            {
                for(let item of swipeTool.layerNames)
                {
                    if(!swipeTool.unLoadLayers.includes(item))
                    {
                        layerManager.showLayerByName(mapId,[item],true);
                    }
                }
                swipeTool.layerAddHandle = map.on('layer-add-result',addHandle);
                for(let itemA of swipeTool.unLoadLayers)
                {
                    layerManager.showLayerByName(mapId,[itemA],true);
                }
            }
        });
}

function addHandle(layer)
{
    // console.log(layer,'layer');
    let map = baseMapManagerCtrl.mapHash[swipeTool.mapId];
    let layerConfig = configManagerCtrl.getLayerConfigByMapServiceUrl(layer.layer.url)

    if(swipeTool.unLoadLayers.includes(layerConfig.DISPLAYLAYERNAME))
    {
        let layerIndex  = swipeTool.unLoadLayers.indexOf(layerConfig.DISPLAYLAYERNAME);
        swipeTool.unLoadLayers.splice(layerIndex,1)
        let layerObject = layerManager.getAgsLayerIndexFromMapWithUrl(map,layer.layer.url);
        let swipeLayer = layerObject.agsLyr;
        let index  = layerObject.index;
        swipeTool.layerNamesIndex[layerConfig.DISPLAYLAYERNAME] = index;
        swipeTool.swipeLayers[layerConfig.DISPLAYLAYERNAME] = swipeLayer;

        if(swipeTool.unLoadLayers.length == 0)
        {
            // console.log(swipeTool.unLoadLayers);
            swipeTool.layerAddHandle.remove();
            swipeTool.startHandle(map);
            // console.log("5555")
        }

    }
}

swipeTool.startHandle = function (map) {

    esriLoader.dojoRequire(['esri/Map',
            "esri/dijit/LayerSwipe"

        ],
        (Map,
         LayerSwipe
        ) => {

            if(swipeTool.layerNamesIndex[swipeTool.layerNames[0]] < swipeTool.layerNamesIndex[swipeTool.layerNames[1]])
            {
                map.reorderLayer(swipeTool.swipeLayers[swipeTool.layerNames[0]],swipeTool.layerNamesIndex[swipeTool.layerNames[1]])
            }
            if(swipeTool.swipeWidget == null)
            {

                //Try switching to "scope" or "horizontal"
                let swipeWidget = new LayerSwipe({
                    map:map,
                    type:'vertical',
                    layers:[swipeTool.swipeLayers[swipeTool.layerNames[0]]]

                },'swipeDiv');
                swipeTool.swipeWidget = swipeWidget;
                swipeTool.swipeWidget.startup();
                console.log( swipeTool.swipeWidget);
            }
            else
            {
                swipeTool.swipeWidget.layers = [swipeTool.swipeLayers[swipeTool.layerNames[0]]]
                swipeTool.swipeWidget.enable();
            }

        })

}