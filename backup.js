const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json())

var courses = [{'id':1,'name':'Prajyot'},
    {'id':2,'name':'Jerome'},
    {'id':3,'name':'Srikaran'},
    {'id':4,'name':'John'},
    {'id':5,'name':'Test'}];

console.log('test 111');
app.get('/',(req,res)=>{
    // console.log('testt');
    res.send('hello world 444 turu turu')
});


app.get('/api/courses',(req,res)=>{
    res.send(courses)
})

app.get('/api/courses/:id/:name',(req,res)=>{
    res.send(req.params);
})

app.post('/api/courses/',(req,res)=>{
    const course = {"id":req.body.id,"name":req.body.name}

    courses.push(course);

    res.send(courses);
    res.status(200)
})

app.listen(3008);

// app.post();
// app.put();
// app.delete();