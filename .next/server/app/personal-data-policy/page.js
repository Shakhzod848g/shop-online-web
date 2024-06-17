(()=>{var e={};e.id=209,e.ids=[209],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},27818:(e,s,r)=>{"use strict";r.r(s),r.d(s,{GlobalError:()=>l.a,__next_app__:()=>h,originalPathname:()=>p,pages:()=>x,routeModule:()=>o,tree:()=>a});var i=r(50482),n=r(69108),t=r(62563),l=r.n(t),c=r(68300),d={};for(let e in c)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>c[e]);r.d(s,d);let a=["",{children:["personal-data-policy",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,10562)),"C:\\Users\\hp\\Desktop\\online-shop\\app\\personal-data-policy\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,24697))).default(e)],apple:[],openGraph:[],twitter:[],manifest:"/manifest.webmanifest"}}]},{layout:[()=>Promise.resolve().then(r.bind(r,15856)),"C:\\Users\\hp\\Desktop\\online-shop\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,1429)),"C:\\Users\\hp\\Desktop\\online-shop\\app\\not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,24697))).default(e)],apple:[],openGraph:[],twitter:[],manifest:"/manifest.webmanifest"}}],x=["C:\\Users\\hp\\Desktop\\online-shop\\app\\personal-data-policy\\page.tsx"],p="/personal-data-policy/page",h={require:r,loadChunk:()=>Promise.resolve()},o=new i.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/personal-data-policy/page",pathname:"/personal-data-policy",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:a}})},90614:(e,s,r)=>{Promise.resolve().then(r.bind(r,9918))},10859:(e,s,r)=>{"use strict";r.d(s,{Z:()=>x});var i=r(95344),n=r(3729),t=r(56506);let l=({text:e,href:s,last:r=!1})=>r?i.jsx("a",{className:"last-crumb breadcrumbs__item__link",children:i.jsx("span",{children:e})}):i.jsx(t.default,{href:s,className:"breadcrumbs__item__link",children:i.jsx("span",{children:e})});var c=r(42126),d=r(8428);let a=e=>e.split("?")[0].split("/").filter(e=>e.length>0),x=({getTextGenerator:e,getDefaultTextGenerator:s})=>{let r=(0,d.usePathname)(),x=(0,d.useSearchParams)(),{lang:p,translations:h}=(0,c.J)(),o=(0,n.useMemo)(function(){let i=a(r),n=a(r);return[...i.map((r,t)=>{let l=n[t].replace("[","").replace("]",""),c="/"+i.slice(0,t+1).join("/");return{href:c,textGenerator:e(l,x.getAll("")),text:s(r,c)}})]},[r,e,x,s,p]);return i.jsx("div",{className:"container breadcrumbs__container",children:(0,i.jsxs)("ul",{className:"list-reset breadcrumbs",children:[i.jsx("li",{className:"breadcrumbs__item",children:i.jsx(t.default,{href:"/",className:"breadcrumbs__item__link first-crumb",children:h[p].breadcrumbs.main})}),o.map((e,s)=>e.text?i.jsx("li",{className:"breadcrumbs__item",children:(0,n.createElement)(l,{...e,key:s,last:s===o.length-1})},s):"")]})})}},9918:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>d});var i=r(95344),n=r(10859),t=r(12622),l=r(24131),c=r.n(l);let d=()=>{let{getDefaultTextGenerator:e,getTextGenerator:s}=(0,t.h)("personal_data_policy");return(0,i.jsxs)("main",{children:[i.jsx(n.Z,{getDefaultTextGenerator:e,getTextGenerator:s}),i.jsx("section",{className:c().policy,children:(0,i.jsxs)("div",{className:"container",children:[i.jsx("h1",{children:"Политика обработки персональных данных"}),i.jsx("p",{children:i.jsx("strong",{children:"1. ТЕРМИНЫ И ОПРЕДЕЛЕНИЯ"})}),(0,i.jsxs)("p",{children:["1.1. ",i.jsx("strong",{children:"Персональные данные "}),"— любая информация, относящаяся к определенному или определяемому на основании такой информации физическому лицу (субъекту персональных данных), в том числе его фамилия, имя, отчество, год, месяц, дата и место рождения, адрес, адрес электронной почты, телефонный номер (домашний, сотовый),\xa0 другая информация."]}),(0,i.jsxs)("p",{children:["1.2. ",i.jsx("strong",{children:"Обработка персональных данных "}),"— действия (операции) с персональными данными, включая их сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), использование, извлечение, распространение их путем передачи, в том числе трансграничной, обезличивание, блокирование, уничтожение, удаление, в том числе в целях."]}),(0,i.jsxs)("p",{children:["1.3. ",i.jsx("strong",{children:"Конфиденциальность персональных данных "}),"— обязательное для соблюдения назначенного ответственного лица, получившего доступ к персональным данным, требование не допускать их распространения без согласия субъекта или иного законного основания."]}),(0,i.jsxs)("p",{children:["1.4. ",i.jsx("strong",{children:"Распространение персональных данных "}),"— действия, направленные на передачу персональных данных определенному кругу лиц (передача персональных данных) или на ознакомление с персональными данными неограниченного круга лиц, в том числе обнародование персональных данных в средствах массовой информации, размещение в информационно-телекоммуникационных сетях или предоставление доступа к персональным данным каким-либо иным способом."]}),(0,i.jsxs)("p",{children:["1.5. ",i.jsx("strong",{children:"Использование персональных данных "}),"— действия (операции) с персональными данными, совершаемые в целях принятия решений или совершения иных действий, порождающих юридические последствия в отношении субъектов персональных данных либо иным образом затрагивающих их права и свободы или права и свободы других лиц."]}),(0,i.jsxs)("p",{children:["1.6. ",i.jsx("strong",{children:"Блокирование персональных данных "}),"— временное прекращение сбора, систематизации, накопления, использования, распространения персональных данных, в том числе их передачи."]}),(0,i.jsxs)("p",{children:["1.7. ",i.jsx("strong",{children:"Уничтожение персональных данных "}),"— действия, в результате которых невозможно восстановить содержание персональных данных в информационной системе персональных данных или в результате которых уничтожаются материальные носители персональных данных."]}),(0,i.jsxs)("p",{children:["1.8. ",i.jsx("strong",{children:"Обезличивание персональных данных "}),"— действия, в результате которых невозможно без использования дополнительной информации определить принадлежность персональных данных конкретному субъекту."]}),(0,i.jsxs)("p",{children:["1.9. ",i.jsx("strong",{children:"Общедоступные персональные данные "}),"— персональные данные, доступ неограниченного круга лиц к которым предоставлен с согласия субъекта или на которые в соответствии с федеральными законами не распространяется требование соблюдения конфиденциальности."]}),(0,i.jsxs)("p",{children:["1.10",i.jsx("strong",{children:". Информация "}),"— сведения (сообщения, данные) независимо от формы их представления."]}),(0,i.jsxs)("p",{children:["1.11. ",i.jsx("strong",{children:"Клиент (субъект персональных данных) "}),"- физическое лицо,\xa0 потребитель товаров/услуг ООО \xabПанавто\xbb, далее \xabКомпания\xbb."]}),(0,i.jsxs)("p",{children:["1.12. ",i.jsx("strong",{children:"Оператор "}),"- государственный орган, муниципальный орган, юридическое или физическое лицо, самостоятельно или совместно с другими лицами организующие и (или) осуществляющие обработку персональных данных, а также определяющие цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными. В рамках настоящего документа Операторами являются ООО Панавто\xbb (Продавец) - 143085, Московская область, Одинцовский р-н, р.п. Заречье, ул. Торговая, д.4, стр.1, а также другие организации, с которыми Операторы заключили / заключат соответствующие Договоры для реализации целей обработки персональных данных Клиентов, определенных условиями настоящего Положения, в частности для направления Клиентам по различным средствам связи рекламной информации Операторов и т.д., а также договоры в целях проведения социологических и других исследований, в том числе исследований индекса удовлетворенности потребителей качеством предоставляемых Операторами товаров и услуг, проводимых Операторами самостоятельно, или с привлечением третьих лиц, для осуществления рассылок."]}),i.jsx("p",{children:"\xa0"}),i.jsx("p",{children:i.jsx("strong",{children:"2. ОБЩИЕ ПОЛОЖЕНИЯ"})}),i.jsx("p",{children:"2.1. Настоящая Политика обработки и защиты персональных данных Клиентов ООО \xabПанавто\xbb (далее — Положение) разработано в соответствии с Конституцией Российской Федерации, Гражданским кодексом Российской Федерации, Федеральным законом \xabОб информации, информационных технологиях и о защите информации\xbb, Федеральным законом \xabО персональных данных\xbb, иными нормативными правовыми актами, действующими на территории Российской Федерации."}),i.jsx("p",{children:"2.2. Цель разработки Положения — определение порядка обработки и защиты персональных данных всех Клиентов Компании, данные которых подлежат обработке, на основании полномочий оператора; обеспечение защиты прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну, а также установление ответственности должностных лиц, имеющих доступ к персональным данным, за невыполнение требований норм, регулирующих обработку и защиту персональных данных."}),i.jsx("p",{children:"\xa0"}),i.jsx("p",{children:i.jsx("strong",{children:"3. ПРИНЦИПЫ ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ"})}),i.jsx("p",{children:"3.1. Обработка персональных данных в Компании основана на следующих принципах:"}),(0,i.jsxs)("ul",{children:[i.jsx("li",{children:"законности целей и способов обработки персональных данных и добросовестности;"}),i.jsx("li",{children:"соответствия целей обработки персональных данных целям, заранее определенным и заявленным при сборе персональных данных, а также полномочиям Компании;"}),i.jsx("li",{children:"соответствия объема и характера обрабатываемых персональных данных, способов обработки персональных данных целям обработки персональных данных;"}),i.jsx("li",{children:"достоверности персональных данных, их актуальности и достаточности для целей обработки, недопустимости обработки избыточных по отношению к целям сбора персональных данных;"}),i.jsx("li",{children:"легитимности организационных и технических мер по обеспечению безопасности персональных данных;"}),i.jsx("li",{children:"непрерывности повышения уровня знаний работников Компании в сфере обеспечения безопасности персональных данных при их обработке;"}),i.jsx("li",{children:"стремления к постоянному совершенствованию системы защиты персональных данных."})]}),i.jsx("p",{children:"\xa0"}),i.jsx("p",{children:i.jsx("strong",{children:"4. ЦЕЛИ ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ"})}),i.jsx("p",{children:"4.1. Обработка персональных данных в Компании осуществляется с целью:"}),(0,i.jsxs)("ul",{children:[i.jsx("li",{children:"планирования операционной деятельности розничных подразделений Компании;"}),i.jsx("li",{children:"использования для автоматизации процессов формирования первичных документов (договоров, счетов на оплату, универсальных передаточных документов, различных Актов, паспортов транспортных средств,\xa0 Наряд-заказом, предварительных наряд-заказов, накладных и т.п.);"}),i.jsx("li",{children:"идентификации клиента при его обращении в Компанию по телефону и/или электронным средствам связи;"}),i.jsx("li",{children:"идентификации клиента при осуществлении основных видов-деятельности Компании, предусмотренных Уставом;"}),i.jsx("li",{children:"использования для автоматизации процессов документарного оформления бизнес–процессов при продаже автомобилей, оказании услуг (выполнения работ) по ремонту и техническому обслуживанию автомобилей и формирования отчетов, при продаже запчастей, аксессуаров;"}),i.jsx("li",{children:"формирования единой клиентской базы покупателей автомобилей\xa0 для автоматизации задач послепродажного обслуживания и маркетинга;"}),i.jsx("li",{children:"обеспечения рекламной деятельности Компании;"}),i.jsx("li",{children:"использования для автоматизации процессов формирования отчетных документов по\xa0 деятельности страховых агентов;"}),i.jsx("li",{children:"автоматизации, оптимизации операционной деятельности Компании;"}),i.jsx("li",{children:"ведения и актуализации клиентской базы;"}),i.jsx("li",{children:"получения и исследования статистических данных об объемах продаж и качестве оказываемых услуг;"}),i.jsx("li",{children:"проведения маркетинговых программ;"}),i.jsx("li",{children:"изучения конъюнктуры рынка автомобилей, автомобильных запасных частей и аксессуаров, услуг по ремонту автомобилей;"}),i.jsx("li",{children:"проведению опросов и исследований, направленных на выявление удовлетворенности/неудовлетворенности клиентов, постоянного совершенствования уровня предоставляемых услуг;"}),i.jsx("li",{children:"информирования клиентов по каналам связи (СМС-рассылку, рассылку мультимедийных сообщений через мобильные приложения и т.д.) о предлагаемых Компанией автомобилях, запасных частях и аксессуарах, оказываемых услугах, проводимых бонусных, сервисных мероприятий, рекламных, отзывных акций и т.д..;"}),i.jsx("li",{children:"рекламирования и иного любого продвижения товаров и услуг Операторов на рынке путем осуществления прямых контактов с субъектами персональных данных;"}),i.jsx("li",{children:"реализации страховых продуктов, в том числе, но не ограничиваясь, оформление полисов КАСКО, ОСАГО и т.д.;"}),i.jsx("li",{children:"технической поддержки при обработке информации, документации и персональных данных с использованием средств автоматизации и без такого использования."})]}),i.jsx("p",{children:"4.2. В том числе обработка персональных данных осуществляется в автоматизированных информационных системах. Состав персональных данных, обрабатываемых с использованием информационных систем персональных данных Компании должен соответствовать целям и задачам сбора, обработки и использования персональных данных."}),i.jsx("p",{children:"\xa0"}),i.jsx("p",{children:i.jsx("strong",{children:"5. ПОРЯДОК ПОЛУЧЕНИЯ (СБОРА) ПЕРСОНАЛЬНЫХ ДАННЫХ"})}),i.jsx("p",{children:"5.1.Все персональные данные Клиента получаются у него лично с его письменного согласия либо\xa0 в электронном виде, после прочтения согласия и нажатия соответствующей кнопки, кроме случаев, предусмотренных законами РФ."}),i.jsx("p",{children:"5.2.Согласие Клиента на использование его персональных данных хранится в Компании в бумажном и/или электронном виде."}),(0,i.jsxs)("p",{children:["5.3. Согласие субъекта на обработку персональных данных действует в течение всего срока действия договора, а также"," ",i.jsx("strong",{children:"в течение 10 лет "}),"с даты прекращения действия договорных отношений Клиента с Компанией. По истечении указанного срока действие согласия считается продленным на каждые следующие пять лет при отсутствии сведений о его отзыве."]}),i.jsx("p",{children:"5.4. Если персональные данные Клиента возможно получить только у третьей стороны, Клиент должен быть уведомлен об этом заранее и от него должно быть получено письменное согласие. Третье лицо, предоставляющее персональные данные Клиента, должно обладать согласием субъекта на передачу персональных данных Компании. Компания обязана получить подтверждение от третьего лица, передающего персональные данные Клиента о том, что персональные данные передаются с его согласия. Компания обязана при взаимодействии с третьими лицами заключить с ними соглашение о конфиденциальности информации, касающейся персональных данных Клиентов."}),i.jsx("p",{children:"5.5. Компания обязана сообщить Клиенту о целях, предполагаемых источниках и способах получения персональных данных, а также о характере подлежащих получению персональных данных и последствиях отказа Клиента персональных данных дать письменное согласие на их получение."}),i.jsx("p",{children:"5.6. Обработка персональных данных Клиентов без их согласия осуществляется в следующих случаях:"}),i.jsx("p",{children:"5.6.1. Персональные данные являются общедоступными."}),i.jsx("p",{children:"5.6.2. По требованию полномочных государственных органов в случаях, предусмотренных федеральным законом."}),i.jsx("p",{children:"5.6.3. Обработка персональных данных осуществляется на основании федерального закона, устанавливающего ее цель, условия получения персональных данных и круг субъектов, персональные данные которых подлежат обработке, а также определяющего полномочия оператора."}),i.jsx("p",{children:"5.6.4. Обработка персональных данных осуществляется в целях заключения и исполнения договора, одной из сторон которого является субъект персональных данных – Клиент."}),i.jsx("p",{children:"5.6.5. Обработка персональных данных осуществляется для статистических целей при условии обязательного обезличивания персональных данных."}),i.jsx("p",{children:"5.6.6. В иных случаях, предусмотренных законом."}),i.jsx("p",{children:"5.7. Организация не имеет права получать и обрабатывать персональные данные Клиента о его расовой, национальной принадлежности, политических взглядах, религиозных или философских убеждениях, состоянии здоровья, интимной жизни."}),i.jsx("p",{children:"\xa0"}),i.jsx("p",{children:i.jsx("strong",{children:"6. ХРАНЕНИЕ ПЕРСОНАЛЬНЫХ ДАННЫХ"})}),i.jsx("p",{children:"6.1. \xa0Персональные данные Клиентов на бумажных носителях хранятся в сейфах."}),i.jsx("p",{children:"6.2. Персональные данные Клиентов в электронном виде хранятся в локальной компьютерной сети Компании, в электронных папках и файлах \xa0на сервере Компании."}),i.jsx("p",{children:"6.3. Документы, содержащие персональные данные Клиентов, хранятся в запирающихся шкафах (сейфах), обеспечивающих защиту от несанкционированного доступа. В конце рабочего дня все документы, содержащие персональные данные Клиентов, помещаются в шкафы (сейфы), обеспечивающие защиту от несанкционированного доступа."}),i.jsx("p",{children:"6.4. Защита доступа к электронным базам данных, содержащим персональные данные Клиентов, обеспечивается:"}),(0,i.jsxs)("ul",{children:[i.jsx("li",{children:"Использованием лицензированных антивирусных и антихакерских программ, не допускающих несанкционированный вход в локальную сеть Компании."}),i.jsx("li",{children:"Разграничением прав доступа с использованием учетной записи."}),i.jsx("li",{children:"Системой паролей: на уровне локальной компьютерной сети. Пароли устанавливаются Системным администратором Компании и сообщаются индивидуально сотрудникам, имеющим доступ к персональным данным Клиентов."})]}),i.jsx("p",{children:"6.5. Несанкционированный вход в ПК, в которых содержатся персональные данные Клиентов, блокируется паролем, который устанавливается Системным администратором и не подлежит разглашению."}),i.jsx("p",{children:"6.6. Все электронные папки и файлы, содержащие персональные данные Клиентов, защищаются паролем, который устанавливается непосредственным пользователем компьютера\xa0 и\xa0 в обязательном порядке изменяется каждые 90 (Девяносто)_ дней, при это нельзя использовать последние введенные 5 (Пять) паролей."}),i.jsx("p",{children:"6.7. Копировать и делать выписки персональных данных Клиента разрешается исключительно в служебных целях с письменного разрешения Генерального директора Компании."}),i.jsx("p",{children:"6.8. Ответы на письменные запросы других организаций и учреждений о персональных данных Клиентов даются только с письменного согласия самого Клиента, если иное не установлено законодательством. Ответы оформляются в письменном виде, на бланке Компании, и в том объеме, который позволяет не разглашать излишний объем персональных данных Клиента."}),i.jsx("p",{children:"\xa0"}),i.jsx("p",{children:i.jsx("strong",{children:"7. ПОРЯДОК ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ"})}),i.jsx("p",{children:"7.1. \xa0Субъект персональных данных предоставляет Компании \xa0достоверные сведения о себе."}),i.jsx("p",{children:"7.2. \xa0К обработке персональных данных Клиентов могут иметь доступ только сотрудники Компании, допущенные к работе с персональными данными Клиента и подписавшие Соглашение о неразглашении персональных данных Клиента."}),i.jsx("p",{children:"7.3. \xa0Поименный перечень сотрудников Компании, имеющих доступ к персональным данным Клиентов, определяется приказом Генерального директора Компании."}),i.jsx("p",{children:"7.4. \xa0Обработка персональных данных Клиента может осуществляться исключительно в целях установленных Положением и соблюдения законов и иных нормативных правовых актов РФ."}),i.jsx("p",{children:"7.5. При определении объема и содержания, обрабатываемых персональных данных Компания руководствуется Конституцией Российской Федерации, законом о персональных данных, и иными федеральными законами."}),i.jsx("p",{children:"\xa0"}),i.jsx("p",{children:i.jsx("strong",{children:"8. БЕЗОПАСНОСТЬ"})}),i.jsx("p",{children:"8.1. Компания проводит оценку вреда, который может быть причинен субъектам персональных данных и определяет угрозы безопасности персональных данных. В соответствии с выявленными актуальными угрозами Компания применяет необходимые и достаточные организационные и технические меры, включающие в себя использование средств защиты информации, обнаружение фактов несанкционированного доступа, восстановление персональных данных, установление правил доступа к персональным данным, а также контроль и оценку эффективности применяемых мер."}),i.jsx("p",{children:"8.2. В Компании назначены лица, ответственные за организацию обработки и обеспечения безопасности персональных данных."}),i.jsx("p",{children:"8.3. В Компании разработано, доведено до сведения сотрудников и применяется в работе \xabПоложение о персональных данных\xbb."}),i.jsx("p",{children:"8.4. Компания постоянно повышает уровень безопасности персональных данных благодаря периодическим внутренним аудитам и, при обнаружения несоответствий или слабых мест в защите, в самые короткие сроки устраняет их причины."}),i.jsx("p",{children:"8.5.Руководство Компании осознает необходимость и заинтересовано в обеспечении должного как с точки зрения требований нормативных документов РФ, так и обоснованного с точки зрения оценки рисков для бизнеса уровня безопасности персональных данных, обрабатываемых в рамках выполнения основных видов деятельности Компании."}),i.jsx("p",{children:"Настоящие Стандарты являются общедоступным документом и подлежат размещению на официальном сайте."})]})})]})}},12622:(e,s,r)=>{"use strict";r.d(s,{h:()=>c});var i=r(3729),n=r(42126);let t=e=>{let{lang:s,translations:r}=(0,n.J)();return{crumbText:r[s].breadcrumbs[e]}},l=(e,s="")=>{let{lang:r,translations:t}=(0,n.J)();(0,i.useEffect)(()=>{document.title=`${"ru"===r?"Ростелеком":"Rostelecom"} | ${t[r].breadcrumbs[e]}${s?` - ${s}`:""}`},[s,r,e,t])},c=e=>{let{crumbText:s}=t(e),r=(0,i.useCallback)(()=>s,[s]),n=(0,i.useCallback)(e=>({})[e],[]);return l(e),(0,i.useEffect)(()=>{let e=document.querySelector(".last-crumb");e&&(e.textContent=s)},[s]),{getDefaultTextGenerator:r,getTextGenerator:n}}},24131:e=>{e.exports={policy:"policy_policy__BmdcF"}},10562:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>d});var i=r(25036);let n=(0,r(86843).createProxy)(String.raw`C:\Users\hp\Desktop\online-shop\components\templates\PersonalDataPolicyPage\PersonalDataPolicyPage.tsx`),{__esModule:t,$$typeof:l}=n,c=n.default;function d(){return i.jsx(c,{})}}};var s=require("../../webpack-runtime.js");s.C(e);var r=e=>s(s.s=e),i=s.X(0,[638,433,139],()=>r(27818));module.exports=i})();