import { Component, OnInit, Input, TemplateRef, Output, EventEmitter, ViewChild, OnChanges } from '@angular/core';
import { VirtualScrollerComponent } from 'ngx-virtual-scroller';
import { ITreeItem } from './ITreeItem';

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


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.items = this.getItemsByTreeData(this.treeData);
  }

  private getItemsByTreeData(treeData) {
    let items: ITreeItem[] = [];
    for (const treeItem of treeData) {
      items = items.concat(this.getTreeItemListByTreeItem(treeItem));
    }
    return items;
  }

  private getTreeItemListByTreeItem(treeItem: ITreeItem): ITreeItem[] {
    let treeItemList: ITreeItem[] = [treeItem];
    if (treeItem.children && treeItem.children.length > 0 &&
      !(treeItem.isOpen === false)) {
      for (const child of treeItem.children) {
        child.parent = treeItem;
        child.indent = treeItem.indent ? treeItem.indent + 1 : 1;
        treeItemList = treeItemList.concat(this.getTreeItemListByTreeItem(child));
      }
    }
    return treeItemList;
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
    this.items = this.getItemsByTreeData(this.treeData);
    this.ontoggleNode.emit(item);
  }

}
