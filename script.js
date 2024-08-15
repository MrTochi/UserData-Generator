/*let makeB=document.getElementById(`click`)
let cancelB=document.getElementById(`cancel`)
let text=document.getElementById(`text`)

makeB.addEventListener(`click`,validateOrder)

function validateOrder(){
   return new Promise(function(resolve,reject){
      let timeID=setTimeout(function(){
         resolve(`order Placed`)
      },3000)

      cancelB.removeEventListener(`click`,cancelHandler)

      function cancelHandler(){
         clearTimeout(timeID)
         reject(`Order Cancelled`)
      }

      cancelB.addEventListener(`click`,cancelHandler)
   }).then(function(resolveMessage){
      text.textContent=resolveMessage
   }).catch(function(rejectMessage){
      text.textContent=rejectMessage
      text.style.color=`red`
   })
}
let timer=document.getElementById(`timer`)
let url="https://api.github.com/organizations"
fetch(url ).then(function(response){
return response.json()
}).then(function(newResponse){


})

let newUrl=`https://randomuser.me/api/`
fetch(newUrl).then(function(response){
   return response.json()
}).then(function(newResponse){
timer.append(newResponse.results[0].dob.age)

})*/



let username=document.getElementById(`username`)
let userage=document.getElementById(`userage`)
let usecountry=document.getElementById(`country`)


let button=document.getElementById(`generate`)

let userimage=document.getElementById(`imageBox`)
console.log(userimage);




button.addEventListener(`click`,generate)


function generate(){
   let newUrl=`https://randomuser.me/api/`
fetch(newUrl).then(function(response){
   return response.json()
}).then(function(newResponse){
appending(newResponse)



})
}

function appending(data){
console.log(data);

let nameStore=data.results[0].name.first
let imageStore=data.results[0].picture.large
let ageStore=data.results[0].dob.age
let otherName=data.results[0].name.last
let title=data.results[0].name.title
let countryStore=data.results[0].location.country
console.log(title,otherName);


userage.textContent = '';
username.textContent = '';
userimage.innerHTML = ''; 
usecountry.innerHTML = ''; 

userage.textContent=ageStore
username.textContent=`${title} ${nameStore} ${otherName} `
let myImage=document.createElement(`img`)
myImage.setAttribute(`src`,imageStore)
userimage.append(myImage)
usecountry.textContent=countryStore

}