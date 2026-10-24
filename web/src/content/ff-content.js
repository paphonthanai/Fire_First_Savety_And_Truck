// เนื้อหาทั้งหมดของเว็บไซต์ (ไทย/อังกฤษ) — ย้ายมาจาก design_handoff/ff-content.js
// แก้ข้อความได้ที่ไฟล์นี้ไฟล์เดียว
const T=(th,en)=>({th,en});
export const D={
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
  {t:T('บริการตรวจสอบและบำรุงรักษา','Inspection & maintenance'),d:T('ตรวจสภาพ เติมสาร และซ่อมบำรุงตามรอบ','Scheduled checks, refills and servicing')},
  {t:T('อุปกรณ์จราจรและป้ายเตือน','Traffic safety equipment & signs'),d:T('กรวย แผงกั้น เสาล้มลุก กระจกโค้ง ป้ายจราจร และเสื้อสะท้อนแสง','Cones, barriers, bollards, convex mirrors, signs and reflective vests')},
  {t:T('ไฟและป้ายไฟพลังงานแสงอาทิตย์','Solar lights & LED signs'),d:T('ไฟกระพริบ ป้ายไฟแจ้งเตือน LED และไฟถนนโซล่าเซลล์','Flashing beacons, LED warning signs and solar street lights')}],
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
 // สินค้าจากโบรชัวร์ของบริษัท (ilovepdf_pages-to-jpg ไฟร์เฟิร์ส) — รูปอยู่ที่ public/img/products/{img}
 catalog:[
  {id:'traffic',c:T('อุปกรณ์จราจร','Traffic safety equipment'),items:[
   {img:'cone',t:T('กรวยจราจร','Traffic cones'),f:[T('PE+EVA สีส้มมาตรฐาน กันแสง UV','PE+EVA, standard orange, UV-resistant'),T('สูง 50 / 70 / 80 ซม. ฐาน 30–44 ซม.','50 / 70 / 80 cm tall, 30–44 cm base'),T('ติดแถบสะท้อนแสง สั่งสีพิเศษได้','Reflective bands, custom colours available')]},
   {img:'bollard-flex',t:T('เสาจราจรล้มลุก','Flexible bollards'),f:[T('ชนิด PE หรือ EVA เด้งคืนรูปเมื่อถูกชน','PE or EVA, springs back after impact'),T('แดง ส้ม น้ำเงิน เขียว หรือสีตามสั่ง','Red, orange, blue, green or custom'),T('แถบสะท้อนแสง 3 แถบ จุดยึด 3 จุด','3 reflective bands, 3 anchor points')]},
   {img:'bollard-steel',t:T('เสาจราจรแบบเหล็ก','Steel bollards'),f:[T('Ø 3 นิ้ว สูง 80 ซม. หนา 2.3 มม.','Ø 3 in, 80 cm tall, 2.3 mm wall'),T('เหล็กชุบกัลวาไนซ์','Galvanised steel'),T('พ่นสีอบความร้อน เหลือง-ดำ','Baked yellow-black finish')]},
   {img:'barrier-steel',t:T('แผงกั้นจราจรเหล็ก','Steel traffic barriers'),f:[T('ยาว 100–300 ซม. สูง 100 ซม.','100–300 cm long, 100 cm tall'),T('แบบขาตั้งยาง 4 มุม หรือแบบล้อเข็น 8 นิ้ว','Rubber feet or 8-inch wheels'),T('ท่อเหล็ก 3/4" สีแดง-ขาว สกรีนชื่อหน่วยงานได้','3/4" steel tube, red-white, custom print')]},
   {img:'barrier-water',t:T('แผงกั้นจราจรชนิดบรรจุน้ำ','Water-filled barriers'),f:[T('ยาว 100 / 150 / 200 ซม. สูง 80 ซม.','100 / 150 / 200 cm long, 80 cm tall'),T('Polyethylene เติมน้ำหรือทรายเพิ่มความมั่นคง','Polyethylene, fill with water or sand'),T('สกรีนชื่อหน่วยงานได้','Custom print available')]},
   {img:'mirror',t:T('กระจกโค้งจราจร','Convex traffic mirrors'),f:[T('18 / 24 / 32 / 40 นิ้ว','18 / 24 / 32 / 40 in'),T('กระจกแท้ โพลีคาร์บอเนต หรือสแตนเลส','Glass, polycarbonate or stainless'),T('เพิ่มเสาสูง 3 ม. พร้อมติดตั้งได้','Optional 3 m pole and installation')]},
   {img:'signs',t:T('ป้ายเตือนจราจร','Traffic signs'),f:[T('45 / 60 / 75 ซม.','45 / 60 / 75 cm'),T('เหล็กซิงค์ 1.2 มม. หรืออลูมิเนียม 2 มม.','1.2 mm galvanised steel or 2 mm aluminium'),T('สติ๊กเกอร์สะท้อนแสงถึงเกรด Diamond','Reflective sheeting up to Diamond Grade')]},
   {img:'checkpoint',t:T('แผงกั้นสามเหลี่ยมหยุดตรวจ','Checkpoint barriers'),f:[T('50 × 100 × สูง 160 หรือ 180 ซม.','50 × 100 × 160 or 180 cm tall'),T('ไฟไซเรน 6 นิ้ว + LED T8 2 หลอด ล้อ 8 นิ้ว','6-in beacon + 2 LED T8 tubes, 8-in wheels'),T('ไฟบ้าน แบตเตอรี่ หรือทั้งสองระบบ','Mains, battery or both')]},
   {img:'baton',t:T('กระบอกไฟกระพริบ','LED traffic batons'),f:[T('ยาว 54 ซม. กันน้ำ ตกไม่แตก','54 cm, waterproof, drop-resistant'),T('3 จังหวะ: กระพริบ / ค้าง / ไฟฉาย','3 modes: flash / steady / torch'),T('แบบชาร์จไฟบ้าน หรือใช้ถ่าน D 2 ก้อน','Rechargeable or 2 × D batteries')]},
   {img:'vests',t:T('เสื้อสะท้อนแสง','Reflective vests'),f:[T('หลายแบบ หลายสี','Many styles and colours'),T('แบบงานจราจร ตำรวจ และหน่วยงาน','Traffic, police and agency styles'),T('สกรีนชื่อหน่วยงานได้','Custom print available')]}]},
  {id:'solar',c:T('ไฟและป้ายไฟพลังงานแสงอาทิตย์','Solar lights & LED signs'),items:[
   {img:'solar-signs',t:T('ป้ายไฟแจ้งเตือน LED','LED warning signs'),f:[T('แผงโซล่าเซลล์ชาร์จอัตโนมัติ','Self-charging solar panel'),T('LED Ultra Bright 120–230 ดวง (ปรับได้)','120–230 Ultra Bright LEDs (adjustable)'),T('สติ๊กเกอร์เกรด Diamond ทำข้อความตามสั่งได้','Diamond Grade sheeting, custom wording')]},
   {img:'bump-sign',t:T('ป้ายเตือนระวังเนินกระโดด','Speed-bump warning sign'),f:[T('ป้าย 60 × 100 ซม. เสาสูง 250 ซม.','60 × 100 cm sign, 250 cm pole'),T('โซล่าเซลล์ 20W แบตเตอรี่ 12V 12Ah','20 W solar, 12 V 12 Ah battery'),T('LED ไม่ต่ำกว่า 150 ดวง','At least 150 LEDs')]},
   {img:'solar-flasher',t:T('ไฟกระพริบพลังงานแสงอาทิตย์','Solar flashing beacons'),f:[T('LED 170 หรือ 230 ดวง โคม 300 มม.','170 or 230 LEDs, 300 mm lens'),T('กระพริบสูงสุด 60 ครั้ง/นาที','Up to 60 flashes per minute'),T('แบตเตอรี่ 12V 12Ah สำรองได้ถึง 3 วัน','12 V 12 Ah battery, up to 3 days backup')]},
   {img:'solar-flasher-pole',t:T('ไฟกระพริบโซล่าเซลล์พร้อมเสา','Solar beacon with pole'),f:[T('เสาเหล็ก 3–3.5 นิ้ว สูง 2.5–3 ม. พร้อมเพลท','3–3.5 in steel pole, 2.5–3 m, base plate'),T('โซล่าเซลล์ 10W มองเห็นได้ 1,000 ม.','10 W solar, visible from 1,000 m'),T('มีรุ่นได้มาตรฐาน MiT แบตเตอรี่ มอก.','MiT-certified model with TIS battery')]},
   {img:'solar-streetlight',t:T('ไฟถนนโซล่าเซลล์','Solar street lights'),f:[T('ส่องสว่าง 280–360 ตร.ม.','Lights 280–360 m²'),T('ใช้งานต่อเนื่อง 10–16 ชั่วโมง','10–16 hours per charge'),T('เสากัลวาไนซ์ 3 นิ้ว สูง 6 ม.','3 in galvanised pole, 6 m')]}]},
  {id:'fire',c:T('อุปกรณ์ดับเพลิงและชุดป้องกัน','Firefighting equipment & PPE'),items:[
   {img:'turnout-suit',t:T('ชุดดับเพลิง','Turnout suits'),f:[T('3 ชั้น: FR Cotton / Moisture Barrier / Thermal Barrier','3 layers: FR cotton / moisture / thermal barrier'),T('สีกรมหรือสีส้ม ขนาด M และ L','Navy or orange, sizes M and L'),T('กระเป๋าวิทยุ เสริมหนังที่เข่าและปลายแขน','Radio pocket, leather-reinforced knees and cuffs')]},
   {img:'helmet',t:T('หมวกดับเพลิง','Firefighter helmets'),f:[T('เทอร์โมพลาสติก ทนแรงกระแทกและความร้อน','Thermoplastic, impact- and heat-resistant'),T('กระจกหน้าโพลีคาร์บอเนตปรอทสีเงิน','Silver-coated polycarbonate visor'),T('ขาจับไฟฉาย และผ้าบังคอ','Torch bracket and neck curtain')]},
   {img:'gloves',t:T('ถุงมือดับเพลิง','Firefighting gloves'),f:[T('หนังวัวแท้ ชั้นกันความร้อน Kevlar','Cowhide leather, Kevlar thermal layer'),T('ชั้นกันน้ำระบายอากาศได้','Waterproof, breathable lining'),T('มาตรฐาน EN 659','EN 659 certified')]},
   {img:'boots',t:T('รองเท้าดับเพลิง','Firefighting boots'),f:[T('พื้นกันทะลุ ทนความร้อน กันไฟฟ้า','Puncture-proof, heat- and electrical-resistant sole'),T('หัวเสริมเหล็ก มีหูดึง','Steel toe, pull loops'),T('มาตรฐาน EN 15090:2012','EN 15090:2012 certified')]},
   {img:'nozzle',t:T('หัวฉีดด้ามปืน','Pistol-grip nozzles'),f:[T('หัวฉีดดับเพลิงแบบด้ามจับ','Fire nozzle with pistol grip')]},
   {img:'hose',t:T('สายส่งน้ำดับเพลิง','Fire hoses'),f:[T('สายส่งน้ำพร้อมข้อต่อ','Hose with couplings')]},
   {img:'couplings',t:T('ข้อต่อและวาล์ว','Couplings & valves'),f:[T('ข้อต่อสวมเร็ว ข้อต่อแยก และวาล์วดับเพลิง','Quick couplings, dividing breechings and valves')]},
   {img:'extinguisher-dry',t:T('เครื่องดับเพลิงชนิดเคมีแห้ง','Dry chemical extinguishers'),f:[T('ชนิดผงเคมีแห้ง (Dry Chemical)','Dry chemical powder type')]},
   {img:'extinguisher-powersoft',t:T('เครื่องดับเพลิง Power Soft','Power Soft extinguishers'),f:[T('เครื่องดับเพลิง King รุ่น Power Soft','King Power Soft extinguisher')]}]}],
 works:[
  {img:'drill.jpg',t:T('ซ้อมแผนโต้ตอบภาวะฉุกเฉินในสถานประกอบการ','Emergency response drill on site'),c:T('ฝึกอบรม','Training')},
  {img:'extinguisher.jpg',t:T('ฝึกอบรมการใช้ถังดับเพลิง','Extinguisher training'),c:T('ฝึกอบรม','Training')},
  {img:'triage.jpg',t:T('คัดกรองและช่วยเหลือผู้ประสบภัย','Casualty triage & rescue'),c:T('ฝึกอบรม','Training')},
  {img:'comms.jpg',t:T('ระบบสื่อสารในการบัญชาการ ณ จุดเกิดเหตุ','Incident command communications'),c:T('ที่ปรึกษา','Consulting')},
  {img:'firetruck.jpg',t:T('ส่งมอบรถดับเพลิง','Fire engine delivery'),c:T('ยานพาหนะ','Vehicles')},
  {img:'pickup.jpg',t:T('รถกระบะดับเพลิงและกู้ภัย','Fire & rescue pickup'),c:T('ยานพาหนะ','Vehicles')},
  {img:'trucks.jpg',t:T('รถดับเพลิงหลายรุ่น หลายแชสซี','Fire trucks on multiple chassis'),c:T('ยานพาหนะ','Vehicles')},
  {img:'pumps.jpg',t:T('เครื่องสูบน้ำดับเพลิง สินค้าพร้อมส่ง','Fire pumps in stock'),c:T('อุปกรณ์','Equipment')}],
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
  products:{t:T('รถดับเพลิง อุปกรณ์ดับเพลิง อุปกรณ์จราจร ไฟโซล่าเซลล์ | Fire First','Fire trucks, fire equipment, traffic safety & solar lights | Fire First'),d:T('รถดับเพลิง รถกู้ภัย เครื่องดับเพลิง ชุดผจญเพลิง กรวยจราจร แผงกั้น เสาล้มลุก กระจกโค้ง ป้ายจราจร ไฟกระพริบและไฟถนนโซล่าเซลล์ พร้อมแพ็กเกจฝึกอบรม','Fire engines, rescue vehicles, extinguishers, turnout gear, traffic cones, barriers, bollards, convex mirrors, traffic signs, solar beacons and street lights, plus training packages.')},
  works:{t:T('ผลงาน ฝึกอบรมดับเพลิงและส่งมอบรถดับเพลิง | Fire First','Projects: fire training & vehicle deliveries | Fire First'),d:T('ผลงานฝึกอบรมการใช้ถังดับเพลิง ซ้อมแผนฉุกเฉินในสถานประกอบการ และการส่งมอบรถดับเพลิง','Extinguisher training, on-site emergency drills and fire truck deliveries.')},
  contact:{t:T('ติดต่อ ขอใบเสนอราคา รถดับเพลิง อุปกรณ์ดับเพลิง | Fire First','Contact & quotes — fire trucks and equipment | Fire First'),d:T('โทร 080-254-4306 อีเมล firefirstsafetyandtruck@gmail.com 48/68 ม.2 ต.ไทรน้อย อ.ไทรน้อย จ.นนทบุรี 11150','Call 080-254-4306, email firefirstsafetyandtruck@gmail.com. 48/68 Moo 2, Sai Noi, Nonthaburi 11150.')}},
 h:{services:T('สินค้าและบริการ','Products & services'),fleet:T('ยานพาหนะเฉพาะทาง','Specialist vehicles'),catalog:T('สินค้าในแคตตาล็อก','Product catalogue'),catalogNote:T('ขนาดและรุ่นอื่นสั่งได้ สอบถามราคาที่ 080-254-4306','Other sizes and models on request. Call 080-254-4306 for prices.'),works:T('ผลงานและกิจกรรม','Projects & activities'),reviews:T('เสียงจากลูกค้า','What clients say'),pricing:T('แพ็กเกจและราคา','Packages & pricing'),faq:T('คำถามที่พบบ่อย','FAQ'),contact:T('ติดต่อเรา','Contact us'),about:T('เกี่ยวกับเรา','About us'),hq:T('สำนักงานและศูนย์บริการ','Office & service centre'),close:T('เลือก FIRE FIRST เลือกความปลอดภัย','Choose Fire First. Choose safety.'),closeSub:T('ทีมงานมืออาชีพ พร้อมดูแลคุณในทุกสถานการณ์','A professional team ready for every situation.'),all:T('ทั้งหมด','All')}
};
const r=(o,l)=>{if(Array.isArray(o))return o.map(x=>r(x,l));if(o&&typeof o==='object'){if('th'in o&&'en'in o&&Object.keys(o).length===2)return o[l];const n={};for(const k in o)n[k]=r(o[k],l);return n;}return o;};

/** คืนเนื้อหาเฉพาะภาษา ('th' | 'en') */
export const pick = (l) => r(D, l)
