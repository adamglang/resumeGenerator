module.exports = ({
    profileName,
    profileInitials,
    jobTitle,
    date
}) => `
    <header id="template-header">
        <div id="header-info">
            <div id="initials-box">
                <span id="first-initial" class="initials">${profileInitials.firstInitial}</span>
                <hr />
                <span id="last-initial" class="initials">${profileInitials.lastInitial}</span>
            </div>
            <div id="name-box"><span>${profileName}</span></div>
            <div id="title-box"><span>${jobTitle}</span></div>
            <div id="header-date"><span>${date}</span></div>
        </div>
    </header>
`;