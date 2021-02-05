var objects = [
  {name: 'a', tag: ['ice', 'cake']},
  {name: 'b', tag: ['ice', 'cake']},
  {name: 'c', tag: ['ice1', 'cake1']}
]

function getTag(){
  for(let object of objects){
    for(let tag of object.tag){
      if(tag == 'ice'){
        console.log(object)
      }
    }
  }
}
function jsUcfirst(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function getUppercase(string) {
  return string.toUpperCase()

}
console.log(jsUcfirst("phuong thao"))
console.log(getUppercase("phuong thao"))
getTag()
