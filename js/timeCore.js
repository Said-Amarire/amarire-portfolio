// datetime.js
document.addEventListener("DOMContentLoaded", function () {
  const datetimeField = document.getElementById("client_datetime");
  if (datetimeField) {
    datetimeField.value = new Date().toISOString();
  }
});
