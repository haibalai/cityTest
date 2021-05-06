import _0x3639fc from './analyser.js';
import _0x26aee3 from './config.js';
import _0x28ca0b from '../../libs/Orbit.js';

export default class OrbitAnalyze extends _0x3639fc {
    constructor(_0x6650f2, _0x630749) {
        super(_0x6650f2);
        this['opt'] = _0x630749;
        this['analyser']();
    }

    ['analyser']() {
        var GFszaR = {'thUTp': 'viewer\x20is\x20required.'};
        if (!Cesium['defined'](this['_viewer'])) {
            throw new Cesium['DeveloperError'](GFszaR['thUTp']);
        }
        if (!this['opt']) {
            return ![];
        }
        this['orbitPrototype'] = new OrbitPrototype(this);
    }
}

class OrbitPrototype {
    constructor(_0x3201bd) {
        var ScTSjU = {
            'FTmHS': '15|10|13|1|3|12|8|14|0|5|6|9|7|2|4|11',
            'XBdmI': '测试站No.1',
            'fqeKv': '测试站No.2',
            'TqJVy': '测试站No.3',
            'pUpLx': '测试站No.4',
            'AYgCC': '测试站No.5',
            'hoPhZ': '测试站No.6',
            'QEczA': '测试站No.7',
            'eFUwF': '测试站No.8',
            'PcxFh': '测试站No.9'
        };
        var nHgshK = ScTSjU['FTmHS']['split']('|'), dZFmen = 0x0;
        while (!![]) {
            switch (nHgshK[dZFmen++]) {
                case'0':
                    this['_interPoints'] = [];
                    continue;
                case'1':
                    this['entitys'] = _0x3201bd['entitys'];
                    continue;
                case'2':
                    this['entityCzml'] = [];
                    continue;
                case'3':
                    this['tools'] = _0x3201bd['Tools'];
                    continue;
                case'4':
                    this['groundPoint'] = [{
                        'name': ScTSjU['XBdmI'],
                        'lat': 42.414136487719354,
                        'lon': 100.52056873233481,
                        'alt': 0x0,
                        'scope': 0xe10
                    }, {
                        'name': ScTSjU['fqeKv'],
                        'lat': 42.42522146204617,
                        'lon': 109.85947530942975,
                        'alt': 0x0,
                        'scope': 0xbb8
                    }, {
                        'name': ScTSjU['TqJVy'],
                        'lat': 33.1819896042328,
                        'lon': 109.5591230090901,
                        'alt': 0x0,
                        'scope': 0xfa0
                    }, {
                        'name': ScTSjU['pUpLx'],
                        'lat': 32.019262705194734,
                        'lon': 101.73699414432289,
                        'alt': 0x0,
                        'scope': 0xed8
                    }, {
                        'name': ScTSjU['AYgCC'],
                        'lat': 27.496123837273654,
                        'lon': 103.82420725508969,
                        'alt': 0x0,
                        'scope': 0xbb8
                    }, {
                        'name': ScTSjU['hoPhZ'],
                        'lat': 26.949808853110465,
                        'lon': 114.53228575748204,
                        'alt': 0x0,
                        'scope': 0x708
                    }, {
                        'name': ScTSjU['QEczA'],
                        'lat': 35.685974970635534,
                        'lon': 93.2030228474047,
                        'alt': 0x0,
                        'scope': 0xc80
                    }, {
                        'name': ScTSjU['eFUwF'],
                        'lat': 24.73499910338626,
                        'lon': 106.24244324184826,
                        'alt': 0x0,
                        'scope': 0x3e8
                    }, {
                        'name': ScTSjU['PcxFh'],
                        'lat': 41.73492679655367,
                        'lon': 121.17656582042726,
                        'alt': 0x0,
                        'scope': 0xdac
                    }];
                    continue;
                case'5':
                    this['_groundPonit'] = [];
                    continue;
                case'6':
                    this['_sateLine'] = [];
                    continue;
                case'7':
                    this['analyzeResult'] = null;
                    continue;
                case'8':
                    this['_passEntity'] = [];
                    continue;
                case'9':
                    this['czmlDataSource'] = null;
                    continue;
                case'10':
                    this['options'] = _0x3201bd['opt'];
                    continue;
                case'11':
                    this['load']();
                    continue;
                case'12':
                    this['mouseManager'] = _0x3201bd['mouseManager'];
                    continue;
                case'13':
                    this['viewer'] = _0x3201bd['_viewer'];
                    continue;
                case'14':
                    this['_radars'] = [];
                    continue;
                case'15':
                    this['_that'] = _0x3201bd;
                    continue;
            }
            break;
        }
    }

    ['load']() {
        if (!this['options']['data']) {
            return ![];
        }
        this['parseGroundPoint']()['then'](_0x57d1d6 => {
            this['parseCzml'](this['options']['data'])['then'](_0x29c093 => {
                this['parseOrbit']()['then'](_0x3453f7 => {
                    this['compute'](_0x3453f7)['then'](_0x5aaa45 => {
                        this['viewer']['dataSources']['add'](this['czmlDataSource']);
                    });
                });
            });
        });
        ;
    }

    ['loadOrbitCompute'](_0x3f6f74) {
        var yBoKAy = {
            'yQYwa': function (_0x569d98, _0x36b076) {
                return _0x569d98(_0x36b076);
            }, 'HVFOL': function (_0xd38cae, _0xdbafeb) {
                return _0xd38cae < _0xdbafeb;
            }, 'pwdXT': function (_0x481200, _0x514f9e) {
                return _0x481200 + _0x514f9e;
            }, 'nSgId': function (_0x1451f6, _0x557543) {
                return _0x1451f6 - _0x557543;
            }, 'lCvQD': function (_0x502dbb, _0x2ccbf1, _0x2afca5) {
                return _0x502dbb(_0x2ccbf1, _0x2afca5);
            }, 'hiKJB': 'no-cors'
        };
        let orbits = [];
        if (this['options']['file']) {
            let fileDataUrl = URL['createObjectURL'](file);
            yBoKAy['lCvQD'](fetch, fileDataUrl, {'mode': yBoKAy['hiKJB']})['then'](_0x1326c0 => {
                if (!_0x1326c0['ok']) {
                    throw yBoKAy['yQYwa'](Error, _0x1326c0['statusText']);
                }
                return _0x1326c0;
            })['then'](_0xa2227e => _0xa2227e['text']())['then'](_0x17296e => {
                const lines = _0x17296e['split'](/\r?\n/);
                for (let i = 0x3; yBoKAy['HVFOL'](i, lines['length']); yBoKAy['pwdXT'](i, 0x3)) {
                    let tle = lines['splice'](yBoKAy['nSgId'](i, 0x3), i)['join']('\x0a');
                    let name = tle['split']('\x0a')[0x0]['trim']();
                    if (tle['startsWith']('0\x20')) {
                        name = name['substring'](0x2);
                    }
                    orbits['push'](new _0x28ca0b(name, tle));
                }
                yBoKAy['yQYwa'](_0x3f6f74, orbits);
            })['catch'](function (_0x280c63) {
                console['log'](_0x280c63);
            });
        } else {
            if (this['options']['tle']) {
                orbits['push'](new _0x28ca0b(this['options']['tleName'], this['options']['tle']));
                yBoKAy['yQYwa'](_0x3f6f74, orbits);
            }
        }
    }

    ['parseOrbit'](_0xfeedcf) {
        var FGIqWq = {
            'mhBNJ': function (_0x5cfe93, _0x478cb2) {
                return _0x5cfe93 == _0x478cb2;
            }, 'XSmdI': function (_0x332626, _0x13762e) {
                return _0x332626 > _0x13762e;
            }, 'XOWAs': function (_0x3be869, _0x3ecfbf) {
                return _0x3be869(_0x3ecfbf);
            }
        };
        return new Promise((_0x302776, _0x258cc2) => {
            var qBxCDR = {
                'LBibQ': function (_0x597e59, _0x68afed) {
                    return FGIqWq['mhBNJ'](_0x597e59, _0x68afed);
                }, 'pwksT': function (_0x16528c, _0x40b499) {
                    return FGIqWq['XSmdI'](_0x16528c, _0x40b499);
                }, 'GNkdH': function (_0x2e68b8, _0x3a89b0) {
                    return FGIqWq['XOWAs'](_0x2e68b8, _0x3a89b0);
                }
            };
            this['loadOrbitCompute'](_0x5da6b4 => {
                if (qBxCDR['LBibQ'](_0x5da6b4['length'], 0x0)) return ![];
                let computePass = [];
                for (let i in this['_groundPonit']) {
                    let radar = this['_groundPonit'][i];
                    for (let o in _0x5da6b4) {
                        let orbit = _0x5da6b4[o];
                        if (!radar['longitude']) continue;
                        let passeds = orbit['computeOrbitPasses']({
                            'longitude': radar['longitude'],
                            'latitude': radar['latitude'],
                            'height': 0x0,
                            'zyjl': radar['zyjl']
                        }, this['options']['stime'], this['options']['etime']);
                        if (qBxCDR['pwksT'](passeds['length'], 0x0)) {
                            computePass['push']({'radar': radar, 'pass': passeds});
                        }
                    }
                }
                qBxCDR['GNkdH'](_0x302776, computePass);
            });
        });
    }

    ['compute'](_0x1a4955) {
        var qEVtgo = {
            'CrbSl': function (_0x5530e3, _0x31d56c) {
                return _0x5530e3 > _0x31d56c;
            }, 'uqIuy': function (_0x1d51bb, _0x3c1002) {
                return _0x1d51bb + _0x3c1002;
            }, 'pjvkp': function (_0x22b1a, _0x58b1d8) {
                return _0x22b1a + _0x58b1d8;
            }, 'uyDyO': '\x20-\x20', 'VqNVj': function (_0xb3571a, _0x4cd15c) {
                return _0xb3571a(_0x4cd15c);
            }
        };
        return new Promise((_0x20f5a7, _0x5c2004) => {
            let radarEntity = [], nodes = [];
            for (let i in _0x1a4955) {
                let result = _0x1a4955[i];
                let radar = result['radar'], pass = result['pass'];
                if (qEVtgo['CrbSl'](pass['length'], 0x0)) {
                    for (let p in pass) {
                        let {bool, newStartLonLat, newStopLonLat} = this['matchCzml'](pass[p], radar);
                        if (bool) {
                            nodes['push']({
                                'time': qEVtgo['uqIuy'](qEVtgo['pjvkp'](new Date(pass[p]['start'])['toLocaleString'](), qEVtgo['uyDyO']), new Date(pass[p]['end'])['toLocaleString']()),
                                'start_point': newStartLonLat,
                                'stop_point': newStopLonLat,
                                'azimuthApex': pass[p]['azimuthApex'],
                                'duration': pass[p]['duration'],
                                'r_lon': radar['longitude'],
                                'r_lat': radar['latitude'],
                                'pid': radar['id'],
                                'startTime': pass[p]['start'],
                                'endTime': pass[p]['end'],
                                'name': radar['name']
                            });
                            radarEntity['push']({'radar': radar});
                        }
                    }
                }
            }
            this['createData'](radarEntity);
            qEVtgo['VqNVj'](_0x20f5a7, this['createNodeTree'](nodes));
        });
    }

    ['matchCzml'](_0x5252ba, _0x39ac93) {
        var THVaMf = {
            'lUNog': function (_0x8fcc85, _0xdde213) {
                return _0x8fcc85 < _0xdde213;
            },
            'dieGh': function (_0x170e5b, _0x3477d6) {
                return _0x170e5b / _0x3477d6;
            },
            'eUhSn': function (_0x524bc3, _0x2619ee) {
                return _0x524bc3(_0x2619ee);
            },
            'qOxuN': function (_0x4e2b40, _0x2618c5) {
                return _0x4e2b40 + _0x2618c5;
            },
            'PNEDD': function (_0x1853ec, _0x433234) {
                return _0x1853ec + _0x433234;
            },
            'IGIXw': function (_0x298852, _0x5a58a0) {
                return _0x298852 + _0x5a58a0;
            },
            'jCSbk': function (_0x55dc47, _0x15e13a) {
                return _0x55dc47 + _0x15e13a;
            },
            'lSeCL': function (_0x5aaa81, _0x182d2e) {
                return _0x5aaa81 + _0x182d2e;
            },
            'qdBNO': function (_0xed864d, _0x2c275c) {
                return _0xed864d + _0x2c275c;
            },
            'htAXS': function (_0xa9b305, _0x3cd0d3) {
                return _0xa9b305 + _0x3cd0d3;
            },
            'CtAcl': '设备:',
            'NWixi': '\x0a\x20开始:\x20',
            'vYTEY': '\x0a\x20间隔:\x20',
            'ziWRU': '(ms)\x20\x0a\x20高度:\x20',
            'TvRaI': '\x0a\x20经度：',
            'LwRWW': '\x0a\x20纬度：',
            'iwzvs': 'start',
            'hxHGU': function (_0x245f18, _0x5c314f) {
                return _0x245f18 + _0x5c314f;
            },
            'BYbME': function (_0x476b03, _0x2e6787) {
                return _0x476b03 + _0x2e6787;
            },
            'khxCA': function (_0x2e216d, _0x18ac21) {
                return _0x2e216d + _0x18ac21;
            },
            'gvdyz': '\x0a\x20结束:\x20',
            'wXncP': '\x0a\x20高度:\x20',
            'EUdqh': 'end'
        };
        let bool = ![], newStartLonLat, newStopLonLat;
        for (let i in this['entityCzml']) {
            let entity = this['entityCzml'][i];
            let start_position = entity['position']['getValue'](Cesium['JulianDate']['fromDate'](new Date(_0x5252ba['start'])));
            let end_position = entity['position']['getValue'](Cesium['JulianDate']['fromDate'](new Date(_0x5252ba['end'])));
            if (start_position) {
                let startDistance = this['tools']['_distance'](start_position, _0x39ac93['position']['getValue']());
                if (THVaMf['lUNog'](THVaMf['dieGh'](startDistance, 0x3e8), THVaMf['eUhSn'](parseInt, _0x39ac93['scope']))) {
                    bool = !![];
                    newStartLonLat = this['mouseManager']['worldToLonlat'](start_position);
                    newStopLonLat = this['mouseManager']['worldToLonlat'](end_position);
                    let pentity = this['entitys']['createPoint'](start_position, THVaMf['qOxuN'](THVaMf['PNEDD'](THVaMf['IGIXw'](THVaMf['jCSbk'](THVaMf['jCSbk'](THVaMf['lSeCL'](THVaMf['qdBNO'](THVaMf['qdBNO'](THVaMf['htAXS'](THVaMf['htAXS'](THVaMf['htAXS'](THVaMf['CtAcl'], _0x39ac93['name']), THVaMf['NWixi']), new Date(_0x5252ba['start'])['toLocaleString']()), THVaMf['vYTEY']), _0x5252ba['duration']), THVaMf['ziWRU']), newStartLonLat['alt']), THVaMf['TvRaI']), newStartLonLat['lon']), THVaMf['LwRWW']), newStartLonLat['lat']), !![]);
                    pentity['passid'] = _0x5252ba['oid'];
                    pentity['label']['show'] = ![];
                    pentity['rid'] = _0x39ac93['id'];
                    pentity['dateTime'] = _0x5252ba['start'];
                    pentity['status'] = THVaMf['iwzvs'];
                    this['_passEntity']['push'](pentity);
                }
            }
            if (end_position) {
                let endDistance = this['tools']['_distance'](end_position, _0x39ac93['position']['getValue']());
                if (THVaMf['lUNog'](THVaMf['dieGh'](endDistance, 0x3e8), THVaMf['eUhSn'](parseInt, _0x39ac93['scope']))) {
                    bool = !![];
                    newStartLonLat = this['mouseManager']['worldToLonlat'](start_position);
                    newStopLonLat = this['mouseManager']['worldToLonlat'](end_position);
                    let pentity = this['entitys']['createPoint'](end_position, THVaMf['htAXS'](THVaMf['htAXS'](THVaMf['hxHGU'](THVaMf['hxHGU'](THVaMf['hxHGU'](THVaMf['hxHGU'](THVaMf['hxHGU'](THVaMf['BYbME'](THVaMf['khxCA'](THVaMf['CtAcl'], _0x39ac93['name']), THVaMf['gvdyz']), new Date(_0x5252ba['end'])['toLocaleString']()), THVaMf['wXncP']), newStopLonLat['alt']), THVaMf['TvRaI']), newStopLonLat['lon']), THVaMf['LwRWW']), newStopLonLat['lat']), !![]);
                    pentity['passid'] = _0x5252ba['oid'];
                    pentity['label']['show'] = ![];
                    pentity['rid'] = _0x39ac93['id'];
                    pentity['dateTime'] = _0x5252ba['end'];
                    pentity['status'] = THVaMf['EUdqh'];
                    this['_passEntity']['push'](pentity);
                }
            }
        }
        ;
        return {'bool': bool, 'newStartLonLat': newStartLonLat, 'newStopLonLat': newStopLonLat};
    }

    ['parseCzml'](_0x4409f1) {
        var yauqFM = {
            'DRpQO': function (_0xba318f) {
                return _0xba318f();
            }
        };
        return new Promise((_0x51d350, _0xc0261b) => {
            let newCzml = _0x4409f1['czml']['replace'](/[\n\r]/g, '');
            Cesium['CzmlDataSource']['load'](JSON['parse'](newCzml))['then'](_0x5975a5 => {
                this['czmlDataSource'] = _0x5975a5;
                for (let i in _0x5975a5['entities']['_entities']['_array']) {
                    let sateEntity = _0x5975a5['entities']['_entities']['_array'][i];
                    this['entityCzml']['push'](sateEntity);
                }
                yauqFM['DRpQO'](_0x51d350);
            });
        });
    }

    ['parseGroundPoint']() {
        var BbHTFX = {
            'cyWWK': function (_0x51504c, _0x57839c) {
                return _0x51504c * _0x57839c;
            },
            'pxXpI': 'ellipsoid',
            'GfQKH': function (_0x5f39ab, _0x57f754) {
                return _0x5f39ab + _0x57f754;
            },
            'IYygs': '/Cesium/Apps/SampleData/kml/facilities/GroundStation.png',
            'YiYXE': function (_0x46a38b, _0x3da878) {
                return _0x46a38b == _0x3da878;
            },
            'Zoxjj': function (_0x318aa6, _0x381557) {
                return _0x318aa6(_0x381557);
            },
            'eNcMP': function (_0x5849d5, _0x40da00) {
                return _0x5849d5(_0x40da00);
            },
            'FKflE': function (_0x5d67b1) {
                return _0x5d67b1();
            }
        };
        let $this = this;

        function createRadar(_0x31dd72) {
            let rentity = $this['entitys']['createEntity']();
            rentity['name'] = _0x31dd72['name'];
            rentity['position'] = _0x31dd72['position'];
            rentity['ellipsoid'] = $this['entitys']['getEllipsoid']({'r': BbHTFX['cyWWK'](_0x31dd72['scope'], 0x3e8)});
            rentity['ide'] = BbHTFX['pxXpI'];
            rentity['pid'] = _0x31dd72['id'];
            $this['_radars']['push']($this['entitys']['add'](rentity));
        }

        function createGroundPoint(_0xb2f980) {
            let dentity = $this['entitys']['createEntity']();
            dentity['name'] = _0xb2f980['name'];
            dentity['longitude'] = _0xb2f980['lon'];
            dentity['latitude'] = _0xb2f980['lat'];
            dentity['position'] = Cesium['Cartesian3']['fromDegrees'](_0xb2f980['lon'], _0xb2f980['lat'], _0xb2f980['alt']);
            dentity['label'] = $this['entitys']['getLabel'](_0xb2f980['name']);
            dentity['billboard'] = $this['entitys']['getBillboard'](BbHTFX['GfQKH'](_0x26aee3['STATICDIR'], BbHTFX['IYygs']));
            dentity['scope'] = _0xb2f980['scope'];
            let dentityObj = $this['entitys']['add'](dentity);
            $this['_groundPonit']['push'](dentityObj);
            return dentityObj;
        }

        return new Promise((_0x1fcf59, _0x47aee5) => {
            if (BbHTFX['YiYXE'](this['groundPoint']['length'], 0x0)) return ![];
            for (let i in this['groundPoint']) {
                let items = this['groundPoint'][i];
                BbHTFX['Zoxjj'](createRadar, BbHTFX['eNcMP'](createGroundPoint, items));
            }
            BbHTFX['FKflE'](_0x1fcf59);
        });
    }

    ['createData'](_0x5df36b) {
        var ncipsj = {
            'Wdrsb': '--\x20计算完成,重新绘制\x20--', 'vlqkm': function (_0xb9e4d4, _0x4f2651) {
                return _0xb9e4d4 > _0x4f2651;
            }, 'xCyjb': 'radar', 'zOXyP': function (_0x17bdef, _0x3f08de) {
                return _0x17bdef == _0x3f08de;
            }
        };
        console['log'](ncipsj['Wdrsb']);
        for (let i in this['_radars']) {
            this['entitys']['remove'](this['_radars'][i]);
        }
        for (let i in this['_groundPonit']) {
            this['entitys']['remove'](this['_groundPonit'][i]);
        }
        if (ncipsj['vlqkm'](_0x5df36b['length'], 0x0)) {
            let newPassPoint = this['tools']['_uniqueArrTwo'](_0x5df36b, ncipsj['xCyjb'], 'id');
            for (let i in newPassPoint) {
                this['_passEntity']['push'](this['entitys']['add'](newPassPoint[i]['radar']));
            }
            for (let i in newPassPoint) {
                for (let j in this['_radars']) {
                    if (ncipsj['zOXyP'](newPassPoint[i]['radar']['id'], this['_radars'][j]['pid'])) {
                        this['_radars'][j]['show'] = ![];
                        this['_passEntity']['push'](this['entitys']['add'](this['_radars'][j]));
                        break;
                    }
                }
            }
        }
        this['_radars'] = [];
        this['_groundPonit'] = [];
    }

    ['createNodeTree'](_0x1b8b8a) {
        var ubdJoE = {
            'GaZqZ': function (_0x4cf60e, _0x2f0899) {
                return _0x4cf60e > _0x2f0899;
            }, 'bNFEo': function (_0x8df74, _0x3c3322) {
                return _0x8df74 & _0x3c3322;
            }, 'RwFfZ': function (_0x3c0ff3, _0x167b78) {
                return _0x3c0ff3 == _0x167b78;
            }, 'ClgFC': function (_0x34a7ca, _0xb2cb93) {
                return _0x34a7ca == _0xb2cb93;
            }, 'sdeTf': function (_0x2fe360, _0x3ee68b) {
                return _0x2fe360 * _0x3ee68b;
            }, 'bpzGr': function (_0x4431fd, _0x3d1252, _0x1a0c34) {
                return _0x4431fd(_0x3d1252, _0x1a0c34);
            }, 'UZqnq': function (_0x39cc26, _0x2dc153) {
                return _0x39cc26 & _0x2dc153;
            }, 'gkutV': function (_0x512dcd, _0x174a0a) {
                return _0x512dcd == _0x174a0a;
            }, 'GDYKF': '#passOpen', 'qXOXZ': 'layerDivId', 'yBjNX': 'pid', 'NETMK': function (_0x23e583, _0x3a2b76) {
                return _0x23e583 == _0x3a2b76;
            }, 'IDWnl': 'layerDivOpen', 'JWCoY': '过境分析', 'lDAPS': '20%', 'SmkAv': '60%', 'cDeMu': '10%'
        };
        console['log'](_0x1b8b8a);
        let nodeData = [], tree = layui['tree'], $this = this;
        let pNode = this['tools']['_uniqueArrOne'](_0x1b8b8a, ubdJoE['yBjNX']);
        for (let i in pNode) {
            let childrens = [];
            for (let j in _0x1b8b8a) {
                if (ubdJoE['NETMK'](pNode[i]['pid'], _0x1b8b8a[j]['pid'])) {
                    childrens['push']({
                        'title': _0x1b8b8a[j]['time'],
                        'id': this['tools']['_guid'](),
                        'oid': _0x1b8b8a[j]['pid'],
                        'startTime': _0x1b8b8a[j]['startTime'],
                        'endTime': _0x1b8b8a[j]['endTime']
                    });
                }
            }
            nodeData['push']({
                'title': pNode[i]['name'],
                'id': this['tools']['_guid'](),
                'spread': !![],
                'children': childrens,
                'oid': pNode[i]['pid']
            });
        }

        function switchBox(_0x2d95af, _0x1191f4) {
            if (!_0x2d95af['children']) {
                if (ubdJoE['GaZqZ']($this['_passEntity']['length'], 0x0)) {
                    $this['viewer']['clock']['shouldAnimate'] = ![];
                    for (let i in $this['_passEntity']) {
                        if (ubdJoE['bNFEo'](ubdJoE['RwFfZ'](_0x2d95af['oid'], $this['_passEntity'][i]['rid']), ubdJoE['ClgFC'](_0x2d95af['startTime'], $this['_passEntity'][i]['dateTime']))) {
                            $this['viewer']['clock']['currentTime'] = Cesium['JulianDate']['fromDate'](new Date(_0x2d95af['startTime']));
                            $this['viewer']['clock']['shouldAnimate'] = !![];
                            let position = $this['mouseManager']['worldToLonlat']($this['_passEntity'][i]['position']['getValue']());
                            $this['viewer']['camera']['setView']({'destination': Cesium['Cartesian3']['fromDegrees'](position['lon'], position['lat'], ubdJoE['sdeTf'](position['alt'], 0x2))});
                            if (_0x1191f4) {
                                $this['_passEntity'][i]['label']['show'] = _0x1191f4;
                            } else {
                                $this['_passEntity'][i]['label']['show'] = _0x1191f4;
                            }
                            ubdJoE['bpzGr'](setTimeout, () => {
                                $this['viewer']['clock']['shouldAnimate'] = ![];
                            }, 0x0);
                            break;
                        }
                        if (ubdJoE['UZqnq'](ubdJoE['gkutV'](_0x2d95af['oid'], $this['_passEntity'][i]['rid']), ubdJoE['gkutV'](_0x2d95af['endTime'], $this['_passEntity'][i]['dateTime']))) {
                            $this['viewer']['clock']['currentTime'] = Cesium['JulianDate']['fromDate'](new Date(_0x2d95af['endTime']));
                            $this['viewer']['clock']['shouldAnimate'] = !![];
                            let position = $this['mouseManager']['worldToLonlat']($this['_passEntity'][i]['position']['getValue']());
                            $this['viewer']['camera']['setView']({'destination': Cesium['Cartesian3']['fromDegrees'](position['lon'], position['lat'], ubdJoE['sdeTf'](position['alt'], 0x2))});
                            $this['_passEntity'][i]['label']['show'] = _0x1191f4;
                            ubdJoE['bpzGr'](setTimeout, () => {
                                $this['viewer']['clock']['shouldAnimate'] = ![];
                            }, 0x0);
                            break;
                        }
                    }
                }
            } else {
                for (let i in $this['_passEntity']) {
                    if (ubdJoE['gkutV'](_0x2d95af['oid'], $this['_passEntity'][i]['pid'])) {
                        $this['_passEntity'][i]['show'] = _0x1191f4;
                    }
                }
            }
        }

        function createPassOpen() {
            tree['render']({
                'elem': ubdJoE['GDYKF'],
                'data': nodeData,
                'showCheckbox': !![],
                'id': ubdJoE['qXOXZ'],
                'isJump': !![],
                'oncheck': function (_0x5e8409) {
                    ubdJoE['bpzGr'](switchBox, _0x5e8409['data'], _0x5e8409['checked']);
                },
                'click': function (_0x2f4db7) {
                    layer['msg'](JSON['stringify'](_0x2f4db7['data']));
                }
            });
        }

        this['tools']['openCommonDiv']({
            'id': ubdJoE['IDWnl'],
            'title': ubdJoE['JWCoY'],
            'area': [ubdJoE['lDAPS'], ubdJoE['SmkAv']],
            'offset': [ubdJoE['cDeMu'], '5%'],
            'content': '<div\x20id=\x22passOpen\x22></div>',
            'fn': createPassOpen
        });
    }
}