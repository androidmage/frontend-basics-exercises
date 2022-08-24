function setup_slide() {
    const items = document.getElementsByClassName("item-link");
    const links = [...items];

    links.forEach(element => {
        const slide = element.parentNode.getElementsByClassName('slide')[0];

        if (slide) {
            element.addEventListener('mouseover', () => {
                console.log('testing');
                slide.style.transform = 'translateY(-' + slide.offsetHeight + 'px)';
            })
        
            element.addEventListener('mouseout', () => {
                slide.style.transform = '';
            })
        }

    });
}

function displayData() {
    alert("first name: " + document.getElementById("first-name").value
        + "\nlast name: " + document.getElementById("last-name").value
        + "\nemail: " + document.getElementById("email").value
        + "\norder: " + document.getElementById("order").value
        + "\nmessage: " + document.getElementById("message").value);
  }

function scrollToHome() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function scrollToCollection() {
    document
	    .getElementById("collection")
	    .scrollIntoView({behavior: "smooth"});
}

function scrollToAbout() {
    document
	    .getElementById("about")
	    .scrollIntoView({behavior: "smooth"});
}

function scrollToContact() {
    document
	    .getElementById("contact")
	    .scrollIntoView({behavior: "smooth"});
}
