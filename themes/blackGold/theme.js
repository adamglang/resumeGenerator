module.exports = () => `
    body {
      margin: 0;
    }
    body h3.title {
      font-family: "montserratbold";
      padding-bottom: 10px;
      border-bottom: #a88960 2px solid;
      display: inline-block;
      padding-right: 40px;
    }
    body .info {
      width: 100%;
      display: table;
    }
    body .info h4.title {
      font-family: "montserratbold";
      float: left;
    }
    body .info .dates-worked {
      font-family: "montserratmedium";
      color: #a88960;
      float: right;
    }
    body .description {
      font-family: "open_sansregular";
    }
    body #template-header {
      background: #000;
      color: #FFF;
      height: 200px;
      position: relative;
    }
    body #template-header #header-info {
      display: flex;
      flex-wrap: wrap;
      border: #a88960 3px solid;
      width: 600px;
      height: 100px;
      position: absolute;
      top: 47px;
      left: 0;
      bottom: 0;
      right: 0;
      margin: 0 auto;
      font-family: "montserratbold";
    }
    body #template-header #header-info #initials-box {
      width: 100px;
      border-right: #a88960 3px solid;
    }
    body #template-header #header-info #initials-box .initials {
      width: 100%;
      display: block;
      position: absolute;
      font-size: 22px;
    }
    body #template-header #header-info #initials-box #first-initial {
      top: 15px;
      left: 20px;
    }
    body #template-header #header-info #initials-box #last-initial {
      bottom: 15px;
      left: 65px;
    }
    body #template-header #header-info #initials-box hr {
      transform: rotate(135deg);
      border: #a88960 1px solid;
      margin: 52px 15px 0;
    }
    body #template-header #name-box {
      width: 500px;
      position: absolute;
      top: 0;
      right: 0;
      height: 57px;
      border-bottom: #a88960 3px solid;
      text-transform: uppercase;
    }
    body #template-header #name-box span {
      left: 30px;
      position: absolute;
      top: 13px;
      font-size: 22px;
      letter-spacing: 10px;
    }
    body #template-header #title-box {
      position: absolute;
      height: 40px;
      width: 350px;
      bottom: 0;
      left: 100px;
    }
    body #template-header #title-box span {
      left: 30px;
      position: absolute;
      top: 10px;
      font-size: 15px;
      letter-spacing: 6px;
      text-transform: uppercase;
    }
    body #template-header #header-date {
      position: absolute;
      height: 40px;
      width: 150px;
      bottom: 0;
      right: 0;
      border-left: #a88960 3px solid;
    }
    body #template-header #header-date span {
      position: absolute;
      letter-spacing: 4px;
      font-size: 15px;
      top: 10px;
      left: 15px;
    }
    body #template-description {
      padding: 50px;
      text-align: center;
      background: #a88960;
      color: #FFF;
      font-family: "open_sansregular";
    }
    body #template-description header {
      text-transform: uppercase;
      font-size: 16px;
      letter-spacing: 5px;
    }
    body #template-description #description {
      font-size: 14px;
    }
    body #inner-wrapper {
      border-left: #a88960 3px solid;
      border-right: #a88960 3px solid;
      margin: 30px 50px;
      float: left;
    }
    body #inner-wrapper #main-area {
      width: 550px;
      border-right: #a88960 3px solid;
      padding: 0 40px;
      float: left;
    }
    body #inner-wrapper #sidebar {
      float: left;
      width: 180px;
      padding: 0 40px;
    }
    body #inner-wrapper #sidebar #profile-pic img {
      width: 100%;
    }
    body #inner-wrapper #sidebar #skills .skill p {
      font-family: "open_sansregular";
    }
    body #inner-wrapper #sidebar #contact #contact-socials img {
      width: 50px;
    }
    body #template-footer {
      float: left;
      width: 100%;
      height: 200px;
      background: #000;
    }
    @font-face {
      font-family: "montserratbold";
      src: url("fonts/montserrat-bold-webfont.woff2") format("woff2"), url("fonts/montserrat-bold-webfont.woff") format("woff");
      font-weight: normal;
      font-style: normal;
    }
    @font-face {
      font-family: "montserratmedium";
      src: url("fonts/montserrat-medium-webfont.woff2") format("woff2"), url("fonts/montserrat-medium-webfont.woff") format("woff");
      font-weight: normal;
      font-style: normal;
    }
    @font-face {
      font-family: "montserratregular";
      src: url("fonts/montserrat-regular-webfont.woff2") format("woff2"), url("fonts/montserrat-regular-webfont.woff") format("woff");
      font-weight: normal;
      font-style: normal;
    }
    @font-face {
      font-family: "open_sansregular";
      src: url("fonts/OpenSans-Regular-webfont.eot");
      src: url("fonts/OpenSans-Regular-webfont.eot?#iefix") format("embedded-opentype"), url("fonts/OpenSans-Regular-webfont.woff2") format("woff2"), url("fonts/OpenSans-Regular-webfont.woff") format("woff"), url("fonts/OpenSans-Regular-webfont.ttf") format("truetype"), url("fonts/OpenSans-Regular-webfont.svg#open_sansregular") format("svg");
      font-weight: normal;
      font-style: normal;
    }
`;