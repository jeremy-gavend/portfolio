var id = null;
function profPictureAni() {
  let img = document.getElementById("profile_img");
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);

  function frame() {
    if (pos == 360) {
      pos = 0;
      img.style.rotate = pos + "deg";
    } else {
      pos++;
      img.style.rotate = pos + "deg";
    }
  }
}

var idBis = null;
function titleAni() {
  let img = document.getElementById("profile_img");
  let pos = 0;
  clearInterval(idBis);
  idBis = setInterval(frame, 10);
  function frame() {
    state = "None";
    switch (state) {
      case "None":

      case "Shadow 1":
      case "Shadow 2":
      case "Shadow 3":
    }
  }
}

profPictureAni();
titleAni();
