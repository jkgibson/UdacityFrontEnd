
var bio = {
	"name": "John Gibson",
	"role": "HW/SW Engineer",
	"contacts":
		{
			"mobile": "503-709-1051",
			"email": "jkgibson@ieee.org",
			"github": "jkgibson",
			"twitter": "@john_gibson_vr",
			"location": "Beaverton, OR"
		},
	"welcomeMessage": "Welcome to my resume page. It was made using HTML, CSS and Javascript for the Front End Developer path of the Udacity Intro to Programming Nanodegree!",
	"skills": ["Python", "HTML", "CSS", "Matlab", "Test Automation", "Electronics"],
	"bioPic": "images/me.jpg"
}

bio.display = function() {

	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	$("#topContacts").append(formattedEmail);

	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	$("#topContacts").append(formattedGithub);

	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);

	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	$("#topContacts").append(formattedLocation);

	//If there exists skills in the bio object, iterate through the skills array , and append them one by one.
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for(var index = 0; index < bio.skills.length; index++){
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[index]);
				$("#skills").append(formattedSkill);
		}
	}

	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);

	var formattedPic = HTMLbioPic.replace("%data%",bio.bioPic);
	$("#header").prepend(formattedPic);
}

var education = {
	"schools": [
		{
			"name": "Portland State University",
			"location": "Portland, OR",
			"degree": "Bachelor of Science",
			"majors": ["Electrical Engineering","Mathematics"],
			"dates": "2003-2008",
			"url": "http://www.pdx.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "Intro to Programming Nanodegree",
			"school": "Udacity",
			"dates": "06/2016-09/2016",
			"url": "www.udacity.com"
		}
	]
}

education.display = function(){

	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedName + formattedDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		if (education.schools[school].majors.length > 0) {
			for(var index = 0; index < education.schools[school].majors.length; index++){
				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[index]);
				$(".education-entry:last").append(formattedMajor);  //specify the work entry class by putting a dot in front
			}
		}

		var formattedURL = HTMLschoolURL.replace("%data%", education.schools[school].url);
		$(".education-entry:last").append(formattedURL);
	}

	//for the code below, I followed the example in this forum thread: https://discussions.udacity.com/t/no-online-classes-displaying-below-the-h3-online-classes-heading/27798/6

	for (course in education.onlineCourses) {
		$("#education").append(HTMLonlineClasses);
		$("#education").append(HTMLonlineStart);

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		$(".online-entry").append(formattedTitle + formattedSchool).css("padding-left","5%");

		//TODO: Figure out a way to format the dates so they show up correctly on the HTML page.
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".online-entry").append(formattedDates);

		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".online-entry").append(formattedURL);
	}
}

var work = {
	"jobs": [
		{
			"employer": "Synopsys Inc",
			"title": "Research and Development Engineer",
			"location": "Hillsboro, OR",
			"dates": "01/2014 - 09/2016",
			"description": "Tested for USB, PCIe, SATA Compliance on Synopsys IP"
		},
		{
			"employer": "Allion USA",
			"title": "System Test Engineer",
			"location": "Hillsboro, OR",
			"dates": "01/2019 - 12/2013",
			"description": "Ran SATA-IO Logo problem"
		},
		{
			"employer": "Intel Corp",
			"title": "Electrical Engineering Intern",
			"location": "Hillsboro, OR",
			"dates": "06/2008 - 12/2008",
			"description": "PC Motherboard Testing and Overclocking"
		}
	]
}

work.display = function(){
	var HTMLworkStart = '<div class="work-entry"></div>';
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);  //specify the work entry class by putting a dot in front

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);  //specify the work entry class by putting a dot in front

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);  //specify the work entry class by putting a dot in front

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);  //specify the work entry class by putting a dot in front
	}
}


var projects = {
	"projects": [
		{
			"title": "Madlibs Game",
			"dates": "07/2016 - 08/2016",
			"description": "Made a Madlibs game in Python",
			"images": ["images/me.jpg", "images/me.jpg"]
		},
		{
			"title": "Movie Trailer Website",
			"dates": "07/2016 - 08/2016",
			"description": "Made a website that would enable user to click on movie and it automatically shows trailer.",
			"images": ["images/me.jpg"]
		},
		{
			"title": "Resume Website",
			"dates": "09/2016",
			"description": "Made a website that would showcase my Front End dev skills",
			"images": ["images/me.jpg"]
		}
	]
}

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);  //specify the work entry class by putting a dot in front

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);  //specify the work entry class by putting a dot in front

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);  //specify the work entry class by putting a dot in front

		if (projects.projects[project].images.length > 0) {
			for(var i = 0; i < projects.projects[project].images.length; i++){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[i]);
				$(".project-entry:last").append(formattedImage);  //specify the work entry class by putting a dot in front
			}

		}
	}
}

bio.display();

work.display()

education.display();

projects.display();

$("#mapDiv").append(googleMap);

//button-stuff

// $(document).click(function(loc) {
//   var x = loc.pageX;
//   var y = loc.pageY;

//   logClicks(x,y);
// });


function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name.join(" ");
}

$("#main").append(internationalizeButton);