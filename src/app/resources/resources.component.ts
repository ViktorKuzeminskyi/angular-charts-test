import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  title = 'Protected resource';

  private disks = [
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

  constructor() { }

  ngOnInit() {
  }
}
