const messages = {
    funnyStatements: [
    "Don't forget to put milk in your coffee, it makes it quite divine",
    "SAVE THE SLUGS!",
    "Today you will meet a molerat named sandy, and if your lucky, she might buy you a muffin top",
    "Don't forget to water your plants, they need love too",
    "You must take a break and go outside, the sun is shining and the birds are singing",
    "Don't forget to call your mom, she misses you",
    "Pain is just a mindset",
    "Don't forget to take a shower, you don't want to smell like a sratch-and-sniff card",
    "Careful, there might be something unplesant under your bed...",
    "EAT YOUR BROCCILI!",
    "Floss every night, your dentist is watching",
    "Always be careful when wearing a tie, it's the perfect noose",
    "It's not a bug, it's a beautiful arachnid",
    "It's not polite to stare",
    "Foamed milk is perfect for slurping",
    "Remember, you are a beautiful and unique snowflake... just like everyone else",
    "Don't yell so much, your neighbors might call the cops",
    "Gossip will get you nowhere and it might ruin your reputation, but it sure is fun",
    "Water is a nessary part of your diet, but it tastes better when you put it in your coffee",
    "Hug your dad today, he might need it",
    "Fortunes aren't predictions, they are a product of someone very closly watching",
    "The world is a crazy place, so be sure to tie your shoe laces so you don't trip",
    "Freedom is worth dieing for, but when everyone dies, no ones free",
    "STARING CONTEST! GO! O_O"
    ],
    fortunes:[
    "You will meet a tall, dark, and handsome stranger today",
    "Your kindness will return to you tenfold",
    "A new opportunity will present itself to you soon",
    "You will find a hidden talent within yourself",
    "Your hard work will soon pay off",
    "You will have a pleasant surprise in the near future",
    "A high-five is coming your way, be ready to catch it",
    "The universe hates you, so... good luck I guess",
    "You will have a great day, but only if you wear your lucky socks",
    "You will find a new friend today, but they might be a little weird",
    "Your future is as bright as your smile",
    "You will have a great day, but only if you eat a cookie",
    "You will have a great day, but only if you pet a dog",
    "funny cat videos can will lift your spirits",
    "Dance like no one is watching (fyi everyone is watching)"
    ],
    quotes: [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that. - Martin Luther King Jr.",
    "gushes of laughter are the best medicine - Anonymous",
    "an open mind is a beautiful thing - Anonymous",
    "the only thing we have to fear is fear itself - Franklin D. Roosevelt",
    "the greatest glory in living lies not in never falling, but in rising every time we fall - Nelson Mandela",
    "the way to get started is to quit talking and begin doing - Walt Disney",
    "your time is limited, so don't waste it living someone else's life - Steve Jobs",
    "Trump is a bad president - Anonymous",
    "lol - Anonymous"
    ],
    jokes: [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call fake spaghetti? An impasta!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What do you call a bear with no teeth? A gummy bear!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What do you call a snowman with a six-pack? An abdominal snowman!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "What do you call a fish that wears a crown? A king fish!",
    "Why did the math book look sad? Because it had too many problems.",
    "What do you call a dog that can do magic? A labracadabrador!",
    "Why did the chicken go to the seance? To talk to the other side!",
    "What do you call a cow with no legs? Ground beef!",
    "Why did the cookie go to the doctor? Because it was feeling crumbly!"
    ]
};
const getRandomStatement = () => {
    let randomNum = Math.floor(Math.random() * messages[funnyStatements].length);
    let randomStatement = messages[funnyStatements][randomNum];
    return randomStatement;
}
const getRandomfotunes = () => {
    let randomNum = Math.floor(Math.random() * messages[fortunes].length);
    let randomStatement = messages[fortunes][randomNum];
    return randomStatement;
}
const getRandomQuotes = () => {
    let randomNum = Math.floor(Math.random() * messages[quotes].length);
    let randomStatement = messages[quotes][randomNum];
    return randomStatement;
}
const getRandomJokes = () => {
    let randomNum = Math.floor(Math.random() * messages[jokes].length);
    let randomStatement = messages[jokes][randomNum];
    return randomStatement;
}
const getChosenMessage = (type) => {
    if(type === "funnyStatements"){
        return getRandomStatement();
    } else if(type === "fortunes"){
        return getRandomfotunes();
    }else if(type === "quotes"){
        return getRandomQuotes();
    }else if(type === "jokes"){
        return getRandomJokes();
    } else{
        return "Invalid message type. Please choose from 'funnyStatements', 'fortunes', 'quotes', or 'jokes'.";
    }
}
const getRandomMessage = () => {
    let types = ["funnyStatements", "fortunes", "quotes", "jokes"];
    let randomNum = Math.floor(Math.random() * types.length);
    let randomType = types[randomNum];
    return getChosenMessage(randomType);
}