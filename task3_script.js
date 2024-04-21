
document.getElementById("submitAdd").addEventListener("click", add)


function add() {
    event.preventDefault()
    var task = document.getElementById("title").value
    const breaker = document.createElement("br")

    console.log(task)
    //responseElement.innerElement = task.value

    // Obtain the ID of the target element to output.

    let outputElement = document.getElementById("output")
    outputElement.innerHTML += task + breaker.innerHTML

}