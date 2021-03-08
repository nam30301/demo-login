
function check1(){
    var input = document.getElementsByTagName('input');
    var user=input[0].value;
    var pass=input[1].value;
    var fullname=input[2].value;
    var date=input[3].value;
    var email=input[4].value;
    if(user == ""||user.length<5){
        alert("Please fill your username!");
        return false;
    }
    else if(pass == "" || pass.length<6 ){
        alert("Please fill your password!");
        document.getElementById('username').style.backgroundColor="red";
        return false;
    }
    else if(email == ""){
        alert("Please fill your email!");
        return false;
    }
    else {
        alert("Correct!!!");
        confirm("Information Your\n"+"Username:"+user+"\n"+"Fullname:"+fullname+"\n"+"Birthday:"+date+"\n"+"Email:"+email+"\n");

    }
}