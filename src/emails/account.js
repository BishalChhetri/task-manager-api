const postmark = require("postmark");
const client = new postmark.Client("03de500a-c353-49a1-975e-d161a33f3ba7");
const fs = require("fs");

client.sendEmail(
  {
    From: "bk02243017@student.ku.edu.np",
    To: "kcbisal1@gmail.com",
    Subject: "Test",
    TextBody: "Test Message",
  },
  function (error, result) {
    if (error) {
      console.error("Unable to send via postmark: " + error.message);
      return;
    }
    console.info("Sent to postmark for delivery");
  }
);

// const sgmail = require("@sendgrid/mail");

// sgmail.setApiKey(process.env.SENDGRID_API_KEY);

// // sgmail.send({
// //   to: "kcbisal1@gmail.com",
// //   from: "kcbisal1@gmail.com",
// //   subject: "This is my first creation.",
// //   text: "I hope this one actually gets to you",
// // });

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

// const SendinBlue = require("sib-api-v3-sdk");

// const client = SendinBlue.ApiClient.instance;

// const apiKey = client.authentications["api-key"];
// apiKey.apiKey =
//   "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";
// //  process.env.SENDINBLUE_API_KEY;

// // const sendWelcomeEmail = (email, name) => {
// const sendEmail = new SendinBlue.TransactionalEmailsApi();

// sendEmail
//   .sendTransacEmail({
//     sender: "kcbisal1@gmail.com",
//     to: "kcbisal1@gmail.com",
//     subject: "Thanks for joining in!",
//     textContent: `Welcome to the app, . Let me know how you get along with the app.`,
//   })
//   .then(console.log)
//   .catch(console.log);

// const sendCancelationEmail = (email, name) => {
//   const apiInstance = new SendinBlue.TransactionalEmailsApi();
//   const sendSmtpEmail = new SendINBlue.SendSmtpEmail();
//   sendSmtpEmail = {
//     to: email,
//     sender: "kcbisal1@gmail.com",
//     subject: "Sorry to see you go",
//     textContent: `GoodBye, ${name}. I hope to see you back sometime soon.`,
//   };
//   apiInstance.sendTransacEmail(sendSmtpEmail).then(
//     function (data) {
//       console.log("API called successfully. Returned data: " + data);
//     },
//     function (error) {
//       console.error(error);
//     }
//   );
// };

// sendWelcomeEmail("kcbisal1@gmail.com", "Bishal KC");

// module.exports = sendWelcomeEmail;
// module.exports = sendCancelationEmail;
