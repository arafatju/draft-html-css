let availkeyWords = [
  'HTML',
  'CSS',
  'Easy Leasrning to',
  'Web Development',
  'Hello how are you',
];
const resultbox=document.querySelector(".result-box");
const inputbox=document.getElementById("input-box");

inputbox.onkeyup=function(){
    
    let result=[];
    let input=inputbox.value;
    if(input.length){
        result=availkeyWords.filter((keyword)=>{

        return keyword.toLowerCase().includes(input.toLowerCase());
    });
    console.log(result);
    }
    display(result);
    if(!result.length){
        resultbox.innerHTML='';
    }
}
function display(result){
    const content=result.map((list)=>{
    return "<li onclick=selectInput(this)>"+list+"</list>";
    });
    resultbox.innerHTML="<ul>"+content.join('')+"</ul>";
}
function selectInput(list){
    inputbox.value=list.innerHTML;
    resultbox.innerHTML='';
}