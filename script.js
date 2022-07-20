$(document).ready( function(){
    alert("Welcome to our website! We hope you enjoy looking into all the different areas about becoming a nurse!")

    $("#first").hover (function(){
        $(this).attr("src", "https://res.cloudinary.com/crystalvictini/image/upload/v1656648173/WEB-140%20Final%20Project/First%20Column.jpg");
    },
    function(){
        $(this).attr("src", "https://apod.nasa.gov/apod/image/2110/LucyLaunchB_Kraus_2048.jpg");
    });

    $("#second").hover (function(){
        $(this).attr("src", "https://res.cloudinary.com/crystalvictini/image/upload/v1656648181/WEB-140%20Final%20Project/Second%20Column.jpg");
    },
    function(){
        $(this).attr("src", "https://apod.nasa.gov/apod/image/2110/LucyLaunchB_Kraus_2048.jpg");
    });

    $("#third").hover (function(){
        $(this).attr("src", "https://res.cloudinary.com/crystalvictini/image/upload/v1656648177/WEB-140%20Final%20Project/Third%20Column.jpg");
    },
    function(){
        $(this).attr("src", "https://apod.nasa.gov/apod/image/2110/LucyLaunchB_Kraus_2048.jpg");
    });

    $("#fourth").hover (function(){
        $(this).attr("src", "https://res.cloudinary.com/crystalvictini/image/upload/v1657596909/WEB-140%20Final%20Project/Column%204.jpg");
    },
    function(){
        $(this).attr("src", "https://apod.nasa.gov/apod/image/2110/LucyLaunchB_Kraus_2048.jpg");
    });
    
    $("#fifth").hover (function(){
        $(this).attr("src", "https://res.cloudinary.com/crystalvictini/image/upload/v1657596979/WEB-140%20Final%20Project/Column%205.png");
    },
    function(){
        $(this).attr("src", "https://apod.nasa.gov/apod/image/2110/LucyLaunchB_Kraus_2048.jpg");
    });

    $("#bigg").click( function(){
        $(".1st").css({"font-size": "1.5rem"});
        $(".2nd").css({"font-size": "1.5rem"});
        $(".3rd").css({"font-size": "1.5rem"});
        $(".4th").css({"font-size": "1.5rem"});
        $(".5th").css({"font-size": "1.5rem"});
    });

    $("#smol").click( function(){
        $(".1st").css({"font-size": "0.8rem"});
        $(".2nd").css({"font-size": "0.8rem"});
        $(".3rd").css({"font-size": "0.8rem"});
        $(".4th").css({"font-size": "0.8rem"});
        $(".5th").css({"font-size": "0.8rem"});
    });

    $("#meh").click( function(){
        $(".1st").css({"font-size": "1.1rem"});
        $(".2nd").css({"font-size": "1.1rem"});
        $(".3rd").css({"font-size": "1.1rem"});
        $(".4th").css({"font-size": "1.1rem"});
        $(".5th").css({"font-size": "1.1rem"});
    });

    $("#invertion").on("click", function(){
        if($(this).is(":checked")){
            $("html").css("background", "#fff5fa");
            $("body").css("background", "#fff5fa");
            $("header").css({"background":"#eecde9", "color":"#74b1d8"});
            $(".1st").css("color", "#74b1d8");
            $(".2nd").css("color", "#74b1d8");
            $(".3rd").css("color", "#74b1d8");
            $(".4th").css("color", "#74b1d8");
            $(".5th").css("color", "#74b1d8");
            $(".col").css("background", "#eecde9");
            $(".col-4").css("background", "#eecde9");
            $("footer").css("background", "#eecde9");
        }
        else{
            $("html").css("background", "lightskyblue");
            $("body").css("background", "lightskyblue");
            $("header").css({"background":"#74b1d8", "color":"#fff5fa" });
            $(".1st").css("color", "#fff5fa");
            $(".2nd").css("color", "#fff5fa");
            $(".3rd").css("color", "#fff5fa");
            $(".4th").css("color", "#fff5fa");
            $(".5th").css("color", "#fff5fa");
            $(".col").css("background", "#74b1d8");
            $(".col-4").css("background", "#74b1d8");
            $("footer").css("background", "#74b1d8");
        }
    })
})