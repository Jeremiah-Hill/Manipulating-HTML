$(document).ready(function(){
    let btn = $('<button>Click Me!</button>')
    $('body').append(btn);
    $(btn).click(function () {
        alert('Nice!')
    });

    $('form').submit(function () {
        let textValue = $("input[type= 'text']").val()
        alert(textValue)

    });

    let $colorDiv = $('#div')
    $colorDiv.mouseenter(
        function () {
            $colorDiv.css({
                "background-color": 'Yellow'
            })
        })
    $colorDiv.mouseleave(
        function () {
            $colorDiv.css({
                "background-color": 'transparent'
            })
        });

    $('#p').click(function () {
        let randomNumber1 = Math.floor(Math.random() * 255);
        let randomNumber2 = Math.floor(Math.random() * 255);
        let randomNumber3 = Math.floor(Math.random() * 255);

        $('#p').css("color", `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`)
    });

    let div2 = $("<div></div>");
    let btn2 = $("<button>Say My Name</button>")
    div2.append(btn2);
    $('body').append(div2);

    btn2.click(function () {
        let span = $('<span> Jeremiah </span>');
        div2.append(span);

    });

    let friends = ['Mario', 'Sonic', 'Mega Man', 'Pikachu', 'Link', 'Samus', 'Captain Falcon', 'Ness', 'Snake', 'Fox McCloud'];
    let counter = 0
    let list = $('#ul');
    $('body').append(list)
    $('#btn3').click(function () {
        if (counter < friends.length) {
            let item = $('<li></li>')
            let listItem = (friends[counter])
            counter++
            item.append(listItem)
            list.append(item)
        } else {
            alert('no more firends')

        }
    })
})
