export function brackets(left, right, text, result){
    if(left > 0){
        let texts = text + "(";
        brackets(left - 1, right + 1, texts, result);
    }
    if(right > 0){
        let texts = text + ")";
        brackets(left, right - 1, texts, result);
    }
    if(left === 0 && right === 0){
        result.push(text)
    }
}