var myIndex = 3;
var driverarr = [];
var driverpic = [];
var drivergname = [];
var driverwiki = [];
var driverfamname = [];
var driverdob = [];
var drivernational = [];

var driverholder = document.getElementById('driverId');
var imageholder = document.getElementById('image');
var givennameholder = document.getElementById('givenName');
var wikiholder = document.getElementById('wiki');
var familynameholder = document.getElementById('familyName');
var dobholder = document.getElementById('dateOfBirth');
var nationalityholder = document.getElementById('nationality');



var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var a = JSON.parse(xhr.responseText);
        var b = a.MRData.StandingsTable.StandingsLists;
        for (i in b) {
            var x = b[i].DriverStandings;
            for (j in x) {
                var driverid = x[j].Driver.driverId;
                driverarr.push(driverid);
                var picture = x[j].Driver.photo;
                driverpic.push(picture);
                var gname = x[j].Driver.givenName;
                drivergname.push(gname);
                var wiki = x[j].Driver.url;
                driverwiki.push(wiki);
                var famname = x[j].Driver.familyName;
                driverfamname.push(famname);
                var dob = x[j].Driver.dateOfBirth;
                driverdob.push(dob);
                var nation = x[j].Driver.nationality;
                drivernational.push(nation);
            }

            driverholder.innerHTML = driverarr[myIndex];
            imageholder.src = driverpic[myIndex];
            givennameholder.innerHTML = drivergname[myIndex];
            wikiholder.innerHTML = driverwiki[myIndex];
            familynameholder.innerHTML = driverfamname[myIndex];
            dobholder.innerHTML = driverdob[myIndex];
            nationalityholder.innerHTML = drivernational[myIndex];
            //console.log(driverarr); 
        }
        //console.log(x);
    }
}
xhr.open('GET', "data.json", true);
xhr.send();

function nextElement() {
    if (myIndex < driverarr.length) {
        driverholder.innerHTML = driverarr[myIndex];
        imageholder.src = driverpic[myIndex];
        givennameholder.innerHTML = drivergname[myIndex];
        wikiholder.innerHTML = driverwiki[myIndex];
        familynameholder.innerHTML = driverfamname[myIndex];
        dobholder.innerHTML = driverdob[myIndex];
        nationalityholder.innerHTML = drivernational[myIndex];
        myIndex++;
    } else {
        myIndex = 0;
    }
}

function prevElement() {
    myIndex--;
    driverholder.innerHTML = driverarr[myIndex];
    imageholder.src = driverpic[myIndex];
    givennameholder.innerHTML = drivergname[myIndex];
    wikiholder.innerHTML = driverwiki[myIndex];
    familynameholder.innerHTML = driverfamname[myIndex];
    dobholder.innerHTML = driverdob[myIndex];
    nationalityholder.innerHTML = drivernational[myIndex];
}
var lftbtn = document.getElementById('leftbtn');
lftbtn.addEventListener("click", prevElement, false);
var rightbtn = document.getElementById('rightbtn');
rightbtn.addEventListener("click", nextElement, false);

function myFunction() { //written a function to toggle visibility and txt on the button
    var x = document.getElementById("data");
    var y = document.getElementById("mor");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.innerHTML = "Show Less";
    } else {
        x.style.display = "none";
        y.innerHTML = "Show More";
    }
}

/*function nextPage(){
    driverholder.innerHTML = "<b>Driver Id : </b>" + driverarr[myIndex];
        imageholder.src = driverpic[myIndex];
        givennameholder.innerHTML = "<b>Driver Given Name:</b> " + drivergname[myIndex];
        wikiholder.innerHTML = "<b>Wikipedia Link of Driver:</b> " + driverwiki[myIndex];
        familynameholder.innerHTML = "<b>Family Name of Driver:</b> " + driverfamname[myIndex];
        dobholder.innerHTML = "<b>Date of Birth of Driver:</b> " + driverdob[myIndex];
        nationalityholder.innerHTML = "<b>Nationality of Driver:</b> " + drivernational[myIndex];
}*/
//var btnholder = document.getElementById('mor');
//btnholder.addEventListener("click", moreData, false);
/*function moreData() {
    //this.myIndex = myIndex;
    //alert("Button Clicked");
    var a = JSON.parse(xhr.responseText);
    var driverarr = [];
    var driverpic = [];
    var drivergname = [];
    var driverwiki = [];
    var driverfamname = [];
    var driverdob = [];
    var drivernational = [];
    var b = a.MRData.StandingsTable.StandingsLists;
    for (i in b) {
        var x = b[i].DriverStandings;
        for (j in x) {
            var driverid = x[j].Driver.driverId;
            driverarr.push(driverid);
            var picture = x[j].Driver.photo;
            driverpic.push(picture);
            var gname = x[j].Driver.givenName;
            drivergname.push(gname);
            var wiki = x[j].Driver.url;
            driverwiki.push(wiki);
            var famname = x[j].Driver.familyName;
            driverfamname.push(famname);
            var dob = x[j].Driver.dateOfBirth;
            driverdob.push(dob);
            var nation = x[j].Driver.nationality;
            drivernational.push(nation);

        }
        document.getElementById('driverId').innerHTML = "<b>Id of Driver: </b>" + driverarr[0];
        document.getElementById('image').src = driverpic[0];
        document.getElementById('givenName').innerHTML = "<b>Given Name of Driver:</b> " + drivergname[0];
        document.getElementById('wiki').innerHTML = "<b>Wikipedia Link of Driver:</b> " + driverwiki[0];
        document.getElementById('familyName').innerHTML = "<b>Family Name of Driver:</b> " + driverfamname[0];
        document.getElementById('dateOfBirth').innerHTML = "<b>Date of Birth of Driver:</b> " + driverdob[0];
        document.getElementById('nationality').innerHTML = "<b>Nationality of Driver:</b> " + drivernational[0];
        //console.log(driverarr);
    }

}*/
/*var clicks = function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
return localStorage.clickcount;
    }
}*/
/*
function rightclick() {
    //this.inc = inc ;
    var counter = 0;
    var clicked = true;
    if(clicked){
        counter++;
        var a = JSON.parse(xhr.responseText);
        var driverarr = [];
        var driverpic = [];
        var drivergname = [];
        var b = a.MRData.StandingsTable.StandingsLists;             
        for (i in b) {
            var x = b[i].DriverStandings;
            for (j in x) {
                var driverid = x[j].Driver.driverId;
                driverarr.push(driverid);
                var picture = x[j].Driver.photo;
                driverpic.push(picture);
                var gname = x[j].Driver.givenName;
                drivergname.push(gname);
            }
            
            document.getElementById('driverId').innerHTML = "<b>Driver Id : </b>" + driverarr[counter];
            document.getElementById('image').src = driverpic[counter];
            document.getElementById('givenName').innerHTML = "<b>Driver Given Name:</b> " + drivergname[counter];
            
            //console.log(driverarr); 
        }
    }
   // alert("Right Btn Clicked");
}
*/
/*
function leftclick() {
    
    alert("Left Btn Clicked");
}
*/
function getInfo() {
    var a = driverholder.innerHTML;
    var b = imageholder.src;
    var c = givennameholder.innerHTML;
    var d = wikiholder.innerHTML;
    var e = familynameholder.innerHTML;
    var f = dobholder.innerHTML;
    var g = nationalityholder.innerHTML;

    var finaldata = [a, b, c, d, e, f, g];
    var pack = "";
        for (i = 0; (i < finaldata.length); i++) {
            if (i > 0) {
                pack += ",";
            }
            pack += escape(finaldata[i]);
        }
        //window.location.href = "Playerlookup.html?" + pack;
        window.open('Playerlookup.html?' + pack);
}
