var ctx = document.getElementById('ctx').getContext('2d');
var properties = document.getElementById('ctx');
properties.setAttribute('width', '800');
properties.setAttribute('height', '600');

var draw = {
    text: function (text, color, font, x, y, alpha) {
        ctx.fillStyle = color;
        ctx.font = font;
        ctx.globalAlpha = alpha;

        ctx.fillText(text, x, y);
    },

    gradientText: function (text, font, x, y, alpha) {
        var gradient = ctx.createLinearGradient(0,0,properties.width,0);
        ctx.font = font;
        gradient.addColorStop(0, 'crimson');
        gradient.addColorStop(0.25, 'violet');
        gradient.addColorStop(0.75, 'red');
        ctx.globalAlpha = alpha;

        ctx.fillStyle = gradient;
        ctx.fillText(text, x, y);
    },

    rect: function (color, x, y, w, h, alpha) {
        ctx.fillStyle = color;
        ctx.globalAlpha = alpha;

        ctx.fillRect(x, y, w, h);
    },

    arc: function (x1, y1, radius, startAngle, alpha) {
        ctx.globalAlpha = alpha;

        ctx.beginPath();
        ctx.arc(x1,y1,radius,startAngle,2*Math.PI);
        ctx.stroke();
    },

}

function mainThread() {
    draw.rect('#696969', 50, 50, 700, 500); //backdrop
    draw.rect('black', 50, 95, 700, 2.5); //top line bar
    draw.rect('black', 125, 95, 2.5, 455); //left line bar
    draw.rect('black', 65, 51, 65, 35); //outline for file manager
    draw.rect('black', 675, 50, 65, 35); //outline for exit button
    draw.rect('black', 609, 50, 65, 35); //outline for max button
    draw.rect('black', 543, 50, 65, 35); //outline for min button
    draw.rect('crimson', 676, 51, 63, 33); //color for exit button
    draw.rect('lightgrey', 610, 51, 63, 33); //color for max button
    draw.rect('black', 635, 62, 12, 10); //box for min
    draw.rect('lightgrey', 638, 64.5, 6, 5); //box for min
    draw.rect('lightgrey', 544, 51, 63, 33); //color for min button
    draw.rect('lightgrey', 66, 52, 63, 33); //color for file manager
    draw.text('File', 'black', '15px Arial', 85, 75, 1);
    draw.text('X', 'black', '15px Arial', 702.5, 74, 1);
    draw.text('-', 'black', '40px Arial', 569, 78, 1);
}

mainThread();