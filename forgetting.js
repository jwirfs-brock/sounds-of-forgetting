
mySounds = [ 'bongos-1', 'bongos-2', 'bongos-3', 'bongos-4', 'bongos-5', 'crow-1', 'crow-2', 'cuckoo-1', 'cuckoo-2', 'cuckoo-3', 'cuckoo-4', 'cuckoo-5', 'draining-1', 'draining-2', 'draining-3', 'ghost-1', 'glass-1', 'mosquito-1', 'mosquito-2', 'mosquito-3', 'mosquito-4', 'mosquito-5', 'shuffling-1', 'sneeze-1', 'sonar-1', 'sonar-2', 'sonar-3', 'toggling-1', 'toggling-2', 'toggling-3']

var randomStrings = [
        '#9: Forgot to email Amanda about the INFO open house, then was reminded, then finally did it.',
        "#4: While driving, I realized that when I had been informally composing a to-do list for today in my head, I forgot about CHI reviews -- then when I remembered that I had to do them I had a slight freak out about my work load.",
        "#15: Forgot that the CMCI one college seminar is today -- but it's ok, I should still be able to make it.",
        "#28: Forgot that I was supposed to proof the flyer thingy for Jed (and then was reminded, but then still haven't done it yet).",
        "#16: Forgot that I needed to update INFO research flyer, then remembered and actually did it.",
        '#5: CU rec center, going out on a run, made it out of the locker room before I realized I forgot my BuffOne card. Caught it quick and went back for it.',
        '#8: Forgot to grab my computer for meeting with Brian, then went back to get it, remembered just in time to not be late.',
        "#13: Forgot the name of a former journalism professor, and it's evading me a day later, even though I can picture him perfectly!",
        "#20: Forgot whether I was the one who paid the home and car insurance bill last year (when prompted by Ben).",
        "#10: Forgot details of how I replaced my windshield wipers last time (in Silverthorne maybe?), but Ben remembered.",
        "#19: Forgot name of person who wrote the 'Death by GPS' paper -- in fact even forgot the title and mis-Googled for 'Death by Google Maps,' had to muddle around irrelevant search results for a while.",
        "#24: Forgot name of New Order song, 'Temptation' while running -- after just a few minutes it came back to me.",
        "#30: Forgot to take a picture of the apple tart I made before we ate it.",
        "#12: Forgot to tell Ben I'd be coming home a little late, and so he didn't know whether to wait to eat dinner.",
        "#29: Forgot to brush teeth this a.m.!",
        '#26: Briefly forgot whether Rex was still outside or if I had let him back inside.',
        '#18: Forgot to put windshield wiper fluid in my car and had to drive around with a dirty window.',
        '#25: Forgot to write down my forgettances.',
        "#9: Feel like there was one more thing I was supposed to write down that I forgot, but can't remember what it is.",
        "#6: Forgot what I was going to write down...oh now I remember!",
        "#17: Feel like there's something  else I forgot but can't remember.",
        "#27: Was going to add something to my shopping list, but can't remember what it was.",
        '#11: Forgot that I had already added hangers to the shopping list, until Alexa reminded me.',
        '#2: Danielle finally sent us the rubrics for grading, and said she forgot to do it earlier.',
        '#1: Forgot that my burrito was in the microwave at the office -- but also was just kind of momentarily distracted.',
        '#3: Realized that one of the coffee mugs in the sink at work is probably mine (from last week), so I washed it.',
        '#14: Forgot that last night I put my keys in a super logical place (my work bag), then spent time in the morning looking in less logical places for them.',
        '#21: Remembered that I had been meaning to add items to a playlist for my friend Kayanna, but forgot to do it.',
        "#22: Realized I had been thinking of that Modest Mouse song about 'remembering to forget you' so that I could send to Mikhaila, but haven't done it yet.",
        "#23: Forgot to take my iron pills (for like 2 days now...), because when I do remember I'm usually drinking coffee, which reduces absorption."
    ];

function randomSound() {
  var randomDiv = document.getElementById("myRandomDiv");
  $.stopSound();
    var index = Math.floor(Math.random() * 1000) % mySounds.length;
    $.playSound('sounds/' + mySounds[index] + '.wav');
    newText = randomStrings[index];
    randomDiv.innerHTML = newText;
}
