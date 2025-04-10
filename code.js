function convertToAdjList(adjMatrix) {
        var AdjList=[];
        for(var a=0; a<adjMatrix.length; a++){
            var pushlist=[];
            var count=0;
            for(var b=0; b<adjMatrix.length; b++){
                if(adjMatrix[a][b]===1&&adjMatrix.length>1){
                    pushlist.push(b)
                    AdjList[a]=pushlist
                    count++;
                }
                else if((adjMatrix[a][adjMatrix.length-1]==0) && (count==0)){
                    AdjList[a]=[]
                }
                else{
                    AdjList=[[adjMatrix[0]]]
                }
            }
        }
        return  JSON.stringify(AdjList)
    }
