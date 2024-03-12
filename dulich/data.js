var tour =[
  {
     id: 1,
     name: "PHÚ QUỐC",
     content: "Được mệnh danh là hòn đảo lớn nhất Việt Nam, du lịch Phú Quốc may mắn được thiên nhiên ưu đãi với làn nước trong, bờ cát trắng mịn, và những khu rừng hoang sơ. Lỡ lạc chân vào “đảo ngọc” rồi, hãy tận hưởng một chút “Vitamin Sea” trong cái nắng dịu nhẹ ở Bãi Dài phía tây Phú Quốc và Bãi Sao phía đông Phú Quốc. Du lịch Phú Quốc không chỉ có biển, hãy thử các trải nghiệm thú vị khác như khám phá hòn đảo bằng xe máy, tham quan công viên bảo tồn động vật Vinpearl Safari, lặn san hô, hay chèo thuyền kayak. Cuối cùng, đừng quên thưởng thức các món hải sản ngon tuyệt vời khi du lịch Phú Quốc tự túc nhé!",
     price: "10.000.000",
     timedi: "12/03/2024",
     timeve: "18/03/2024",
     image: "https://yentravel.com.vn/public/upload/images/dao-ngoc-phu-quoc(1).jpg"
  },

  {
      id: 2,
      name: "ĐÀ LẠT",
      content: "Sở hữu vẻ đẹp nên thơ, trữ tình với những rừng thông bạt ngàn, những cánh đồng hoa cẩm tú cầu xinh xắn, những hàng cây mai anh đào rực rỡ trong gió, thắng cảnh sông, hồ, núi hùng vĩ hay những con suối róc rách nước trẻ… và không khí mát mẻ, trong lành, Đà Lạt ngày càng thu hút đông đảo khách du lịch trong nước và quốc tế.",
      price: "8.000.000",
      timedi: "15/03/2024",
      timeve: "21/03/2024",
      image: "https://www.runglakimresort.com/Uploads/Images/tintuc/1280x904/quang-truong-lam-vien-ve-dem.jpg"
   },

   {
      id: 3,
      name: "ĐÀ NẴNG",
      content: "Mệnh danh là thành phố đáng sống nhất ở Việt Nam,  được tạo hóa ưu ái ban tặng đường bờ biển xanh lấp lánh ôm lấy bờ cát trắng mịn cùng nhiều hòn đảo xa bờ, nơi sở hữu thảm xanh thiên nhiên ấn tượng. Đà Nẵng là một trong những thành phố du lịch phát triển mạnh mẽ nhất tại Việt Nam. Với nhiều địa danh nổi tiếng như Bà Nà Hills, Cầu Rồng hay bãi biển Mỹ Khê, Đà Nẵng đã thu hút đông đảo khách du lịch trong và ngoài nước. Nếu bạn đang có kế hoạch tự túc khám phá Đà Nẵng, bài viết này sẽ cung cấp cho bạn một số thông tin hữu ích về điều cần biết khi đi du lịch Đà Nẵng tự túc.",
      price: "12.000.000",
      timedi: "20/03/2024",
      timeve: "26/03/2024",
      image: "https://res.klook.com/image/upload/fl_lossy.progressive,w_800,c_fill,q_85/destination/ur2mrg23d91mex03l4mw.jpg"
   },
];

function Show() {
  var html = "";
  var stt = 0;
  for (var i = 0; i < tour.length; i++) { ;
      stt++;
      html += "<tr>";
      html += "<td>"+stt+"</td>";
      html += "<td>"+tour[i].id+"</td>";
      html += "<td>"+tour[i].name+"</td>";
      html += "<td><img src='" + tour[i].image + "' alt='Travel Image' style='width: 200px; height: 200px;'></td>";
      // html += "<td>"+arr[i].image+"</td>";
      html += "<td>"+tour[i].content+"</td>";
      html += "<td>"+tour[i].price+"</td>";
      html += "<td>"+tour[i].timedi+"</td>";
      html += "<td>"+tour[i].timeve+"</td>";
      html += "<td>"
      html += '<button class="btn btn-primary bt1" onclick="editTour(' + i + ')">Edit</button>'
      html += '<button class="btn btn-primary " onclick="deleteProduct()">Delete</button>'
      html += "</td>"
      html += "</tr>";
  }
  document.getElementById("tbl").innerHTML = html;
}

function createNewTour() {
  var imageInput = document.getElementById("image");
  var imageFile = imageInput.files[0];
  var imageURL = URL.createObjectURL(imageFile);
    var a = {
        id: document.getElementById('id').value,
        name: document.getElementById('name').value,
        image: imageURL,
        content: document.getElementById('content').value,
        price: document.getElementById('price').value,
        timedi: document.getElementById('timedi').value,
        timeve: document.getElementById('timeve').value,
    };
    console.log(a);
    tour.push(a);
    Show();
}

  function Reset() {
    document.getElementById('id').value = '';
    document.getElementById('name').value = '';
    image: imageURL= '';
    document.getElementById('content').value = '';
    document.getElementById('price').value = '';
    document.getElementById("timedi").value='';
    document.getElementById("timeve").value='';
}

function editTour(index) {
    document.getElementById("editId").value = tour[index].id;
    document.getElementById("editName").value = tour[index].name;
    document.getElementById("editContent").value = tour[index].content;
    document.getElementById("editImage").src = tour[index].image;
    document.getElementById("editPrice").value = tour[index].price;
    document.getElementById("editTimedi").value = tour[index].timedi;
    document.getElementById("editTimeve").value = tour[index].timeve;

    var update = "<input type='button' class='btn btn-success' value='Update Tour' onclick='updateTour(" + index + ")' />";
      document.getElementById("div-update").innerHTML = update;
    document.getElementById("editForm").style.display = "block";
  }

  function updateTour(index) {
    var newId = document.getElementById("editId").value;
    var newName = document.getElementById("editName").value;
    var newImageInput = document.getElementById("editImage");
    var newImageFile = newImageInput.files[0];
    var newImageURL = URL.createObjectURL(newImageFile);
    var newContext = document.getElementById("editContent").value;
    var newPrice = document.getElementById("editPrice").value;
    var newTimedi = document.getElementById("editTimedi").value;
    var newTimeve = document.getElementById("editTimeve").value;
    var indexToUpdate = index;
  
    tour[indexToUpdate].id = newId;
    tour[indexToUpdate].name = newName;
    tour[indexToUpdate].image = newImageURL;
    tour[indexToUpdate].content = newContext;
    tour[indexToUpdate].price = newPrice;
    tour[indexToUpdate].timedi = newTimedi;
    tour[indexToUpdate].timeve = newTimeve;
  
    document.getElementById("editForm").style.display = "none";
    Show();
  }
  function deleteProduct(index) {
    tour.splice(index, 1);
    Show();
  }