function addComment() {
  event.preventDefault(); //!
  var bodyText = document.getElementById("commentText").value;
  var commenter = document.getElementById("commenterName").value;

  var commentBody = createCommentBody(bodyText);
  var commenterLabel = createCommenterLabel(commenter);
  var dateLabel = createDateLabel();
  postNewComment(commentBody, commenterLabel, dateLabel);
}

function createCommentBody(comment) {
  var bodyDiv = document.createElement("div");
  var bodyPara = document.createElement("p");
  bodyPara.innerHTML = comment;
  bodyDiv.appendChild(bodyPara);
  return bodyDiv;
}

function createCommenterLabel(commenter) {
  var commenterDiv = document.createElement("div");
  var commenterLabel = document.createElement("p");
  commenterLabel.innerHTML = "posted by:&nbsp;";
  var commenterName = document.createElement("span");
  commenterName.innerHTML = commenter;
  commenterLabel.appendChild(commenterName);
  commenterDiv.appendChild(commenterLabel);
  return commenterLabel;
}

function createDateLabel() {
  var dateDiv = document.createElement("div");
  var date = document.createElement("p");
  date.innerHTML = Date.now;

  dateDiv.appendChild("date");
  return dateDiv;
}

function postNewComment(body, commenter, date) {
  var commentsDiv = document.getElementById("comments");
  var newCommentDiv = document.createElement("div");
  newCommentDiv.appendChild(body);
  newCommentDiv.appendChild(commenter);
  newCommentDiv.appendChild(date);
  commentsDiv.appendChild(newCommentDiv);
} 
