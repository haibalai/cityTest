var cwConfig = {
    z: 43.79,  //每个地方的海拔高度不一样，所以写成配置项
    //证书相关路径
    license: {
        protocal: "http",
        host: "pinshan.cityworks.ascs.tech",
        port: ":80",
        licenseHost: "",
        path: "C:\\inetpub\\wwwroot\\license\\server.lic",
    },
    //三维传感器数据
    cwdata: {
        httpServerUrl: ENV_DATA_SERVER,
        httpServerPort: ENV_DATA_SERVER_PORT
    },
    videoUrl: 'vp://zsdv/' + ENV_VIDEO_SERVER + ':' + ENV_VIDEO_SERVER_PORT,
    videoLogin: '/' + ENV_VIDEO_SERVER_USER + '/' + ENV_VIDEO_SERVER_PASSWORD + '/0',
    //汽车仿真开动
    car: {
        carUrl: "/timeandspace-platform/v1/traffic/bus/where/",
        carModel: "/static/model/bus/bus.osg",
        z: 16,  //每个地方的海拔高度不一样，所以写成配置项
        ifShowCarVideo: true
    },
    protocal: "http://",
    host: ENV_CM_SERVER,
    port: ENV_CM_SERVER_PORT,
    licensePath: "",
    loginUrl: "/Handler/Login.ashx",
    MapInfo: "/CityMaker/MapService/SHENZHENLONGGANG_20170315.gis",
    //可以数据中英文映射的静态页面
    queryPage: LINE_URL + "/static/pages/query_width_map.html",

    swap: {},

    //查询页面样式
    queryPageStyle: {
        title: {
            height: 30,
        },
        button: {
            isHiddenButton: false,
            height: 60,
        },
    },
    //天空盒资源
    skyboxnode: {
        BaseUrl: "http://fz.cityworks.cn/static/appbuilder/skyBox/13/",
        BackImage: "13_BK.jpg",
        BottomImage: "13_DN.jpg",
        FrontImage: "13_FR.jpg",
        LeftImage: "13_LF.jpg",
        RightImage: "13_RT.jpg",
        TopImage: "13_UP.jpg"
    },
    //缓冲分析
    bufferAnalysis: {
        boundarySymbolColor: 0x11000000,
        symbolColor: 2160115967
    },
    //轨迹飞行
    flyByLineConfig: {
        "pathWidth": 0,
        "isBling": 0,
        "pathColor": 4294967295
    },
    //点击查询
    clickQuery: {
        highlightColor: 0xffff0000
    },
    //最佳视角
    bestView: {
        height: "403.47763478209464",
        hAngle: "-56.865605514647427",
        vAngle: "-22.71658083204348",
        x: "426620.32223617472",
        y: "2881750.4370539761"
    },
    viewRange: {
        minX: 422900,
        maxX: 427890,
        minY: 2880861,
        maxY: 2883485
    },
    exportImg: {
        rootDir: "c:\\inetpub\\wwwroot\\",
        appDir: "cwImages\\",
        url: "http://127.0.0.1/"
    },
    eagleEye: {
        eyeWidth: 350,
        eyeHeight: 200,
        mapUrl: "http://localhost:8082/static/images/map.bmp",
        arrowUrl: "http://localhost:8082/static/images/move.png"
    },
    mapBaseConfig: {
        host: ENV_CM_SERVER,
        port: ENV_CM_SERVER_PORT,
        maxVisibleDistance: 5000,
        minVisibleDistance: 15,
        service: {
            "citymaker": "FUZHOU_201709161347_FDB",
            "citymakerTed": "fuzhou_201709121607_ted",
            "cityMakerPipeLine": "",
        },
        type: "citymaker",
    },
    sliderLayer: {
        names: ["地面", "道路"]  //头部滑动条控制的图层
    },
    //三维画线方法
    drawLine: {
        //三维内线条颜色,以字符串形式写入，例如："#FFFF00"
        colorArray: []
    },
    mapGroup: [{
        "name": "法人数量",
        "aliceName": "法人数量",
        "dataSet": "data2",
        "featureClassName": "法人数量",
        "service": "fuzhou_credit_visual_fdb2",
        "geoName": "Geometry",
        "visible": true,
        "password": "",
        "type": "citymaker",
        "ConnectionType": "gviConnectionCms7Http",
        "host": "11.23.3.95",
        "port": "8040"
    }, {
        "name": "企业数量",
        "aliceName": "企业数量",
        "dataSet": "data2",
        "featureClassName": "企业数量",
        "service": "fuzhou_credit_visual_fdb2",
        "geoName": "Geometry",
        "visible": true,
        "password": "",
        "type": "citymaker",
        "ConnectionType": "gviConnectionCms7Http",
        "host": "11.23.3.95",
        "port": "8040"
    }, {
        "name": "350103cst002",
        "aliceName": "350103cst002",
        "dataSet": "交通",
        "featureClassName": "350103cst002",
        "service": "fuzhou_201705041653_fdb",
        "geoName": "Geometry",
        "visible": true,
        "password": "",
        "type": "citymaker",
        "ConnectionType": "gviConnectionCms7Http",
        "host": "11.23.3.95",
        "port": "8040"
    }],
}
