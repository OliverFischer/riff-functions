module.exports = e => {
    const sum = e.split(',').reduce((acc,cur) => parseInt(acc) + parseInt(cur))
    return sum
}
