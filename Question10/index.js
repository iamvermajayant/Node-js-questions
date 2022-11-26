const express = require('express');
const app = express();


app.set('view engine', 'ejs');

app.get('/home', (req, res) => {
    res.send(`<h2>Welcome to Home Page</h2>
    <script>
        alert("hello welcome")
    </script>
    `)
})
app.get('/features', (req, res) => {
    res.send(`<h2>Welcome to features page</h2>
    <script>
    alert("hello welcome")
</script>`)
})
app.get('/pricing', (req, res) => {
    res.send(`<h2>Welcome to Pricing Page</h2>
    <script>
    alert("hello welcome")
</script>`)
})


app.get('/navbar' , (req, res)=>{
    res.render("Navbar");
})

app.listen(3001);