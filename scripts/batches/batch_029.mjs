import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_029)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 564 — daichi + kenji, tech (medium)
  {
    id: 'conv_00564',
    context: 'Daichi and Kenji at work discuss a new IT system. Workplace tech adjustment.',
    purpose: 'workplace tech discussion — adjustment to new system',
    ambient: 'office_break',
    sound_effects: [],
    target_vocab: ['情報', '技術', '改善', '便利', '相談'],
    cast: ['kenji_office', 'daichi_kansai'],
    frequency_tier: 4,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'だいちさん、新しいシステム、慣れましたか。', en: 'Daichi-san, used to the new system?', style: 'Salaryman warm formal sincere-warm professional-asking, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'professionally-warm' },
      { speaker: 'daichi_kansai', jp: '正直、まだ、戸惑うこと多いです。', en: 'Honestly, still lots of confusion.', style: 'Kansai warm soft sincere honest-warm vulnerable-disclosure, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-honest' },
      { speaker: 'kenji_office', jp: '情報、共有、難しくなりましたよね。', en: 'Information sharing — became harder.', style: 'Salaryman warm gentle sincere-warm matching-warm acknowledging, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '技術、進化してるけど、慣れるまで、時間かかりますわ。', en: 'Technology evolving, but takes time to get used to.', style: 'Kansai warm soft sincere thoughtful-warm philosophical-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-thoughtful' },
      { speaker: 'kenji_office', jp: 'お互い、相談しながら、進めていきましょう。', en: 'Mutually consulting, let\'s progress.', style: 'Salaryman warm gentle sincere-warm collaborative-warm extending, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-collaborative' },
      { speaker: 'daichi_kansai', jp: 'けんじさんがいてくれて、ほんま、助かりますわ。', en: 'Having Kenji-san — truly, saves me.', style: 'Kansai warm soft sincere deep-warm grateful-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: 'こちらこそ。改善案、また、ご相談したいです。', en: 'Same. Improvement plan — want to consult again.', style: 'Salaryman warm formal sincere-warm closing-extending-warm, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 565 — sho + sakura, school project (short)
  {
    id: 'conv_00565',
    context: 'Sho works on a school project; Sakura helps casually.',
    purpose: 'small cousin homework-help moment',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['宿題', '頑張る', '一緒', '楽しい', '面白い'],
    cast: ['sakura_teen', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: 'お姉ちゃん、新しい宿題、教えて。', en: 'Big sister, teach me new homework.', style: 'Tiny six-year-old soft small sincere careful-warm asking-help, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-careful' },
      { speaker: 'sakura_teen', jp: 'うん、見せて。あ、これ、面白そう。', en: 'Yes, show me. Ah, this — looks interesting.', style: 'Teen warm soft sincere bright-warm engaging-warm reviewing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sho_child', jp: '一緒に、考えてくれる？', en: 'Will you think together?', style: 'Tiny six-year-old soft small sincere bright-warm asking-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-warm' },
      { speaker: 'sakura_teen', jp: 'もちろん。お姉ちゃん、しょうの宿題、楽しい。', en: 'Of course. Big sister — Sho\'s homework fun.', style: 'Teen warm soft sincere generous-warm engaging-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: 'お姉ちゃん、頑張ろう、一緒に。', en: 'Big sister, work hard, together.', style: 'Tiny six-year-old soft small sincere bright-warm committing-warm closing, the small real warmth audible, soft small warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 566 — yumiko + naoko, autumn cooking (medium)
  {
    id: 'conv_00566',
    context: 'Yumiko and Naoko cook seasonal dishes together — autumn.',
    purpose: 'two adult women seasonal cooking',
    ambient: 'kitchen_afternoon',
    sound_effects: [],
    target_vocab: ['秋', '栗', '料理', '一緒', '美味しい'],
    cast: ['yumiko_mom', 'naoko_aunt'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: 'ゆみこちゃん、栗、たくさん、もらってきた。', en: 'Yumiko-chan — chestnuts, got lots.', style: 'Aunt warm bright sincere-warm seasonal-sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'yumiko_mom', jp: 'まあ、ありがとう。秋ね、本当に、感じる。', en: 'My, thank you. Autumn — truly feel.', style: 'Maternal warm gentle bright sincere-warm appreciative-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'naoko_aunt', jp: '栗ご飯、作ろうか。お母さんも、好きだったし。', en: 'Chestnut rice — let\'s make. Mother liked too.', style: 'Aunt warm gentle sincere bright-warm proposing-warm memory, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: 'お父さんも、毎年、楽しみにしてた。', en: 'Father — every year, looking forward.', style: 'Maternal warm soft tender sincere-warm memory-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'naoko_aunt', jp: 'お父さん、絶対、空から、見てくれてる。', en: 'Father — surely watching from sky.', style: 'Aunt warm soft tender sincere-warm comforting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-comforting' },
      { speaker: 'yumiko_mom', jp: 'こうやって、季節、ちゃんと、感じられるの、嬉しい。', en: 'Feeling the seasons properly like this — happy.', style: 'Maternal warm soft sincere reflective-warm philosophical-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '美味しく、作ろうね。皆で、食べましょう。', en: 'Let\'s make delicious. All — let\'s eat together.', style: 'Aunt warm soft sincere closing-warm extending-warm collective, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 567 — riku + ryosuke + ren, hiking (3-speaker, long)
  {
    id: 'conv_00567',
    context: 'Three men go hiking together. Long generation-bridging masculine conversation.',
    purpose: 'three-generation male hiking — deep adult conversation',
    ambient: 'mountain_morning',
    sound_effects: [],
    target_vocab: ['登山', '景色', '空気', '一緒', '家族', '感謝'],
    cast: ['ryosuke_dad', 'riku_teen', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'ryosuke_dad', jp: '皆さん、ここの景色、本当に、いい。', en: 'Everyone, view here — truly good.', style: 'Father warm gentle bright sincere-warm appreciating-warm opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'riku_teen', jp: 'お父さん、誘ってくれて、ありがとうございます。', en: 'Father, thank you for inviting.', style: 'Teen warm soft sincere formal-warm grateful-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: '俺も。久しぶりの登山、新鮮で。', en: 'Me too. Long-time hiking — fresh.', style: 'University student warm soft sincere bright-warm appreciating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ryosuke_dad', jp: 'こうやって、世代を超えて、一緒に歩けるの、本当に幸せ。', en: 'Walking across generations like this — truly happy.', style: 'Father warm soft sincere deep-warm philosophical-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'riku_teen', jp: 'お父さん、健康で、こうやって、来れるの、嬉しいです。', en: 'Father, being healthy and able to come — happy.', style: 'Teen warm soft sincere tender-warm grateful-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: '空気、本当に、違う。気持ち、整う気がする。', en: 'Air — truly different. Feel feelings settle.', style: 'University student warm soft sincere reflective-warm philosophical-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '頂上、もう少し。ゆっくり、行きましょう。', en: 'Summit — a bit more. Slowly, let\'s go.', style: 'Father warm gentle sincere-warm leading-warm encouraging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: 'お父さんと一緒に、登れて、本当に、貴重な時間。', en: 'Climbing with father — truly precious time.', style: 'Teen warm soft sincere deep-warm philosophical-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: '俺も、こんな時間、これからも、家族で、作っていきたい。', en: 'Me too — times like this — want to make with family forever.', style: 'University student warm soft sincere deep-warm extending-warm philosophical, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: '家族って、ね、ずっと、こうやって、繋がっていくもの。', en: 'Family — staying connected like this forever.', style: 'Father warm soft sincere deep-warm philosophical-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-philosophical' },
      { speaker: 'riku_teen', jp: '感謝してます。本当に。', en: 'Grateful. Truly.', style: 'Teen warm soft sincere closing-warm deep-tender-brief, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: 'こちらこそ。亮介さんに、誘ってもらえて、嬉しい。', en: 'Same. Glad invited by Ryosuke-san.', style: 'University student warm soft sincere closing-warm reciprocal-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '次は、皆さんで、家族みんなで、登りましょう。', en: 'Next — with everyone, all family — climb.', style: 'Father warm soft sincere closing-warm extending-warm collective-tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 568 — mei + sachiko, baby room (medium)
  {
    id: 'conv_00568',
    context: 'Sachiko helps Mei plan the baby room. Quiet warmth.',
    purpose: 'grandmother-mother prep collaboration',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['赤ちゃん', '部屋', '一緒', '準備', '楽しみ'],
    cast: ['sachiko_grandma', 'mei_romantic'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'お祖母様、赤ちゃんの部屋、何を、用意したらいいですか。', en: 'Grandmother, baby room — what to prepare?', style: 'Romantic warm soft sincere careful-warm asking-respectful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-careful' },
      { speaker: 'sachiko_grandma', jp: 'まず、暖かい毛布、ね。あと、小さい家具で十分よ。', en: 'First, warm blanket. Then, small furniture is enough.', style: 'Soft grandmother warm soft sincere wise-warm advising-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'mei_romantic', jp: 'お祖母様の、ご経験、本当に、参考になります。', en: 'Grandmother\'s experience — truly educational.', style: 'Romantic warm soft sincere deep-warm grateful-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sachiko_grandma', jp: '私の頃と、今と、いろいろ、違うこと多いだろうけど。', en: 'My era and now — many things different probably.', style: 'Soft grandmother warm soft sincere humble-warm balanced-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'humbly-warm' },
      { speaker: 'mei_romantic', jp: 'でも、お祖母様の、温かさ、ずっと、変わらないですね。', en: 'But — grandmother\'s warmth — never changing.', style: 'Romantic warm soft sincere deep-warm tender-warm philosophical, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'sachiko_grandma', jp: '皆で、ちゃんと、赤ちゃん、迎えてあげましょう。', en: 'All — let\'s welcome baby properly.', style: 'Soft grandmother warm soft sincere closing-warm collective-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'mei_romantic', jp: 'はい、本当に、感謝してます。', en: 'Yes, truly grateful.', style: 'Romantic warm soft sincere closing-warm brief-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 569 — aoi + asuka, music (short)
  {
    id: 'conv_00569',
    context: 'Aoi shares a new piece of music she\'s been listening to with Asuka.',
    purpose: 'small ongoing friend music exchange',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['音楽', 'おすすめ', '感動', '一緒', 'ありがとう'],
    cast: ['aoi_barista', 'asuka_teacher'],
    frequency_tier: 2,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: 'あすかさん、最近、こんな音楽、聴いてます。', en: 'Asuka-san, lately — listening to music like this.', style: 'Soft dreamy barista warm soft sincere bright-warm sharing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'asuka_teacher', jp: 'え、聴かせて。あおいさんの、おすすめ、いつも、好き。', en: 'Eh, let me listen. Aoi-san\'s recommendations — always like.', style: 'Teacher warm gentle bright sincere-warm eager-engaging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'aoi_barista', jp: '父が、好きだった曲。今、聴いても、感動する。', en: 'Father liked. Even now — moves.', style: 'Soft dreamy barista warm soft tender deep-warm personal-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'asuka_teacher', jp: 'お父様の、思い、繋がってますね、音楽で。', en: 'Father\'s feelings — connected through music.', style: 'Teacher warm soft sincere tender-warm philosophical-warm acknowledging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'aoi_barista', jp: '本当に。聴いてくれて、ありがとう。', en: 'Truly. Thank you for listening.', style: 'Soft dreamy barista warm soft sincere closing-warm grateful-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 570 — hiroshi_boss + ryosuke, finance (medium)
  {
    id: 'conv_00570',
    context: 'Hiroshi-boss and Ryosuke discuss family financial planning, like savings and grandchildren.',
    purpose: 'two adult men financial-life planning',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['貯金', '将来', '家族', '相談', '一緒'],
    cast: ['hiroshi_boss', 'ryosuke_dad'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '亮介さん、退職後の生活、いかがですか。', en: 'Ryosuke-san, post-retirement life — how?', style: 'Boss measured warm formal sincere-warm civil-asking, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-formal' },
      { speaker: 'ryosuke_dad', jp: '今のところ、安定してます。貯金、ちゃんと、しておいて、良かった。', en: 'For now, stable. Glad I saved properly.', style: 'Father warm gentle sincere-warm balanced-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '私も、同じです。将来、家族のために、ね。', en: 'Me too. For future family.', style: 'Boss measured warm soft sincere-warm philosophical-warm matching, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '孫が、生まれるって、また、新しい責任、感じますね。', en: 'Grandchild born — feel new responsibility.', style: 'Father warm soft sincere reflective-warm philosophical-warm honest, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-philosophical' },
      { speaker: 'hiroshi_boss', jp: '本当に。家族、増えていきますね。', en: 'Truly. Family — growing.', style: 'Boss measured warm soft sincere bright-warm philosophical-warm, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '皆で、ちゃんと、支えていきましょう。', en: 'All — let\'s support properly.', style: 'Father warm soft sincere closing-warm collective-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '亮介さんと、こうやって、相談できるの、本当に、ありがたい。', en: 'Consulting with Ryosuke-san like this — truly grateful.', style: 'Boss measured warm soft sincere closing-warm grateful-deep, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 571 — hina + sho + mei (3-speaker, medium)
  {
    id: 'conv_00571',
    context: 'Mei spends afternoon with the two kids — getting them comfortable with her pregnancy.',
    purpose: 'pregnant aunt with two younger kids — sibling-warming',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['赤ちゃん', '一緒', '楽しい', '優しい', 'お姉さん'],
    cast: ['mei_romantic', 'hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'メイお姉さん、赤ちゃん、お腹、動いてる？', en: 'Mei-onee-san, baby — moving in tummy?', style: 'High child bright sincere curious-warm engaging-asking, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'sincerely-curious' },
      { speaker: 'mei_romantic', jp: 'うん、最近、よく、動いてる。', en: 'Yes, lately — moving lots.', style: 'Romantic warm soft tender sincere-warm sharing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'sho_child', jp: '…触っても、いい？', en: '…Can I touch?', style: 'Tiny six-year-old soft small sincere careful-warm asking-tentative, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-careful' },
      { speaker: 'mei_romantic', jp: 'もちろん。やさしく、触ってね。', en: 'Of course. Touch gently.', style: 'Romantic warm soft tender sincere-warm welcoming-warm gentle, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'hina_child', jp: 'うわ、本当に、動いてる！', en: 'Wow, really moving!', style: 'High child bright sincere overwhelmed-warm celebrating, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'ぼくが、お兄ちゃんになる？', en: 'I become big brother?', style: 'Tiny six-year-old soft small sincere wondering-warm hopeful-asking, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-wondering' },
      { speaker: 'mei_romantic', jp: 'うん、しょうくんが、ちゃんと、お兄ちゃんに、なる。', en: 'Yes, Sho-kun becomes proper big brother.', style: 'Romantic warm soft tender sincere-warm extending-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'hina_child', jp: 'しょうくん、お兄ちゃん、お姉さんと、一緒に、優しく、するね！', en: 'Sho-kun and big sister — together, gently!', style: 'High child bright sincere bright-warm closing-collective, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' }
    ]
  },
  // 572 — kenji + tatsuya, autumn harvest (medium)
  {
    id: 'conv_00572',
    context: 'Kenji visits the countryside for harvest visit. Casual adult masculine warmth.',
    purpose: 'small businessman-farmer continued friendship',
    ambient: 'farm_porch_afternoon',
    sound_effects: [],
    target_vocab: ['秋', '収穫', '畑', '一緒', '感謝'],
    cast: ['kenji_office', 'tatsuya_country'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: '達也さん、ようやく、田舎、来れました。', en: 'Tatsuya-san, finally — came to country.', style: 'Salaryman warm formal sincere bright-warm casual-visiting, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: 'お、よう来てくれた。秋の収穫、見せたかった。', en: 'Oh, glad you came. Wanted to show autumn harvest.', style: 'Country gruff warm bright sincere proud-warm welcoming, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gruffly-proud' },
      { speaker: 'kenji_office', jp: 'うわ、すごい収穫量。', en: 'Wow, big harvest.', style: 'Salaryman warm soft sincere impressed-warm appreciating, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-impressed' },
      { speaker: 'tatsuya_country', jp: '今年、特に良うできた。皆さんのお陰で、ええ取引、続いてるから。', en: 'This year, especially good. Thanks to all — good trade continues.', style: 'Country gruff warm soft sincere humble-warm appreciating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'humbly-warm' },
      { speaker: 'kenji_office', jp: 'こちらこそ、達也さんの野菜、本当に、ありがたい。', en: 'Same. Tatsuya-san\'s veggies — truly grateful.', style: 'Salaryman warm soft sincere deep-warm reciprocal-grateful, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'tatsuya_country', jp: '皆で、一緒に、続けていけるの、ほんま、嬉しい。', en: 'Continuing together — truly happy.', style: 'Country gruff warm soft sincere closing-warm philosophical-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: '本当に。これからも、よろしくお願いします。', en: 'Truly. From now on — please.', style: 'Salaryman warm formal sincere closing-warm extending-warm, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 573 — saito + asuka + yumiko (3-speaker, long)
  {
    id: 'conv_00573',
    context: 'A parent-teacher-doctor meeting about Sho\'s overall wellbeing.',
    purpose: 'three-civic-figure coordinated child wellbeing meeting',
    ambient: 'community_room',
    sound_effects: [],
    target_vocab: ['子供', '健康', '成長', '応援', '感謝', '一緒'],
    cast: ['saito_doctor', 'asuka_teacher', 'yumiko_mom'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'yumiko_mom', jp: '今日は、お時間、ありがとうございます。', en: 'Today, thank you for time.', style: 'Maternal warm formal sincere-warm civic-opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-formal' },
      { speaker: 'saito_doctor', jp: 'しょうくん、本当に、健康そのもの。安心です。', en: 'Sho-kun — true health. Reassuring.', style: 'Doctor warm professional gentle bright sincere-warm reporting, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-warm' },
      { speaker: 'asuka_teacher', jp: '学校でも、成長を、感じてます。お友達も、増えて。', en: 'At school too — feel growth. Friends increased.', style: 'Teacher warm gentle bright sincere-warm reporting-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'yumiko_mom', jp: '本当にありがたい。皆さんに、見守られて。', en: 'Truly grateful. Watched over by all.', style: 'Maternal warm soft sincere deep-warm grateful-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'saito_doctor', jp: 'お母様の、ご家庭での支えが、何より大事。', en: 'Mother\'s home support — most important.', style: 'Doctor warm professional gentle sincere-warm appreciating-warm acknowledging, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: 'こうやって、皆で、しょうくんを、応援していけるの、嬉しい。', en: 'All cheering Sho-kun like this — happy.', style: 'Teacher warm gentle sincere bright-warm reflective-warm community, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: '感謝してます。本当に。', en: 'Grateful. Truly.', style: 'Maternal warm soft sincere closing-warm brief-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'saito_doctor', jp: 'これからも、ちゃんと、見守っていきましょう。', en: 'From now on too, watch over properly.', style: 'Doctor warm professional gentle sincere-warm closing-extending-warm, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '一緒に、見守れること、私も、嬉しい。', en: 'Watching over together — I\'m happy too.', style: 'Teacher warm soft sincere closing-warm matching-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: 'これからも、よろしくお願いします。', en: 'From now on — please.', style: 'Maternal warm formal sincere closing-warm respectful-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'saito_doctor', jp: 'こちらこそ。家族みたいに、ね。', en: 'Same. Like family.', style: 'Doctor warm professional gentle sincere closing-warm extending-philosophical, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '本当に。ずっと、繋がっていきたい。', en: 'Truly. Stay connected forever.', style: 'Teacher warm soft sincere closing-warm deep-extending-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'yumiko_mom', jp: 'こうやって、皆さんに、囲まれていて、本当に、幸せ。', en: 'Surrounded by all like this — truly happy.', style: 'Maternal warm soft sincere closing-warm deep-philosophical-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 574 — daichi + ren, two husbands (medium)
  {
    id: 'conv_00574',
    context: 'Two husbands talk over drinks. Both married, Daichi about to be a father.',
    purpose: 'two-male sharing married-life perspectives',
    ambient: 'izakaya_evening',
    sound_effects: [],
    target_vocab: ['結婚', '一緒', '幸せ', '将来', '感謝'],
    cast: ['daichi_kansai', 'ren_uni'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'れんくん、結婚生活、慣れた？', en: 'Ren-kun, used to married life?', style: 'Kansai warm bright sincere-warm casual-asking, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ren_uni', jp: 'なんとか、ね。あおいに、ずっと、助けられてる。', en: 'Somehow. Always saved by Aoi.', style: 'University student warm soft sincere honest-warm grateful-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: 'わいも、同じや。メイちゃんがいるから、毎日、幸せ。', en: 'Same. With Mei-chan — happy daily.', style: 'Kansai warm soft sincere matching-warm bright-disclosure, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ren_uni', jp: 'お父さんになる、緊張するっすね。', en: 'Becoming father — nervous.', style: 'University student warm soft sincere reflective-warm observing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '正直、責任、めっちゃ重い。けど、楽しみ。', en: 'Honestly, responsibility super heavy. But, looking forward.', style: 'Kansai warm soft sincere honest-balanced-warm disclosure, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-balanced' },
      { speaker: 'ren_uni', jp: '俺たちも、いつか、ね。家族、増やしたい。', en: 'We too, someday. Want to grow family.', style: 'University student warm soft tender sincere-warm future-warm wishing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'daichi_kansai', jp: '皆で、家族、繋がっていけたら、ええなあ。', en: 'All — staying connected as family — good.', style: 'Kansai warm soft sincere closing-warm philosophical-warm tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 575 — sho + hiroshi_boss (short)
  {
    id: 'conv_00575',
    context: 'Sho meets retired Hiroshi-boss at a family event. They have a small warm chat.',
    purpose: 'small intergenerational male moment — retired man with child',
    ambient: 'family_event',
    sound_effects: [],
    target_vocab: ['学校', '頑張る', '応援', '元気', 'ありがとう'],
    cast: ['hiroshi_boss', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: 'しょうくん、お元気。学校、楽しい？', en: 'Sho-kun, well. School fun?', style: 'Boss measured warm gentle bright sincere-warm welcoming-warm asking, the soft real authority-soft audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'sho_child', jp: 'はい、ちゃんと、頑張ってます。', en: 'Yes, working hard properly.', style: 'Tiny six-year-old soft small sincere proud-warm respectful-reporting, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-proud' },
      { speaker: 'hiroshi_boss', jp: 'えらいな。おじさん、応援してるよ。', en: 'Good. Uncle is cheering.', style: 'Boss measured warm gentle bright sincere-warm encouraging-warm, the soft real authority-soft audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: 'ありがとうございます、おじさん。', en: 'Thank you, uncle.', style: 'Tiny six-year-old soft small sincere closing-warm grateful-respectful, the small real warmth audible, soft small warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: 'ご家族、皆さんに、よろしくね。', en: 'Regards to family, all.', style: 'Boss measured warm gentle sincere closing-warm civic-warm extending, the soft real authority-soft audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 576 — mrs_mori + naoko (short)
  {
    id: 'conv_00576',
    context: 'Mrs. Mori and Naoko consider expanding the community garden.',
    purpose: 'small ongoing neighbor adult planning',
    ambient: 'garden_afternoon',
    sound_effects: [],
    target_vocab: ['庭', '一緒', '楽しい', '感謝', '広げる'],
    cast: ['mrs_mori_neighbor', 'naoko_aunt'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'mrs_mori_neighbor', jp: 'なおこさん、お庭、もう少し、広げてみない？', en: 'Naoko-san — expand garden a bit more?', style: 'Neighbor warm gentle bright sincere-warm proposing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'naoko_aunt', jp: 'いいアイデア。皆で、もっと、楽しめる。', en: 'Good idea. All — can enjoy more.', style: 'Aunt warm bright sincere-warm collective-warm matching-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: '森さんのお陰で、本当に、いい場所になってる。', en: 'Thanks to Mori-san — truly nice place.', style: 'Neighbor warm soft sincere humble-warm grateful-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'humbly-warm' },
      { speaker: 'naoko_aunt', jp: 'こちらこそ。森さんが、いてくれるから。', en: 'Same. Because Mori-san is here.', style: 'Aunt warm soft sincere reciprocal-warm appreciating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'mrs_mori_neighbor', jp: 'これからも、ずっと、一緒に、ね。', en: 'From now on, always together.', style: 'Neighbor warm soft sincere closing-warm extending-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 577 — sakura + sho + hina + ren (4-speaker, long)
  {
    id: 'conv_00577',
    context: 'Four cousins gather for Sho\'s birthday. Big family celebration.',
    purpose: 'four-cousin birthday gathering',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['誕生日', '一緒', '楽しい', 'お祝い', '感謝', '家族'],
    cast: ['sakura_teen', 'hina_child', 'sho_child', 'ren_uni'],
    frequency_tier: 2,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: 'しょう、誕生日、おめでとう！', en: 'Sho, happy birthday!', style: 'University student warm bright sincere enthusiastic-warm celebrating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sakura_teen', jp: 'おめでとう、しょうくん！もう、九歳ね。', en: 'Congrats, Sho-kun! Already nine.', style: 'Teen warm bright sincere celebrating-warm milestone-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'hina_child', jp: 'しょうくん！プレゼント、ある！', en: 'Sho-kun! Present!', style: 'High child bright sincere enthusiastic-warm presenting-warm, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'うわ、皆、ありがとう！', en: 'Wow, everyone, thank you!', style: 'Tiny six-year-old soft small sincere overwhelmed-warm grateful-touched, the small real warmth audible, soft small warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ren_uni', jp: 'しょう、お兄ちゃんになる準備、ちゃんと、できてる？', en: 'Sho, prep to be big brother — done?', style: 'University student warm soft sincere bright-warm teasing-warm asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sho_child', jp: '…うん、ちゃんと、なる。', en: '…Yes, will become properly.', style: 'Tiny six-year-old soft small sincere committed-warm proud-tender, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-proud' },
      { speaker: 'sakura_teen', jp: 'しょう、本当に、立派な、お兄ちゃんに、なる。', en: 'Sho — truly splendid big brother.', style: 'Teen warm soft sincere believing-warm tender-warm encouraging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hina_child', jp: 'ひな、お姉さんに、なるよ！', en: 'Hina becomes big sister!', style: 'High child bright sincere proud-warm declaring-warm, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-proud' },
      { speaker: 'ren_uni', jp: '皆で、赤ちゃん、迎えるね。', en: 'All — welcoming baby.', style: 'University student warm soft sincere bright-warm collective-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sakura_teen', jp: '皆で、お祝いと、お祝いと、続くね。', en: 'Celebration after celebration — continues.', style: 'Teen warm bright sincere-warm philosophical-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sho_child', jp: '家族、本当に、大好き。', en: 'Family — truly love.', style: 'Tiny six-year-old soft small sincere tender-warm deep-disclosure, the small real warmth audible, soft small warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'hina_child', jp: '皆で、誕生日、毎年、お祝いしようね！', en: 'All — every year, celebrate birthdays!', style: 'High child bright sincere enthusiastic-warm closing-extending, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'ren_uni', jp: '絶対、ね。皆で、ずっと、一緒に。', en: 'Definitely. All, forever, together.', style: 'University student warm soft sincere closing-warm extending-deep-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 578 — yuki + ryosuke (medium)
  {
    id: 'conv_00578',
    context: 'Yuki and Ryosuke continue their professional friendship. Brief catch-up.',
    purpose: 'small mentor-mentee ongoing relationship',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['仕事', '部下', '相談', '感謝', '頑張る'],
    cast: ['yuki_office', 'ryosuke_dad'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: '野田さん、今日も、お時間、ありがとうございます。', en: 'Noda-san, thank you for time today.', style: 'Office woman warm formal sincere-warm civic-opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-formal' },
      { speaker: 'ryosuke_dad', jp: 'こちらこそ。最近、お仕事、どうですか。', en: 'Same. Work, how lately?', style: 'Father warm gentle bright sincere-warm engaging-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '部下、増えて、責任、重くなってます。', en: 'Subordinates increased, responsibility heavier.', style: 'Office woman warm soft sincere honest-warm reporting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-honest' },
      { speaker: 'ryosuke_dad', jp: '部下を、ちゃんと、見守れるって、難しいですよね。', en: 'Watching subordinates properly — difficult.', style: 'Father warm gentle sincere-warm acknowledging-warm philosophical, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '野田さんが、ずっと、教えてくれてるお陰で、なんとか。', en: 'Thanks to Noda-san always teaching — somehow.', style: 'Office woman warm soft sincere deep-warm grateful-redirecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: '佐藤さんが、ちゃんと、頑張ってるから。応援してます。', en: 'Because Sato-san works hard. Cheering.', style: 'Father warm gentle sincere-warm believing-warm encouraging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: 'これからも、相談、よろしくお願いします。', en: 'From now on too — consultation, please.', style: 'Office woman warm soft sincere closing-warm respectful-extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 579 — mei + daichi + tatsuya (3-speaker, medium)
  {
    id: 'conv_00579',
    context: 'Mei pregnant, visits Tatsuya in the country with Daichi.',
    purpose: 'three at country home — extended family with pregnancy',
    ambient: 'farm_porch_afternoon',
    sound_effects: [],
    target_vocab: ['赤ちゃん', '田舎', '一緒', '家族', '感謝'],
    cast: ['daichi_kansai', 'mei_romantic', 'tatsuya_country'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'tatsuya_country', jp: 'メイさん、ようこそ。お体、大丈夫？', en: 'Mei-san, welcome. Body — okay?', style: 'Country gruff warm soft sincere careful-warm caring-rural, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gruffly-caring' },
      { speaker: 'mei_romantic', jp: 'はい、すっかり、安定してます。', en: 'Yes, completely stable.', style: 'Romantic warm soft sincere bright-warm relaxed-warm reporting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'daichi_kansai', jp: '達也さん、田舎の空気、メイちゃんに、ええんですわ。', en: 'Tatsuya-san, country air — good for Mei-chan.', style: 'Kansai warm soft sincere bright-warm appreciating-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: 'いつでも、ゆっくり、来てな。赤ちゃんも、田舎で、育てたい？', en: 'Anytime, slowly come. Want to raise baby in country too?', style: 'Country gruff warm soft sincere bright-warm extending-warm asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: 'たまに、連れてきたい。お祖父様代わりに、お願いしますね。', en: 'Want to bring sometimes. Asking for grandpa-role.', style: 'Romantic warm soft tender sincere-warm requesting-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'tatsuya_country', jp: '任せてくれ。可愛がるで。', en: 'Leave it to me. Will love.', style: 'Country gruff warm bright sincere-warm committed-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'daichi_kansai', jp: '皆で、赤ちゃん、見守っていけるの、本当に、ありがたい。', en: 'All watching baby — truly grateful.', style: 'Kansai warm soft sincere closing-warm philosophical-warm grateful, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 580 — naoko + asuka (short)
  {
    id: 'conv_00580',
    context: 'Naoko and Asuka have ongoing professional-women friendship.',
    purpose: 'small ongoing professional-women warmth',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['仕事', '一緒', '感謝', '楽しい', '友達'],
    cast: ['naoko_aunt', 'asuka_teacher'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: 'ナオコさん、お久しぶり。お仕事、忙しい？', en: 'Naoko-san, long time. Work busy?', style: 'Teacher warm gentle bright sincere-warm friend-opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'naoko_aunt', jp: '相変わらず。あすかさんは？', en: 'As always. Asuka-san?', style: 'Aunt warm gentle sincere bright-warm reciprocal-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '生徒たち、本当に、可愛い。毎日、楽しい。', en: 'Students truly cute. Daily fun.', style: 'Teacher warm gentle sincere bright-warm enthusiastic-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'naoko_aunt', jp: 'こうやって、たまに、お話できるの、本当に、嬉しい。', en: 'Talking like this occasionally — truly happy.', style: 'Aunt warm soft sincere closing-warm appreciating-warm reflective, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'asuka_teacher', jp: 'こちらこそ。ずっと、続けたい関係。', en: 'Same. Want to continue forever.', style: 'Teacher warm soft sincere closing-warm matching-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 581 — riku + saito + sho (3-speaker, short)
  {
    id: 'conv_00581',
    context: 'Riku takes Sho to Saito\'s clinic for a small follow-up. Riku as caring older cousin.',
    purpose: 'small cousin-doctor-child gathering',
    ambient: 'clinic_quiet',
    sound_effects: [],
    target_vocab: ['元気', '一緒', 'ありがとう', '健康', '優しい'],
    cast: ['saito_doctor', 'riku_teen', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: 'リクさんが、しょうくんを、連れてきてくれて、嬉しい。', en: 'Riku-san bringing Sho-kun — happy.', style: 'Doctor warm professional gentle bright sincere-warm welcoming-warm, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-warm' },
      { speaker: 'riku_teen', jp: 'お父さんも、お母さんも、忙しくて。', en: 'Father, mother — busy.', style: 'Teen warm soft sincere brief-warm explaining-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: 'リクお兄ちゃん、優しい。', en: 'Riku-onii-chan — kind.', style: 'Tiny six-year-old soft small sincere tender-warm appreciating-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'saito_doctor', jp: 'しょうくん、元気そうで、安心です。', en: 'Sho-kun — looks well, reassured.', style: 'Doctor warm professional gentle sincere-warm reassuring-warm closing, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-warm' },
      { speaker: 'riku_teen', jp: 'ありがとうございます、先生。', en: 'Thank you, doctor.', style: 'Teen warm soft sincere closing-warm formal-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 582 — kenji + naoko + hiroshi_boss + ryosuke + ren (5-speaker, long)
  {
    id: 'conv_00582',
    context: 'Big gathering — Kenji + Naoko + retired Hiroshi-boss + Ryosuke + Ren. Family expanding.',
    purpose: 'five-adult family-friends gathering',
    ambient: 'restaurant_evening',
    sound_effects: [],
    target_vocab: ['家族', '一緒', '感謝', '友達', '将来', '幸せ'],
    cast: ['kenji_office', 'naoko_aunt', 'hiroshi_boss', 'ryosuke_dad', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '皆さん、ようこそ、お集まりいただきありがとう。', en: 'Everyone, welcome, thanks for gathering.', style: 'Boss measured warm formal sincere-warm gathering-opening, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-formal' },
      { speaker: 'naoko_aunt', jp: '田中さんの、お声がけ、本当に、嬉しい。', en: 'Tanaka-san\'s invitation — truly happy.', style: 'Aunt warm gentle bright sincere-warm appreciating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'kenji_office', jp: 'こうやって、皆さんで集まれるの、本当に、貴重ですね。', en: 'Gathering as all like this — truly precious.', style: 'Salaryman warm formal sincere-warm reflective-warm acknowledging, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '世代を超えて、こうやって、繋がれるの、なかなかないですよね。', en: 'Connecting across generations like this — rare.', style: 'Father warm gentle sincere-warm philosophical-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-philosophical' },
      { speaker: 'ren_uni', jp: '俺、こんな大人たちの中に、いさせてもらえて、感謝しかない。', en: 'Me being among such adults — only gratitude.', style: 'University student warm soft sincere deep-warm grateful-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: 'れんさんも、もう、しっかりした大人ですよ。', en: 'Ren-san — already solid adult.', style: 'Boss measured warm gentle sincere-warm appreciating-warm acknowledging, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: 'あおいさんも、メイも、本当に、いいご縁、繋いでくれて。', en: 'Aoi-san, Mei — truly good connections.', style: 'Aunt warm soft sincere bright-warm philosophical-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: 'メイさんの、赤ちゃんも、もうすぐですよね。', en: 'Mei-san\'s baby — soon.', style: 'Salaryman warm formal sincere bright-warm anticipating-warm, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ryosuke_dad', jp: '皆さんで、お祝いしましょう、生まれたら。', en: 'Let\'s celebrate together when born.', style: 'Father warm gentle sincere bright-warm planning-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'うん、絶対、皆で。', en: 'Yes, definitely all.', style: 'University student warm soft sincere bright-warm matching-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'hiroshi_boss', jp: 'こうやって、家族みたいに、ずっと、繋がっていけるの、本当に、ありがたい。', en: 'Connecting like family forever — truly grateful.', style: 'Boss measured warm soft sincere deep-warm philosophical-warm closing, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: '本当に。これからも、ずっと、皆で。', en: 'Truly. From now on too, all together.', style: 'Aunt warm soft sincere closing-warm extending-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: '乾杯しましょう。皆さんへの、感謝に。', en: 'Let\'s cheers. To gratitude for all.', style: 'Father warm soft sincere closing-warm rallying-tender-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-tender' }
    ]
  },
  // 583 — hiroshi_boss + sho + hina (3-speaker, short)
  {
    id: 'conv_00583',
    context: 'Retired Hiroshi-boss visits the family home; Hina and Sho gather to meet "uncle".',
    purpose: 'small intergenerational man with children',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['おじさん', '元気', '一緒', '楽しい', 'ありがとう'],
    cast: ['hiroshi_boss', 'hina_child', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: '田中おじさん！いらっしゃい！', en: 'Tanaka-ojisan! Welcome!', style: 'High child bright sincere enthusiastic-warm welcoming, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'hiroshi_boss', jp: 'ひなちゃん、しょうくん、お元気で。', en: 'Hina-chan, Sho-kun — well.', style: 'Boss measured warm gentle bright sincere-warm welcoming-warm, the soft real authority-soft audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'sho_child', jp: '…こんにちは、おじさん。', en: '…Hello, uncle.', style: 'Tiny six-year-old soft small sincere polite-warm respectful, the small real warmth audible, soft small warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: '二人で、ずっと、おじさん、覚えててくれて、嬉しい。', en: 'Both remembering uncle — happy.', style: 'Boss measured warm soft sincere touched-warm closing-tender, the soft real authority-soft audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hina_child', jp: 'おじさん、また、ありがとう！', en: 'Uncle, again, thank you!', style: 'High child bright sincere closing-warm grateful-enthusiastic, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log(`wrote ${CONVERSATIONS.length} conversation(s) to ${OUT_DIR}`);
