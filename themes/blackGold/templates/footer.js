module.exports = (phone, email, github, stackOverflow, linkedin) => `
    <section id="contact">
        <div id="contact-info">
            <h3 class="title">Reach out to me at:</h3>
            <p id="contact-phone"><a href="tel:2069312099">${phone}</a></p>
            <p id="contact-email"><a href="mailto:adam@adamglang.com">${email}</a></p>
        </div>
        <div id="contact-socials">
            <div id="linkedin">
                <a href=${linkedin}><img src="https://cdn3.iconfinder.com/data/icons/material-design-social-icons/152/Linkedin_icon-512.png" /></a>
            </div>
            <div id="github">
                <a href=${github}><img src="http://balzer82.github.io/github.png" /></a>
            </div>
            <div id="stackoverflow">
                <a href=${stackOverflow}><img src="http://lh3.googleusercontent.com/6AMietCWSXysmPDEiIEzXoJP2HzXYNbDHx83l42JqnX350YlyBGmwk7ithVCTIM2fbM=w300" /></a>
            </div>
        </div>
    </section>
`;