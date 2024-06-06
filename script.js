const itemsArray=localStorage.getItem("items")? JSON.parse(localStorage.getItem("items")):[]

console.log(itemsArray)

let enterBTN=document.getElementById("enter")
enterBTN.addEventListener("click",()=>{
    
    const item = document.getElementById("item")
    createItem(item)
})
function displayItems(){
    let items=""
    for(i in itemsArray){
        items +=`<div class="item">
                    <div class="input-controller">
                        <textarea disabled>${itemsArray[i]}</textarea>
                        <div class="edit-controller">
                            <i class="fa-solid fa-trash deleteBTN"></i>
                            <i class="fa-solid fa-pen-to-square editBTN"></i>
                        </div>
                    </div>
                    <div class="update-controller">
                        <button class="saveBTN">SAVE</button>
                        <button class="cancelBTN">CANCEL</button>
                    </div>
                </div>`
    }
    document.querySelector(".to-do-list").innerHTML=items
    activateDeleteListners()
    activateEditListners()
    activateSaveListners()
    activateCancelListners()
}

function activateDeleteListners(){
    let deleteBTN=document.querySelectorAll(".deleteBTN")
    deleteBTN.forEach((db,i)=>{
        db.addEventListener("click",()=>{deleteItem(i)})
    })
}

function deleteItem(i){
    itemsArray.splice(i,1)
    localStorage.setItem("items",JSON.stringify(itemsArray))
    location.reload()
}

function activateEditListners(){
    const editBTN=document.querySelectorAll(".editBTN")
    const updateController=document.querySelectorAll(".update-controller")
    const inputs=document.querySelectorAll(".input-controller textarea")
    editBTN.forEach((eb,i)=>{
        eb.addEventListener("click",()=>{
            updateController[i].style.display="block"
            inputs[i].disabled=false
        })
    })
}

function activateSaveListners(){
    const saveBTN=document.querySelectorAll(".saveBTN")
    const inputs=document.querySelectorAll(".input-controller textarea")
    saveBTN.forEach((sb,i)=>{
        sb.addEventListener("click",()=>{
            updateItem(inputs[i].value,i)
        })
    })
}

function activateCancelListners(){
    const cancelBTN=document.querySelectorAll(".cancelBTN")
    const updateController=document.querySelectorAll(".update-controller")
    const inputs=document.querySelectorAll(".input-controller textarea")
    cancelBTN.forEach((cb,i)=>{
        cb.addEventListener("click",()=>{
            updateController[i].style.display="none"
            inputs[i].disabled=true
           
        })
    })
}

function updateItem(text , i){
    itemsArray[i]=text
    localStorage.setItem("items",JSON.stringify(itemsArray))
    location.reload()
}

function createItem(item){
    itemsArray.push(item.value)
    localStorage.setItem("items",JSON.stringify(itemsArray))
    location.reload()
}

function displayDate(){
    let date=new Date()
    
    date = date.toString().split(" ")
    document.querySelector("#date").innerHTML=date[1]+" "+date[2]+" "+date[3]
}

window.onload=function(){
    displayDate();
    displayItems();
}
 