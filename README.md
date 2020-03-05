# [The Vintage Caravan]() live website url **TO_ADD**

<img src="https://github.com/sctlcd/The-Vintage-Caravan/tree/master/app/wireframes/FireShot_Capture_009.png" alt="The Vintage Caravan" width="700">
<dl>
<dt>'a classic hard rock of the 60's and 70's with a powerful attitude and a modern twist' ~ The Vintage Caravan. </dt><br>
<dd>Already a fan of The Vintage Caravan? You've have found the right place!</dd>
<dd>You don't know The Vintage Caravan? You are in the right place!</dd>
[The Vintage Caravan]() is the perfect place to discover the band as well as to get information, listen and buy their albums, be aware of their gig dates, locations and where to buy tickets, access to their merchandise store, no shows near you ask them to play in your city, etc...

I've discovered The Vintage Caravan totally by coincidence. My boyfriend and I were in a vintage clothing stores in Malasaña, Madrid's neighbourhood, when we listened a fantastic song we've never heard before. Since then we are big fans of the band.
We've personally saw them twice in live and they are amazing! There will be more for sure!
<br>
Go for it!

---

# Table of Contents <a name="TableOfContents"></a>

1. [UX](#UX)

	- [User Stories](#UserStories)
	- [Design](#Design)
		- [Framework](#Framework)
		- [color Scheme](#ColorScheme)
		- [Icons](#Icons)
		- [Typography](#Typography)
	- [Wireframes](#Wireframes)

2. [Features](#Features)

	- [Existing Features](#ExistingFeatures)
		- [Navbar](#Navbar)
		- [Footer](#Footer)
		- [Home page](#Homepage)
		- [Music page](#Musicpage)
		- [Photos page](#Photospage)
		- [Shows page](#Showspage)
		- [Store page](#Storepage)
		- [Contact page](#Contactpage)
	- [Features Left to Implement](#FeaturesLeftToImplement)

3. [Technologies Used](#TechnologiesUsed)

	- [Front-End Technologies](#Front-end-technologies)

4. [Testing](#Testing)

	- [Test coverage](#Testcoverage)
	- [Compatibility](#Compatibility)
	- [Validators](#Validators)
	- [Known Issues](#KnownIssues)

5. [Deployment](#Deployment)

	- [Deployment – Live website](#Deploymentlivewebsite)
	- [Deployment – Run locally](#Deploymentrunlocally)

6. [Credits](#Credits)

	- [Content](#Content)
	- [Media](#Media)
	- [Code](#Code)
	- [Acknowledgements](#Acknowledgements)

---

## UX  <a name="UX"></a>

This project is part of my [Code Institute](https://codeinstitute.net/) Full Stack Software Development studies, the **User-Centric Front-End Development** module. The objective of this milestone project is to "*create a static front-end website of at least 3 pages, or at least 3 separate page areas (if using a scrolling page).*"

I have decided to create a responsive website using HTML, CSS and Bootstrap 4 while having the opportunity to spread the world about this rock'n roll band full of humour with a bright future!
The purpose of this website is to give the opportunity to people to discover the band and to offer a centralised access to the band's information: history, discography, photos, listen and buy albums on various platforms, event dates and locations, merchandise store, contact the band, etc.

### User Stories <a name="UserStories"></a>

**TO_FORMAT**

"**As a user, I want to ___**"
- [x] view the site* from **any device** (mobile, tablet, desktop).
- [X] view the embed YouTube video [Reset](https://www.youtube.com/watch?v=6omREbNT9D0) on the top of the navigation menu on all devices in mute and in loop.
- [x] view the YouTube standard enabled options bar when I hover the embed video.
- [x] **access of the navigation menu** from anywhere on the website **without having to scroll**.
- [x] view the band's logo as a link on the top left corner of the Home page.
- [x] reload the Home page when I click on the band's logo link.
- [X] click on each menu item links and navigate to the page with the same name.
- [x] scroll through the album picture within the discography carousel.
- [X] open the selected product in the official merchandise store website in a new browser tab when I click on each album picture links within the discography carousel.
- [x] open the selected album of the music platform link in a new browser tab when I click on each music platform links within the music page.  
- [x] open the selected photo link in a new browser tab when I click on each photo within the photo page
- [x] open the selected Brandintown event link in a new browser tab when I click on the event date link and the venue event link within the event in Shows page.
- [x] see the event list of the upcoming events when I click on the upcoming filter link
- [x] see the archive filter link disable in the Shows pages.
- [x] open the band's Brandintown home page in a new browser tab when I click on the "No shows near you? Ask to play in your city!" button in the Shows pages.
- [x] open the band's official merchandise store website in a new browser tab when I click on the Show menu item.
- [x] view a contact form with first name, last name, email, message labels and text inputs and a submit button in the Contact page.
- [x] view the white social media icon links (Twitter, Facebook, Instagram, YouTube, Spotify, Apple Music) in the footer.
- [x] view the  green social media icon links (Twitter, Facebook, Instagram, YouTube, Spotify, Apple Music) in the footer when I hover each icons .
- [x] open the band's social media home page in a new browser tab when I click on the corresponding social media icon link.
- [x] view The Vintage Caravan Copyright mention in the footer.

### Design <a name="Design"></a>

When it's come to The Vintage Caravan, I first think about *Rock'n Roll music* and *Island* so this is why I have designed my entire project around the *starry night sky* with splendid *Northern Lights* idea and dark colors.

I wanted to place a particular emphasis on the [Reset](https://www.youtube.com/watch?time_continue=5&v=6omREbNT9D0&feature=emb_title) video which I find meaningful, energizing and full of humour. That's why I choose to integrate it as an embed video on the top on the navigation menu and displaying it in all device sizes. <br>
Comments bass player Alex on the release "*We proudly present the new video for 'Reset'. The video was made for us by Icelandic production company Obbosí. We've always been fans of fun music videos and we don't like to take ourselves too seriously when it comes to making videos. We had a blast making this one and we're super happy with how it turned out. Hope you like it as much as we do!*" [Nuclear Blast](https://www.nuclearblast.de/en/label/music/band/news/details/5573791.3159218.the-vintage-caravan-raquo-gateways-laquo-out-now.html)

About the Music page I was looking for a way to put together the 3 containers "Album details", " Buy this album", "Listen this album" in a harmonious and aesthetic manner. I didn't like the 3 containers, each one in 1 column, align on the same baseline. The idea of the 3 containers with a staggered positioning in 2 columns but harmonious centered with each others pops up by trying various positionings in Balsamiq Wireframes.

Social Media links in the footer hovered with a green color, reminiscent of the Northern Light color in the background.

#### Framework <a name="Framework"></a>
Bootstrap 4 - Because I've used Bootstrap years ago and I liked it and because it meets the project requirements "*Incorporate a main navigation menu and structured layout*" I've decided to build this website with Bootstrap 4.

#### Color Scheme <a name="ColorScheme"></a>

In keeping with the *starry night sky* with *splendid Northern Lights* idea, I have chosen a dark color scheme. I first choose my background image, an [Aurora Borealis](https://www.pexels.com/photo/beautiful-cosmos-galaxy-milky-way-262662/) and then the following [html colors](https://html-color.codes/) which work quite well with my theme:

- ![#fafafa](https://placehold.it/15/fafafa/fafafa) `#fafafa`
- ![#000000](https://placehold.it/15/000000/000000) `#000000`(*black*)
- ![#14171b](https://placehold.it/15/14171b/14171b) `#14171b`
- ![#495057](https://placehold.it/15/495057/495057) `#495057`
- ![#767676](https://placehold.it/15/767676/767676) `#767676`
-  `rgba(255, 255, 255, 0.65)`
-  `rgba(0, 0, 0, 0.5)`
-  `rgba(255, 255, 255, 0.75)`
-  `rgba(57, 131, 57, 0.7)`
-  `rgba(180, 180, 180, 0.9)`
- ![#398339](https://placehold.it/15/398339/398339) `#398339`


#### Icons <a name="Icons"></a>

- [Font Awesome 5.12](https://fontawesome.com/)
 - I like the look of the Font Awesome's icons which fit my needs for this project.

#### Typography <a name="Typography"></a>

- I have opted to use the custom font [Dekar](https://github.com/sctlcd/The-Vintage-Caravan/tree/master/assets/fonts) designed by [Fontfabric](https://www.fontfabric.com/fonts/dekar/) throughout the application. I really like this simple and easy to read font with a vintage style which I believe fits perfectly with the band's style and the website concept. As a secondary font I have imported the [Google Fonts](https://fonts.google.com/) called [Space Mono](https://fonts.google.com/specimen/Space+Mono).

### Wireframes <a name="Wireframes"></a>

I have used [Balsamiq Wireframes](https://balsamiq.com/wireframes/) for my wireframes because:
- Code Institute have provided all students a free licence until end of 2020. I got to use this software a few year ago and I am pretty happy to get the chance to use it again.
- The simplicity, rapidity and ease of use by focusing on structure and content.

My wireframes for this project can be found [here](https://github.com/sctlcd/The-Vintage-Caravan/tree/master/app/wireframes) in the wireframes sub-directory.

Back to [top](#TableOfContents)

---

## Features <a name="Features"></a>

### Existing Features <a name="ExistingFeatures"></a>

All pages across the website include the same `<header`, `<nav>` and `<footer>`.

##### Navbar <a name="Navbar"></a>

- The navigation menu is fixed on the top thus facilitating the access of the navigation from anywhere on the website without having to scroll.
- The *active* page is highlighted with the `class="active"` attribute which will changes the appearance of the page name in the navigation menu. Hence indicating the user the current page they are visiting.
- Band's logo link reload the Home page.
- Links to all the other pages allows the user to navigate smoothly between pages.
- Each menu item is linked to the relevant page with the same name.
- In mobile view the navbar is collapsed allowing the users more space on the screen. The users can click on the “hamburger” icon and still receive the full menu as a drop down function.

##### Footer <a name="Footer"></a>

- Social media links allow the user to click on each individual icon and a new tab opens with the corresponding social media band's home page.
- The Vintage Caravan copyright mention and my name are displayed.

##### [Home page](https://github.com/sctlcd/The-Vintage-Caravan/blob/master/index.html) <a name="Homepage"></a>

- The primary focus of the "Home" page is the display of the embed Youtube video [Reset](https://www.youtube.com/watch?v=6omREbNT9D0) loaded in mute and in loop by default in all device sizes. Hovering the video displays the options bar giving the user full use of the standard YouTube features: play/pause, previous/next buttons in this case have both the functionality of replay buttons as the video is loaded in loop, mute/unmute, volume, settings, share, open the video in a new tab, etc..   
- It details the band's history in an About section.
- The last section displays a carousel of their discography offering the possibility to click on each album/vinyl links and then opening the selected product from the official merchandise store in a new browser tab.

##### [Music page](https://github.com/sctlcd/The-Vintage-Caravan/blob/master/music.html) <a name="Musicpage"></a>

- The "Music" page showcases each album releases offering access to the following platforms :
 - [Apple Store](https://music.apple.com/us/artist/the-vintage-caravan/500284446)
 - [Amazon mp3](https://www.amazon.co.uk/The-Vintage-Caravan/e/B00HEQCWFE/ref=ep_artist_tab_glance?_encoding=UTF8&sn=d)
 - [Google Play](https://play.google.com/music/preview/Aqsviqbmly5ttb7hp2537xntdva?u=0#)
 - [Deezer](https://www.deezer.com/en/artist/5347087/radio?autoplay=true)
 - [Spotify](https://open.spotify.com/artist/61MH29rMIyOfuK7KXQznzX?autoplay=true&v=A)
 - [Apple Music](https://music.apple.com/us/artist/the-vintage-caravan/500284446)
- Each platforms links open in a new browser tab.
- The 3 containers "Album details", "Buy this album", "Listen this album" are displayed in 2 columns on medium, large and extra large devices and in 1 column in small and extra small devices.

##### [Photos page](https://github.com/sctlcd/The-Vintage-Caravan/blob/master/photos.html) <a name="Photospage"></a>

- The "Photos" page displays pictures of the band in 3 columns on large and extra large devices, in 2 columns on medium devices and in 1 column on extra small and small devices.
- Clicking on each photos open the selected link in a new tab.
- A copyright mention is displayed below each pictures.

##### [Shows page](https://github.com/sctlcd/The-Vintage-Caravan/blob/master/shows.html) <a name="Showspage"></a>

- The "Shows" page displays a list of the upcoming events with dates and locations.
- Clicking on an event opens in a new tab the [Bandintown](https://www.bandsintown.com/a/1550321-the-vintage-caravan?came_from=257) page of the selected event offering to the user various possibilities (buying tickets, find hotels and vacation rental near the location, setting up event notification, etc..).
- A button at the end of the event list gives the user the chance to ask the band to play in their current city via [Bandintown](https://www.bandsintown.com/a/1550321-the-vintage-caravan?came_from=257) webpage opening in a new tab.
- The archive filter link is currently disable.

##### Store page <a name="Storepage"></a>

- The "Store" page opens [The Vintage Caravan official merchandise store](https://www.merchplanet.com/vintagecaravan/) website in a new tab.

##### [Contact page](https://github.com/sctlcd/The-Vintage-Caravan/blob/master/contact.html) <a name="Contactpage"></a>

- The "Contact" page offers the possibility to send a message to the band.

### Features Left to Implement <a name="FeaturesLeftToImplement"></a>
 - The Vintage Caravan videos page
 - Past events of the Shows page (archive filter link currently disable on the Shows page)
 - Server side Contact form (out of scope of the project requirements)
 - Add a newsletter subscription feature on Home page or on a new page. (to be defined)

Back to [top](#TableOfContents)

---

## Technologies Used <a name="TechnologiesUsed"></a>

- [GitHub](https://github.com/) - Used as remote storage of my code online.
- [Gitpod](https://www.gitpod.io/) - Used as an online IDE.
- [Atom](https://atom.io/) - Used as local IDE.
- [Compressjpeg](https://compressjpeg.com/) - **TO_ADD ?**

##### Front-End Technologies <a name="Front-end-technologies"></a>

- [HTML](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) - Used as the base for markup text.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3) - Used as the base for cascading styles.
- [Bootstrap](https://getbootstrap.com/) - Used for responsive, mobile first projects design

Back to [top](#TableOfContents)

---

## Testing <a name="Testing"></a>

### Test coverage <a name="Testcoverage"></a>

**TO_ADD**

Page      | Screen      | Desired outcome | Result
--------- | ----------- | --------------- | ---
          | SM | result as expected in the wireframes | True
					| SM | result as expected in the wireframes | True
          | SM | result as expected in the wireframes | True

### Compatibility <a name="Compatibility"></a>

					To ensure a broad range of users can successfully use this site, I tested it across the 6 major browsers in both desktop and mobile configuration.

					- Chrome v. **TO_ADD**
					- Edge v. **TO_ADD**
					- Firefox v. **TO_ADD**
					- Safari v. **TO_ADD**
					- Opera v. **TO_ADD**
					- Internet Explorer v. **TO_ADD**

### Validators <a name="Validators"></a>

**HTML**
- [W3C HTML Validator](https://validator.w3.org/)
**TO_ADD**

**CSS**
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
**TO_ADD**

### Known Issues <a name="KnownIssues"></a>
**TO_ADD**

Back to [top](#TableOfContents)

---

## Deployment <a name="Deployment"></a>

### Deployment – Live Website <a name="Deploymentlivewebsite"></a>  

	 1.	Create repository in GitHub and give it a relevant name.
	 2.	Click on your repository to open it.
	 3.	Find the “settings” tab and click on it.
	 4.	Scroll down until you arrive at the “GitHub Pages” sections.
	 5.	Under the “source” drop down menu, choose a branch. I chose “master branch” and select it.
	 6.	You will then see a URL to your live webpage. In my case the URL is **TO_ADD**

### Deployment – Run Locally <a name="Deploymentrunlocally"></a>

	1.	Again, click on the repository called **TO_ADD**
	2.	Along the top bar, find the “clone or download” button.
	3.	Here you have the option to clone by HTTPS or SSH.
	4.	Once you have chose your desired option, then click the copy icon next to the URL.
	5.	Open Git Bash.
	6.	Ensure you are in the correct directory which you want to copy the code into. If not, change the directory now.
	7.	In the terminal, write the    $ git clone https://github.com/sctlcd/**TO_ADD**
	8.	Press the enter button and your clone will be created.	 

Back to [top](#TableOfContents)

---

## Credits <a name="Credits"></a>

I've got my inspiration from [The Vintage Caravan](https://www.thevintagecaravan.eu/) official website and from their record label website, [Nuclear Blast](https://www.nuclearblast.de/en/shop/artikel/gruppen/51000.1.html?article_group_sort_type_handle=rank&custom_keywords=the+vintage+caravan&custom_artists=3159218&sli=22590626#page-1).

### Content <a name="Content"></a>

- The Vintage Caravan details - [Nuclear Blast](https://www.nuclearblast.de/) and [Wikipedia](https://en.wikipedia.org/wiki/The_Vintage_Caravan)

### Media <a name="Media"></a>

Sources of the images used on this site:

- From gallery sub-directory - [Github](https://github.com/sctlcd/The-Vintage-Caravan/tree/master/assets/images/gallery)
 - [TVC_1.jpg](https://www.facebook.com/vintagecaravan/photos/a.609371895781412/2519674028084513/?type=3&theater) - copyright Gael Mathieu
 - [TVC_33.jpg](https://www.facebook.com/vintagecaravan/photos/a.609371895781412/2423379847713932/?type=3&theater) - copyright Sven Grosch
 - [TVC_2.jpg](https://www.facebook.com/vintagecaravan/photos/a.609371895781412/2559313840787198/?type=3&theater) - copyright Julien Dupeyron
 - [TVC_5.jpg](https://www.facebook.com/vintagecaravan/photos/a.609371895781412/2752972958087951/?type=3&theater) - copyright Julien Dupeyron
 - [TVC_9.jpg](https://www.facebook.com/vintagecaravan/photos/a.609371895781412/2937799776271934/?type=3&theater) - copyright Fabian Lippke » Fotograf
 - [TVC_6.jpg](https://www.facebook.com/vintagecaravan/photos/a.609371895781412/2781938425191404/?type=3&theater) - copyright Tjeerd Derkink
 - [TVC_7.jpg](https://www.facebook.com/vintagecaravan/photos/a.609371895781412/2858176484234264/?type=3&theater) - copyright The Vintage Caravan
 - [TVC_4.jpg](https://www.facebook.com/vintagecaravan/photos/a.609371895781412/2744893828895864/?type=3&theater) - copyright The Vintage Caravan
 - [TVC_25.jpg](https://www.facebook.com/vintagecaravan/photos/a.609371895781412/2340217576030160/?type=3&theater) - copyright Fabian Lippke » Fotograf
 - [TVC_13.jpg](https://www.facebook.com/vintagecaravan/photos/a.609371895781412/2029703040414950/?type=3&theater) - copyright The Vintage Caravan
 - [TVC_10.jpg](https://www.facebook.com/vintagecaravan/photos/a.609371895781412/954499534601978/?type=3&theater) - copyright Domantas Kvedaras
 - [TVC_12.jpg](https://www.facebook.com/vintagecaravan/photos/a.609371895781412/2029702930414961/?type=3&theater) - copyright The Vintage Caravan
 - [TVC_14.jpg](https://www.facebook.com/vintagecaravan/photos/a.609371895781412/2184383684946884/?type=3&theater) - copyright The Vintage Caravan
 - [TVC_18.jpg](https://www.facebook.com/vintagecaravan/photos/a.176472825737990/1045500508835213/?type=3&theater) - copyright Bjorns photos
 - [TVC_20.jpg](https://www.facebook.com/vintagecaravan/photos/a.176472825737990/1231343676917561/?type=3&theater) - copyright The Vintage Caravan
 - [TVC_15.jpg](https://www.facebook.com/vintagecaravan/photos/a.609371895781412/2519673634751219/?type=3&theater) - copyright Gael Mathieu
 - [TVC_8.jpg](https://www.facebook.com/vintagecaravan/photos/a.609371895781412/2866551196730126/?type=3&theater) - copyright Fabian Lippke » Fotograf
 - [TVC_30.jpg](https://www.facebook.com/vintagecaravan/photos/a.609371895781412/2747407845311129/?type=3&theater) - copyright ELP-Photo
 - [TVC_32.jpg](https://www.facebook.com/vintagecaravan/photos/a.609371895781412/2747407991977781/?type=3&theater) - copyright ELP-Photo
 - [TVC_19.jpg](https://www.facebook.com/vintagecaravan/photos/a.176472825737990/1067927786592485/?type=3&theater) - copyright Burning Moon
 - [TVC_31.jpg](https://www.facebook.com/vintagecaravan/photos/a.609371895781412/2747407971977783/?type=3&theater) - copyright ELP-Photo
 - [TVC_34.jpg](https://www.facebook.com/vintagecaravan/photos/a.176472825737990/1253299878055274/?type=3&theater) - copyright Renato Jacob
 - [TVC_27.jpg](https://www.facebook.com/vintagecaravan/photos/a.609371895781412/2752972798087967/?type=3&theater) - copyright Renato Jacob
 - [TVC_23.jpg](https://www.facebook.com/vintagecaravan/photos/a.176472825737990/1283809088337686/?type=3&theater) - copyright Caro Staley

- From carousel sub-directory - [Github](https://github.com/sctlcd/The-Vintage-Caravan/tree/master/assets/images/carousel)
 - gateway-vinyl.jpg - [Ebay](https://www.google.com/search?q=the+vintage+caravan+vinyl+hd&tbm=isch&ved=2ahUKEwj71bLfk4HoAhU3VxUIHQ7jAHoQ2-cCegQIABAA&oq=the+vintage+caravan+vinyl+hd&gs_l=img.3...204664.208593..208749...0.0..0.64.833.16......0....1..gws-wiz-img.......0i30j0i24.JZPQGifbO-s&ei=1MtfXvubBLeu1fAPjsaD0Ac&bih=937&biw=1920#imgrc=N-841vKF900L8M)
 - gateways-cd.jpg - [Nuclear Blast](https://www.google.com/search?q=the+vintage+caravan+album+hd&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiZzfTdk4HoAhUUQEEAHe6mCAEQ_AUoAXoECAwQAw&biw=1920&bih=937#imgrc=B21CpamTPsfTnM)
 - arrival-cd.jpg - [Nuclear Blast](https://www.google.com/search?q=the+vintage+caravan+album+hd&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiZzfTdk4HoAhUUQEEAHe6mCAEQ_AUoAXoECAwQAw&biw=1920&bih=937#imgrc=kYCP-hMIk_mfiM)
 - arrival-vinyl.jpg - [Nuclear Blast](https://www.google.com/search?q=the+vintage+caravan+vinyl+hd&tbm=isch&ved=2ahUKEwj71bLfk4HoAhU3VxUIHQ7jAHoQ2-cCegQIABAA&oq=the+vintage+caravan+vinyl+hd&gs_l=img.3...204664.208593..208749...0.0..0.64.833.16......0....1..gws-wiz-img.......0i30j0i24.JZPQGifbO-s&ei=1MtfXvubBLeu1fAPjsaD0Ac&bih=937&biw=1920#imgrc=LPuvtusN0g67TM)
 - voyage-cd.jpg - [Real Rock and Roll](https://www.google.com/search?q=the+vintage+caravan+album+hd&tbm=isch&ved=2ahUKEwjJm6-llYHoAhXCRxUIHR9VBncQ2-cCegQIABAA&oq=the+vintage+caravan+album+hd&gs_l=img.3...153017.155582..156506...0.0..0.66.588.10......0....1..gws-wiz-img.nX3ie_zRfsg&ei=c81fXomWD8KP1fAPn6qZuAc&bih=937&biw=1920#imgrc=LcI3TRgkP2I8yM)
 - voyage-vinyl.jpg - [Nuclear Blast](https://www.google.com/search?q=the+vintage+caravan+vinyl+hd&tbm=isch&ved=2ahUKEwj71bLfk4HoAhU3VxUIHQ7jAHoQ2-cCegQIABAA&oq=the+vintage+caravan+vinyl+hd&gs_l=img.3...204664.208593..208749...0.0..0.64.833.16......0....1..gws-wiz-img.......0i30j0i24.JZPQGifbO-s&ei=1MtfXvubBLeu1fAPjsaD0Ac&bih=937&biw=1920#imgrc=bbYyccKkvV8hPM)

- From music sub-directory - [Github](https://github.com/sctlcd/The-Vintage-Caravan/tree/master/assets/images/music)
 - amazon-mp3-logo-transparent.png - [Ya-webdesign](https://ya-webdesign.com/explore/amazon-mp3/)
 - apple-music-logo-transparent.png - [Ya-webdesign](https://ya-webdesign.com/explore/apple-music/)
 - apple-store-logo-transparent.png - [Ya-webdesign](https://ya-webdesign.com/explore/apple-store/)
 - deezer-logo.png- [Pluspng](http://pluspng.com/png-111921.html)
 - google-play-logo-transparent.png - [Ya-webdesign](https://ya-webdesign.com/explore/google-play/)
 - spotify-logo-transparent.png - [Ya-webdesign](https://ya-webdesign.com/explore/spotify/)

- From images sub-directory - [Github](https://github.com/sctlcd/The-Vintage-Caravan/tree/master/assets/images)
	- galaxy-background.jpg - [Pexels](https://www.pexels.com/photo/beautiful-cosmos-galaxy-milky-way-262662/)
	- the-vintage-caravan_brand_logo.png - [thevintagecaravan.eu](https://www.google.com/search?q=the+vintage+caravan+brand+logo&tbm=isch&source=univ&sa=X&ved=2ahUKEwiYu9K-l4HoAhUSQ8AKHd4CDm0QsAR6BAgKEAE&biw=1920&bih=937#imgrc=3KyrQ6IbB53TaM)

### Code <a name="Code"></a>

- YouTube Embedded Players and Player Parameters- [YouTube](https://developers.google.com/youtube/player_parameters)
- Responsive background image - [Webfx](https://www.webfx.com/blog/web-design/responsive-background-image/)
- Dekar font download - [Fontsquirrel](https://www.fontsquirrel.com/fonts/dekar)
- Webfont generator - [Fontsquirrel](https://www.fontsquirrel.com/tools/webfont-generator)
- How to add custom fonts to any website - [Pagecloud](https://www.pagecloud.com/blog/how-to-add-custom-fonts-to-any-website)
- Bootstrap 4 carousel - [Bootstrapcreative](https://bootstrapcreative.com/create-full-width-bootstrap-4-responsive-carousel/)
- Break a table row into multiple line (responsive layout) - [Stackoverflow](https://stackoverflow.com/questions/25405105/break-a-table-row-into-multiple-line-responsive-layout/25406206)

### Acknowledgements <a name="Acknowledgements"></a>

- [Anthony Ngene](https://github.com/tonymontaro)
	- Thanks to my Code Institute mentor or his time, suggestions, and constructive feedback

Back to [top](#TableOfContents)

---
