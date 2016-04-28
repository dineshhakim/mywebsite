function getAboutMe($sce) {

    var msg = 'Senior Software Developer with 5 years of experience. Developing project using asp.net web-forms, MVC and Web API(Restful) with C# and SQL server as database. I am experienced in developing enterprise level software specialized in Banking and HR Software. Experienced of managing entire software development cycle including \n requirement analysis, diagramming, design, development, testing and deployment. While working in agile team, I developed my programming skills, communication skills and team work. Experienced in delegation of job to the team members. My objective is to make myself good programmer and built a strong team and develop interesting and creative projects. ✔Languages: C#, C, C++, Java ✔Web: HTML5, CSS3, JavaScript, AJAX, Razor, Bootstrap, jQuery, JSON, AngularJS ✔Databases: MS SQL Server 2005, 2008 R2, 2012 , MS Access,MySql ✔Tools: Visual Studio , Eclipse ,SVN, GIT, GitHub ✔Platforms: Windows, Linux ✔Server: IIS 7, 8 and Window server 2005, 2008 and 2012 ✔Source Control: SVN, GIT ✔SDLC: Waterfall , Agile(Scrum), TDD ✔Design Patterns: Command , Observer , Singleton , Facade , Template Method , Strategy , MVC, Factory, Dependency Injection, Repository ✔Web Services: WebApi (Rest), Soap ✔Frameworks: Asp.net 4/4.5, ADO.NET, LINQ, Unity Framework, Bootstrap, JQuery ✔Others: Entity Framework, Hibernate, NHibernate, Nlogger, Crystal Reports';


    msg = msg.replace(/\. /g, ".\n");
    msg = msg.replace(/✔/g, "\n <i class='fa fa-arrow-right'></i> ");
    msg = $sce.trustAsHtml(msg);
    return msg;

}


function getEducationData() {
    var data = [{ name: 'Maharishi University of Management', fieldOfStudy: 'Computer Science', years: "2015-2017" },
        { name: 'Kathford International College of Engineering and Management', fieldOfStudy: 'Computer Science', years: "2007-2011" },
        { name: 'Brishaspati College', fieldOfStudy: 'Science', years: "2005-2007" }];
    return data;
}

function getexperienceData() {
    var data =
        [{
            name: 'Infodevelopers Pvt. Ltd.', position: '.Net Developer', years: "2011-2012",
            description: "Worked In HR and Micro-finance(Banking) Project. Responsibilities: Designed setup web-forms and write stored procedures in database to perform crud operation. Also Implemented Jquery UI and Jquery AJAX. Technology Used Asp.net with C#, Jquery, JavaScript and SQL server 2008 as database."
        },


            {
                name: 'Xclusive Minds Pvt. Ltd.', position: 'Sr. .Net Developer', years: "2012-2013",
                description: "Senior programmer for HR Project, Content management system for Htpl and container management system My resposibilities Includes: Create Project Architecture with layers and repository pattern in Dao. Meeting with clients Designing Database Assigning tasks to my team members Creating complex forms which needed more assistance. Uses Asp.net with C#, Jquery, Sql server 2008, Entity Framework"
            },


            {
                name: 'Uranus Tech Nepal Pvt. Ltd.',
                position: 'Sr. .Net Developer', years: "2013-2015",
                description: "Skynix(Centralize Software for all cooperative) Microfinance(Banking) Software: Integrated HR , Fixed Assets and Messaging system in this software. My responsibilities includes: Gathered Client Requirements and developed project architecture and designed database. Designed complex forms related to reporting. Lead database design and optimization of day end processes. Lead team of developers and delegated project responsibilities. Worked in Asp.net with C#(Webforms and MVC), Jquery, Sql server 2008, 2012, Entity Framework"
            }
            ,

            {
                name: 'Robert Half International', position: 'Contract Software Developer', years: "2015-Current",
                description: "Working with Bracket Global Clients. This company is building software for the Pharmaceuticals company which is needed during the Clinical Trails. I am responsible for designing flows, reports and notifications for the project. Also working with data transfers to other vendors. Technologies Used: Asp.net MVC, PostSharp, MemCache, RTSM, Sql Server 2005 & 2008, VS 2012, Jquery, HTML5 and CSS3"
            }


        ];
    return data;
}

function getSocialNetworksData() {
    var data =
        [{
            name: 'linkedin', link: 'https://www.linkedin.com/in/dineshkumarkarn'

        },
            { name: 'facebook', link: 'https://www.facebook.com/' },

            {
                name: 'blogger', link:
                    'http://dineshkkarn.blogspot.com/'
            },
            {
                name: 'google-plus', link:
                    'https://plus.google.com/u/0/+dineshkarnhakim'
            },

        ];
    return data;
}