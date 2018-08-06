const headerModule = require("./templates/header");
const descriptionModule = require("./templates/description");
const experienceModule = require("./templates/experience");
const volunteerModule = require("./templates/volunteerWork");
const skillSetModule = require("./templates/skillSet");
const projectsModule = require("./templates/projects");
const footerModule = require("./templates/footer");


class Body {
    static init({headerData, description, experience, volunteerWork, skillSet, projects}, profile) {
        const headerMarkup = headerModule(headerData);
        const descriptionMarkup = descriptionModule(description);
        const experienceMarkup = experienceModule(experience);
        const volunteerMarkup = volunteerModule(volunteerWork);
        const skillsetMarkup = skillSetModule(skillSet, profile);
        const projectsMarkup = projectsModule(projects);
        const footerMarkup = footerModule();
        const profileImg = headerData.profileImg;

        return Body.generateTemplate(
            headerMarkup,
            descriptionMarkup,
            experienceMarkup,
            volunteerMarkup,
            skillsetMarkup,
            projectsMarkup,
            footerMarkup,
            profileImg
        );
    }

    static generateTemplate(
        headerMarkup,
        descriptionMarkup,
        experienceMarkup,
        volunteerMarkup,
        skillsetMarkup,
        projectsMarkup,
        footerMarkup,
        profileImg
    ) {
        return `
<body>
<main id="wrapper">
${headerMarkup}
${descriptionMarkup}
    <section id="inner-wrapper">
        <section id="main-area">
            <div id="main-area-inner-wrap">
                ${experienceMarkup}
                ${projectsMarkup}
                ${volunteerMarkup}
            </div>
        </section>
        <section id="sidebar">
            <div id="sidebar-inner-wrap">
                <section id="profile-pic">
                    <img src=${profileImg} />
                </section>
                ${skillsetMarkup}
            </div>

        </section>
    </section>
    <footer id="template-footer">
        ${footerMarkup}
    </footer>
</main>

</body>
        `
    };
}

module.exports = Body;