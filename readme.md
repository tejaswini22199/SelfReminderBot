### Discord Reminder

Features:
 * If you are participating in a hackathon or if you have any contest. It is likely that you forget after you register and sometimes you may miss it also. You make a Todo List but you dont see it . But due to pandamic we spend so much time in discord to chat with others or participating in anu competition. So I thought of building a discord bot, Which will remind you about your contests, hackathons, to take rest, to drink water, to have lunch and dinner. Other features include

 Technology Stack used:
 * Discord.js
 * CockroachdB data base
 

## Inspiration
If you are participating in a hackathon or if you have any contest or if you forgot to take tablets on time. It is likely that you forget after you register and sometimes you may miss it also. You make a Todo List but you don't see it . But due to pandemic we spend so much time in discord to chat with others or participating in any competition. So I thought of building a discord bot, Which will remind you about your contests, hackathons, to take rest, to drink water. It will also give some fun Facts , Yoga Postures, Financial description of companies and a fun game when you get bored.

## What it does
Whenever user uses this bot in their server, you need to mention the bot about your contest/hackathon by using following command $remindContest. Also you need to add some arguments like $remindContest Contestname ContestLink ContestTime. It will remind you at that time. It will automatically send you message in the timestamp difference of 1 hour to drink water. It has some other features like giving fun task, game(memory game),Financial data of company you mention,etc.

## How we built it
Using discord.js which is a powerful library containing many functions. Data like all tasks are stored in cockroach db database , a powerful distributed Data base. Used webhooks, apis for rendering financial data in discord. I created a sample html page so that users won't confuse with commands they can easily access commands from the webpage.

## Challenges we ran into
As it is first time using discord.js and cockroachdb . I read the documentation of both and watched few videos. I was unable to connect to cockroach db using application, later I figure it out and installed Dbeaver. And Used sequelize to connect to the database and push the data of tasks and financial data from alphavantage api.

## Accomplishments that we're proud of
I'm proud that I learned two tech stacks within less time and Able to build all the features I thought and able to send data to database and query it. Also made a small webpage for users to understand.

## What we learned
Learned so much about Java Script(event handling,asynchronus etc) and CockroachdB ((why coakraoch db is special and superior over our traditional data bases as well as noSQL data bases, as it is consistent and reliable since there are nodes which handle failures). And learned how to host on firebase too. discordjs methods and data structures used there.

## What's next for SelfReminderBot
I want people to use this, so I'll add some more functionality to keep track of people tasks and tell them their analysis.

## Built With
alphavantageapi
cockroachdb
css3
dbeaver
discordjs
fetchapi
firebase
googlecloudapi
html5
javascript
webhooks
