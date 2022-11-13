const appendElements = function() {
    const content = document.getElementById('content');

    let image = document.createElement('img');
    image.setAttribute('src', '/src/adiga-adige-circassia-circassian-logo-FC0A50B801-seeklogo.com.png');

    let heading = document.createElement('h1');
    heading.innerText = "Taste authentic Circassian cuisine!";

    let p1 = document.createElement('p')
    p1.innerText = "Circassian cuisine is an ethnic cuisine, based on the cooking style and traditions of the Circassian people of the North Caucasus. This region lies between the Black Sea and the Caspian Sea, within European Russia.";

    let p2 = document.createElement('p')
    p2.innerText = "Circassian cuisine consists of many different traditional dishes, varying by season. The summer time traditional dishes are mainly dairy products and vegetables. In winter and spring, the traditional dishes mostly consist of flour and meat.";

    content.appendChild(image)
    content.appendChild(heading)
    content.appendChild(p1)
    content.appendChild(p2)

    return content;
}

const loadPage = function() {
    window.addEventListener('load', appendElements);

    return 
}

export { loadPage }