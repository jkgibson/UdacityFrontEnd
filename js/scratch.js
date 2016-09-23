var formattedName = HTMLheaderName.replace("%data%", bio.name);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);

var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);

var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);

var formattedPic = HTMLbioPic.replace("%data%",bio.bioPic);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

var formattedSkills = HTMLskills.replace("%data%",bio.skills);

var formattedPosition = HTMLworkTitle.replace("%data%", work.position);

var formattedSchool = HTMLschoolName.replace("%data%", education.name);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedPic);
$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
$("#header").append(formattedGithub);
$("#header").append(formattedWelcomeMsg);
$("#header").append(HTMLskillsStart);
$("#header").append(formattedSkills);
$("#main").append(formattedPosition);
$("#main").append(HTMLschoolStart);
$("#main").append(formattedSchool);
