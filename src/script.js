let input_value = document.querySelectorAll("input")
let form = document.querySelector("form")

let part2 = document.getElementById("part2")



form.addEventListener("submit", (dtls) => {
    dtls.preventDefault()// stoped reload

    let isInputValue = true;

    input_value.forEach((info)=>{
        if(info.value ===""){
            isInputValue = false;
        }
    })

    if (isInputValue){
        uiRander();
        removeInput();
    }
})


function uiRander() {
    let div = document.createElement("div")
    div.className = "input_card  bg-[#1A1A1A] text-white w-80 flex flex-col items-center content-center p-4";


    let imgDiv = document.createElement("div")
    imgDiv.className = "h-16 w-15 rounded-full overflow-hidden";

    let img = document.createElement("img")
    img.setAttribute("src", input_value[1].value)

    let h1 = document.createElement("h1")
    h1.className = "font-bold";
    h1.textContent = input_value[0].value;

    let p1 = document.createElement("p")
    p1.className = "font-semibold"
    p1.textContent = input_value[2].value

    let p2 = document.createElement("p")
    p2.className = "text-center"
    p2.textContent = input_value[3].value;



    imgDiv.appendChild(img)
    div.appendChild(imgDiv)

    div.appendChild(h1)
    div.appendChild(p1)
    div.append(p2)

    part2.appendChild(div)

}

function removeInput() {
    input_value.forEach(function (dts) {
        if (dts.type !== "submit") {
            dts.value = "";
        }
    })
}