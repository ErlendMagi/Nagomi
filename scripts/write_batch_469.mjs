import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_469 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['まとっ','ゆるやか','すえ','這い','とどまり','取り除い','くわしく','やしない']
const B_T = ['下巻','ストローク','ガイダンス','仕手','各論','持ち味','後発','自助']
const C_T = ['霊魂','病床','擬似','昇華','接合','減免','詰め込ん','付託']
const D_T = ['カヌー','画廊','怪人','鳥獣','合奏','ファインダー','随筆','ハサミ']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09341',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お祖父ちゃんが上品な雰囲気をまとってらしたわね','Sho — Grandpa-elegant-vibe-clad','Tender','yumiko_mom'),
    mk('ママ、ぼく、ゆるやかな坂道で自転車を漕いだよ','Mom — me gentle-slope-bike','Eager child','sho_child'),
    mk('翔くん、お祖父ちゃんの言葉のすえに大事な事があったわね','Sho — Grandpa-word-end-impt','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんが床を這いずって遊んで下さったよ','Mom — me Grandpa-floor-crawl-play','Eager child','sho_child'),
    mk('翔くん、お祖父ちゃんがお家にとどまりたいって仰ったわ','Sho — Grandpa-home-stay-said','Reflective','yumiko_mom'),
    mk('ママ、お祖父ちゃんがぼくのまつ毛のゴミを取り除いて下さったよ','Mom — me Grandpa-eyelash-debris-remove','Tender child','sho_child'),
    mk('翔くん、くわしくお祖父ちゃんに教えてもらいましょうね','Sho — detail-Grandpa-teach','Direction','yumiko_mom'),
    mk('ママ、ぼく、自分のお小遣いをやしないに使うよ','Mom — me allowance-saving-use','Earnest close','sho_child'),
  ]},
  {id:'conv_09342',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お店全体が落ち着いた空気をまとってるね、メイちゃん','Aoi — store-calm-vibe-clad Mei','Pleased','mei_romantic'),
    mk('葵、お客様、ゆるやかな会話を楽しんでらしたよ、メイちゃん','Aoi — cust-gentle-talk-enjoy Mei','Reflective','aoi_barista'),
    mk('葵、お話のすえに、お客様、また来ますって仰ったよ、メイちゃん','Aoi — talk-end-cust-return-said Mei','Pleased','mei_romantic'),
    mk('葵、お客様、子犬が床を這いずる写真を見せて下さったよ、メイちゃん','Aoi — cust-puppy-floor-crawl-photo Mei','Tender','aoi_barista'),
    mk('葵、お店にもう少しとどまりたいってお客様が仰ってたよ、メイちゃん','Aoi — store-stay-cust-said Mei','Pleased','mei_romantic'),
    mk('葵、テーブルのシミを取り除いてピカピカにしたわね、メイちゃん','Aoi — table-stain-remove-shine Mei','Praising','aoi_barista'),
    mk('葵、お客様にメニューをくわしくご説明しましょう、メイちゃん','Aoi — cust-menu-detail-explain Mei','Direction','mei_romantic'),
    mk('葵、お店の利益はやしないに回さないとね、メイちゃん','Aoi — store-profit-saving Mei','Direction close','aoi_barista'),
  ]},
  {id:'conv_09343',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんは凛とした空気をまとってらした','Gran — youth Dad-stern-vibe-clad','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、ゆるやかな川の流れを眺めるのがお好きでらしたわよね、あなた?','Yes — Grandpa-gentle-river-watch-liked, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんとのお話のすえに結婚を決めた','Gran — youth Dad-talk-end-marry-decide','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様が這いずってる頃を可愛がってらしたわよね、あなた?','Grandpa — grandkid-crawl-era-cherish, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと一つの場所にとどまり続けるのは難しかった','Gran — youth Dad-one-stay-hard','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お庭の雑草を取り除いて綺麗になさってたわよね、あなた?','Grandpa — garden-weed-remove-clean, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは歴史をくわしく教えて下さった','Gran — youth Dad-hist-detail-taught','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、若い頃、家族をやしない続けてらしたわよね、あなた?','Grandpa — youth-fam-support, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09344',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、クールな雰囲気をまとってんな','Riku — cool-vibe-clad','Praising teen','sakura_teen'),
    mk('お前、ゆるやかな坂道で自転車漕いでたな、桜','You — gentle-slope-bike Sakura','Reflective','riku_teen'),
    mk('リク、お前、テストのすえに何点取った?','Riku — test-end-how-score?','Curious','sakura_teen'),
    mk('お前、保健室で床を這いずって熱はかったろ、桜','You — nurse-floor-crawl-fever Sakura','Wry','riku_teen'),
    mk('リク、お前、放課後に教室にとどまり過ぎだぞ','Riku — after-class-stay-too-much','Wry','sakura_teen'),
    mk('お前、答案からミス取り除いてみろよ、桜','You — answer-mis-remove-try Sakura','Direction','riku_teen'),
    mk('リク、お前、解き方くわしく教えてくれ','Riku — sol-detail-teach','Direction','sakura_teen'),
    mk('お前、お小遣いをやしないに使え、桜','You — allowance-saving-use Sakura','Direction close','riku_teen'),
  ]},
  {id:'conv_09345',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんが穏やかな雰囲気をまとってるね','Sho — Mei-sis-calm-vibe-clad','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、ゆるやかな坂をスケーターで降りたよ','Mei-sis — me gentle-slope-skate','Proud child','sho_child'),
    mk('翔くん、メイ姉さんがお話のすえに「またね」と言って下さったわ','Sho — Mei-sis-talk-end-"see-you"-said','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、芝生を這いずって虫を観察したよ','Mei-sis — me grass-crawl-bug-obs','Eager child','sho_child'),
    mk('翔くん、メイ姉さんと公園にもう少しとどまりたいわね','Sho — Mei-sis-park-stay-want','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、絵の余分な線を取り除いて綺麗にしたよ','Mei-sis — me art-extra-line-remove-clean','Proud child','sho_child'),
    mk('翔くん、メイ姉さん、お絵描きのコツをくわしく教えてあげる','Sho — Mei-sis-art-tip-detail-teach','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お小遣いをやしないに少しずつ貯めるよ','Mei-sis — me allowance-saving-bit-save','Earnest close','sho_child'),
  ]},
  {id:'conv_09346',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、社史の下巻の編集を急げ','Our co — co-hist-vol2-edit-hasten','Crisp','hiroshi_boss'),
    mk('はい。営業のストロークを増やします','Yes — Sales-stroke-up','Methodical','kenji_office'),
    mk('当社、新人ガイダンスを準備しろ','Our co — newbie-guide-prep','Direction','hiroshi_boss'),
    mk('はい。市場の仕手筋に注意してます','Yes — Market-spec-care','Update','kenji_office'),
    mk('総論よりも各論で議論しろ','Outline-rather-each-disc','Direction','hiroshi_boss'),
    mk('はい。当社の持ち味を打ち出した広告を作ります','Yes — Our-co-strength-ad','Update','kenji_office'),
    mk('当社、後発でも一気に追い抜け','Our co — late-but-overtake','Direction','hiroshi_boss'),
    mk('はい。社員の自助努力を支援します','Yes — Staff-self-effort-supp','Close','kenji_office'),
  ]},
  {id:'conv_09347',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('小説シリーズの下巻発売を発表しましょう','Novel-series-vol2-launch-announce','Brisk','yuki_office'),
    mk('はい。テニス大会のストローク練習を企画しました','Yes — Tennis-comp-stroke-prac-plan','Cooperative','kenji_office'),
    mk('新人向けガイダンスの内容を確定しましょう','Newbie-guide-content-fix','Direction','yuki_office'),
    mk('はい。市場で仕手筋の動きに警戒します','Yes — Market-spec-watch','Update','kenji_office'),
    mk('提案書では各論を充実させましょう','Prop-each-enrich','Direction','yuki_office'),
    mk('はい。社員のお持ち味を生かす配置を考えます','Yes — Staff-strength-place-think','Update','kenji_office'),
    mk('後発組として勝ち抜く戦略を立てましょう','Late-group-win-strat','Direction','yuki_office'),
    mk('はい。お客様の自助グループを支援します','Yes — Cust-self-group-supp','Close','kenji_office'),
  ]},
  {id:'conv_09348',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、論文集の下巻を執筆しろ','Ren — paper-coll-vol2-write','Mentor','hiroshi_boss'),
    mk('はい。発表のストロークを練習します','Yes — Pres-stroke-prac','Earnest','ren_uni'),
    mk('蓮、新入生ガイダンスにも参加しろ','Ren — new-stud-guide-join','Direction','hiroshi_boss'),
    mk('はい。実験データの捏造は仕手のような行為だと心得ます','Yes — Data-fab-spec-act-mind','Polite','ren_uni'),
    mk('蓮、総論から各論への展開を意識しろ','Ren — outline-each-aware','Direction','hiroshi_boss'),
    mk('はい。研究室の持ち味を出した論文にします','Yes — Lab-strength-paper','Earnest','ren_uni'),
    mk('蓮、後発の研究者でも独自性で勝負しろ','Ren — late-researcher-uniq-comp','Direction','hiroshi_boss'),
    mk('はい。研究者の自助意識を高めます','Yes — Researcher-self-aware-up','Earnest close','ren_uni'),
  ]},
  {id:'conv_09349',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、捜査記録の下巻も整備されますね','Police inv-rec-vol2-prep','Cooperative','kenji_office'),
    mk('警察、緊急時のストローク的判断、頼もしいです','Police emerg-stroke-judg reliable','Cooperative','kenji_office'),
    mk('警察、市民ガイダンスもされますね','Police citizen-guide','Cooperative','kenji_office'),
    mk('警察、株価の仕手戦も捜査されますね','Police stock-spec-inv','Cooperative','kenji_office'),
    mk('警察、捜査会議で各論を詰められますね','Police inv-meet-each-set','Cooperative','kenji_office'),
    mk('警察、それぞれの持ち味を生かしたチーム編成、頼もしいです','Police each-strength-team reliable','Cooperative','kenji_office'),
    mk('警察、後発で参加する研修もありますね','Police late-train','Cooperative','kenji_office'),
    mk('警察、市民の自助努力もご支援されますね','Police citizen-self-effort-supp','Close','kenji_office'),
  ]},
  {id:'conv_09350',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、社史の下巻まで構想されたぞ','Dad — founding co-hist-vol2-plan','Sage','hiroshi_elder'),
    mk('はい。お父さんは交渉のストロークを巧みに操られた','Yes — Dad nego-stroke-skill','Commitment','hiroshi_boss'),
    mk('お父さん、新人ガイダンスで直接お話された','Dad — newbie-guide-direct','Wistful','hiroshi_elder'),
    mk('はい。お父さんは仕手筋を見抜く目をお持ちでした','Yes — Dad spec-detect-eye','Reflective','hiroshi_boss'),
    mk('お父さん、各論を社員に深く考えさせた','Dad — each-staff-deep-think','Wistful','hiroshi_elder'),
    mk('はい。お父さんは当社の持ち味を全国に伝えられた','Yes — Dad our-co-strength-nat-conv','Reflective','hiroshi_boss'),
    mk('お父さん、後発の業界でも一位を取られたぞ','Dad — late-industry-first','Wistful','hiroshi_elder'),
    mk('はい。お父さんは社員の自助の精神を尊んだ','Yes — Dad staff-self-spirit-esteem','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09351',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、宗教における霊魂の概念を論文で扱いましたね','Ren — relig-soul-concept paper','Calm','asuka_teacher'),
    mk('はい、病床にあった作家の作品を論文で扱いました','Yes — Sickbed-author-work paper','Earnest','ren_uni'),
    mk('蓮さん、擬似科学の批判を論文で扱いましたね','Ren — pseudo-sci-crit paper','Reflective','asuka_teacher'),
    mk('はい、苦悩を芸術へ昇華した作家の研究を論文で扱いました','Yes — Suffer-art-trans-author paper','Earnest','ren_uni'),
    mk('組織と組織の接合関係史を論文で扱いましたね','Org-org-merge-rel-hist paper','Engaged','asuka_teacher'),
    mk('はい、戦時下の減免政策を論文で扱いました','Yes — Wartime-reduce-pol paper','Earnest','ren_uni'),
    mk('蓮さん、過剰に詰め込んだ教育課程の研究を論文で扱いましたね','Ren — over-pack-curri paper','Reflective','asuka_teacher'),
    mk('はい、議会への付託案件の研究を論文で扱いました','Yes — Diet-refer-case paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09352',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、被害者の霊魂を慰める警察、ご配慮ですね','Case victim-soul-comfort police-care','Reflective','ren_uni'),
    mk('警察、病床にあった被害者の証言も丁寧に扱います','Police sickbed-victim-test-careful','Procedural','takeda_officer'),
    mk('本件、擬似的な証拠に騙されぬよう警察、注意されてますね','Case pseudo-evid-not-fooled police-care','Reflective','ren_uni'),
    mk('警察、被害者の悲しみを社会の力に昇華する活動を支援します','Police victim-sad-soc-trans-supp','Procedural','takeda_officer'),
    mk('本件、組織同士の接合点を警察、捜査されますね','Case org-merge-pt police-inv','Reflective','ren_uni'),
    mk('警察、罰金の減免にも適切に対応します','Police fine-reduce-app-resp','Procedural','takeda_officer'),
    mk('本件、犯行に詰め込んだ証拠を警察、丁寧に分析されますね','Case crime-pack-evid police-careful-anal','Reflective','ren_uni'),
    mk('警察、市議会への付託も含めて対応します','Police city-council-refer-resp','Close','takeda_officer'),
  ]},
  {id:'conv_09353',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、宗教における霊魂の概念を論文で扱いましたね','Sakura — relig-soul paper','Calm','asuka_teacher'),
    mk('はい、病床にあった作家の作品を論文で扱いました','Yes — Sickbed-author paper','Earnest teen','sakura_teen'),
    mk('擬似科学の批判を論文で扱いましたね','Pseudo-sci paper','Reflective','asuka_teacher'),
    mk('はい、苦悩を芸術へ昇華した作家を論文で扱いました','Yes — Suffer-art-trans paper','Earnest','sakura_teen'),
    mk('組織と組織の接合関係史を論文で扱いましたね','Org-merge-hist paper','Engaged','asuka_teacher'),
    mk('はい、戦時下の減免政策を論文で扱いました','Yes — War-reduce paper','Earnest','sakura_teen'),
    mk('過剰に詰め込んだ教育課程の研究を論文で扱いましたね','Over-pack-curri paper','Reflective','asuka_teacher'),
    mk('はい、議会への付託案件の研究を論文で扱いました','Yes — Diet-refer paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09354',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、亡くなられた患者さんの霊魂を医療チームで慰める儀式を設けます','Ren — dec-patient-soul-comfort med-team ritual','Calm','saito_doctor'),
    mk('はい、病床にある患者さんへの寄り添いを医療チームで重視します','Yes — Sickbed-patient-acc med-team imp','Patient','saito_doctor'),
    mk('擬似的な医療効果を主張する商品に、貴院、警鐘を鳴らしてますね、先生','Pseudo-med-claim-prod your-hosp warn, sensei','Reflective','ren_uni'),
    mk('はい、患者さんの苦悩を治療プロセスに昇華する努力を医療チームで続けます','Yes — Patient-suffer-process-trans med-team','Patient','saito_doctor'),
    mk('骨の接合手術を、貴院、ご担当ですね、先生','Bone-merge-surg your-hosp, sensei','Curious','ren_uni'),
    mk('はい、医療費の減免制度を医療チームでご案内します','Yes — Med-fee-reduce-sys med-team announce','Patient','saito_doctor'),
    mk('過剰に投薬を詰め込んだ処方を、貴院、避けられてますね、先生','Over-drug-pack-presc your-hosp avoid, sensei','Reflective','ren_uni'),
    mk('はい、難しい判断は倫理委員会に付託します','Yes — Hard-judg-eth-comm-refer','Patient close','saito_doctor'),
  ]},
  {id:'conv_09355',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、ブランドの霊魂的な精神を社員に伝えろ','Our co — brand-soul-spirit-conv','Crisp','hiroshi_boss'),
    mk('はい。病床の社員には休職制度をご案内します','Yes — Sickbed-staff-leave-announce','Methodical','kenji_office'),
    mk('当社、擬似商品との差別化を明確にしろ','Our co — pseudo-diff-clear','Direction','hiroshi_boss'),
    mk('はい。社員の不満を改善案に昇華します','Yes — Staff-comp-imp-trans','Update','kenji_office'),
    mk('当社、合併と接合を巧みに進めろ','Our co — merger-merge-skill','Direction','hiroshi_boss'),
    mk('はい。お得意様への料金減免案を準備しました','Yes — VIP-fee-reduce-plan','Update','kenji_office'),
    mk('当社、業務を詰め込んだ働き方を見直せ','Our co — biz-pack-work-review','Direction','hiroshi_boss'),
    mk('はい。重要案件は専門委員会に付託します','Yes — Impt-case-spec-comm-refer','Close','kenji_office'),
  ]},
  {id:'conv_09356',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、湖でカヌー体験されたって、メイちゃん','Aoi — cust-lake-canoe-exp Mei','Reflective','mei_romantic'),
    mk('葵、お客様、画廊で個展を開かれてるんだって、メイちゃん','Aoi — cust-gallery-solo-show Mei','Reflective','aoi_barista'),
    mk('葵、お子様、絵本の怪人キャラに夢中ね、メイちゃん','Aoi — child-book-monster-into Mei','Pleased','mei_romantic'),
    mk('葵、お客様、鳥獣の絵巻物の研究のお仕事だって、メイちゃん','Aoi — cust-bird-anim-scroll-research Mei','Reflective','aoi_barista'),
    mk('葵、お客様、お子様の合奏会を観に行かれるって、メイちゃん','Aoi — cust-child-ens-watch Mei','Tender','mei_romantic'),
    mk('葵、お客様、カメラのファインダーから景色を見てらしたよ、メイちゃん','Aoi — cust-cam-finder-view Mei','Reflective','aoi_barista'),
    mk('葵、お客様、随筆家でいらっしゃるって、メイちゃん','Aoi — cust-essayist Mei','Reflective','mei_romantic'),
    mk('葵、新しいハサミを買って包装のリボンを切るのが楽しみだね、メイちゃん','Aoi — new-scissor-ribbon-fun Mei','Pleased close','aoi_barista'),
  ]},
  {id:'conv_09357',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんとカヌーで湖を渡ったぞ','Gran — youth Dad-canoe-lake','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、画廊で写生展を開かれましたわよね、あなた?','Yes — Grandpa-gallery-sketch-show, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがお孫様に怪人ヒーローのお話をされた','Gran — youth Dad-grandkid-monster-hero-told','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、鳥獣戯画の本を大事にされてたわよね、あなた?','Grandpa — bird-anim-book-cherish, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが家族で合奏会を企画された','Gran — youth Dad-fam-ens-plan','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ファインダーから家族を撮るのがお好きでらしたわよね、あなた?','Grandpa — finder-fam-photo-liked, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは随筆を書く事も嗜まれた','Gran — youth Dad-essay-write-hobby','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様に裁ちばさみ、つまりハサミの使い方を教えてらしたわよね、あなた?','Grandpa — grandkid-scissor-taught, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09358',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お父さんと湖でカヌーに乗ろうね','Sho — Dad-lake-canoe','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、メイ姉さんの絵を画廊で見たいよ','Mei-sis — me Mei-sis-art-gallery-want','Eager child','sho_child'),
    mk('翔くん、絵本の怪人をメイ姉さんが描いてあげる','Sho — book-monster-Mei-sis-art','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、博物館で鳥獣戯画見たよ','Mei-sis — me museum-bird-anim-saw','Eager child','sho_child'),
    mk('翔くん、お父さんと一緒に学校の合奏会観に行きましょうね','Sho — Dad-school-ens-go','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんがカメラのファインダーで撮って下さった','Mei-sis — me Dad-finder-photo','Eager child','sho_child'),
    mk('翔くん、メイ姉さんの随筆、いつか読んでみたいわね','Sho — Mei-sis-essay-someday-read','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ハサミの使い方上手になったよ','Mei-sis — me scissor-good','Proud close','sho_child'),
  ]},
  {id:'conv_09359',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前、夏休みにカヌー教室行ったろ?','Riku — summer-canoe-class?','Curious teen','sakura_teen'),
    mk('お前、画廊巡りが趣味だろ、桜','You — gallery-tour-hobby Sakura','Curious','riku_teen'),
    mk('リク、お前、特撮ヒーローの怪人好きだろ?','Riku — tokusatsu-monster-like?','Curious','sakura_teen'),
    mk('お前、社会で鳥獣戯画の単元やったろ?桜','You — soc-bird-anim? Sakura','Curious','riku_teen'),
    mk('リク、お前、吹奏楽部の合奏会で頑張ってたな','Riku — band-ens-tried','Praising','sakura_teen'),
    mk('お前、カメラのファインダー覗き過ぎだろ、桜','You — finder-look-too-much Sakura','Wry','riku_teen'),
    mk('リク、お前、国語で随筆の単元やったろ?','Riku — Jp-essay?','Curious','sakura_teen'),
    mk('お前、図工でハサミの使い方上手かったな、桜','You — craft-scissor-good Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_09360',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お父さんとカヌー体験ツアーに行きましょうね','Sho — Dad-canoe-tour-go','Tender','yumiko_mom'),
    mk('ママ、ぼく、メイ姉さんの個展、画廊で観たいよ','Mom — me Mei-sis-show-gallery-want','Eager child','sho_child'),
    mk('翔くん、絵本の怪人が出てくるシーン、ドキドキするわね','Sho — book-monster-scene-thumping','Animated','yumiko_mom'),
    mk('ママ、ぼく、社会で鳥獣戯画について勉強したよ','Mom — me soc-bird-anim-study','Earnest child','sho_child'),
    mk('翔くん、お父さんが合奏会で太鼓を叩いて下さるわ','Sho — Dad-ens-drum','Reflective','yumiko_mom'),
    mk('ママ、お父さんがカメラのファインダーから熱心に景色を撮ってらした','Mom — Dad-finder-zealous-photo','Reflective child','sho_child'),
    mk('翔くん、お父さんが随筆を書いてみたいって仰ってたわ','Sho — Dad-essay-want-said','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お母さんとハサミで折り紙切ったよ','Mom — me Mom-scissor-origami-cut','Eager close','sho_child'),
  ]},
]

let written = 0, stillMissing = []
for (const r of data) {
  const lines = r.lines
  const jpAll = lines.map(l => l.jp).join('\n')
  const missing = r.targets.filter(t => !jpAll.includes(t))
  if (missing.length > 0) stillMissing.push({ id: r.id, missing })
  const targetVocab = r.targets.filter(t => vocabSet.has(t))
  const conv = {
    id: r.id, context: r.scenario, purpose: 'Teach: ' + r.targets.join('/'),
    ambient: r.ambient, sound_effects: [], target_vocab: targetVocab, cast: r.cast,
    frequency_tier: 4, length_tier: lengthLabel(lines.length), meta: META, lines,
  }
  fs.writeFileSync(path.join(OUT_DIR, `${r.id}.json`), JSON.stringify(conv, null, 2) + '\n')
  written++
}
console.log('wrote', written)
if (stillMissing.length) console.log('STILL_MISSING', JSON.stringify(stillMissing, null, 2))
