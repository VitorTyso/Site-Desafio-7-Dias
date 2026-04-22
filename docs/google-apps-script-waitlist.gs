function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents);
    var expectedSecret = PropertiesService.getScriptProperties().getProperty("WAITLIST_WEBHOOK_SECRET");

    if (!expectedSecret || payload.secret !== expectedSecret) {
      return jsonResponse({ ok: false, message: "unauthorized" }, 401);
    }

    var lead = payload.lead || {};
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getSheetByName("Waitlist") || spreadsheet.insertSheet("Waitlist");

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "createdAt",
        "name",
        "email",
        "whatsapp",
        "source",
        "page",
        "ip",
        "userAgent"
      ]);
    }

    sheet.appendRow([
      lead.createdAt || "",
      lead.name || "",
      lead.email || "",
      lead.whatsapp || "",
      lead.source || "",
      lead.page || "",
      lead.ip || "",
      lead.userAgent || ""
    ]);

    return jsonResponse({ ok: true }, 200);
  } catch (error) {
    return jsonResponse({ ok: false, message: String(error) }, 500);
  }
}

function jsonResponse(data, status) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
