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
### Answer

My Implementation for this algorithm only depends upon the number of vertices and not at all on the number of edges. This is because an Adjacency matrix is built up of rows and columns from the vertices of the graph.And though the number in each entry depicts a relationship for a Edge exsisting or not the size of the array is not affected by these.


I used three for loops in my code. They first two loop over the rows and columns of the Adjacecency Matrix to convert enties into an Adjacency List. Additionally , I also have some conditionals if-statements inside these loops. One of the conditionals uses a function called NoEdges and loops through the given row at the $ x'th $ iteration and checks if that element is all zeros, if so we append an empty list. This gives a time complexity of $V \cdot V$ For the inner loop and the conditional.

 Then we have the if-statement I have to check for an array of size one, which is of constant time. This leaves me now only to consider the for-loops for time compleixty. The first two of which are representing a loop over an array of $V \times V$ and the third checking for zero elements(NoEdges), we then have  of $(V\cdot V)\cdot V=V^3$ Thus our time complexity is, $$\theta(|V^3|).$$ 

```Javascript

function NoEdges(array){
    var Edgesless=false;
    var count=0;
    for(var j=0;j<array.length;j++){
        if(array[j]==0){
            count++
        }
    }
    if(count>=array.length){
        Edgesless=true
    }
    return Edgesless
}

function convertToAdjList(adjmatrix){
    var adjList=[]
    if(adjmatrix.length==1){
        adjList=[[adjmatrix[0]]]
    }
    for(var x=0;x<adjmatrix.length;x++){
        var pushlist=[]
        for(y=0;y<adjmatrix[x].length;y++){
            if(adjmatrix[x][y]==1){
                pushlist.push(y)
                adjList[x]=pushlist
            }
            else if(NoEdges(adjmatrix[x])==true){
                adjList[x]=[]
            }
        }

    }
    return adjList
}
```


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
