function NoEdges(array) {
    var Edgesless = false;
    var count = 0;
    for (var j = 0; j < array.length; j++) {
        if (array[j] == 0) {
            count++
        }
    }
    if (count >= array.length) {
        Edgesless = true
    }
    return Edgesless
}


function convertToAdjList2(adjmatrix) {
    var adjList = []
    if (array.length == 1) {
        adjList = [[adjmatrix[0]]]
    }
    for (var x = 0; x < adjmatrix.length; x++) {
        if (NoEdges(adjmatrix[x]) == true) {
            adjList[x] = []
        }
        var pushlist = []
        for (y = 0; y < adjmatrix.length; y++) {
            if (adjmatrix[x][y] != 0) {
                pushlist.push(y)
                adjList[x] = pushlist
            }
        }

    }
    return adjList
}
