function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap;

    for (var i = 0; i < numElements; ++i) {
        this.dataStore[i] = i;
    }
}

function setData() {
    for (var i = 0; i < this.numElements; ++i) {
        this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
    }
}

function clear() {
    for (var i = 0; i < this.dataStore.length; ++i) {
        this.dataStore[i] = 0;
    }
}

function insert(element) {
    this.dataStore[this.pos++] = element;
}

function toString() {
    var restr = '';
    for (var i = 0; i < this.dataStore.length; ++i) {

    }
}

function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function selectionSort(){
    var min,temp;
    for(var outer=0;outer<=this.dataStore.length-2;++outer){
        min=outer;
        for(var inner=outer+1;inner<=this.dataStore.length-1;++inner){
            if(this.dataStore[inner]<this.dataStore[min]){
                min=inner;
            }
            swap(this.dataStore.outer,min);
        }
    }
}