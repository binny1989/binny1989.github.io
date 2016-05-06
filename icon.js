function show_image(src, width, height, alt) {
        var div = document.getElementByID('adcontainer');
        var img = document.createElement("img");
        img.src = "https://placeholdit.imgix.net/~text?txtsize=5&txt=96%C3%9715&w=96&h=15&txtpad=1";
        img.width = width;
        img.height = height;
        img.alt = alt;
        document.div.appendChild(img);
    }
     show_image("https://placeholdit.imgix.net/~text?txtsize=5&txt=96%C3%9715&w=96&h=15&txtpad=1", 100,50, "Google Logo");