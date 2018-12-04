$(document).ready(function() {

    online = true;
    infocard = true;
    var oldpuip;
    var oldprip;
    var oldpdnsip;
    var oldpdnsinf;

    setInterval(function time()
                {

        //info updater
        InfoData();
        re();
    }, 1000);

});

function re()
{

    //reload js
    $("#refresh script").each(function(){
        var oldScript = this.getAttribute("src");
        $(this).remove();
        var newScript;
        newScript = document.createElement("script");
        newScript.type = "text/javascript";
        newScript.src = oldScript;
        $(newScript).insertAfter( "#iframe" );
    });
}

function InfoData()
{

    //check if there is a connection to the Internet
    if(!navigator.onLine){
        alert("There is something wrong!");
        online = false;
        InfoOut();
    }else{

        $.getJSON("https://erebos.xyz/api/graphql?query=%7BaMessdaten(Datum%3A%222018-11-29%22)%7BUID%2CTemperatur%2CLuftdruck%2CLuftfeuchtigkeit%2CVOC%2CFEINSTAUBPM100%2CEINSTAUBPM25%2CDatumZeit%7D%7D", function(data) {
            //is online
            online = true;

        }).done(function(json) {
            //public IPs
            //try if it is possible to give the preferred info
            infocard = $('<span class="text-success">').append($('<i class="fa fa-long-arrow-down">').text(json.aMessdaten.UID));
            InfoOut();
            online = true;
        }).fail(function() {
            /*if (oldpuip === undefined){
                //altanativ info
                pipv4s = $("<li>")
                InfoOut();
            }else{
                //some shit is happening
                InfoOut();
            }*/
        }).always(function() {
            //alert( "complete" );
        });
    }

    //local IPs

    //if (lipv4 !== undefined){
    //    lipv4s = $("<li>").append($('<a>').prop('href','/user/messages').text("Your //local IP addresses: " + lipv4));
    //    InfoOut();
    //}

    //IPv6 addresses
    //if (ipv6 !== undefined){
    //    ipv6s = $("<li></li>").text("Your IPv6 addresses: " + lipv4);
    //    $("#ip").append(ipv6s);
    //}

    //DNS
    try {
        jdnsips = $("<li>").addClass("moreinfo").append($('<a>').prop('href','/user/messages').text("Your DNS Ip addresses: " + jdnsip));
        jdnsinfos = $("<li>").addClass("moreinfo").append($('<a>').prop('href','/user/messages').text("Your DNS Host: " + jdnsinfo));
        $(".moreinfo-trigger").show();
        InfoOut();
    }
    catch(err){

        InfoOut();
    }
}

function InfoOut()
{
    //clear ul
    $(".card-category").empty();
    //output
    $(".card-category").append(infocard);
}


/*
$(function () {
    fetch('https://rrrz55p4vn.lp.gql.zone/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({query: "{  Temperatur, Luftdruck, Luftfeuchtigkeit, VOC, FeinstaubPM100, FeinstaubPM25, Timestamp }"})
    }).then(response => response.json()).then(function(data) {
        Temperatur= data.data.Temperatur
        Luftdruck= data.data.Luftdruck
        Luftfeuchtigkeit= data.data.Luftfeuchtigkeit
        VOC= data.data.VOC
        Feinstaub_PM100= data.data.Feinstaub_PM100
        Feinstaub_PM25= data.data.Feinstaub_PM25
        Timestamp= data.data.Timestamp
    });

    alert(Timestamp)
});
*/