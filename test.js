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
getTag()
