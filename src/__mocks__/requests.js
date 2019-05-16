export const fetchElementRequest = jest.fn().mockImplementation(() => ({
  osm: {
    $: {
      version: '0.6',
      generator: 'CGImap 0.6.0 (9711 thorn-01.openstreetmap.org)',
      copyright: 'OpenStreetMap and contributors',
      attribution: 'http://www.openstreetmap.org/copyright',
      license: 'http://opendatacommons.org/licenses/odbl/1-0/'
    },
    node: [
      {
        $: {
          id: '3683625932',
          visible: 'true',
          version: '1',
          changeset: '33150668',
          timestamp: '2015-08-06T09:49:47Z',
          user: 'Vinber-Num&Lib',
          uid: '2568974',
          lat: '44.8331455',
          lon: '-0.5936602'
        },
        tag: [
          {
            $: {
              k: 'amenity',
              v: 'drinking_water'
            }
          }
        ]
      }
    ]
  },
  _id: '3683625932',
  _type: 'node'
}));

export const fetchWaysForNodeRequest = jest.fn().mockImplementation(() => ({
  _id: '536287533',
  _type: 'way',
  osm: {
    $: {
      attribution: 'http://www.openstreetmap.org/copyright',
      copyright: 'OpenStreetMap and contributors',
      generator: 'CGImap 0.6.0 (9711 thorn-01.openstreetmap.org)',
      license: 'http://opendatacommons.org/licenses/odbl/1-0/',
      version: '0.6'
    },
    way: [
      {
        $: {
          changeset: '62261628',
          id: '536287533',
          timestamp: '2018-09-03T23:46:20Z',
          uid: '1443767',
          user: 'Olyon',
          version: '3',
          visible: 'true'
        },
        nd: [
          {
            $: {
              ref: '5195549178'
            }
          },
          {
            $: {
              ref: '5336441517'
            }
          },
          {
            $: {
              ref: '5336441515'
            }
          },
          {
            $: {
              ref: '5336441519'
            }
          },
          {
            $: {
              ref: '5336441518'
            }
          },
          {
            $: {
              ref: '1153562749'
            }
          }
        ],
        tag: [
          {
            $: {
              k: 'highway',
              v: 'primary'
            }
          },
          {
            $: {
              k: 'lanes',
              v: '1'
            }
          },
          {
            $: {
              k: 'maxspeed',
              v: '80'
            }
          },
          {
            $: {
              k: 'old_ref',
              v: 'N 512'
            }
          },
          {
            $: {
              k: 'oneway',
              v: 'yes'
            }
          },
          {
            $: {
              k: 'ref',
              v: 'D 2152'
            }
          }
        ]
      }
    ]
  }
}));

export const fetchNotesRequest = jest.fn().mockImplementation(() => [
  {
    lon: '0.5891000',
    lat: '44.4068500',
    id: '1369237',
    url: 'https://api.openstreetmap.org/api/0.6/notes/1369237',
    comment_url: 'https://api.openstreetmap.org/api/0.6/notes/1369237/comment',
    close_url: 'https://api.openstreetmap.org/api/0.6/notes/1369237/close',
    date_created: '2018-04-22 17:54:49 UTC',
    status: 'open',
    comments: [
      {
        date: '2018-04-22 17:54:49 UTC',
        action: 'opened',
        text: 'Chez Florentin, Faustine, Aimé, Julien et Marine.',
        html: '<p>Chez Florentin, Faustine, Aimé, Julien et Marine.</p>'
      },
      {
        date: '2018-04-22 17:57:56 UTC',
        action: 'commented',
        text:
          "c'est quoi ? une note personnelle ou le nom d'un établissement ?",
        html:
          "<p>c'est quoi ? une note personnelle ou le nom d'un établissement ?</p>"
      }
    ]
  },
  {
    lon: '0.1802000',
    lat: '44.4890700',
    id: '1270165',
    url: 'https://api.openstreetmap.org/api/0.6/notes/1270165',
    reopen_url: 'https://api.openstreetmap.org/api/0.6/notes/1270165/reopen',
    date_created: '2018-01-16 15:28:34 UTC',
    status: 'closed',
    date_closed: '2018-04-20 11:43:00 UTC',
    comments: [
      {
        date: '2018-01-16 15:28:34 UTC',
        action: 'opened',
        text: 'carrefour market',
        html: '<p>carrefour market</p>'
      },
      {
        date: '2018-04-20 11:43:00 UTC',
        uid: '2533303',
        user: 'opline',
        user_url: 'https://api.openstreetmap.org/user/opline',
        action: 'closed',
        text: '',
        html: '<p></p>'
      }
    ]
  },
  {
    lon: '0.7933400',
    lat: '44.4201400',
    id: '1365069',
    url: 'https://api.openstreetmap.org/api/0.6/notes/1365069',
    comment_url: 'https://api.openstreetmap.org/api/0.6/notes/1365069/comment',
    close_url: 'https://api.openstreetmap.org/api/0.6/notes/1365069/close',
    date_created: '2018-04-18 17:46:14 UTC',
    status: 'open',
    comments: [
      {
        date: '2018-04-18 17:46:14 UTC',
        action: 'opened',
        text: 'Labro',
        html: '<p>Labro</p>'
      }
    ]
  },
  {
    lon: '0.2216578',
    lat: '44.5063613',
    id: '1106518',
    url: 'https://api.openstreetmap.org/api/0.6/notes/1106518',
    comment_url: 'https://api.openstreetmap.org/api/0.6/notes/1106518/comment',
    close_url: 'https://api.openstreetmap.org/api/0.6/notes/1106518/close',
    date_created: '2017-08-16 15:41:56 UTC',
    status: 'open',
    comments: [
      {
        date: '2017-08-16 15:41:56 UTC',
        action: 'opened',
        text: 'Monplaisir',
        html: '<p>Monplaisir</p>'
      },
      {
        date: '2017-08-16 15:42:43 UTC',
        action: 'commented',
        text: 'Les Carbonnières\n',
        html: '<p>Les Carbonnières\n</p>'
      },
      {
        date: '2017-08-17 16:57:49 UTC',
        uid: '379182',
        user: 'Metaltyty',
        user_url: 'https://api.openstreetmap.org/user/Metaltyty',
        action: 'commented',
        text: 'lieu-dit, rue ou résidence?',
        html: '<p>lieu-dit, rue ou résidence?</p>'
      },
      {
        date: '2017-08-24 15:44:07 UTC',
        action: 'commented',
        text: 'Lieu dit',
        html: '<p>Lieu dit</p>'
      },
      {
        date: '2017-10-22 16:06:12 UTC',
        uid: '2533303',
        user: 'opline',
        user_url: 'https://api.openstreetmap.org/user/opline',
        action: 'commented',
        text: 'Monplaisir ou les carbonnières ? Vous nous proposez deux noms',
        html:
          '<p>Monplaisir ou les carbonnières ? Vous nous proposez deux noms</p>'
      },
      {
        date: '2018-04-08 19:35:56 UTC',
        uid: '2568974',
        user: 'Vinber-Num&Lib',
        user_url: 'https://api.openstreetmap.org/user/Vinber-Num&Lib',
        action: 'commented',
        text: 'on cloture, pas de réactions ?',
        html: '<p>on cloture, pas de réactions ?</p>'
      }
    ]
  }
]);

export const fetchMapByBboxRequest = jest.fn().mockImplementation(() => ({
  osm: {
    $: {
      version: '0.6',
      generator: 'CGImap 0.6.1 (11417 thorn-02.openstreetmap.org)',
      copyright: 'OpenStreetMap and contributors',
      attribution: 'http://www.openstreetmap.org/copyright',
      license: 'http://opendatacommons.org/licenses/odbl/1-0/'
    },
    bounds: [
      {
        $: {
          minlat: '47.2135900',
          minlon: '-1.5565400',
          maxlat: '47.2145300',
          maxlon: '-1.5540400'
        }
      }
    ],
    node: [
      {
        $: {
          id: '266221357',
          visible: 'true',
          version: '7',
          changeset: '18288835',
          timestamp: '2013-10-10T21:54:14Z',
          user: 'tchaik',
          uid: '1130870',
          lat: '47.2146551',
          lon: '-1.5550901'
        }
      },
      {
        $: {
          id: '266221362',
          visible: 'true',
          version: '15',
          changeset: '50500325',
          timestamp: '2017-07-23T12:17:35Z',
          user: 'Virgile1994',
          uid: '362997',
          lat: '47.2136820',
          lon: '-1.5548290'
        },
        tag: [
          {
            $: {
              k: 'highway',
              v: 'mini_roundabout'
            }
          }
        ]
      },
      {
        $: {
          id: '266221363',
          visible: 'true',
          version: '6',
          changeset: '47195696',
          timestamp: '2017-03-27T09:10:22Z',
          user: "Carto'Cité",
          uid: '5426135',
          lat: '47.2129483',
          lon: '-1.5541300'
        }
      }
    ],
    way: [
      {
        $: {
          id: '24485913',
          visible: 'true',
          version: '17',
          changeset: '50500325',
          timestamp: '2017-07-23T12:17:46Z',
          user: 'Virgile1994',
          uid: '362997'
        },
        nd: [
          {
            $: {
              ref: '266221362'
            }
          },
          {
            $: {
              ref: '3373186168'
            }
          },
          {
            $: {
              ref: '4009374095'
            }
          },
          {
            $: {
              ref: '293038819'
            }
          },
          {
            $: {
              ref: '4009374093'
            }
          },
          {
            $: {
              ref: '1973845387'
            }
          },
          {
            $: {
              ref: '1973845376'
            }
          },
          {
            $: {
              ref: '266221363'
            }
          },
          {
            $: {
              ref: '1973845371'
            }
          },
          {
            $: {
              ref: '1973845366'
            }
          },
          {
            $: {
              ref: '309231223'
            }
          }
        ],
        tag: [
          {
            $: {
              k: 'access',
              v: 'destination'
            }
          },
          {
            $: {
              k: 'bicycle',
              v: 'yes'
            }
          },
          {
            $: {
              k: 'description',
              v: 'Zone à Trafic Limité'
            }
          },
          {
            $: {
              k: 'emergency',
              v: 'yes'
            }
          },
          {
            $: {
              k: 'foot',
              v: 'yes'
            }
          },
          {
            $: {
              k: 'goods',
              v: 'delivery'
            }
          },
          {
            $: {
              k: 'hgv',
              v: 'destination'
            }
          },
          {
            $: {
              k: 'highway',
              v: 'residential'
            }
          },
          {
            $: {
              k: 'lanes',
              v: '2'
            }
          },
          {
            $: {
              k: 'lit',
              v: 'yes'
            }
          },
          {
            $: {
              k: 'maxspeed',
              v: '30'
            }
          },
          {
            $: {
              k: 'motorcar',
              v: 'destination'
            }
          },
          {
            $: {
              k: 'motorcycle',
              v: 'destination'
            }
          },
          {
            $: {
              k: 'motor_vehicle',
              v: 'destination'
            }
          },
          {
            $: {
              k: 'name',
              v: 'Cours Olivier de Clisson'
            }
          },
          {
            $: {
              k: 'psv',
              v: 'yes'
            }
          },
          {
            $: {
              k: 'surface',
              v: 'asphalt'
            }
          },
          {
            $: {
              k: 'traffic_sign',
              v: 'FR:B30[30]'
            }
          },
          {
            $: {
              k: 'zone:maxspeed',
              v: 'FR:30'
            }
          }
        ]
      },
      {
        $: {
          id: '26685358',
          visible: 'true',
          version: '14',
          changeset: '53306072',
          timestamp: '2017-10-27T23:21:26Z',
          user: 'Cybereric',
          uid: '699868'
        },
        nd: [
          {
            $: {
              ref: '5137481606'
            }
          },
          {
            $: {
              ref: '5195043605'
            }
          },
          {
            $: {
              ref: '3096039517'
            }
          },
          {
            $: {
              ref: '292661268'
            }
          }
        ],
        tag: [
          {
            $: {
              k: 'access',
              v: 'yes'
            }
          },
          {
            $: {
              k: 'bicycle',
              v: 'designated'
            }
          },
          {
            $: {
              k: 'emergency',
              v: 'yes'
            }
          },
          {
            $: {
              k: 'foot',
              v: 'designated'
            }
          },
          {
            $: {
              k: 'goods',
              v: 'delivery'
            }
          },
          {
            $: {
              k: 'highway',
              v: 'pedestrian'
            }
          },
          {
            $: {
              k: 'lit',
              v: 'yes'
            }
          },
          {
            $: {
              k: 'motor_vehicle',
              v: 'destination'
            }
          },
          {
            $: {
              k: 'name',
              v: 'Rue Sainte-Catherine'
            }
          },
          {
            $: {
              k: 'surface',
              v: 'paving_stones'
            }
          }
        ]
      },
      {
        $: {
          id: '26690880',
          visible: 'true',
          version: '13',
          changeset: '52512215',
          timestamp: '2017-09-30T13:31:33Z',
          user: 'FRichard44',
          uid: '2516858'
        },
        nd: [
          {
            $: {
              ref: '292713474'
            }
          },
          {
            $: {
              ref: '1739990720'
            }
          },
          {
            $: {
              ref: '3096039520'
            }
          },
          {
            $: {
              ref: '3096039518'
            }
          },
          {
            $: {
              ref: '292661268'
            }
          },
          {
            $: {
              ref: '3096039516'
            }
          },
          {
            $: {
              ref: '1687898128'
            }
          },
          {
            $: {
              ref: '292713471'
            }
          },
          {
            $: {
              ref: '1557439747'
            }
          }
        ],
        tag: [
          {
            $: {
              k: 'access',
              v: 'yes'
            }
          },
          {
            $: {
              k: 'bicycle',
              v: 'destination'
            }
          },
          {
            $: {
              k: 'foot',
              v: 'designated'
            }
          },
          {
            $: {
              k: 'highway',
              v: 'footway'
            }
          },
          {
            $: {
              k: 'lit',
              v: 'yes'
            }
          },
          {
            $: {
              k: 'motorcycle',
              v: 'no'
            }
          },
          {
            $: {
              k: 'motor_vehicle',
              v: 'no'
            }
          },
          {
            $: {
              k: 'name',
              v: 'Allée Cassard'
            }
          },
          {
            $: {
              k: 'name:br',
              v: 'Alez Cassard'
            }
          },
          {
            $: {
              k: 'name:fr',
              v: 'Allée Cassard'
            }
          },
          {
            $: {
              k: 'source:name:br',
              v: 'ofis publik ar brezhoneg'
            }
          },
          {
            $: {
              k: 'surface',
              v: 'concrete'
            }
          }
        ]
      }
    ],
    relation: [
      {
        $: {
          id: '64031',
          visible: 'true',
          version: '75',
          changeset: '56703093',
          timestamp: '2018-02-26T21:06:41Z',
          user: 'Pj44300',
          uid: '405985'
        },
        member: [
          {
            $: {
              type: 'node',
              ref: '1574613517',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '513266254',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '1574613537',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '513266277',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '1574613532',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '513266329',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '1574627200',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '156560791',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '1574627229',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '156560847',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '1574627238',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '156560812',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '1574627233',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '156560758',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '1574627206',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '156560762',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '1573913312',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '178277314',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '1573909399',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '286690619',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '1573913309',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '156560800',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '1573830585',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '156560795',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '1573830595',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '156560747',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '1573830586',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '156560829',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '1573800311',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '156560613',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '1573645606',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '156560619',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '1573642018',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '156560603',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '1573642014',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'node',
              ref: '296396199',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'node',
              ref: '302674029',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'node',
              ref: '302674023',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '505664856',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '302674015',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '505664877',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '302674011',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '156560685',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '302677573',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '147086029',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '302677676',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '156560760',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '302680659',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '156560715',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '302680657',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '156560611',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '302679787',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '156560643',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '302678221',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '502473105',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '1937874559',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '501456699',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '302678467',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '156560743',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '302678647',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '156560702',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559266',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559219',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559383',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559220',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559421',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559508',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '143898823',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559451',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559425',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559499',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559346',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559238',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559336',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559241',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559375',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559325',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559283',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559279',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559519',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559228',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559549',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559313',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559573',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559269',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559232',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559408',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '143824616',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559399',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559260',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559247',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559230',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '45758425',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '45758426',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559253',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559434',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559282',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '318023906',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559478',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559357',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559492',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559485',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559224',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '194265789',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559264',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '275562087',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559268',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '143767558',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '502473062',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '27584680',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '28434137',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '28434136',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559240',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '502473109',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '27585524',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '183418696',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '27585525',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559322',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559406',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559262',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559486',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '156559328',
              role: ''
            }
          }
        ],
        tag: [
          {
            $: {
              k: 'air_conditioning',
              v: 'limited'
            }
          },
          {
            $: {
              k: 'bicycle',
              v: 'limited'
            }
          },
          {
            $: {
              k: 'by_night',
              v: 'yes'
            }
          },
          {
            $: {
              k: 'colour',
              v: '#00A651'
            }
          },
          {
            $: {
              k: 'from',
              v: 'François Mitterrand'
            }
          },
          {
            $: {
              k: 'name',
              v: '1 François Mitterrand → Beaujoire'
            }
          },
          {
            $: {
              k: 'network',
              v: 'TAN'
            }
          },
          {
            $: {
              k: 'note:en',
              v: 'Please keep nodes and ways in the right order'
            }
          },
          {
            $: {
              k: 'note:fr',
              v: 'Merci de garder les nœuds et les tronçons dans le bon ordre'
            }
          },
          {
            $: {
              k: 'operator',
              v: 'SEMITAN'
            }
          },
          {
            $: {
              k: 'public_transport:version',
              v: '2'
            }
          },
          {
            $: {
              k: 'ref',
              v: '1'
            }
          },
          {
            $: {
              k: 'route',
              v: 'tram'
            }
          },
          {
            $: {
              k: 'supervised',
              v: 'yes'
            }
          },
          {
            $: {
              k: 'text_colour',
              v: '#FFF'
            }
          },
          {
            $: {
              k: 'to',
              v: 'Beaujoire'
            }
          },
          {
            $: {
              k: 'type',
              v: 'route'
            }
          },
          {
            $: {
              k: 'via',
              v: 'Commerce'
            }
          },
          {
            $: {
              k: 'wheelchair',
              v: 'yes'
            }
          }
        ]
      },
      {
        $: {
          id: '64032',
          visible: 'true',
          version: '73',
          changeset: '51866544',
          timestamp: '2017-09-08T23:18:31Z',
          user: 'Virgile1994',
          uid: '362997'
        },
        member: [
          {
            $: {
              type: 'node',
              ref: '292036066',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '516237325',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '290507757',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '516237250',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '290507744',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '516696799',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '290507724',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '158056053',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '290507715',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '158056052',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '290507697',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '517020602',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '1573734002',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '517020592',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '290501129',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '517020584',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '290501108',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '158056051',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '290495632',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '158056050',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '290495591',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '519069657',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '290495580',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '519069642',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '290495562',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '519069628',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '290021045',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '158056033',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '290021048',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '158056047',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '290012688',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '158056046',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '290012677',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '158056023',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '290012672',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '158056021',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '290007595',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '158056017',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '290007594',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '520769004',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '1550758490',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '158056028',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '1550758491',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '521384846',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '1550758489',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '158056019',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '290003107',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '521384817',
              role: 'platform'
            }
          },
          {
            $: {
              type: 'node',
              ref: '1702975501',
              role: 'stop'
            }
          },
          {
            $: {
              type: 'way',
              ref: '158055064',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '158055267',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '158055273',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '158055084',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '158055270',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '158055065',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '332126828',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '143769351',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '288191719',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '158055108',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '141671232',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '285609258',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '141669372',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '26463190',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '29013965',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '29013967',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '141690634',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '141564605',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '158055899',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '158055082',
              role: ''
            }
          },
          {
            $: {
              type: 'way',
              ref: '158055092',
              role: ''
            }
          }
        ],
        tag: [
          {
            $: {
              k: 'air_conditioning',
              v: 'no'
            }
          },
          {
            $: {
              k: 'bicycle',
              v: 'limited'
            }
          },
          {
            $: {
              k: 'by_night',
              v: 'yes'
            }
          },
          {
            $: {
              k: 'colour',
              v: '#EE1C25'
            }
          },
          {
            $: {
              k: 'from',
              v: 'Orvault Grand Val'
            }
          },
          {
            $: {
              k: 'name',
              v: '2 Orvault Grand Val → Gare de Pont-Rousseau'
            }
          },
          {
            $: {
              k: 'network',
              v: 'TAN'
            }
          },
          {
            $: {
              k: 'note:en',
              v: 'Please keep nodes and ways in the right order'
            }
          },
          {
            $: {
              k: 'note:fr',
              v: 'Merci de garder les nœuds et les tronçons dans le bon ordre'
            }
          },
          {
            $: {
              k: 'operator',
              v: 'SEMITAN'
            }
          },
          {
            $: {
              k: 'public_transport:version',
              v: '2'
            }
          },
          {
            $: {
              k: 'ref',
              v: '2'
            }
          },
          {
            $: {
              k: 'route',
              v: 'tram'
            }
          },
          {
            $: {
              k: 'supervised',
              v: 'yes'
            }
          },
          {
            $: {
              k: 'text_colour',
              v: '#FFF'
            }
          },
          {
            $: {
              k: 'to',
              v: 'Gare de Pont Rousseau'
            }
          },
          {
            $: {
              k: 'type',
              v: 'route'
            }
          },
          {
            $: {
              k: 'via',
              v: 'Commerce'
            }
          },
          {
            $: {
              k: 'wheelchair',
              v: 'yes'
            }
          }
        ]
      }
    ]
  }
}));
