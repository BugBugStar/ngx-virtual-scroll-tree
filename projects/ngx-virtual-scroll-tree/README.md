# ngx-virtual-scroll-tree

Virtual Scroll Tree display a tree via a vitual scroll list. Compared with normal tree, virtual-scroll-tree is effective because the number of items displayed is fixed.

## Usage
normal virtual scroll tree
```
  <ngx-virtual-scroll-tree class="file-tree" [treeData]="treeData">
  </ngx-virtual-scroll-tree>
```
make sure you set the width and height for the virtual scroll tree.
```
.file-tree {
    display: inline-block;
    width: 300px;
    height: 300px;
}
```

If you need to DIY the icon and the label by template
```
<div>
  <ngx-virtual-scroll-tree class="file-tree" [treeData]="treeData" [iconParentOpen]="iconParentOpen"
    [iconParentClose]="iconParentClose" [iconLeaf]="iconLeaf" [labelTemplate]="labelTemplate">
  </ngx-virtual-scroll-tree>
```

## API
|Attribute|Type|Default|Description|
|---|---|---|---|
|treeData|any[]||tree data need to display|
|lastTreeData|any[]||Last tree data need to display. It is used for keeping the status of nodes of the tree |
|intendWidth|number|16|the pixel of the indent width|
|iconParentOpen|TemplateRef<any>||the opened folder icon|
|iconParentClose|TemplateRef<any>||the closed folder icon|
|iconLeaf|TemplateRef<any>||the leaf icon|
|labelTemplate|TemplateRef<any>||the label template. You can decide what to show in the label|
|filter|string||filter the items whose label includes the filter|
|onclickLabel|EventEmitter<ITreeItem>||the event is fired every time the label is clicked |
|ondblclickLabel|EventEmitter<ITreeItem>||the event is fired every time the label is double clicked|
|ontoggleNode|EventEmitter<ITreeItem>||the event is fired every time the folder icon is clicked|

## Build

Run `ng build ngx-virtual-scroll-tree` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ngx-virtual-scroll-tree`, go to the dist folder `cd dist/ngx-virtual-scroll-tree` and run `npm publish`.

## Running unit tests

Run `ng test ngx-virtual-scroll-tree` to execute the unit tests via [Karma](https://karma-runner.github.io).