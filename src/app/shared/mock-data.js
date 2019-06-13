export const resourcesData = [
  {
    name: 'C',
    folders: [
      {
        name: 'work_projects',
        folders: [
          {
            name: 'projects',
            parent: 'work_projects',
            data: [5]
          },
          {
            name: 'ui-core',
            parent: 'work_projects',
            data: [31],
          },
          {
            name: 'presentation',
            parent: 'work_projects',
            data: [16]
          },
          {
            name: 'tests',
            parent: 'work_projects',
            data: [7]
          }
        ]
      },
      {
        name: 'Users',
        folders: [
          {
            name: 'downloads',
            parent: 'Users',
            data: [151]
          },
          {
            name: 'core',
            parent: 'Users',
            data: [31],
          },
          {
            name: 'videos',
            parent: 'Users',
            data: [16]
          },
          {
            name: 'save',
            parent: 'Users',
            data: [7]
          }
        ]
      },
      {
        name: 'Workfiles',
        folders: [
          {
            name: 'js',
            parent: 'Workfiles',
            data: [11]
          },
          {
            name: 'node',
            parent: 'Workfiles',
            data: [31],
          },
          {
            name: 'lessons',
            parent: 'Workfiles',
            data: [16]
          },
          {
            name: 'temp',
            parent: 'Workfiles',
            data: [17]
          }
        ]
      }
    ]
  },
  {
    name: 'E',
    folders: [
      {
        name: 'Movies',
        folders: [
          {
            name: 'Action',
            parent: 'Movies',
            data: [51]
          },
          {
            name: 'Anime',
            parent: 'Movies',
            data: [11]
          },
          {
            name: 'Catoons',
            parent: 'Movies',
            data: [31],
          },
          {
            name: 'Horror',
            parent: 'Movies',
            data: [16]
          }
        ]
      },
      {
        name: 'Music',
        folders: [
          {
            name: 'AC-DC',
            parent: 'Music',
            data: [121]
          },
          {
            name: 'SC',
            parent: 'Music',
            data: [15],
          },
          {
            name: 'Pop',
            parent: 'Music',
            data: [53]
          }
        ]
      }
    ]
  },
  {
    name: 'D',
    folders: [
      {
        name: 'My',
        folders: [
          {
            name: 'Test',
            parent: 'My',
            data: [51]
          },
          {
            name: 'Temp',
            parent: 'My',
            data: [11]
          },
          {
            name: 'Other',
            parent: 'My',
            data: [31],
          },
          {
            name: 'blabla',
            parent: 'My',
            data: [16]
          }
        ]
      },
      {
        name: 'Temp',
        folders: [
          {
            name: 'Test',
            parent: 'Temp',
            data: [1]
          },
          {
            name: 'Temp',
            parent: 'Temp',
            data: [4]
          },
          {
            name: 'Other',
            parent: 'Temp',
            data: [6],
          }
        ],
      },
      {
        name: 'Sharing',
        folders: [
          {
            name: 'Anna',
            parent: 'Sharing',
            data: [41]
          },
          {
            name: 'Temp',
            parent: 'Sharing',
            data: [2]
          },
          {
            name: 'anybody',
            parent: 'Sharing',
            data: [31],
          },
          {
            name: 'music',
            parent: 'Sharing',
            data: [16]
          }
        ]
      },
      {
        name: 'music',
        folders: [
          {
            name: 'Artist 1',
            parent: 'music',
            data: [3]
          },
          {
            name: 'Artist 2',
            parent: 'music',
            data: [11]
          },
          {
            name: 'Artist 54',
            parent: 'music',
            data: [2],
          },
          {
            name: 'Artist 12',
            parent: 'music',
            data: [16]
          }
        ]
      }
    ]
  }
];

const colorByPercent = (value) =>
  value < 50
    ? '#d92c33'
    : value <= 80
    ? '#ff7200'
    : value <= 99
      ? '#ffa310'
      : '#9bc225';

export const treeMapData = [
  {
    id: 'dc_w2k',
    name: 'DC w2k',
    value: 100,
    total: 130,
    color: colorByPercent(90),
  }, {
    id: 'Oracle_1',
    name: 'Oracle 11 Linux PC',
    value: 100,
    total: 100,
    color: colorByPercent(100),
  }, {
    id: 'sbs_2011',
    name: 'SBS_2011',
    value: 50,
    total: 100,
    color: colorByPercent(50),
  }, {
    id: 'ms_2000',
    name: 'MS 2000',
    value: 45,
    total: 100,
    color: colorByPercent(45),
  }, {
    id: 'vm_win7',
    name: 'vm WIN7',
    value: 20,
    total: 100,
    color: colorByPercent(20),
  }, {
    id: 'win10',
    name: 'win 10',
    value: 10,
    total: 100,
    color: colorByPercent(10),
  }
];
