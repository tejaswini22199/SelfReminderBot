require("dotenv").config();
const querystring = require('querystring');
// const Sequelize = require("sequelize-cockroachdb");
const fs = require("fs");
const {Client,WebhookClient,MessageAttachment ,MessageEmbed,trim}=require('discord.js')
const client=new Client();
const fetch = require('node-fetch');
const webhookClient = new WebhookClient(
    process.env.WEBHOOK_ID,
    process.env.WEBHOOK_TOKEN,
  );
const url=`https://discordapp.com/api/webhooks/${process.env.WEBHOOK_ID}/${process.env.WEBHOOK_TOKEN}`;
client.login(process.env.DISCORD_BOT_TOKEN)
const gamemsg="White House Lilly Super Women Doremon";
client.on('ready',()=>{
    console.log(`${client.user.username} Hello I'm your self Care reminder Bot`);
})
const Responses = [
    './src/images/download.png',
  
    './src/images/images6.png',
    './src/images/images7.png',
];
const listofTasks={

}

;
const tasks=["water your plants","Go call your old friend and talk to them","Create a drawing of your best friend","Watch Your favourite series","Dance your heart out","sing a song"];
client.on('message', async (message)=>{
    //  console.log(message.content);
    if(message.content==='Hello'){
    message.reply(`Hello ${message.author.tag}`);
    message.reply(`Hi ${message.author.tag} These are list of commands that you can use 1.remindContest Contestname ContestLink ContestTime\n 2.funTask \n 3.`)
    }
    if(message.content.startsWith('remindContest')){
        // if( listofTasks[message.author.id]===undefined)
        // listofTasks[message.author.id]=new Array([message.content]);
        // else
        // listofTasks[message.author.id].push(message.content);
        console.log(message.author.id);
        console.log(listofTasks[message.author.id]);
        if( listofTasks[message.author.id]===undefined)
         listofTasks[message.author.id]=new Array(message.content);
         else
        listofTasks[message.author.id].push(message.content);
        var msg,contestName,contestLink,timeDiff,currentHours,currentMinutes,currentSeconds,startTimeHours,startTimeMinutes,StartTimeSeconds; 
        msg=message;
        message=message.content.split(' ');
        currentHours=new Date().getHours();
        currentMinutes=new Date().getMinutes();
        currentSeconds=new Date().getSeconds();
        startTimeHours=message[3][0]+message[3][1];
        startTimeMinutes=message[3][3]+message[3][4];
        StartTimeSeconds=message[3][6]+message[3][7];
        contestName=message[1];
        contestLink=message[2];
        timeDiff=(startTimeHours- currentHours)*60*60+(startTimeMinutes-currentMinutes)*60+(StartTimeSeconds-currentSeconds);
        console.log(timeDiff);
        client.setTimeout(function () {
    
            msg.reply(`Hello You have your contest ${contestName} now . Please use this link ${contestLink}`)
         
            
        }, timeDiff*1000);
    }
    else if(message.content.startsWith('funTask')){
        const number=Math.floor(Math.random()*6);
        message.reply(`${tasks[number]}`);
    }
    else if(message.content.startsWith('list')){
        console.log("hi");
        message.reply(listofTasks[message.author.id][0]);
      for(var i=0;i<listofTasks[message.author.id];i++)
      {
          message.reply(listofTasks[message.author.id][i]);
      }
    }
    else if(message.content.startsWith('Yoga')){
        const number=Math.floor(Math.random()*3);
        const attachment = new MessageAttachment(Responses[number]);
        // Send the attachment in the message channel
        message.channel.send(attachment);
    }
    else if(message.content.startsWith('Game')){
  
        message.reply("White House Lilly Super Women Doremon")
  .then(msg => msg.delete({timeout:2000}))
  .catch(console.error);
 
  
    }
    else if(message.content.startsWith('Show Instructions')){
        const msg = {
            "content": "To remind you , For any Contest: The command is: remindContest `Contestname` `ContestLink` `ContestTime`\n To get Any Fun task: The command is: `Funtask`  \n List of all your reminders: `List` \nList a Random Yoga Posture: `Yoga` \nGet Financial data about a company: `FinanceCompanyname` \nIt displays doubts of yours (data collected form urban dictionary):doubts `WORD` \nPlay Memory Game: `Game`"
        }
        
        fetch(url + "?wait=true", 
        {"method":"POST", 
        "headers": {"content-type": "application/json"},
        "body": JSON.stringify(msg)})
        .then(a=> a.json()).then(console.log)
    }
    else if(message.content.startsWith('doubts')){
        const msg=message.content.substring(6);
      
	 
        // const args = msg.content.slice().trim().split(/ +/);
        const query = querystring.stringify({ term: msg});
  const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());
  if (!list.length) {
	return message.channel.send(`No results found for **${args.join(' ')}**.`);
}
else
return   message.channel.send(list[0].definition);
    }
    else if(message.content.startsWith('finance')){
         const name=message.content.substr(7);
        const url=  `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${name}&apikey=${process.env.Financial_Key}`;
        var list;
        fetch(url + "?wait=true")
        .then(a=> a.json()).then(a=>
            {
                JSON.stringify(a);
                const embed = new MessageEmbed()
                .setColor('#EFFF00')
                .setTitle(a["Symbol"])
                .addFields(
                    { name: 'AssetType', value: a["AssetType"]},
                    { name: 'Name', value: a["Name"] },
                    { name: 'Description', value: a["Description"].substr(0,1024)},
                    { name:'Sector',value:a["Sector"]  }
                );
                
              
                  
    message.channel.send(embed);
            });
        
    }
    else if(message.content.startsWith('Answer')){
        if(message.content.substr(6)===gamemsg)
        message.reply('You won');
        else
        message.reply('Better Luck Next Time');
    }
}
)



  