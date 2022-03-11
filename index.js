// 1. biến
// cú pháp: key [tên biến]=[giá trị]
// key: var let const
// var let có thể gán lại giá trị của biến
// không thể gán lại giá trị cho biến 
// const a=false
// let b=a+1
// console.log(b)
//2. kiểu dữ liêu
// string boolean number undefined Nan array object
// 3. Các phép toán +, -, *, /, %, ++, --, >, <, >=, <=, !=, ==, ===, &&
// let b=10
// console.log(b==10) ;
// 4. vi du tính chu vi tam giac
// let a = parseInt(prompt("Nhap canh thu nhat cua tam giac"));
// let b = parseInt(prompt("Nhap canh thu hai cua tam giac"));
// let c = parseInt(prompt("Nhap canh thu ba cua tam giac"));
// let p= a+b+c;
// console.log("chu vi tam giac la:", p);
let w = parseInt(prompt("Nhap can nang"));
let h = parseInt(prompt("Nhap chieu cao"));
let BMI = w/(h**2);
console.log(`chi so BMI la ${BMI}`);
// 5. Câu lệnh điều kiện:
if(BMI<18){
console.log("bạn hơi gầy");
}
else if(BMI>=18 && BMI<=25){
    console.log("bạn có cơ thể cân đối");
}
else{
    console.log("bạn hơi thừa cân");
}