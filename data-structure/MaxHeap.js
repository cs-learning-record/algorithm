/**
 * 堆通常是一个可以被看做一棵树的数组对象。
 * 
 * 任意节点小于（或大于）它的所有子节点
堆总是一棵完全树。即除了最底层，其他层的节点都被元素填满，且最底层从左到右填入。

 */
class MaxHeap {
    constructor() {
        this.heap = [];
    }
    size() {
        return this.heap.length;
    }
    empty() {
        return this.size() == 0;
    }
    add(item) {
        this.heap.push(item);
        this._shiftUp(this.size() - 1);
    }
    removeMax() {
        this._shiftDown(0);
    }
    setParentIndex(k) {
        return parseInt((k - 1) / 2);
    }
    getLeftIndex(x) {
        return k * 2 + 1;
    }
    _shiftUp(k) {
        //如果当前节点比父节点大，就交换
        while(this.heap[k]>this.heap[this.getParentIndex(k)]){
            this._swap(k,this.getParentIndex(k));
            //将索引变成节点
            k=this.getParentIndex(k);
        }
    }
    _shiftDown(k) {
        //交换首位并删除末尾
        this._swap(k, this.size() - 1);
        this.heap.splice(this.size() - 1, 1);
        //判断节点是否有左孩子，因为二叉堆的我，有右必有左
        while (this.getLeftIndex(k) < this.size()) {
            let j = this.getLeftIndex(k);
            // 判断是否有右孩子，并且右孩子是否大于左孩子
            if (j + 1 < this.size() && this.heap[j + 1] > this.heap[j]) j++;
            //  判断父节点是否已经比子节点都大
            if (this.heap[k] >= this.heap[j]) break;
            this._swap(k, j);
            k = j;
        }
    }
    _swap(left, right) {
        let rightValue = this.heap[right];
        this.heap[right] = this.heap[left];
        this.heap[left] = rightValue;
    }
}