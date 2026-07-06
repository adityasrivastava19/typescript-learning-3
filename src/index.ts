interface user {
    name :string ,
    age:number
}

function sumOfAge(user1:user,user2:user):number
{
 return user1.age+user2.age
}

let age=sumOfAge({name:"aditya",age:21},{name:"ayush", age:18})
console.log(age)
//Pick is one of the most commonly used TypeScript Utility Types. 
// It allows you to create a new type by selecting only specific properties from an existing type. 
// interface also 
interface person{
    name :string ,
    age:number ,
    addresh:string ,
    phone:number
}
type updateprops=Pick<person,'name'|'age'>

function update(props:updateprops)
{
    console.log(`name: ${props.name},age: ${props.age}`)
}

update({name:"aditya",age:21})

//Partial is another built-in Utility Type in TypeScript.

//It makes all properties of a type optional.
type propsoptional=Partial<person>
function updateoptional(props:propsoptional)
{
    console.log(`name: ${props.name},age: ${props.age}`+"  optional calling ")
}

updateoptional({name:"aditya"})
//"readonly" in TypeScript is used to make a property read-only.
// Once a value is assigned (usually in the constructor or during initialization), 
// it cannot be changed.
type user2={
     name:string ,
     age:number
}

let us:Readonly<user2>={
    name:"aditya",
    age:21
}

// us.name="asd";
//........................................................................................................

// Record: A TypeScript utility type for storing fixed key-value pairs with known key types.
type  userrecord =Record<string, {name:string,age:number}>

const recoredd:userrecord={
    "aditya":{name:"aditya",age:21},
    "kali":{name:"kishan",age:21}
}
// Map: A JavaScript collection for storing dynamic key-value pairs, 
// where keys can be of any type (including objects).
const usermap=new Map()
usermap.set("aditya",{name:"aditya",age:21})
usermap.set("kali",{name:"kishan",age:21})
let userfrommap=usermap.get("aditya")
console.log(userfrommap?.name)
