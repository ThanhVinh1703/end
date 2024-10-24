// gọi local Storage 
// khóa học
let dataCourse = JSON.parse(localStorage.getItem("dataCourse"));
let dataClass = JSON.parse(localStorage.getItem("dataClass"));
let dataStudent = JSON.parse(localStorage.getItem("dataStudent"));
// đăng xuất

if(!localStorage.getItem("dataUser")){
    window.location.href = 'login_page.html';
}
let logOutBtn = document.querySelector('.logOut-btn');

// Gắn sự kiện click cho nút đăng xuất
logOutBtn.onclick = function () {
    localStorage.removeItem("dataUser") 
    // Chuyển hướng về trang đăng nhập
    window.location.href = 'login_page.html'; // Đặt đường dẫn đến trang đăng nhập của bạn
};


/*
    thống kê khóa học
 */
    let totalCoursesElement = document.getElementById("totalCourse");

    function courseTotal() {
        if (Array.isArray(dataCourse) && dataCourse.length > 0) {
            let totalCourses = dataCourse.length;
            totalCoursesElement.innerHTML = totalCourses;  // Hiển thị tổng số khóa học
        } else {
            totalCoursesElement.innerHTML = "Chưa có khóa học";  // Nếu không có dữ liệu
        }
    }
    // Gọi hàm để hiển thị tổng số khóa học
    courseTotal();
    
/*
    thống kê lớp học
 */
    let totalClassElement = document.getElementById("totalClass");
    let totalActive = document.getElementById("totalActive");
    let totalFinish = document.getElementById("totalFinish");
    let totalWait = document.getElementById("totalWait");

    function classTotal(){
        // đặt biến đếm
        let countActive = 0;
        let countWait = 0;
        let countFinish = 0;

        // đếm tổng số lớp
        if (Array.isArray(dataClass) && dataClass.length > 0){
            let totalClass = dataClass.length;
            totalClassElement.innerHTML = totalClass;
        }else{
            totalClassElement.innerHTML = "Chưa có khóa học";
        };
        // đếm lớp đang hoạt động
        for(let i = 0 ; i < dataClass.length; i++){
            if(dataClass[i].trangThai === "Hoạt động"){
                countActive ++;
                totalActive.innerHTML = countActive; 
            }else if(dataClass[i].trangThai === "Chờ lớp"){
                countWait ++;
                totalWait.innerHTML = countWait;               
            }else if(dataClass[i].trangThai === "Kết thúc"){
                countFinish ++;
                totalFinish.innerHTML = countFinish;
            }else {
                totalActive.innerHTML = "Không có";
                totalFinish.innerHTML = "Không có";
                totalWait.innerHTML = "Không có";
            }          
    }
}
classTotal();



// thống kê sinh viên
let totalStudentElement = document.getElementById("totalStudent");
let waitingStudent = document.getElementById("waitingStudent");
let studyingStudent = document.getElementById("studyingStudent");
let holdStudent = document.getElementById("holdStudent");
let suspendedStudent = document.getElementById("suspendedStudent");
let graduateStudent = document.getElementById("graduateStudent");

// đặt biến đếm
let countWaiting = 0;
let countStudying = 0;
let countHold = 0;
let countSuspended = 0;
let countGraduate = 0;

function totalStudents(){
    if(Array.isArray(dataStudent) && dataStudent.length > 0){
        let studentTotal = dataStudent.length;   //hiển thị dữ liệu
        totalStudentElement.innerHTML = studentTotal;
    }else{
        totalStudentElement.innerHTML = "Chưa có sinh viên nào";  //nếu ko có dữ liệu
    }
    for(let i = 0; i < dataStudent.length; i++){
        if(dataStudent[i].trangThai === "Chờ lớp"){
            countWaiting++;
            waitingStudent.innerHTML = countWaiting;
        }else if(dataStudent[i].trangThai === "Đang học"){
            countStudying++;
            studyingStudent.innerHTML = countStudying;
        }else if(dataStudent[i].trangThai === "Bảo lưu"){
            countHold++;
            holdStudent.innerHTML = countHold;
        }else if(dataStudent[i].trangThai === "Đình chỉ"){
            countSuspended++;
            suspendedStudent.innerHTML = countSuspended;
        }else if(dataStudent[i].trangThai === "Tốt nghiệp"){
            countGraduate++;
            graduateStudent.innerHTML = countGraduate;
        }else{
            waitingStudent = "Không có";
            studyingStudent = "Không có";
            holdStudent = "Không có";
            suspendedStudent = "Không có";
            graduateStudent = "Không có";
        }
    }
}
totalStudents();

