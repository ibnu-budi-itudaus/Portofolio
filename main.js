function toggleDetail(e) {
    const target = $(e.target)

    if($(target).hasClass("active")) {
        $(target).html("More Info").removeClass("active")
    } else {
        $(target).html("Less Info").addClass("active")
    }

    const item = $(target).parents(".exp-item")
    const detail = $(item).children(".exp-item-detail")
    $(detail).slideToggle()
   

}

function onFormSubmit(e) {
    e.preventDefault()
    const email = $("#in_email")
    const subject = $("#in_subject")
    const message = $("#in_message")


    if(!$(email).val()) {
        alert("Email is required")
    } else if (!$(subject).val()) {
        alert("Subject is required")
    } else if (!$(message).val()) {
        alert("Message is required")

    } else {
        alert("Form Submitted")
        $(email).val("")
        $(subject).val("")
        $(message).val("")
    }
}