var marks = [23,45,56,67,66,44,90]
// reduce
let Total=marks.reduce((sum,mark)=>sum+mark,0)
console.log(Total)

//filter
var Scores=[12,13,14,1,16]

var evenscores=[]
for(i=0;i<=Scores.length;i++)
    {
        if(Scores[i]%2==0)
            {
                evenscores.push(Scores[i])
            }
    }
    console.log(evenscores) //[ 12, 14, 16 ]

//here comes filter
let newscore=Scores.filter(Scores=>Scores%2==0)
console.log(newscore) //[ 12, 14, 16 ]

//MAP
let mappedArray=newscore.map(Scores=>Scores*3)
console.log(mappedArray) //[ 36, 42, 48 ]