document.addEventListener("DOMContentLoaded", function () {
    let myBtn = document.createElement("Button");
    let btnText = document.createTextNode("Click Me!");
   myBtn.addEventListener("click", function () {
    window.alert('Nice!');
   });
    myBtn.appendChild(btnText);
    document.body.appendChild(myBtn);

    let div = document.getElementById('Content');

    let submitBtn = document.getElementById('submitBtn')
    submitBtn.addEventListener('click', function () {
        let btnAlert = document.getElementById('textBox').value;
        window.alert(btnAlert);
    });

    div.onmouseover = function () {
        this.style.backgroundColor = 'yellow';
    };

    div.onmouseout = function () {
        this.style.backgroundColor = 'transparent';
    };

    let p = document.getElementById('changeColor')

    p.addEventListener("click", function () {
        let colors = [
            "red",
            "orange",
            "pink",
            "turquoise",
            "magenta",
            "green",
            "purple",
            "blue",
            "grey"
        ];

        let randomNum = Math.floor(Math.random() * colors.length);
        changeColor.style.color = colors[randomNum];
    }
    )

    let divBtn = document.createElement('button');
    let divBtnText = document.createTextNode('Say My Name');
    divBtn.appendChild(divBtnText);
    document.body.appendChild(divBtn)
    let btnDiv = document.createElement('div')

    divBtn.addEventListener("click", function () {
        let span = document.createElement('span')
        let spanText = document.createTextNode('Jeremiah ');
        span.appendChild(spanText);
        document.body.appendChild(span);
    })

    let listBtn = document.createElement('button');
    let listBtnText = document.createTextNode('My Friends');
    listBtn.appendChild(listBtnText)
    document.body.appendChild(listBtn)


    let friends = ['Mario', 'Sonic', 'Mega Man', 'Pikachu', 'Link', 'Samus', 'Captain Falcon', 'Ness', 'Snake', 'Fox McCloud']
    let counter = 0;
    let list = document.createElement('ul');
    document.body.appendChild(list);
    listBtn.addEventListener('click', function () {
        if (counter < friends.length) {
            let item = document.createElement('li');
            let itemText = document.createTextNode(friends[counter]);
            counter++;
            item.appendChild(itemText);
            list.appendChild(item);
        } else {
            alert("no friends left!")
        }
    });
})