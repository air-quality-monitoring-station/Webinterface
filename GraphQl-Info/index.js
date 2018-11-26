$('button').click(function() {
    event.preventDefault();
    var entry = $('#entry').val()
    console.log(entry);


    $.ajax({
        method: "POST",
        url: "https://rrrz55p4vn.lp.gql.zone/graphql",
        contentType: "application/json",
        data: JSON.stringify({
            query: `query ($entry: String!) {repository(name: $entry, )
{ pullRequests(last: 100) {
Temperatur, Luftdruck, Luftfeuchtigkeit, VOC, Feinstaub_PM100, Feinstaub_PM25, Timestamp
}`,
            variables: {
                "entry": $('#entry').val()
            }
        })
    })