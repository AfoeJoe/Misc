//return the first character that repeats 
const input = [1,2,3,6,4,5]

function firstRecurChar(arr){
    const cache = {};
    for (let i = 0;i < arr.length;i++)
    {
        if (cache[arr[i]] == true)
            return (arr[i])
        cache[arr[i]] = true
    }
}

console.log(firstRecurChar(input))