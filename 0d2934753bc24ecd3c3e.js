webpackJsonp([21,123,124,125,126,127],{839:function(e,t,o){"use strict";function n(e,t,o){o=o||{};var n;return n="string"==typeof a[e]?a[e]:1===t?a[e].one:a[e].other.replace("{{count}}",t),o.addSuffix?o.comparison>0?"in "+n:n+" fa":n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var a={lessThanXSeconds:{one:"meno di un secondo",other:"meno di {{count}} secondi"},xSeconds:{one:"un secondo",other:"{{count}} secondi"},halfAMinute:"alcuni secondi",lessThanXMinutes:{one:"meno di un minuto",other:"meno di {{count}} minuti"},xMinutes:{one:"un minuto",other:"{{count}} minuti"},aboutXHours:{one:"circa un'ora",other:"circa {{count}} ore"},xHours:{one:"un'ora",other:"{{count}} ore"},xDays:{one:"un giorno",other:"{{count}} giorni"},aboutXMonths:{one:"circa un mese",other:"circa {{count}} mesi"},xMonths:{one:"un mese",other:"{{count}} mesi"},aboutXYears:{one:"circa un anno",other:"circa {{count}} anni"},xYears:{one:"un anno",other:"{{count}} anni"},overXYears:{one:"piú di un anno",other:"piú di {{count}} anni"},almostXYears:{one:"quasi un anno",other:"quasi {{count}} anni"}};e.exports=t.default},840:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(206),a=function(e){return e&&e.__esModule?e:{default:e}}(n),u=(0,a.default)({LT:"h:mm aa",LTS:"h:mm:ss aa",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY h:mm aa",LLLL:"dddd, MMMM D YYYY h:mm aa"});t.default=u,e.exports=t.default},841:function(e,t,o){"use strict";function n(e,t,o,n){return a[e]}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var a={lastWeek:"[last] dddd [at] LT",yesterday:"[yesterday at] LT",today:"[today at] LT",tomorrow:"[tomorrow at] LT",nextWeek:"dddd [at] LT",other:"L"};e.exports=t.default},842:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){return Number(e)+"º"}Object.defineProperty(t,"__esModule",{value:!0});var u=o(208),r=n(u),i=o(207),d=n(i),s={narrow:["do","lu","ma","me","gi","ve","sa"],short:["dom","lun","mar","mer","gio","ven","sab"],long:["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"]},l={short:["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],long:["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"]},f={uppercase:["AM","PM"],lowercase:["am","pm"],long:["a.m.","p.m."]},c={ordinalNumber:a,weekday:(0,r.default)(s,"long"),weekdays:(0,d.default)(s,"long"),month:(0,r.default)(l,"long"),months:(0,d.default)(l,"long"),timeOfDay:(0,r.default)(f,"long",function(e){return e/12>=1?1:0}),timesOfDay:(0,d.default)(f,"long")};t.default=c,e.exports=t.default},843:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(209),u=n(a),r=o(211),i=n(r),d=o(210),s=n(d),l=o(212),f=n(l),c=/^(\d+)(th|st|nd|rd)?/i,m={narrow:/^(su|mo|tu|we|th|fr|sa)/i,short:/^(sun|mon|tue|wed|thu|fri|sat)/i,long:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},y={any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},h={short:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,long:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},g={any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},p={short:/^(am|pm)/i,long:/^([ap]\.?\s?m\.?)/i},M={any:[/^a/i,/^p/i]},b={ordinalNumbers:(0,s.default)(c),ordinalNumber:f.default,weekdays:(0,u.default)(m,"long"),weekday:(0,i.default)(y,"any"),months:(0,u.default)(h,"long"),month:(0,i.default)(g,"any"),timesOfDay:(0,u.default)(p,"long"),timeOfDay:(0,i.default)(M,"any")};t.default=b,e.exports=t.default},949:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(839),u=n(a),r=o(840),i=n(r),d=o(841),s=n(d),l=o(842),f=n(l),c=o(843),m=n(c),y={formatDistance:u.default,formatLong:i.default,formatRelative:s.default,localize:f.default,match:m.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=y,e.exports=t.default}});
//# sourceMappingURL=0d2934753bc24ecd3c3e.js.map