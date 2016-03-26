
var users = [
  {
    name: 'John',
    info: 'likes bowling',
    second: 'Second',
    avatar: 'http://www.iconarchive.com/download/i51046/hopstarter/halloween-avatars/Jason.ico',
    
  },
  {
    name: 'Pavel',
    info: 'plays footbal',
    second: 'Second',
    avatar: 'http://www.iconarchive.com/download/i51026/hopstarter/halloween-avatars/Alien.ico',
  },
  {
    name: 'Igor',
    info: 'drinks a lot',
    second: 'Second',
    avatar: 'http://files.softicons.com/download/internet-cons/halloween-avatars-icons-by-deleket/ico/Zombie%202.ico',
  },
];
$(document).ready(function() {

  var usersList = $('#usersListNode');
  var userInfoNode = $('#userInfoNode');

  function drawUsers(usersList) {
  usersList.forEach(drawOneUser);
}


var selectedUser;

function drawOneUser(userObject, index) {
  var $item = $('<li></li>');
  $item.html( + index + ':' + userObject.name );
  $item.addClass('user');
  $item.click(function() {

      if (selectedUser) {
          selectedUser.removeClass('userActive');
      }
      $(this).addClass('userActive');
      selectedUser = $(this);
      setUserInfo(userObject);
})

    usersList.append($item);
};
var template = userInfoNode.html();
setUserInfoNodeHTML('');

function setUserInfo(userObject) {

  var html = Mustache.to_html(template, userObject);
userInfoNode.html(html);
}

function setUserInfoNodeHTML(content) {
  userInfoNode.html(content);
}

drawUsers(users);

})
