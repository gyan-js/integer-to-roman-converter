 function intToRoman(number) {
    const thousands = Math.floor(number / 1000)
    const hundreds  = Math.floor((number - thousands * 1000) / 100)
    const tens = Math.floor((number - thousands * 1000 - hundreds * 100) / 10)
    const ones = Math.floor(number - thousands * 1000 - hundreds * 100 - tens * 10)

    const r_thousands = ["", "M", "MM", "MMM"]
    const r_hundreds  = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const r_tens      = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const r_ones   = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    return r_thousands[thousands] + r_hundreds[hundreds] + r_tens[tens] + r_ones[ones]
}

export default intToRoman