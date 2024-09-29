const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
const PORT = 5000;




// app.get('/post', (req, res) => {
    
// });

const posts = [
    {
        "_id": "64f3b9f3e7f9c2d2a4e5c9a1",
        "title": "Exploring the Mountains",
        "description": "My journey through the Rocky Mountains was amazing!",        "userName": "JohnDoe"
    },
    {
        "_id": "64f3b9f3e7f9c2d2a4e5c9a2",
        "title": "Delicious Pasta Recipe",
        "description": "Today, I tried a new pasta recipe, and it turned out great!",        "userName": "JaneSmith"
    },
    {
        "_id": "64f3b9f3e7f9c2d2a4e5c9a3",
        "title": "Mastering JavaScript Tips",
        "description": "Sharing some key tips and tricks for mastering JavaScript.",        "userName": "CodeMaster"
    },
    {
        "_id": "64f3b9f3e7f9c2d2a4e5c9a4",
        "title": "Grand Canyon Adventure",
        "description": "Pictures from my recent hike in the Grand Canyon.",
      "userName": "NatureLover"
    },
    {
        "_id": "64f3b9f3e7f9c2d2a4e5c9a5",
        "title": "Top 10 Books to Read This Year",
        "description": "A list of my favorite books this year!",
        "userName": "BookWorm"
    },
    {
        "_id": "64f3b9f3e7f9c2d2a4e5c9a6",
        "title": "Achieving Fitness Goals",
        "description": "Finally hit my target weight this month! Feeling proud.",
        "userName": "FitnessFanatic"
    },
    {
        "_id": "64f3b9f3e7f9c2d2a4e5c9a7",
        "title": "Dreaming of Japan",
        "description": "Next on my travel list: Japan!",
        "userName": "TravelAddict"
    },
    {
        "_id": "64f3b9f3e7f9c2d2a4e5c9a8",
        "title": "React Learning Journey",
        "description": "Started learning React. It’s challenging but rewarding!",
        "userName": "FrontEndDev"
    },
    {
        "_id": "64f3b9f3e7f9c2d2a4e5c9a9",
        "title": "Low Light Photography Tips",
        "description": "Sharing some of my best tips for shooting in low light.",
        "userName": "PhotoGuru"
    },
    {
        "_id": "64f3b9f3e7f9c2d2a4e5c9b0",
        "title": "Seasonal Gardening Success",
        "description": "My flowers are blooming beautifully this season!",
         "userName": "GreenThumb"
    }
]


// 1. Get All Posts
// Create an API route that retrieves all posts from the given array.  
// Example: Use an Express.js `GET` route to return all posts in the `/posts` endpoint.

app.get('/product', (req, res) => {
    
    res.json(posts)
    
    console.log('This is foisal')
});


// •	2.Get a Single Post 
// Create an API route to get a single post by its unique ID.  
// Example: Use an Express.js `GET` route to return a post by ID in the `/posts/:id` endpoint
app.get('/product/:singleId', (req, res) => {
    
    const porducts = posts.find(product => product._id === req.params.singleId);
    res.json(porducts)
});

// •	3. Update a Post
// Create an API route that allows you to update an existing post's title, description, or other 
app.put('/product/:singleId', (req, res) => {
    const products = posts.find(product => product._id === req.params.singleId);
    if (products) {

        products.title = req.body.title || products.title;
        products.description = req.body.description || products.description;
        res.json(  products );
    } 
});

app.delete('/product/:singleId', (req, res) => {
    const products = posts.filter(product => product._id === req.params.singleId);
    res.json(products);
});

app.post('/posts', (req, res) => {
    const  product = req.body;

    res.json(product);
});

app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
});