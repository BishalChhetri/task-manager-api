const postmark = require("postmark");

const client = new postmark.Client(process.env.POSTMARK_API_KEY);
const fs = require("fs");

const sendWelcomeEmail = (email, name) => {
  client.sendEmail(
    {
      From: "bk02243017@student.ku.edu.np",
      To: email,
      Subject: "Thanks for joining in!",
      TextBody: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
    },
    function (error, result) {
      if (error) {
        console.error("Unable to send via postmark: " + error.message);
        return;
      }
      console.info("Sent to postmark for delivery");
    }
  );
};

const sendCancelationEmail = (email, name) => {
  client.sendEmail(
    {
      From: "bk02243017@student.ku.edu.np",
      To: email,
      Subject: "Sorry to see you go",
      TextBody: `GoodBye, ${name}. I hope to see you back sometime soon.`,
    },
    function (error, result) {
      if (error) {
        console.error("Unable to send via postmark: " + error.message);
        return;
      }
      console.info("Sent to postmark for delivery");
    }
  );
};

module.exports = sendWelcomeEmail;
module.exports = sendCancelationEmail;

// For Sgmail

// const sgmail = require("@sendgrid/mail");

// sgmail.setApiKey(process.env.SENDGRID_API_KEY);

// sgmail.send({
//   to: "kcbisal1@gmail.com",
//   from: "kcbisal1@gmail.com",
//   subject: "This is my first creation.",
//   text: "I hope this one actually gets to you",
// });

// const sendWelcomeEmail = (email, name) => {
//   sgmail.send({
//     to: email,
//     from: "kcbisal1@gmail.com",
//     subject: "Thanks for joining in!",
//     text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
//   });
// };

// const sendCancelationEmail = (email, name) => {
//   sgmail.send({
//     to: email,
//     from: "kcbisal1@gmail.com",
//     subject: "Sorry to see you go",
//     text: `GoodBye, ${name}. I hope to see you back sometime soon.`,
//   });
// };

// module.exports = sendWelcomeEmail;
// module.exports = sendCancelationEmail;
