function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (var i = 0; i < this.vertices; ++i) {

    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.pathTo=pathTo;
    this.hasPathTo=hasPathTo;
}

function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
}

function showGraph() {
    for (var i = 0; i < this.vertices; ++i) {
        console.log(i + '->');
        for (var j = 0; j < this.vertices; ++j) {
            if (this.adj[i][j] != undefined) {
                console.log(this.adj[i][j] + ' ');
            }
        }
    }
}

function dfs(v) {
    this.marked[v] = true;
    if (this.adj[v] != undefined) {
        console.log('Visited vertex: ' + v);
    }
    for (var w in this.adj[v]) {
        if (!this.marked[w]) {
            this.dfs(w);
        }
    }
}

function bfs(s) {
    var queue = [];
    this.marked[s] = true;
    queue.push(s); //添加到队尾
    while (queue.length > 0) {
        var v = queue.shift(); //从队首移除
        if (v == undefined) {
            console.log('Visited vertex:' + v);
        }
        for (var w in this.adj[v]) {
            if (!this.marked[w]) {
                this.edgeTo[w] = v;
                this.marked[w] = true;
                queue.push(w);
            }
        }
    }
}

function pathTo(v){
    var source=0;
    if(!this.hasPathTo(v)){
        return undefined;
    }
    var path=[];
    for(var i=v;i!=source;i=this.edgeTo[i]){
        path.push(i);
    }
    path.push(s);
    return path;
}

function hasPathTo(v){
    return this.marked[v];
}

function topSort(){
    var stack=[];
    var visited=[];
    for(var i=0;i<this.vertices;i++){
        visited[i]=false;
    }
    for(var i=0;i<this.vertices;i++){
        if(visited[i]==false){
            this.topSortHelper(i,visited,stack);
        }
    }
    for(var i=0;i<stack.length;i++){
        if(stack[i]!=undefined && stack[i]!=false){
            console.log(this.vertexList[stack[i]]);
        }
    }
}

function topSortHelper(v,visited,stack){
    visited[v]=true;
    for(var w in this.adj[v]){
        if(!visited[w]){
            this.topSortHelper(visited[w],visited,stack);
        }
    }
    stack.push(v);
}