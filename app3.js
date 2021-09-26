const express = require('express')
const app=express()

app.use(express.json())
PORT = 3000

var persons=[
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

//   3.3: Phonebook backend step3

app.get('/api/persons/:id',(request,response)=>
{
    let id = Number(request.params.id);
    let person = persons.find(person => person.id ===id )

    if(person)
    {
        response.json(person);
    }
    else{
        response.status(404).send("The requested resource is not available on the server");
    }
})


// 3.4: Phonebook backend step4
app.delete('/api/persons/:id',(request,response)=>
{
        let id = Number(request.params.id);
    let personss = persons.filter(person => person.id !==id)

    if(persons.length > personss.length)
    {
        response.json(personss);

    }
    else{
        response.status(400).send("The request cannot be processed. Resource not available");
    }

})

// 3.5: Phonebook backend step5
// app.post('/api/persons',(request,response)=>
// {
//         id=5
//         console.log(id);
//   let reqbody=request.body;
//   // console.log(reqbody , request.body)
//     //let personss = persons.filter(person => person.id !==id)
//   let person= {
//     id:id,
//     name:reqbody.name,
//     number:reqbody.number
    
//   }
//   persons.push(person);
//   response.json(persons);

// })

// 3.6: Phonebook backend step6
app.post('/api/persons',(request,response)=>
{
        id=5
       // console.log(id);
  let reqbody=request.body;
  console.log(reqbody.name )
  if( !reqbody.name )
  {
    response.status(400).send(
      {
        error:'Bad Request'
      }
    )
  }
  else if((persons.filter(per => per.name ==reqbody.name)).length > 0)
    {
      console.log(persons.filter(per => per.name ==reqbody.name))
      response.status(400).send({
        error:'The name must be unique'
      })
    
  }
  else{
    let person= {
      id:id,
      name:reqbody.name,
      number:reqbody.number
      
    }
    persons.push(person);
    response.json(persons);
  
  }
  // console.log(reqbody , request.body)
    //let personss = persons.filter(person => person.id !==id)

})



app.listen(PORT);

