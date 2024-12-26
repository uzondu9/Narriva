// HIDING THE FRONT PAGE
// 1.select the body element
const body = document.body;

// 2.creating the postPage
const postPage = document.createElement('div');
postPage.id = 'post';

// 3.move all body elements into the new div
while (body.firstChild) {
    postPage.appendChild(body.firstChild); // Moves the node from body to the new div
}

// 4.append the new div back to the body
body.appendChild(postPage);

// 5.make the frontpage invisble at first
postPage.style.display = 'none';


//CREATING THE BLOG PAGE
//1.blueprint for post card
const postCard = {
    title: "Exploring Winter Solstice Traditions",
    description: "Discover how cultures worldwide celebrate the shortest day of the year.",
    image1: "assets/img/solstice.gif",
    image2: "assets/img/Winter.jfif",
    image3: "assets/img/solstice3.jfif",
    image4: "assets/img/solstice5.jfif",
    image5: "assets/img/Winter Solstice.jfif",
    date: "December 21, 2024"
};

// 2.use template literals to create the markup for blog page
const blog = ` 
<div class="blog">
    <header class="blog-header">
        <nav class="blog-nav" id="blog-nav">
           <div class="logo-box">
                <a href="#">
                    <img src="assets/img/logo/logo2.png" alt="Logo image">
                </a>
            </div>
            <div class="links-all">
                <div class="links-box">
                    <a href="#" class="link current">Home</a>
                    <a href="#" class="link">About Us</a>
                    <a href="#" class="link">Topics</a>
                    <a href="#" class="link">Magazines</a>
                    <a href="#" class="link">Podcasts</a>
                </div>
                <div class="register-box">
                    <a href="#" class="register login">Login</a>
                    <a href="#" class="register signup">Sign up</a>
                </div>
            </div>
            <div class="toggle">
                <img src="assets/img/icons/menu.svg" alt="Toggle image" class='toggleImg' id='toggleBlogImg'/>
            </div>
        </nav>
        <div class="header-content">
            <h1>Narriva: Celebrating Stories That Unite Us</h1>
            <p>
                Explore the vibrant stories behind the world’s most cherished traditions and celebrations.
            </p>
            <div class="cta">
                <div class="register-box">
                    <input type="email" name="email" id="email" placeholder="Enter Email">
                    <a href="#" class="register signup-2">Sign up</a>
                </div>
            </div>
        </div>
    </header>
    
    <main class="blog-content">
        <div class="recent-posts">
            <h1>Recent Posts</h1>
            <div class="post-card a">
                <img src="${postCard.image1}" alt="${postCard.title}" class="post-card-img">
                <div class="post-card-content">
                    <h3 class="post-card-title">${postCard.title}</h3>
                    <p class="post-card-description">${postCard.description}</p>
                    <div class="post-card-footer">
                        <span class="post-card-date">${postCard.date}</span>
                        <button class="post-card-btn">Read More</button>
                    </div>
               </div>
          </div>
          <div class="post-card b">
                <img src="${postCard.image2}" alt="${postCard.title}" class="post-card-img">
                <div class="post-card-content">
                    <h3 class="post-card-title">${postCard.title}</h3>
                    <p class="post-card-description">${postCard.description}</p>
                    <div class="post-card-footer">
                        <span class="post-card-date">${postCard.date}</span>
                        <button class="post-card-btn">Read More</button>
                    </div>
                </div>
         </div>
        <div class="post-card c">
                <img src="${postCard.image3}" alt="${postCard.title}" class="post-card-img">
                <div class="post-card-content">
                    <h3 class="post-card-title">${postCard.title}</h3>
                    <p class="post-card-description">${postCard.description}</p>
                    <div class="post-card-footer">
                        <span class="post-card-date">${postCard.date}</span>
                        <button class="post-card-btn">Read More</button>
                    </div>
                </div>
        </div>
        <div class="post-card d">
                <img src="${postCard.image4}" alt="${postCard.title}" class="post-card-img">
                <div class="post-card-content">
                    <h3 class="post-card-title">${postCard.title}</h3>
                    <p class="post-card-description">${postCard.description}</p>
                    <div class="post-card-footer">
                        <span class="post-card-date">${postCard.date}</span>
                        <button class="post-card-btn">Read More</button>
                    </div>
                </div>
        </div>
        <div class="post-card e">
                <img src="${postCard.image5}" alt="${postCard.title}" class="post-card-img">
                <div class="post-card-content">
                    <h3 class="post-card-title">${postCard.title}</h3>
                    <p class="post-card-description">${postCard.description}</p>
                    <div class="post-card-footer">
                        <span class="post-card-date">${postCard.date}</span>
                        <button class="post-card-btn">Read More</button>
                    </div>
                </div>
        </div>
     </div>
  </main>
  <footer class="footer blog-footer">
        <div class="logo-box">
            <a href="#">
                <img src="assets/img/logo/logo2.png" alt="Logo image">
            </a>
        </div>
        <div class="footer-media">
            <a href="https://www.facebook.com/"><img src="assets/img/icons/facebook.png" alt=""></a>
            <a href="https://www.instagram.com/"><img src="assets/img/icons/instagram.1.png" alt=""></a>
            <a href="https://www.linkedin.com/"><img src="assets/img/icons/linkedln.png" alt=""></a>
            <a href="https://www.pinterest.com/"><img src="assets/img/icons/pinterest.png" alt=""></a>
            <a href="https://www.x.com/"><img src="assets/img/icons/x-twitter.png" alt=""></a>
        </div>
        <div class="footer-links">
            <a href="#" class="link">About Us</a>
            <a href="#" class="link">Topics</a>
            <a href="#" class="link">Magazines</a>
            <a href="#" class="link">Podcasts</a>
        </div>
        <div class="bottom-footer">
            <a href="#main-header">Back to Top</a>
            <p>&copy; 2024 Winter Solstice Celebrations</p>
            <a href="#contact">Contact Us</a>
        </div>
  </footer>
 `
// 3.append markup to the body 
document.body.innerHTML += blog;

// SHOWING THE POST
// 1.store the post buttons in a variable called buttons
const buttons = document.querySelectorAll('.post-card-btn');

// 2.loop through the post buttons for click events
buttons.forEach(function(button){
    button.addEventListener('click', (e) => {
        showPost();
    });
});

// 3.code block for showing the post
const blogPage = document.querySelector('.blog');
function showPost() {
    blogPage.style.display = 'none';
    let postPage = document.getElementById('post');
    postPage.style.display = 'block';
}

// ENHANCE MARKUP FOR POST PAGE
// 1.Select the post and other sections
const post = document.getElementById('post');
const postHeader = document.getElementById('main-header');


// 2.Use template literals to create the navbar markup
const Nav = `
<nav class="blog-nav" id="post-nav">
           <div class="logo-box">
                    <a href="#">
                       <img src="assets/img/logo/logo2.png" alt="Logo image">
                    </a>
            </div>
            <div class="links-all">
                <div class="links-box">
                    <a href="#" class="link current">Home</a>
                    <a href="#" class="link">About Us</a>
                    <a href="#" class="link">Topics</a>
                    <a href="#" class="link">Magazines</a>
                    <a href="#" class="link">Podcasts</a>
                </div>
                <div class="register-box">
                    <a href="#" class="register login">Login</a>
                    <a href="#" class="register signup">Sign up</a>
                </div>
            </div>
            <div class="toggle">
               <img src="assets/img/icons/menu.svg" alt="Toggle image" class='toggleImg'id='togglePostImg'/>
            </div>
</nav>
`
// append the navbar markup to post page 
post.innerHTML += Nav;

// place the post navbar at the top of the page
const postNav = document.getElementById('post-nav');
post.prepend(postNav);


// 4.Add a beautiful image at the top
const topImage = document.createElement('img');
topImage.src = 'assets/img/main.jpg'; // Replace with your image path
topImage.alt = 'Descriptive Alt Text';

// insert the image before the header text
postHeader.insertBefore(topImage, postHeader.firstChild);


// 5.Add images to each section
const postSections = document.querySelectorAll('.section'); // Select all sections
postSections.forEach((section, index) => {
    const sectionImage = document.createElement('img');
    sectionImage.src = `assets/img/image${index + 1}.jpg`; // Replace with image paths
    sectionImage.alt = `Image for section ${index + 1}`;

    // insert the image at the top of the section
    section.insertBefore(sectionImage, section.firstChild);
});


// 5.Create a new parent container for all other elements
const postContainer = document.createElement('div');
postContainer.classList.add('post-container');

// get all post children except the navbar
const postChildren = Array.from(post.children).filter(
    child => child !== postNav
);

// move all filtered elements into the new parent container
postChildren.forEach(child => {
    postContainer.appendChild(child);
});

// insert the parent container into the post page and reposition the image within the post header
post.appendChild(postContainer);
postContainer.childNodes[1].append(topImage);
postContainer.childNodes[0].insertBefore(topImage, postContainer.childNodes[0].childNodes[2]);


// 6.Replace the post footer with the blog footer
const blogFooter = document.querySelector('.blog-footer'); // Blog footer (shared content)
const postFooter = postContainer.querySelector('#main-footer'); // Footer in the post page

// remove the existing footer from the post-container
if (postFooter) {
    postContainer.removeChild(postFooter);
}

// clone or move the blog footer to the post page
const blogFooterClone = blogFooter.cloneNode(true); // Clone the blog footer
post.appendChild(blogFooterClone); // Append it to the body (outside the container)


// TOGGLE FUNCTIONALITY
// 1.select elements
const toggles = document.querySelectorAll('.toggle');
const toggleImgs = document.querySelectorAll('.toggleImg');
const toggleSrcs = Array.from(toggleImgs).map(img => img.src); // Get all initial srcs
const navbars = document.querySelectorAll('.blog-nav'); // Select all navbars

// 2.loop through each toggle button
toggles.forEach((toggle, index) => {
    toggle.addEventListener('click', () => {
        const img = toggleImgs[index]; // Get the corresponding image
        const navbar = navbars[index]; // Get the corresponding navbar

        // Toggle the expanded class on the navbar
        navbar.classList.toggle('expanded');

        // Check the state of the navbar and update the image src
        if (navbar.classList.contains('expanded')) {
            img.src = 'assets/img/icons/close.svg'; // Show close icon
        } else {
            img.src = 'assets/img/icons/menu.svg'; // Show open icon
        }
    });
});











