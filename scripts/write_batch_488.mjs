import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_488 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['多かれ','暮し','所々','苛立ち','うかがえる','真中','縮め','探し出し']
const B_T = ['印紙','新法','極論','由緒','疑義','客員','総評','携え']
const C_T = ['風速','乗船','高熱','鼓動','洗顔','授乳','浄水','脊髄']
const D_T = ['キルト','デッサン','ライフワーク','レインボー','ハヤカワ','ローソン','ベースボール','グリーンピース']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_09721',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、人は多かれ少なかれ悩みがあるのよ','Sho — people-more-less-worry','Reflective','yumiko_mom'),
    mk('ママ、お父さんとの暮しが幸せだよ','Mom — Dad-life-happy','Tender child','sho_child'),
    mk('翔くん、お家の壁が所々剥がれてきたわね','Sho — home-wall-here-there-peel','Reflective','yumiko_mom'),
    mk('ママ、お父さんが疲れて苛立ちを抑えてらしたよ','Mom — Dad-tired-irrit-suppress','Reflective child','sho_child'),
    mk('翔くん、お父さんのお顔から疲れがうかがえるわ','Sho — Dad-face-tired-see','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お部屋の真中で本を読んでるよ','Mom — me room-center-read','Eager child','sho_child'),
    mk('翔くん、ズボンの裾を縮めて直しましょうね','Sho — pants-hem-shorten-fix','Direction','yumiko_mom'),
    mk('ママ、ぼく、なくしたおもちゃを探し出したよ','Mom — me lost-toy-find','Eager close','sho_child'),
  ]},
  {id:'conv_09722',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、多かれ少なかれご悩みがおありね、メイちゃん','Aoi — cust-more-less-worry Mei','Reflective','mei_romantic'),
    mk('葵、お客様、シンプルな暮しを大切にされてるって、メイちゃん','Aoi — cust-simple-life-cherish Mei','Reflective','aoi_barista'),
    mk('葵、お店の窓に所々シミがあるね、メイちゃん','Aoi — store-window-here-stain Mei','Reflective','mei_romantic'),
    mk('葵、忙しさで苛立ちを見せないようにしようね、メイちゃん','Aoi — busy-irrit-show-not Mei','Direction','aoi_barista'),
    mk('葵、お客様の表情から満足度がうかがえるね、メイちゃん','Aoi — cust-face-sat-see Mei','Reflective','mei_romantic'),
    mk('葵、お店の真中にディスプレイを置きましょうね、メイちゃん','Aoi — store-center-disp Mei','Direction','aoi_barista'),
    mk('葵、メニュー説明を短く縮めて分かりやすくしようね、メイちゃん','Aoi — menu-shorten-clear Mei','Direction','mei_romantic'),
    mk('葵、忘れ物のお客様の連絡先を探し出したよ、メイちゃん','Aoi — forgot-cust-contact-find Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09723',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、人は多かれ少なかれ苦労してた','Gran — youth-people-more-less-hard','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、質素な暮しを大事にされたわよね、あなた?','Yes — Grandpa-simple-life-imp, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お家の壁が所々ひび割れてた','Gran — youth-home-wall-here-crack','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、苛立ちを表に出されない方だったわよね、あなた?','Grandpa — irrit-show-no, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんのご様子から優しさがうかがえた','Gran — youth-Dad-state-kind-see','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お庭の真中に椅子を置かれてたわよね、あなた?','Grandpa — garden-center-chair, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが古着を縮めて直された','Gran — youth-Dad-old-cloth-shorten','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、無くしたお宝を探し出すのが上手だったわよね、あなた?','Grandpa — lost-treas-find-good, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09724',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、人は多かれ少なかれ嘘をつくものさ','Riku — people-more-less-lie','Wry teen','sakura_teen'),
    mk('お前、一人暮しのアパート快適か?桜','You — solo-life-comfort? Sakura','Curious','riku_teen'),
    mk('リク、お前のノート、所々破れてるな','Riku — note-here-tear','Wry','sakura_teen'),
    mk('お前、最近苛立ちを表に出すな、桜','You — recently-irrit-show Sakura','Direction','riku_teen'),
    mk('リク、お前の言葉から本音がうかがえる','Riku — words-truth-see','Reflective','sakura_teen'),
    mk('お前、教室の真中に座ってたな、桜','You — class-center-sit Sakura','Curious','riku_teen'),
    mk('リク、お前、答えを縮めて書きすぎだぞ','Riku — ans-shorten-too','Wry','sakura_teen'),
    mk('お前、無くした財布を探し出してたな、桜','You — lost-wallet-find Sakura','Praising close','riku_teen'),
  ]},
  {id:'conv_09725',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、人は多かれ少なかれ寂しさを感じるのよ','Sho — people-more-less-lone','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんと一緒の暮しが大好きだよ','Mei-sis — me Dad-life-love','Tender child','sho_child'),
    mk('翔くん、お父さんのお部屋に所々埃が積もってるわね','Sho — Dad-room-here-dust','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、苛立ちを抑える練習してるよ','Mei-sis — me irrit-suppress-prac','Earnest child','sho_child'),
    mk('翔くん、お父さんのお顔から疲れがうかがえるわ','Sho — Dad-face-tired-see','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、公園の真中で遊ぼうよ','Mei-sis — me park-center-play','Eager child','sho_child'),
    mk('翔くん、長いお話を短く縮めて伝えるのも上手ね','Sho — long-shorten-tell-good','Praising','mei_romantic'),
    mk('メイ姉さん、ぼく、無くしたおもちゃを探し出したよ','Mei-sis — me lost-toy-find','Eager close','sho_child'),
  ]},
  {id:'conv_09726',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、契約書に必要な印紙を貼れ','Our co — contract-stamp-affix','Crisp','hiroshi_boss'),
    mk('はい。新法の施行に備えます','Yes — New-law-prep','Methodical','kenji_office'),
    mk('当社、極論に走らず冷静に判断しろ','Our co — extreme-no-calm-judg','Direction','hiroshi_boss'),
    mk('はい。当社の由緒ある歴史を強調します','Yes — Our-co-est-hist-emp','Update','kenji_office'),
    mk('株主からの疑義に丁寧に回答しろ','Sharehol-doubt-pol-resp','Direction','hiroshi_boss'),
    mk('はい。客員研究員を社内に招きます','Yes — Guest-research-invite','Update','kenji_office'),
    mk('当社、業界誌の総評記事を確認しろ','Our co — industry-overview-art-check','Direction','hiroshi_boss'),
    mk('はい。当社の使命を携えて新事業に臨みます','Yes — Our-co-mis-carry-new-biz','Close','kenji_office'),
  ]},
  {id:'conv_09727',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('契約書の印紙税を確認しましょう','Contract-stamp-tax-check','Brisk','yuki_office'),
    mk('はい。新法に対応した社内ルールを整備します','Yes — New-law-co-rule-prep','Cooperative','kenji_office'),
    mk('極論で議論を進めるのは避けましょう','Extreme-disc-avoid','Direction','yuki_office'),
    mk('はい。当社の由緒を社員に伝える研修をします','Yes — Our-co-est-staff-train','Update','kenji_office'),
    mk('社員からの疑義に丁寧に答えましょう','Staff-doubt-pol-ans','Direction','yuki_office'),
    mk('はい。客員講師の招聘を企画します','Yes — Guest-lect-invite-plan','Update','kenji_office'),
    mk('業界誌の総評欄に当社の取り組みを載せましょう','Industry-overview-our-load','Direction','yuki_office'),
    mk('はい。お客様のニーズを携えて商談に臨みます','Yes — Cust-need-carry-biz','Close','kenji_office'),
  ]},
  {id:'conv_09728',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、契約には印紙の管理も学べ','Ren — contract-stamp-mgmt-learn','Mentor','hiroshi_boss'),
    mk('はい。新法の研究にも取り組みます','Yes — New-law-research','Earnest','ren_uni'),
    mk('蓮、極論を述べる前にデータを示せ','Ren — extreme-pre-data','Direction','hiroshi_boss'),
    mk('はい。当大学の由緒ある研究室に感謝しております','Yes — Our-uni-est-lab-thanks','Earnest','ren_uni'),
    mk('蓮、論文への疑義には誠実に答えろ','Ren — paper-doubt-honest','Direction','hiroshi_boss'),
    mk('はい。客員研究員として海外でも学びます','Yes — Guest-research-overseas-study','Polite','ren_uni'),
    mk('蓮、論文の総評コメントも分析しろ','Ren — paper-overview-anal','Direction','hiroshi_boss'),
    mk('はい。研究の責任を携えて発表に臨みます','Yes — Research-resp-carry-pres','Earnest close','ren_uni'),
  ]},
  {id:'conv_09729',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、押収書類の印紙を確認されますね','Police seiz-doc-stamp-check','Cooperative','kenji_office'),
    mk('警察、新法の運用を市民に周知されますね','Police new-law-citi-notify','Cooperative','kenji_office'),
    mk('警察、極論を取り締まる方針ではないですね','Police extreme-strict-pol-no','Cooperative','kenji_office'),
    mk('警察、由緒ある歴史的建物の警備もされますね','Police est-hist-bld-guard','Cooperative','kenji_office'),
    mk('警察、市民の疑義に丁寧に答えられますね','Police citi-doubt-pol-ans','Cooperative','kenji_office'),
    mk('警察、客員専門家も捜査に参加されますね','Police guest-expert-inv-join','Cooperative','kenji_office'),
    mk('警察、年次総評を市民に公表されますね','Police annual-overview-citi-pub','Cooperative','kenji_office'),
    mk('警察、市民の安全を携えて任務に臨まれますね','Police citi-safe-carry-duty','Close','kenji_office'),
  ]},
  {id:'conv_09730',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、印紙税を自ら管理された','Dad — founding stamp-tax-self','Sage','hiroshi_elder'),
    mk('はい。お父さんは新法に迅速に対応された','Yes — Dad new-law-fast','Commitment','hiroshi_boss'),
    mk('お父さん、極論を避けてバランスを取られた','Dad — extreme-avoid-bal','Wistful','hiroshi_elder'),
    mk('はい。お父さんは由緒ある会社を誇りにされた','Yes — Dad est-co-proud','Reflective','hiroshi_boss'),
    mk('お父さん、株主の疑義に正直に答えられた','Dad — sharehol-doubt-honest','Wistful','hiroshi_elder'),
    mk('はい。お父さんは大学の客員教授も務められた','Yes — Dad uni-guest-prof','Reflective','hiroshi_boss'),
    mk('お父さん、業界の総評で常に高評価だった','Dad — industry-overview-high-eval','Wistful','hiroshi_elder'),
    mk('はい。お父さんは創業の志を携えて経営された','Yes — Dad found-will-carry-mgmt','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_09731',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、台風時の風速観測史を論文で扱いましたね','Ren — typhoon-wind-obs paper','Calm','asuka_teacher'),
    mk('はい、近世の乗船記録の研究を論文で扱いました','Yes — Early-mod-board-rec paper','Earnest','ren_uni'),
    mk('蓮さん、高熱性疾患の歴史研究を論文で扱いましたね','Ren — high-fever-hist paper','Reflective','asuka_teacher'),
    mk('はい、胎児の心臓鼓動研究を論文で扱いました','Yes — Fetal-heart paper','Earnest','ren_uni'),
    mk('スキンケアの洗顔法研究を論文で扱いましたね','Skincare-wash paper','Engaged','asuka_teacher'),
    mk('はい、新生児の授乳パターン研究を論文で扱いました','Yes — Newborn-feed paper','Earnest','ren_uni'),
    mk('蓮さん、災害時の浄水器配備を論文で扱いましたね','Ren — disas-purif-deploy paper','Reflective','asuka_teacher'),
    mk('はい、脊髄損傷リハビリ研究を論文で扱いました','Yes — Spinal-cord-rehab paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_09732',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、強風速時の事故を、警察、扱われますね','Case high-wind-acc police-handle','Reflective','ren_uni'),
    mk('警察、密入国の乗船事案を担当します','Police illeg-entry-board','Procedural','takeda_officer'),
    mk('本件、容疑者の高熱症状を、警察、医療連携で扱われますね','Case suspect-high-fever-med-link','Reflective','ren_uni'),
    mk('警察、犯行時刻の心臓鼓動鑑定もおこないます','Police crime-heart-forensic','Procedural','takeda_officer'),
    mk('本件、洗顔料への異物混入事件を、警察、扱われますね','Case wash-foreign-mix police-handle','Reflective','ren_uni'),
    mk('警察、育児ネグレクトで授乳不足事案にも対応します','Police neglect-feed-resp','Procedural','takeda_officer'),
    mk('本件、浄水器悪用事件を、警察、扱われますね','Case purif-misuse police-handle','Reflective','ren_uni'),
    mk('警察、脊髄損傷を伴う暴行事件も厳しく捜査します','Police spinal-cord-assault-strict','Close','takeda_officer'),
  ]},
  {id:'conv_09733',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、台風時の風速観測史を論文で扱いましたね','Sakura — typhoon-wind-obs paper','Calm','asuka_teacher'),
    mk('はい、近世の乗船記録を論文で扱いました','Yes — Early-mod-board paper','Earnest teen','sakura_teen'),
    mk('高熱性疾患の歴史を論文で扱いましたね','High-fever-hist paper','Reflective','asuka_teacher'),
    mk('はい、胎児の心臓鼓動研究を論文で扱いました','Yes — Fetal-heart paper','Earnest','sakura_teen'),
    mk('スキンケアの洗顔法を論文で扱いましたね','Skincare-wash paper','Engaged','asuka_teacher'),
    mk('はい、新生児の授乳パターンを論文で扱いました','Yes — Newborn-feed paper','Earnest','sakura_teen'),
    mk('災害時の浄水器配備を論文で扱いましたね','Disas-purif paper','Reflective','asuka_teacher'),
    mk('はい、脊髄損傷リハビリを論文で扱いました','Yes — Spinal-cord paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_09734',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、災害時の風速予測を医療チームで参考にします','Ren — disas-wind-est med-team','Calm','saito_doctor'),
    mk('はい、患者搬送時の乗船指示を医療チームで管理します','Yes — Pati-transp-board med-team','Patient','saito_doctor'),
    mk('蓮さん、患者の高熱対応を医療チームで研修します','Ren — pati-high-fever med-team train','Calm','saito_doctor'),
    mk('胎児の心臓鼓動を、貴院、エコーで確認されますね、先生','Fetal-heart-echo your-hosp, sensei','Reflective','ren_uni'),
    mk('はい、術後の洗顔指導を医療チームでおこないます','Yes — Postop-wash med-team','Patient','saito_doctor'),
    mk('授乳外来を、貴院、設けられてますね、先生','Feed-outpati your-hosp set, sensei','Reflective','ren_uni'),
    mk('はい、浄水フィルターを医療チームで管理します','Yes — Purif-filter med-team','Patient','saito_doctor'),
    mk('はい、脊髄損傷患者のリハビリを医療チームで進めます','Yes — Spinal-cord-rehab med-team','Patient close','saito_doctor'),
  ]},
  {id:'conv_09735',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、屋外イベントは風速予報で判断しろ','Our co — outdoor-event-wind-judg','Crisp','hiroshi_boss'),
    mk('はい。社員旅行の乗船管理を徹底します','Yes — Staff-trip-board-strict','Methodical','kenji_office'),
    mk('当社、社員の高熱発症時の対応マニュアルを整えろ','Our co — staff-high-fever-man','Direction','hiroshi_boss'),
    mk('はい。当社の鼓動、つまり成長の脈拍を測ります','Yes — Our-co-heart-grow-pulse','Update','kenji_office'),
    mk('社員の洗顔習慣も衛生研修に含めろ','Staff-wash-hyg-train','Direction','hiroshi_boss'),
    mk('はい。社員の授乳室を社内に設置します','Yes — Staff-feed-rm-set','Update','kenji_office'),
    mk('当社、防災用浄水器を備蓄しろ','Our co — disas-purif-stock','Direction','hiroshi_boss'),
    mk('はい。社員の脊髄健康のため姿勢改善研修を実施します','Yes — Staff-spinal-pos-train','Close','kenji_office'),
  ]},
  {id:'conv_09736',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、キルトを縫うのがご趣味だって、メイちゃん','Aoi — cust-quilt-hobby Mei','Reflective','mei_romantic'),
    mk('葵、お客様、デッサンを毎日描いてらっしゃるって、メイちゃん','Aoi — cust-sketch-daily Mei','Reflective','aoi_barista'),
    mk('葵、お客様、研究をライフワークとされてるって、メイちゃん','Aoi — cust-research-lifework Mei','Reflective','mei_romantic'),
    mk('葵、お客様、レインボーのアートが大好きだって、メイちゃん','Aoi — cust-rainbow-art Mei','Pleased','aoi_barista'),
    mk('葵、お客様、ハヤカワ文庫のSF小説を読んでらしたよ、メイちゃん','Aoi — cust-Hayakawa-SF Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ローソンでお弁当買って来られたよ、メイちゃん','Aoi — cust-Lawson-bento Mei','Reflective','aoi_barista'),
    mk('葵、お客様、ベースボールの観戦が趣味だって、メイちゃん','Aoi — cust-baseb-watch Mei','Reflective','mei_romantic'),
    mk('葵、お客様、グリーンピースの活動に関心がおありだって、メイちゃん','Aoi — cust-Greenpeace-int Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_09737',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お母さんとキルトを縫った','Gran — youth Mom-quilt-sew','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、デッサンを習われたわよね、あなた?','Yes — Grandpa-sketch-learn, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが研究をライフワークとされた','Gran — youth Dad-research-lifework','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、雨上がりのレインボーをご覧になって喜ばれたわよね、あなた?','Grandpa — post-rain-rainbow-glad, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがハヤカワ文庫を集められた','Gran — youth Dad-Hayakawa-coll','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、ローソンができた時驚かれたわよね、あなた?','Grandpa — Lawson-open-surprise, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんがベースボールチームの応援団だった','Gran — youth Dad-baseb-cheer','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、グリーンピースの活動を見守られたわよね、あなた?','Grandpa — Greenpeace-watch, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_09738',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんがキルトを縫ってるのよ','Sho — Mei-sis-quilt-sew','Tender','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとデッサンの練習したよ','Mei-sis — me Dad-sketch-prac','Eager child','sho_child'),
    mk('翔くん、お父さんが宇宙研究をライフワークにされてるそうよ','Sho — Dad-space-lifework','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、雨上がりにレインボー見たよ','Mei-sis — me post-rain-rainbow','Eager child','sho_child'),
    mk('翔くん、お父さんがハヤカワ文庫を貸して下さるそうよ','Sho — Dad-Hayakawa-lend','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとローソンに行ったよ','Mei-sis — me Dad-Lawson-went','Eager child','sho_child'),
    mk('翔くん、お父さんがベースボールのグローブを買って下さったわ','Sho — Dad-baseb-glove-buy','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お父さんとグリーンピースのドキュメンタリー観たよ','Mei-sis — me Dad-Greenpeace-doc','Eager close','sho_child'),
  ]},
  {id:'conv_09739',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前ん家、キルトの毛布あったな','Riku — your-home-quilt-blanket','Curious teen','sakura_teen'),
    mk('お前、美術でデッサンの宿題ハマってたな、桜','You — art-sketch-into Sakura','Wry','riku_teen'),
    mk('リク、お前、研究をライフワークにしたいって言ってたな','Riku — research-lifework-said','Curious','sakura_teen'),
    mk('お前、レインボーシャーベット食ってたな、桜','You — rainbow-sherbet-eat Sakura','Wry','riku_teen'),
    mk('リク、お前、ハヤカワ文庫のSF漁ってたな','Riku — Hayakawa-SF-search','Curious','sakura_teen'),
    mk('お前、ローソンの新作スイーツ好きだったな、桜','You — Lawson-new-sweet Sakura','Wry','riku_teen'),
    mk('リク、お前、ベースボール部だったな','Riku — baseb-club','Curious','sakura_teen'),
    mk('お前、グリーンピース嫌いだったな、桜','You — Greenpeace-not-like Sakura','Wry close','riku_teen'),
  ]},
  {id:'conv_09740',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、メイ姉さんがキルトをプレゼントして下さったわ','Sho — Mei-sis-quilt-gift','Tender','yumiko_mom'),
    mk('ママ、ぼく、お父さんとデッサン教室通いたいよ','Mom — me Dad-sketch-class-want','Eager child','sho_child'),
    mk('翔くん、お父さんが研究をライフワークにされてるのよ','Sho — Dad-research-lifework','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとレインボーの絵描いたよ','Mom — me Dad-rainbow-paint','Eager child','sho_child'),
    mk('翔くん、お父さんがハヤカワ文庫を読んでらしたわ','Sho — Dad-Hayakawa-read','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとローソンに行ったよ','Mom — me Dad-Lawson','Eager child','sho_child'),
    mk('翔くん、お父さんがベースボール観戦に連れて行って下さるそうよ','Sho — Dad-baseb-watch-take','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お父さんとグリーンピースの団体の話聞いたよ','Mom — me Dad-Greenpeace-told','Eager close','sho_child'),
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
