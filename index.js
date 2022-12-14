const blogContainerEl = document.getElementById('blog-container')

document.addEventListener('click', function(e) {
    if (e.target.dataset.more){
        handleViewMore()
    }
})

function handleViewMore() {
    blogContainerEl.innerHTML = blogContainerEl.innerHTML + `
        <div class='post'><a class='blog-link' href='#'>
                    <img class='img' src='images/article-image-04.png' />
                    <p class='date'>JULY 22, 2022</p>
                    <h3 class='title'>Blog 4</h3>
                    <p class='content'>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
                </a></div>
                <div class='post'><a class='blog-link' href='#'>
                    <img class='img' src='images/article-image-05.png' />
                    <p class='date'>JULY 24, 2022</p>
                    <h3 class='title'>Blog 5</h3>
                    <p class='content'>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
                </a></div>
                <div class='post'><a class='blog-link' href='#'>
                    <img class='img' src='images/article-image-06.png' />
                    <p class='date'>JULY 25, 2022</p>
                    <h3 class='title'>Blog 6</h3>
                    <p class='content'>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
                </a></div>
    `
}