const destinations=  [{
			"city": "London",
			"imageUrl": "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80"
		},
		{
			"city": "Paris",
			"imageUrl": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1952&q=80"
		},
		{
			"city": "Milano",
			"imageUrl": "https://images.unsplash.com/photo-1615915017883-ff58d7e33b0c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
		},
		{
			"city": "Montreal",
			"imageUrl": "https://images.unsplash.com/photo-1519178614-68673b201f36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1868&q=80"
		},
		{
			"city": "Japan",
			"imageUrl": "https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=80"
		},
		{
			"city": "India",
			"imageUrl": "https://images.unsplash.com/photo-1587135941948-670b381f08ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
		},
		{
			"city": "Greece",
			"imageUrl": "https://images.unsplash.com/photo-1532234604265-fe9ed3175d5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"
		},
		{
			"city": "Penang",
			"imageUrl": "https://images.unsplash.com/photo-1608982413524-3a3e1c1accb3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80"
		}
	];

    document.getElementById("gallery").innerHTML = `
    ${destinations.map(function(cites){
        return `
        <div class="image-box">
            <img class="image-style" src="${cites.imageUrl}">
            <p>${cites.city}</p>
        </div>
        `
    }).join("")};
    `


