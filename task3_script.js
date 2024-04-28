
document.getElementById("submitAdd").addEventListener("click", add)


function add() {
    event.preventDefault()
    var task = document.getElementById("title").value
    const item = document.createElement("li")
    const name = document.createTextNode(task)

    console.log(task)
    //responseElement.innerElement = task.value

    // Obtain the ID of the target element to output.

    item.appendChild(name)
    document.getElementById("output").appendChild(name)


}