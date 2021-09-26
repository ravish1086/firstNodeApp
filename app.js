const express=require('express');
const app=express()
// app.use(express.json())

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

// 3.1: Phonebook backend step1
app.get('/api/persons',(request,response)=>
{
        response.json(persons);
})
app.get('/',(request,response)=>
{
        response.json(persons);
})

PORT = 3000

app.listen(PORT, ()=>
{
    console.log("Server is started")
})

