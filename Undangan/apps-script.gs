// Google Sheet > Extensions > Apps Script > tempel kode ini > Deploy > New deployment
// Type: Web app | Execute as: Me | Who has access: Anyone > salin URL /exec ke SCRIPT_URL di index.html
function sheet_(){var ss=SpreadsheetApp.getActive(),sh=ss.getSheetByName('Ucapan');
  if(!sh){sh=ss.insertSheet('Ucapan');sh.appendRow(['Waktu','Nama','Ucapan','Kehadiran'])}return sh}
function doGet(){var r=sheet_().getDataRange().getValues().slice(1).reverse().slice(0,200)
  .map(function(x){return{t:x[0],n:x[1],m:x[2],a:x[3]}});
  return ContentService.createTextOutput(JSON.stringify(r)).setMimeType(ContentService.MimeType.JSON)}
function doPost(e){var d=JSON.parse(e.postData.contents);
  sheet_().appendRow([new Date(),String(d.n).slice(0,80),String(d.m).slice(0,500),String(d.a||'')]);
  return ContentService.createTextOutput('ok')}
