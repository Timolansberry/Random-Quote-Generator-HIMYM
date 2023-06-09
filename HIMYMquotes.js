const QUOTES = [
    {
      quote: "Whenever I'm sad, I stop being sad and be awesome instead.",
      author: "Barney Stinson"
    }, {
      quote: "It's just, eventually, we're all gonna move on. It's called growing up.",
      author: "Lily Aldrin"
    }, {
      quote: "The future is scary, but you can't just run back to the past because it's familiar. Yes, it's tempting, but it's a mistake.",
      author: "Robin Scherbatsky"
    }, {
      quote: "That cake. Best cake I ever had. Seriously, my stomach was like, 'Hey bro, I don't know what you're eating cause I don't have any eyes but it's basically awesome, so keep sending it down Gullet Alley.'",
      author: "Marshall Eriksen"
    }, {
      quote: "Everyone has an opinion on how long it takes to recover from a breakup.",
      author: "Ted Mosby"
    }, {
      quote: "I realized that I'm searching, searching for what I really want in life. And you know what? I have absolutely no idea what that is.",
      author: "Barney Stinson"
    }, {
      quote: "Because sometimes even if you know how something's gonna end, that doesn't mean you can't enjoy the ride.",
      author: "Ted Mosby"
    }, {
      quote: "That's life, you know. We never end up where you thought you wanted to be.",
      author: "Marshall Eriksen"
    }, {
      quote: "Oh my god, look at you cowards. So afraid of any kind of change. So terrified of anything new. So, so desperate to cling to anything comfortable and familiar.",
      author: "Robin Scherbatsky"
    }, {
      quote: "A lie is just a great story that someone ruined with the truth.",
      author: "Barney Stinson"
    }, {
      quote: "The three-day rule is a childish, manipulative mind game. But yeah, you wait three days.",
      author: "Lily Aldrin"
    }, {
      quote: "I get recognized one time, and I start thinking I'm Julia Roberts. I'm no VIP; I'm not even an IP; I'm just a lonely little P sitting out here in the gutter.",
      author: "Robin Scherbatsky"
    }, {
      quote: "Every Halloween, I bring a spare costume, in case I strike out with the hottest girl at the party. That way, I have a second chance to make a first impression.",
      author: "Barney Stinson"
    }, {
      quote: "Revenge fantasies never work out the way you want.",
      author: "Marshall Eriksen"
    }, {
      quote: "So really the biggest mistake would be not to make that mistake, because then you'll go your whole life not knowing if something was a mistake or not.",
      author: "Lily Aldrin"
    }, {
      quote: "I finally found the one, Marshall. Her name is Bacon.",
      author: "Ted Mosby"
    }, {
      quote: "The best I can give you is a fake smile and dead eyes.",
      author: "Robin Scherbatsky"
    }, {
      quote: "I realized that I'm searching, searching for what I really want in life. And you know what? I have absolutely no idea what that is.",
      author: "Barney Stinson"
    }, {
      quote: "I've never asked Lily to do anything 'no questions asked' because I never wanted to. She's the love of my life. I never keep anything from her.",
      author: "Marshall Eriksen"
    }, {
      quote: "Your package has always been big enough. You may not realize this, Marshall Eriksen, but you've got a huge package.",
      author: "Lily Aldrin"
    }, {
      quote: "Look, I know the odds are the love of my life isn't going to magically walk through that door in a pumpkin costume at 2:43 in the morning. But it just seems as nice a spot as any to just, you know, sit and wait.",
      author: "Ted Mosby"
    }, {
      quote: "I don't wanna get married right now, maybe ever, and if we got together, I'd feel like I'd either have to marry you or break your heart, and I just couldn't do either of those things. Just like you can't turn off the way you feel.",
      author: "Robin Scherbatsky"
    }, {
      quote: "Somewhere along the line, I forgot to pursue my dream, and now I'm old, and I'm a mom, and it's just too late for me.",
      author: "Lily Aldrin"
    }, {
      quote: "Whether a gesture's charming or alarming depends on how it's received.",
      author: "Ted Mosby"
    }, {
      quote: "Lily, there are a million reasons why I love you. You make me laugh, you take care of me when I'm sick, you're sweet, caring and you even created an egg dish and named it after me. She puts a little Italian dressing on the eggs before she cooks them, it's called Eggs Marshall and it's awesome. But the main reason is you're my best friend, Lily. You're the best friend I've ever had.",
      author: "Marshall Eriksen"
    }, {
      quote: "If I ask you to change too many things about yourself, you're not gonna be the man I fell in love with. Turns out I accept and appreciate even the grossest, creepiest, most sociopathic parts of you.",
      author: "Robin Scherbatsky"
    }, {
      quote: "Maybe this isn't a breakup. Maybe this is just two friends getting back together.",
      author: "Barney Stinson"
    }, {
      quote: "Definitions are important.",
      author: "Lily Aldrin"
    }, {
      quote: "I really don't like feelings.",
      author: "Robin Scherbatsky"
    }, {
      quote: "I'm cuddly. Deal with it.",
      author: "Marshall Eriksen"
    }, {
      quote: "The only reason to wait a month for sex is if she's 17 years, 11 months old.",
      author: "Barney Stinson"
    }, {
      quote: "Shouldn't we hold out for the person who doesn't just tolerate our little quirks, but actually kind of likes them?",
      author: "Ted Mosby"
    }, {
      quote: "We spend an hour arguing about where to eat, and we end up here, anyway. I haven't eaten for two days. Can we please, for the love of God, just order something now?",
      author: "Robin Scherbatsky"
    }, {
      quote: "I'm a good boyfriend in my sleep.",
      author: "Marshall Eriksen"
    }, {
      quote: "Believe it or not, I was not always as awesome as I am today.",
      author: "Barney Stinson"
    }, {
      quote: "Some couples always support each other, and some couples always challenge each other. But is one really better than the other? Yes. Support is better. Way better.",
      author: "Future Ted Mosby"
    }, {
      quote: "In marriage, being right is less important than being supportive. Remember: Happy wife equals happy life.",
      author: "Lily Aldrin"
    }, {
      quote: "I don't know where I'm gonna be in five years. I don't wanna know. I want my life to be an adventure.",
      author: "Robin Scherbatsky"
    }, {
      quote: "You have to let me dance my own battles.",
      author: "Marshall Eriksen"
    }, {
      quote: "I used to be in such a hurry all the time. Everything was so urgent. Now I figure, if it's going to happen, it'll happen when it happens. I'm not going anywhere; she's not going anywhere. What's the rush, right?",
      author: "Ted Mosby"
    }, {
      quote: "You know what Marshall needs to do. He needs to stop being sad. When I get sad, I stop being sad and be awesome instead. True story.",
      author: "Barney Stinson"
    }, {
      quote: "Oprah wasn't built in a day.",
      author: "Lily Aldrin"
    }, {
      quote: "If you keep giving up on people so quickly, you're gonna miss out on something great.",
      author: "Robin Scherbatsky"
    }, 
{
      quote: "You will be shocked, kids, when you discover how easy it is in life to part ways with people forever. That's why, when you find someone you want to keep around, you do something about it.",
      author: "Ted Mosby"
    }, {
      quote: "Death is all around us.",
      author: "Marshall Eriksen"
    }, {
      quote: "When wearing a baseball cap, a Bro may position the brim at either 12 or 6 o'clock. All other angles are reserved for rappers and the handicapped.",
      author: "Barney Stinson"
    }, {
      quote: "The more you fight it, the worse it's gonna get. It's like when your car slides on ice, you stir into the skid.",
      author: "Ted Mosby"
    }, {
      quote: "I just want to say from the bottom of my heart… I'm going to kill you.",
      author: "Robin Scherbatsky"
    }, {
      quote: "You're my best friend. I don't need objectivity. I just need your support.",
      author: "Lily Aldrin"
    }, {
      quote: "I thought I saw Big Foot in the park, so I tackled him.",
      author: "Marshall Eriksen"
    }, {
      quote: "Kids, when you're in a new relationship and you're competing with your ex for who's happier, it can get ugly.",
      author: "Ted Mosby"
    }, {
      quote: "Say goodbye to all the times you felt lost, to all the times it was a No instead of a Yes, to all the scrapes and bruises, to all the heartache.",
      author: "Lily Aldrin"
    }, {
      quote: "That was the night I was born. I rose like a phoenix from her mentholated bosom and strode into the world, Armani-clad and fully awesome.",
      author: "Barney Stinson"
    }, {
      quote: "I never wanted that… Of course, it's one thing not to want something; it's another to be told you can't have it. I guess it's just nice knowing that you could someday do it if you change your mind. But now, all of a sudden, that door is closed.",
      author: "Robin Scherbatsky"
    }, {
      quote: "I'm sorry, when I'm excited I abbreviate words I shouldn't.",
      author: "Ted Mosby"
    }, {
      quote: "All hail Beercules!",
      author: "Marshall Eriksen"
    }, {
      quote: "You're in your 40s and you have a playbook. That's the sad part.",
      author: "Lily Aldrin"
    }, {
      quote: "It's time to let go of the fantasies. It's time to grow up.",
      author: "Barney Stinson"
    }, {
      quote: "Why am I constantly looking for reasons not to be happy?",
      author: "Robin Scherbatsky"
    }, {
      quote: "Dude… where's your suit? Just once, when I say 'suit up', I wish you'd put on a suit.",
      author: "Barney Stinson"
    }, {
      quote: "Happy Slapsgiving!",
      author: "Marshall Eriksen"
    }, {
      quote: "You can't just skip ahead to where you think your life should be.",
      author: "Lily Aldrin"
    }, {
      quote: "If you have chemistry, all you need is one other thing 'timing. But timing's a bitch.",
      author: "Robin Scherbatsky"
    }, {
      quote: "You can ask the universe for signs all you want, but ultimately we'll only see what we want to see… when we're ready to see it.",
      author: "Ted Mosby"
    }, {
      quote: "ARTICLE 41 A Bro never cries. EXCEPTIONS: Watching Field of Dreams, E.T., or a sports legend retire.*",
      author: "Barney Stinson"
    }, {
      quote: "Well, that answers all the questions I didn't ask.",
      author: "Robin Scherbatsky"
    }, {
      quote: "That's love, bitch.",
      author: "Lily Aldrin"
    }, {
      quote: "The great moments of your life won't necessarily be the things you do, they'll also be the things that happen to you.",
      author: "Ted Mosby"
    }, {
      quote: "That's right, I'm a ghost. I died fifteen years ago, kind of like that pickup line.",
      author: "Robin Scherbatsky"
    }, {
      quote: "I've been dreaming of that since I was five. Well, that and my own operational Death Star.",
      author: "Barney Stinson"
    }, {
      quote: "Why say goodbye to the good things?",
      author: "Lily Aldrin"
    }, {
      quote: "Here's the secret kids. None of us can vow to be perfect. In the end, all we can do is promise to love each other with everything we've got. Because love's the best thing we do.",
      author: "Ted Mosby"
    }, {
      quote: "I love being the person you bitch to.",
      author: "Robin Scherbatsky"
    }, {
      quote: "Whatever you do in this life, it's not legendary, unless your friends are there to see it.",
      author: "Barney Stinson"
    }, {
      quote: "I got a two-syllable 'damn' in this dress.",
      author: "Lily Aldrin"
    }, {
      quote: "It's funny, sometimes you walk into a place, you know you're exactly where you're supposed to be.",
      author: "Ted Mosby"
    }, {
      quote: "Nobody asked you, Patrice!",
      author: "Robin Scherbatsky"
    }, {
      quote: "Canada also helped in two world wars and gave the world Neil Young, William Shatner, Leonard Cohen, Pamela Anderson, one-quarter of Barney Stinson, instant mashed potatoes and best of all 'you.",
      author: "Barney Stinson"
    }, {
      quote: "Yeah, I wasn't really listening either. Ted can really go on about a bitch.",
      author: "Lily Aldrin"
    }, {
      quote: "I'm from Minnesota, where there's plenty of hot-dogs for everyone. Perhaps even too many…",
      author: "Marshall Eriksen"
    }, {
      quote: "Here's the thing about mistakes: Sometimes, even when you know something's a mistake, you gotta make it anyway.",
      author: "Ted Mosby"
    }, {
      quote: "Oh, come on, ref! I haven't seen that much hooking go unpunished since my last trip to Vegas.",
      author: "Robin Scherbatsky"
    }, {
      quote: "Your story is so sweet. You didn't even kiss 'til the third date. By our third date, I hit more bases than Bob Hope on a USO tour.",
      author: "Barney Stinson"
    }, {
      quote: "Look, you can't design your life like a building. You just have to live it…and it'll design itself.",
      author: "Lily Aldrin"
    }, {
      quote: "Italy doesn't need something that is wrinkled, red and leaky, and smells like booze and narcotics. They've already got former Prime Minister Silvio Berlusconi.",
      author: "Marshall Eriksen"
    }, {
      quote: "There are two big days in any love story… the day you meet the girl of your dreams… and the day you marry her.",
      author: "Ted Mosby"
    }, {
      quote: "My metabolism is all messed up. See, I can moose down a pint of fudge ripple for a midnight snack and wake up having lost weight. Well, everywhere except for my boobs. So annoying.",
      author: "Robin Scherbatsky"
    }, {
      quote: "Every hookup at a weekend wedding is decided at Friday Night Drinks. Get stuck with the wrong girl tonight, the only action you'll be getting all weekend is a self five, and I don't mean the cool kind. Self-five! That's the cool kind.",
      author: "Barney Stinson"
    }, {
      quote: "The 'no more surprises'-thing is the best part of being married.",
      author: "Lily Aldrin"
    }, {
      quote: "The biggest case of my life and I'd already lost the jury. I mean, I've heard of Twelve Angry Men, but this was more like 'Twelve Horny Women.'",
      author: "Marshall Eriksen"
    }, {
      quote: "If you're not scared, then you're not taking a chance. If you're not taking a chance, then what the hell are you doing anyway?",
      author: "Ted Mosby"
    }, {
      quote: "By 'entertainment' they mean 'table-shuffle-board', macramé classes and other non-stimulating activities which are only used in Manhattan to calm down drug-addicts and the criminally insane.",
      author: "Robin Scherbatsky"
    }, {
      quote: "I'm also pleased to announce The Bro Code is now available in select airlines across the country. And Lufthansa. 'Der Bro Code' is, like, huge in Germany.",
      author: "Barney Stinson"
    }, {
      quote: "Yes, I'm in a rotten mood. No, I don't want to talk about it. Yes, this has booze in it. No, it's not my first.",
      author: "Lily Aldrin"
    }, {
      quote: "One good deed leads to another and another.",
      author: "Marshall Eriksen"
    }, {
      quote: "Love doesn't make sense. I mean, you can't logic your way into or out of it. Love is totally nonsensical, but we have to keep doing it or else we're lost and love is dead and humanity should just pack it in. Because love is the best thing we do.",
      author: "Ted Mosby"
    }, {
      quote: "Destined? Aren't you tired of waiting for destiny, Ted? Isn't it time to make your own destiny?",
      author: "Robin Scherbatsky"
    }, {
      quote: "The Bro Code has been around for centuries. Nay… whatever's more than centuries.",
      author: "Barney Stinson"
    }, {
      quote: "Sometimes we search for one thing, but discover another.",
      author: "Barney Stinson"
    }, {
      quote: "But love doesn't make sense. You can't logic your way into or out of it. Love is totally nonsensical. But we have to keep doing it or else we're lost and love is dead and humanity should just pack it in. Because love is the biggest thing we do.",
      author: "Ted Mosby"
    }, {
      quote: "I know it's a mistake, but there are certain things in life where you know it's a mistake, but you don't really know it's a mistake, because the only way to really know it's a mistake is to make the mistake, and look back and say, 'Yep, that was a mistake.' So, really, the bigger mistake would be to not make the mistake because then you'd go your whole life not really knowing if something is a mistake or not.",
      author: "Lily Aldrin"
    }, {
      quote: "If you're looking for a word that means caring about someone beyond all rationality and wanting them to have everything they want, no matter how much it destroys you, it's 'love.'",
      author: "Ted Mosby"
    }, {
      quote: "It's not about proof; it's about faith. Faith is what gives life shape and meaning.",
      author: "Marshall Eriksen"
    }, {
      quote: "I am Canadian, remember? We celebrate Thanksgiving in October.",
      author: "Robin Scherbatsky"
    }, {
      quote: "Oh right, I forgot. You guys are weird and you pronounce the word 'out', 'oot'.",
      author: "Ted Mosby"
    }, {
      quote: "Look at us, riding around in a limo, eating hot dogs. It's like we're the president.",
      author: "Marshall Eriksen"
    }, {
      quote: "We struggle so hard to hold on to these things that we know are gonna disappear, eventually. And that's really noble.",
      author: "Lily Aldrin"
    }, {
      quote: "It's going to be legen 'wait for it 'and I hope you're not lactose intolerant, because the second half of the word is 'dary! Legendary!",
      author: "Barney Stinson"
    }, {
      quote: "Just like Ryan Gosling in The Notebook. It was pretty manly 'til I mentioned Ryan Gosling in The Notebook, huh?",
      author: "Ted Mosby"
    }, {
      quote: "You can ask the universe for signs all you want, but, ultimately, we'll only see what we want to see. When we're ready to see it.",
      author: "Ted Mosby"
    }, {
      quote: "Nothing good happens after 2 a.m. When 2 a.m. rolls around, just go home and go to sleep.",
      author: "Ted Mosby"
    }, {
      quote: "Sorry, Peter. We're grown-ups now, we can't fly to Neverland with you anymore.",
      author: "Ted Mosby"
    }, {
      quote: "I wound up shame-eating the whole pizza. I woke up all greasy and sweaty. My sheets looked like what they wrap deli sandwiches in. Maybe I should join a gym. Do you go to a gym?",
      author: "Ted Mosby"
    }, {
      quote: "Eight years ago, I made an ass of myself chasing after you, and I made an ass of myself chasing after you a bunch of times since then. I have no regrets because it led me to something I wouldn't trade for the world; it led to you being my friend. So, as your friend and a leading expert in the field of making an ass of yourself, I say to you, from the heart, get the hell out of this car.",
      author: "Ted Mosby"
    }, {
      quote: "OK, here's my thing 'if gay guys start getting married, then suddenly the whole world's gonna be doing it. That's how it works: They start something, then six months later, everyone follows. Like… now everyone gets manicures.",
      author: "Barney Stinson"
    }, {
      quote: "There's three rules of cheating: One 'it's not cheating if you're not the one who's married. Two 'it's not cheating if her name has two adjacent vowels. Three 'and it's not cheating if she's from a different area code.",
      author: "Barney Stinson"
    }, {
      quote: "We're going to get older, whether we like it or not, so the only question is whether we get on with our lives or desperately cling to the past.",
      author: "Ted Mosby"
    }, {
      quote: "This isn't Barney, but I hear that guy's awesome. All right. Listen very carefully. You will get your stuff back if you are able to complete a series of challenges. Number one, put on the suit. Number two, meet me at MacLaren's in an hour.",
      author: "Barney Stinson"
    }, {
      quote: "Shut up! Now listen to me. The clock is ticking. Okay, first thing, we scoop up all these little pieces of tofu and cabbage.",
      author: "Robin Scherbatsk"
    }, {
      quote: "Kids!? No! Don't have kids! The rule is no kids until you're at least 45. Don't you EVER read my blog? It's gotten a lot better.",
      author: "Barney Stinson"
    }, {
      quote: "The never-ending battle of my life. Career vs. romance.",
      author: "Robin Scherbatsky"
    }, {
      quote: "Let's just say there were some senior citizens who attempted to 'drown' on my watch … and sadly one who did.",
      author: "Ted Mosby"
    }, {
      quote: "Why is Ellen DeGeneres in our bedroom?",
      author: "Marshall Eriksen"
    }, {
      quote: "I can't wait to tell the gang. This is one of those moments you dream about! Guys… Lily and I… are having unprotected sex. I just got the chills.",
      author: "Marshall Eriksen"
    }, {
      quote: "You guys bangin'? Keep goin', I'm not even here. But just for the record? Having a baby? Big mistake.",
      author: "Barney Stinson"
    }, {
      quote: "Let's look at the facts here. You made us sit down and listen to this story about how you met Mom, yet Mom's hardly in the story. No. This is a story about how you're totally in love with Aunt Robin. And you're thinking of asking her out, and you want to know if we're okay with it.",
      author: "Penny Mosby"
    }, {
      quote: "She doesn't say 'I love you' like a normal person. Instead, she'll laugh, shake her head, give you a little smile, and say, 'You're an idiot.'",
      author: "Ted Mosby"
    }, {
      quote: "Being in a couple is hard. And committing, making sacrifices it's hard. But if it's the right person, it's easy.",
      author: "Marshall Eriksen"
    }
];