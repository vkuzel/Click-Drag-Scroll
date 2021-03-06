# Click Drag Scroll

A Firefox WebExtension that allows you to scroll a page by dragging it. Click the left mouse button inside a page, hold it, move it up and down, it will scroll. 

Useful for touch-screen kiosks.

* Extension scrolls only up and down.
* Mouse down event is consumed except over the input fields. Sou you will be able to focus a field but you won't be able to select text. This means if your page implements some kind of drag & drop functionality it won't work. 
* Mouse up event is consumed if mouse has moved significantly. See extensions's options.
* Mouse click event is consumed if mouse has moved significantly.

# Installation

Install the extension into your browser from the [installer page](https://htmlpreview.github.io/?https://github.com/vkuzel/Click-Drag-Scroll/blob/master/installer.html).

# Development

* Install web-ext `npm install -g web-ext`
* Go to the extension's directory and run `web-ext run` 

# Deployment

* Build & sign the project (you will need Mozilla's API key and password to do that).

        web-ext sign --api-key=${AMO_JWT_ISSUER} --api-secret=${AMO_JWT_SECRET}

* Compute the sha1 sum of the generated xpi file. On MacOS you can run: `shasum <filename>`
* Update the version and computed hash in the `installer.html` file.
