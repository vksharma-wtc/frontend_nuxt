<template>

<footer class="footer">

<div class="container">

<div class="column">

<h3>NuxtShop</h3>

<p>
Premium Shopping Experience
</p>

</div>

<div class="column">

<h3>Quick Links</h3>

<ul>

<li>
<NuxtLink to="/">Home</NuxtLink>
</li>

<li>
<NuxtLink to="/shop">Shop</NuxtLink>
</li>

<li>
<NuxtLink to="/about">About</NuxtLink>
</li>

<li>
<NuxtLink to="/contact">Contact</NuxtLink>
</li>

</ul>

</div>

<div class="column">

<h3>Customer Service</h3>

<ul>

<li>Shipping</li>

<li>Returns</li>

<li>Privacy Policy</li>

<li>Terms & Conditions</li>

</ul>

</div>

<div class="column">

<h3>Contact</h3>

<p>Email : info@example.com</p>

<p>Phone : +91 9876543210</p>

<p>Noida, India</p>

</div>

</div>

<div class="copyright">

© 2026 NuxtShop. All Rights Reserved.

</div>

</footer>

</template>

<style scoped>

.footer{
background:#111;
color:white;
padding-top:50px;
margin-top:80px;
}

.container{
width:1200px;
margin:auto;
display:grid;
grid-template-columns:repeat(4,1fr);
gap:40px;
}

.column h3{
margin-bottom:15px;
}

.column ul{
padding:0;
list-style:none;
}

.column li{
margin-bottom:10px;
}

.column a{
color:white;
text-decoration:none;
}

.copyright{
text-align:center;
padding:20px;
border-top:1px solid #333;
margin-top:40px;
}

</style>