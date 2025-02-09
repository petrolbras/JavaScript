const cursos=['HTML', 'CSS', 'javascript', 'PHP', 'React']
let c = cursos.map((el,i)=>{
   return "<div>" + el + "</div>"
})

console.log(c)