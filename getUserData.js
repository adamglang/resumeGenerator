const program = require("promptly");

module.exports = async () => {
    // const nameStr = "Please enter your name as you would like it to appear on your resume: ";
    // const jobStr = "Please enter your job title as you would like it to appear on your resume: "; 
    // const phoneStr = "Please enter the phone number that you would like on your resume: ";
    // const emailStr = "Please enter the email you would like to use for your resume: ";
    // const unStr = "Please enter your linkedin user name: ";
    // const pwStr = "Please enter the password for your linkedin account: ";
    // const linkedinStr = "Please enter the url of your linkedIn Profile: ";
    // const githubStr = "Please enter your github url (leave this blank if you do not have one: ";
    // const stackOverflowStr = "Please enter your stackoverflow url (leave this blank if you do not have one: ";

    // const name = await program.prompt(nameStr, {"default": ""});
    // const jobTitle = await program.prompt(jobStr, {"default": ""});
    // const phone = await program.prompt(phoneStr, {"default": ""});
    // const email = await program.prompt(emailStr, {"default": ""});
    // const un = await program.prompt(unStr, {"default": ""});
    // const pw = await program.prompt(pwStr, {"default": ""});
    // const linkedin = await program.prompt(linkedinStr, {"default": ""});
    // const github = await program.prompt(githubStr, {"default": ""});
    // const stackOverflow = await program.prompt(stackOverflowStr, {"default": ""});


    const name = 'Adam G Lang';
    const jobTitle = 'Software Engineer';
    const phone = '206-931-2099';
    const email = 'adam.lang.sde@gmail.com';
    const un = 'agl19841776@gmail.com';
    const pw = 'Fukushima50';
    const linkedin = 'https://www.linkedin.com/in/adam-lang-96681764/';
    const github = 'https://github.com/adamglang';
    const stackOverflow = 'https://stackoverflow.com/users/3422159/helloworld';

    return {name, jobTitle, phone, email, un, pw, linkedin, github, stackOverflow};
};