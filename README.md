<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>Lumagenetics</title>

  <!-- CSS -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link href="css/materialize.css" type="text/css" rel="stylesheet" media="screen, projection">
  <link href="css/style.css" type="text/css" rel="stylesheet" media="screen, projection">
  <link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet">

  <style>
    /* Your existing CSS styles */
    .parallax-container {
      position: relative;
      min-height: 20px;
      line-height: 0;
      height: 650px;
      background-image: url('../lumagenetics/pexels-sebastian-palomino-1955134\ \(1\).jpg');
      background-size: cover;
      background-position: center;
      font-family: "sans-serif";
    }

    /* Add a margin to the top of the button without jumping */
    #download-button-container {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      min-height: 500px;
      margin-top: 0px;
    }

    #download-button {
      margin-top: 40px;
      vertical-align: middle;
    }

    /* Add CSS for the bouncing balls
    .bouncing-ball {
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: teal;
      border-radius: 50%;
      animation: bounce 2s alternate infinite linear; /* Up and down animation
      
    }*/

    @keyframes bounce {
      0% {
        transform: translateY(0); /* Start from the top */
      }
      100% {
        transform: translateY(200px); /* Move down 200px */
      }
    }
  </style>



  <style>
    h1 {
      font-size: 40px;
      text-transform: capitalize;
      font-weight: bold;
      color: teal;
      text-shadow: 3px 3px 2px rgba(0, 0, 0, 0.2);
      transform: skew(-10deg, 0deg);
    }
  </style>

<style>
  .container-with-bg {
    background-image: url('./36a862bb-d59f-4090-8baa-9b4f49483f93.jpg'); /* Replace 'city.jpg' with your image file's path */
    background-size: 100% auto;
    background-position: center;
    background-repeat: no-repeat;
    height: 50%;
  }
</style>

<style>
  .bio-section {
    background-color: #f0f0f0;
    padding: 20px;
  }
</style>

<style>
  .image-container {
    width: 100%;
    height: 100vh; /* 100% of the viewport height */
    overflow: hidden; /* Hides any parts of the image that might exceed the viewport size */
  }

  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Scales the image while maintaining aspect ratio and covering the container */
  }
</style>


</head>
<body>
  <nav class="white" role="navigation">
    <div class="nav-wrapper container">
      <a id="logo-container" href="#" class="brand-logo">
        <video autoplay loop muted playsinline class="logo-video">
          <source src="./#CanvaDesignChallenge Logo with Gradients.mp4" type="video/mp4">
          <!-- You can also provide alternative video formats for better compatibility -->
        </video>
      </a>
      
      
      <ul class="right hide-on-med-and-down">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
      </ul>
      <ul id="nav-mobile" class="sidenav">
        <li><a href="#">Bio</a></li>
      </ul>
      <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    </div>
  </nav>
  

 

  <div id="index-banner" class="parallax-container">
    <div class="section no-pad-bot">
      <div class="container">
        <br><br>
        <script>
          for (let i = 0; i < 100; i++) {
            const ball = document.createElement('div');
            ball.className = 'bouncing-ball';
            ball.style.left = `${Math.random() * 100}%`; // Random horizontal position
            ball.style.animationDuration = `${1 + Math.random()}s`; // Random animation duration
            document.querySelector('.parallax-container').appendChild(ball);
          }
        </script>
        <div class="tornado-text"  style="display: flex; justify-content: left; align-items: center; min-height: 0vh; margin-left: 150px;">
         
          <h1 class="header teal-text text-lighten-2 glow-text" style="font-size: 150px;  font-style: italic;">LumaGenetics</h1>
         
        </div> 
        <div class="row">
          <h4 class="header col s8 light">
            <div id="typewriter-text" class="typewriter-text"></div>
          </h4>
        </div>
      </div>
      <div style="display: flex; justify-content: center; align-items: center; height: 20px;"></div>
      
      <!-- Add 100 bouncing balls dynamically using JavaScript -->
      
      
    </div>

    

    <!-- Adjusted button container -->
    <div id="download-button-container" class="row center" style="padding-top: 100px;">
      <a href="http://materializecss.com/getting-started.html" id="download-button" class="btn-large waves-effect waves-light teal lighten-1" onclick="moveButtonToLeft()">
        <i class="material-icons left">directions_car</i> Driving Opportunities
      </a>
      
    </div>
  </div>


  <!-- The rest of your HTML content -->
 
      <!-- Icon Section -->
      <div class="container">
        <div class="section">
          <div class="sec3"></div>
          <!--   Icon Section   -->
          <div class="row">
            <div class="col s12 m4">
              <div class="icon-block">
                <h2 class="center teal-text"><i class="material-icons">flash_on</i></h2>
                <h5 class="center">Speeds up development</h5>
    
                <p class="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
              </div>
            </div>
    
            <div class="col s12 m4">
              <div class="icon-block">
                <h2 class="center teal-text"><i class="material-icons">group</i></h2>
                <h5 class="center">User Experience Focused</h5>
    
                <p class="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
              </div>
            </div>
    
            <div class="col s12 m4">
              <div class="icon-block">
                <h2 class="center teal-text"><i class="material-icons">settings</i></h2>
                <h5 class="center">Easy to work with</h5>
    
                <p class="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
              </div>
            </div>
          </div>
    
        </div>
      </div>

      <div class="image-container">
        <img src="./2017_Ram_ProMaster_City_WindowVanandCargoVanParked.jpg.image_.2880.jpg" alt="promaster city">
      </div>
      
    
      <div class="container-with-bg">
        <!-- Your existing content -->
        <!-- ... -->
      
      
          <div class="row">
            <div class="col s10 m6 offset-m3">
              <div class="card-panel">
                <h5 class="center-align">Quote Today</h5>
                <form class="tall-form">

                  <div class="input-field">
                    <input id="name" type="text" class="validate" placeholder="Your Name">
                    <label for="name">Your Name</label>
                  </div>
                  <div class="input-field">
                    <input id="email" type="email" class="validate" placeholder="Your Email">
                    <label for="email">Your Email</label>
                  </div>
                  <div class="input-field">
                    <textarea id="message" class="materialize-textarea" placeholder="Your Message"></textarea>
                    <label for="message">Your Message</label>
                  </div>
                  <button class="btn waves-effect waves-light teal lighten-1" type="submit" name="action">Submit
                    <i class="material-icons right">send</i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    

      <footer class="page-footer teal">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">Company Bio</h5>
          <p class="grey-text text-lighten-4">We are a team of college students working on this project like it's our full-time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>
        </div>
       
        <div class="col l3 s12">
          <h5 class="white-text">Connect</h5>
          <ul>
            <li><a class="white-text" href="#!">Link 1</a></li>
            <li><a class="white-text" href="#!">Link 2</a></li>
            <li><a class="white-text" href="#!">Link 3</a></li>
            <li><a class="white-text" href="#!">Link 4</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        Made by <a class="brown-text text-lighten-3" href="http://materializecss.com">lumagentechs</a>
      </div>
    </div>
  </footer>

  <!-- Scripts -->
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="js/materialize.js"></script>
  <script src="js/init.js"></script>
  
  <style>
    #typewriter-text {
        width: 800px;
        text-shadow: 0 0 10px #206d89;
        color: #000;
        margin-left: 200px;
        text-align: center;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-style: italic;
        font-weight: bold;
        overflow: hidden;
    }
  </style>

<script>
  function typeWriter(text, i, callback) {
    if (i < text.length) {
      document.getElementById("typewriter-text").innerHTML += text.charAt(i);
      i++;
      setTimeout(function () {
        typeWriter(text, i, callback);
      }, 100);
    } else {
      if (typeof callback === "function") {
        callback();
      }
    }
  }

  function repeatTypeWriter(text, times) {
    let count = 5;

    function next() {
      if (count < times - 1) {
        document.getElementById("typewriter-text").innerHTML = ""; // Clear the previous text
        typeWriter(text, 0, next);
        count++;
      }
    }

    typeWriter(text, 0, next);
  }

  // Call the repeatTypeWriter function with your text and the number of times you want to repeat it
  repeatTypeWriter("Driving Innovation in Logistics: Your Trusted Minority-Owned Courier Business", 3);
</script>
  

  <script>
    // Function to move the button to the left
    function moveButtonToLeft() {
      const button = document.getElementById("download-button");
      button.style.transform = "translateX(-100%)";
    }
  </script>
</body>
</html>
ChatGPT
