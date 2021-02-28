let array = ['goran', 'dragan', 'sneza', 'knesija', 'irina', 'saska', 'goran', 'sonta', 'tufna', 'maceto'];

// creating main div for putting all new elements into
let mainDiv = document.createElement('div');
mainDiv.style.width = '100%';
document.body.appendChild(mainDiv);

// creating new div element with value from array
array.forEach(word => {
    let el = document.createElement('div');
    mainDiv.appendChild(el);
    el.textContent = word;
    el.style.padding = '10px';
    el.style.border = '1px solid black';
    el.style.display = "inline-block";
    el.style.fontWeight = '600';
    el.style.textTransform = 'capitalize';

    // removing element with mouse click
    el.addEventListener('click', () => {
        // getting the index value of clicked element
        let idx = array.indexOf(el.textContent);
        console.log(idx)
        // removing cliced value from array
        array.splice(idx, 1)
        console.log(array);
        // removing clicked element from page
        mainDiv.removeChild(el);
    })

    // hover effect
    el.addEventListener('mouseover', () => {
        el.style.color = "white";
        el.style.backgroundColor = "red";
        el.style.transition = '0.3s ease-in';
    })
    el.addEventListener('mouseout', () => {
        el.style.color = "black";
        el.style.backgroundColor = "white";
    })
})