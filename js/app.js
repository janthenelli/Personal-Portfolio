

$(".project-btn").hover(() => {
    $(".fa-angle-double-right").addClass("rotate")
}, () => {
    $(".fa-angle-double-right").removeClass("rotate")
})

$(".learn-more-btn").click(() => {
    console.log('clicked')
    $(".modal").modal('toggle')
})

