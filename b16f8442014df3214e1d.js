webpackJsonp([29,188,189,190,191,192],{774:function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r;return r="string"==typeof o[e]?o[e]:1===t?o[e].one:o[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"om "+r:r+" siden":r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o={lessThanXSeconds:{one:"mindre end et sekund",other:"mindre end {{count}} sekunder"},xSeconds:{one:"1 sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minut",lessThanXMinutes:{one:"mindre end et minut",other:"mindre end {{count}} minutter"},xMinutes:{one:"1 minut",other:"{{count}} minutter"},aboutXHours:{one:"cirka 1 time",other:"cirka {{count}} timer"},xHours:{one:"1 time",other:"{{count}} timer"},xDays:{one:"1 dag",other:"{{count}} dage"},aboutXMonths:{one:"cirka 1 måned",other:"cirka {{count}} måneder"},xMonths:{one:"1 måned",other:"{{count}} måneder"},aboutXYears:{one:"cirka 1 år",other:"cirka {{count}} år"},xYears:{one:"1 år",other:"{{count}} år"},overXYears:{one:"over 1 år",other:"over {{count}} år"},almostXYears:{one:"næsten 1 år",other:"næsten {{count}} år"}};e.exports=t.default},775:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(206),o=function(e){return e&&e.__esModule?e:{default:e}}(r),a=(0,o.default)({LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd [d.] D. MMMM YYYY [kl.] HH:mm"});t.default=a,e.exports=t.default},776:function(e,t,n){"use strict";function r(e,t,n,r){return o[e]}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o={lastWeek:"[sidste] dddd [kl.] LT",yesterday:"[i går kl.] LT",today:"[i dag kl.] LT",tomorrow:"[i morgen kl.] LT",nextWeek:"[på] dddd [kl.] LT",other:"L"};e.exports=t.default},777:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return Number(e)+"."}Object.defineProperty(t,"__esModule",{value:!0});var a=n(208),u=r(a),d=n(207),i=r(d),s={narrow:["sø","ma","ti","on","to","fr","lø"],short:["søn","man","tir","ons","tor","fre","lør"],long:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},l={short:["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"],long:["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"]},f={uppercase:["AM","PM"],lowercase:["am","pm"],long:["a.m.","p.m."]},m={ordinalNumber:o,weekday:(0,u.default)(s,"long"),weekdays:(0,i.default)(s,"long"),month:(0,u.default)(l,"long"),months:(0,i.default)(l,"long"),timeOfDay:(0,u.default)(f,"long",function(e){return e/12>=1?1:0}),timesOfDay:(0,i.default)(f,"long")};t.default=m,e.exports=t.default},778:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(209),a=r(o),u=n(211),d=r(u),i=n(210),s=r(i),l=n(212),f=r(l),m=/^(\d+)(th|st|nd|rd)?/i,c={narrow:/^(sø|ma|ti|on|to|fr|lø)/i,short:/^(søn|man|tir|ons|tor|fre|lør)/i,long:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},g={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},p={short:/^(jan|feb|mar|apr|maj|jun|jul|aug|sep|okt|nov|dec)/i,long:/^(januar|februar|marts|april|maj|juni|juli|august|september|oktober|november|december)/i},h={any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},M={short:/^(am|pm)/i,long:/^([ap]\.?\s?m\.?)/i},k={any:[/^a/i,/^p/i]},b={ordinalNumbers:(0,s.default)(m),ordinalNumber:f.default,weekdays:(0,a.default)(c,"long"),weekday:(0,d.default)(g,"any"),months:(0,a.default)(p,"long"),month:(0,d.default)(h,"any"),timesOfDay:(0,a.default)(M,"long"),timeOfDay:(0,d.default)(k,"any")};t.default=b,e.exports=t.default},936:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(774),a=r(o),u=n(775),d=r(u),i=n(776),s=r(i),l=n(777),f=r(l),m=n(778),c=r(m),g={formatDistance:a.default,formatLong:d.default,formatRelative:s.default,localize:f.default,match:c.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=g,e.exports=t.default}});
//# sourceMappingURL=b16f8442014df3214e1d.js.map