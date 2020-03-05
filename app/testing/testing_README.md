## Testing <a name="Testing"></a>

### Layout responsiveness <a name="Layoutresponsiveness"></a>

| All pages | Galaxy S5 | Pixel | Pixel 2 XL |iPhone 6/7/8 | iPhone 6/7/8 Plus | iPhone X | iPad | iPad Pro | Desktop 1024px | Desktop >1200px |
| :--- | :--- | :---| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Navigation <992px | Good | Good | Good | Good | Good | Good | Good | n/a | n/a | n/a |
| Navigation >992px | n/a | n/a | n/a | n/a | n/a | n/a | n/a | Good | Good | Good |
|**index.html** |
| *Video / video options* | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good |
| *Menu / logo / links / URLs* | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good |
| *Images / text / links* | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good |
| *Footer links* | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good |
| *Renders as expected* | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good |
| **music.html** |
| *Menu / logo / links / URLs* | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good |
| *Images / text / links* | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good |
| *Footer links* | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good |
| *Renders as expected* | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good |
| **photos.html** |
| *Menu / logo / links / URLs* | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good |
| *Images / text / links* | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good |
| *Footer links* | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good |
| *Renders as expected* | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good |
| **shows.html** |
| *Menu / logo / links / URLs* | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good |
| *Images / text / links* | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good |
| *Footer links* | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good |
| *Renders as expected* | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good |
| **store.html** |
| *Renders as expected* | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good |
| **contact.html** |
| *Menu / logo / links / URLs* | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good |
| *Images / text / links* | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good |
| *Footer links* | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good |
| *Renders as expected* | Good | Good | Good | Good | Good | Good | Good | Good | Good | Good |

### Compatibility <a name="Compatibility"></a>

I tested the website across the 6 main browsers in both desktop and mobile configuration to ensure a large number of users can use it successfully.

- Chrome v.80.0
- Edge v.44
- Firefox v.73.0.1
- Safari v.5.1.7 on Windows 10
- Opera v.67.0
- Internet Explorer v.11

| All pages | Chrome | Edge | Firefox | Safari | Opera | IE |
| :--- | :--- | :---| :--- | :--- | :--- | :--- |
| Expected appearance | Good | Fair | Good | Poor | Good | Poor |
| Expected responsiveness | Good | Good | Good | Poor | Good | Poor |

- **Edge**: music page containers do not render as expected, the 3 containers with a staggered positioning in 2 columns are not harmoniously centered with each others. Album container size is reduced. Each links open in a separate new window.  

- **IE**: [Some CSS3 properties and HTML5 elements are not fully supported](https://getbootstrap.com/docs/4.0/getting-started/browsers-devices/#internet-explorer)

- **Safari v.5.1.7**: It’s an outdated version and lacks many of the features present in the latest version of Safari. The last version of Safari for Windows was released on May 9, 2012.
