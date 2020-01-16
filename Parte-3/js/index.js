function watchSubmitButton() {
  $("#submit").on("click", e => {
    e.preventDefault();
    // Get the comment data.
    const name = $(".userName").val();
    const comment = $("#userComment").val();

    // Validate that the provided fields are correct.
    if (name === "") {
      alert("Please provide a valid name");
      return;
    }
    if (comment === "") {
      alert("Please provide valid comment text");
      return;
    }

    // Clear the form.
    $(".userName").val("");
    $("#userComment").val("");

    // Create the comment element and append it to the current comment list.
    const newComment = $(`<div><h3>${name}</h3><p>${comment}</p></div>`);
    $(newComment).addClass("comment");
    $(".seccionComments").append(newComment);
  });
}

function init() {
  watchSubmitButton();
}

init();
