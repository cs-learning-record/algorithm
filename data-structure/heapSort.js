/**
 * 堆排序可以说是一种利用堆的概念来排序的选择排序。
 * 
 * 堆排序（Heapsort）是指利用堆这种数据结构所设计的一种排序算法。堆积是一个近似完全二叉树的结构，并同时满足堆积的性质：即子结点的键值或索引总是小于（或者大于）它的父节点。
 * 
 */

function heapSort(array) {
    console.time('堆排序耗时');
    if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
        // 建堆
        var heapSize = array.length,
            temp;
        for (var i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
            heapify(array, i, heapSize);
        }

        // 堆排序
        for (var j = heapSize - 1; j >= 1; j--) {
            temp = array[0];
            array[0]=array[j];
            array[j]=temp;
            heapify(array,0,--heapSize);
        }
        console.timeEnd('堆排序耗时');
        return array;
    }else{
        return 'array is not an Array';
    }
}

function heapify(arr,x,len){
    if(Object.prototype.toString.call(arr).slice(8,-1)==='Array'  && typeof x === 'number'){
        var l=2*x+1,r=2*x+2,largest=x,temp;
        if(l<len && arr[l]>arr[largest]){
            largest=l;
        }
        if(r<len && arr[r]>arr[largest]){
            largest=r;
        }
        if(largest!=x){
            temp=arr[x];
            arr[x]=arr[largest];
            arr[largest]=temp;
            heapify(arr,largest,len);
        }
    }else{
        return 'arr is not an Array or x is not a number!';
    }
}