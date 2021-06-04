function addDataToTable({ name, username, mobile, email, id }) {
  const row = `<tr>
  <td id="fName">${name}</td>
  <td id="username">${username}</td>
  <td id="telephone">${mobile}</td>
  <td id="email">${email}</td>
  <td>
    <img src="../assets/icons/delete.svg" width="30" height="30" id="delete" onclick="deleteData(${id})" />
  </td>
  <td>
    <img src="../assets/icons/edit.png" width="30" height="30" id="edit" onclick="handleEditData(${id})" />
  </td>
</tr>
`;
  $("#table").removeClass("d-none");
  $("#tbody").append(row);
}

function clearTable() {
  $("#tbody").html("");
}

function clearInputs() {
  $("input").val("");
}

function toggleSubmitButtonToEdit(mode) {
  mode ? $("#submit").html("ویرایش") : $("#submit").html("ثبت");
}

function setInputaValue({ name, username, mobile, email }) {
  $("#fName").val(name);
  $("#username").val(username);
  $("#telephone").val(mobile);
  $("#email").val(email);
}

function getInputaValue() {
  return {
    name: $("#fName").val(),
    username: $("#username").val(),
    mobile: $("#telephone").val(),
    email: $("#email").val(),
  };
}

function clearErrorMessage() {
  document.querySelector("#small").textContent = "";
}

function setErrorMessage(errMsg) {
  document.querySelector("#small").textContent = errMsg;
}
