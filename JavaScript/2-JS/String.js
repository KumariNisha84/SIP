// Ways to create string
let a = "Nisha";
console.log(a);

let b = new String("Shivi");
console.log(b)

let e = 'Hie ! Everyone'
console.log(e)

let f = `Welcome`
console.log(f)

const c = ("Khusboo ");
console.log(c.length);
//ways to find characters using index
console.log(c[5])
console.log(c.charAt(3))

const d = "is small👨"
console.log(c + d);

//Substring
console.log(c.substring(4,7)) // only include till 6

//Trim
let g = `        White sauce Pasta     `
console.log(g)
console.log(g.trim()); // removes spaces from front and back
console.log(g.trimStart()); // removes space from first
console.log(g.trimEnd());  // removes space from end
