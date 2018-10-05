//In the beginning make button disable
document.getElementById('btn').disabled=true;
document.getElementById('btn').style.backgroundColor='#c7cfd8';
//Control if input is number, character or not
function isNumeric(evt){       
    var letters= /[^a-zA-ZşŞıİçÇöÖüÜĞğ]+$/;
    var inputNumbers= /[^0-9]+$/;
    var inputText=document.getElementById('inputbox').value;
    //Set backgroundColor white and text color black when change something in textbox  
    document.getElementById('inputbox').style.backgroundColor='white';
    document.getElementById('inputbox').style.color='black';
    //check whether user enter number with letters or not
   /* if(inputText.match(inputNumbers) || !inputText.match(letters)){
        document.getElementById("inputbox").value='';
        document.getElementById('warning').innerHTML='Lütfen sadece rakam veya işaret giriniz!'; 
        document.getElementById('btn').disabled=true;
    }
*/
    //check backspace
    if(event.keyCode==8){
        if(inputText==''){
            document.getElementById('btn').disabled=true;
            document.getElementById('btn').style.backgroundColor='#c7cfd8';
            document.getElementById('warning').innerHTML=''
        }
    }

    //check whether input is text or not
    //check whether input is whitespace or not
    if(!inputText.match(letters) || event.keyCode==32){
        /*button disabled */
        document.getElementById('btn').disabled=true;
        document.getElementById('btn').style.backgroundColor='#c7cfd8';
        /*button disabled */
        //if letter is entered make inputbox empty
        document.getElementById("inputbox").value='';
        //if letter is entered make inputbox empty
        document.getElementById('warning').innerHTML='Lütfen sadece rakam veya işaret giriniz!';       
    }else{
        document.getElementById('btn').disabled=false;
        document.getElementById('btn').style.backgroundColor='coral';
        document.getElementById('btn').style.cursor='pointer';
        document.getElementById('warning').innerHTML=''
    }     
}

//ConvertText
function convertText(){   
    document.getElementById('btn').disabled=true;
    document.getElementById('btn').style.backgroundColor='#c7cfd8';
    var numbers= [0,1,2,3,4,5,6,7,8,9];
    var GetValue=document.getElementById('inputbox').value;
    var GetValue=GetValue.split("");
    var tempNumber=[];
    var tempIndex=[];
    var tempNumberNew=[];
    var NewValue='';
    //Take value from texbox and push them into tempIndex Array
    for(var i=0;i<GetValue.length;i++){
        for(var k=0;k<numbers.length;k++){
            if(GetValue[i]==numbers[k]){
                tempNumber=tempNumber+GetValue[i];
                tempIndex.push(i);
            }
        }       
    }
    //convert number
    //Push all the numbers in tempNumber into tempNumberNew
    for(var l=tempIndex.length-1;l>=0;l--){
        tempNumberNew.push(tempNumber[l]);        
    }
    //Change number Values in GetValue according to their index order
    for(var m=0;m<tempIndex.length;m++){
        GetValue[tempIndex[m]]=tempNumberNew[m];

    }
    //Add GetValue array into string to write appropriately into NewValue
    for(var i=0;i<GetValue.length;i++){
        NewValue=NewValue+GetValue[i];
    }
    //Change texbox value and change background color of textbox
    document.getElementById('inputbox').value=NewValue;
    document.getElementById('inputbox').style.backgroundColor='#689fe2'; 
    document.getElementById('inputbox').style.color='white';   
    
    
    

}
