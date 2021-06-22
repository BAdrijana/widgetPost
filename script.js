// Fetch Data form JSON
fetch('./data.json').then(function (response) {
	return response.json();
}).then(function (data) {
	console.log(data);
  let widgetPosts = document.getElementById('widget__posts');
 
//  creating a single post
  for (var i = 0; i < data.length; ++i) {
    
    var divPost = document.createElement('div');
    divPost.className ='widget__post';
    divPost.setAttribute('data-popup', i);
    divPost.setAttribute('id', i);
    var divMain = document.createElement('div');
    divMain.className = 'widget__main';
    divMain.setAttribute('data-popup', i);
    var profileImg = document.createElement('img');
    profileImg.className = 'widget__profileImg';
    profileImg.setAttribute('src', data[i].profile_image )
    var instaImg = document.createElement('img');
    instaImg.setAttribute('src', "./icons/instagram-logo.svg");
    instaImg.setAttribute('data-popup', i);

    var div = document.createElement('div');
    div.setAttribute('data-popup', i);
    var h2 = document.createElement('h2')
    var h3 = document.createElement('h3');
    h2.innerHTML = data[i].name;
    h2.setAttribute('data-popup', i);
    h3.innerHTML = data[i].date;
    h3.setAttribute('data-popup', i);
    div.append(h2,h3);
    divMain.append( profileImg,div, instaImg);

    var widgetImg = document.createElement('img');
    widgetImg.className = 'widget__image';
    widgetImg.setAttribute('src', data[i].image);
    widgetImg.setAttribute('data-popup', i);

    var caption = document.createElement('p');
    caption.innerHTML = data[i].caption;
    caption.setAttribute('data-popup', i);

    var widgetsLikes = document.createElement('div');
    widgetsLikes.setAttribute('data-popup', i);
    widgetsLikes.className = 'widget__likes';
    var likesImg = document.createElement('img');
    likesImg.setAttribute('src', './icons/heart.svg');
    likesImg.setAttribute('data-popup', i);
    var likes = document.createElement('p');
    likes.innerHTML= data[i].likes;
    likes.setAttribute('data-popup', i);

    widgetsLikes.append(likesImg,likes);
    divPost.append(divMain, widgetImg,caption, widgetsLikes);
    widgetPosts.appendChild(divPost); 
    
}


}).catch(function (err) {
	console.warn('Something went wrong.', err);
});

