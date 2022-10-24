function filterDay(date) {
    let newDate = date.slice(8, 10)+"/"+date.slice(5, 7) +"/" +date.slice(0, 4)
    return newDate
}
function filterHour(date) {
    return date.slice(11,16)
}
export {
    filterDay,
    filterHour
}