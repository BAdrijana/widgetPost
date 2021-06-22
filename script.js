// Fetch Data form JSON
fetch("./data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    let widgetPosts = document.getElementById("widget__posts");

    //  creating a single post
    for (var i = 0; i < data.length; ++i) {
      var divPost = document.createElement("div");
      divPost.className = "widget__post";
      divPost.setAttribute("data-popup", i);
      divPost.setAttribute("id", i);
      var divMain = document.createElement("div");
      divMain.className = "widget__main";
      divMain.setAttribute("data-popup", i);
      let flexDiv = document.createElement("div");
      var profileImg = document.createElement("img");
      profileImg.className = "widget__profileImg";
      profileImg.setAttribute("src", data[i].profile_image);
      var instaImg = document.createElement("img");
      instaImg.setAttribute("src", "./icons/instagram-logo.svg");
      instaImg.setAttribute("data-popup", i);

      var div = document.createElement("div");
      div.setAttribute("data-popup", i);
      var h2 = document.createElement("h2");
      var h3 = document.createElement("h3");
      h2.innerHTML = data[i].name;
      h2.setAttribute("data-popup", i);
      h3.innerHTML = data[i].date;
      h3.setAttribute("data-popup", i);
      div.append(h2, h3);
      flexDiv.append(profileImg, div);
      divMain.append(flexDiv, instaImg);

      let widImgDiv = document.createElement("div");
      widImgDiv.className = "widget__imageContainer";
      var widgetImg = document.createElement("img");
      widgetImg.className = "widget__image";
      widgetImg.setAttribute("src", data[i].image);
      widgetImg.setAttribute("data-popup", i);
      widImgDiv.append(widgetImg);

      var caption = document.createElement("p");
      caption.innerHTML = data[i].caption;
      caption.setAttribute("data-popup", i);

      var widgetsLikes = document.createElement("div");
      widgetsLikes.setAttribute("data-popup", i);
      widgetsLikes.className = "widget__likes";
      var likesImg = document.createElement("img");
      likesImg.setAttribute("src", "./icons/heart.svg");
      likesImg.setAttribute("data-popup", i);
      var likes = document.createElement("p");
      likes.innerHTML = data[i].likes;
      likes.setAttribute("data-popup", i);

      widgetsLikes.append(likesImg, likes);
      divPost.append(divMain, widImgDiv, caption, widgetsLikes);
      widgetPosts.appendChild(divPost);

      // -------------POPUP Modals-----------

      let widgetPost = document.querySelectorAll(".widget__post");
      let widgetOverlay = document.getElementById("widget__overlay");

      // popUP Function
      widgetPost.forEach((e) => {
        e.addEventListener("click", (el) => {
          let id = el.target.getAttribute("data-popup");

          //  modal Image
          let modalImg = document.createElement("img");
          modalImg.setAttribute("src", data[id].image);

          // Modal Main Info
          modalInfoContainer = document.createElement("div");
          modalInfoContainer.className = "widget__modaliInfoContainer";

          let modalInfo = document.createElement("div");
          modalInfo.className = "widget__modalInfo";

          let modalProfilImg = document.createElement("img");
          modalProfilImg.className = "widget__profileImg";
          modalProfilImg.setAttribute("src", data[id].profile_image);

          var h2 = document.createElement("h2");
          var h3 = document.createElement("h3");
          h2.innerHTML = data[id].name;
          h3.innerHTML = data[id].date;

          let flexDiv = document.createElement("div");
          flexDiv.append(h2, h3);
          var instaImg = document.createElement("img");
          instaImg.setAttribute("src", "./icons/instagram-logo.svg");

          let modalInfoMain = document.createElement("div");
          modalInfoMain.className = "widget__modalInfoMain";

          modalInfo.append(modalProfilImg, flexDiv);
          modalInfoMain.append(modalInfo, instaImg);

          // Modal Caption
          let modalCaption = document.createElement("p");
          modalCaption.innerHTML = data[id].caption;

          // Modal Likes
          var modalLikes = document.createElement("div");
          modalLikes.className = "widget__modalLikes";

          var likesImg = document.createElement("img");
          likesImg.setAttribute("src", "./icons/heart.svg");

          var likes = document.createElement("p");
          likes.innerHTML = data[id].likes;

          modalLikes.append(likesImg, likes);

          modalInfoContainer.append(modalInfoMain, modalCaption, modalLikes);

          let widgetContainer = document.createElement("div");
          widgetContainer.className = "widget__containerModal";
          widgetContainer.append(modalImg, modalInfoContainer);
          widgetOverlay.append(widgetContainer);
          widget__overlay.style.display = "block";
        });

        // Function to close modal
        widgetOverlay.addEventListener("click", (e) => {
          if(e.target.id === "widget__overlay") {
             widget__overlay.style.display = "none";
          }
        });
       
      });
    }

    // Load more Btn (lodd 4 post)
    const loadmore = document.getElementById("loadmore");
    let current = 4;
    loadmore.addEventListener("click", (e) => {
      const posts = [...document.querySelectorAll(" .widget__post")];
      for (let i = current; i < current + 4; i++) {
        if (posts[i]) {
          posts[i].style.display = "block";
        }
      }
      current += 4;

      if (current >= posts.length) {
        event.target.style.display = "none";
      }
    });
  })
  .catch(function (err) {
    console.warn("Something went wrong.", err);
  });
