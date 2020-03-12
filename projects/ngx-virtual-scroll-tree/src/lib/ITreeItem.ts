export interface ITreeItem {
    id: number;
    label: string;
    parent?: ITreeItem;
    children?: ITreeItem[];
    indent?: number;
    isOpen?: boolean;
    isSelected?: boolean;
    isHide?: boolean;
    isMatch?: boolean;
    isVisible?: () => boolean;
    getIndent?(): number;
}

export class TreeItem implements ITreeItem {
    static ID_SEED = 1;
    id: number;
    label: string;
    parent?: ITreeItem;
    children?: ITreeItem[];
    indent: number;
    isOpen?: boolean;
    isSelected?: boolean;
    isHide?: boolean;
    isMatch?: boolean;
    isVisible: () => boolean = () => {
        return (!this.parent || this.parent.isVisible() && this.parent.isOpen);
    }

    constructor(value: string | ITreeItem | any) {
        if (typeof value === 'string') {
            this.id = TreeItem.ID_SEED++;
            this.label = value;
            this.isOpen = true;
        } else if (value instanceof TreeItem) {
            this.id = value.id;
            this.label = value.label;
            this.children = value.children;
            this.parent = value.parent;
            this.isOpen = value.isOpen === false ? false : true;
        } else {
            this.id = TreeItem.ID_SEED++;
            this.label = value.label;
            this.children = value.children;
            this.parent = value.parent;
            this.isOpen = value.isOpen === false ? false : true;
        }
    }

    getIndent(): number {
        return this.parent ? this.parent.getIndent() + 1 : 0;
    }
}
