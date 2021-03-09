
function check1(){
    var input = document.getElementsByTagName('input');//Nên set id cho các element sau đó get by ID không nên get theo tag name
    var user=input[0].value;
    var pass=input[1].value;
    var fullname=input[2].value;
    var date=input[3].value;
    var email=input[4].value;
    if(user == ""||user.length<5){//Nên check null hoặc undefined nữa vì đây là 2 TH đặc biệt của js
        alert("Please fill your username!");
        return false;
    }
    else if(pass == "" || pass.length<6 ){//Hàm includes kiểm tra có 1 trong số các kí tự trong mảng k :D thử xem!
        alert("Please fill your password!");
        document.getElementById('username').style.backgroundColor="red";
        return false;
    }
    else if(email == ""){
        alert("Please fill your email!");//Check email đơn giản e kiểm tra xem email có chứa @ không bằng hàm String includes( Đọc kỹ lại xử lý string VD như tìm kí tự, đảo xâu tách xâu thành mảng, ...)
        return false;
    }
    else {
        alert("Correct!!!");
        confirm("Information Your\n"+"Username:"+user+"\n"+"Fullname:"+fullname+"\n"+"Birthday:"+date+"\n"+"Email:"+email+"\n");

    }
}
//Yêu cầu lại
//Làm lại validate mật khẩu kiểm tra có kí tự hay không theo gợi ý của a
//Nâng cao: Thay vì hiện alert thì em set thông báo nhỏ ẩn hiện ngay dưới các ô input, Để cho nhanh e có thể tìm kiểm thêm thông tin về Jquery(đây là thư viện nâng cao của JS)
//Tiếp tục đọc kỹ Xử lí string
//CSS hình như bị lỗi các element đang bị đồn sang trái hay sao ấy :D 