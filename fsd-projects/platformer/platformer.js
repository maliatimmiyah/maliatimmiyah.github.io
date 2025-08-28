$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(350,700,200,20,"pink");
    createPlatform(200,600,200,10,"white");
    createPlatform(500,400,100,10,"teal");
    createPlatform(600,500,200,10,"green");
    createPlatform(100,200,200,10,"yellow");
    createPlatform(500,600,100,30,"purple");
    createPlatform(600,200,200,10,"brown");
    createPlatform(200,500,100,10,"orange");
    createPlatform(300,300,100,10,"blue");
    createPlatform(400,100,100,10,"black");
    createPlatform(900,300,100,10,"grey");
    createPlatform(1200,100,200,10,"white");
    createPlatform(1100,200,300,538,"blue");

    // TODO 3 - Create Collectables
    createCollectable("database",200,600, 0.5, 0.7);
    createCollectable("database",400,100, 0.5, 0.7);
    createCollectable("database",300,300,0.5,0.7);
    createCollectable("database",1200,100,0.5,0.7);
    createCollectable("database",100,700,1.2,1.2);
    // TODO 4 - Create Cannons
    createCannon("top",200,600);
    createCannon("left",400,800);
    createCannon("bottom",800,800);
    createCannon("top",900,800);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
