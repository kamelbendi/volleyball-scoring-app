# volleyball-scoring-app

main challenge in this project was figuring out a way to map throught the array of events and create the cards for the event on the scroll bar.

the second one was to keep the scroll box always on the end of the track : 

JQuerry could have been used in the way :

        $('.event-scroller').animate({
            scrollLeft: $('#'+ (events.length-1)).offset().left - $('.event-scroller').offset().left + $('.event-scroller').scrollRight()
           });
           console.log('#'+ (events.length-1));
           
but a much simpler way to do it was with a function called "scrollIntoView()" as in teh following code :

        const element = document.getElementById((events.length-1));
        element.scrollIntoView({block: "end"});
        
----------------------------------------------------------------------------------------------------------------------------------------------------

this project was made in order to practise cloning a specific design and realize the wanted features. 
