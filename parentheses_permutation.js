function brackets(left, right, text){
    if(left > 0){
        let texts = text + "(";
        brackets(left - 1, right + 1, texts);
    }
    if(right > 0){
        let texts = text + ")";
        brackets(left, right - 1, texts);
    }
    if(left === 0 && right === 0){
        console.log(text);
    }
}
brackets(3, 0, "");