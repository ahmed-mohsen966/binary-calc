window.addEventListener("load",function(){

function action(e){
    var btn = e.target;
    let action= document.getElementById(btn.id).innerHTML;
    let res= document.getElementById("res");

    switch(action)
    {
        case '0':
        case '1':
        case '+':
        case '-':
        case '*':
        case '/':
            res.innerHTML += action;
            break;
        case 'C':
            res.innerHTML = '';
            break;
        case '=':
            let expr = res.innerHTML;
            let nums = /(\d+)/g;
            expr = expr.replace(nums, function(match) {  // replacing base 2 numbers to base 10
                return parseInt(match, 2);
            })
            res.innerHTML = Math.floor(eval(expr).toString(2));
            break;
            default:
                res.innerHTML += action;
                break;
    }

}
this.document.getElementById("btn0").onclick=action;
this.document.getElementById("btn1").onclick=action;
this.document.getElementById("btnClr").onclick=action;
this.document.getElementById("btnEql").onclick=action;
this.document.getElementById("btnSum").onclick=action;
this.document.getElementById("btnSub").onclick=action;
this.document.getElementById("btnMul").onclick=action;
this.document.getElementById("btnDiv").onclick=action;


});