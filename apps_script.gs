
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Rekod Kehadiran");
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.name,
    data.position,
    data.lat,
    data.lng,
    data.timestamp
  ]);

  return ContentService.createTextOutput("Data direkodkan").setMimeType(ContentService.MimeType.TEXT);
}
