export interface ITreeItem {
    id: number;
    label: string;
    parent?: ITreeItem;
    children?: ITreeItem[];
    indent?: number;
    isVisible?: () => boolean;
    isOpen?: boolean;
    isSelected?: boolean;
    isHide?: boolean;
    isMatch?: boolean;
}

export class TreeItem implements ITreeItem {
    id: number;
    label: string;
    parent?: ITreeItem;
    children?: ITreeItem[];
    indent: number;
    isVisible: () => boolean;
    isOpen?: boolean;
    isSelected?: boolean;
    isHide?: boolean;
    isMatch?: boolean;

    constructor(label: string) {
        this.label = label;
        this.isOpen = true;
    }
}