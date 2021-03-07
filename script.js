let quotes=[
    {
        "quote":"success is most often achieved by those who dont know that failure is inevitable.",
        "author":"coco chanel"
    },

    {
        "quote":"things work out best for those who make the best of how things work out.",
        "author":"john wooden"
    },


    {
        "quote":"courage is grace under pressure.",
        "author":"Ernest Hemingway"
    },

    {
        "quote":"if you are not willing to  risk the usual, you will have to settle for the ordinary.",
        "author":"Jim Rohn"
    },

    {
        "quote":"It does not matter how slowly you go, so long as you do not stop.",
        "author":"confucious"
    }
]

const $btn = $('#btn');

$btn.click(function(){

    let number = Math.floor(Math.random()*quotes.length);
    $('#quote').html('<span>"</span>' + quotes[number].quote + '<span>"</span>');
    $('#author').html('<span>--</span>' + quotes[number].author );
});