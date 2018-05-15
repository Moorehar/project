/*
 * Add your JavaScript to this file to complete the assignment.
 */
/*window.addEventListener('click',  function twitCreationClick(event) 
{
	var redButton = document.getElementByClass('modal-accept-button');
	console.log("Event was clicked", event.target);

	if (event.target.classList.contains('modal-accept-button')){
		alert("The button was clicked");
	}
	
	
}
*/


/*var windows = document.getElementsByClassName('hidden');
for (var i = 0; i < windows.length; i++) {
	windows[i].addEventListener('click', handleWindowClick)
}*/

/*var redButton = document.getElementById('create-twit-modal');
redButton.addEventListener('click', function(event) {
	if (event.target.classList.contains('create-twit-modal')) {
			console.log(getElementbyId('create-twit-modal'));
	}
});
*/
//Gets the create twit modal
var modal = document.getElementById('create-twit-modal');
//Gets the backdrop for the twit modal
var backdrop = document.getElementById('modal-backdrop');


///////////////USED TO OPEN UP BOX ADD MODAL BOX///////////

//Gets the button that will open up the twit modal
var createButon = document.getElementById('create-twit-button');

createButon.onclick = function() //When I click on the create button....
{
	modal.classList.toggle('hidden'); //unhides the modal
	backdrop.classList.toggle('hidden'); //unhides the backdrop
}


//////////////////////////////////////////////////////////////

////////////////USED TO CLOSE THE MODAL WITH CANCLE AND THE x//////////////
//Gets the x box for the twit modal
var closeBox = document.getElementsByClassName("modal-close-button")[0];

closeBox.onclick = function() //When I click on the x button...
{
	modal.classList.toggle('hidden'); //hides the modal
	backdrop.classList.toggle('hidden'); //hides the backdrop
}

//Gets the close box for the twit modal
var cancleBox = document.getElementsByClassName("modal-cancel-button")[0];

cancleBox.onclick = function() //When I click on the cancle button...
{
	modal.classList.toggle('hidden'); //hides the modal
	backdrop.classList.toggle('hidden'); //hides the backdrop
}
///////////////////////////////////////////////////////////////////////////

var acceptBox = document.getElementsByClassName("modal-accept-button")[0];


acceptBox.onclick = function() //When I click on the cancle button...
{
	
	alert("There is nothing in the text boxes.");
	modal.classList.toggle('hidden'); //hides the modal
	backdrop.classList.toggle('hidden'); //hides the backdrop
/*
<article class="twit">
  <div class="twit-icon">
    <i class="fa fa-bullhorn"></i>
  </div>
  <div class="twit-content">
    <p class="twit-text">
      <--! Put the twit text entered by the user here. -->
    </p>
    <p class="twit-attribution">
      <a href="#"><--! Put the twit author entered by the user here. --></a>
    </p>
  </div>
</article>
*/

	//Create a new twit that is placed at the end of the main
	//Change content of class 'twit-text' to what user entered //title
	//Change content of class 'twit attribution' to what user entered //author
}

//function createNewBlock()
//{
	var artcl = document.createElement("ARTICLE"); //create an article element
	document.getElementByClass("twit-text").body.append(artcl); //moves artcl to bottom of boxes

	var divTwitIcon = document.createElement("DIV");
	document.getElementByClass("twit-icon").artcl.append(divTwitIcon);

	var bullhorn = document.createElement("I");
	document.getElementByClass("fa fa-bullhorn").divTwitIcon.append(bullhorn);

	var divTwitContent = document.createElement("DIV");
	document.getElementByClass("twit-content").artcl.append(divTwitContent);

	var pTwitText = document.createElement("P");
	document.getElementByClass("twit-text").divTwitContent.append(pTwitText);

	var pAttribute = document.createElement("P");
	document.getElementByClass("twit-attribution").divTwitContent.append(pAttribute);

	var pAttribAuth = document.createElement("A");
	document.getElementByHref("#").pAttribute.append(pAttribAuth);


//	var container = document.getElementByArticle('twit');
//	var container = $("<article>");
//	container.addClass("twit");

//	var divIcon = document.GetElementByDiv('twit-icon');

//	var divIcon = $("<div>");
//	divIcon.addClass("twit-icon");
//	container.append(divIcon);
	//<article class="twit">
	//	<div class="twit-icon"> </div>

//	var divIconImage = document.getElementByI("fa fa-bullhorn");

//	var divIconImage = $("<i>");
//	divIconImage.addClass("fa fa-bullhorn")
//	divIcon.append(divIconImage)
	//<article class="twit">
	//	<div class="twit-icon">
	//		<i class="fa fa-bullhorn"> </i>
	//	</div>

//	var divContent = document.getElementByDiv

//	var divContent = $("<div>");
//	divContent.addClass("twit-content");
//	container.append(divContent);
	//<article class="twit">
	//	<div class="twit-icon">
	//		<i class="fa fa-bullhorn"> </i>
	//	</div>
	//	<div class="twit-content">

//	var twitText = $("<p>");
//	twitText.addClass("twit-text");
//	divContent.append(twitText);
	//<article class="twit">
	//	<div class="twit-icon">
	//		<i class="fa fa-bullhorn"> </i>
	//	</div>
	//	<div class="twit-content">
	//		<p class = "twit-text">

//	var twitTextArea = $("<textarea>");
//	twitTextArea.text("twit-text-input"); //adds what the user inputed for message
//	twitText.append(twitTextArea);
	//<article class="twit">
	//	<div class="twit-icon">
	//		<i class="fa fa-bullhorn"> </i>
	//	</div>
	//	<div class="twit-content">
	//		<p class = "twit-text">
	//			<textarea> --what the user inputs-- </textarea>	
	//		</p>

//	var twitAttrib = $("<p>");
//	twitAttrib.addClass("twit-attribution");
//	divContent.append(twitAttrib);
	//<article class="twit">
	//	<div class="twit-icon">
	//		<i class="fa fa-bullhorn"> </i>
	//	</div>
	//	<div class="twit-content">
	//		<p class = "twit-text">
	//			<textarea> --what the user inputs-- </textarea>	
	//		</p>
	//		<p class = "twit-attribution")

//	var twitAttribArea = $"<a>";

//	twitAttribArea.addHref('#');
//	twitAttribArea.text("twit-attribute-input"); //adds what the user inputed for author
//	twitAttrib.append(twitAttribArea);
	//<article class="twit">
	//	<div class="twit-icon">
	//		<i class="fa fa-bullhorn"> </i>
	//	</div>
	//	<div class="twit-content">
	//		<p class = "twit-text">
	//			<textarea> --what the user inputs-- </textarea>	
	//		</p>
	//		<p class = "twit-attribution")
	//			<a href='#'> ----what the user inputs for author--- </a>
	//		</p>
	//	</div>
	//</article>




//}











