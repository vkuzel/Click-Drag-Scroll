# Click Drag Scroll

A Firefox WebExtension that allows you to scroll a page by dragging it. Click the left mouse button inside a page, hold it, move it up and down, it will scroll. 

Useful for touch-screen kiosks.

* Plugin scrolls only up and down.
* Mouse down event is consumed except over the input fields. Sou you will be able to focus a field but you won't be able to select text. This means if your page implements some kind of drag & drop functionality it won't work. 
* Mouse up event is consumed if mouse has moved significantly. See plugin's options.
* Mouse click event is consumed if mouse has moved significantly.

# Installation

You can install it into your browser from the file [`web-ext-artifacts/click_drag_scroll-1.0-an+fx.xpi`].
