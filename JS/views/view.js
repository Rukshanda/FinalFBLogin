import {ele} from "../models/base.js"
import { User } from "../models/user.js"
import { Post } from "../models/post.js";


 let state = {}
 let data = JSON.parse(localStorage.getItem('data')) || [];
 let posts = JSON.parse(localStorage.getItem("posts")) || [];
 window.state = state;
 

 
 
 // SingUP fn
 function singUpFn(){
    // creating a new constructure
    // 1)- getting the input values
    const name = ele.name.value;
    const sirName = ele.sirName.value;
    const psw = ele.psw.value;
    const emailSP = ele.emailSP.value;
    const dob = `${ele.day.value} ${ele.month.value} ${ele.year.value}`
    const profileImg = localStorage.getItem("my-image");
  
     
     
   //  let profileImg = ele.profileImg.value;

     let newUser = new User(name , sirName , psw , emailSP , dob, profileImg);
     data.push(newUser); 
     state.user = newUser;
     localStorage.setItem('data' , JSON.stringify(data));
     localStorage.setItem('user' , JSON.stringify(state.user));
     data = JSON.parse(localStorage.getItem('data'));
     
     ele.name.value = "";
     ele.sirName.value = "";
     ele.psw.value = "";
     ele.emailSP.value = "";
     ele.day.value = "";
     ele.month.value = '';
     ele.year.value = '';
     // 
     $(ele.pageBg).fadeOut(700);
     $(ele.singUpPage).fadeOut(700);
     // 
     // Image rendering fn

 }

  // Event listener ...
  $("#singUp").click(singUpFn);
 


 // Login Fn
 function LoginFn(){
    let loginState;
   for (let key in data) {
      const emailVal = data[key].emailSP;
      const pswVal = data[key].psw;
      
     
       localStorage.setItem('userEmail' , ele.emailLogin.value);
       localStorage.setItem('userPsw' , ele.pswLogin.value);

  
      if(localStorage.getItem('userEmail') === emailVal && localStorage.getItem('userPsw') === pswVal){
       
        const URL = "../HTML/facebook.html"
        window.location.href = URL;
        console.log("IT is loged in")
     
          
            
         }
      

    
  }
  ele.emailLogin.value = '';
  ele.pswLogin.value = '';
  return loginState;
 }

 
 
 

 $("#log-In").click(LoginFn);
 // to appear the singUp page
 $("#new-account").click(()=> {
    fadeInFn(ele.pageBg , ele.singUpPage)
 })
 // to disappear the singUp page
 $("#crossBtn").click(()=> {
   fadeOutFn(ele.pageBg , ele.singUpPage)
 })

//  // for image rendering
const fileEl = document.querySelector("#input-file");
 $("#input-file").change(() => {
 const fr = new FileReader();
 fr.readAsDataURL(fileEl.files[0]);

 fr.addEventListener('load' , () => {
     const url = fr.result;
     localStorage.setItem('my-image' , url);
       
 })
})
 // to appear the name and image of the user 

 
    let logInemail = localStorage.getItem("userEmail");
    const arr = JSON.parse(localStorage.getItem("data"));
   arr.filter(el => {
  if(el.emailSP === logInemail){
    if(el.emailSP){

       const url = el.profileImg
       const img = document.querySelectorAll("#person-img");
       img.forEach(img => {
       img.src = url
       })

       $('#user-name').text(el.name)  

       document.querySelectorAll("#user-name").forEach(ele => {
         ele.textContent = el.name;
       })

       }
    }
  });
 
  

  
  // display loginFn
  let logOUtBtn = document.querySelector("#logout-BTN");
  let logOutBg = document.querySelector(".logOut")
  logOUtBtn.addEventListener('click' , ()=>{
     $(logOutBg).css("display" , "block");
 
  })
 


    // to appear the ask boxes
  
 
  
  // the imgTex Ask box
  ele.askText.addEventListener('click' , ()=>{
    fadeInFn(ele.askTextBox , ele.askTextBoxBg)
 })
   ele.crossBtn3.addEventListener('click' ,()=> {
       fadeOutFn(ele.askTextBox , ele.askTextBoxBg)
   })
 
//fadeIn Fn
function fadeOutFn(className , classBg){
   $(className).fadeOut(700);
   $(classBg).fadeOut(700);
}
//fadeOut Fn
function fadeInFn(className , classBg){
   $(className).fadeIn(700);
   $(classBg).fadeIn(700)
}
 
 //-------------\\\
 

 

const renderPosts = post => {
    if (post.postImg && post.postImg !== " " && post.postImg !== "alt\"\"") {
      let imageMarkup = `<div class="post-img"><img src="${post.postImg}" alt="" class="pst-img"></div>`;
      
      let markUp = `
        <div class="post">
          <div class="post-content flex-row space-btw">
            <div class="flex-column txt-Container">
              <div class="post-content--box1 flex-row col-gapx1">
                <div class="post-content--img">
                  <img src="${post.userDp}" alt="" width="36px" height="36px" class="pst-icon">
                </div>
                <div class="post-conetent--text flex-column">
                  <span class="txt-sm txt-white small">${post.userName}</span>
                </div>
              </div>
              <div class="post-content--TXT flex-row">
                <div class="post-contentTXT"><span class="txt-lg txt-white">${post.content}</span></div>
              </div>
            </div>
            <div class="post-content--box2 flex-row col-gapx1">
              <div class="post-content--icon">
                <svg fill="currentColor" viewBox="0 0 20 20" width="1.5em" height="1.5em" class="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 x1qx5ct2 xw4jnvo" id="info"><g fill-rule="evenodd" transform="translate(-446 -350)"><path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path></g></svg>
              </div>
              <div class="post-content--icon">
                <i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1" id="cross" style="background-image:url('https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/0CrhH_2S8bD.png');background-position:-110px -110px;background-size:190px 204px;width:20px;height:20px;background-repeat:no-repeat;display:inline-block"></i>
              </div>
            </div>
          </div>
          ${imageMarkup}
          <div class="likeChange">
            <span class="likesInc">${post.likes} likes</span>
          </div>
          <div class="post-reaction">
          <div class="post-reaction--box1 flex-row space-btw">
          </div>
          <div class="post-reaction--box2">
             <div class="reaction-list flex-row space-btw">
                 <div class="like-btn flex-row col-gapx1 rec-btn" id = "like-btn" >
                  
                     <div class="like-icon" >

                     <i data-visualcompletion="css-img" id = "${post.id}" class="x1b0d499 x1d69dk1  like-outline" style="background-image:url('https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/FA22Qd7z224.png');background-position:0 -774px;background-size:26px 1572px;width:20px;height:20px;background-repeat:no-repeat;display:inline-block"></i>
                         <i data-visualcompletion="css-img" class="like-fill" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/dQOJBZTzfzn.png&quot;); background-position: 0px -126px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; "></i>
                     </div>
                     <div class="rec-text txt-white like-txt">
                         Like
                     </div>
                 </div>
                 <div class="share-btn flex-row col-gapx1 rec-btn">
                       <div class="share-icon">
                        <i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/GYWdmyyokPX.png&quot;); background-position: 0px -191px; background-size: auto; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i>
                       </div> 
                       <div class="rec-text txt-white">
                         Share
                       </div>
                 </div>
                 <div class="comment-btn flex-row col-gapx1 rec-btn">
                     <div class="comment-icon">
                         <i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1" style="background-image:url('https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/GYWdmyyokPX.png');background-position:0 -134px;background-size:auto;width:18px;height:18px;background-repeat:no-repeat;display:inline-block"></i>
                     </div>
                     <div class="rec-text txt-white">
                          Comment
                     </div>
                 </div>
             </div>
          </div>
     </div>
 </div>
      `;
      
      return markUp;
    } else {
      // Handle case when there is no image
   
      let markUp = `
      <div class="post">
              <div class="post-content flex-row space-btw">
              <div class="flex-column txt-Container">
              <div class="post-content--box1 flex-row col-gapx1">
                  <div class="post-content--img">
                      <img src="${post.userDp}" alt="" width="36px" height="36px" class="pst-icon">
                  </div>
                  <div class="post-conetent--text flex-column">
                  <span class="txt-sm txt-white small">${post.userName}</span>
                  </div>
              </div>

              <div class="post-content--TXT flex-row ">
                  <div class = "post-contentTXT">    <span class="txt-lg txt-white">${post.content}</span> </div>

              </div>
          </div>
                  <div class="post-content--box2 flex-row col-gapx1">
                      <div class="post-content--icon">
                          <svg fill="currentColor" viewBox="0 0 20 20" width="1.5em" height="1.5em" class="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 x1qx5ct2 xw4jnvo" id="info"><g fill-rule="evenodd" transform="translate(-446 -350)"><path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path></g></svg>
                      </div>
                      <div class="post-content--icon">
                          <i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1" id="cross" style="background-image:url('https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/0CrhH_2S8bD.png');background-position:-110px -110px;background-size:190px 204px;width:20px;height:20px;background-repeat:no-repeat;display:inline-block"></i>
                      </div>
                  </div>
              </div>
              <div class = "likeChange" >
                 <span class = "likesInc"> ${post.likes} likes </span> 
                 </div>
              <div class="post-reaction">
                   <div class="post-reaction--box1 flex-row space-btw">
                   </div>
                   <div class="post-reaction--box2">
                      <div class="reaction-list flex-row space-btw">
                          <div class="like-btn flex-row col-gapx1 rec-btn" id = "like-btn" >
                           
                              <div class="like-icon" >

                              <i data-visualcompletion="css-img" id = "${post.id}" class="x1b0d499 x1d69dk1  like-outline" style="background-image:url('https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/FA22Qd7z224.png');background-position:0 -774px;background-size:26px 1572px;width:20px;height:20px;background-repeat:no-repeat;display:inline-block"></i>
                                  <i data-visualcompletion="css-img" class="like-fill" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/dQOJBZTzfzn.png&quot;); background-position: 0px -126px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; "></i>
                              </div>
                              <div class="rec-text txt-white like-txt">
                                  Like
                              </div>
                          </div>
                          <div class="share-btn flex-row col-gapx1 rec-btn">
                                <div class="share-icon">
                                 <i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/GYWdmyyokPX.png&quot;); background-position: 0px -191px; background-size: auto; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i>
                                </div> 
                                <div class="rec-text txt-white">
                                  Share
                                </div>
                          </div>
                          <div class="comment-btn flex-row col-gapx1 rec-btn">
                              <div class="comment-icon">
                                  <i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1" style="background-image:url('https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/GYWdmyyokPX.png');background-position:0 -134px;background-size:auto;width:18px;height:18px;background-repeat:no-repeat;display:inline-block"></i>
                              </div>
                              <div class="rec-text txt-white">
                                   Comment
                              </div>
                          </div>
                      </div>
                   </div>
              </div>
          </div>
`
      return markUp;
    }
  };
  
 
 const globalID = JSON.parse(localStorage.getItem("user"));
 let src ;
 
     const imgFile = document.querySelector("#inputImg");
    $("#inputImg").change(() => {
  const newFile = new FileReader();
  newFile.readAsDataURL(imgFile.files[0]);
  newFile.addEventListener('load', () => {
      src = newFile.result;
      $("#imgPreveiewIMg").attr("src" , src);
      $("#addImgIcon").css("display" , "none");
      $(".img-preview--text").css("display" , "none");
  });
  $("#imgPreveiewIMg").attr("src" , " ");
 
    });
   

    function postContent() {
        let currentPost;
        let content = ele.askTextUserText.value;
        let postMaker = document.querySelector(".post-box");
        let imgFile = document.querySelector("#inputImg").files[0];
      
        // Check if content is not empty and an image file is selected
        if (content !== "" || imgFile) {
          const fr = new FileReader();
          fr.onload = function () {
            state.post = new Post(globalID.name, globalID.profileImg, content, fr.result);
            console.log(state.post);
            posts.push(state.post);
            localStorage.setItem("posts", JSON.stringify(posts));
            currentPost = state.post;
            postMaker.classList.add("activePost");
            const markUP = renderPosts(currentPost);
            document.querySelector(".post-box").innerHTML += markUP;
          };
      
          if (imgFile) {
            fr.readAsDataURL(imgFile);
          } else {
            // No image file selected, proceed without an image
            fr.onload(); // Trigger the onload function directly
          }
        }
      
        ele.askTextUserText.value = "";
        $("#imgPreveiewIMg").attr("src", "");
        fadeOutFn(ele.askTextBox, ele.askTextBoxBg);
      }
      
      
   ele.postImgBtn.addEventListener('click' , postContent)


//    window.onload = () => {
//     let elem = document.querySelector(".post-box");
//     posts.forEach((v)=> elem.innerHTML += renderPosts(v));
//    }
 


  








  
//like functionality
 document.getElementById('postBox').addEventListener('click', function (event) {
    let icon = event.target.closest('.like-outline')
    let parentICon = icon.parentElement;
    let invisbleICon = parentICon.querySelector('.like-fill')
    // let txt = parentICon.querySelector('p')
    let limit = true;
    invisbleICon.classList.add('visible');
    icon.classList.add('none');
    // txt.style.color = '#2e89ff';
    // console.log(txt)
    let iconID = icon.id
    console.log(iconID)
    let postdata = JSON.parse(localStorage.getItem('posts'));
    let post;
    let txt = parentICon.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(".likeChange").querySelector(".likesInc")
     
    let txtTxt = parseInt(txt.innerHTML)
    let newTxt = txtTxt + 1;
    txt.innerHTML = newTxt + ' likes';
    console.log(txt.innerHTML)
    if (limit === true) {
        postdata.map(el => {
            if (el.id == iconID) {
                post = el
                Like(true, post);
            }
        })
        limit = false;
    }
  });

const Like = (state, post) => {
    if (state === true) {
        let anyVar = true;
        if (anyVar === true) {
            let postdata = JSON.parse(localStorage.getItem('posts'));
            let postID = post.id;
            post.likes++;
            console.log(post.likes)
            let posts = []
            postdata.map((el, i) => {
                if (el.id === postID) {
                    console.log(el);
                    console.log(i);
                } else {
                    posts.push(el)
                }
            })
             
            posts.push(post)
            
            localStorage.setItem('posts', JSON.stringify(posts))
            console.log(postdata)
        }
    }
}






  // Load the original posts after loading liked posts
window.onload = () => {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    const postBox = document.querySelector('.post-box');
    posts.forEach(post => {
      const postMarkup = renderPosts(post);
      postBox.innerHTML += postMarkup;
    });
  };
  
  
  
  


