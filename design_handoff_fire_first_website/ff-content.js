(function(){
const T=(th,en)=>({th,en});
const D={
 brand:T('ไฟร์ เฟิร์ส เซฟตี้ แอนด์ ทรัค','Fire First Safety & Truck'),
 legal:T('บริษัท ไฟร์ เฟิร์ส เซฟตี้ แอนด์ ทรัค จำกัด','Fire First Safety & Truck Co., Ltd.'),
 slogan:T('ความปลอดภัยในวันนี้ เพื่ออนาคตที่ยั่งยืน','Safety today, a safer tomorrow'),
 nav:[{id:'home',l:T('หน้าแรก','Home')},{id:'about',l:T('เกี่ยวกับเรา','About')},{id:'products',l:T('สินค้าและบริการ','Products & Services')},{id:'works',l:T('ผลงาน','Projects')},{id:'contact',l:T('ติดต่อ','Contact')}],
 cta:T('ขอใบเสนอราคา','Request a quote'),
 call:T('โทร 080-254-4306','Call 080-254-4306'),
 more:T('ดูทั้งหมด','View all'),
 hero:{kicker:T('รถดับเพลิง · อุปกรณ์ดับเพลิง · ฝึกอบรม','Fire trucks · Equipment · Training'),
  h1:T('มากกว่ารถดับเพลิง คือความปลอดภัยของทุกชีวิต','More than fire trucks — safety for every life'),
  lead:T('จำหน่ายรถดับเพลิง รถกู้ภัยเฉพาะทาง และเครื่องดับเพลิงทุกชนิด พร้อมฝึกอบรมและดูแลหลังการขายโดยทีมมืออาชีพ','Fire engines, specialist rescue vehicles and every kind of extinguisher — backed by training and after-sales care from a professional team.')},
 values:[{k:T('เร็ว','Fast'),s:T('Fast response','Fast response'),d:T('ส่งมอบและเข้าถึงจุดเกิดเหตุได้รวดเร็ว','Quick delivery and quick access to the scene')},
  {k:T('รอด','Save'),s:T('Save lives','Save lives'),d:T('อุปกรณ์และทีมที่ช่วยชีวิตได้จริง','Equipment and teams that actually save lives')},
  {k:T('ปลอดภัย','Safe'),s:T('Safe & resilient','Safe & resilient'),d:T('ป้องกัน พร้อมรับ แก้ไข ฟื้นฟู ครบจบในที่เดียว','Prevent, prepare, respond, recover — all in one place')}],
 services:[
  {t:T('รถดับเพลิงและรถกู้ภัยเฉพาะทาง','Fire & specialist rescue vehicles'),d:T('ออกแบบและประกอบตามภารกิจของหน่วยงาน','Designed and built around your mission')},
  {t:T('อุปกรณ์ดับเพลิงและอุปกรณ์กู้ภัย','Fire & rescue equipment'),d:T('เครื่องดับเพลิงทุกชนิด หัวฉีด สายส่งน้ำ เครื่องสูบน้ำ','Extinguishers, nozzles, hoses and pumps')},
  {t:T('เครื่องมือกู้ชีพและกู้ภัย','Rescue tools'),d:T('ชุดตัด ถ่าง ยก สำหรับอุบัติเหตุและโครงสร้างถล่ม','Cutters, spreaders and lifting kits')},
  {t:T('ชุดป้องกันส่วนบุคคล (PPE)','Personal protective equipment'),d:T('ชุดผจญเพลิง หมวก ถุงมือ และเครื่องช่วยหายใจ','Turnout gear, helmets, gloves and SCBA')},
  {t:T('อุปกรณ์การแพทย์ฉุกเฉิน','Emergency medical equipment'),d:T('เปลสนาม อุปกรณ์ปฐมพยาบาล และรถพยาบาล','Stretchers, first-aid kits and ambulances')},
  {t:T('การฝึกอบรมและซ้อมแผน','Training & drills'),d:T('ดับเพลิงขั้นต้น อพยพหนีไฟ และซ้อมแผนฉุกเฉิน','Basic firefighting, evacuation and emergency drills')},
  {t:T('ที่ปรึกษาด้านความปลอดภัย','Safety consulting'),d:T('วางแผนระบบป้องกันอัคคีภัยสำหรับสถานประกอบการ','Fire-protection planning for your site')},
  {t:T('บริการตรวจสอบและบำรุงรักษา','Inspection & maintenance'),d:T('ตรวจสภาพ เติมสาร และซ่อมบำรุงตามรอบ','Scheduled checks, refills and servicing')}],
 fleet:[
  {t:T('รถดับเพลิง','Fire engine'),d:T('ระงับเหตุเบื้องต้น สูบน้ำ ดับเพลิงทั่วไป','First response, pumping, general firefighting')},
  {t:T('รถบรรทุกน้ำดับเพลิง','Water tender'),d:T('บรรทุกน้ำปริมาณมาก สนับสนุนพื้นที่ห่างไกล','High-volume water for remote areas')},
  {t:T('รถบันไดดับเพลิง','Ladder truck'),d:T('เข้าถึงอาคารสูง ช่วยเหลือ อพยพ','High-rise access, rescue, evacuation')},
  {t:T('รถกู้ภัย','Rescue truck'),d:T('กู้ภัยทางเทคนิค อุบัติเหตุ ช่วยชีวิต','Technical rescue and accidents')},
  {t:T('รถพยาบาลกู้ชีพขั้นสูง','ALS ambulance'),d:T('ช่วยชีวิตฉุกเฉิน ส่งต่อโรงพยาบาล','Emergency life support and transfer')},
  {t:T('รถวัตถุอันตราย','Hazmat truck'),d:T('สารเคมีและวัตถุอันตราย ควบคุม ชำระล้าง','Chemical control and decontamination')},
  {t:T('รถกระบะกู้ภัยเคลื่อนที่เร็ว (EV)','EV rapid response'),d:T('เข้าถึงจุดเกิดเหตุเร็ว สนับสนุนกู้ภัยเบื้องต้น','Fast first response')},
  {t:T('รถจักรยานยนต์กู้ภัย','Rescue motorcycle'),d:T('เข้าถึงพื้นที่แคบ ปฐมพยาบาลเบื้องต้น','Narrow-access first aid')},
  {t:T('เรือกู้ภัยพร้อมเทรลเลอร์','Rescue boat with trailer'),d:T('ช่วยเหลือผู้ประสบภัยทางน้ำ','Water rescue')},
  {t:T('เจ็ตสกีกู้ภัยพร้อมเทรลเลอร์','Rescue jet ski with trailer'),d:T('เข้าถึงจุดอับ น้ำตื้น','Shallow-water access')}],
 works:[
  {img:'assets/drill.jpg',t:T('ซ้อมแผนโต้ตอบภาวะฉุกเฉินในสถานประกอบการ','Emergency response drill on site'),c:T('ฝึกอบรม','Training')},
  {img:'assets/extinguisher.jpg',t:T('ฝึกอบรมการใช้ถังดับเพลิง','Extinguisher training'),c:T('ฝึกอบรม','Training')},
  {img:'assets/triage.jpg',t:T('คัดกรองและช่วยเหลือผู้ประสบภัย','Casualty triage & rescue'),c:T('ฝึกอบรม','Training')},
  {img:'assets/comms.jpg',t:T('ระบบสื่อสารในการบัญชาการ ณ จุดเกิดเหตุ','Incident command communications'),c:T('ที่ปรึกษา','Consulting')},
  {img:'assets/firetruck.jpg',t:T('ส่งมอบรถดับเพลิง','Fire engine delivery'),c:T('ยานพาหนะ','Vehicles')},
  {img:'assets/pickup.jpg',t:T('รถกระบะดับเพลิงและกู้ภัย','Fire & rescue pickup'),c:T('ยานพาหนะ','Vehicles')},
  {img:'assets/trucks.jpg',t:T('รถดับเพลิงหลายรุ่น หลายแชสซี','Fire trucks on multiple chassis'),c:T('ยานพาหนะ','Vehicles')},
  {img:'assets/pumps.jpg',t:T('เครื่องสูบน้ำดับเพลิง สินค้าพร้อมส่ง','Fire pumps in stock'),c:T('อุปกรณ์','Equipment')}],
 reviews:[
  {q:T('ทีมงานอบรมเข้าใจง่าย พนักงานใช้ถังดับเพลิงได้จริงหลังการฝึกเพียงวันเดียว','Clear training — our staff could actually use extinguishers after one day.'),w:T('ผู้จัดการฝ่ายความปลอดภัย โรงงานอุตสาหกรรม','Safety manager, manufacturing plant')},
  {q:T('รถดับเพลิงส่งมอบตรงเวลา สเปกตรงตามที่หน่วยงานต้องการ','The fire engine arrived on time and exactly to spec.'),w:T('หน่วยงานท้องถิ่น','Local government unit')},
  {q:T('บริการหลังการขายดี โทรแล้วมีคนรับ เข้ามาตรวจถึงที่','Great after-sales — they pick up the phone and come on site.'),w:T('นิติบุคคลอาคารชุด','Condominium management')}],
 reviewNote:T('ข้อความตัวอย่าง — แทนที่ด้วยรีวิวจริง','Sample copy — replace with real reviews'),
 pricing:[
  {t:T('ฝึกอบรมดับเพลิงขั้นต้น','Basic firefighting course'),p:T('สอบถามราคา','On request'),u:T('ต่อรุ่น','per group'),f:[T('ภาคทฤษฎีและปฏิบัติ','Theory & practice'),T('ฝึกใช้ถังดับเพลิงจริง','Live extinguisher use'),T('ใบประกาศนียบัตร','Certificate')]},
  {t:T('ตรวจสอบและบำรุงรักษา','Inspection & maintenance'),p:T('สอบถามราคา','On request'),u:T('ต่อปี','per year'),f:[T('ตรวจถังดับเพลิงตามรอบ','Scheduled extinguisher checks'),T('เติมสารและเปลี่ยนอะไหล่','Refills & parts'),T('รายงานผลการตรวจ','Inspection report')],hl:true},
  {t:T('จัดหารถดับเพลิงและรถกู้ภัย','Vehicle supply'),p:T('ตามสเปก','By spec'),u:T('ต่อคัน','per vehicle'),f:[T('ออกแบบตามภารกิจ','Mission-based design'),T('ส่งมอบพร้อมอบรมการใช้งาน','Delivery with operator training'),T('ดูแลหลังการขาย','After-sales care')]}],
 faq:[
  {q:T('สามารถสั่งรถดับเพลิงตามสเปกของหน่วยงานได้หรือไม่','Can you build a vehicle to our spec?'),a:T('ได้ ทีมงานจะประเมินภารกิจ พื้นที่ และงบประมาณ แล้วเสนอแชสซีและอุปกรณ์ที่เหมาะสม','Yes. We assess your mission, terrain and budget, then propose the chassis and equipment.')},
  {q:T('มีบริการฝึกอบรมนอกสถานที่หรือไม่','Do you train on site?'),a:T('มี เราจัดอบรมและซ้อมแผนฉุกเฉินที่สถานประกอบการของลูกค้าได้','Yes — training and drills can be held at your premises.')},
  {q:T('ควรตรวจสอบเครื่องดับเพลิงบ่อยแค่ไหน','How often should extinguishers be checked?'),a:T('แนะนำตรวจสภาพด้วยตนเองทุกเดือน และให้ผู้เชี่ยวชาญตรวจบำรุงรักษาอย่างน้อยปีละครั้ง','A visual check monthly, and professional servicing at least once a year.')},
  {q:T('มีบริการหลังการขายอย่างไร','What after-sales support do you offer?'),a:T('ตรวจเช็กตามรอบ ซ่อมบำรุง จัดหาอะไหล่ และให้คำปรึกษาโดยทีมมืออาชีพ','Scheduled checks, repairs, spare parts and expert advice.')},
  {q:T('ขอใบเสนอราคาได้อย่างไร','How do I request a quote?'),a:T('โทร 080-254-4306 หรืออีเมล firefirstsafetyandtruck@gmail.com พร้อมรายละเอียดความต้องการ','Call 080-254-4306 or email firefirstsafetyandtruck@gmail.com with your requirements.')}],
 about:{h:T('ป้องกัน พร้อมรับ แก้ไข ฟื้นฟู ครบจบในที่เดียว','Prevent, prepare, respond, recover — all in one place'),
  p:T('บริษัท ไฟร์ เฟิร์ส เซฟตี้ แอนด์ ทรัค จำกัด ประกอบกิจการจำหน่ายอุปกรณ์ดับเพลิงและเครื่องดับเพลิงทุกชนิด รวมถึงรถดับเพลิงและรถกู้ภัยเฉพาะทาง เราเชื่อว่าความปลอดภัยไม่ได้จบที่การขาย จึงดูแลตั้งแต่การวางแผน การฝึกอบรม จนถึงการบำรุงรักษา','Fire First Safety & Truck Co., Ltd. supplies fire-fighting equipment and extinguishers of every kind, along with fire trucks and specialist rescue vehicles. We believe safety doesn\'t end at the sale — so we stay with you from planning and training through to maintenance.'),
  md:T('พิทยา ดำงามกิจ','Pittaya Damngamkij'),mdr:T('กรรมการผู้จัดการ','Managing Director'),
  facts:[{k:T('เลขประจำตัวผู้เสียภาษี','Tax ID'),v:T('0125567038118','0125567038118')},{k:T('หมวดธุรกิจ','Business category'),v:T('ขายส่งเครื่องจักรและอุปกรณ์อื่นๆ','Wholesale of other machinery & equipment')},{k:T('สำนักงาน','Office'),v:T('ไทรน้อย นนทบุรี','Sai Noi, Nonthaburi')}]},
 contact:{addr:T('48/68 ม.2 ต.ไทรน้อย อ.ไทรน้อย จ.นนทบุรี 11150','48/68 Moo 2, Sai Noi, Sai Noi, Nonthaburi 11150'),tel:'080-254-4306',mail:'firefirstsafetyandtruck@gmail.com',
  l:{addr:T('ที่อยู่','Address'),tel:T('โทรศัพท์','Phone'),mail:T('อีเมล','Email'),name:T('ชื่อ-นามสกุล','Full name'),org:T('หน่วยงาน/บริษัท','Organisation'),msg:T('รายละเอียดที่ต้องการ','What do you need?'),send:T('ส่งข้อความ','Send message'),sent:T('ได้รับข้อความแล้ว ทีมงานจะติดต่อกลับโดยเร็ว','Thanks — we will be in touch shortly.')}},
 seo:{
  home:{t:T('ไฟร์ เฟิร์ส เซฟตี้ แอนด์ ทรัค | รถดับเพลิง อุปกรณ์ดับเพลิง เครื่องดับเพลิงทุกชนิด นนทบุรี','Fire First Safety & Truck | Fire Trucks, Fire Extinguishers & Fire Equipment, Thailand'),d:T('จำหน่ายรถดับเพลิง รถกู้ภัย เครื่องดับเพลิงและอุปกรณ์ดับเพลิงทุกชนิด พร้อมฝึกอบรมดับเพลิง ซ้อมแผนอพยพ ตรวจสอบและบำรุงรักษาถังดับเพลิง โทร 080-254-4306','Fire engines, rescue vehicles, extinguishers and all fire equipment, plus fire training, evacuation drills and extinguisher servicing in Thailand. Call 080-254-4306.')},
  about:{t:T('เกี่ยวกับเรา | บริษัท ไฟร์ เฟิร์ส เซฟตี้ แอนด์ ทรัค จำกัด','About us | Fire First Safety & Truck Co., Ltd.'),d:T('ผู้จำหน่ายอุปกรณ์ดับเพลิงและรถดับเพลิง ไทรน้อย นนทบุรี ดูแลครบตั้งแต่วางแผน ฝึกอบรม ถึงบำรุงรักษา','Fire equipment and fire truck supplier in Sai Noi, Nonthaburi — from planning and training to maintenance.')},
  products:{t:T('รถดับเพลิง รถกู้ภัย ถังดับเพลิง ชุด PPE และราคา | Fire First','Fire trucks, rescue vehicles, extinguishers, PPE & pricing | Fire First'),d:T('รถดับเพลิง รถบรรทุกน้ำ รถบันได รถกู้ภัย รถพยาบาล เครื่องดับเพลิง เครื่องสูบน้ำดับเพลิง ชุดผจญเพลิง และแพ็กเกจฝึกอบรม','Fire engines, water tenders, ladder and rescue trucks, ambulances, extinguishers, fire pumps, turnout gear and training packages.')},
  works:{t:T('ผลงาน ฝึกอบรมดับเพลิงและส่งมอบรถดับเพลิง | Fire First','Projects: fire training & vehicle deliveries | Fire First'),d:T('ผลงานฝึกอบรมการใช้ถังดับเพลิง ซ้อมแผนฉุกเฉินในสถานประกอบการ และการส่งมอบรถดับเพลิง','Extinguisher training, on-site emergency drills and fire truck deliveries.')},
  contact:{t:T('ติดต่อ ขอใบเสนอราคา รถดับเพลิง อุปกรณ์ดับเพลิง | Fire First','Contact & quotes — fire trucks and equipment | Fire First'),d:T('โทร 080-254-4306 อีเมล firefirstsafetyandtruck@gmail.com 48/68 ม.2 ต.ไทรน้อย อ.ไทรน้อย จ.นนทบุรี 11150','Call 080-254-4306, email firefirstsafetyandtruck@gmail.com. 48/68 Moo 2, Sai Noi, Nonthaburi 11150.')}},
 h:{services:T('สินค้าและบริการ','Products & services'),fleet:T('ยานพาหนะเฉพาะทาง','Specialist vehicles'),works:T('ผลงานและกิจกรรม','Projects & activities'),reviews:T('เสียงจากลูกค้า','What clients say'),pricing:T('แพ็กเกจและราคา','Packages & pricing'),faq:T('คำถามที่พบบ่อย','FAQ'),contact:T('ติดต่อเรา','Contact us'),about:T('เกี่ยวกับเรา','About us'),hq:T('สำนักงานและศูนย์บริการ','Office & service centre'),close:T('เลือก FIRE FIRST เลือกความปลอดภัย','Choose Fire First. Choose safety.'),closeSub:T('ทีมงานมืออาชีพ พร้อมดูแลคุณในทุกสถานการณ์','A professional team ready for every situation.'),all:T('ทั้งหมด','All')}
};
const r=(o,l)=>{if(Array.isArray(o))return o.map(x=>r(x,l));if(o&&typeof o==='object'){if('th'in o&&'en'in o&&Object.keys(o).length===2)return o[l];const n={};for(const k in o)n[k]=r(o[k],l);return n;}return o;};
window.FFpick=l=>r(D,l);
})();
