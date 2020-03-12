import { Component, OnInit, Input, TemplateRef, Output, EventEmitter, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { VirtualScrollerComponent } from 'ngx-virtual-scroller';
import { ITreeItem, TreeItem } from './ITreeItem';
import * as _ from 'lodash';

@Component({
  selector: 'ngx-virtual-scroll-tree',
  templateUrl: './ngx-virtual-scroll-tree.component.html',
  styleUrls: ['./ngx-virtual-scroll-tree.component.css' ],
})
export class VirtualScrollTreeComponent implements OnInit, OnChanges {
  @Input() treeData: ITreeItem[];
  @Input() lastTreeData: ITreeItem[];
  @Input() intendWidth = 16;   // unit: px
  @Input() iconParentOpen: TemplateRef<any>;
  @Input() iconParentClose: TemplateRef<any>;
  @Input() iconLeaf: TemplateRef<any>;
  @Input() iconTemplate: TemplateRef<any>;
  @Input() labelTemplate: TemplateRef<any>;
  @Input() filter: string;
  @Output() onclickLabel: EventEmitter<ITreeItem> = new EventEmitter<ITreeItem>();
  @Output() ondblclickLabel: EventEmitter<ITreeItem> = new EventEmitter<ITreeItem>();
  @Output() ontoggleNode: EventEmitter<ITreeItem> = new EventEmitter<ITreeItem>();
  @ViewChild(VirtualScrollerComponent, {static: true})
    private virtualScroller: VirtualScrollerComponent;
  filtedItems: ITreeItem[];
  items: ITreeItem[];
  private lastSeletedItem: ITreeItem;
  private treeItemData: ITreeItem[];


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.treeData) {
      this.treeItemData = _.cloneDeep(this.treeData);
      this.initTreeData(this.treeItemData);
    }
    this.updateItems();
  }

  private initTreeData(treeItemList: any[]) {
    for (let i = 0; i < treeItemList.length; i++) {
      treeItemList[i] = new TreeItem(treeItemList[i]);
      if (treeItemList[i].children) {
        this.initTreeData(treeItemList[i].children);
      }
    }
  }

  private getItemsByTreeData(treeData) {
    let items: ITreeItem[] = [];
    for (const treeItem of treeData) {
      items = items.concat(this.getTreeItemListByTreeItem(treeItem));
    }
    return items;
  }

  private getTreeItemListByTreeItem(treeItem: ITreeItem): ITreeItem[] {
    let treeItemList: ITreeItem[] = [treeItem instanceof TreeItem ? treeItem : new TreeItem(treeItem)];
    if (treeItem.children) {
      for (let i = 0; i < treeItem.children.length; i++) {
        const child = new TreeItem(treeItem.children[i]);
        treeItemList[0].children[i] = child;
        child.parent = treeItemList[0];
        treeItemList = treeItemList.concat(this.getTreeItemListByTreeItem(child));
      }
    }
    return treeItemList;
  }

  private updateItems() {
    this.items = this.getItemsByTreeData(this.treeItemData);
    this.removeNoLeafNode(this.items);
  }

  private removeNoLeafNode(items: ITreeItem[]) {
    for (let i = 0; i < items.length; ) {
      const item = items[i];
      if (item.children && item.children.length === 1 && item.parent) {
        item.parent.label += ' / ' + item.label;
        item.parent.children = item.children;
        item.children.forEach(child => child.parent = item.parent);
        items.splice(i, 1);
      } else {
        i++;
      }
    }
  }

  _onclickLabel(item) {
    if (this.lastSeletedItem) {
      this.lastSeletedItem.isSelected = false;
    }
    item.isSelected = true;
    this.lastSeletedItem = item;
    this.onclickLabel.emit(item);
  }

  _ondblclickLabel(item) {
    this.ondblclickLabel.emit(item);
  }

  _ontoggleNode(item) {
    item.isOpen = item.isOpen === false ? true : false;
    this.updateItems();
    this.ontoggleNode.emit(item);
  }

}
