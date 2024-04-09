const button = document.getElementById("initiate")
        button.addEventListener("click", async function fetchWeatherData(){

            try {
                const response = await fetch("weatherapi.com/data");
                const data = await response.json();

                const dataDiv = document.getElementById("data");
                dataDiv.innerHTML = ""
                data.forEach(element => {
                    const pName = document.createElement("p");
                    pName.innerText = element["name"];
                    dataDiv.insertAdjacentElement("beforeend", pName);
                })

            } catch (error) {
                console.log("Error retrieving weather data: ", error);

            }
        })