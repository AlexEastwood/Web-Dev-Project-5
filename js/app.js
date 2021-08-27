const dict = {
    1: "A yellow wheat field under a blue sky",
    2: "A misty landscape of snowtopped hills overlooking a grey lake",
    3: "A deep green forest with a cloudy sky and distant mountains",
    4: "An arctic view with blue icebergs and snow covered mountains",
    5: "A huge canyon with red and yellow rocks and sparse vegitation",
    6: "Various plants with leafy hues including yellow, green and red",
    7: "Bright green rainforest clearing with an overcast sky",
    8: "A sandy beach with pockets of green grass and a blue sky",
    9: "A lonely path through overarching trees, lined with flowers",
    10: "A rocky seaside with a small beach and dark tunnel at sunset",
    11: "A cave view overlooking vibrant green forests and cliffs with a muddy brown river",
    12: "Expansive moorland with purple flowers, snowtopped mountains and a cloudy sky"
};

for (i=1; i <= 12; i++) {
    let a_tag = document.createElement("a");
    if (i < 10) {
        a_tag.href = `photo_gallery_v5/photo_gallery_v5/photos/0${i}.jpg`;
    } else {
        a_tag.href = `photo_gallery_v5/photo_gallery_v5/photos/${i}.jpg`;
    }
    a_tag.setAttribute("data-caption", dict[i])

    let img_tag = document.createElement("img");
    if (i < 10) {
        img_tag.src = `photo_gallery_v5/photo_gallery_v5/photos/thumbnails/0${i}.jpg`;
    } else {
        img_tag.src = `photo_gallery_v5/photo_gallery_v5/photos/thumbnails/${i}.jpg`;
    }
    img_tag.alt = dict[i]

    const node = document.getElementById("gallery");
    node.appendChild(a_tag);
    a_tag.appendChild(img_tag);
}

window.addEventListener('load', function() {
    baguetteBox.run('.gallery');
  });
const search = new Filter('search', 'data-caption');