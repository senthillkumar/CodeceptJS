(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{285:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("h2",{attrs:{id:"local"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#local"}},[e._v("#")]),e._v(" Local")]),e._v(" "),a("p",[e._v("Use NPM install CodeceptJS:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --save-dev codeceptjs\n")])])]),a("p",[e._v("and started as")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("./node_modules/.bin/codeceptjs\n")])])]),a("p",[e._v("To use it with WebDriver install webdriverio package:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" webdriverio --save-dev\n")])])]),a("p",[e._v("To use it with Protractor install protractor package:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" protractor --save-dev\n")])])]),a("p",[e._v("To use it with Nightmare install nightmare and nightmare-upload packages:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" nightmare --save-dev\n")])])]),a("p",[e._v("To use it with Puppeteer install puppeteer package:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" puppeteer --save-dev\n")])])]),a("h2",{attrs:{id:"webdriver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webdriver"}},[e._v("#")]),e._v(" WebDriver")]),e._v(" "),a("p",[e._v("WebDriver based helpers like WebDriver, Protractor, Selenium WebDriver will require "),a("a",{attrs:{href:"http://codecept.io/helpers/WebDriver/#selenium-installation",target:"_blank",rel:"noopener noreferrer"}},[e._v("Selenium Server"),a("OutboundLink")],1),e._v(" or "),a("a",{attrs:{href:"http://codecept.io/helpers/WebDriver/#phantomjs-installation",target:"_blank",rel:"noopener noreferrer"}},[e._v("PhantomJS"),a("OutboundLink")],1),e._v(" installed. They will also require ChromeDriver or GeckoDriver to run corresponding browsers.")]),e._v(" "),a("p",[e._v("We recommend to install them manually or use NPM packages:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.npmjs.com/package/selenium-standalone",target:"_blank",rel:"noopener noreferrer"}},[e._v("Selenium Standalone"),a("OutboundLink")],1),e._v(" to install and run Selenium, ChromeDriver, Firefox Driver with one package.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.npmjs.com/package/phantomjs-prebuilt",target:"_blank",rel:"noopener noreferrer"}},[e._v("Phantomjs"),a("OutboundLink")],1),e._v(": to install and execute Phantomjs")])]),e._v(" "),a("p",[e._v("or use "),a("a",{attrs:{href:"https://github.com/SeleniumHQ/docker-selenium",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker"),a("OutboundLink")],1),e._v(" for headless browser testing.")]),e._v(" "),a("p",[e._v("Launch Selenium with Chrome browser inside a Docker container:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("docker run --net"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("host selenium/standalone-chrome\n")])])]),a("h2",{attrs:{id:"global"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#global"}},[e._v("#")]),e._v(" Global")]),e._v(" "),a("p",[e._v("CodeceptJS can be installed via NPM globally:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("sudo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g codeceptjs webdriverio\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# or")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("sudo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g codeceptjs protractor\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# or")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("sudo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g codeceptjs puppeteer\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# or")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("sudo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g codeceptjs nightmare\n")])])]),a("p",[e._v("then it can be started as")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("codeceptjs\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);