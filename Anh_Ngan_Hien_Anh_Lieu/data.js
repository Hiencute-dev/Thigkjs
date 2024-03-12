var tour =[
  {
     id: 1,
     name: "  HÀN QUỐC",
     content: "Hàn Quốc là một quốc gia thuộc khu vực Đông Á, sở hữu địa hình đồi núi hiểm trở với nhiều eo biển trải dài. Thông qua các bộ phim Hàn nổi tiếng, “xứ sở kim chi” được biết đến như một đất nước xinh đẹp, cảnh sắc vừa hùng vĩ vừa nên thơ. Đặc biệt, quốc gia này còn nổi tiếng với nền ẩm thực đa dạng và sự phát triển của văn hóa phim ảnh, âm nhạc.Hãy đặt chân tới mảnh đất này để cùng hòa mình vào nét đẹp của văn hóa nước này.",
     price: "10.000.000",
     timedi: "12/03/2024",
     timeve: "18/03/2024",
     image: "https://th.bing.com/th?q=Lich+Su+Han+Quoc&w=138&h=138&c=7&o=5&dpr=1.5&pid=1.7&mkt=en-WW&cc=VN&setlang=en&adlt=strict"
  },

  {
      id: 2,
      name: "  ĐÀ LẠT",
      content: "Sở hữu vẻ đẹp nên thơ, trữ tình với những rừng thông bạt ngàn, những cánh đồng hoa cẩm tú cầu xinh xắn, những hàng cây mai anh đào rực rỡ trong gió, thắng cảnh sông, hồ, núi hùng vĩ hay những con suối róc rách nước trẻ… và không khí mát mẻ, trong lành, Đà Lạt ngày càng thu hút đông đảo khách du lịch trong nước và quốc tế.",
      price: "8.000.000",
      timedi: "15/03/2024",
      timeve: "21/03/2024",
      image: "https://www.runglakimresort.com/Uploads/Images/tintuc/1280x904/quang-truong-lam-vien-ve-dem.jpg"
   },

   {
      id: 3,
      name: " THÁI LAN",
      content: "Thái Lan là một đất nước xinh đẹp nổi tiếng với nền văn hóa giàu bản sắc dân tộc. Từ cử chỉ chào hỏi, đến cảm ơn, xin lỗi, tạm biệt đều có chung một động tác là chắp tay trước ngực giống như cầu nguyện và cúi đầu. Bạn có thể gặp hình ảnh những thiếu nữ Thái duyên dáng trong trang phục cổ truyền nhẹ nhàng cười với du khách để rồi Thái Lan được gắn với cái tên “xứ sở của những nụ cười”. Trên 90% người dân tại quốc gia này theo đạo Phật. Đây là địa điểm đáng để chúng ta khám phá sự mới mẻ của vùng đất này.",
      price: "12.000.000",
      timedi: "20/03/2024",
      timeve: "26/03/2024",
      image: "https://www.bing.com/th?id=OIP.grcBEn-FD8UN7Ahdwj2MugHaEc&w=176&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
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
      html += '<button class="btn btn-primary " onclick="deleteProduct(' + i + ')">Delete</button>'
      html += "</td>"
      html += "</tr>";
  }
  document.getElementById("tbl").innerHTML = html;
}

function createNewTour() {
    var a = {
        id: document.getElementById('id').value,
        name: document.getElementById('name').value,
        image: document.getElementById('image').value,
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
    document.getElementById('image').value = '';
    document.getElementById('content').value = '';
    document.getElementById('price').value = '';
    document.getElementById("timedi").value='';
    document.getElementById("timeve").value='';
}

function editTour(index) {
    document.getElementById("editId").value = tour[index].id;
    document.getElementById("editName").value = tour[index].name;
    document.getElementById("editContent").value = tour[index].content;
    document.getElementById("editImage").value = tour[index].image;
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
    var newImage = document.getElementById("editImage").value;
    var newContext = document.getElementById("editContent").value;
    var newPrice = document.getElementById("editPrice").value;
    var newTimedi= document.getElementById("editTimedi").value;
    var newTimeve = document.getElementById("editTimeve").value;
    var indexToUpdate = index;

    console.log(index)
    tour[indexToUpdate].id = newId;
    tour[indexToUpdate].name = newName;
    tour[indexToUpdate].image = newImage;
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