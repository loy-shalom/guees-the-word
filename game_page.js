player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="question turn - "+ player1_name;
document.getElementById("player_answer").innerHTML="answer turn - "+ player2_name;
function send()
{
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log("word in lower case= "+word);
    charat1=word.charAt(1);
    console.log(charat1);
    length_divide=Math.floor(word.length/2);
    charat2=word.charAt(length_divide);
    console.log(charat2);
    length_minus=word.length-1;
    charat3=word.charAt(length_minus);
    console.log(charat3);
    remove_charat1=word.replace(charat1,"_");
    remove_charat2=remove_charat1.replace(charat2,"_");
    remove_charat3=remove_charat2.replace(charat3,"_");
    console.log(remove_charat3);
    question_word="<h4 id='word_display'> Q. "+remove_charat3+"</h4>";
    input_box="<br> Answer : <input type='text' id='input_check_box'>";
    check__button="<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    row=question_word+input_box+check__button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}