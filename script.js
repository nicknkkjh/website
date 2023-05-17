let cal = prompt('수식 입력');
if (cal == null) {
    alert("잘못입력하셨샤")
    

} else {
    document.write(cal, "=", eval(cal));
}

