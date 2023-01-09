function generateNavbar() {
    // Add the HTML code for the navigation bar here
    var navbar = `
    <nav>
        <ul>
            <div class="logo">
                <!-- Place your logo here -->
            </div>
                <li><a href="index.html">About me</a></li>
                <li><a href="VideoGames.html">VideoGames</a></li>
                <li><a href="SoundDesign.html">Sound Design</a></li>
                <li><a href="page4.html">Audio Programming</a></li>
                <li><a href="page5.html">Music</a></li>
                <li><a href="page6.html">Item 6</a></li>
        </ul>
    </nav>
    `;
  
    // Append the navigation bar to the DOM
    document.body.insertAdjacentHTML('afterbegin', navbar);
  }
  