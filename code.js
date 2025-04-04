function convertToAdjList(adjMatrix) {
    var AdjList={};
    if(adjMatrix.length<1||adjMatrix[0][0]==null){
        // AdjList[0]=[]
        return AdjList;
    }
    for(var a=0; a<adjMatrix.length; a++){
        var pushlist=[];
        var count=0;
        for(var b=0; b<adjMatrix.length; b++){
            if(adjMatrix[a][b]===1&&adjMatrix.length>1){
                pushlist.push(b+1)
                AdjList[a+1]=pushlist
                count++;
            }
            if(adjMatrix[a][adjMatrix.length-1]==0 && count==0){
                AdjList[a+1]=[]
            }
            else{
                AdjList[a]=[adjMatrix[a][b]]
            }
        }
    }
    return AdjList;
}
