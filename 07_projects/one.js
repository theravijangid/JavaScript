const button = document.querySelectorAll(".button")
const body = document.querySelector("body")

button.forEach(function(btn) {
    // console.log(btn)
    btn.addEventListener("click", function(e) {
        console.log(e.target.id)
        switch (btn) {
            case grey:
                body.style.backgroundColor = e.target.id
                break;
            case white:
                body.style.backgroundColor = e.target.id
                break;
            case blue:
                body.style.backgroundColor = e.target.id
                break;
            case yellow:
                body.style.backgroundColor = e.target.id
                break;
            default:
                break;
        }
    })
})