$(document).ready(async function() {
    for (let i = 0; i < 40; i++) {
        var previous = $("#title").text().replace(/.🐸/g, "🐸")
        console.log(previous)
        $("#title").text(previous)
        await sleep(1000)
    }
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}