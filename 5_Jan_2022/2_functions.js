html{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

header>h1{
    font-weight: 400;
}

header{
    display: flex;
    justify-content: space-between;
    margin: 0 3rem
}

li{
    list-style: none;
    font-size: 1.5rem;
}

ul{
    display: flex;
    justify-content: space-between;
}
nav{
    position: relative;
    /* by using relative we can move the nav bar from
    top bottom left or right. */
    top: 0.5rem;
    width: 20rem;
}

.showcase_img{
    width: 95vw;
    margin: 1rem;
}

article{
    display: flex;
    margin:1.5rem;
}

.container{
    text-align: center;
    margin-right: 2rem;
    padding: 1rem;
}

p{
    font-size: larger;
    font-weight: 500;
}
footer{
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    height: 4rem;
    font-size: 1.5rem;
    align-items: center;
}

a{
    text-decoration: none;
}

a:hover{
    color: crimson;
}                        ression 
let multiply = (function(a, b){
    console.log(a * b)
})(2, 4)

