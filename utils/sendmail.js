import  nodemailer  from "nodemailer";


 async function main(req,res,next) {
 
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    ignoreTLS: false,
    secure: false,
    auth: {
      user: "testbanshi123@gmail.com", 
      pass: "sysxccircrzkmazm",
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'testbanshi123@gmail.com', // sender address
    to: "saurav.banshitechnologies@gmail.com, washim.banshitechnologies@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "order success ..", // plain text body
    html: "<b>Khub BUsy? Mail Gele Ak BAr Hasben please</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);


  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  next();
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

export default main;