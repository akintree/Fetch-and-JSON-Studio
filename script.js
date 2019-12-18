// TODO: add code here
window.addEventListener("load", function(){
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        // console.log(response);
        response.json().then(function(json){
            // console.log(json);
            const astronautInfo = document.getElementById("container");
            // let statusActive = document.querySelectorAll("#activeStatus");
            let counter = 0;
            let num = json[0].hoursInSpace;
            let newArray = [];
            let i = 0;

            for (i=0; i<json.length; i++){
                counter += 1;
                astronautInfo.innerHTML += 
                `<div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li id="activeStatus" style="color: black;">Active: ${json[i].active}</li>
                            <li>Skills: ${json[i].skills.join(', ')}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${json[i].picture}">
                </div>
                <p>Astronaut Count = ${counter}</p>
                `;

                // if (json[i].active === true) {
                //     statusActive.style.color = "green";
                // };
            };
            // function findMaximumNum() {
            // for (i=0, i<json.length, i++) {
            //     if(json[i].hoursInSpace > num) {
            //         num = json[i].hoursInSpace;
            //     };
            // };
            // return num;            
            // };

    });
});
});