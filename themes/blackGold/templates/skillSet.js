module.exports = ({title, skills}) => `
    <section id="skills">
        <h3 class="title">${title}</h3>
        <section id="skills">
            <h3 class="title">${skills.title}</h3>
            ${skillBlocks(skills)}
        </section>
    </section>
`;

const skillBlocks = skills => skills.map(skill => processBlock(skill));

const processBlock = ({skillName, endorsementCount}) => {
    return `
        <div class="skill">
            <p>${skillName} | ${endorsementCount} endorsements</p>
            <hr />
        </div>
    `
};