const error_code_set = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "10", "11", "12", "13", "14", "15", "17", "18",
    "19", "1A", "1B", "1C", "1D", "1E", "1F", "A",
    "B", "C", "D", "E", "F"
]

function checkErrorCodeInText(text) {
    let match = null;
    error_code_set.some(code => {
        const regex = new RegExp(`\\b${code}\\b`, 'i');
        const result = regex.test(text);
        if (result){
            match = code;
            return true;
        }
    });
    return match || null;
}
export default checkErrorCodeInText;