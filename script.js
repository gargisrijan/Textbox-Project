let ib=document.getElementById('t1');
ib.addEventListener('focus',f1);
ib.addEventListener('blur',f2);
ib.addEventListener('change',f3);
ib.addEventListener('input',function(){

    let ibb=document.getElementById('t1');
    let char=ibb.value ;
    console.log(char);
    
})
function f1()
{
    let ibb=document.getElementById('t1');
    ibb.style.background="pink";
    ibb.style.border="2px solid black";
}

function f2()
{
    let ibb=document.getElementById('t1');
    ibb.style.background="green";
    
}

function f3()
{
    let ibb=document.getElementById('t1');
    let char=ibb.value ;
    console.log(char);
}


