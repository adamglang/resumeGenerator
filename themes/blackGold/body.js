const headerModule = require("./templates/header");
const descriptionModule = require("./templates/description");
const experienceModule = require("./templates/experience");
const volunteerModule = require("./templates/volunteerWork");
const skillSetModule = require("./templates/skillSet");
const projectsModule = require("./templates/projects");


class Body {
    static init({headerData, description, experience, volunteerWork, skillSet, projects}) {
        const headerMarkup = headerModule(headerData);
        const descriptionMarkup = descriptionModule(description);
        const experienceMarkup = experienceModule(experience);
        const volunteerMarkup = volunteerModule(volunteerWork);
        const skillsetMarkup = skillSetModule(skillSet);
        const projectsMarkup = projectsModule(projects);
        const profileImg = headerData.profileImg;

        return Body.generateTemplate(
            headerMarkup,
            descriptionMarkup,
            experienceMarkup,
            volunteerMarkup,
            skillsetMarkup,
            projectsMarkup,
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
        profileImg
    ) {
        return `
<body>
<main id="wrapper">
${headerMarkup}
${descriptionMarkup}
    <section id="inner-wrapper">
        <section id="main-area">
            ${experienceMarkup}
            ${projectsMarkup}
            ${volunteerMarkup}
        </section>
        <section id="sidebar">
            <section id="profile-pic">
                <img src=${profileImg} />
            </section>
            ${skillsetMarkup}
            <section id="contact">
                <h3 class="title">Reach me at:</h3>
                <h4 id="contact-name">Adam G Lang</h4>
                <p id="contact-phone">206-931-2099</p>
                <p id="contact-email">adam@adamglang.com</p>
                <div id="contact-socials">
                    <div id="linkedin">
                        <img src="https://cdn3.iconfinder.com/data/icons/material-design-social-icons/152/Linkedin_icon-512.png" />
                        <a href="https://www.linkedin.com/in/adam-lang-96681764/">https://www.linkedin.com/in/adam-lang-96681764/</a>
                    </div>
                    <div id="github">
                        <img src="https://image.flaticon.com/icons/svg/25/25231.svg" />
                        <a href="https://github.com/adamglang">https://github.com/adamglang/</a>
                    </div>
                    <div id="stackoverflow">
                        <img src="http://lh3.googleusercontent.com/6AMietCWSXysmPDEiIEzXoJP2HzXYNbDHx83l42JqnX350YlyBGmwk7ithVCTIM2fbM=w300" />
                        <a href="https://stackoverflow.com/users/3422159/helloworld">https://stackoverflow.com/users/3422159/helloworld</a>
                    </div>
                </div>
            </section>
        </section>
    </section>
    <footer id="template-footer">

    </footer>
</main>

</body>
        `
    };
}

module.exports = Body;