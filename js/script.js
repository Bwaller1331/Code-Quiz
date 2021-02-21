// Dom Elements
const start_btn = document.querySelector('.start_btn button');
const info_box = document.querySelector('.info_box');
const exit_btn = info_box.querySelector('.buttons .quit');
const continue_btn = info_box.querySelector('.buttons .restart');
const quiz_box = document.querySelector('.quiz_box');

//Start Button On Click
// Shows the info box
start_btn.onclick = ()=>{
    info_box.classList.add('activeInfo');
}
//Exit Button On Click
// Hides Info Window
exit_btn.onclick = ()=>{
    info_box.classList.remove('activeInfo');
}
//Continue Button On Click
//Hides Info box and shows quiz box
continue_btn.onclick = ()=>{
    info_box.classList.remove('activeInfo'); //Hide Info Box
    quiz_box.classList.add('activeQuiz'); //Show Quiz Box
}

let que_count = 0;

//getting questions and answers form array
function showQuestions(){
    const que_text = document.querySelector('.que_text');
    let que_tag =' <span>'+ questions[0].question +'</span>'; //I wasn't able to get this line to work and I didn't give myself enough time for it. 
    que_text.innerHTML - que_tag;
}