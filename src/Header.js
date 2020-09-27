import React from "react";

function Header() {
return (
<header>
<nav className="navbar fixed-top navbar-expand-sm navbar-light bg-light border-bottom py-1 shadow">
<div className="container-lg">

<a className="navbar-brand font-weight-bold" href="index.html">Snow Flakes</a>

<button className="navbar-toggler shadow-none border-0" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarNav">
<ul className="navbar-nav ml-auto">
<li className="nav-item">
<a href="#!" className="nav-link">About</a></li>

<li className="nav-item">
<a href="#!" className="nav-link">Contact</a></li>
</ul>
</div>

</div>
</nav>
</header>
);
}

export default Header;