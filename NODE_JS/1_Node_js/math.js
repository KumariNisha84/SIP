function add(a,b){
    return a + b;
}

function sub(a,b){
    return a - b;
}

const multiply = (a,b) =>{
    return a*b;
}

const divide = (a,b) =>{
    return a/b;
}
// module.exports = add;
// module.exports = sub;


//ways to export multiple functions
export{add,sub,multiply,divide};