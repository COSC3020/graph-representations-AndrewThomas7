# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Sources

“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”-Andrew Thomas

Source #1-https://launchschool.com/books/advanced_dsa/read/representing_graphs_adjacency_list

Source #2-  Chat GPT Querey-"function convertToAdjList(adjMatrix) { var AdjList={}; if(adjMatrix.length<=1){ // AdjList[0]=[] return ; } for(var a=0; a<adjMatrix.length; a++){ var pushlist=[]; var count=0; for(var b=0; b<adjMatrix.length; b++){ // var Node= adjMatrix[a]; // var connections =[[a+1][b+1]] // Object.assign(adjMatrix,{Node,connections}) if(adjMatrix[a][b]==1){ pushlist.push(b+1) AdjList[a+1]=pushlist count++; } if(adjMatrix[a][adjMatrix.length-1]==0 && count==0){ AdjList[a+1]=[] } } } This is my code for converting adjacency matrices to lists, and I cant get it to work for an empty matrix, how can I fix this?" Don't give me code

Source #3-https://github.com/COSC3020/graph-representations-DJReflexive/blob/main/code.js

Source #4-https://www.prepbytes.com/blog/heap/heap-algorithm-for-generating-permutations/



## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.


## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.

$$\textcolor{red}{\text{Implemenation for converting an Adjacecny List to an Adjacency Matrix}}$$
```Javascript
function PushAt2D(array,IndexOuter,IndexInner){
        var returnarr=[...array[IndexOuter].slice(0,IndexInner),1,...array[IndexOuter].slice(IndexInner+1)]
        array=[...array.slice(0,IndexOuter),returnarr,...array.slice(IndexOuter+1)];
    return array
}
function convertToAdjMatrix(AdjList){
    var AdjMatrix=[];
    for(x=0;x<AdjList.length;x++){
        var PushListZero=[]
        for(y=0;y<AdjList.length;y++){
            PushListZero.push(0)
            AdjMatrix[x]=PushListZero
        }
    }
    for(j=0;j<AdjList.length;j++){
        for(k=0;k<AdjList[j].length;k++){
         AdjMatrix= PushAt2D(AdjMatrix,j,AdjList[j][k])
    }
}
return AdjMatrix
}
```

## Run Time Analysis(Bonus)
