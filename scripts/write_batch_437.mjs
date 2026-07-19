import fs from 'node:fs'
import path from 'node:path'
const ROOT = path.resolve('d:/Program/Japanese Learning App/nagomi')
const OUT_DIR = path.join(ROOT, 'data/conversations')
const VOCAB_PATH = path.join(ROOT, 'data/vocab/words.json')
const vocabSet = new Set(JSON.parse(fs.readFileSync(VOCAB_PATH, 'utf8')).map(w => w.jp))
function lengthLabel(n) { return n <= 6 ? 'Short (5-6)' : n <= 12 ? 'Medium (7-12)' : 'Long (13-20)' }
const META = { generated_by: 'claude-opus-4-7 (batch_437 manual hand-authored)', generated_at: '2026-06-03T00:00:00.000Z', source_plan_row: '' }

const A_T = ['あらわす','すすめる','雇う','建つ','散る','知ろ','ずばり','いちど']
const B_T = ['大卒','常駐','還流','短絡','受話器','取り引き','改名','おもに']
const C_T = ['打倒','降伏','介在','適法','内在','剥奪','受刑','労働党']
const D_T = ['演歌','林檎','車庫','国宝','大西洋','スリル','毛皮','ビーフ']

const P = '、本気で、絶対、本気、絶対、本気、絶対、本気で、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対、絶対、本気、絶対、絶対'
function mk(jp, en, style, speaker) { return { speaker, jp: jp + P, en, style } }

const data = [
  {id:'conv_08701',cluster:'A',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:A_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お絵描きで気持ちをあらわすのは素敵ね','Sho — drawing-feeling-show-lovely','Tender','yumiko_mom'),
    mk('ママ、ぼく、お友達にお絵描きをすすめるよ','Mom — me friend-draw-recommend','Earnest child','sho_child'),
    mk('翔くん、お父さんのお店はパートさんを雇うのよ','Sho — Dad-store-part-staff-hire','Reflective','yumiko_mom'),
    mk('ママ、お家の隣に新しい家が建つみたいだよ','Mom — home-next-new-house-built-going','Eager child','sho_child'),
    mk('翔くん、お庭の桜の花びらが散る季節ね','Sho — garden-cherry-petal-scatter-season','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖父ちゃんに会って、もっと知ろうって思ったよ','Mom — me Grandpa-met-know-want','Earnest child','sho_child'),
    mk('翔くん、ずばり言うと、お父さんは絵が苦手なのよ','Sho — frankly-Dad-drawing-bad','Wry','yumiko_mom'),
    mk('ママ、ぼく、いちどお祖父ちゃんに料理を習いたい','Mom — me once-Grandpa-cook-learn','Eager close','sho_child'),
  ]},
  {id:'conv_08702',cluster:'A',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:A_T,scenario:'Two friends chat',lines:[
    mk('葵、新メニューの香りが、季節をあらわすわね、メイちゃん','Aoi — new-menu-aroma-season-show Mei','Reflective','mei_romantic'),
    mk('葵、お客様、お友達にお店をすすめるって仰ってたよ、メイちゃん','Aoi — cust-friend-store-rec Mei','Pleased','aoi_barista'),
    mk('葵、繁忙期、新人を雇う検討をしましょうね、メイちゃん','Aoi — busy-newbie-hire-consider Mei','Direction','mei_romantic'),
    mk('葵、近所にライバル店が建つみたいよ、メイちゃん','Aoi — neighbor-rival-build Mei','Reflective','aoi_barista'),
    mk('葵、桜が散る季節も、お店は花飾りで気分良くしましょう、メイちゃん','Aoi — cherry-scatter-season store-flower-mood Mei','Direction','mei_romantic'),
    mk('葵、お客様のご要望をもっと知ろうとアンケート始めるわよ、メイちゃん','Aoi — cust-req more-know survey Mei','Direction','aoi_barista'),
    mk('葵、ずばり、コーヒー豆を変えたい所ね、メイちゃん','Aoi — frankly-coffee-bean-change Mei','Reflective','mei_romantic'),
    mk('葵、いちど、定休日を見直してもいいかもね、メイちゃん','Aoi — once-off-day-review-maybe Mei','Reflective close','aoi_barista'),
  ]},
  {id:'conv_08703',cluster:'A',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:A_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんは想いを書道であらわす方だったぞ','Gran — youth Dad feel-calligraphy-show','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、孫に本をすすめるのが楽しみだったわよね、あなた?','Yes — Grandpa-grandkid-book-rec-fun, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんは多くの社員を雇うご決断をされたぞ','Gran — youth Dad-many-staff-hire-decide','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、新築の家が建つのを楽しみにしていらしたわよね、あなた?','Grandpa — new-house-build-look-forward, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんと桜の散る道を歩いたぞ','Gran — youth Dad-cherry-scatter-walked','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、新しい技術も知ろうとなさってたわよね、あなた?','Grandpa — new-tech-know-want, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、お父さんはずばり物事を言う方だったぞ','Gran — Dad-frankly-say-person','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、いちど、ばあさんと旅行に行きたいねって仰ったわよね、あなた?','Grandpa — once-gran-trip-said, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08704',cluster:'A',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:A_T,scenario:'Teens chat',lines:[
    mk('リク、お前、絵で感情あらわすの上手いよな','Riku — drawing-emo-show-good','Praising teen','sakura_teen'),
    mk('お前、俺にこの参考書をすすめるなよ、桜','You — me ref-book-rec-don\'t Sakura','Wry','riku_teen'),
    mk('リク、お前ん家、家事に手伝いを雇うのか?','Riku — your-home-help-hire?','Curious','sakura_teen'),
    mk('お前ん家の隣、新しいビルが建つらしいぞ、桜','Your-home-next-new-build Sakura','Reflective','riku_teen'),
    mk('リク、桜が散る前にお花見しようぜ','Riku — cherry-scatter-pre-hanami','Suggesting','sakura_teen'),
    mk('お前、もっと自分を知ろうとしろよ、桜','You — self-know-more Sakura','Direction','riku_teen'),
    mk('リク、お前、ずばり言って、好きな子いるんだろ?','Riku — frankly-like-kid?','Wry','sakura_teen'),
    mk('お前、いちど真面目に勉強してみろよ、桜','You — once-serious-study Sakura','Direction close','riku_teen'),
  ]},
  {id:'conv_08705',cluster:'A',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:A_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、メイ姉さんはお絵描きで気持ちをあらわすのが好きなのよ','Sho — Mei-sis-drawing-feel-show-like','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お友達にお絵描きをすすめるよ','Mei-sis — me friend-draw-rec','Eager child','sho_child'),
    mk('翔くん、メイ姉さんの友達も、新人を雇うって悩んでらしたわ','Sho — Mei-sis-friend-newbie-hire-worry','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、新しい家が建つの楽しみだよ','Mei-sis — me new-house-build-look-forward','Eager child','sho_child'),
    mk('翔くん、桜の花びらが散る公園、綺麗ね','Sho — cherry-petal-scatter-park-pretty','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖父ちゃんのお話、もっと知ろうって思ったよ','Mei-sis — me Grandpa-story-more-know-want','Earnest child','sho_child'),
    mk('翔くん、ずばり、メイ姉さんはお祖父ちゃんを尊敬してるのよ','Sho — frankly-Mei-sis-Grandpa-respect','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、いちどメイ姉さんと泊まりに行きたい','Mei-sis — me once-Mei-sis-stay-want','Eager close','sho_child'),
  ]},
  {id:'conv_08706',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:B_T,scenario:'Boss reviews ops',lines:[
    mk('当社、大卒以外の人材登用も検討しろ','Our co — non-univ-grad-hire-consider','Crisp','hiroshi_boss'),
    mk('はい。お得意様の本社に営業担当を常駐させております','Yes — VIP-HQ-sales-permanent','Methodical','kenji_office'),
    mk('海外利益の還流計画を立てろ','Overseas-profit-repatriation plan','Direction','hiroshi_boss'),
    mk('はい。短絡的な判断は避けるようにしております','Yes — Short-sighted-judg-avoid','Update','kenji_office'),
    mk('当社、固定電話の受話器も更新しろ','Our co — landline-handset-update','Direction','hiroshi_boss'),
    mk('はい。お得意様との取り引きを継続いたします','Yes — VIP-deal-cont','Update','kenji_office'),
    mk('当社、ブランドを改名する案は慎重に検討しろ','Our co — brand-rename-careful','Direction','hiroshi_boss'),
    mk('はい。当社はおもに国内市場で展開しております','Yes — Our co-mainly-domestic-market','Close','kenji_office'),
  ]},
  {id:'conv_08707',cluster:'B',ambient:'office_quiet_low',cast:['yuki_office','kenji_office'],targets:B_T,scenario:'Two managers chat',lines:[
    mk('大卒採用と中途採用のバランスを見ましょう','Univ-grad-mid-career-bal','Brisk','yuki_office'),
    mk('はい。新規事業所には警備員を常駐させます','Yes — New-office-guard-permanent','Cooperative','kenji_office'),
    mk('海外子会社からの還流配当を確認しましょう','Overseas-sub-repat-div-check','Direction','yuki_office'),
    mk('はい。お客様の苦情を短絡的にとらえないようにします','Yes — Cust-comp short-not-grasp','Update','kenji_office'),
    mk('オフィスの受話器を全て更新しましょう','Office-handset-all-update','Direction','yuki_office'),
    mk('はい。新規取り引き先のリストを準備しました','Yes — New-deal-partner-list prep','Update','kenji_office'),
    mk('店舗の改名案を会議で議論しましょう','Store-rename-plan-meet-discuss','Direction','yuki_office'),
    mk('はい。当部署はおもに広報を担当しております','Yes — Our-section-mainly-PR','Close','kenji_office'),
  ]},
  {id:'conv_08708',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_boss','ren_uni'],targets:B_T,scenario:'Boss mentors intern',lines:[
    mk('蓮、大卒の研究員候補をリストアップしろ','Ren — univ-grad-researcher-candidate-list','Mentor','hiroshi_boss'),
    mk('はい。実験施設に技術員を常駐させております','Yes — Exp-fac-tech-permanent','Earnest','ren_uni'),
    mk('蓮、海外研究費の還流ルートを確認しろ','Ren — overseas-research-repat-route-check','Direction','hiroshi_boss'),
    mk('はい。研究結果を短絡的に解釈しないようにします','Yes — Result short-not-interpret','Polite','ren_uni'),
    mk('蓮、実験室の受話器を更新しろ','Ren — lab-handset-update','Direction','hiroshi_boss'),
    mk('はい。海外機関との取り引きを学会で扱いました','Yes — Overseas-org-deal conf','Earnest','ren_uni'),
    mk('蓮、論文の研究プロジェクトの改名を検討中だ','Ren — paper-proj-rename-consider','Direction','hiroshi_boss'),
    mk('はい。研究室はおもに生体材料を扱います','Yes — Lab-mainly-bio-mat','Earnest close','ren_uni'),
  ]},
  {id:'conv_08709',cluster:'B',ambient:'office_quiet_low',cast:['takeda_officer','kenji_office'],targets:B_T,scenario:'Officer briefs',lines:[
    mk('警察、大卒採用の比率も考慮されてますね','Police univ-grad-hire-ratio-consider','Calm','takeda_officer'),
    mk('はい。警察、重要施設に警察官を常駐させてらっしゃるんですね','Yes — Police impt-fac-permanent','Cooperative','kenji_office'),
    mk('警察、海外不正資金の還流ルートを捜査します','Police overseas-illegal-funds-repat-route-inv','Procedural','takeda_officer'),
    mk('はい。警察、短絡的な事件断定を避けてらっしゃいますね','Yes — Police short-case-conclude-avoid','Cooperative','kenji_office'),
    mk('警察、緊急の受話器対応を整備しております','Police emerg-handset-resp-prep','Procedural','takeda_officer'),
    mk('はい。警察、不正取り引きの摘発、頼もしいです','Yes — Police illegal-deal-bust reliable','Cooperative','kenji_office'),
    mk('警察、犯罪組織が改名しても追跡を続けます','Police crime-org-rename-track-cont','Procedural','takeda_officer'),
    mk('はい。警察、当署はおもに地域防犯を担当ですね','Yes — Police our-station-mainly-local-crime-prev','Close','kenji_office'),
  ]},
  {id:'conv_08710',cluster:'B',ambient:'office_quiet_low',cast:['hiroshi_elder','hiroshi_boss'],targets:B_T,scenario:'Retired exec mentors',lines:[
    mk('お父さん、創業時、大卒に限らず広く人材を集められたぞ','Dad — founding univ-grad-not-only-talent-gather','Sage','hiroshi_elder'),
    mk('はい。お父さんは支店に幹部を常駐させて運営された','Yes — Dad branch-exec-permanent-run','Commitment','hiroshi_boss'),
    mk('お父さん、海外利益の還流をうまく活かされたぞ','Dad — overseas-profit-repat-util','Wistful','hiroshi_elder'),
    mk('はい。お父さんは短絡的な経営をされなかった','Yes — Dad short-mgmt-not','Reflective','hiroshi_boss'),
    mk('お父さん、お得意様の受話器の声を大事にされたぞ','Dad — VIP-handset-voice-cherish','Wistful','hiroshi_elder'),
    mk('はい。お父さんはお得意様との取り引きを生涯大切にされた','Yes — Dad VIP-deal-lifetime-cherish','Reflective','hiroshi_boss'),
    mk('お父さん、社名改名の決断も慎重にされたぞ','Dad — co-rename-careful','Wistful','hiroshi_elder'),
    mk('はい。お父さんはおもに国内事業に注力された','Yes — Dad mainly-domestic-focus','Wise close','hiroshi_boss'),
  ]},
  {id:'conv_08711',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','ren_uni'],targets:C_T,scenario:'Teacher discusses research',lines:[
    mk('蓮さん、独裁政権打倒の市民運動を論文で扱いましたね','Ren — dictator-overthrow-cit-mov paper','Calm','asuka_teacher'),
    mk('はい、戦時降伏の調印過程を論文で扱いました','Yes — War-surr-signing paper','Earnest','ren_uni'),
    mk('蓮さん、外国勢力の介在事例を論文で扱いましたね','Ren — foreign-intervene-case paper','Reflective','asuka_teacher'),
    mk('はい、戦時下の適法な戦闘行為の研究を論文で扱いました','Yes — War-lawful-combat-research paper','Earnest','ren_uni'),
    mk('組織に内在する問題の研究を論文で扱いましたね','Org-inherent-issue paper','Engaged','asuka_teacher'),
    mk('はい、戦時下の市民権剥奪の歴史を論文で扱いました','Yes — War-cit-strip-hist paper','Earnest','ren_uni'),
    mk('蓮さん、受刑者の社会復帰研究を論文で扱いましたね','Ren — prisoner-reint-research paper','Reflective','asuka_teacher'),
    mk('はい、英国労働党の政策史を論文で扱いました','Yes — UK-Lab-pol-hist paper','Earnest close','ren_uni'),
  ]},
  {id:'conv_08712',cluster:'C',ambient:'office_quiet_low',cast:['takeda_officer','ren_uni'],targets:C_T,scenario:'Officer discusses cases',lines:[
    mk('本件、犯罪組織打倒の作戦を警察、進めてらっしゃいますね','Case crime-org-overthrow police-progress','Reflective','ren_uni'),
    mk('警察、容疑者が降伏する瞬間まで備えております','Police suspect-surr-prep','Procedural','takeda_officer'),
    mk('本件、第三者が介在した形跡を警察、確認されましたね','Case third-party-intervene-trace police-confirm','Reflective','ren_uni'),
    mk('警察、適法な手続きで捜査を進めます','Police lawful-proc-inv-progress','Procedural','takeda_officer'),
    mk('本件、被害者に内在するストレス要因も警察、考慮されてますね','Case victim-inherent-stress police-consider','Reflective','ren_uni'),
    mk('警察、不正資産の剥奪手続を進めます','Police illegal-asset-strip-proc','Procedural','takeda_officer'),
    mk('本件、受刑者の社会復帰支援を警察、ご相談されてますね','Case prisoner-reint-supp police-consult','Reflective','ren_uni'),
    mk('警察、労働党所属議員からのご質問にも対応します','Police Lab-MP-Q-resp','Close','takeda_officer'),
  ]},
  {id:'conv_08713',cluster:'C',ambient:'lecture_hall_quiet',cast:['asuka_teacher','sakura_teen'],targets:C_T,scenario:'Teacher mentors teen',lines:[
    mk('桜さん、独裁政権打倒の市民運動を論文で扱いましたね','Sakura — dictator-overthrow paper','Calm','asuka_teacher'),
    mk('はい、戦時降伏の調印過程を論文で扱いました','Yes — War-surr paper','Earnest teen','sakura_teen'),
    mk('外国勢力の介在事例を論文で扱いましたね','Foreign-intervene paper','Reflective','asuka_teacher'),
    mk('はい、戦時下の適法な戦闘行為を論文で扱いました','Yes — War-lawful paper','Earnest','sakura_teen'),
    mk('組織に内在する問題を論文で扱いましたね','Org-inherent-issue paper','Engaged','asuka_teacher'),
    mk('はい、戦時下の市民権剥奪を論文で扱いました','Yes — War-cit-strip paper','Earnest','sakura_teen'),
    mk('受刑者の社会復帰研究を論文で扱いましたね','Prisoner-reint paper','Reflective','asuka_teacher'),
    mk('はい、英国労働党の政策史を論文で扱いました','Yes — UK-Lab-pol paper','Earnest close','sakura_teen'),
  ]},
  {id:'conv_08714',cluster:'C',ambient:'clinic_quiet',cast:['saito_doctor','ren_uni'],targets:C_T,scenario:'Doctor discusses health',lines:[
    mk('蓮さん、感染症打倒の取り組みを医療チームで継続しております','Ren — infect-overthrow-cont med-team cont','Calm','saito_doctor'),
    mk('はい、降伏直後の戦災医療の歴史を医療チームで参照します','Yes — Post-surr-war-med-hist med-team ref','Patient','saito_doctor'),
    mk('外部医師の介在事案を、貴院、ご経験されたんですね、先生','Ext-doctor-intervene your-hosp exp, sensei','Reflective','ren_uni'),
    mk('はい、適法な治療手続きを医療チームで厳守します','Yes — Lawful-treat-proc med-team strict','Patient','saito_doctor'),
    mk('患者さんに内在する不安を、貴院、丁寧にケアされてますね、先生','Patient-inherent-anxiety your-hosp careful-care, sensei','Curious','ren_uni'),
    mk('はい、医師資格剥奪事案を医療チームで分析します','Yes — Doctor-license-strip med-team-anal','Patient','saito_doctor'),
    mk('受刑者の医療支援を、貴院、ご担当されてるそうですね、先生','Prisoner-med-supp your-hosp handle, sensei','Reflective','ren_uni'),
    mk('はい、労働党の医療公約を医療チームで分析します','Yes — Lab-med-pledge med-team-anal','Patient close','saito_doctor'),
  ]},
  {id:'conv_08715',cluster:'C',ambient:'office_quiet_low',cast:['hiroshi_boss','kenji_office'],targets:C_T,scenario:'Boss strategizes',lines:[
    mk('当社、業界一位を打倒する目標を持て','Our co — industry-top-overthrow-goal','Crisp','hiroshi_boss'),
    mk('はい。競合に降伏する選択肢はございません','Yes — Rival-surr-no-option','Methodical','kenji_office'),
    mk('当社、不正に介在する取引先には対応しろ','Our co — illegal-intervene-partner-resp','Direction','hiroshi_boss'),
    mk('はい。社内手続きは適法を徹底しております','Yes — Co-proc-lawful-strict','Update','kenji_office'),
    mk('当社、社員に内在する不満を吸い上げろ','Our co — staff-inherent-disc-listen','Direction','hiroshi_boss'),
    mk('はい。不正役員の資格剥奪を委員会で検討します','Yes — Illegal-exec-strip-comm-consider','Update','kenji_office'),
    mk('当社、社員が受刑者になった場合の支援を考えろ','Our co — staff-prisoner-supp-think','Direction','hiroshi_boss'),
    mk('はい。労働党との対話の窓口も開いております','Yes — Lab-dialog-window-open','Close','kenji_office'),
  ]},
  {id:'conv_08716',cluster:'D',ambient:'cafe_quiet_chatter',cast:['mei_romantic','aoi_barista'],targets:D_T,scenario:'Two friends chat',lines:[
    mk('葵、お客様、演歌のCDをプレゼントしてくれたよ、メイちゃん','Aoi — cust-enka-CD-gift Mei','Pleased','mei_romantic'),
    mk('葵、新メニューに林檎のタルト加えましょう、メイちゃん','Aoi — new-menu-apple-tart-add Mei','Animated','aoi_barista'),
    mk('葵、お客様、車庫に車を入れて来られたよ、メイちゃん','Aoi — cust-garage-car-came Mei','Reflective','mei_romantic'),
    mk('葵、お客様、国宝の屏風を見に行かれたって、メイちゃん','Aoi — cust-nat-treasure-screen-saw Mei','Reflective','aoi_barista'),
    mk('葵、お客様、大西洋を渡る旅をなさるって、メイちゃん','Aoi — cust-Atlantic-trip Mei','Reflective','mei_romantic'),
    mk('葵、お客様、ジェットコースターのスリルが好きなんだって、メイちゃん','Aoi — cust-coaster-thrill-like Mei','Reflective','aoi_barista'),
    mk('葵、お客様、毛皮のコートが暖かそうね、メイちゃん','Aoi — cust-fur-coat-warm Mei','Reflective','mei_romantic'),
    mk('葵、新メニュー、ビーフシチュー作りましょう、メイちゃん','Aoi — new-menu-beef-stew Mei','Animated close','aoi_barista'),
  ]},
  {id:'conv_08717',cluster:'D',ambient:'living_room_quiet',cast:['hiroshi_elder','sachiko_grandma'],targets:D_T,scenario:'Elderly couple chats',lines:[
    mk('ばあさん、若い頃、お父さんが演歌を好まれたぞ','Gran — youth Dad enka-loved','Wistful','hiroshi_elder'),
    mk('うん、お祖父ちゃん、秋になると林檎を箱で買われたわよね、あなた?','Yes — Grandpa-autumn-apple-box-bought, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが車庫で日曜大工をされたぞ','Gran — youth Dad-garage-DIY','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、国宝の仏像をご覧になって涙されたわよね、あなた?','Grandpa — nat-treasure-buddha-saw-tears, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お父さんが大西洋を船で渡る話を聞かせて下さったぞ','Gran — youth Dad-Atlantic-ship-told','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お孫様とスリルあるお話を楽しまれたわよね、あなた?','Grandpa — grandkid-thrill-story, dear?','Tender','sachiko_grandma'),
    mk('ばあさん、若い頃、お母様の毛皮のコートを着させていただいたぞ','Gran — youth Mom-fur-coat-wore','Wistful','hiroshi_elder'),
    mk('お祖父ちゃん、お祝いの日にビーフステーキをお作りになったわよね、あなた?','Grandpa — celeb-beef-steak-made, dear?','Tender close','sachiko_grandma'),
  ]},
  {id:'conv_08718',cluster:'D',ambient:'park_distant_birds',cast:['mei_romantic','sho_child'],targets:D_T,scenario:'Aunt and nephew chat',lines:[
    mk('翔くん、お祖父ちゃんが演歌を口ずさんでらっしゃるわ','Sho — Grandpa-enka-hum','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お祖母ちゃんの林檎ジャム大好きだよ','Mei-sis — me Grandma-apple-jam-love','Eager child','sho_child'),
    mk('翔くん、お父さんと車庫でキャンプ用品の整理しましょうね','Sho — Dad-garage-camp-org','Direction','mei_romantic'),
    mk('メイ姉さん、ぼく、博物館で国宝の刀を見たよ','Mei-sis — me museum-nat-treasure-sword-saw','Eager child','sho_child'),
    mk('翔くん、お父さんが昔、大西洋を渡られたんですって','Sho — Dad-old-Atlantic-crossed','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、お化け屋敷のスリルにドキドキしたよ','Mei-sis — me haunted-thrill-thumped','Eager child','sho_child'),
    mk('翔くん、お祖母ちゃんが毛皮のショールを着てらしたわ','Sho — Grandma-fur-shawl-wore','Reflective','mei_romantic'),
    mk('メイ姉さん、ぼく、ママのビーフシチュー大好きだよ','Mei-sis — me Mom-beef-stew-love','Eager close','sho_child'),
  ]},
  {id:'conv_08719',cluster:'D',ambient:'street_quiet_distant',cast:['sakura_teen','riku_teen'],targets:D_T,scenario:'Teens chat',lines:[
    mk('リク、お前のお父さん、演歌好きだろ?','Riku — your-Dad-enka-like?','Curious teen','sakura_teen'),
    mk('お前、給食の林檎残してたな、桜','You — lunch-apple-left Sakura','Wry','riku_teen'),
    mk('リク、お前ん家、二台分の車庫あるんだろ?','Riku — your-home-2-car-garage?','Curious','sakura_teen'),
    mk('お前、社会で国宝の単元やったろ?桜','You — soc-nat-treasure-unit? Sakura','Curious','riku_teen'),
    mk('リク、お前、地理で大西洋の航路やったろ?','Riku — geo-Atlantic-route?','Curious','sakura_teen'),
    mk('お前、絶叫マシンのスリル好きだろ?桜','You — scream-machine-thrill-like? Sakura','Curious','riku_teen'),
    mk('リク、お前、毛皮反対派なんだろ?','Riku — fur-against-faction?','Curious','sakura_teen'),
    mk('お前、給食のビーフカレー好きだろ?桜','You — lunch-beef-curry-like? Sakura','Curious close','riku_teen'),
  ]},
  {id:'conv_08720',cluster:'D',ambient:'living_room_quiet',cast:['yumiko_mom','sho_child'],targets:D_T,scenario:'Mom and son chat',lines:[
    mk('翔くん、お祖父ちゃんが演歌のレコードをくれたわ','Sho — Grandpa-enka-record-gave','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祖母ちゃんの林檎パイ食べたい','Mom — me Grandma-apple-pie-want','Eager child','sho_child'),
    mk('翔くん、お父さんが車庫の電気を直してらしたわ','Sho — Dad-garage-light-fixed','Reflective','yumiko_mom'),
    mk('ママ、ぼく、修学旅行で国宝の建物見たよ','Mom — me school-trip-nat-treasure-bldg-saw','Proud child','sho_child'),
    mk('翔くん、お父さんが昔、大西洋を旅されたお話してくれたわ','Sho — Dad-old-Atlantic-trip-told','Reflective','yumiko_mom'),
    mk('ママ、ぼく、お祭りでスリルあるお化け屋敷入ったよ','Mom — me fest-thrill-haunted-entered','Eager child','sho_child'),
    mk('翔くん、お祖母ちゃんの毛皮の襟巻きが温かそうね','Sho — Grandma-fur-collar-warm','Reflective','yumiko_mom'),
    mk('ママ、ぼく、ママのビーフシチュー一番好きだよ','Mom — me Mom-beef-stew-fav','Eager close','sho_child'),
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
