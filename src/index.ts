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
    readonly name:string ,
    readonly age:number
}

let us:user2={
    name:"aditya",
    age:21
}

// us.name="asd";