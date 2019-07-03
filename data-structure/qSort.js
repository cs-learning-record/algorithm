/**
 * 快速排序的基本思想：通过一趟排序将待排记录分隔成独立的两部分，其中一部分记录的关键字均比另一部分的关键字小，则可分别对这两部分记录继续进行排序，以达到整个序列有序。
 */

 var quickSort2=function(arr){
     console.time('快速排序耗时');
     if(arr.length<=1){return arr;}
     var pivotIndex=Math.floor(arr.length/2);
     var pivot=arr.splice(pivotIndex,1)[0];
     var left=[];
     var right=[];
     for(var i=0;i<arr.length;i++){
         if(arr[i]<pivot){
             left.push(arr[i]);
         }else{
             right.push(arr[i]);
         }
     }
     console.timeEnd('2，快速排序耗时');
     return quickSort2(left).concat([pivot],quickSort2(right));
 }