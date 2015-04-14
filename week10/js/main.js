	var Weezer = {
		Rivers: {
		firstName: 'Rivers',
		lastName: 'Cuomo',
		ocupation: 'vocal_and_guitar',
		//store objects within objects!
		look: {
		glasses: 'true',
		//end the last propertie without a comma
		gender: 'male',
		randomInterest: 'soccer'
		}
		},

		Patrick: {
		firstName: 'Patrick',
		lastName: 'Wilson',
		ocupation: 'drummer',
		//store objects within objects!
		look: {
		glasses: 'true',
		//end the last propertie without a comma
		gender: 'male',
		randomInterest: 'EP'
		}
		},

		Jason: {
		firstName: 'Jason',
		lastName: 'Cropper',
		ocupation: 'guitar',
		//store objects within objects!
		look:{
		glasses: 'either',
		//end the last propertie without a comma
		gender: 'male',
		randomInterest: 'nothing'
		}
		},

		Matt: {
		firstName: 'Matt',
		lastName: 'Sharp',
		ocupation: 'bass',
			//store objects within objects!
			look: {
			glasses: 'either',
			//end the last propertie without a comma
			gender: 'male',
			randomInterest: 'falsetto'
			}
		}
	}

	for(var member in Weezer){
	var weezerInfo = Weezer[member];


	//div
	var container = document.createElement('div');
	//title
	var title = document.createElement('h2');

	var occupation = document.createElement('div');
	var glasses = document.createElement('div');
	var gender = document.createElement('div');
	var randomInterest = document.createElement('div');
	//fill title with contact name
	title.innerHTML = 'this weezer member is : ' + weezerInfo.firstName +' '+ weezerInfo.lastName;
	occupation.innerHTML = 'he plays ' + weezerInfo.ocupation + ' in the band.';
	glasses.innerHTML = 'dose he wear glasses? ' + weezerInfo.look.glasses ;
	gender.innerHTML = 'and what is his gender? ' + weezerInfo.look.gender ;
	randomInterest.innerHTML = 'Here is a random interest of him: ' + weezerInfo.look.randomInterest ;
	//place the html element wihtin the DOM
	//add titel to container
	container.appendChild(title);
	container.appendChild(occupation);
	container.appendChild(glasses);
	container.appendChild(gender);
	container.appendChild(randomInterest);
	//add to webpage
	document.body.appendChild(container);

	console.log(weezerInfo);
	//list everysingle element within the objects(contacts) inside contactList
	console.log(Weezer[member]);
	}
	var matt = Weezer.matt;
	//access data within an object using dot notation
	console.log(Weezer.Matt.firstName);
	// console.log(matt['ocupation']);