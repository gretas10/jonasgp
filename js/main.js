//Jonas' code for fetching


function getData () {
    fetch("http://lykowska.com/wordpress/wp-json/wp/v2/projects?_embed")
    .then(res=>res.json())
    .then(showProjects);
}



function showProjects(data){

    let list = document.querySelector("#list");
    let template = document.querySelector("#projectTemplate").content;



    data.forEach(function(theProject){
        console.log(theProject);
        let clone = template.cloneNode(true);
        let title = clone.querySelector(".title");
        let year = clone.querySelector(".year");
        let description = clone.querySelector(".description");
        let img = clone.querySelector("img.pro");
        let soundcloud = clone.querySelector(".soundcloud");




        title.innerHTML = theProject.title.rendered;
        year.textContent = theProject.acf.year;
        description.innerHTML = theProject.acf.description;
        img.setAttribute("src", theProject._embedded["wp:featuredmedia"]["0"].media_details.sizes.medium_large.source_url);


     // document.getElementById('soundcloud').src = theProject.content.rendered;

       soundcloud.setAttribute("src", theProject.content.rendered);






    list.appendChild(clone);
})





}



getData ();
