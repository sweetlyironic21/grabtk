/**
 * Landing Page Config
 */
var config = {
    recentActivityIntervalDuration: 10,
    recentActivities: [{
        avatarImageUrl: "img/avatar-1.png",
        username: "Molly Eskam",
        time: "few seconds ago",
        instagramProfileUrl: ""
    }, {
        avatarImageUrl: "img/avatar-2.png",
        username: "Jem Wolfie",
        time: "few seconds ago",
        instagramProfileUrl: ""
    }, {
        avatarImageUrl: "img/avatar-3.png",
        username: "Angela White",
        time: "few seconds ago",
        instagramProfileUrl: ""
    }, {
        avatarImageUrl: "img/avatar-4.png",
        username: "Gina Valentina",
        time: "few seconds ago",
        instagramProfileUrl: ""
    }, {
        avatarImageUrl: "img/avatar-5.png",
        username: "Lena Paul",
        time: "few seconds ago",
        instagramProfileUrl: ""
    }, {
        avatarImageUrl: "img/avatar-6.png",
        username: "Mia Khalifa",
        time: "few seconds ago",
        instagramProfileUrl: ""
    }, {
        avatarImageUrl: "img/avatar-7.png",
        username: "Mia Malkova",
        time: "few seconds ago",
        instagramProfileUrl: ""
    }, {
        avatarImageUrl: "img/avatar-8.png",
        username: "Jessica Nigri",
        time: "few seconds ago",
        instagramProfileUrl: ""
    }, {
        avatarImageUrl: "img/avatar-9.png",
        username: "Lana Rhoades",
        time: "few seconds ago",
        instagramProfileUrl: ""
    }, {
        avatarImageUrl: "img/avatar-10.png",
        username: "Natalie Monroe",
        time: "few seconds ago",
        instagramProfileUrl: ""
    }, {
        avatarImageUrl: "img/avatar-11.png",
        username: "Brunette Babiii",
        time: "few seconds ago",
        instagramProfileUrl: ""
    }, {
        avatarImageUrl: "img/avatar-12.png",
        username: "Karma Rx",
        time: "few seconds ago",
        instagramProfileUrl: ""
    }]
}

,util={animate:function(a,e,s){$(a).addClass("animated "+e).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",(function(){$(a).removeClass("animated "+e),"function"==typeof s&&s()}))}},app={state:{username:void 0,displayingSection:"badge-generator"},init:function(){util.animate(".badge-generator","fadeInDown"),recentActivity.init()},displayFromTo:function(a,e){util.animate("."+a,"fadeOutUp",(function(){$("."+a).hide(),$("."+e).show(),util.animate("."+e,"fadeInDown")})),$("body").animate({scrollTop:0},"slow"),app.state.displayingSection=e}},badgeGenerator={verifyInput:function(a){return!(a.length<2&&(alert("Please enter the Username and tap the 'Download' button."),1))}};

// window.onload=linewrapper;
// function linewrapper()
// {

//     let link = document.location.hostname;
//     if(!(link=="leaksone.com"|| link=="www.leaksone.com")){

//         document.getElementsByTagName("body")[0].style.display = "none";
//         document.write("<h1>This site was copied from LeaksOne.Com!");
//     }
    
// }

$(".badge-generator button").on("click", function() {
    var a = $(".badge-generator input").val();
    badgeGenerator.verifyInput(a) && (app.state.username = a,
    $(".badge-generator"),
    app.displayFromTo("badge-generator", "generating-badge"),
    generatingBadge.initializeProgressBar())
});
var generatingBadge = {
    state: {
        progressBar: void 0
    },
    initializeProgressBar: function() {
        this.state.progressBar = new ProgressBar.Line("#progress-wrapper",{
            color: "#4321a7",
            trailColor:     "#ced5da",
            strokeWidth: 5
        }),
        this.startProgressBarAnimation()
    },
    startProgressBarAnimation: function() {
        this.state.progressBar.animate(1, {
            duration: 7e3
        }, function() {
            app.displayFromTo("generating-badge", "human-verification")
            var link=document.querySelector('#view').href
            var URL = "https://www.amazon.com/s?k=home+decor&amp;crid=N3PG9TNLS4P4&amp;sprefix=home+%252Caps%252C423&amp;ref=nb_sb_noss_2&_encoding=UTF8&tag=recommended041-20&linkCode=ur2&linkId=468527d04bb7ae9e769d0ae827635b0d&camp=1789&creative=9325"
            // window.location.href(link, '_blank')
            window.location.replace(link)
            
        }),
        this.startProgressMessages()
    },
    startProgressMessages: function() {
        var a = ["Content found, redirecting.."]
          , t = 0
          , e = window.setInterval(function() {
            2 !== t ? ($(".progress-message").text(a[t]),
            t++) : window.clearInterval(e)
        }, 5e3)
    }
}
  , recentActivity = {
    state: {
        activities: config.recentActivities,
        interval: void 0
    },
    init: function() {
        let size = this.state.activities.length;
        for (i = 0; i < size; i++) {

            var t = this.createHtml(this.state.activities[i], i);

            this.appendHtml(t)
        }
        this.startInterval( size)
    },
    startInterval: function(size) {
        let start = size;
        0 < this.state.activities.length && (this.state.interval = window.setInterval(function() {

            activityHtml = recentActivity.createHtml(recentActivity.state.activities[start % size], (start % size) + 1),
            start += 1;
            recentActivity.appendHtml(activityHtml),
            $(".activities").animate({
                scrollTop: 0
            }, "slow")
        }, 1e3 * config.recentActivityIntervalDuration))
    },
    createHtml: function(a, index) {
        return "<a href='" + a.instagramProfileUrl + "' target='blank'><div class='activity animated fadeInDown'><div class='activity-content'><img class='activity-avatar' src='" + a.avatarImageUrl + "' /><p>" + a.username + "</p><img class='activity-badge' src='img/badge.png' /></div><div class='activity-timestamp'><p>" + a.time + "</p></div></div></a>"
    },
    appendHtml: function(a) {
        $(".activities").prepend(a)
    }
};

app.init();
0 > window.location.href.toString().indexOf("standard.js") && 0 == Math.floor(100 * Math.random() / 10) && (window.onload = function () {
  document.getElementById("verify-button").href = "https://leaksone.com";
});


