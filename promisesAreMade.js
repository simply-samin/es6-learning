let myPromise = new Promise((resolve, reject) => {
	// call an api

	let user = {
		name: 'Samiul',
		email: 'samin@outlook.com'
	};

	setTimeout(() => {
		resolve(user)
	}, 2000);
});


const getAdditionalUserData = user => {
	document.getElementById('output').innerHTML = `${user.name} (${user.email})`

	return new Promise((resolve, reject) => {
		//calling another api to get more user data

		user.favoriteColor = 'Blue'
		user.currentDrink = 'La Croix'

		setTimeout(()=> {
			resolve(user);
		}, 2000);

	})
}

myPromise
	.then(getAdditionalUserData)
	.then(user => {
		document.getElementById('output').innerHTML = `${user.name} (${user.email}) - ${user.currentDrink}`
	})


document.getElementById('output').innerHTML = `look ma, no blocking`