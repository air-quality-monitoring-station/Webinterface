        $(function(){
            $('.graphql-test').on('click', function(e){

                fetch('https://rrrz55p4vn.lp.gql.zone/graphql', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    body: JSON.stringify({query: "{  Temperatur, Luftdruck, Luftfeuchtigkeit, VOC, Feinstaub_PM100, Feinstaub_PM25, Timestamp }"})
                }).then(r => r.json()).then(function(data) {
                    Temperatur= data.data.Temperatur
                    Luftdruck= data.data.Luftdruck
                    Luftfeuchtigkeit= data.data.Luftfeuchtigkeit
                    VOC= data.data.VOC
                    Feinstaub_PM100= data.data.Feinstaub_PM100
                    Feinstaub_PM25= data.data.Feinstaub_PM25
                    Timestamp= data.data.Timestamp
                });
            
                alert(Timestamp)
            })
        });