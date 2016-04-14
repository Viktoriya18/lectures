
var User = function(name, info, second, avatar, newfield) {
  this.name = name;
  this.info = info;
  this.second = second;
  this.avatar = avatar;
  this.newfield = newfield;
}
 
$(document).ready(function() {
var UserManager = function(usersList) {
    var usersList = document.getElementById('usersListNode');
    var userInfoNode = document.getElementById('userInfoNode');

    this.drawUsers = function(usersList) {
        usersList.forEach(drawOneUser);
    }

    var selectedUser;

    var drawOneUser = function(userObject, index) {

        var item = document.createElement('li');
        item.innerHTML = index + ':' + userObject.name;
        item.className = 'user';
        item.onclick = function() {
            if (selectedUser) {
                selectedUser.classList.toggle('userActive', false);
            }
            setUserInfo(userObject);
            this.classList.toggle('userActive');
            selectedUser = this;

        }
        usersList.appendChild(item);
    }

    var template = userInfoNode.innerHTML.replace(/{{&gt;/g, "{{>");

    var setUserInfo = function(userObject) {
        var newContent = Mustache.to_html(template, userObject);
        userInfoNode.innerHTML = newContent;
    }

    this.setUserInfoNodeHTML = function(content) {
        userInfoNode.innerHTML = content;
    }
}

var usersList = [
    new User('John', 'likes bowling', 'Second', 'http://www.iconarchive.com/download/i51046/hopstarter/halloween-avatars/Jason.ico',
        'asdasdasdasd'),
    new User('Pavel', 'plays footbal', 'Second', 'http://www.iconarchive.com/download/i51026/hopstarter/halloween-avatars/Alien.ico',
        'asdasdasdasd'),
    new User('Igor', 'drinks a lot', 'Second', 'http://files.softicons.com/download/internet-cons/halloween-avatars-icons-by-deleket/ico/Zombie%202.ico',
        'asdasdasdasd')
];

var userManager = new UserManager(usersList);
//userManager.setUserInfoNodeHTML('');
userManager.drawUsers(usersList);

})
