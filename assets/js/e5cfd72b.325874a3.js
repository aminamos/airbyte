"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[4981],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),h=o,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||r;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},12204:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const r={},i="Google Sheets",l={unversionedId:"integrations/destinations/google-sheets",id:"integrations/destinations/google-sheets",title:"Google Sheets",description:"The Google Sheets Destination is configured to push data to a single Google Sheets spreadsheet with multiple Worksheets as streams. To replicate data to multiple spreadsheets, you can create multiple instances of the Google Sheets Destination in your Airbyte instance.",source:"@site/../docs/integrations/destinations/google-sheets.md",sourceDirName:"integrations/destinations",slug:"/integrations/destinations/google-sheets",permalink:"/integrations/destinations/google-sheets",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/destinations/google-sheets.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Google Cloud Storage (GCS)",permalink:"/integrations/destinations/gcs"},next:{title:"Kafka",permalink:"/integrations/destinations/kafka"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Set up Google Sheets",id:"step-1-set-up-google-sheets",level:2},{value:"Google Account",id:"google-account",level:3},{value:"If you don&#39;t have a Google Account",id:"if-you-dont-have-a-google-account",level:4},{value:"Google Sheets (Google Spreadsheets)",id:"google-sheets-google-spreadsheets",level:3},{value:"Step 2: Set up the Google Sheets destination connector in Airbyte",id:"step-2-set-up-the-google-sheets-destination-connector-in-airbyte",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Note:",id:"note",level:4},{value:"Data type mapping",id:"data-type-mapping",level:3},{value:"Features &amp; Supported sync modes",id:"features--supported-sync-modes",level:3},{value:"Rate Limiting &amp; Performance Considerations",id:"rate-limiting--performance-considerations",level:3},{value:'<a name="limitations"></a>Google Sheets Limitations',id:"google-sheets-limitations",level:3},{value:"Future improvements:",id:"future-improvements",level:4},{value:"Changelog",id:"changelog",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"google-sheets"},"Google Sheets"),(0,o.kt)("p",null,"The Google Sheets Destination is configured to push data to a single Google Sheets spreadsheet with multiple Worksheets as streams. To replicate data to multiple spreadsheets, you can create multiple instances of the Google Sheets Destination in your Airbyte instance.\nThis page guides you through the process of setting up the Google Sheets destination connector."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Google Account"),(0,o.kt)("li",{parentName:"ul"},"Google Spreadsheet URL")),(0,o.kt)("h2",{id:"step-1-set-up-google-sheets"},"Step 1: Set up Google Sheets"),(0,o.kt)("h3",{id:"google-account"},"Google Account"),(0,o.kt)("h4",{id:"if-you-dont-have-a-google-account"},"If you don't have a Google Account"),(0,o.kt)("p",null,"Visit the ",(0,o.kt)("a",{parentName:"p",href:"https://support.google.com/accounts/answer/27441?hl=en"},"Google Support")," and create your Google Account."),(0,o.kt)("h3",{id:"google-sheets-google-spreadsheets"},"Google Sheets (Google Spreadsheets)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Once you acquire your Google Account, simply open the ",(0,o.kt)("a",{parentName:"li",href:"https://support.google.com/docs/answer/6000292?hl=en&co=GENIE.Platform%3DDesktop"},"Google Support")," to create the fresh empty Google to be used as a destination for your data replication, or if already have one - follow the next step."),(0,o.kt)("li",{parentName:"ol"},"You will need the link of the Spreadsheet you'd like to sync. To get it, click Share button in the top right corner of Google Sheets interface, and then click Copy Link in the dialog that pops up.\nThese two steps are highlighted in the screenshot below:")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(14333).Z,width:"737",height:"585"})),(0,o.kt)("h2",{id:"step-2-set-up-the-google-sheets-destination-connector-in-airbyte"},"Step 2: Set up the Google Sheets destination connector in Airbyte"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"For Airbyte Cloud:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://cloud.airbyte.io/workspaces"},"Log into your Airbyte Cloud")," account."),(0,o.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,o.kt)("strong",{parentName:"li"},"Destinations"),". In the top-right corner, click ",(0,o.kt)("strong",{parentName:"li"},"+ new destination"),"."),(0,o.kt)("li",{parentName:"ol"},"On the source setup page, select ",(0,o.kt)("strong",{parentName:"li"},"Google Sheets")," from the Source type dropdown and enter a name for this connector."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("inlineCode",{parentName:"li"},"Sign in with Google"),"."),(0,o.kt)("li",{parentName:"ol"},"Log in and Authorize to the Instagram account and click ",(0,o.kt)("inlineCode",{parentName:"li"},"Set up source"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"For Airbyte Open Source:")),(0,o.kt)("p",null,"At this moment the ",(0,o.kt)("inlineCode",{parentName:"p"},"Google Sheets Destination")," works only with Airbyte Cloud."),(0,o.kt)("h3",{id:"output-schema"},"Output schema"),(0,o.kt)("p",null,"Each worksheet in the selected spreadsheet will be the output as a separate source-connector stream. The data is coerced to string before the output to the spreadsheet. The nested data inside of the source connector data is normalized to the ",(0,o.kt)("inlineCode",{parentName:"p"},"first-level-nesting")," and represented as string, this produces nested lists and objects to be a string rather than normal lists and objects, the further data processing is required if you need to analyze the data."),(0,o.kt)("p",null,"Airbyte only supports replicating ",(0,o.kt)("inlineCode",{parentName:"p"},"Grid Sheets"),", which means the text raw data only could be replicated to the target spreadsheet. See the ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/sheets#SheetType"},"Google Sheets API docs")," for more info on all available sheet types."),(0,o.kt)("h4",{id:"note"},"Note:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The output columns are ordered alphabetically. The output columns should not be reordered manually after the sync, this could cause the data corruption for all next syncs."),(0,o.kt)("li",{parentName:"ul"},"The underlying process of record normalization is applied to avoid data corruption during the write process. This handles two scenarios:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"UnderSetting - when record has less keys (columns) than catalog declares"),(0,o.kt)("li",{parentName:"ol"},"OverSetting - when record has more keys (columns) than catalog declares")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"EXAMPLE:\n\n- UnderSetting:\n    * Catalog:\n        - has 3 entities:\n            [ 'id', 'key1', 'key2' ]\n                        ^\n    * Input record:\n        - missing 1 entity, compare to catalog\n            { 'id': 123,    'key2': 'value' }\n                            ^\n    * Result:\n        - 'key1' has been added to the record, because it was declared in catalog, to keep the data structure.\n            {'id': 123, 'key1': '', {'key2': 'value'} }\n                            ^\n- OverSetting:\n    * Catalog:\n        - has 3 entities:\n            [ 'id', 'key1', 'key2',   ]\n                                    ^\n    * Input record:\n        - doesn't have entity 'key1'\n        - has 1 more enitity, compare to catalog 'key3'\n            { 'id': 123,     ,'key2': 'value', 'key3': 'value' }\n                            ^                      ^\n    * Result:\n        - 'key1' was added, because it expected be the part of the record, to keep the data structure\n        - 'key3' was dropped, because it was not declared in catalog, to keep the data structure\n            { 'id': 123, 'key1': '', 'key2': 'value',   }\n                            ^                          ^\n")),(0,o.kt)("h3",{id:"data-type-mapping"},"Data type mapping"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Any Type"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"string"))))),(0,o.kt)("h3",{id:"features--supported-sync-modes"},"Features & Supported sync modes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Ful-Refresh Overwrite"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Ful-Refresh Append"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Incremental Append"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Incremental Append-Deduplicate"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Yes")))),(0,o.kt)("h3",{id:"rate-limiting--performance-considerations"},"Rate Limiting & Performance Considerations"),(0,o.kt)("p",null,"At the time of writing, the ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/sheets/api/limits"},"Google API rate limit")," is 100 requests per 100 seconds per user and 500 requests per 100 seconds per project. Airbyte batches requests to the API in order to efficiently pull data and respects these rate limits. It is recommended that you use the same service user ","(",'see the "Creating a service user" section below for more information on how to create one',")"," for no more than 3 instances of the Google Sheets Destination to ensure high transfer speeds.\nPlease be aware of the ",(0,o.kt)("a",{parentName:"p",href:"#limitations"},"Google Spreadsheet limitations")," before you configure your airbyte data replication using Destination Google Sheets"),(0,o.kt)("h3",{id:"google-sheets-limitations"},(0,o.kt)("a",{name:"limitations"}),"Google Sheets Limitations"),(0,o.kt)("p",null,"During the upload process and from the data storage perspective there are some limitations that should be considered beforehands:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Maximum of 5 Million Cells"))),(0,o.kt)("p",null,"A Google Sheets document can have a maximum of 5 million cells. These can be in a single worksheet or in multiple sheets.\nIn case you already have the 5 million limit reached in fewer columns, it will not allow you to add more columns (and vice versa, i.e., if 5 million cells limit is reached with a certain number of rows, it will not allow more rows)."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Maximum of 18,278 Columns"))),(0,o.kt)("p",null,"At max, you can have 18,278 columns in Google Sheets in a worksheet."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Up to 200 Worksheets in a Spreadsheet"))),(0,o.kt)("p",null,"You cannot create more than 200 worksheets within single spreadsheet."),(0,o.kt)("h4",{id:"future-improvements"},"Future improvements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Handle multiple spreadsheets to split big amount of data into parts, once the main spreadsheet is full and cannot be extended more, due to ",(0,o.kt)("a",{parentName:"li",href:"#limitations"},"limitations"),".")),(0,o.kt)("h2",{id:"changelog"},"Changelog"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Version"),(0,o.kt)("th",{parentName:"tr",align:null},"Date"),(0,o.kt)("th",{parentName:"tr",align:null},"Pull Request"),(0,o.kt)("th",{parentName:"tr",align:null},"Subject"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0.1.1"),(0,o.kt)("td",{parentName:"tr",align:null},"2022-06-15"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14751"},"14751")),(0,o.kt)("td",{parentName:"tr",align:null},"Yield state only when records saved")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0.1.0"),(0,o.kt)("td",{parentName:"tr",align:null},"2022-04-26"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12135"},"12135")),(0,o.kt)("td",{parentName:"tr",align:null},"Initial Release")))))}d.isMDXComponent=!0},14333:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/google_spreadsheet_url-fa18d9fbcc9e1f66a947090b68b55181.png"}}]);