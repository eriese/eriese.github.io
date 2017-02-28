(function() {
  "use strict";

  var app = angular.module("main", ["ngSanitize"]);

  app.run(["$rootScope", "$location", "$http",function($rootScope, $location, $http) {
    $rootScope.topColor = "magenta";
    $rootScope.infoColor = "green";
    $rootScope.getWidth = function(numNexts) {
      var len = numNexts - 1;
      var offset = 30 * len;
      var perc = (len * 15);
      return "calc(" + perc + "% + " + offset + "px)"
    }
    // $http.get("assets/json/pages.json").success(function(response) {

    // })

    $rootScope.setPage = function(pageName) {
      if (pageName) {
        $rootScope.currentPage = $rootScope.pages[pageName];
        $location.path(pageName);
      }
    }

    $rootScope.initPage = function() {
      var initLoc = $location.path().slice(1) || "index";
      $rootScope.setPage(initLoc);
    }

    $rootScope.vidClick = function($event) {
      var video = $event.target;
      if (video.paused) {
        $(".img").css("width", "95%");
        $("video").css({"width": "90%"});
        video.play();
      }
      else {
        video.pause();
        $(".img").css("width", "");
        $("video").css({"width": "100%"});
      }
    }

    $rootScope.pages = pages;
    $rootScope.initPage();
  }])


  app.directive("chartPage", function() {
    return {
      restrict: "E",
      replace: true,
      templateUrl: "_chart.html"
    }
  })

  app.directive("infoPage", function() {
    return {
      restrict: "E",
      replace: true,
      templateUrl: "_info.html"
    }
  })

  var pages = {
    "aspect": {
      "type" : "info",
      "category": "puppeteer",
      "title": "Double Aspect Bright and Fair",
      "up": "shows",
      "color": 1,
      "img": {
        "src": "assets/images/puppetry.jpg",
        "desc": "Lynn speaks to a death row inmate"
      },
      "text": "Presented as part of Eric Ehn's 17-play cycle, Soulographie: Our Genocides, a durational performance event looking at 20th century America’s relationships to genocides in the U.S. (the Tulsa Race Riot), East Africa (Rwanda and Uganda), and Central America (Guatemala and El Salvador).Double Aspect Bright and Fair was directed by Dan Hurlin and presented at Sarah Lawrence College, American Dance Institute, and LaMaMa, etc."
    },
    "coding": {
      "type": "chart",
      "category": "coder",
      "title": "coder",
      "up": "index",
      "color": 1,
      "nexts": [
      {
        "title": "Processing and Arduino",
        "href": "processing",
        "isOut": false
      },
      {
        "title": "gitHub",
        "href": "http://www.github.com/eriese",
        "isOut": true
      },
      {
        "title": "Web",
        "href": "web",
        "isOut": false
      }
      ]
    },
    "puppetry": {
      "type": "chart",
      "category": "puppeteer",
      "title": "Puppeteer",
      "up": "index",
      "color": 1,
      "nexts": [
      {
        "title": "Shows",
        "href": "shows",
        "isOut": false
      },
      {
        "title": "Construction/ mechanical problemsolving",
        "href": "",
        "isOut": false
      }
      ]
    },
    "food": {
      "type": "info",
      "category": "puppeteer",
      "title": "Food for the Gods",
      "up": "shows",
      "color": 1,
      "img": {
        "src": "assets/images/fftg1.jpg",
        "alt": "The dinner table",
        "desc": "The ancestors greet one another before the meal."
      },
      "text": "Food for the Gods was written and conceived by Nehprii Amenii in response to the killings of Troy Davis, Trayvon Martin, and Kimani Gray, and as a reaction to the statistic that every 36 hours a young black person in the United States is killed extrajudicially by a police officer, security guard, or self-appointed law enforcer."
    },
    "index": {
      "type": "chart",
      "category": "enoch",
      "title": "Enoch Riese",
      "color": 0,
      "nexts": [
      {
        "title": "coder",
        "href": "coding",
        "isOut": false
      },
      {
        "title": "puppeteer",
        "href": "puppetry",
        "isOut": false
      },
      {
        "title": "skill hoarder",
        "href": "skills",
        "isOut": false
      }
      ]
    },
    "mouffe": {
      "type": "info",
      "category": "puppeteer",
      "title": "Bottom of the Mouffe",
      "up": "shows",
      "color": 1,
      "video": {
        "src": "assets/video/mouffe.webmsd.webm",
        "id": "mouffe",
        "desc": "Click to watch"
      },
      "text": "A 12-minute Bunraku-style puppet piece conceived by Jeanette Plourde and performed to music and without text. Bottom of the Mouffe is a companion piece to La Cienaga. Four puppets are featured in the piece: two 36-inch puppets and two 25-inch puppets."
    },
    "processing": {
      "type": "chart",
      "category": "coder",
      "title": "Processing and Arduino",
      "up": "coding",
      "color": 0,
      "nexts": [
      {
        "title": "Closing Window",
        "href": "http://www.openprocessing.org/sketch/121624",
        "isOut": true
      },
      {
        "title": "Diminishing Returns",
        "href": "http://www.openprocessing.org/sketch/121625",
        "isOut": true
      },
      {
        "title": "Consequences",
        "href": "http://www.openprocessing.org/sketch/103537",
        "isOut": true
      },
      {
        "title": "The Swell",
        "href": "http://electronicenoch.tumblr.com",
        "isOut": true
      }
      ]
    },
    "web": {
      "type": "chart",
      "category": "coder",
      "title": "Web Apps",
      "up": "coding",
      "color": 0,
      "nexts": [
      {
        "title": "Party Tag",
        "href": "http://www.thepartytag.com",
        "isOut": true
      },
      {
        "title": "BedPost",
        "href": "http://www.bedpost.me",
        "isOut": true
      }
      ]
    },
    "shows": {
      "type": "chart",
      "category": "puppeteer",
      "title": "shows",
      "up": "puppetry",
      "color": 0,
      "nexts": [
      {
        "title": "Bottom of the Mouffe",
        "href": "mouffe",
        "isOut": false
      },
      {
        "title": "Double Aspect Bright and Fair",
        "href": "aspect",
        "isOut": false
      },
      {
        "title": "Food for the Gods",
        "href": "food",
        "isOut": false
      }
      ]
    },
    "skills": {
      "type": "info",
      "category": "skills",
      "title": "Skill Hoarder",
      "up": "index",
      "color": 1,
      "text": "Managerial: <strong>Conflict resolution</strong>, <strong>Curriculum writing</strong>, <strong>Workshop facilitation</strong>, Languages: <strong>English</strong>, <strong>Spanish</strong>, Editing: <strong>Copy and content</strong>, <strong>Sound (Garageband, Audacity)</strong>, Technical: <strong>Construction and carpentry</strong>, <strong>Light and sound board</strong>, <strong>Light hanging and focusing</strong>, <strong>Puppet design and construction</strong>, <strong>Basic circuitry</strong>, <strong>Mechanical problem-solving</strong>, Sewing: <strong>Costume design</strong>, <strong>Pattern-making</strong>, <strong>Sewing</strong>, <strong>Embroidery</strong>, <strong>Basic tailoring</strong>."
    }
  }

})();