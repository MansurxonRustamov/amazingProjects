let createI = document.querySelector(".createI")
	btnA = document.querySelector(".btnA")
	resultBox = document.querySelector(".resultBox")
	dataCheck = document.querySelectorAll(".sa")

btnA.addEventListener("click",()=>{
	ritem1 = document.querySelectorAll(".ritem")
	taskinfo = {name:createI.value.trim(), status:"dont"}

	if (createI.value.trim() != ""){
		localStorage.setItem(`task${ritem1.length !=0 ? ritem1.length+1 : 1}`, JSON.stringify(taskinfo))
		ritem2()
	}else{
		alert("yozing")
	}

})

function ritem2() {
	ritem = document.querySelectorAll(".ritem")

	let ritemDiv = document.createElement("div")
	ritemDiv.classList.add("ritem")
	datJs = JSON.parse(localStorage.getItem(`task${ritem.length !=0 ? ritem.length+1 : 1}`))
	ritemDiv.innerHTML = `<input type="checkbox" id="task${ritem.length+1}" data-check> <label for="task${ritem.length+1}">${datJs.name}</label> `
	resultBox.appendChild(ritemDiv)
}

function ritem3() {
	ritem = document.querySelectorAll(".ritem")
	
	for(let ib = 0;  ib < 1000; ib++){
		let ritemDiv = document.createElement("div")
		ritemDiv.classList.add("ritem")
		datJs = JSON.parse(localStorage.getItem(`task${ib+1}`))
		ritemDiv.innerHTML = `<input type="button" id="task${ib+1}" class="sa" value="sa"> <label for="task${ib+1}">${datJs.name}</label> `
		resultBox.appendChild(ritemDiv)
	}
}
ritem3()


dataCheck.forEach((item)=>{
	item.addEventListener("click",()=>{
		console.log(item)
	})
})
console.log(dataCheck)
