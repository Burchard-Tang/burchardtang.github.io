---
layout: page
title: Projects
permalink: /projects/
---
<div class="proj-sidebar">
<h1>2025</h1>
<ul>
<li><a href="#MOD04">Modelling CANDU Reactor Parts (SolidWorks) | In Progress</a></li>
<li><a href="#GRE03">Green Infrastructure Map of Toronto (QGIS)</a></li>
<li><a href="#QUA02">Quantum Orbital Visualization (Octave)</a></li>
<li><a href="#TYP01">Game: Type-Casting (C#)</a></li>
</ul>
<h1>2024</h1>
<ul>
<li><a href="#TED00">TED Talk–Style Assembly Organizer & Speaker</a></li>
</ul>
</div>

<div class="target-anchor" id="MOD04"></div>
<div class="project-card">
    <p class="project-title">Modelling CANDU Reactor Parts (SolidWorks) | In Progress</p>
    <p class="project-date">September 2025 - Present</p>
    <hr class="solid">
    <p class="project-description">
    Models of components based on CANDU-6 reactors to eventually form a full assembly of the calandria, fuel tubes passing through it, and end fittings of the fuel tubes. Driven by a curiosity about nuclear reactors, by modelling one, I hope to better appreciate all the engineering that contributes to making them function, function efficiently, and function safely.</p>
    <div class = "slideshow-container">
        <div class = "slide0">
            <img src="/burchardtang.github.io/images/Projects/CANDU/FuelBundleSide.png" alt="Side view of a fuel bundle modeled in Solidworks" onclick="shiftSlide(1,0)">
            <p class="project-img-caption">Side view of a 37 element fuel bundle, measurements gathered and estimated from the <a href="https://canteach.candu.org/Content%20Library/19720114.pdf#search=19720114" target="_blank">AECL Lectures on Nuclear Power Symposium</a> provided on the <a href="https://canteach.candu.org/Pages/Home.aspx" target="_blank">CANTEACH</a> site.</p>
        </div>
        <div class = "slide0">
            <img src="/burchardtang.github.io/images/Projects/CANDU/FuelBundleFront.png" alt="Front view of a fuel bundle modeled in Solidworks" onclick="shiftSlide(1,0)">
            <p class="project-img-caption">Front view of a 37 element fuel bundle, measurements gathered and estimated from the <a href="https://canteach.candu.org/Content%20Library/19720114.pdf#search=19720114" target="_blank">AECL Lectures on Nuclear Power Symposium</a> provided on the <a href="https://canteach.candu.org/Pages/Home.aspx" target="_blank">CANTEACH</a> site.</p>
        </div>
        <div class = "slide0">
            <img src="/burchardtang.github.io/images/Projects/CANDU/GarterSpring.png" alt="A garter spring modeled in Solidworks" onclick="shiftSlide(1,0)">
            <p class="project-img-caption">Model of the garter spring seperating the pressure and calandria tube. Measurements gathered and estimated from <a href="https://canteach.candu.org/Content%20Library/20044210.pdf?utm_source=chatgpt.com" target="_blank">CANDU Overiew, Course 3.2</a> provided on the <a href="https://canteach.candu.org/Pages/Home.aspx" target="_blank">CANTEACH</a> site.</p>
        </div>
        <div class = "slide0">
            <img src="/burchardtang.github.io/images/Projects/CANDU/CalandriaTube.png" alt="smth" onclick="shiftSlide(1,0)">
            <p class="project-img-caption">Assembly of a calandria tube, showing the function of the garter spring to seperate the inner and outer tubes. Measurements gathered and estimated from <a href="https://canteach.candu.org/Content%20Library/20044210.pdf?utm_source=chatgpt.com" target="_blank">CANDU Overiew, Course 3.2</a> provided on the <a href="https://canteach.candu.org/Pages/Home.aspx" target="_blank">CANTEACH</a> site.</p>
        </div>
        <div class="full-slider-bar">
        </div>
    </div>
    <div class="full-slider-bar">
        <a><span class="slider-bar0" style="width:20%;" onclick="setSlide(0,0)"></span></a>
        <a><span class="slider-bar0" style="width:20%;" onclick="setSlide(1,0)"></span></a>
        <a><span class="slider-bar0" style="width:20%;" onclick="setSlide(2,0)"></span></a>
        <a><span class="slider-bar0" style="width:20%;" onclick="setSlide(2,0)"></span></a>
    </div>
</div>

<div class="target-anchor" id="GRE03"></div>
<div class="project-card">
    <p class="project-title">Green Infrastructure Map of Toronto (QGIS)</p>
    <p class="project-date">September 2025</p>
    <hr class="solid">
    <p class="project-description">
A map combining four green infrastructure datasets in the Toronto region from Toronto's OpenData portal. The purpose of the map is to analyze progress by the government towards green initiatives and compare areas of high and low progress. Renewable energy installations (2024) and pollination gardens (2025) which are symbolized by the size of the installation/garden for the marker, green street implementations (2025) (such as bioswales and special drainage into green areas), as well as government-maintained electric vehicle chargers (2025) sized by the number of chargers. The map is divided into the Toronto neighbourhoods where the implementations are weighted and summed to produce the intensity of the green areas and show the green development of the area by the government.</p>
    <img class="project-img" src="/burchardtang.github.io/images/Projects/TorontoGreenMap.png" alt="Map of Toronto labeled with green infrastructure">
    <p class="project-img-caption">Map of Toronto labeled with green infrastructure made using QGIS.</p>
</div>

<div class="target-anchor" id="QUA02"></div>
<div class="project-card">
    <p class="project-title">Quantum Orbital Visualization (Octave)</p>
    <p class="project-date">August 2025</p>
    <hr class="solid">
    <p class="project-description">
A 3D visualization of the time-independent Schrödinger equation solutions for electron orbitals using GNU Octave. By plotting probability clouds with scatter3, the project demonstrates how different quantum numbers shape electron orbitals. To build this, I read Jeffery R. Chasnov's lecture notes on differential equations available online, which include a section on the Schrödinger wave equation. This project enhanced my skills in mathematical modeling, numerical methods, and scientific visualization, while also strengthening my intuition for the physics behind quantum orbitals.</p>
    <img class="project-img" src="/burchardtang.github.io/images/Projects/Orbital322.png" alt="An image from the octave graphing of the d1 orbital">
    <p class="project-img-caption">Visualization of the <em>d₁</em> orbital as a 3D scatter plot.</p>
    <img class="project-img" src="/burchardtang.github.io/images/Projects/Orbital320.png" alt="The graphing of a d0 orbital">
    <p class="project-img-caption">Visualization of the <em>d₀</em> orbital distribution.</p>
</div>

<div class="target-anchor" id="TYP01"></div>
<div class="project-card">
    <p class="project-title">Game: Type-Casting (C#)</p>
    <p class="project-date">May - June 2025</p>
    <hr class="solid">
    <p class="project-description">
        <em>Type-Casting</em> is a fantasy-themed, bullet hell game where the player must type spell commands to cast attacks and survive against waves of hundreds of enemies. A large variety of content with 4 magical elements combined with spell modifiers to fight 10 types of monsters that shoot, dash, and fly as they hunt you. 
    </p>
    <p class="project-description">
        Built in C# with MonoGame, the project demonstrates object-oriented programming principles, including inheritance and polymorphism to create different enemy and projectile types. 
        Data structures such as linked lists, sorting, and searching algorithms were implemented to efficiently manage hundreds of enemies with pathing and projectiles. Recursion was used to generate new winding caves and forest maps in each playthrough for unique experiences.
    </p>
    <img class="project-img" src="/burchardtang.github.io/images/Projects/TypeCasting.png" alt="Gameplay screenshot of Type-Casting, a bullet hell survival game">
    <img class="project-img" src="/burchardtang.github.io/images/Projects/TypeCastingClip1.gif" alt="Gameplay screenshot of Type-Casting, a bullet hell survival game">
    <p class="project-img-caption">Gameplay of <em>Type-Casting</em>, featuring typed spells and enemy combat.</p>
</div>

<div class="project-card" id="TED00">
    <p class="project-title">TED Talk–Style Assembly Organizer & Speaker</p>
    <p class="project-date">January 2024</p>
    <hr class="solid">
    <p class="project-description">
        Designed and coordinated a TED Talk–style assembly attended by 200+ junior students. The event featured senior students giving talks on topics such as passion in learning and dealing with mistakes. Teachers also gave talks about their professional journeys. I contributed both as an organizer and as a speaker, ensuring smooth logistics, clear communication with participants, and impactful delivery to the audience. 
        
        The purpose of this event was to strengthen public speaking ability in students and to create a supportive environment for juniors. From feedback forms, the audience particularly enjoyed hearing about their teachers' backgrounds and I personally felt I developed my ability to communicate with others.
    </p>
</div>

<script>
    setSlide(0,0);
</script>