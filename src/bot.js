require("dotenv").config();


const {Client,WebhookClient,MessageAttachment }=require('discord.js')
const client=new Client();

const webhookClient = new WebhookClient(
    process.env.WEBHOOK_ID,
    process.env.WEBHOOK_TOKEN,
  );
client.login(process.env.DISCORD_BOT_TOKEN)

client.on('ready',()=>{
    console.log(`${client.user.username} Hello I'm your self Care reminder Bot`);
})
const Responses = [
    './src/images/download.png',
    './src/images/download.jfif',
    './src/images/download2.jfif',
    './src/images/download3.jfif',
    './src/images/images4.jfif',
    './src/images/images5.jfif',
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
            // var content = msg.join();
            msg.reply(`Hello You have your contest ${contestName} now . Please use this link ${contestLink}`)
         
            // content = content.replaceAll(',', ' ');
            // message.reply(content);
            // console.log('Message sent to ' + message.author.id + ' at ' + Date.now().toString());
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
        const number=Math.floor(Math.random()*7);
        const attachment = new MessageAttachment(Responses[number]);
        // Send the attachment in the message channel
        message.channel.send(attachment);
    }
})