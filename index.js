const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

var cors = require('cors')

app.use(express.json())
app.use(cors())

var apartments_1 = [
    {
        'id':1,
        'prop_title':'Two floor villa with ocean view',
        'prop_loc':'Jumeira lake towers',
        'per_night':'$117',
        'review_stars':4,
        'total_reviews':40,
        'image_name':'image4.jpg'
    },{
        'id':2,
        'prop_title':'Two floor villa with ocean view',
        'prop_loc':'Jumeira lake towers',
        'per_night':'$117',
        'review_stars':4,
        'total_reviews':45,
        'image_name':'image3.jpg'
    },{
        'id':3,
        'prop_title':'Two floor villa with ocean view',
        'prop_loc':'Jumeira lake towers',
        'per_night':'$117',
        'review_stars':3,
        'total_reviews':36,
        'image_name':'image2.jpg'
    },{
        'id':4,
        'prop_title':'Two floor villa with ocean view',
        'prop_loc':'Jumeira lake towers',
        'per_night':'$117',
        'review_stars':5,
        'total_reviews':41,
        'image_name':'image3.jpg'
    },{
        'id':5,
        'prop_title':'Two floor villa with ocean view',
        'prop_loc':'Jumeira lake towers',
        'per_night':'$117',
        'review_stars':2,
        'total_reviews':39,
        'image_name':'image4.jpg'
    },{
        'id':6,
        'prop_title':'Two floor villa with ocean view',
        'prop_loc':'Jumeira lake towers',
        'per_night':'$117',
        'review_stars':1,
        'total_reviews':39,
        'image_name':'image3.jpg'
    },{
        'id':7,
        'prop_title':'Two floor villa with ocean view',
        'prop_loc':'Jumeira lake towers',
        'per_night':'$117',
        'review_stars':3,
        'total_reviews':39,
        'image_name':'image2.jpg'
    },{
        'id':8,
        'prop_title':'Two floor villa with ocean view',
        'prop_loc':'Jumeira lake towers',
        'per_night':'$117',
        'review_stars':3,
        'total_reviews':39,
        'image_name':'image3.jpg'
    },{
        'id':9,
        'prop_title':'Two floor villa with ocean view',
        'prop_loc':'Jumeira lake towers',
        'per_night':'$117',
        'review_stars':3,
        'total_reviews':39,
        'image_name':'image3.jpg'
    },{
        'id':10,
        'prop_title':'Two floor villa with ocean view',
        'prop_loc':'Jumeira lake towers',
        'per_night':'$117',
        'review_stars':3,
        'total_reviews':39,
        'image_name':'image2.jpg'
    },{
        'id':11,
        'prop_title':'Two floor villa with ocean view',
        'prop_loc':'Jumeira lake towers',
        'per_night':'$117',
        'review_stars':3,
        'total_reviews':39,
        'image_name':'image3.jpg'
    },
];

var apartments_2 = [
    {
        'id':1,
        'prop_title':'Two floor villa with ocean view',
        'prop_loc':'Jumeira lake towers',
        'per_night':'$117',
        'review_stars':3,
        'total_reviews':39,
        'image_name':'image2.jpg'
    },{
        'id':2,
        'prop_title':'Two floor villa with ocean view',
        'prop_loc':'Jumeira lake towers',
        'per_night':'$117',
        'review_stars':3,
        'total_reviews':39,
        'image_name':'image3.jpg'
    },{
        'id':3,
        'prop_title':'Two floor villa with ocean view',
        'prop_loc':'Jumeira lake towers',
        'per_night':'$117',
        'review_stars':3,
        'total_reviews':39,
        'image_name':'image3.jpg'
    },{
        'id':4,
        'prop_title':'Two floor villa with ocean view',
        'prop_loc':'Jumeira lake towers',
        'per_night':'$117',
        'review_stars':3,
        'total_reviews':39,
        'image_name':'image4.jpg'
    },{
        'id':5,
        'prop_title':'Two floor villa with ocean view',
        'prop_loc':'Jumeira lake towers',
        'per_night':'$117',
        'review_stars':3,
        'total_reviews':39,
        'image_name':'image2.jpg'
    },{
        'id':6,
        'prop_title':'Two floor villa with ocean view',
        'prop_loc':'Jumeira lake towers',
        'per_night':'$117',
        'review_stars':3,
        'total_reviews':39,
        'image_name':'image3.jpg'
    },{
        'id':7,
        'prop_title':'Two floor villa with ocean view',
        'prop_loc':'Jumeira lake towers',
        'per_night':'$117',
        'review_stars':3,
        'total_reviews':39,
        'image_name':'image3.jpg'
    },{
        'id':8,
        'prop_title':'Two floor villa with ocean view',
        'prop_loc':'Jumeira lake towers',
        'per_night':'$117',
        'review_stars':3,
        'total_reviews':39,
        'image_name':'image4.jpg'
    },{
        'id':9,
        'prop_title':'Two floor villa with ocean view',
        'prop_loc':'Jumeira lake towers',
        'per_night':'$117',
        'review_stars':3,
        'total_reviews':39,
        'image_name':'image2.jpg'
    }
];

var apartments_3 = [
    {
        'id':1,
        'prop_title':'Two floor villa with ocean view',
        'prop_loc':'Jumeira lake towers',
        'per_night':'$117',
        'review_stars':3,
        'total_reviews':39,
        'image_name':'image4.jpg'
    },{
        'id':2,
        'prop_title':'Two floor villa with ocean view',
        'prop_loc':'Jumeira lake towers',
        'per_night':'$117',
        'review_stars':3,
        'total_reviews':39,
        'image_name':'image2.jpg'
    },{
        'id':3,
        'prop_title':'Two floor villa with ocean view',
        'prop_loc':'Jumeira lake towers',
        'per_night':'$117',
        'review_stars':3,
        'total_reviews':39,
        'image_name':'image2.jpg'
    },{
        'id':4,
        'prop_title':'Two floor villa with ocean view',
        'prop_loc':'Jumeira lake towers',
        'per_night':'$117',
        'review_stars':3,
        'total_reviews':39,
        'image_name':'image3.jpg'
    },{
        'id':5,
        'prop_title':'Two floor villa with ocean view',
        'prop_loc':'Jumeira lake towers',
        'per_night':'$117',
        'review_stars':3,
        'total_reviews':39,
        'image_name':'image4.jpg'
    },{
        'id':6,
        'prop_title':'Two floor villa with ocean view',
        'prop_loc':'Jumeira lake towers',
        'per_night':'$117',
        'review_stars':3,
        'total_reviews':39,
        'image_name':'image2.jpg'
    },{
        'id':7,
        'prop_title':'Two floor villa with ocean view',
        'prop_loc':'Jumeira lake towers',
        'per_night':'$117',
        'review_stars':3,
        'total_reviews':39,
        'image_name':'image2.jpg'
    },{
        'id':8,
        'prop_title':'Two floor villa with ocean view',
        'prop_loc':'Jumeira lake towers',
        'per_night':'$117',
        'review_stars':3,
        'total_reviews':39,
        'image_name':'image2.jpg'
    },{
        'id':9,
        'prop_title':'Two floor villa with ocean view',
        'prop_loc':'Jumeira lake towers',
        'per_night':'$117',
        'review_stars':3,
        'total_reviews':39,
        'image_name':'image4.jpg'
    },{
        'id':10,
        'prop_title':'Two floor villa with ocean view',
        'prop_loc':'Jumeira lake towers',
        'per_night':'$117',
        'review_stars':3,
        'total_reviews':39,
        'image_name':'image2.jpg'
    }
    ,{
        'id':11,
        'prop_title':'Two floor villa with ocean view',
        'prop_loc':'Jumeira lake towers',
        'per_night':'$117',
        'review_stars':3,
        'total_reviews':39,
        'image_name':'image2.jpg'
    }
    ,{
        'id':12,
        'prop_title':'Two floor villa with ocean view',
        'prop_loc':'Jumeira lake towers',
        'per_night':'$117',
        'review_stars':3,
        'total_reviews':39,
        'image_name':'image3.jpg'
    }
    ,{
        'id':13,
        'prop_title':'Two floor villa with ocean view',
        'prop_loc':'Jumeira lake towers',
        'per_night':'$117',
        'review_stars':3,
        'total_reviews':39,
        'image_name':'image2.jpg'
    }
];

// app.get('/',(req,res)=>{
//     // console.log('testt');
//     res.send('hello world 444 turu turu')
// });


app.get('/api/courses',(req,res)=>{
    res.json({'test':1})
    // jwt.verify(req.token,'secretkey',(err,authData)=>{
    //     if(err){
    //         res.sendStatus(403);
    //     }else{
    //         res.json({courses,authData})
    //     }
    // })
})

app.get('/api/homepage-properties/:id',verifyToken,(req,res)=>{ 
    jwt.verify(req.token,'secretkey',(err,authData)=>{
        if(err){
            res.sendStatus(403);
        }else{
            if(req.params.id==1){
                res.json({data:apartments_1});
            }else if(req.params.id==2){
                res.json({data:apartments_2});
            }else{
                res.json({data:apartments_3});
            }
        }
    })
})

var reviews = [
    {
        'reviewr_image':'people1.jpg',
        'reviewr_name':'Andrew hatfield',
        'reviewr_date':'09 September 2018',
        'review_place':'Seaside Villa',
        'total_nights':'6 nights',
        'review_message':'Wonderfull place! DnA were great host, the location, pool house, pool...amazing! Wonderfull place! DnA were great host, the location',
        'review_stars':4,
        'total_reviews':4
    },{
        'reviewr_image':'people1.jpg',
        'reviewr_name':'Drew hatfield',
        'reviewr_date':'09 September 2018',
        'review_place':'Seaside Villa',
        'total_nights':'6 nights',
        'review_message':'Wonderfull place! DnA were great host, the location, pool house, pool...amazing! Wonderfull place! DnA were great host, the location',
        'review_stars':4,
        'total_reviews':4
    },{
        'reviewr_image':'people1.jpg',
        'reviewr_name':'Ann hatfield',
        'reviewr_date':'09 September 2018',
        'review_place':'Seaside Villa',
        'total_nights':'6 nights',
        'review_message':'Wonderfull place! DnA were great host, the location, pool house, pool...amazing! Wonderfull place! DnA were great host, the location',
        'review_stars':4,
        'total_reviews':4
    },{
        'reviewr_image':'people1.jpg',
        'reviewr_name':'John hatfield',
        'reviewr_date':'09 September 2018',
        'review_place':'Seaside Villa',
        'total_nights':'6 nights',
        'review_message':'Wonderfull place! DnA were great host, the location, pool house, pool...amazing! Wonderfull place! DnA were great host, the location',
        'review_stars':4,
        'total_reviews':4
    },{
        'reviewr_image':'people1.jpg',
        'reviewr_name':'Kaleb hatfield',
        'reviewr_date':'09 September 2018',
        'review_place':'Seaside Villa',
        'total_nights':'6 nights',
        'review_message':'Wonderfull place! DnA were great host, the location, pool house, pool...amazing! Wonderfull place! DnA were great host, the location',
        'review_stars':4,
        'total_reviews':4
    },{
        'reviewr_image':'people1.jpg',
        'reviewr_name':'kyle hatfield',
        'reviewr_date':'09 September 2018',
        'review_place':'Seaside Villa',
        'total_nights':'6 nights',
        'review_message':'Wonderfull place! DnA were great host, the location, pool house, pool...amazing! Wonderfull place! DnA were great host, the location',
        'review_stars':4,
        'total_reviews':4
    },{
        'reviewr_image':'people1.jpg',
        'reviewr_name':'Ben hatfield',
        'reviewr_date':'09 September 2018',
        'review_place':'Seaside Villa',
        'total_nights':'6 nights',
        'review_message':'Wonderfull place! DnA were great host, the location, pool house, pool...amazing! Wonderfull place! DnA were great host, the location',
        'review_stars':4,
        'total_reviews':4
    }
];

app.get('/api/reviews/',verifyToken,(req,res)=>{
    jwt.verify(req.token,'secretkey',(err,authData)=>{
        if(err){
            res.sendStatus(403);
        }else{
            res.json({data:reviews});
        }
    })
})

// app.get('/api/courses/:id/:name',(req,res)=>{
//     res.send(req.params);
// })

// app.post('/api/courses/',(req,res)=>{
//     const course = {"id":req.body.id,"name":req.body.name}

//     courses.push(course);

//     res.send(courses);
//     res.status(200)
// })

app.post('/api/login',(req,res)=>{
    const user = {
        id:1,
        username:'prajyot',
        email:'prajyot@gmail.com'
    }

    jwt.sign({user},'secretkey',(err, token)=>{
        res.json({
            token
        });
    });
});

//format
//authorization: Bearer <access_token>
function verifyToken(req,res,next){
    const bearerHeader = req.headers['authorization'];

    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];

        req.token = bearerToken;
        next();
    }else{
        res.sendStatus(403);
    }
}

app.listen(process.env.PORT || 3018, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

// app.post();
// app.put();
// app.delete();