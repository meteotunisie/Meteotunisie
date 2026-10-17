
const MODELS=[
["ecmwf_ifs025","ECMWF IFS",["Centre européen (Reading), référence mondiale","European centre (Reading), world reference","المركز الأوروبي (ريدينغ)، المرجع العالمي"],"#e4572e"],
["gfs_seamless","GFS",["NOAA, États-Unis","NOAA, United States","NOAA، الولايات المتحدة"],"#2e86de"],
["icon_seamless","ICON",["DWD, Allemagne","DWD, Germany","DWD، ألمانيا"],"#1b9e77"],
["meteofrance_seamless","ARPEGE / AROME",["Météo-France","Météo-France","ميتيو فرانس"],"#8e44ad"],
["ukmo_seamless","UKMO",["Met Office, Royaume-Uni","Met Office, United Kingdom","الأرصاد البريطانية"],"#d99a00"],
["gem_seamless","GEM",["Environnement Canada","Environment Canada","البيئة الكندية"],"#d6336c"],
["jma_seamless","JMA",["Agence météo du Japon","Japan Meteorological Agency","الوكالة اليابانية للأرصاد"],"#667"],
["cma_grapes_global","GRAPES",["CMA, Chine","CMA, China","CMA، الصين"],"#0aa5a5"],
["bom_access_global","ACCESS-G",["BoM, Australie","BoM, Australia","BoM، أستراليا"],"#a0522d"]];
const VARS={temperature_2m:["tab_t"],precipitation:["tab_r"],wind_speed_10m:["tab_w"],cloud_cover:["tab_c"]};
const $=id=>document.getElementById(id);
const S={
app:["Météo Tunisie","Tunisia Weather","طقس تونس"],
sub:["Prévisions comparées des grands centres, données réelles","Forecasts compared across the major centres, real data","توقعات مقارنة بين كبرى المراكز، بيانات حقيقية"],
ph:["Rechercher une ville, un village, une région…","Search a city, village or region…","ابحث عن مدينة أو قرية أو منطقة…"],
go:["Chercher","Search","بحث"],loc:["Ma position","My location","موقعي"],
m_lang:["Langue","Language","اللغة"],m_theme:["Thème","Theme","المظهر"],th_a:["Auto","Auto","تلقائي"],th_l:["Clair","Light","فاتح"],th_d:["Sombre","Dark","داكن"],
m_nav:["Aller à","Go to","انتقل إلى"],install:["Installer l'application","Install the app","تثبيت التطبيق"],
a_h:["Alertes de la semaine","Weekly alerts","تنبيهات الأسبوع"],
a_n:["Indications calculées automatiquement à partir des modèles, qui ne remplacent pas les vigilances officielles de l'Institut National de la Météorologie (INM).","Automatic indications computed from the models. They do not replace the official warnings of the National Institute of Meteorology (INM).","مؤشرات محسوبة آليا من النماذج، ولا تغني عن التحذيرات الرسمية للمعهد الوطني للرصد الجوي."],
d_h:["Jour par jour","Day by day","يوما بيوم"],tr_h:["Tendance de la semaine","Weekly outlook","اتجاه الأسبوع"],
map_h:["Carte","Map","الخريطة"],wind:["Vent","Wind","الرياح"],radar:["Radar de pluie","Rain radar","رادار الأمطار"],n_7:["Météo 7 jours","7-day weather","طقس 7 أيام"],n_today:["Aujourd'hui","Today","اليوم"],n_sea:["Mer et plage","Sea and beach","البحر والشاطئ"],n_agri:["Agriculture","Agriculture","الفلاحة"],
th_sst:["Eau","Water","الماء"],th_wave:["Vagues","Waves","الأمواج"],sw_r:["Mer agitée","Rough sea","بحر هائج"],sw_c:["Eau fraîche","Cool water","ماء بارد"],sw_ok:["Baignade agréable","Pleasant swim","سباحة ممتعة"],sw_m:["Correct","Fair","مقبول"],
sea_no:["Pas de données marines pour ce lieu (zone éloignée de la côte).","No marine data for this place (inland).","لا بيانات بحرية لهذا المكان (بعيد عن الساحل)."],
sea_n:["Estimations de température de l'eau et de hauteur des vagues (modèle marin), au point marin le plus proche du lieu.","Estimated water temperature and wave height (marine model), at the nearest sea point to the place.","تقديرات لحرارة الماء وارتفاع الأمواج (نموذج بحري)."],
th_mm:["Min / Max","Min / Max","أدنى / أقصى"],ag_rain:["Pluie (mm)","Rain (mm)","الأمطار (مم)"],ag_bal:["Bilan (mm)","Balance (mm)","الحصيلة (مم)"],
ag_no:["Données agricoles indisponibles.","Farming data unavailable.","البيانات الفلاحية غير متاحة."],
ag_note:["ET0 : eau évaporée et transpirée par une culture de référence. Un bilan négatif indique un besoin d'irrigation. ❄️ risque de gel, 🔥 chaleur extrême.","ET0: water evaporated and transpired by a reference crop. A negative balance means irrigation is useful. ❄️ frost risk, 🔥 extreme heat.","ET0: الماء المتبخر والمتنتح من محصول مرجعي. الحصيلة السالبة تعني حاجة إلى الري. ❄️ خطر الصقيع، 🔥 حر شديد."],
clouds:["Nuages","Clouds","الغيوم"],b_osm:["Plan","Map","خريطة"],b_sat:["Photo satellite","Satellite photo","صور الأقمار الصناعية"],
mn_c:["Couverture nuageuse prévue par les modèles, en %. Touchez la carte pour choisir un lieu.","Cloud cover forecast by the models, in %. Tap the map to choose a place.","الغطاء السحابي المتوقع من النماذج بالنسبة المئوية. المس الخريطة لاختيار مكان."],mn_ce:["Nuages indisponibles pour le moment","Clouds unavailable right now","الغيوم غير متاحة حاليا"],
map_n:["Touchez la carte pour choisir un lieu. Fonds de carte : OpenStreetMap.","Tap the map to choose a place. Base map: OpenStreetMap.","المس الخريطة لاختيار مكان. الخلفية: OpenStreetMap."],
c_h:["Centres de prévision","Forecast centres","مراكز التنبؤ"],
c_n:["Cochez plusieurs centres pour voir où les modèles s'accordent ou divergent : plus les courbes sont écartées, moins la prévision est fiable.","Tick several centres to see where models agree or differ: the wider apart the curves, the less reliable the forecast.","اختر عدة مراكز لترى أين تتفق النماذج أو تختلف: كلما تباعدت المنحنيات قلت موثوقية التوقع."],
tbl_h:["Maximales et minimales par jour","Daily highs and lows","العظمى والصغرى اليومية"],th_day:["Jour","Day","اليوم"],th_gap:["Écart max","Max gap","أقصى فارق"],
n_14:["Prévisions 14 jours","14-day forecast","توقعات 14 يوما"],n_trend:["Tendance sur 3 mois","3-month outlook","اتجاه 3 أشهر"],plans:["Abonnements et services","Plans and services","الاشتراكات والخدمات"],admin:["Espace administrateur","Admin area","فضاء الإدارة"],
d14_note:["Au-delà de 7 jours, la fiabilité baisse. Le point indique l'accord entre ECMWF et GFS : vert bon, orange moyen, rouge faible.","Beyond 7 days, reliability drops. The dot shows agreement between ECMWF and GFS: green good, orange fair, red low.","بعد 7 أيام تقل الموثوقية. تشير النقطة إلى التوافق بين ECMWF وGFS: أخضر جيد، برتقالي متوسط، أحمر ضعيف."],
d14_no:["Prévisions 14 jours indisponibles pour le moment.","14-day forecast unavailable right now.","توقعات 14 يوما غير متاحة حاليا."],
tr_country:["Pays","Country","البلد"],tr_no:["Tendance saisonnière indisponible pour le moment.","Seasonal outlook unavailable right now.","الاتجاه الموسمي غير متاح حاليا."],
tr_note:["Tendance saisonnière du modèle ECMWF SEAS5 pour quelques villes du pays : un indice de probabilité par rapport à la normale, pas une prévision jour par jour.","Seasonal trend from the ECMWF SEAS5 model for a few cities in the country: a probability hint versus normal, not a day-by-day forecast.","اتجاه موسمي من نموذج ECMWF SEAS5 لبعض مدن البلد: مؤشر احتمالي مقارنة بالمعدل الطبيعي وليس توقعا يوميا."],
tr_warm:["plus chaud que la normale","warmer than normal","أدفأ من المعتاد"],tr_cool:["plus frais que la normale","cooler than normal","أبرد من المعتاد"],tr_norm:["proche de la normale","near normal","قريب من المعتاد"],tr_wet:["plus humide","wetter","أكثر رطوبة"],tr_dry:["plus sec","drier","أكثر جفافا"],
tr_sum:["Tendance du trimestre : {0}, {1}.","Quarter trend: {0}, {1}.","اتجاه الفصل: {0}، {1}."],
th_midnight:["Bleu nuit","Midnight blue","أزرق ليلي"],th_navy:["Bleu marine","Navy blue","أزرق كحلي"],th_azure:["Bleu azur","Azure blue","أزرق سماوي"],th_skyblue:["Bleu ciel","Sky blue","أزرق السماء"],
th_sky:["Ciel","Sky","السماء"],th_ocean:["Méditerranée","Mediterranean","المتوسط"],th_sahara:["Sahara","Sahara","الصحراء"],th_night:["Nuit","Night","الليل"],
m_anim:["Animation","Animation","الحركة"],an_weather:["Selon la météo","Weather-based","حسب الطقس"],an_flow:["Dégradé vivant","Living gradient","تدرج حي"],an_calm:["Douce","Calm","هادئة"],an_off:["Aucune","None","بدون"],
tb_home:["Accueil","Home","الرئيسية"],tb_today:["Heures","Hours","الساعات"],tb_days:["7 jours","7 days","7 أيام"],tb_map:["Carte","Map","الخريطة"],tb_menu:["Menu","Menu","القائمة"],
share:["Partager","Share","مشاركة"],copied:["Lien copié","Link copied","تم نسخ الرابط"],priv:["Confidentialité et sources","Privacy and sources","الخصوصية والمصادر"],villes:["Villes","Cities","المدن"],g_tn:["Tunisie","Tunisia","تونس"],g_w:["Dans le monde","Worldwide","في العالم"],
foot:["Données : Open-Meteo, qui agrège les centres nationaux de prévision.","Data: Open-Meteo, aggregating national forecast centres.","البيانات: Open-Meteo التي تجمع مراكز التنبؤ الوطنية."],
tab_t:["Température (°C)","Temperature (°C)","الحرارة (°م)"],tab_r:["Pluie cumulée (mm)","Cumulative rain (mm)","الأمطار المتراكمة (مم)"],tab_w:["Vent (km/h)","Wind (km/h)","الرياح (كم/س)"],tab_c:["Nuages (%)","Clouds (%)","الغيوم (%)"],
c0:["Pluvieux","Rainy","ماطر"],c1:["Averses","Showers","زخات"],c2:["Couvert","Overcast","غائم كليا"],c3:["Nuageux","Cloudy","غائم"],c4:["Peu nuageux","Mostly sunny","غائم جزئيا"],c5:["Venteux","Windy","عاصف"],c6:["Ensoleillé","Sunny","مشمس"],
p0:["Nuit","Night","ليلا"],p1:["Matin","Morning","صباحا"],p2:["Après-midi","Afternoon","بعد الظهر"],p3:["Soir","Evening","مساء"],
dry:["sec","dry","جاف"],rain_t:["{0} mm de pluie","{0} mm of rain","{0} مم من الأمطار"],norain:["pas de pluie attendue","no rain expected","لا أمطار متوقعة"],
daysum:["{0} : {1}, entre {2}° et {3}°, vent jusqu'à {4} km/h, {5}.","{0}: {1}, between {2}° and {3}°, wind up to {4} km/h, {5}.","{0}: {1}، بين {2}° و{3}°، رياح حتى {4} كم/س، {5}."],
st_none:["Choisissez au moins un centre de prévision.","Choose at least one forecast centre.","اختر مركز تنبؤ واحدا على الأقل."],
st_off:["Hors connexion : dernière prévision enregistrée.","Offline: showing the last saved forecast.","بلا اتصال: آخر توقعات محفوظة."],
st_err:["Données indisponibles. Vérifiez votre connexion.","Data unavailable. Check your connection.","البيانات غير متاحة. تحقق من اتصالك."],
sub1:["Moyenne de {0} modèle(s) · écart {1} °C","Average of {0} model(s) · spread {1} °C","متوسط {0} نموذج · فارق {1} °م"],
sub_w:[" · vent {0} km/h"," · wind {0} km/h"," · رياح {0} كم/س"],sub_s:[" · mer {0} °C"," · sea {0} °C"," · البحر {0} °م"],
stamp:["Heure locale : {0}","Local time: {0}","التوقيت المحلي: {0}"],
fav_a:["☆ Ajouter à mes lieux","☆ Save this place","☆ إضافة إلى أماكني"],fav_d:["★ Retirer de mes lieux","★ Remove from my places","★ إزالة من أماكني"],
geo_na:["Position non disponible sur cet appareil.","Location not available on this device.","الموقع غير متاح على هذا الجهاز."],
geo_no:["Position refusée : cherchez votre ville ci-dessus.","Location refused: search for your city above.","تم رفض الموقع: ابحث عن مدينتك أعلاه."],
nores:["Aucun résultat.","No results.","لا نتائج."],serr:["Recherche indisponible.","Search unavailable.","البحث غير متاح."],point:["Point","Point","نقطة"],
mn_off:["Carte indisponible hors connexion.","Map unavailable offline.","الخريطة غير متاحة بلا اتصال."],
mn_w:["Flèches : sens du vent, valeur en km/h. Touchez la carte pour choisir un lieu.","Arrows: wind direction, value in km/h. Tap the map to choose a place.","الأسهم: اتجاه الرياح والقيمة بالكم/س. المس الخريطة لاختيار مكان."],
mn_we:["Vent indisponible pour le moment","Wind unavailable right now.","الرياح غير متاحة حاليا."],
mn_r:["Radar de pluie observé à {0} (RainViewer). Bleu : faible, rouge : forte.","Rain radar observed at {0} (RainViewer). Blue: light, red: heavy.","رادار الأمطار عند {0} (RainViewer). أزرق: خفيفة، أحمر: غزيرة."],
mn_re:["Radar indisponible pour le moment.","Radar unavailable right now.","الرادار غير متاح حاليا."],
o_st:["Températures stables sur la semaine.","Stable temperatures all week.","درجات حرارة مستقرة طوال الأسبوع."],
o_up:["Hausse des températures en fin de semaine (environ {0}° de plus que les 3 premiers jours).","Warming towards the end of the week (about {0}° above the first 3 days).","ارتفاع الحرارة نهاية الأسبوع (حوالي {0}° أكثر من الأيام الثلاثة الأولى)."],
o_dn:["Rafraîchissement en fin de semaine (environ {0}° de moins que les 3 premiers jours).","Cooling towards the end of the week (about {0}° below the first 3 days).","انخفاض الحرارة نهاية الأسبوع (حوالي {0}° أقل من الأيام الثلاثة الأولى)."],
o_rain:["Pluie à prévoir : {0}.","Rain expected: {0}.","أمطار متوقعة: {0}."],o_dry:["Pas de pluie significative annoncée cette semaine.","No significant rain this week.","لا أمطار مهمة هذا الأسبوع."],
o_ext:["Journée la plus chaude : {0} ({1}°). Plus fraîche : {2} ({3}°). Vent le plus fort : {4} ({5} km/h).","Hottest day: {0} ({1}°). Coolest: {2} ({3}°). Strongest wind: {4} ({5} km/h).","أحر يوم: {0} ({1}°). أبرد يوم: {2} ({3}°). أقوى رياح: {4} ({5} كم/س)."],
o_f0:["Fiabilité : cochez plusieurs centres pour la mesurer.","Reliability: tick several centres to measure it.","الموثوقية: اختر عدة مراكز لقياسها."],
o_f1:["Fiabilité : les modèles divergent en fin de semaine, la prévision de ces jours reste incertaine.","Reliability: models diverge late in the week, so those days remain uncertain.","الموثوقية: تختلف النماذج نهاية الأسبوع، فتوقع هذه الأيام غير مؤكد."],
o_f2:["Fiabilité : les modèles s'accordent bien, prévision plutôt fiable.","Reliability: models agree well, the forecast looks reliable.","الموثوقية: النماذج متفقة، والتوقع موثوق نسبيا."],
al_hh:["Fortes chaleurs","Extreme heat","حر شديد"],al_h:["Chaleur","Heat","حرارة مرتفعة"],al_c:["Froid","Cold","برد"],al_s:["Sirocco probable","Sirocco likely","رياح القبلي (السيروكو) محتملة"],al_sd:["air chaud et sec du sud","hot dry air from the south","هواء حار وجاف من الجنوب"],
al_w:["Vent fort","Strong wind","رياح قوية"],al_g:["rafales {0} km/h","gusts {0} km/h","هبات {0} كم/س"],al_pp:["Fortes pluies","Heavy rain","أمطار غزيرة"],al_p:["Pluie soutenue","Steady rain","أمطار متواصلة"],
al_sea:["Mer agitée","Rough sea","بحر هائج"],al_v:["vagues {0} m","waves {0} m","أمواج {0} م"],al_none:["Aucune alerte particulière cette semaine.","No particular alert this week.","لا تنبيهات خاصة هذا الأسبوع."]};
let LG=(()=>{const a=ld("mt_lang");if(a)return a;const n=(navigator.language||"fr").slice(0,2);return["fr","en","ar"].includes(n)?n:"fr"})();
const LI=()=>({fr:0,en:1,ar:2})[LG],LC=()=>LG==="ar"?"ar-TN-u-nu-latn":LG;
const t=(k,...a)=>{let s=(S[k]||[k,k,k])[LI()];a.forEach((v,i)=>s=s.split("{"+i+"}").join(v));return s};
let seaV=null,thm=ld("mt_theme")||"sky",anim=ld("mt_anim")||(matchMedia("(prefers-reduced-motion:reduce)").matches?"off":"weather"),dp=null,fxk="";
function applyTheme(){const TH=["sky","ocean","sahara","night","midnight","navy","azure","skyblue"];if(!TH.includes(thm))thm="sky";if(!["weather","flow","calm","off"].includes(anim))anim="weather";
 const h=document.documentElement;h.dataset.th=thm;h.dataset.theme=["night","midnight","navy"].includes(thm)?"dark":"light";h.dataset.anim=anim;
 [...$("thm").children].forEach(b=>b.setAttribute("aria-pressed",b.dataset.t===thm));[...$("anm").children].forEach(b=>b.setAttribute("aria-pressed",b.dataset.a===anim));
 const m=document.querySelector("meta[name=theme-color]");if(m)m.content=({sky:"#2d8fe3",ocean:"#00708f",sahara:"#d9772b",night:"#0a0f2c",midnight:"#030816",navy:"#0a2540",azure:"#0b6fa4",skyblue:"#4aa3f0"})[thm]}
function setLang(l){LG=l;sv("mt_lang",l);const h=document.documentElement;h.lang=l;h.dir=l==="ar"?"rtl":"ltr";if(!window.PRESET)document.title=t("app");
 document.querySelectorAll("[data-x]").forEach(e=>e.textContent=t(e.dataset.x));
 document.querySelectorAll("[data-p]").forEach(e=>e.placeholder=t(e.dataset.p));
 document.querySelectorAll("[data-l]").forEach(b=>b.setAttribute("aria-pressed",b.dataset.l===l));
 drawTabs();drawModels();drawFavs();drawCtry();if(d14)draw14();if(tr)drawTr();applyTheme();if(data)render()}
document.addEventListener("click",e=>{const b=e.target.closest("[data-l]");if(b)setLang(b.dataset.l)});
$("thm").onclick=e=>{const b=e.target.closest("[data-t]");if(b){thm=b.dataset.t;sv("mt_theme",thm);applyTheme()}};
const dro=o=>{$("drawer").classList.toggle("open",o);$("ov").hidden=!o;$("menu").setAttribute("aria-expanded",o);$("drawer").setAttribute("aria-hidden",!o)};
$("menu").onclick=()=>dro(!$("drawer").classList.contains("open"));$("ov").onclick=()=>dro(false);
$("drawer").addEventListener("click",e=>{if(e.target.closest("a"))dro(false)});
addEventListener("keydown",e=>{if(e.key==="Escape")dro(false)});
addEventListener("beforeinstallprompt",e=>{e.preventDefault();dp=e;$("inst").hidden=false});
$("inst").onclick=()=>{if(dp){dp.prompt();dp=null;$("inst").hidden=true}};
matchMedia("(prefers-color-scheme:dark)").addEventListener("change",applyTheme);
let mar=null,ag=null;
function today(){
 const i0=idxNow(),T=data.hourly.time;let h="";
 for(let i=i0;i<Math.min(i0+24,T.length);i++){
  const hr=+T[i].slice(11,13),A=v=>{const a=series(v).map(s=>s.y[i]).filter(x=>x!=null);return a.length?av(a):null};
  const tp=A("temperature_2m"),p=A("precipitation")||0,w=A("wind_speed_10m")||0,c=A("cloud_cover")||0;if(tp==null)continue;
  let ic=IC(c,p*5,w)[0];if((hr<6||hr>=19)&&(ic==="☀️"||ic==="🌤️"))ic="🌙";
  h+=`<div class="hr"><b>${String(hr).padStart(2,"0")}h</b><div class="i">${ic}</div><div>${Math.round(tp)}°</div><small>${p>=0.1?p.toFixed(1)+" mm":Math.round(w)+" km/h"}</small></div>`}
 $("hours").innerHTML=h;
}
function seaTable(){
 if(!mar||!Object.keys(mar).length){$("seac").innerHTML='<p class="mute">'+t("sea_no")+'</p>';return}
 let h="<tr><th>"+t("th_day")+"</th><th>"+t("th_sst")+"</th><th>"+t("th_wave")+"</th><th></th></tr>";
 Object.keys(mar).slice(0,7).forEach(d=>{const x=mar[d],c=x.wh>=2.5?"sw_r":x.sst<18?"sw_c":x.sst>=22&&x.wh<1?"sw_ok":"sw_m";
  h+=`<tr><td>${new Date(d).toLocaleDateString(LC(),{weekday:"short",day:"numeric"})}</td><td>${Math.round(x.sst)}°</td><td>${x.wh.toFixed(1)} m</td><td>${t(c)}</td></tr>`});
 $("seac").innerHTML="<table>"+h+"</table>";
}
async function agri(){
 ag=null;
 try{ag=(await cf(`https://api.open-meteo.com/v1/forecast?latitude=${place.lat}&longitude=${place.lon}&daily=et0_fao_evapotranspiration,precipitation_sum,temperature_2m_min,temperature_2m_max&timezone=auto&forecast_days=7`,60*60*1000)).daily}catch(e){}
 agriTable();
}
function agriTable(){
 if(!ag||!ag.time){$("agric").innerHTML='<p class="mute">'+t("ag_no")+'</p>';return}
 let h="<tr><th>"+t("th_day")+"</th><th>"+t("th_mm")+"</th><th>ET0</th><th>"+t("ag_rain")+"</th><th>"+t("ag_bal")+"</th><th></th></tr>";
 ag.time.forEach((d,i)=>{const e=ag.et0_fao_evapotranspiration[i]||0,p=ag.precipitation_sum[i]||0,lo=ag.temperature_2m_min[i],hi=ag.temperature_2m_max[i],b=p-e;
  h+=`<tr><td>${new Date(d).toLocaleDateString(LC(),{weekday:"short",day:"numeric"})}</td><td>${Math.round(lo)}° / ${Math.round(hi)}°</td><td>${e.toFixed(1)}</td><td>${p.toFixed(1)}</td><td>${b>0?"+":""}${b.toFixed(1)}</td><td>${lo<=2?"❄️":hi>=38?"🔥":""}</td></tr>`});
 $("agric").innerHTML="<table>"+h+"</table>";
}
$("dx").onclick=()=>dro(false);
$("anm").onclick=e=>{const b=e.target.closest("[data-a]");if(b){anim=b.dataset.a;sv("mt_anim",anim);applyTheme()}};
$("tbmenu").onclick=()=>$("menu").click();
$("tabbar").addEventListener("click",e=>{const a=e.target.closest("a");if(a)[...$("tabbar").querySelectorAll("a")].forEach(x=>x.classList.toggle("on",x===a))});
function chips(){if(!data)return;const i=idxNow(),x=dayInfo(data.hourly.time[i].slice(0,10)),w=series("wind_speed_10m").map(s=>s.y[i]).filter(z=>z!=null),wv=w.length?Math.round(av(w))+" km/h":"–";
 $("chips").innerHTML=[["↑",Math.round(x.hi)+"°"],["↓",Math.round(x.lo)+"°"],["💨",wv],["☔",x.p.toFixed(1)+" mm"],["☁️",Math.round(x.c)+"%"]].concat(seaV!=null?[["🌊",seaV+"°"]]:[]).map(c=>`<span class="chip">${c[0]} ${c[1]}</span>`).join("")}
$("share").onclick=async()=>{const root=location.href.split("?")[0].split("#")[0].replace(/[^/]*$/,""),u=root+"?lat="+place.lat+"&lon="+place.lon+"&n="+encodeURIComponent(place.name);
 try{if(navigator.share)await navigator.share({title:t("app")+" · "+place.name,url:u});else{await navigator.clipboard.writeText(u);$("share").textContent=t("copied");setTimeout(()=>$("share").textContent=t("share"),2000)}}catch(e){}};
$("dnav").addEventListener("click",e=>{const a=e.target.closest("a");if(a){[...$("dnav").querySelectorAll("a")].forEach(x=>x.classList.toggle("on",x===a))}});
const CTRY={TN:[[36.81,10.18],[34.74,10.76],[33.92,8.13]],DZ:[[36.75,3.06],[35.70,-0.63],[22.79,5.52]],MA:[[34.02,-6.84],[31.63,-7.99],[27.15,-13.20]],LY:[[32.89,13.19],[32.12,20.09],[27.04,14.43]],EG:[[30.04,31.24],[31.20,29.92],[24.09,32.90]],MR:[[18.08,-15.98]],ML:[[12.64,-8.00]],NE:[[13.51,2.11]],SD:[[15.50,32.56]],SA:[[24.71,46.68],[21.54,39.17]],AE:[[25.20,55.27]],QA:[[25.29,51.53]],KW:[[29.38,47.99]],OM:[[23.59,58.41]],LB:[[33.89,35.50]],JO:[[31.95,35.93]],SY:[[33.51,36.28]],IQ:[[33.31,44.36]],IR:[[35.69,51.39]],TR:[[39.93,32.86],[41.01,28.98],[38.42,27.14]],FR:[[48.86,2.35],[43.30,5.37],[43.60,1.44]],ES:[[40.42,-3.70],[37.39,-5.98],[41.39,2.17]],PT:[[38.72,-9.14]],IT:[[41.90,12.50],[45.46,9.19],[38.12,13.36]],GR:[[37.98,23.73]],MT:[[35.90,14.51]],DE:[[52.52,13.40],[48.14,11.58]],GB:[[51.51,-0.13]],BE:[[50.85,4.35]],NL:[[52.37,4.90]],CH:[[46.20,6.14]],CA:[[45.50,-73.57],[49.28,-123.12],[43.65,-79.38]],US:[[40.71,-74.01],[34.05,-118.24],[41.88,-87.63]],MX:[[19.43,-99.13]],BR:[[-23.55,-46.63],[-15.79,-47.88]],AR:[[-34.60,-58.38]],CL:[[-33.45,-70.67]],SN:[[14.72,-17.47]],CI:[[5.36,-4.01]],GH:[[5.60,-0.19]],NG:[[6.52,3.38],[12.00,8.52]],CM:[[4.05,9.77]],ET:[[9.03,38.74]],KE:[[-1.29,36.82]],TZ:[[-6.79,39.21]],ZA:[[-26.20,28.05],[-33.92,18.42]],IN:[[28.61,77.21],[19.08,72.88],[13.08,80.27]],PK:[[24.86,67.01],[31.55,74.34]],BD:[[23.81,90.41]],ID:[[-6.21,106.85]],MY:[[3.14,101.69]],TH:[[13.76,100.50]],VN:[[21.03,105.85]],PH:[[14.60,120.98]],CN:[[39.90,116.41],[31.23,121.47],[30.57,104.07]],JP:[[35.68,139.65],[34.69,135.50]],KR:[[37.57,126.98]],AU:[[-33.87,151.21],[-31.95,115.86],[-23.70,133.88]]};
let d14=null,tr=null;
const wmo=c=>c==null?null:c===0?"☀️":c===1?"🌤️":c===2?"⛅":c===3?"☁️":c<=48?"🌫️":c<=57?"🌦️":c<=67?"🌧️":c<=77?"❄️":c<=82?"🌦️":"⛈️";
async function load14(){
 d14=null;
 try{d14=(await cf(`https://api.open-meteo.com/v1/forecast?latitude=${place.lat}&longitude=${place.lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max,weather_code&models=ecmwf_ifs025,gfs_seamless&timezone=auto&forecast_days=14`,60*60*1000)).daily}catch(e){}
 draw14();
}
function draw14(){
 if(!d14||!d14.time){$("d14").innerHTML='<p class="mute">'+t("d14_no")+'</p>';return}
 const M=["ecmwf_ifs025","gfs_seamless"],g=(v,i)=>M.map(m=>d14[v+"_"+m]&&d14[v+"_"+m][i]).filter(x=>x!=null);
 let h="<tr><th>"+t("th_day")+"</th><th></th><th>"+t("th_mm")+"</th><th>☔</th><th>💨</th><th></th></tr>";
 d14.time.forEach((d,i)=>{
  const hi=g("temperature_2m_max",i),lo=g("temperature_2m_min",i),p=g("precipitation_sum",i),w=g("wind_speed_10m_max",i),c=g("weather_code",i);
  if(!hi.length)return;
  const sp=hi.length>1?mx(hi)-mi(hi):null,pm=p.length?av(p):0,dot=sp==null?"⚪":sp<=2?"🟢":sp<=4?"🟠":"🔴";
  const ic=(c.length&&wmo(c[0]))||(pm>=5?"🌧️":pm>=1?"🌦️":"⛅");
  h+=`<tr><td>${new Date(d).toLocaleDateString(LC(),{weekday:"short",day:"numeric",month:"short"})}</td><td>${ic}</td><td dir="ltr">${Math.round(av(hi))}° / ${lo.length?Math.round(av(lo)):"–"}°</td><td>${pm.toFixed(1)}</td><td>${w.length?Math.round(av(w)):"–"}</td><td>${dot}</td></tr>`});
 $("d14").innerHTML="<table>"+h+"</table>";
}
function ctryName(c){try{return new Intl.DisplayNames([LG],{type:"region"}).of(c)}catch(e){return c}}
function drawCtry(){const s=$("ctry"),cur=s.value||ld("mt_ctry")||"TN";
 s.innerHTML=Object.keys(CTRY).map(c=>[c,ctryName(c)]).sort((a,b)=>a[1].localeCompare(b[1],LG)).map(x=>`<option value="${x[0]}">${esc(x[1])}</option>`).join("");s.value=CTRY[cur]?cur:"TN"}
async function loadTr(){
 const c=$("ctry").value||"TN",P=CTRY[c];sv("mt_ctry",c);tr=null;
 try{const d=await cf(`https://seasonal-api.open-meteo.com/v1/seasonal?latitude=${P.map(p=>p[0])}&longitude=${P.map(p=>p[1])}&monthly=temperature_2m_anomaly,precipitation_anomaly,precipitation_mean`,6*3600*1000);tr=Array.isArray(d)?d:[d]}catch(e){}
 drawTr();
}
function drawTr(){
 const T=$("trend");
 if(!tr||!tr[0]||!tr[0].monthly||!tr[0].monthly.time){T.innerHTML='<p class="mute">'+t("tr_no")+'</p>';return}
 const mo=tr[0].monthly.time,U=tr[0].monthly_units||{},n=new Date();let y=n.getFullYear(),m=n.getMonth()+2;if(m>12){m=1;y++}
 const nx=y+"-"+String(m).padStart(2,"0"),A=(v,i)=>{const a=tr.map(p=>p.monthly&&p.monthly[v]&&p.monthly[v][i]).filter(x=>x!=null&&isFinite(x));return a.length?av(a):null};
 const idx=mo.map((_,i)=>i).filter(i=>mo[i].slice(0,7)>=nx).slice(0,3),rows=[];
 idx.forEach(i=>{const ta=A("temperature_2m_anomaly",i),pa=A("precipitation_anomaly",i),pm=A("precipitation_mean",i);if(ta==null&&pa==null)return;
  const rel=pa==null?0:pa/Math.max(Math.abs(pm||0),0.05);rows.push({d:mo[i],ta,pa,tl:ta==null?"–":ta>=.5?"tr_warm":ta<=-.5?"tr_cool":"tr_norm",pl:pa==null?"–":rel>=.15?"tr_wet":rel<=-.15?"tr_dry":"tr_norm"})});
 if(!rows.length){T.innerHTML='<p class="mute">'+t("tr_no")+'</p>';return}
 const ts=rows.filter(r=>r.ta!=null).map(r=>r.ta),tm=ts.length?av(ts):0,wet=rows.filter(r=>r.pl==="tr_wet").length,dry=rows.filter(r=>r.pl==="tr_dry").length;
 const sm=t("tr_sum",t(tm>=.5?"tr_warm":tm<=-.5?"tr_cool":"tr_norm"),t(wet>dry?"tr_wet":dry>wet?"tr_dry":"tr_norm"));
 T.innerHTML='<p><b>'+esc(ctryName($("ctry").value))+'</b> · '+sm+'</p><div class="tr3">'+rows.map(r=>`<div class="tm"><small>${new Date(r.d).toLocaleDateString(LC(),{month:"long",year:"numeric"})}</small><b class="${r.ta>=.5?"hot":r.ta<=-.5?"cold":""}">${r.ta==null?"–":(r.ta>0?"+":"")+r.ta.toFixed(1)+"°"}</b><div>${r.tl==="–"?"–":t(r.tl)}</div><div class="mute">☔ ${r.pl==="–"?"–":t(r.pl)}${r.pa==null?"":" ("+(r.pa>0?"+":"")+r.pa.toFixed(2)+" "+esc(U.precipitation_anomaly||"")+")"}</div></div>`).join("")+"</div>";
}
$("ctry").onchange=()=>loadTr();
async function stage(){for(const f of [sea,agri,load14,()=>tr?0:loadTr()]){try{await f()}catch(e){}await new Promise(r=>setTimeout(r,250))}}
function sky(){
 const i=idxNow(),T=data.hourly.time[i],h=+T.slice(11,13),night=h<6||h>=19,x=dayInfo(T.slice(0,10));
 let k=x.p>=1?"rain":x.c>70?"cloud":x.c>40?"pcloud":"clear";if(night&&k!=="rain")k="night";
 document.body.dataset.sky=k;chips();$("hicon").textContent=k==="night"?"🌙":x.ic[0];$("hcond").textContent=t(x.ic[1]);
 if(fxk!==k){fxk=k;let f="";
  if(k==="rain")for(let j=0;j<26;j++)f+=`<i style="left:${j*4+Math.random()*3}%;animation-delay:${(Math.random()*1.2).toFixed(2)}s;animation-duration:${(.7+Math.random()*.5).toFixed(2)}s"></i>`;
  if(k==="night")for(let j=0;j<30;j++)f+=`<s style="left:${Math.random()*100}%;top:${Math.random()*100}%;animation-delay:${(Math.random()*3).toFixed(1)}s"></s>`;
  if(k==="clear"||k==="pcloud")f+="<u></u>";
  if(k==="cloud"||k==="pcloud"||k==="rain")for(let j=0;j<3;j++)f+=`<b style="top:${8+j*22}%;animation-duration:${22+j*9}s;animation-delay:-${j*8}s">☁️</b>`;
  $("fx").innerHTML=f}
}
let sel=new Set(["ecmwf_ifs025","gfs_seamless","icon_seamless","meteofrance_seamless","ukmo_seamless"]);
const esc=x=>String(x).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
async function cf(u,ttl){const k="mt_c:"+u,n=Date.now();
 try{const c=ld(k);if(c&&n-c.t<ttl)return c.d}catch(e){}
 const r=await fetch(u);let d=null;try{d=await r.json()}catch(e){}if(!r.ok||(d&&d.error))throw new Error((d&&d.reason)||("HTTP "+r.status));
 try{let ix=ld("mt_ci")||[];ix=ix.filter(x=>x!==k);ix.push(k);while(ix.length>6)localStorage.removeItem(ix.shift());sv("mt_ci",ix);sv(k,{t:n,d})}catch(e){}
 return d}
const QP=new URLSearchParams(location.search),qla=+QP.get("lat"),qlo=+QP.get("lon");
const QPL=QP.get("lat")&&QP.get("lon")&&isFinite(qla)&&isFinite(qlo)&&Math.abs(qla)<=90&&Math.abs(qlo)<=180?{name:(QP.get("n")||"").slice(0,60)||qla.toFixed(2)+", "+qlo.toFixed(2),lat:qla,lon:qlo}:null;
let place=QPL||window.PRESET||ld("mt_place")||{name:"Tunis",lat:36.80,lon:10.18},tab="temperature_2m",data=null;

function key(v,m){return sel.size>1?v+"_"+m:v}
async function load(){
 $("place").textContent=place.name;$("status").innerHTML="";$("temp").textContent="…";
 const ms=[...sel];
 if(!ms.length){$("status").innerHTML='<div class="status">'+t("st_none")+'</div>';return}
 const p=new URLSearchParams({latitude:place.lat,longitude:place.lon,hourly:"temperature_2m,precipitation,wind_speed_10m,wind_gusts_10m,wind_direction_10m,cloud_cover",models:ms.join(","),timezone:"auto",forecast_days:7});
 try{
  data=await cf("https://api.open-meteo.com/v1/forecast?"+p,15*60*1000);sv("mt_last",{k:place.name+"|"+sel.size,data});
 }catch(e){
  const c=ld("mt_last");
  if(c&&c.k===place.name+"|"+sel.size){data=c.data;render();$("status").innerHTML='<div class="status">'+t("st_off")+'</div>';return}
  data=null;
  $("status").innerHTML='<div class="status">'+t("st_err")+'</div>';
  return;
 }
 render();stage();
}
function idxNow(){const t=data.hourly.time,off=data.utc_offset_seconds||0;
 const i=Math.floor((Date.now()+off*1000-Date.parse(t[0]+"Z"))/36e5);return Math.max(0,Math.min(t.length-1,i))}
function series(v){return [...sel].map(m=>({m,c:MODELS.find(x=>x[0]===m),y:data.hourly[key(v,m)]})).filter(s=>s.y&&s.y.some(x=>x!=null))}
function render(){
 const i=idxNow(),vals=series("temperature_2m").map(s=>s.y[i]).filter(x=>x!=null);
 if(vals.length){const avg=vals.reduce((a,b)=>a+b,0)/vals.length;
  $("temp").textContent=Math.round(avg)+"°";
  $("sub").textContent=t("sub1",vals.length,(Math.max(...vals)-Math.min(...vals)).toFixed(1));
  const w=series("wind_speed_10m").map(s=>s.y[i]).filter(x=>x!=null);
  if(w.length)$("sub").textContent+=t("sub_w",Math.round(w.reduce((a,b)=>a+b,0)/w.length));
  if(seaV!=null)$("sub").textContent+=t("sub_s",seaV);
 }
 $("stamp").textContent=t("stamp",data.hourly.time[i].replace("T"," "));
 sky();chart();table();days();today();alerts();seaTable();agriTable();mapUpdate();
}
function ticks(a,b){const r=(b-a)/5,p=Math.pow(10,Math.floor(Math.log10(r))),f=r/p,st=(f<=1?1:f<=2?2:f<=5?5:10)*p,o=[];for(let v=Math.floor(a/st)*st;v<=Math.ceil(b/st)*st+1e-9;v+=st)o.push(+v.toFixed(6));return o}
addEventListener("resize",()=>{if(data)chart()});
function chart(){
 const ss=series(tab),t=data.hourly.time,n=t.length,W=Math.max(320,Math.round($("chart").parentElement.clientWidth||800)),H=280,L=40,R=10,T=14,B=34;
 const ys=ss.map(s=>{if(tab!=="precipitation")return s.y;let a=0;return s.y.map(x=>a+=x||0)});
 const all=ys.flat().filter(x=>x!=null);let mn=Math.min(...all),mx=Math.max(...all);
 if(tab==="precipitation")mn=0;else if(tab==="cloud_cover"){mn=0;mx=100}else{mn=Math.floor(mn-1);mx=Math.ceil(mx+1)}
 if(mx===mn)mx=mn+1;
 const tk=ticks(mn,mx);mn=tk[0];mx=tk[tk.length-1];$("chart").setAttribute("viewBox",`0 0 ${W} ${H}`);
 const X=i=>L+i*(W-L-R)/(n-1),Y=v=>T+(mx-v)/(mx-mn)*(H-T-B);
 let g="";
 for(const v of tk){g+=`<line x1="${L}" x2="${W-R}" y1="${Y(v)}" y2="${Y(v)}" stroke="var(--line)"/><text x="${L-6}" y="${Y(v)+4}" text-anchor="end" font-size="11" fill="var(--mute)">${Math.round(v*10)/10}</text>`}
 t.forEach((s,i)=>{if(s.endsWith("T00:00")){g+=`<line x1="${X(i)}" x2="${X(i)}" y1="${T}" y2="${H-B}" stroke="var(--line)"/><text x="${X(i)+(W-L-R)/n*12}" y="${H-12}" text-anchor="middle" font-size="11" fill="var(--mute)">${new Date(s).toLocaleDateString(LC(),{weekday:"short"}).replace(".","")}</text>`}});
 ss.forEach((s,k)=>{const pts=ys[k].map((v,i)=>v==null?null:X(i)+","+Y(v)).filter(Boolean).join(" ");
  g+=`<polyline fill="none" stroke="${s.c[3]}" stroke-width="2" stroke-linejoin="round" points="${pts}"/>`});
 $("chart").innerHTML=g;
}
function table(){
 const ts=data.hourly.time,days=[...new Set(ts.map(s=>s.slice(0,10)))].slice(0,7),ss=series("temperature_2m");
 let h="<tr><th>"+t("th_day")+"</th>"+ss.map(s=>`<th style="color:${s.c[3]}">${s.c[1]}</th>`).join("")+"<th>"+t("th_gap")+"</th></tr>";
 days.forEach(d=>{
  const idx=ts.map((s,i)=>s.startsWith(d)?i:-1).filter(i=>i>=0);
  const cells=ss.map(s=>{const v=idx.map(i=>s.y[i]).filter(x=>x!=null);return v.length>=12?[Math.max(...v),Math.min(...v)]:null});
  const his=cells.filter(Boolean).map(c=>c[0]);
  h+=`<tr><td>${new Date(d).toLocaleDateString(LC(),{weekday:"long",day:"numeric"})}</td>`+cells.map(c=>`<td>${c?Math.round(c[0])+"° / "+Math.round(c[1])+"°":"–"}</td>`).join("")+`<td>${his.length>1?(Math.max(...his)-Math.min(...his)).toFixed(1)+"°":"–"}</td></tr>`;
 });
 $("table").innerHTML=h;
}
let waves={};
async function sea(){
 waves={};seaV=null;mar=null;
 try{const O=[[0,0],[.15,.15],[.15,-.15],[-.15,.15],[-.15,-.15],[.3,0],[-.3,0],[0,.3],[0,-.3]];
  const rr=await cf(`https://marine-api.open-meteo.com/v1/marine?latitude=${O.map(o=>(place.lat+o[0]).toFixed(2))}&longitude=${O.map(o=>(place.lon+o[1]).toFixed(2))}&hourly=sea_surface_temperature,wave_height&forecast_days=7&timezone=auto`,30*60*1000);
  const d=(Array.isArray(rr)?rr:[rr]).find(x=>x&&x.hourly&&x.hourly.sea_surface_temperature&&x.hourly.sea_surface_temperature.some(z=>z!=null)),h=d&&d.hourly;if(!h)return;
  const v=h.sea_surface_temperature.find(x=>x!=null);
  if(v!=null){seaV=Math.round(v);$("sub").textContent+=t("sub_s",seaV);chips()}
  h.time.forEach((t,i)=>{const w=h.wave_height[i];if(w!=null){const k=t.slice(0,10);waves[k]=Math.max(waves[k]||0,w)}});
  const m={};h.time.forEach((tt,i)=>{const k=tt.slice(0,10),o=(m[k]=m[k]||{s:[],w:[]});if(h.sea_surface_temperature[i]!=null)o.s.push(h.sea_surface_temperature[i]);if(h.wave_height[i]!=null)o.w.push(h.wave_height[i])});
  mar={};Object.keys(m).forEach(k=>{if(m[k].s.length&&m[k].w.length)mar[k]={sst:av(m[k].s),wh:mx(m[k].w)}});seaTable();
  alerts();
 }catch(e){}
}
function alerts(){
 if(!data)return;
 const ts=data.hourly.time,ds=[...new Set(ts.map(x=>x.slice(0,10)))].slice(0,7),G={};
 const nm=d=>new Date(d).toLocaleDateString(LC(),{weekday:"long"});
 const ss=series("temperature_2m"),ws=series("wind_speed_10m"),gs=series("wind_gusts_10m"),dr=series("wind_direction_10m");
 const A=(q,i)=>{const a=q.map(z=>z.y[i]).filter(x=>x!=null);return a.length?av(a):null};
 const D=i=>{const a=dr.map(z=>z.y[i]).filter(x=>x!=null);if(!a.length)return null;return (Math.atan2(av(a.map(v=>Math.sin(v*Math.PI/180))),av(a.map(v=>Math.cos(v*Math.PI/180))))*180/Math.PI+360)%360};
 const add=(l,ic,ti,d,tx)=>{(G[ti]=G[ti]||{l:0,ic,r:[]});G[ti].l=Math.max(G[ti].l,l);G[ti].r.push(nm(d)+" ("+tx+")")};
 ds.forEach(d=>{
  const idx=ts.map((x,i)=>x.startsWith(d)?i:-1).filter(i=>i>=0),T=idx.map(i=>A(ss,i)).filter(x=>x!=null),K=idx.map(i=>A(gs,i)).filter(x=>x!=null);
  if(T.length){const hi=mx(T),lo=mi(T);
   if(hi>=38)add(2,"🔥",t("al_hh"),d,Math.round(hi)+"°");else if(hi>=35)add(1,"🌡️",t("al_h"),d,Math.round(hi)+"°");
   if(lo<=3)add(1,"🥶",t("al_c"),d,Math.round(lo)+"°");
   if(idx.some(i=>{const a=A(ss,i),w=A(ws,i),k=D(i);return a>=33&&w>=20&&k!=null&&k>=135&&k<=250}))add(2,"🏜️",t("al_s"),d,t("al_sd"));
  }
  if(K.length&&mx(K)>=60)add(mx(K)>=80?2:1,"💨",t("al_w"),d,t("al_g",Math.round(mx(K))));
  const P=agg("precipitation",idx,sum);
  if(P>=20)add(2,"⛈️",t("al_pp"),d,Math.round(P)+" mm");else if(P>=10)add(1,"🌧️",t("al_p"),d,Math.round(P)+" mm");
  if(waves[d]>=2.5)add(waves[d]>=4?2:1,"🌊",t("al_sea"),d,t("al_v",waves[d].toFixed(1)));
 });
 const k=Object.keys(G);
 $("alerts").innerHTML=k.length?k.map(x=>`<div class="alr ${G[x].l===2?"l2":""}"><b>${G[x].ic} ${x}</b> : ${G[x].r.join(", ")}</div>`).join(""):'<div class="alr" style="border-left-color:#1b9e77">'+t("al_none")+'</div>';
}
function ld(k){try{return JSON.parse(localStorage.getItem(k))}catch(e){return null}}
function sv(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
function favs(){return ld("mt_favs")||[]}
function pick(name,lat,lon){place={name,lat,lon};sv("mt_place",place);load();drawFavs()}
function isFav(){return favs().some(f=>f.name===place.name&&f.lat===place.lat)}
function drawFavs(){
 $("star").textContent=isFav()?t("fav_d"):t("fav_a");
 $("favs").innerHTML=favs().map((f,i)=>`<button data-i="${i}" aria-pressed="${f.name===place.name&&f.lat===place.lat}">${esc(f.name)}</button>`).join("");
}
$("favs").onclick=e=>{const f=favs()[e.target.dataset.i];if(f)pick(f.name,f.lat,f.lon)};
$("star").onclick=()=>{let l=favs();l=isFav()?l.filter(f=>!(f.name===place.name&&f.lat===place.lat)):[...l,place];sv("mt_favs",l);drawFavs()};
$("loc").onclick=()=>{if(!navigator.geolocation){$("hits").innerHTML='<span class="mute">'+t("geo_na")+'</span>';return}
 navigator.geolocation.getCurrentPosition(p=>pick(t("loc"),Math.round(p.coords.latitude*100)/100,Math.round(p.coords.longitude*100)/100),()=>{$("hits").innerHTML='<span class="mute">'+t("geo_no")+'</span>'})};

// Résumé d'un jour : moyenne des modèles cochés
const IC=(c,p,w)=>p>=5?["🌧️","c0"]:p>=1?["🌦️","c1"]:c>70?["☁️","c2"]:c>40?["⛅","c3"]:c>15?["🌤️","c4"]:w>40?["🌬️","c5"]:["☀️","c6"];
function agg(v,idx,f){const ss=series(v),out=ss.map(s=>{const a=idx.map(i=>s.y[i]).filter(x=>x!=null);return a.length?f(a):null}).filter(x=>x!=null);return out.length?out.reduce((a,b)=>a+b,0)/out.length:null}
const sum=a=>a.reduce((x,y)=>x+y,0),mx=a=>Math.max(...a),mi=a=>Math.min(...a),av=a=>sum(a)/a.length;
function dayInfo(d,part){
 const t=data.hourly.time,idx=t.map((s,i)=>s.startsWith(d)&&(!part||(+s.slice(11,13)>=part[0]&&+s.slice(11,13)<part[1]))?i:-1).filter(i=>i>=0);
 const hi=agg("temperature_2m",idx,mx),lo=agg("temperature_2m",idx,mi),p=agg("precipitation",idx,sum),w=agg("wind_speed_10m",idx,mx),c=agg("cloud_cover",idx,av);
 return {d,hi,lo,p:p||0,w:w||0,c:c||0,ic:IC(c||0,p||0,w||0),n:idx.length};
}
let selDay=0;
function days(){
 const ds=[...new Set(data.hourly.time.map(s=>s.slice(0,10)))].slice(0,7),info=ds.map(d=>dayInfo(d));
 if(selDay>=info.length)selDay=0;
 $("dcards").innerHTML=info.map((x,i)=>`<button class="dc" data-i="${i}" aria-pressed="${i===selDay}"><small>${new Date(x.d).toLocaleDateString(LC(),{weekday:"short",day:"numeric"})}</small><span class="i">${x.ic[0]}</span><span class="hi">${Math.round(x.hi)}°</span><small>${Math.round(x.lo)}°</small><small>${x.p>=0.2?x.p.toFixed(1)+" mm":t("dry")}</small></button>`).join("");
 const x=info[selDay],P=[["p0",0,6],["p1",6,12],["p2",12,18],["p3",18,24]];
 $("dday").innerHTML=`<p>${t("daysum","<b>"+new Date(x.d).toLocaleDateString(LC(),{weekday:"long",day:"numeric",month:"long"})+"</b>",t(x.ic[1]).toLowerCase(),Math.round(x.lo),Math.round(x.hi),Math.round(x.w),x.p>=0.2?t("rain_t",x.p.toFixed(1)):t("norain"))}</p><div class="per">`+P.map(q=>{const y=dayInfo(x.d,[q[1],q[2]]);return y.n?`<div><b>${t(q[0])}</b><div class="i">${y.ic[0]}</div>${Math.round((y.hi+y.lo)/2)}°<div class="mute">${y.p>=0.2?y.p.toFixed(1)+" mm":t("dry")} · ${Math.round(y.w)} km/h</div></div>`:""}).join("")+"</div>";
 // tendance
 const h=info.map(i=>i.hi),first=av(h.slice(0,3)),last=av(h.slice(3)),dl=last-first,wet=info.filter(i=>i.p>=1),hot=info.reduce((a,b)=>b.hi>a.hi?b:a),cold=info.reduce((a,b)=>b.hi<a.hi?b:a),wind=info.reduce((a,b)=>b.w>a.w?b:a);
 const nm=i=>new Date(i.d).toLocaleDateString(LC(),{weekday:"long"});
 let o=`<p>${Math.abs(dl)<1.5?t("o_st"):dl>0?t("o_up",Math.round(dl)):t("o_dn",Math.round(-dl))}</p>`;
 o+=`<p>${wet.length?t("o_rain",wet.map(i=>nm(i)+" ("+i.p.toFixed(1)+" mm)").join(", ")):t("o_dry")}</p>`;
 o+=`<p>${t("o_ext",nm(hot),Math.round(hot.hi),nm(cold),Math.round(cold.hi),nm(wind),Math.round(wind.w))}</p>`;
 const sp=ds.map(d=>{const v=series("temperature_2m").map(s=>{const a=data.hourly.time.map((t,i)=>t.startsWith(d)?s.y[i]:null).filter(z=>z!=null);return a.length?mx(a):null}).filter(z=>z!=null);return v.length>1?mx(v)-mi(v):0});
 o+=`<p class="mute">${sel.size<2?t("o_f0"):sp.slice(-3).some(z=>z>4)?t("o_f1"):t("o_f2")}</p>`;
 $("outlook").innerHTML=o;
}
$("dcards").onclick=e=>{const b=e.target.closest("[data-i]");if(b){selDay=+b.dataset.i;days()}};
function drawModels(){$("models").innerHTML=MODELS.map(m=>`<label><input type="checkbox" value="${m[0]}" ${sel.has(m[0])?"checked":""}><i style="background:${m[3]}"></i><div><b>${m[1]}</b><span>${m[2][LI()]}</span></div></label>`).join("")}
$("models").onchange=e=>{e.target.checked?sel.add(e.target.value):sel.delete(e.target.value);load()};
function drawTabs(){$("tabs").innerHTML=Object.entries(VARS).map(([k,v])=>`<button data-k="${k}" aria-pressed="${k===tab}">${t(v[0])}</button>`).join("")}
$("tabs").onclick=e=>{const k=e.target.dataset.k;if(!k)return;tab=k;
 [...$("tabs").children].forEach(b=>b.setAttribute("aria-pressed",b.dataset.k===k));if(data)chart()};
$("go").onclick=async()=>{const q=$("q").value.trim();if(!q)return;
 try{const r=await fetch("https://geocoding-api.open-meteo.com/v1/search?count=6&language="+LG+"&name="+encodeURIComponent(q));
  const d=await r.json();$("hits").innerHTML=(d.results||[]).map((x,i)=>`<button data-i="${i}">${esc(x.name)}, ${esc(x.country||"")}</button>`).join("")||'<span class="mute">'+t("nores")+'</span>';
  $("hits").onclick=e=>{const x=d.results[e.target.dataset.i];if(x){pick(x.name,x.latitude,x.longitude);$("hits").innerHTML=""}};
 }catch(e){$("hits").innerHTML='<span class="mute">'+t("serr")+'</span>'}};
$("q").onkeydown=e=>{if(e.key==="Enter")$("go").click()};

let map,wl,rl,mm="wind",tm,bases,bm=ld("mt_base")==="sat"?"sat":"osm";
function mapUpdate(){
 if(!window.L){$("mnote").textContent=t("mn_off");return}
 if(!map){map=L.map("map").setView([place.lat,place.lon],7);
  bases={osm:L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:12,attribution:"© OpenStreetMap"}),sat:L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:12,attribution:"Imagery © Esri"})};
  bases[bm].addTo(map);bTabs();
  wl=L.layerGroup().addTo(map);
  map.on("moveend",()=>{clearTimeout(tm);tm=setTimeout(()=>{if(mm==="wind"||mm==="clouds")grid()},700)});
  map.on("click",e=>{const a=+e.latlng.lat.toFixed(2),b=+e.latlng.lng.toFixed(2);pick(t("point")+" "+a+", "+b,a,b)});
 }else map.setView([place.lat,place.lon],map.getZoom());
 setM(mm);
}
function setM(m){mm=m;
 [...$("mtabs").children].forEach(b=>b.setAttribute("aria-pressed",b.dataset.m===m));
 wl.clearLayers();if(rl){map.removeLayer(rl);rl=null}
 if(m==="rain")radar();else grid();
}
$("mtabs").onclick=e=>{const m=e.target.dataset.m;if(m&&map)setM(m)};
async function grid(){
 const b=map.getBounds(),N=4,M=4,la=[],lo=[],cur=mm;
 for(let i=0;i<M;i++)for(let j=0;j<N;j++){la.push((b.getSouth()+(i+.5)*(b.getNorth()-b.getSouth())/M).toFixed(1));lo.push((b.getWest()+(j+.5)*(b.getEast()-b.getWest())/N).toFixed(1))}
 try{
  const d=await cf(`https://api.open-meteo.com/v1/forecast?latitude=${la}&longitude=${lo}&current=wind_speed_10m,wind_direction_10m,cloud_cover&timezone=auto`,10*60*1000);
  if(mm!==cur||mm==="rain")return;wl.clearLayers();
  (Array.isArray(d)?d:[d]).forEach(p=>{const c0=p.current;if(!c0)return;let h;
   if(cur==="wind"){const v=c0.wind_speed_10m,dir=c0.wind_direction_10m,c=v<15?"#2e86de":v<30?"#1b9e77":v<45?"#d99a00":"#c4410c";
    h=`<div class="ar"><svg width="26" height="26" viewBox="0 0 24 24" style="transform:rotate(${dir+180}deg)"><path d="M12 2 L19 20 L12 16 L5 20 Z" fill="${c}" stroke="#fff" stroke-width="1.5"/></svg>${Math.round(v)}</div>`}
   else{const q=Math.max(0,Math.min(100,c0.cloud_cover||0)),g=255-Math.round(q*.55);h=`<div class="cl" style="background:rgba(${g},${g+4},${g+10},${(.3+q/150).toFixed(2)})">${Math.round(q)}%</div>`}
   wl.addLayer(L.marker([p.latitude,p.longitude],{interactive:false,icon:L.divIcon({className:"",iconSize:[44,44],iconAnchor:[22,22],html:h})}))});
  $("mnote").textContent=t(cur==="wind"?"mn_w":"mn_c");
 }catch(e){$("mnote").textContent=t(cur==="wind"?"mn_we":"mn_ce")+" ("+String(e&&e.message||e).slice(0,70)+")"}
}
function bTabs(){[...$("btabs").children].forEach(b=>b.setAttribute("aria-pressed",b.dataset.b===bm))}
$("btabs").onclick=e=>{const b=e.target.dataset.b;if(!b||!map||b===bm)return;map.removeLayer(bases[bm]);bm=b;bases[bm].addTo(map).bringToBack();sv("mt_base",bm);bTabs()};
async function radar(){
 try{
  const d=await (await fetch("https://api.rainviewer.com/public/weather-maps.json")).json(),pp=d.radar&&d.radar.past;if(!pp||!pp.length)throw new Error("radar");const f=pp[pp.length-1];
  rl=L.tileLayer(d.host+f.path+"/256/{z}/{x}/{y}/2/1_1.png",{opacity:.65,maxNativeZoom:7,maxZoom:12,attribution:'<a href="https://rainviewer.com" target="_blank" rel="noopener">Weather data by Rain Viewer</a>'}).addTo(map);
  $("mnote").textContent=t("mn_r",new Date(f.time*1000).toLocaleTimeString(LC(),{hour:"2-digit",minute:"2-digit"}));
 }catch(e){$("mnote").textContent=t("mn_re")}
}
if("serviceWorker" in navigator)addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));
setLang(LG);load();
