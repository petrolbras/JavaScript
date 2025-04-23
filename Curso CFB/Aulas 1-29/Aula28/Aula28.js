const cursos=['HTML', 'CSS', 'javascript', 'PHP', 'React']
cursos.map((el,i) =>{
   console.log("Curso: " + el + " - Posição do curso: " + i)
})

const cursos1=['HTML', 'CSS', 'javascript', 'PHP', 'React']
let c = cursos1.map((el,i) =>{
   return i
})

console.log(c)