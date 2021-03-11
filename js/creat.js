
function check1(){
    var user=document.getElementById("user").value;
    var user1=document.getElementById("user1");
    if(user==""||user.length<5){
        document.getElementById("user1").style.display="block";
        return false;
    }
    else{
        document.getElementById("user1").style.display="none";
    }
    var pass=document.getElementById("pass").value;
    var pass1=document.getElementById("pass1");
    let check = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if(!pass.match(check)){
        document.getElementById("pass1").style.display="block";
        return true;
    }
    else{
        document.getElementById("pass1").style.display="none";
    }
    var fullname=document.getElementById("fullname").value;
    var fullname1=document.getElementById("fullname1");
    if(fullname==""){
        document.getElementById("fullname1").style.display="block";
        return false;
    }
    else{
        document.getElementById("fullname1").style.display="none";
    }
    var day=document.getElementById("day").value;
    var day1=document.getElementById("day1");
    if(day==""){
        document.getElementById("day1").style.display="block";
        return false;
    }
    else{
        document.getElementById("day1").style.display="none";
    }
    var email=document.getElementById("email").value;
    var str1=email.includes("@gmail.com");
    var email1=document.getElementById("email1");
    if(!str1){
        document.getElementById("email1").style.display="block";
        return false;
    }
    else{
        document.getElementById("email1").style.display="none";
    }
    alert("Information Your\n"+"Username:  "+user+"\n"+"Fullname:  "+fullname+"\n"+"Birthday:  "+day+"\n"+"Email:  "+email+"\n");

}
//Yêu cầu lại
//Làm lại validate mật khẩu kiểm tra có kí tự hay không theo gợi ý của a
//Nâng cao: Thay vì hiện alert thì em set thông báo nhỏ ẩn hiện ngay dưới các ô input, Để cho nhanh e có thể tìm kiểm thêm thông tin về Jquery(đây là thư viện nâng cao của JS)
//Tiếp tục đọc kỹ Xử lí string
//CSS hình như bị lỗi các element đang bị đồn sang trái hay sao ấy :D 
