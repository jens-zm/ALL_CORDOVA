    function makeApiCall() {
      var params = {
        // ID Spreadsheet
        spreadsheetId: '1HmwCzFLhcnlExi5If7N57WDCUCvgMHZGDMznGhSoK8k',

        ranges: ['Januari!A1:B37'],
        majorDimension : 'ROWS',

        // Menetuak Range
        includeGridData: true,  // TODO: Update placeholder value.
      };

      var request = gapi.client.sheets.spreadsheets.values.batchGet(params);
      request.then(function(response) {
        // TODO: Change code below to process the `response` object:
        const hasil = response.result;
        const tabel = hasil.valueRanges[0].values;
        
        tampilData();
         function tampilData(){
          body = document.getElementById('body-tabel');
          var i = 1;
          while (i <tabel.length) {
            tr = document.createElement('tr');
            td1 = document.createElement('td');
            td1.innerHTML= tabel[i][0];
            td2 = document.createElement('td');
            td2.innerHTML = tabel[i][1];
            tr.appendChild(td1);
            tr.appendChild(td2);
            body.appendChild(tr);
            i++
          }
           
         }




      }, function(reason) {
        console.error('error: ' + reason.result.error.message);
      });
    }