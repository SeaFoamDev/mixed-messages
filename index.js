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
    fortunes: [
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
        "Believe you can and you're halfway there. - Theodore Roosevelt"
    ],
    jokes: [
        "Why don't scientists trust atoms? Because they make up everything!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "Why don't skeletons fight each other? They don't have the guts."
    ]
};

let messageLog = {
    funnyStatements: [],
    fortunes: [],
    quotes: [],
    jokes: []
};

const getMessage = {
    getStatement() {
        const randomNum = Math.floor(Math.random() * messages.funnyStatements.length);
        return messages.funnyStatements[randomNum];
    },

    getFortune() {
        const randomNum = Math.floor(Math.random() * messages.fortunes.length);
        return messages.fortunes[randomNum];
    },

    getQuote() {
        const randomNum = Math.floor(Math.random() * messages.quotes.length);
        return messages.quotes[randomNum];
    },

    getJoke() {
        const randomNum = Math.floor(Math.random() * messages.jokes.length);
        return messages.jokes[randomNum];
    },

    getChosenMessage(type) {
        let item;

        if (type === "funnyStatements") {
            item = this.getStatement();
        } else if (type === "fortunes") {
            item = this.getFortune();
        } else if (type === "quotes") {
            item = this.getQuote();
        } else if (type === "jokes") {
            item = this.getJoke();
        } else {
            return "Invalid message type.";
        }

        messageLog[type].push(item);

        if (messageLog[type].length < messages[type].length) {
            return item;
        } else {
            return `You've seen all ${type}! Here's a repeat: ${item}`;
        }
    },

    getRandomMessage() {
        const types = ["funnyStatements", "fortunes", "quotes", "jokes"];
        const randomType = types[Math.floor(Math.random() * types.length)];
        return this.getChosenMessage(randomType);
    }
};

console.log(getMessage.getRandomMessage());