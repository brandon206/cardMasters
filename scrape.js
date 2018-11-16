const request = require('request');
const cheerio = require('cheerio');
// const fs = require('fs');
// const writeStream = fs.createWriteStream('post.csv');

// Write Headers
// writeStream.write(`Event\n`);

request('https://www.yugioh-card.com/en/events/regionals_locations.html',(error,response,html) => {
    if(!error && response.statusCode === 200){
        const $ = cheerio.load(html);
        let array = [];

        //event venue
        const eventVenue = $('#colfull_main > table > tbody > tr:not(.locationtable_10pt_title) > td:nth-child(1)');
        const venueArr = [];
        eventVenue.each((index,val) => {
            const item = $(val).text();
            venueArr.push(item);
        });
        // console.log(venueArr);
        array.push(venueArr);
        
        //event host
        const eventHost = $('#colfull_main > table > tbody > tr:not(.locationtable_10pt_title) > td:nth-child(2)');
        const hostArr = [];
        eventHost.each((index,val) => {
            const item = $(val).text();
            hostArr.push(item);
        });
        // console.log(hostArr);
        array.push(hostArr);

        //event address
        const eventAddress = $('#colfull_main > table > tbody > tr:not(.locationtable_10pt_title) > td:nth-child(3)');
        const addressArr = [];
        eventAddress.each((index,val) => {
            const item = $(val).text();
            addressArr.push(item);
        });
        // console.log(hostArr);
        array.push(addressArr);

        //event city
        const eventCity = $('#colfull_main > table > tbody > tr:not(.locationtable_10pt_title) > td:nth-child(4)');
        const cityArr = [];
        eventCity.each((index,val) => {
            const item = $(val).text();
            cityArr.push(item);
        });
        // console.log(hostArr);
        array.push(cityArr);

        //event State
        const eventState = $('#colfull_main > table > tbody > tr:not(.locationtable_10pt_title) > td:nth-child(5)');
        const stateArr = [];
        eventState.each((index,val) => {
            const item = $(val).text();
            stateArr.push(item);
        });
        // console.log(hostArr);
        array.push(stateArr);

        //event zip
        const eventZip = $('#colfull_main > table > tbody > tr:not(.locationtable_10pt_title) > td:nth-child(6)');
        const zipArr = [];
        eventZip.each((index,val) => {
            const item = $(val).text();
            zipArr.push(item);
        });
        // console.log(hostArr);
        array.push(zipArr);

        //event Attendance
        const eventAttendanceCap = $('#colfull_main > table > tbody > tr:not(.locationtable_10pt_title) > td:nth-child(7)');
        const attendanceArr = [];
        eventAttendanceCap.each((index,val) => {
            const item = $(val).text();
            attendanceArr.push(item);
        });
        // console.log(hostArr);
        array.push(attendanceArr);

        //event Contact
        const eventContact = $('#colfull_main > table > tbody > tr:not(.locationtable_10pt_title) > td:nth-child(8)');
        const contactArr = [];
        eventContact.each((index,val) => {
            const item = $(val).text();
            contactArr.push(item);
        });
        // console.log(hostArr);
        array.push(contactArr);

        //event Date
        const eventDate = $('#colfull_main > table > tbody > tr:not(.locationtable_10pt_title) > td:nth-child(9)');
        const dateArr = [];
        eventDate.each((index,val) => {
            const item = $(val).text();
            dateArr.push(item);
        });
        // console.log(hostArr);
        array.push(dateArr);

        //event Time
        const eventTime = $('#colfull_main > table > tbody > tr:not(.locationtable_10pt_title) > td:nth-child(10)');
        const timeArr = [];
        eventTime.each((index,val) => {
            const item = $(val).text();
            timeArr.push(item);
        });
        // console.log(hostArr);
        array.push(timeArr);

        //event DragonDuel
        const eventDragonDuel = $('#colfull_main > table > tbody > tr:not(.locationtable_10pt_title) > td:nth-child(11)');
        const dragonDuelArr = [];
        eventDragonDuel.each((index,val) => {
            const item = $(val).text();
            dragonDuelArr.push(item);
        });
        // console.log(hostArr);
        array.push(dragonDuelArr);

        console.log(array);
        // Write Row to CSV
        // writeStream.write(`${eventVenue.text()}`)
    }
});