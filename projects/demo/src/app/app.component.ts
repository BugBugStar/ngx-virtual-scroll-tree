import { Component } from '@angular/core';
import { ITreeItem } from 'ngx-virtual-scroll-tree/lib/ITreeItem';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  treeData: ITreeItem[];
  treeData2 = [
    {
      label: 'first',
      children: [
        {
          label: 'first1',
          children: [
            {
              label: 'first2',
              children: [
                {
                  label: 'first3',
                },
              ]
            },
          ]
        },
      ]
    },
    {
      label: 'second',
      children: [
        {
          label: 'second2',
          children: [
            {
              label: 'second2',
            },
            {
              label: 'second3',
            },
          ]
        },
        {
          id: 22,
          label: 'second3',
        },
      ]
    },
  ];

  constructor() {
    const firstLayer: ITreeItem[] = [];
    for (let i = 0; i < 5; i++) {
      firstLayer.push({
        id: i,
        label: i + ' element',
      });
    }
    this.treeData = _.cloneDeep(firstLayer);
    this.treeData.forEach(node => {
      node.children = _.cloneDeep(firstLayer);
      node.children.forEach(child => {
        child.children = _.cloneDeep(firstLayer);
      });
    });
  }
}
