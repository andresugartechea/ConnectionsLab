
let allArtists;

window.addEventListener("load", () => {    //equivalent to: window.addEventListener("load", function(){
    console.log("page is loaded");
    
    fetch("./mexartists.json") //fetching (asking for and getting) the info from the URL
    .then(response => response.json()) // returning the Promise Object which contains data
    .then((data) =>{

        // console.log(data);
        allArtists = data.Artists;


        //To access each element in Object
        for (i in allArtists) {

            //To access the names
            console.log(allArtists[i].Name);

            //(STEP 1) we create a list for each artist and we assign them a class
            let listItem = this.document.createElement('li');
            listItem.classList.add("list__item");

            //(STEP 4) we add the information to each one;
            listItem.textContent = (allArtists[i].Name + " (" +   allArtists[i].Pronouns) + ")";

            //(STEP 5) we change the style of each box
            listItem.style.height = "200px";
            listItem.style.width = "370px"
            listItem.style.color = "white"
            
            //how can I use images as background here(?)


            //(STEP 3) append the elements created to the 'ul' list in the html file
            let list = document.getElementById("list");
            list.appendChild(listItem);

        }

    })
})

//1. remove "function()arg" -- "(arg)=>  (it's equivalent)"
//2. remove the { } if there is only one line
//3. you can delete in this case return if it's one line (see line 9 and compare to line 11)