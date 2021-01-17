// ====================== Start Age Calculater ====================
function getinfo(){

    var day = document.getElementById("dob-day").value;
    var month =  document.getElementById("dob-month").value;
    var year = document.getElementById ("dob-year").value;
    var placee = document.getElementById("daysanswer");
    var nam= document.getElementById("name").value;
    // alert(day + month + year);

    var fyear = (2021 -year)* 365;
       
    var fmonth = (month)* 30;
    // fdays += fmonth;
    var ffmonth= fyear + fmonth;
    
    
    placee.textContent ="Hi "+ nam + " !!!  You Lived the days are  " + ffmonth;
}

// =============================== End Age Calculater ==========================

// ==================================Start Record List==========================
var listarray = ["record 1"];
function getRecord(){
    var recordText = document.getElementById("listtext").value;
    // var totalItems = document.getElementById("total").value;
     var displayarea = document.getElementById("area");
     listarray.push(recordText);

     for(var i=1; i<listarray.length; i++)
     {
         var disply = disply + "    " + listarray[i] ;
        
         
        
     }
    displayarea.textContent = disply ;
    
    
}

// ============================== Marks calculater ==============================

// display Block button   // click Button
function Dispaly_Block() {
    
var TotalSubjectsSelected = document.getElementById("NoOfSubjects").value;


    if(TotalSubjectsSelected == 4)
    {
        var For_4_Subjects = document.getElementById("For_4_Subjects");
        For_4_Subjects.style.display="block";
    }
    else if(TotalSubjectsSelected== 5)
    {
        var For_5_Subjects = document.getElementById("For_5_Subjects");
        For_5_Subjects.style.display="block";
        alert(" Not completed yet ! Sorry for intrupted You, Dispay Result On right side will work\n on 4 Subjects Only But Result will show on Alert PopUP");
    }
    else if(TotalSubjectsSelected == 6)
    {
        var For_6_Subjects = document.getElementById("For_6_Subjects");
        For_6_Subjects.style.display="block";
        alert(" Not completed yet ! Sorry for intrupted You, Dispay Result On right side will work\n on 4 Subjects Only But Result will show on Alert PopUP");
    }
    else if(TotalSubjectsSelected == 7)
    {
        var For_7_Subjects = document.getElementById("For_7_Subjects");
        For_7_Subjects.style.display="block";   
        alert(" Not completed yet ! Sorry for intrupted You, Dispay Result On right side will work\n on 4 Subjects Only But Result will show on Alert PopUP");

    }
    else if(TotalSubjectsSelected == 8)
    {
        var For_8_Subjects = document.getElementById("For_8_Subjects");
        For_8_Subjects.style.display="block";   
        alert(" Not completed yet ! Sorry for intrupted You, Dispay Result On right side will work\n on 4 Subjects Only But Result will show on Alert PopUP");
    }
    else
    {
        alert("Please Select From 4 To 8 Only")
    }
}

                    // reset Button
function reset() {
    For_4_Subjects.style.display = "none";
    For_5_Subjects.style.display = "none";
    For_6_Subjects.style.display = "none";
    For_7_Subjects.style.display = "none";
    For_8_Subjects.style.display = "none";
    TotalSubjectsSelected.textContent = " ";
}

// answer for four subjects 


function Answer4Subjects() {
    var foursubject1 = document.getElementById("foursub1").value;
    var fourmark1 =parseFloat( document.getElementById("fourMark1").value);
    var foursubject2 =  document.getElementById("foursub2").value;
    var fourmark2 =parseFloat( document.getElementById("fourMark2").value);
    var foursubject3 =  document.getElementById("foursub3").value;
    var fourmark3 =parseFloat( document.getElementById("fourMark3").value);
    var foursubject4 =  document.getElementById("foursub4").value;
    var fourmark4 =parseFloat( document.getElementById("fourMark4").value);
    var totolmarks =parseFloat( document.getElementById("TotalMarks4").value);

    var sum4 = parseFloat (fourmark1 + fourmark2 + fourmark3 + fourmark4);
     var result4= sum4 / totolmarks;

     var display4 = document.getElementById("subjectsresult");
     display4.style.display= "block";
     displayFor4subjects();
  alert(" Result  " +(result4 *100));


  // for display result
  
  var sub4_1 = document.getElementById("4sub1");
  var sub4_2 = document.getElementById("4sub2");
  var sub4_3 = document.getElementById("4sub3");
  var sub4_4 = document.getElementById("4sub4");
  var Fm1= document.getElementById("4m1");
  var Fm2= document.getElementById("4m2");
  var Fm3= document.getElementById("4m3");
  var Fm4= document.getElementById("4m4");

  sub4_1.textContent = foursubject1;
  sub4_2.textContent = foursubject2;
  sub4_3.textContent = foursubject3;
  sub4_4.textContent = foursubject4;

  Fm1.textContent = fourmark1;
  Fm2.textContent = fourmark2;
  Fm3.textContent = fourmark3;
  Fm4.textContent = fourmark4;

  var totaldislay4 = document.getElementById("4totalmarks");
  var Percentage4 = document.getElementById("4Percentage");

  totaldislay4.textContent = sum4;
  Percentage4.textContent = (result4 *100 + " %") 

    
}

function displayFor4subjects() {
    var foursubject1 = document.getElementById("foursub1").value;
    var sub4_1 = document.getElementById("4sub1");


    sub4_1.textContent = foursubject1;
    
}
// answer for five subjects 


function Answer5Subjects() {
    var fivesubject1 = document.getElementById("fivesub1").value;
    var fivemark1 =parseFloat( document.getElementById("fiveMark1").value);
    var fivesubject2 =  document.getElementById("fivesub2").value;
    var fivemark2 =parseFloat( document.getElementById("fiveMark2").value);
    var fivesubject3 =  document.getElementById("fivesub3").value;
    var fivemark3 =parseFloat( document.getElementById("fiveMark3").value);
    var fivesubject4 =  document.getElementById("fivesub4").value;
    var fivemark4 =parseFloat( document.getElementById("fiveMark4").value);
    var fivesubject4 =  document.getElementById("fivesub5").value;
    var fivemark5 =parseFloat( document.getElementById("fiveMark5").value);
    var totolmark5 =parseFloat( document.getElementById("TotalMarks5").value);

    var sum5 = parseFloat (fivemark1 + fivemark2 + fivemark3 + fivemark4 +fivemark5);
      var result5= (sum5 / totolmark5);
  alert(" Result  " + result5 *100);

   // for display result
  
   var subfive_1 = document.getElementById("5sub1");
   var sub5_2 = document.getElementById("5sub2");
   var sub5_3 = document.getElementById("5sub3");
   var sub5_4 = document.getElementById("5sub4");
   var sub5_5 = document.getElementById("5sub5");
   var Fm1= document.getElementById("5m1");
   var Fm2= document.getElementById("5m2");
   var Fm3= document.getElementById("5m3");
   var Fm4= document.getElementById("5m4");
   var Fm5= document.getElementById("5m5");
   var Fm= document.getElementById("subjectsresult");
Fm.style.display ="block";

 
   subfive_1.textContent =fivesubject1;
   sub5_2.textContent = fivesubject2;
   sub5_3.textContent = fivesubject3;
   sub5_4.textContent = fivesubject4;
   sub5_5.textContent = fivesubject5;
 
   Fm1.textContent = fivemark1;
   Fm2.textContent = fivemark2;
   Fm3.textContent = fivemark3;
   Fm4.textContent = fivemark4;
   Fm5.textContent = fivemark5;
 
   var totaldislay5 = document.getElementById("5totalmarks");
   var Percentage5 = document.getElementById("5Percentage");
 
   totaldislay5.textContent = sum5;
   Percentage5.textContent = (result5 *100 + " %") 
    
}

// answer for six subjects 


function Answer6Subjects() {
    var sixsubject1 = document.getElementById("sixsub1").value;
    var sixmark1 =parseFloat( document.getElementById("sixMark1").value);
    var sixsubject2 =  document.getElementById("sixsub2").value;
    var sixmark2 =parseFloat( document.getElementById("sixMark2").value);
    var sixsubject3 =  document.getElementById("sixsub3").value;
    var sixmark3 =parseFloat( document.getElementById("sixMark3").value);
    var sixsubject4 =  document.getElementById("sixsub4").value;
    var sixmark4 =parseFloat( document.getElementById("sixMark4").value);
    var sixsubject4 =  document.getElementById("sixsub5").value;
    var sixmark5 =parseFloat( document.getElementById("sixMark5").value);
    var totolmark5 =parseFloat( document.getElementById("TotalMarks5").value);

    var sum6 = parseFloat (sixmark1 + sixmark2 + sixmark3 + sixmark4 +sixmark5);
      var result6= (sum6 / totolmark5);
  alert(" Result  " + result6 *100);
    
}
// answer for seven subjects 


function Answer7Subjects() {
    var sevensubject1 = document.getElementById("sevensub1").value;
    var sevenmark1 =parseFloat( document.getElementById("sevenMark1").value);
    var sevensubject2 =  document.getElementById("sevensub2").value;
    var sevenmark2 =parseFloat( document.getElementById("sevenMark2").value);
    var sevensubject3 =  document.getElementById("sevensub3").value;
    var sevenmark3 =parseFloat( document.getElementById("sevenMark3").value);
    var sevensubject4 =  document.getElementById("sevensub4").value;
    var sevenmark4 =parseFloat( document.getElementById("sevenMark4").value);
    var sevensubject5 =  document.getElementById("sevensub5").value;
    var sevenmark5 =parseFloat( document.getElementById("sevenMark5").value);
    var sevensubject6 =  document.getElementById("sevensub6").value;
    var sevenmark6 =parseFloat( document.getElementById("sevenMark6").value);
    var sevensubject7 =  document.getElementById("sevensub7").value;
    var sevenmark7 =parseFloat( document.getElementById("sevenMark7").value);
    var totolmark7 =parseFloat( document.getElementById("TotalMarks7").value);

    var sum7 = parseFloat (sevenmark1 + sevenmark2 + sevenmark3 + sevenmark4 +sevenmark5 + sevenmark6 +sevenmark7);
      var result7= (sum7 / totolmark7);
  alert(" Result  " + result7 *100);
    
}

// answer for seven subjects 


function Answer8Subjects() {
    var eightsubject1 = document.getElementById("eightsub1").value;
    var eightmark1 =parseFloat( document.getElementById("eightMark1").value);
    var eightsubject2 =  document.getElementById("eightsub2").value;
    var eightmark2 =parseFloat( document.getElementById("eightMark2").value);
    var eightsubject3 =  document.getElementById("eightsub3").value;
    var eightmark3 =parseFloat( document.getElementById("eightMark3").value);
    var eightsubject4 =  document.getElementById("eightsub4").value;
    var eightmark4 =parseFloat( document.getElementById("eightMark4").value);
    var eightsubject5 =  document.getElementById("eightsub5").value;
    var eightmark5 =parseFloat( document.getElementById("eightMark5").value);
    var eightsubject6 =  document.getElementById("eightsub6").value;
    var eightmark6 =parseFloat( document.getElementById("eightMark6").value);
    var eightsubject7 =  document.getElementById("eightsub7").value;
    var eightmark7 =parseFloat( document.getElementById("eightMark7").value);
    var eightsubject8 =  document.getElementById("eightsub8").value;
    var eightmark8 =parseFloat( document.getElementById("eightMark8").value);
    var totolmark8 =parseFloat( document.getElementById("TotalMarks8").value);

    var sum8 = parseFloat (eightmark1 + eightmark2 + eightmark3 + eightmark4 +eightmark5 + eightmark6 +eightmark7 +eightmark8);
      var result8= (sum8 / totolmark8);
  alert(" Result  " + result8 *100);
    
}





