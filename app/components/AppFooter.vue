<template>

<footer class="footer">

<div class="container">

<div class="column">

<h3>Chirag International</h3>

<p>
Healty Living. Better Lifestyle.
</p>

</div>

<div class="column">

<h3>Quick Links</h3>

<ul>

<li>
<NuxtLink to="/">Home</NuxtLink>
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
    <li>
<NuxtLink
  to="/privacy-policy"
  class="hover:text-green-400 transition"
>
  Privacy Policy
</NuxtLink>
</li>

<li>
<NuxtLink
  to="/terms-and-conditions"
  class="hover:text-green-400 transition"
>
  Terms & Conditions
</NuxtLink>
</li>

</ul>

</div>

<div class="column">

<h3>Contact</h3>

<p>contact@chirag.international</p>

</div>

</div>

<div class="copyright">

© 2026 Chirag International. All Rights Reserved.

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