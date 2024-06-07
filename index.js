
let text = document.querySelector('textarea');
let button = document.querySelector('button');
let img = document.querySelector('img');


async function query(data) {
	let response = await fetch(
		"https://api-inference.huggingface.co/models/Ojimi/anime-kawai-diffusion",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	let result = await response.blob();
	return result;
}

button.addEventListener('click',()=>{
		query({inputs: text.value}).then((response) => {
			let objectURL = URL.createObjectURL(response);
			img.src = objectURL;
		});
})

