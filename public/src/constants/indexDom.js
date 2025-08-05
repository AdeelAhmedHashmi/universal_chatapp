let DOM = {
    inputField: document.querySelector("#input"),
    sendBtn: document.querySelector(".sendBtn"),
    container: document.querySelector(".messages"),
    listIcon: document.querySelector(".topbar .leftbar"),
    profileIcon: document.querySelector(".topbar .rightbar"),
    addPeopleIcon: document.querySelector(".search #plus"),
    searchIcon: document.querySelector(".search #searchBtn"),
    leftMenuBar: document.querySelector(".container .left"),
    rightMenuBar: document.querySelector(".container .right"),
    leftMenuBackIcon: document.querySelector(".container .left .upper .back i"),
    rightMenuBackIcon: document.querySelector(
        ".container .right .upper .back i"
    ),
    menuTitle: document.querySelector(".container .left .upper .title"),
    listContainer: document.querySelector("#peopleList"),
    searchInput: document.querySelector("#search-input"),
    profileEditIcon: document.querySelector(
        ".container .right .upper .profile .info .edit-info .edit-btn i"
    ),
    editProfilepopup: document.querySelector(".container .popup"),
    cancleProfilePopupBtn: document.querySelector(".popup-actions .cancel"),
    themeToggleBtn: document.querySelector("#themeSwitch"),
    settingBtn: document.querySelector(".container .lower button"),
    profileIcon: document.querySelector(".topbar .rightbar"),
    rightMenuBar: document.querySelector(".container .right"),
    settingUsernameInputField: document.querySelector(".popup #username"),
    settingChatidInputField: document.querySelector(".popup #chatid"),
    settingFileInputField: document.querySelector('.popup input[type="file"]'),
    settingProfileImg: document.querySelector(".popup #profileImage"),
    updateForm: document.querySelector("#profileForm"),
    errorBox: document.querySelector(".err"),
    usernameBox: document.querySelector(".user-info .username"),
    chatidBox: document.querySelector(".user-info .chatid"),
    loadingBox: document.querySelector(".container .loading"),
    emojiBox: document.querySelector(".emojiBox"),
    emojiSearchBar: document.querySelector(".search-emoji input"),
    leftBarTitle: document.querySelector(".container .left .title"),
    topbarTitle: document.querySelector(".topbar .mid h2"),
    newContactBtn: document.querySelector(".addPeopleBox #plus"),
    profileImg: document.querySelector(
        ".container .right .profile .profile-image img"
    ),
    addNewContactPopup: document.querySelector(".new-contact"),
    newContactForm: document.querySelector(".new-contact form"),
    newContactNameInput: document.querySelector(".new-contact form #nameInput"),
    newContactChatidInput: document.querySelector(
        ".new-contact form #chatidInput"
    ),
    newContactAddButton: document.querySelector(".new-contact form button"),
    newContactCloseButton: document.querySelector(".new-contact .title i"),
};

export default DOM;
