
//STEP 1 - display carousel with buttons
//STEP 2 - create variable to change the images with the buttons
//STEP 3 - add functionality to the buttons based on the variable created
//STEP 4 - create variable to display the different image descriptions
//STEP 5 - add functionality to the "Read description" button based on the previous variable


let num_images = 6; //total of images
let image_number = 1; //first image displayed
 
var read_clicked = new Boolean(false); //when button is not pressed

//shortcuts to .html elements
let image_displayed = document.getElementById("image-display");
let read_description = document.getElementById("read-description");
let description = document.getElementById("description");

//To start communication
console.log("in the .js file");

//When the HTML loads:
window.addEventListener('load', function() {
  console.log('HTML loaded');

  console.log(read_clicked);

   //display first image
   document.getElementById("image-display").src = "./images/image" + image_number +".PNG";
 
   ///// for NEXT BUTTON:
   let previous = document.getElementById("next-button");
   previous.addEventListener('click', function() {
    
    //description disappears before displaying next image
    var read_clicked = false;
    description.style.display = "none";

    //to restrict the domain of 'num_images'
    if (image_number < num_images){
      //next image
      image_number++;
      console.log("image", image_number, "is being displayed.");
    }else{
      image_number = 1;
    }

    //to update image displayed
    document.getElementById("image-display").src = "./images/image" + image_number +".PNG";

   })


   ///// for PREVIOUS BUTTON:
    let next = document.getElementById("previous-button");
    next.addEventListener('click', function() {

    var read_clicked = false;
    description.style.display = "none";

    //to restrict the domain of 'num_images'
    if (image_number > 1 ){
      //return to previous image
      image_number--;
      console.log("image", image_number, "is being displayed.");
    } else {
      image_number = num_images;
    }
      //to update image displayed
      document.getElementById("image-display").src = "./images/image" + image_number +".PNG";
    })


    ///// for 'READ DESCRIPTION' BUTTON:
    read_description.addEventListener('click', function() {

      //Description displays
      var read_clicked = true;
      description.style.display = "inline";

      //IMAGES and DESCRIPTIONS by numerical order
      if ((image_number == 1)&&(read_clicked == true)){
        image_displayed.src = "./images/note.jpg";
        description.innerHTML = " 'Brrrrrrr' <br> (October 20, 2020)";

      } else if ((image_number == 2)&&(read_clicked == true)){
        image_displayed.src = "./images/note.jpg";

        description.innerHTML = " 'Who's Auntie Gay?' <br> (November 4, 2020)";

      } else if ((image_number == 3)&&(read_clicked == true)){
        image_displayed.src = "./images/note.jpg";

        description.innerHTML = " 'La Jefa' <br> (November 19, 2020)";

      } else if ((image_number == 4)&&(read_clicked == true)){
        image_displayed.src = "./images/note.jpg";

        description.innerHTML = " 'Air War' <br> (March 16, 2021)";

      } else if ((image_number == 5)&&(read_clicked == true)){
        image_displayed.src = "./images/note.jpg";

        description.innerHTML = " 'SSINY' <br> (August 4, 2021)";;

      } else if ((image_number == 6)&&(read_clicked == true)){
        image_displayed.src = "./images/note.jpg";

        description.innerHTML = " 'AGARRATE' <br> (August 31, 2021)";

      }


    })

});


//Things to improve: add states to the "Read description" button, so the user is able to see the image again