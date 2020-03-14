jQuery(document).ready(function () {
    var w = screen.width;
    if (w >= '1440') {
        $('#video_1').append('<source src="./plagin/examples/video/clip.mp4" type="video/mp4">'); // в блок с ID video_1 добавляем код вставки видео
    } else if (w >= '1024' && w < '1439') {
        $('#video_1').append('<source src="./plagin/examples/video/clip2.mp4" type="video/mp4">'); // Другое видео  
    } else if (w >= '768' && w < '1023') {
        $('#video_1').append('<source src="./plagin/examples/video/clip3.mp4" type="video/mp4">'); // Другое видео
    } else if (w < '767') {
        $('#video_1').append('<source src="./plagin/examples/video/ocean.mp4" type="video/mp4">'); // Другое видео
    }
});