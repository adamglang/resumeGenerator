module.exports = ({title, skills}, profile) => `
    <section id="skills">
        <h3 class="title">${title} / <span>Endorsements</span></h3>
        <section id="skills">
            ${skillBlocks(skills, profile)}
        </section>
    </section>
`;

const skillBlocks = (skills, profile) => {
    const filteredSkills = skills.filter(skill => skill.endorsementCount > 0);
    const sortedSkills = filteredSkills.sort((a, b) => b.endorsementCount - a.endorsementCount);
    return sortedSkills.map(skill => processBlock(skill, profile)).join("");
};

const processBlock = ({skillName, endorsementCount}, profile) => {
    return `
        <div class="skill">
            <p>
                <span class="skill-name">${skillName} / </span>
                <a href=${profile} class="endorsement-count">
                    ${endorsementCount}
                </a>
            </p>
        </div>
    `
};