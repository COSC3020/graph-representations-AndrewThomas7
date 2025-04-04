function convertToAdjList(adjMatrix) {
    var AdjList={};
    if(adjMatrix.length<=1){
        return AdjList[1]=adjMatrix[0]
    }
    for(var a=0; a<adjMatrix.length; a++){
        var pushlist=[];
        var count=0;
        for(var b=0; b<adjMatrix.length; b++){
            // var Node= adjMatrix[a];
            // var connections =[[a+1][b+1]]
            // Object.assign(adjMatrix,{Node,connections})
            if(adjMatrix[a][b]==1){
                pushlist.push(b+1)
                AdjList[a+1]=pushlist
                count++;
            }
            if(adjMatrix[a][adjMatrix.length-1]==0 && count==0){
                AdjList[a+1]=[]
            }
        }
    }
    return AdjList;
}
