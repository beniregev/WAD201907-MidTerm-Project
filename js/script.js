/* declaring GLOBAL variables */
var myInterval;     //  The value of the interval by which to change the picture in the home page
var picNumber = 0;  //  The picture number currently displayed
var file = [ "images/cube_change_1_goat.jpg", "images/cube_change_2_commerce.jpg", 
            "images/cube_change_3_lavazza.jpg", "images/cube_credit_cards.jpg" ];

/*
    Sets the interval to change the middle 
    picture of the second row of picture. 
    The interval is given in milliseconds, 
    e.g. 3000 equals to 3 seconds.
    Called from page onLoad event.
 */
function setChangePictureInterval() {
    myInterval = setInterval(changePic, 3000);
}

/*
    Changes the middle picture of the second 
    row of picture by an interval sets 
    When we will learn about arrays and how 
    to use them in JavaScript I will use an 
    array to hold the pictures names and 
    the next picture to display will be the 
    one in picturesArray[picNumber] AFTER 
    advancing pictureNumber.
 */
function changePicture() {
    if (picNumber < files.length-1) {
        picNumber ++;
    } else {
        picNumber = 0;
    }
    document.getElementById("change").src = file[picNumber];
}