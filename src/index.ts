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
// It allows you to create a new type by selecting only specific properties from an existing type
interface person{
    name :string ,
    age:number ,
    addresh:string ,
    phone:number
}
type updateprops=Pick<person,'name'|'age'>

function update(props:updateprops)
{
    
}