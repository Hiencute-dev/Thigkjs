// var travel=[
    
//     {
//     infor:"Du lịch Huế",
//     image:"https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lp9aa8gl6dzwc8",
//     introduce:"Khám phá vẻ đẹp lịch sử và văn hóa của thành phố Huế, một trong những điểm đến đặc biệt của Việt Nam. Với kiến trúc cổ kính, các đền chùa và cung điện hoàng gia, Huế là nơi bạn có thể tìm hiểu về quá khứ hào hùng của đất nước.",
//     time_di:"12-03-2024",
//     time_ve:"20-03-2024",
//     price:"250.000",

//     },
//     {
//     infor:"Du lịch Thái Lan",
//     image:"https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lp9aa8gl6dzwc8",
//     introduce:"Khám phá vẻ đẹp lịch sử và văn hóa của thành phố Huế, một trong những điểm đến đặc biệt của Việt Nam. Với kiến trúc cổ kính, các đền chùa và cung điện hoàng gia, Huế là nơi bạn có thể tìm hiểu về quá khứ hào hùng của đất nước.",
    
//     time_di:"18-03-2024",
//     time_ve:"25-03-2024",
//     price:"250.000",
//     },
//     {
    
//     infor:"Du lịch Hàn Quốc",
//     image:"https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lp9aa8gl6dzwc8",
//     introduce:"Khám phá vẻ đẹp lịch sử và văn hóa của thành phố Huế, một trong những điểm đến đặc biệt của Việt Nam. Với kiến trúc cổ kính, các đền chùa và cung điện hoàng gia, Huế là nơi bạn có thể tìm hiểu về quá khứ hào hùng của đất nước.",
   
//     time_di:"20-03-2024",
//     time_ve:"29-03-2024",
//     price:"250.000",
//     }
    

// ]

// function listProducts(){
//     var html="";
//     for( let i=0; i<= travel.length-1;i++ ){
//         var n=i;
//         n++;
//         html+="<tr>";
//         html+="<td>"+(n)+"</td>";
//         html+="<td>"+travel[i].infor+"</td>";
//         html += "<td>" + '<img src="'+travel[i].image+'" class="card-img-top" style="height:400px; ">' + "</td>";
//         html+="<td>"+travel[i].introduce+"</td>";
//         html+="<td>"+travel[i].time_di+"</td>";
//         html+="<td>"+travel[i].time_ve+"</td>";
//         html+="<td>"+travel[i].price+"</td>";
//         html+="<tr>";


//     }
//     document.getElementById('tbl').innerHTML=html;
// }
var travel = [];
function save(){
    var imageInput = document.getElementById("image");
var imageFile = imageInput.files[0];
var imageURL = URL.createObjectURL(imageFile);
   var a={
       infor: document.getElementById("location").value,
       image: imageURL,
       introduce: document.getElementById("introduce").value,
       time_di: document.getElementById("time_di").value,
       time_ve: document.getElementById("time_ve").value,

       price: document.getElementById("price").value,
       
   }
   console.log(a);
   travel.push(a);

}
function show(){
   var html="";
   for( var i in travel){
       var n=i;
       n++;
       html+="<tr>";
       html+="<td>"+(n)+"</td>";
       html+="<td>"+travel[i].location+"</td>";
       html += "<td><img src='" + travel[i].image + "' alt='Travel Image' style='width: 100px; height: 100px;'></td>";      
        html+="<td>"+travel[i].introduce+"</td>";
       html+="<td>"+travel[i].time_di+"</td>";
       html+="<td>"+travel[i].time_ve+"</td>";

       html+="<td>"+travel[i].price+"</td>";
       html+="<td>" +"<button onclick='Delete("+i+")'>"+"Delete"+"</td>";
       
       html+="<tr>";


   }
   document.getElementById('tbl').innerHTML=html;
}
function reset(){
    document.getElementById("location").value='';
   document.getElementById("image").value='';
    document.getElementById("introduce").value='';
    document.getElementById("time_di").value='';

    document.getElementById("time_ve").value='';
    document.getElementById("price").value='';
    
}
function Delete(i) {
    travel.splice(i, 1);
    document.getElementById('tbl').innerHTML;
}
