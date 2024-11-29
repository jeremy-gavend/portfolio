/*to reset "id" for each call*/
var id = null;
function profPictureAni() {
  /* take the profile image element*/
  let img = document.getElementById("profile_img");
  let pos = 0;
  /*this resets the interval set on "id"*/
  clearInterval(id);
  id = setInterval(frame, 10);

  /*rotate from 0 to 360 degree = full rotation*/
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
  /* get all "h2" elements (return an array)*/
  let title = document.getElementsByTagName("h2");
  clearInterval(idBis);
  let state = "None";
  idBis = setInterval(frame, 500);
  function frame() {
    switch (state) {
      /*"None" display no borders*/
      case "None":
        for (let i = 0; i < title.length; i++) {
          title[i].style.textShadow = "";
        }
        state = "Shadow 1";
        break;
      /*"Shadow 1" display 4 shadows around the text to make text borders*/
      case "Shadow 1":
        for (let i = 0; i < title.length; i++) {
          title[i].style.textShadow =
            "0 0 1px gray, 0 0 1px gray, 0 0 1px gray, 0 0 1px gray";
        }

        state = "Shadow 2";
        break;
      /*"Shadow 2" replace the borders with slithly displaced shadows, making it a bit bigger*/
      case "Shadow 2":
        for (let i = 0; i < title.length; i++) {
          title[i].style.textShadow =
            "1px 1px 1px gray, -1px -1px 1px gray, -1px 1px 1px gray, 1px -1px 1px gray";
        }

        state = "Shadow 3";
        break;
      /*"Shadow 3" is a copy of "Shadow 1", but return "None" to loop back*/
      case "Shadow 3":
        for (let i = 0; i < title.length; i++) {
          title[i].style.textShadow =
            "0 0 1px gray, 0 0 1px gray, 0 0 1px gray, 0 0 1px gray";
        }

        state = "None";
        break;
    }
  }
}

profPictureAni();
titleAni();
