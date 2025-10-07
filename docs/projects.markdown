---
layout: page
title: Projects
permalink: /projects/
---
<div class="proj-sidebar" id="sideBar">
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
<h1>Extra</h1>
<ul>
<li><a href="#DES000">Favorite Desmos Library</a></li>
</ul>
</div>

<button class="proj-sidebar-btn" id="sideBarBtn" type="button" onclick="toggleSideBar()">></button>

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
            <p class="project-img-caption">Model of the garter spring seperating the pressure and calandria tube. Measurements gathered and estimated from <a href="https://canteach.candu.org/Content%20Library/20044210.pdf?" target="_blank">CANDU Overiew, Course 3.2</a> provided on the <a href="https://canteach.candu.org/Pages/Home.aspx" target="_blank">CANTEACH</a> site.</p>
        </div>
        <div class = "slide0">
            <img src="/burchardtang.github.io/images/Projects/CANDU/CalandriaTube.png" alt="Calandria Tube" onclick="shiftSlide(1,0)">
            <p class="project-img-caption">Assembly of a calandria tube, showing the function of the garter spring to seperate the inner and outer tubes. Measurements gathered and estimated from <a href="https://canteach.candu.org/Content%20Library/20044210.pdf?" target="_blank">CANDU Overiew, Course 3.2</a> provided on the <a href="https://canteach.candu.org/Pages/Home.aspx" target="_blank">CANTEACH</a> site.</p>
        </div>
        <div class = "slide0">
            <img src="/burchardtang.github.io/images/Projects/CANDU/AnnulusBellow.png" alt="Annulus Bellow" onclick="shiftSlide(1,0)">
            <p class="project-img-caption">Model of an annulus bellow, moderating the pressure of the annulus gas. Measurements estimated from <a href="https://thorburnflex.com/pdf/Metallic%20Bellows-2014.pdf" target="_blank">Thorburn Flex | Serving The Nuclear Industry</a></p>
        </div>
    </div>
    <div class="full-slider-bar">
        <a><span class="slider-bar0" style="width:18%;" onclick="setSlide(0,0)"></span></a>
        <a><span class="slider-bar0" style="width:18%;" onclick="setSlide(1,0)"></span></a>
        <a><span class="slider-bar0" style="width:18%;" onclick="setSlide(2,0)"></span></a>
        <a><span class="slider-bar0" style="width:18%;" onclick="setSlide(3,0)"></span></a>
        <a><span class="slider-bar0" style="width:18%;" onclick="setSlide(4,0)"></span></a>
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

<div class="project-card" id="DES000">
    <p class="project-title">Favourite Desmos Selections</p>
    <hr class="solid">
    <p>Whenever I learn a mathematical or physics concept, it often helps me to graph it in Desmos so I can visualize it better and develop an understanding. Quite often, I would become fixated on a problem and spend time at length on Desmos, so much so I would consider it a hobby. This behaviour has left me with numerous graphs, my favorites of the set below. </p>
    <div class = "slideshow-container">
        <div class = "slide1">
            <p class="project-subheader"><a href="https://www.desmos.com/calculator/tpzhddcu80">Vector Space | 2025</a></p>
            <p>
            A desmos that plots a grid of vectors to explore the development of systems with different functions of their change. Plotted currently is the vector space created by a pendulum.
            </p>
            <img class="project-img" src="/burchardtang.github.io/images/Projects/Desmos/VectorSpace.png" alt="Vector Space Desmos Plot" onclick="shiftSlide(1,1)">
        </div>
        <div class = "slide1">
            <p class="project-subheader"><a href="https://www.desmos.com/calculator/tpzhddcu80">Should You Run in the Rain | 2025</a></p>
            <p>
            The question, 'Should you run in the rain?' came up in conversation which prompted this graph. This graph calculates the amount of rain a person (approximated as a rectangular prism) experiences by finding their cross-sectional area perpendicular to the rain's falling vector at different moving speeds. The area is multiplied by the flux of the rain and the distance divided by the speed. 
            My findings were that running is more likely to be worse if you are moving with the horzontal direction of the rain. In this case, at walking speed the rain falls closely parallel to your standing compared to hiting your front when running. 
            </p>
            <img class="project-img" src="/burchardtang.github.io/images/Projects/Desmos/RunningInRain.png" alt="A 3D Desmos plot of a box experiencing rain" onclick="shiftSlide(1,1)">
        </div>
        <div class = "slide1">
            <p class="project-subheader"><a href="https://www.desmos.com/calculator/i8wiubnz6w">Damped Harmonic Motion | 2025</a></p>
            <p>
            A desmos plot of a damped harminic oscillator, its position-time solution, homogeneous solution, and particullar solution. While reading about differential equations, this graph came about to visualize the similarities and differences between the homogeneous and particular solutions.
            </p>
            <img class="project-img" src="/burchardtang.github.io/images/Projects/Desmos/DampedHarmonic.png" alt="A Desmos plot of a simple harmonic oscillator" onclick="shiftSlide(1,1)">
        </div>
        <div class = "slide1">
            <p class="project-subheader"><a href="https://www.desmos.com/calculator/yvvkidm9vk">Seperable Equations | 2025</a></p>
            <p>
            To solve a seperable equation, the integral of both sides can be taken with initial conditions. To explore why this works, this graph visualizes my interperetaion of finding matching areas from small changes in x related to the changes in y. 
            </p>
            <img class="project-img" src="/burchardtang.github.io/images/Projects/Desmos/SepEq.png" alt="A Desmos plot of seperable equations" onclick="shiftSlide(1,1)" onclick="shiftSlide(1,1)">
        </div>
        <div class = "slide1">
            <p class="project-subheader"><a href="https://www.desmos.com/calculator/yvvkidm9vk">Special Relativity | 2024</a></p>
            <p>
            This graph shows a space-time graph, displaying time dilation and length contaction through the shifting of the axes.
            </p>
            <img class="project-img" src="/burchardtang.github.io/images/Projects/Desmos/SpecRel.png" alt="A space-time graph" onclick="shiftSlide(1,1)">
        </div>
        <div class = "slide1">
            <p class="project-subheader">Other Graphs</p>
            <ul class="desmos-list">
                <li><a href="https://www.desmos.com/calculator/uaijvkihbv">Shear & Moment Graphs (2025)</a></li>
                <li><a href="https://www.desmos.com/calculator/jt5kysqedc">Diffusion in a Pipe (2025)</a></li>
                <li><a href="https://www.desmos.com/calculator/j1sruluy4z">Basel Problem (2025)</a></li>
                <li><a href="https://www.desmos.com/calculator/v9fi4cxcnn">Hyperbola: Area and  Functions (2025)</a></li>
                <li><a href="https://www.desmos.com/calculator/50d69d7459">Wave Superposition (2024)</a></li>
                <li><a href="https://www.desmos.com/calculator/e2c9b5c936">2 Point Interference (2024)</a></li>
                <li><a href="https://www.desmos.com/calculator/40363e8ff2">Elastic Collision (2023)</a></li>
                <li><a href="https://www.desmos.com/calculator/b59702af21">Force Table (2023)</a></li>
                <li><a href="https://www.desmos.com/calculator/c0c5e7cdf1">Position, Velocity, Acceleration Plotter (2023)</a></li>
            </ul>
        </div>
    </div>
    <div class="full-slider-bar">
        <a><span class="slider-bar1" style="width:14%;" onclick="setSlide(0,1)"></span></a>
        <a><span class="slider-bar1" style="width:14%;" onclick="setSlide(1,1)"></span></a>
        <a><span class="slider-bar1" style="width:14%;" onclick="setSlide(2,1)"></span></a>
        <a><span class="slider-bar1" style="width:14%;" onclick="setSlide(3,1)"></span></a>
        <a><span class="slider-bar1" style="width:14%;" onclick="setSlide(4,1)"></span></a>
        <a><span class="slider-bar1" style="width:14%;" onclick="setSlide(5,1)"></span></a>
    </div>
</div>

<script>
    setSlide(0,0);
    setSlide(0,1);

    let open = true;
    let bar = document.getElementById("sideBar");
    let btn = document.getElementById("sideBarBtn");

    function toggleSideBar(){
        open = !open;
        if (open){
            bar.classList.remove("closed");
            btn.classList.remove("closed");
        }
        else{
            bar.classList.add("closed");
            btn.classList.add("closed");
        }
    }

    toggleSideBar();
</script>  