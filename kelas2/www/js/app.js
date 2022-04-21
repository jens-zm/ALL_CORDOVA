const {google} = require('googleapis');
const keys = require('../../kel2b-71232d1ee6b8.json');

const client = new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
);

client.authorize(function(err, token){

    if(err){
        console.log(err);
        return;
        
    } else{
        console.log('Terkoneksi');
        gsrun(client);
    }

});

async function gsrun(cl){
    const gsapi = google.sheets({version: "v4", auth: cl});
    const opt = {
        spreadsheetId : '14DHEPs0HRv85UcFk8yP57ct80O7y8Sop9k2TvgTG8QU',
        range: 'jan!A1:B5'
    }

    let data = await gsapi.spreadsheets.values.get(opt); 
    console.log(data.data.values);
}