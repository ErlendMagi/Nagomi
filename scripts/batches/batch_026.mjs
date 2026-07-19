import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', '..', 'data', 'conversations');
const NOW = new Date().toISOString();
const META = () => ({ generated_by: 'claude-opus-4-7 (batch_026)', generated_at: NOW, source_plan_row: '' });

const CONVERSATIONS = [
  // 504 — mei + yumiko, pregnancy share (medium)
  {
    id: 'conv_00504',
    context: 'Mei tells Yumiko (now like an aunt-figure) about her pregnancy.',
    purpose: 'small intergenerational share — milestone news to elder',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['妊娠', '家族', '一緒', '幸せ', '感謝'],
    cast: ['mei_romantic', 'yumiko_mom'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'mei_romantic', jp: 'ゆみこさん、ちょっと、ご報告したいことがあって。', en: 'Yumiko-san, I want to report something.', style: 'Romantic warm soft tender brave-warm careful-opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-brave' },
      { speaker: 'yumiko_mom', jp: 'まあ、何かしら？', en: 'My, what is it?', style: 'Maternal warm gentle bright sincere-warm welcoming-receiving, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-bright' },
      { speaker: 'mei_romantic', jp: '実は、赤ちゃん、できたんです。', en: 'Actually, I have a baby coming.', style: 'Romantic warm soft tender deep-warm brave-disclosing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'yumiko_mom', jp: 'え、本当！おめでとう！本当におめでとう！', en: 'Eh, truly! Congrats! Truly congratulations!', style: 'Maternal warm bright sincere overwhelmed-warm celebrating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-overwhelmed' },
      { speaker: 'mei_romantic', jp: 'ありがとうございます。家族の中で、一番に、お話したくて。', en: 'Thank you. Wanted to tell you first in family.', style: 'Romantic warm soft tender sincere-warm grateful-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'yumiko_mom', jp: 'メイさんが、こうやって、家族でいてくれて、本当に、嬉しい。', en: 'Mei-san being family — truly happy.', style: 'Maternal warm soft sincere deep-warm tender-acknowledging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'mei_romantic', jp: 'これからも、いろいろ、教えてください。', en: 'From now on, please teach me lots.', style: 'Romantic warm soft sincere closing-warm respectful-extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: 'もちろん。安定するまで、無理しないでね。', en: 'Of course. Until stable, don\'t push yourself.', style: 'Maternal warm gentle sincere-warm caring-closing-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-caring' }
    ]
  },
  // 505 — daichi + tatsuya, baby news (medium)
  {
    id: 'conv_00505',
    context: 'Daichi visits Tatsuya in the country to share the pregnancy news.',
    purpose: 'small Kansai-rural news share — masculine warm sharing',
    ambient: 'farm_porch_afternoon',
    sound_effects: [],
    target_vocab: ['赤ちゃん', '家族', '一緒', '感謝', '将来'],
    cast: ['daichi_kansai', 'tatsuya_country'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: '達也さん、ちょっと、ええニュースがあって。', en: 'Tatsuya-san, got some good news.', style: 'Kansai warm soft bright sincere-warm brave-opening, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: 'ほう、何や？', en: 'Oh, what?', style: 'Country gruff warm soft sincere-warm curious-receiving, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gruffly-warm' },
      { speaker: 'daichi_kansai', jp: 'メイちゃん、妊娠したんです。', en: 'Mei-chan — became pregnant.', style: 'Kansai warm soft tender deep-warm sincere-disclosure, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'tatsuya_country', jp: 'おい、ほんまか！おめでとう、ほんまに！', en: 'Hey, truly! Congrats, truly!', style: 'Country gruff warm bright sincere overwhelmed-warm celebrating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-overwhelmed' },
      { speaker: 'daichi_kansai', jp: 'ありがとうございます。家族、また、増えますわ。', en: 'Thank you. Family — growing more.', style: 'Kansai warm soft sincere bright-warm reflective-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: '赤ちゃん、田舎、ようけ連れてきてな。', en: 'Bring baby to the country lots.', style: 'Country gruff warm bright sincere-warm generous-extending-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'daichi_kansai', jp: 'もちろん。達也さんに、ちゃんと、お祖父さん代わり、頼みます。', en: 'Of course. Asking you for grandpa-replacement role.', style: 'Kansai warm soft sincere bright-warm requesting-tender, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'tatsuya_country', jp: '任せろ。可愛がるで、絶対。', en: 'Leave it to me. Will love absolutely.', style: 'Country gruff warm bright sincere-warm committed-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 506 — sakura + hina (short)
  {
    id: 'conv_00506',
    context: 'Sakura reads with Hina at home. Small big-cousin-child gentle moment.',
    purpose: 'small cousin reading together',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['本', '読む', '一緒', '面白い', '優しい'],
    cast: ['sakura_teen', 'hina_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'hina_child', jp: 'お姉ちゃん、この本、読んで。', en: 'Big sister, read this book.', style: 'High child bright sincere eager-warm asking-cousin, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'eagerly-bright' },
      { speaker: 'sakura_teen', jp: 'うん、一緒に読もう。', en: 'Yes, let\'s read together.', style: 'Teen warm soft sincere bright-warm welcoming-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hina_child', jp: '主人公の女の子、優しいんだよ。', en: 'The girl protagonist is kind.', style: 'High child bright sincere proud-warm sharing-disclosure, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sakura_teen', jp: 'いいね、面白そう。', en: 'Nice, sounds interesting.', style: 'Teen warm soft sincere bright-warm engaging-curious, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hina_child', jp: 'お姉ちゃんと一緒なら、いっぱい読みたい。', en: 'With big sis, want to read lots.', style: 'High child bright sincere tender-warm closing-affectionate, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'sakura_teen', jp: 'うん、ゆっくり、読もう。', en: 'Yes, let\'s read slowly.', style: 'Teen warm soft sincere closing-warm tender-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 507 — kenji + ryosuke, after boss retirement (medium)
  {
    id: 'conv_00507',
    context: 'Kenji and Ryosuke after Hiroshi-boss\'s retirement. They process the workplace change.',
    purpose: 'two adults after mentor retirement — career reflection',
    ambient: 'office_break',
    sound_effects: [],
    target_vocab: ['退職', '寂しい', '感謝', '将来', '頑張る'],
    cast: ['kenji_office', 'ryosuke_dad'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: '部長の退職、まだ、実感ないですね。', en: 'Boss\'s retirement — still doesn\'t feel real.', style: 'Salaryman warm soft sincere reflective-warm honest-disclosure, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-reflective' },
      { speaker: 'ryosuke_dad', jp: '本当に。長年、お世話になったから、寂しい感じ。', en: 'Truly. Many years indebted — feel lonely.', style: 'Father warm soft sincere matching-warm honest-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '部長から教わったこと、これからも、生かしていきたい。', en: 'What learned from boss — want to keep using.', style: 'Salaryman warm soft sincere committed-warm philosophical-warm, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-committed' },
      { speaker: 'ryosuke_dad', jp: '部長、絶対、ずっと、見守ってくれてる。', en: 'Boss — definitely always watching over.', style: 'Father warm gentle sincere believing-warm comforting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'kenji_office', jp: '私たちも、後輩に、ちゃんと、伝えていきたい。', en: 'We too — want to pass to juniors properly.', style: 'Salaryman warm soft sincere committed-warm philosophical-warm extending, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-committed' },
      { speaker: 'ryosuke_dad', jp: '部長の遺してくれたもの、ずっと、ね。', en: 'What boss left behind — forever.', style: 'Father warm soft sincere deep-warm philosophical-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: '頑張りましょう、田中部長のために。', en: 'Let\'s work hard, for Tanaka-bucho.', style: 'Salaryman warm soft sincere closing-warm committed-tender, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 508 — riku + saito (short)
  {
    id: 'conv_00508',
    context: 'Riku, now adult, sees Saito for an annual checkup.',
    purpose: 'small medical adult-patient follow-up',
    ambient: 'clinic_quiet',
    sound_effects: [],
    target_vocab: ['元気', '健康', '仕事', '頑張る', 'ありがとう'],
    cast: ['saito_doctor', 'riku_teen'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'saito_doctor', jp: 'リクさん、健康、特に問題ないですよ。', en: 'Riku-san, health — no particular issues.', style: 'Doctor warm professional gentle bright sincere-warm reporting, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-warm' },
      { speaker: 'riku_teen', jp: 'ありがとうございます。仕事、忙しいけど、ちゃんと、生活整えてます。', en: 'Thank you. Busy with work, but arranging life properly.', style: 'Teen warm soft sincere proud-warm reporting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: 'リクさん、本当に、立派になりましたね。', en: 'Riku-san, truly — become splendid.', style: 'Doctor warm gentle bright sincere-warm appreciating-warm, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: '先生のお陰でもあります。子供の頃から、ずっと。', en: 'Also thanks to doctor — since childhood, always.', style: 'Teen warm soft sincere deep-warm grateful-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'saito_doctor', jp: 'これからも、無理しないで、頑張ってください。', en: 'From now on too, without pushing — work hard.', style: 'Doctor warm gentle sincere closing-warm encouraging-warm, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: 'はい、ありがとうございます。', en: 'Yes, thank you.', style: 'Teen warm soft sincere brief-warm closing-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 509 — aoi + sachiko (medium)
  {
    id: 'conv_00509',
    context: 'Aoi visits widowed Sachiko alone — they share understanding of grief, Aoi about her own father.',
    purpose: 'two-women shared-grief deep warmth',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['父', '思い出', '寂しい', '感謝', '一緒'],
    cast: ['sachiko_grandma', 'aoi_barista'],
    frequency_tier: 3,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: 'お祖母様、こうやって、お話できるの、本当に嬉しい。', en: 'Grandmother, talking like this — truly happy.', style: 'Soft dreamy barista warm soft sincere-warm reflective-warm gratitude, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: 'メイさんから、お話、ずっと聞いてた。', en: 'From Mei-san — always heard about you.', style: 'Soft grandmother warm soft sincere-warm bright-recognition, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'aoi_barista', jp: '私、父を、若い頃に亡くしました。お祖父様のお話、よく、わかります。', en: 'I lost my father when young. Grandpa\'s stories — I understand well.', style: 'Soft dreamy barista warm soft tender deep-warm vulnerable-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-vulnerable' },
      { speaker: 'sachiko_grandma', jp: 'そう…大変だったわね。お父さん、絶対、空から、見てくれてる。', en: 'I see… that was hard. Father — surely watching from sky.', style: 'Soft grandmother warm soft tender sincere-warm comforting-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-comforting' },
      { speaker: 'aoi_barista', jp: 'お祖母様と、お話していると、なんか、お父さんと、繋がってる気がする。', en: 'Talking with grandmother — feels connected to father somehow.', style: 'Soft dreamy barista warm soft tender deep-warm philosophical-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'sachiko_grandma', jp: '寂しさは、ずっと、なくならないけど、こうやって、繋がっていくの、大事ね。', en: 'Loneliness never disappears, but connecting like this — important.', style: 'Soft grandmother warm soft tender deep-warm wise-philosophical-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-wise' },
      { speaker: 'aoi_barista', jp: '本当に、感謝しています。', en: 'Truly, grateful.', style: 'Soft dreamy barista warm soft sincere deep-warm closing-grateful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 510 — naoko + sachiko + yumiko (3-speaker, long)
  {
    id: 'conv_00510',
    context: 'Three women in extended family hear of Mei\'s pregnancy. Quiet moment of joy.',
    purpose: 'three-female family-news-joy gathering',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['赤ちゃん', '家族', '一緒', '幸せ', '感謝', '将来'],
    cast: ['sachiko_grandma', 'yumiko_mom', 'naoko_aunt'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'naoko_aunt', jp: 'メイちゃん、妊娠したらしいよ。', en: 'Mei-chan — seems pregnant.', style: 'Aunt warm bright sincere tender-warm news-sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sachiko_grandma', jp: 'まあ、本当！おじいちゃんも、絶対喜んでる。', en: 'My, truly! Grandpa surely glad too.', style: 'Soft grandmother warm soft sincere overwhelmed-warm tender-warm celebrating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-overwhelmed' },
      { speaker: 'yumiko_mom', jp: 'メイさん、自分で、来てくれて、教えてくれた。', en: 'Mei-san came herself, told me.', style: 'Maternal warm soft sincere bright-warm touched-sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: 'あの子、家族、本当に大事にしてくれてる。', en: 'That child — truly cherishes family.', style: 'Aunt warm soft sincere deep-warm tender-appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sachiko_grandma', jp: '達也も、すごく嬉しいだろう。お祖父ちゃんになるの、二度目。', en: 'Daichi too — surely happy. Becoming grandpa, second time.', style: 'Soft grandmother warm soft tender bright-warm philosophical-warm anticipating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-bright' },
      { speaker: 'yumiko_mom', jp: '家族、本当に、広がっていきますね。', en: 'Family — truly expanding.', style: 'Maternal warm soft sincere reflective-warm appreciating-philosophical, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '皆で、ちゃんと、見守って、応援していきたいね。', en: 'All — let\'s watch over and cheer properly.', style: 'Aunt warm soft sincere committed-warm extending-collective, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-committed' },
      { speaker: 'sachiko_grandma', jp: 'お母さんも、ちゃんと、ご飯、作ってあげる。', en: 'Mom too — will make food properly.', style: 'Soft grandmother warm soft sincere bright-warm committed-warm hosting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yumiko_mom', jp: 'メイさん、安定するまで、無理しないで欲しい。', en: 'Mei-san — until stable, don\'t push.', style: 'Maternal warm gentle sincere-warm caring-protective, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'gently-caring' },
      { speaker: 'naoko_aunt', jp: '皆で、家族として、ちゃんと、見守りましょう。', en: 'All — as family, let\'s watch over properly.', style: 'Aunt warm soft sincere committed-warm closing-extending-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-committed' },
      { speaker: 'sachiko_grandma', jp: '本当に、嬉しい。お父さん、空から、見てる気がする。', en: 'Truly happy. Father — feels like watching from sky.', style: 'Soft grandmother warm soft tender deep-warm philosophical-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'yumiko_mom', jp: 'お父さん、絶対、見守ってる。曾孫、楽しみ。', en: 'Father — definitely watching. Great-grandchild — looking forward.', style: 'Maternal warm soft tender sincere-warm closing-philosophical-bright, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-bright' },
      { speaker: 'naoko_aunt', jp: 'こうやって、繋がっていく家族、ありがたい。', en: 'Family connecting like this — grateful.', style: 'Aunt warm soft sincere deep-warm closing-philosophical-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 511 — sho + asuka (short)
  {
    id: 'conv_00511',
    context: 'Sho writes a small essay; shows Asuka. Quiet teacher-student moment.',
    purpose: 'small teacher-student growing acknowledgment',
    ambient: 'classroom_after',
    sound_effects: [],
    target_vocab: ['作文', '頑張る', '上手', '見せる', 'ありがとう'],
    cast: ['asuka_teacher', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sho_child', jp: '先生、作文、書いてみました。', en: 'Sensei, I tried writing an essay.', style: 'Tiny six-year-old soft small sincere brave-warm offering, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-brave' },
      { speaker: 'asuka_teacher', jp: 'え、見せて、見せて。', en: 'Eh, show me, show me.', style: 'Teacher warm gentle bright sincere-warm eager-receiving, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sho_child', jp: 'これ…おじいちゃんのこと、書いた。', en: 'This… wrote about grandpa.', style: 'Tiny six-year-old soft small sincere tender-warm gentle-disclosure, the small real warmth audible, soft small warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'asuka_teacher', jp: '…すごく上手。心が、ちゃんと、伝わる。', en: '…Very skilled. Heart properly conveyed.', style: 'Teacher warm soft sincere deep-warm tender-praise-touched, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'sho_child', jp: '頑張って、書いた。', en: 'Worked hard, wrote.', style: 'Tiny six-year-old soft small sincere proud-warm closing-disclosure, the small real warmth audible, soft small warmth throughout delivery.', mood: 'sincerely-proud' },
      { speaker: 'asuka_teacher', jp: 'おじいちゃん、絶対、嬉しいよ。', en: 'Grandpa — surely happy.', style: 'Teacher warm soft sincere tender-warm closing-comforting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' }
    ]
  },
  // 512 — daichi + mei + sachiko (3-speaker, long)
  {
    id: 'conv_00512',
    context: 'Daichi and Mei visit Sachiko together to tell her about the baby.',
    purpose: 'major milestone — telling great-grandmother',
    ambient: 'tatami_afternoon',
    sound_effects: [],
    target_vocab: ['赤ちゃん', '家族', '一緒', '幸せ', 'お祖母様'].filter(w => w !== 'お祖母様').concat(['祖母']),
    cast: ['daichi_kansai', 'mei_romantic', 'sachiko_grandma'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'daichi_kansai', jp: 'お祖母ちゃん、今日、ちょっと、ええ報告がありまして。', en: 'Grandma, today — got some good news.', style: 'Kansai warm soft tender bright-warm careful-brave opening, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'carefully-brave' },
      { speaker: 'sachiko_grandma', jp: 'まあ、何かしら？二人とも、嬉しそう。', en: 'My, what? Both look happy.', style: 'Soft grandmother warm soft bright sincere-warm receiving-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'mei_romantic', jp: 'お祖母様、私、赤ちゃん、できたんです。', en: 'Grandmother, I have a baby coming.', style: 'Romantic warm soft tender brave-warm deep-disclosing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-brave' },
      { speaker: 'sachiko_grandma', jp: '…まあ！本当！おめでとう、二人とも！', en: '…My! Truly! Congratulations, both!', style: 'Soft grandmother warm soft tender deep-warm overwhelmed-tearful-warm celebrating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-overwhelmed' },
      { speaker: 'daichi_kansai', jp: 'お祖母ちゃん、最初に、ご報告したくて、来ました。', en: 'Wanted to tell grandma first, came.', style: 'Kansai warm soft tender sincere-warm respectful-warm sharing, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'sachiko_grandma', jp: '本当に、嬉しい。お祖父ちゃんも、絶対、見てる。', en: 'Truly happy. Grandpa — definitely watching.', style: 'Soft grandmother warm soft tender deep-warm sincere-comforting-tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'mei_romantic', jp: 'お祖父様の指輪、ずっと、つけてます。', en: 'Grandpa\'s ring — always wearing.', style: 'Romantic warm soft tender sincere-warm proud-disclosure-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'sachiko_grandma', jp: 'メイさん、本当に、ありがとう。お祖母ちゃん、本当に、嬉しい。', en: 'Mei-san, truly, thank you. Grandma truly happy.', style: 'Soft grandmother warm soft tender deep-warm grateful-tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'daichi_kansai', jp: 'お祖母ちゃん、赤ちゃんに、いろいろ、教えてあげてください。', en: 'Grandma, please teach baby lots of things.', style: 'Kansai warm soft sincere bright-warm extending-warm requesting, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sachiko_grandma', jp: 'もちろん。曾孫、ずっと、楽しみにしてる。', en: 'Of course. Great-grandchild — long looking forward.', style: 'Soft grandmother warm soft tender bright-warm committed-anticipating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-bright' },
      { speaker: 'mei_romantic', jp: 'お祖母様と、一緒に、子供を、育てていきたい。', en: 'With grandmother — want to raise child together.', style: 'Romantic warm soft tender sincere-warm extending-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'sachiko_grandma', jp: 'こうやって、家族、繋がっていくの、本当に、幸せ。', en: 'Family connecting like this — truly happy.', style: 'Soft grandmother warm soft tender deep-warm closing-philosophical-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'daichi_kansai', jp: 'お祖母ちゃんが、健康でいてくれるの、本当に、ありがたい。', en: 'Grandma staying healthy — truly grateful.', style: 'Kansai warm soft tender sincere-warm closing-grateful-warm, the regional swing audible, soft real warmth threading throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 513 — takeda + mrs_mori (short)
  {
    id: 'conv_00513',
    context: 'Officer Takeda\'s weekly check-in at Mrs. Mori\'s.',
    purpose: 'small ongoing civic familiar rhythm',
    ambient: 'genkan_afternoon',
    sound_effects: [],
    target_vocab: ['元気', '近所', '安心', 'ありがとう', '見守る'],
    cast: ['takeda_officer', 'mrs_mori_neighbor'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'takeda_officer', jp: '森さん、こんにちは。今週も、お変わりありませんか。', en: 'Mori-san, hello. This week — anything changed?', style: 'Officer warm professional gentle sincere-warm civic-routine-warm, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-warm' },
      { speaker: 'mrs_mori_neighbor', jp: 'いつもありがとう。皆さん、お元気ですよ。', en: 'Always thank you. Everyone\'s well.', style: 'Neighbor warm gentle bright sincere-warm civic-reporting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'takeda_officer', jp: '良かった。なおこさんも、お元気そうで。', en: 'Glad. Naoko-san too — looks well.', style: 'Officer warm professional gentle sincere-warm acknowledging-warm, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'gently-warm' },
      { speaker: 'mrs_mori_neighbor', jp: '皆で、こうやって、見守ってもらえて、本当に、安心です。', en: 'Everyone watching over like this — truly reassuring.', style: 'Neighbor warm gentle sincere deep-warm appreciating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'takeda_officer', jp: 'こちらこそ。皆さん、お互い、見守り合って。', en: 'Same. Everyone — watching each other.', style: 'Officer warm gentle sincere closing-warm reciprocal-civic, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 514 — aoi + ren, considering kids (long)
  {
    id: 'conv_00514',
    context: 'Aoi and Ren — newly settled — talk about children themselves.',
    purpose: 'second-generation newlywed deepening — wondering about own future child',
    ambient: 'apartment_evening',
    sound_effects: [],
    target_vocab: ['子供', '将来', '一緒', '幸せ', '考える', '感謝'],
    cast: ['aoi_barista', 'ren_uni'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'aoi_barista', jp: 'れん、メイちゃんから聞いた？赤ちゃんのこと。', en: 'Ren, did you hear from Mei-chan? About the baby.', style: 'Soft dreamy barista warm soft sincere bright-warm news-sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ren_uni', jp: 'うん、だいちさんから。本当に嬉しい。', en: 'Yes, from Daichi-san. Truly happy.', style: 'University student warm soft sincere bright-warm matching-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'aoi_barista', jp: 'ね、私たちも、いつか、子供のこと、ちゃんと、考えたいね。', en: 'Hey, we too — sometime, want to think properly about children.', style: 'Soft dreamy barista warm soft tender brave-warm vulnerable-careful, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-brave' },
      { speaker: 'ren_uni', jp: 'うん。俺も、最近、ちょっと、考えてた。', en: 'Yes. I also — lately, thinking a bit.', style: 'University student warm soft sincere honest-warm matching-warm disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-matching' },
      { speaker: 'aoi_barista', jp: '怖い気持ちと、嬉しい気持ち、両方ある。', en: 'Both — scared feeling and happy feeling.', style: 'Soft dreamy barista warm soft tender honest-warm balanced-vulnerable, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-vulnerable' },
      { speaker: 'ren_uni', jp: 'わかる、それ。俺も、両方、感じてる。', en: 'I get it. Me too — feeling both.', style: 'University student warm soft sincere matching-warm vulnerable-honest, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-matching' },
      { speaker: 'aoi_barista', jp: '一緒に、ゆっくり、考えていけたら、嬉しい。', en: 'Together, slowly — would be happy.', style: 'Soft dreamy barista warm soft tender sincere-warm extending-warm wishing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-wishing' },
      { speaker: 'ren_uni', jp: 'もちろん。あおいと、ずっと、一緒に。', en: 'Of course. With Aoi, forever, together.', style: 'University student warm soft sincere deep-warm tender-promising, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'aoi_barista', jp: '父も、絶対、いつか、見守ってくれる。', en: 'Father — surely, someday, will watch over.', style: 'Soft dreamy barista warm soft tender deep-warm comforting-philosophical-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-comforting' },
      { speaker: 'ren_uni', jp: 'うん。お父さん、絶対、応援してくれる。', en: 'Yes. Father — definitely cheering.', style: 'University student warm soft tender sincere-warm believing-tender-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'aoi_barista', jp: '一緒に、家族、ゆっくり、作っていきたい。', en: 'Together — slowly, want to build family.', style: 'Soft dreamy barista warm soft tender sincere-warm extending-deep-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'ren_uni', jp: 'うん。感謝してる。あおいといると、本当に、幸せ。', en: 'Yes. Grateful. With Aoi — truly happy.', style: 'University student warm soft tender deep-warm closing-grateful-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' },
      { speaker: 'aoi_barista', jp: '私も。永遠に、れんと、一緒に。', en: 'Me too. Forever, with Ren.', style: 'Soft dreamy barista warm soft tender deep-warm closing-eternal-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-deep' }
    ]
  },
  // 515 — yuki + asuka (medium)
  {
    id: 'conv_00515',
    context: 'Yuki visits her old high school friend Asuka. They share working-adult conversation.',
    purpose: 'old-friend ongoing friendship — adult-women catching up',
    ambient: 'cafe_afternoon',
    sound_effects: [],
    target_vocab: ['仕事', '友達', '一緒', '楽しい', '感謝'],
    cast: ['yuki_office', 'asuka_teacher'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'yuki_office', jp: 'あすか、お久しぶり。元気だった？', en: 'Asuka, long time. Been well?', style: 'Office woman warm bright sincere-warm friend-opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'asuka_teacher', jp: 'ゆき、お元気で何より。仕事、忙しい？', en: 'Yuki, glad you\'re well. Busy with work?', style: 'Teacher warm gentle bright sincere-warm reciprocal-warm asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'yuki_office', jp: 'うん、けど、充実してる。あすかは、生徒たち、可愛い？', en: 'Yes, but fulfilling. Asuka — students cute?', style: 'Office woman warm soft sincere bright-warm matching-warm reflecting, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '本当に可愛い。毎日、本当に、嬉しい仕事。', en: 'Truly cute. Daily, truly happy work.', style: 'Teacher warm gentle bright sincere-warm enthusiastic-warm sharing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'yuki_office', jp: 'こうやって、たまに、お話できるの、本当に、楽しい。', en: 'Talking like this occasionally — truly fun.', style: 'Office woman warm soft sincere bright-warm reflecting-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '本当に。ずっと、ご縁、続けていきたい。', en: 'Truly. Want to keep this connection forever.', style: 'Teacher warm gentle sincere-warm closing-warm extending, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'yuki_office', jp: '感謝してる。本当に。', en: 'Grateful. Truly.', style: 'Office woman warm soft sincere deep-warm closing-brief-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 516 — ryosuke + ren (medium)
  {
    id: 'conv_00516',
    context: 'Ryosuke and Ren talk — uncle and nephew, both married now.',
    purpose: 'small adult-male family bonding',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['結婚', '家族', '一緒', '感謝', '将来'],
    cast: ['ryosuke_dad', 'ren_uni'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'ryosuke_dad', jp: 'れん、結婚して、しっかりしてきたな。', en: 'Ren, after marriage — getting solid.', style: 'Father warm gentle sincere bright-warm uncle-acknowledging-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'あおいのお陰っす。本当に、感謝してます。', en: 'Thanks to Aoi. Truly grateful.', style: 'University student warm soft sincere bright-warm humble-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'humbly-warm' },
      { speaker: 'ryosuke_dad', jp: 'お互いを、ちゃんと、大事にできてるのが、立派。', en: 'Mutually cherishing properly — splendid.', style: 'Father warm gentle sincere deep-warm uncle-praising-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: '亮介さん、お父さんから、ずっと、教わってきたこと、生かしてます。', en: 'Ryosuke-san — what learned from father — putting to use.', style: 'University student warm soft sincere deep-warm grateful-philosophical, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: 'お互い、家族、ずっと、繋がっていけたらいいな。', en: 'Mutually, family — stay connected forever.', style: 'Father warm soft sincere deep-warm extending-philosophical-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: 'もちろん。将来、ずっと、皆と、一緒に。', en: 'Of course. Future — always with all.', style: 'University student warm soft sincere closing-warm committing-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 517 — hiroshi_boss + naoko (medium)
  {
    id: 'conv_00517',
    context: 'Hiroshi-boss, now retired, has more time for the friendship with Naoko. They enjoy a museum.',
    purpose: 'retired-life ongoing friendship — culture as anchor',
    ambient: 'gallery_afternoon',
    sound_effects: [],
    target_vocab: ['芸術', '一緒', '楽しい', '感謝', '時間'],
    cast: ['hiroshi_boss', 'naoko_aunt'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: 'ナオコさん、退職して、芸術、ゆっくり、楽しめます。', en: 'Naoko-san, after retirement — enjoying art slowly.', style: 'Boss measured warm soft sincere bright-warm reflecting-warm sharing, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'naoko_aunt', jp: '本当に良かったですね。お時間、たくさんありますね。', en: 'Truly glad. Time — lots now.', style: 'Aunt warm gentle bright sincere-warm appreciating-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'hiroshi_boss', jp: 'ナオコさんと、こうやって、ご一緒できるのが、本当に、ありがたい。', en: 'Being with Naoko-san like this — truly grateful.', style: 'Boss measured warm soft sincere deep-warm tender-grateful-warm, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: 'こちらこそ。芸術を通じて、こんな関係、ご縁、嬉しい。', en: 'Same. Through art — connection, happy.', style: 'Aunt warm soft sincere deep-warm philosophical-warm closing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hiroshi_boss', jp: '今度は、もっと、いろんな美術館、お訪ねしたいですね。', en: 'Next time — visit more museums.', style: 'Boss measured warm soft sincere closing-warm extending-warm future, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: 'ぜひ。リスト、作りましょうね。', en: 'Please. Let\'s make a list.', style: 'Aunt warm gentle bright sincere-warm closing-warm planning, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' }
    ]
  },
  // 518 — sho + ren (short)
  {
    id: 'conv_00518',
    context: 'Ren reads to Sho, who is now older. Quiet small cousin time.',
    purpose: 'small ongoing cousin-warm moment',
    ambient: 'living_room_evening',
    sound_effects: [],
    target_vocab: ['本', '一緒', '楽しい', '読む', 'ありがとう'],
    cast: ['ren_uni', 'sho_child'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: 'しょう、何の本、読む？', en: 'Sho, what book to read?', style: 'University student warm soft sincere bright-warm cousin-offering, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sho_child', jp: 'えっと…これ、お願い。', en: 'Um… this one, please.', style: 'Tiny six-year-old soft small sincere careful-warm choosing, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-careful' },
      { speaker: 'ren_uni', jp: 'おっ、面白そう。じゃあ、一緒に読もう。', en: 'Oh, sounds fun. Then, let\'s read together.', style: 'University student warm soft bright sincere-warm welcoming-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sho_child', jp: 'お兄ちゃんと一緒、楽しい。', en: 'With brother — fun.', style: 'Tiny six-year-old soft small sincere tender-warm gentle-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'ren_uni', jp: 'うん。お兄ちゃんも、楽しい。', en: 'Yes. Brother too — fun.', style: 'University student warm soft sincere matching-warm closing-tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'tenderly-warm' },
      { speaker: 'sho_child', jp: '…ありがとう、お兄ちゃん。', en: '…Thank you, big brother.', style: 'Tiny six-year-old soft small sincere tender-warm closing-grateful, the small real warmth audible, soft small warmth throughout delivery.', mood: 'tenderly-warm' }
    ]
  },
  // 519 — riku + ren (long)
  {
    id: 'conv_00519',
    context: 'Riku and Ren — both married — have a deeper guys\' night talk about adulthood.',
    purpose: 'two-young-married-men adult talk — milestone reflection',
    ambient: 'izakaya_evening',
    sound_effects: [],
    target_vocab: ['結婚', '家族', '将来', '感謝', '一緒', '幸せ'],
    cast: ['ren_uni', 'riku_teen'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'ren_uni', jp: 'リク、結婚生活、慣れた？', en: 'Riku, used to married life?', style: 'University student warm soft sincere bright-warm casual-asking, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'riku_teen', jp: 'まだ、ちょっと、戸惑うこと、多い。', en: 'Still, lots of confusing things.', style: 'Teen warm soft sincere honest-warm vulnerable-disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-honest' },
      { speaker: 'ren_uni', jp: 'わかる。俺も、最初の頃、毎日、何かに、ぶつかってた。', en: 'I get it. Me too — first months, daily hitting something.', style: 'University student warm soft sincere matching-warm honest-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-matching' },
      { speaker: 'riku_teen', jp: 'お兄ちゃんも、そうだったんだ。なんか、安心した。', en: 'Brother — same. Somehow reassured.', style: 'Teen warm soft sincere relieved-warm matching-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'お互いを、ちゃんと、思いやる、それだけで、いい。', en: 'Cherishing each other properly — that\'s enough.', style: 'University student warm soft sincere wise-warm advising-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-wise' },
      { speaker: 'riku_teen', jp: 'うん、心がけてる。けど、難しい時もある。', en: 'Yes, mindful. But, sometimes hard.', style: 'Teen warm soft sincere honest-balanced-warm disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-balanced' },
      { speaker: 'ren_uni', jp: 'うん、それも、家族、だから。', en: 'Yes, that too — because family.', style: 'University student warm soft sincere philosophical-warm comforting-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-philosophical' },
      { speaker: 'riku_teen', jp: 'メイちゃんに、赤ちゃんできたって、聞いた。', en: 'Heard Mei-chan has baby coming.', style: 'Teen warm soft sincere news-sharing-warm bright, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'ren_uni', jp: 'うん、家族、また広がるな。あおいも、ちょっと、考え始めてる。', en: 'Yes, family — expanding more. Aoi too — starting to think.', style: 'University student warm soft sincere bright-warm reflecting-warm disclosure, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: '俺も、まだ早いけど、将来、欲しい。', en: 'Me — still early, but in future, want.', style: 'Teen warm soft sincere honest-warm future-disclosure-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ren_uni', jp: 'ゆっくり、ね。お互い、ちゃんと、ペースで。', en: 'Slowly. Mutually — at own pace.', style: 'University student warm soft sincere closing-warm encouraging-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: 'お兄ちゃんがいてくれて、本当に、心強い。', en: 'Having brother — truly reassuring.', style: 'Teen warm soft sincere deep-warm closing-grateful-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ren_uni', jp: 'こちらこそ。これからも、ずっと、頼ってな。', en: 'Same. From now on too, rely on me.', style: 'University student warm soft sincere closing-warm extending-warm generous, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'riku_teen', jp: 'ありがとう、お兄ちゃん。', en: 'Thank you, brother.', style: 'Teen warm soft sincere closing-brief-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' }
    ]
  },
  // 520 — saito + sachiko (short)
  {
    id: 'conv_00520',
    context: 'Sachiko checks in with Saito. Doctor briefly tells her about Mei\'s pregnancy follow-up.',
    purpose: 'small medical-and-family overlap moment',
    ambient: 'clinic_quiet',
    sound_effects: [],
    target_vocab: ['赤ちゃん', '安心', '元気', '感謝', 'ありがとう'],
    cast: ['saito_doctor', 'sachiko_grandma'],
    frequency_tier: 1,
    length_tier: 'Short (5-6)',
    meta: META(),
    lines: [
      { speaker: 'sachiko_grandma', jp: '斎藤先生、メイさん、見ていただいて、ありがとうございます。', en: 'Dr. Saito, thank you for seeing Mei-san.', style: 'Soft grandmother warm soft sincere-warm civil-grateful-opening, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'saito_doctor', jp: 'お祖母様、お孫さん、すごくお元気ですよ。', en: 'Grandmother, your grandchild — very healthy.', style: 'Doctor warm professional gentle bright sincere-warm reassuring, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'professionally-bright' },
      { speaker: 'sachiko_grandma', jp: '本当に、安心しました。', en: 'Truly, relieved.', style: 'Soft grandmother warm soft sincere deep-warm relieved-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'saito_doctor', jp: 'ご家族で、ちゃんと、見守られて。本当に、いいご家族で。', en: 'Family watching properly. Truly good family.', style: 'Doctor warm professional gentle sincere-warm appreciating-warm, the soft real real-care audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'sachiko_grandma', jp: '皆さんに、本当に、感謝してます。', en: 'Truly grateful to everyone.', style: 'Soft grandmother warm soft sincere deep-warm closing-grateful-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 521 — kenji + naoko, museum (medium)
  {
    id: 'conv_00521',
    context: 'Kenji and Naoko at a museum. Their friendship through Hiroshi has continued.',
    purpose: 'small ongoing civil cultural friendship',
    ambient: 'gallery_afternoon',
    sound_effects: [],
    target_vocab: ['芸術', '感動', '一緒', '感謝', '楽しい'],
    cast: ['kenji_office', 'naoko_aunt'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'kenji_office', jp: 'ナオコさん、今日も、ご一緒できて、嬉しい。', en: 'Naoko-san, glad to be together today.', style: 'Salaryman warm formal sincere-warm civil-bright-opening, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-formal' },
      { speaker: 'naoko_aunt', jp: 'こちらこそ。今日の絵、特に、感動しました。', en: 'Same. Today\'s painting — especially moved.', style: 'Aunt warm gentle sincere bright-warm reflecting-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'kenji_office', jp: '私もです。色が、ずっと、心に残ります。', en: 'Me too. Colors — stay in heart forever.', style: 'Salaryman warm gentle sincere-warm philosophical-warm sharing, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'naoko_aunt', jp: '芸術を通して、人生が、豊かになりますね。', en: 'Through art — life enriches.', style: 'Aunt warm gentle sincere deep-warm philosophical-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'kenji_office', jp: 'ナオコさんと、こうやって、ご縁、続けていけて、本当に、感謝です。', en: 'Continuing connection with Naoko-san — truly grateful.', style: 'Salaryman warm soft sincere deep-warm closing-grateful-warm, the soft real real-warmth audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'naoko_aunt', jp: '私も、本当に、感謝してます。', en: 'I too — truly grateful.', style: 'Aunt warm soft sincere closing-warm matching-deep, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 522 — hiroshi_boss + tatsuya + ryosuke (3-speaker, long)
  {
    id: 'conv_00522',
    context: 'Three men, retired Hiroshi-boss with Tatsuya and Ryosuke. Hot spring trip planning.',
    purpose: 'three-male friendship continuing post-retirement',
    ambient: 'restaurant_evening',
    sound_effects: [],
    target_vocab: ['温泉', '一緒', '楽しい', '友達', '感謝', '将来'],
    cast: ['hiroshi_boss', 'tatsuya_country', 'ryosuke_dad'],
    frequency_tier: 3,
    length_tier: 'Long (13-20)',
    meta: META(),
    lines: [
      { speaker: 'hiroshi_boss', jp: '皆さん、今日も、お時間、ありがとうございます。', en: 'Everyone, thank you for time today.', style: 'Boss measured warm soft sincere-warm gathering-opening, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'tatsuya_country', jp: 'こちらこそ。退職後も、変わらず、お時間いただいて、嬉しい。', en: 'Same. Even after retirement — glad time unchanged.', style: 'Country gruff warm soft sincere-warm appreciating-warm acknowledging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'お三人で、また、温泉、計画したいですね。', en: 'Three of us — want to plan hot springs again.', style: 'Father warm gentle sincere bright-warm extending-warm proposing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'hiroshi_boss', jp: 'ぜひ。家族も、皆で、行きましょうよ。', en: 'Please. With all family — let\'s go.', style: 'Boss measured warm soft bright sincere-warm extending-family-warm, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'tatsuya_country', jp: 'ええなあ。皆で、ええ思い出、作りたい。', en: 'Nice. With all — want to make good memories.', style: 'Country gruff warm soft sincere bright-warm matching-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: 'ゆみこも、皆と行けたら、絶対喜ぶ。', en: 'Yumiko too — if she can go with all, surely happy.', style: 'Father warm gentle sincere bright-warm including-warm wishing, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'hiroshi_boss', jp: 'ゆみこも、メイさんも、皆で、行きましょう。家族みたいで、嬉しい。', en: 'Yumiko, Mei-san — all together. Like family — happy.', style: 'Boss measured warm soft sincere deep-warm philosophical-warm reflecting, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'tatsuya_country', jp: 'こうやって、田舎と都会の人、繋がっていけるの、本当にええなあ。', en: 'Country and city people connecting like this — truly good.', style: 'Country gruff warm soft sincere deep-warm philosophical-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'ryosuke_dad', jp: 'ご縁って、不思議。仕事から、こんなに、家族みたいになる。', en: 'Connection — strange. From work — becoming like family.', style: 'Father warm gentle sincere philosophical-warm reflective-warm wondering, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-philosophical' },
      { speaker: 'hiroshi_boss', jp: '人生の宝物、ですね。', en: 'Treasure of life.', style: 'Boss measured warm soft sincere deep-warm philosophical-warm closing, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'tatsuya_country', jp: 'これからも、ずっと、続けていきたい。', en: 'From now on, want to continue forever.', style: 'Country gruff warm soft sincere closing-warm extending-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'ryosuke_dad', jp: '乾杯しましょう。皆さんへの感謝に。', en: 'Let\'s cheers. To gratitude for all.', style: 'Father warm soft sincere closing-warm rallying-warm tender, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-tender' },
      { speaker: 'hiroshi_boss', jp: '本当に、ありがとう。家族みたいで、感謝してる。', en: 'Truly thanks. Like family — grateful.', style: 'Boss measured warm soft sincere deep-warm closing-tender-warm, the soft real authority-soft audible, gentle real composure throughout delivery.', mood: 'sincerely-deep' }
    ]
  },
  // 523 — hina + sho + sakura + asuka (4-speaker, medium)
  {
    id: 'conv_00523',
    context: 'Asuka comes over to see the kids — old teacher coming as friend. Sakura is also there. Four-female gathering.',
    purpose: 'four-female gathering across ages',
    ambient: 'living_room_afternoon',
    sound_effects: [],
    target_vocab: ['先生', '一緒', '楽しい', '頑張る', '感謝'],
    cast: ['asuka_teacher', 'sakura_teen', 'hina_child', 'sho_child'],
    frequency_tier: 2,
    length_tier: 'Medium (7-12)',
    meta: META(),
    lines: [
      { speaker: 'asuka_teacher', jp: '皆さん、こんにちは。お邪魔します。', en: 'Everyone, hello. Excuse me.', style: 'Teacher warm gentle bright sincere-warm civil-warm welcoming, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sakura_teen', jp: 'あすか先生、来てくれてありがとう。', en: 'Asuka-sensei, thank you for coming.', style: 'Teen warm gentle sincere bright-warm welcoming-warm, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'hina_child', jp: '先生、お久しぶり！ひな、四年生になりました！', en: 'Sensei, long time! Hina is fourth grade now!', style: 'High child bright sincere enthusiastic-warm reporting-proud, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'asuka_teacher', jp: 'まあ、四年生！立派になったね。', en: 'Oh, fourth grade! Becoming splendid.', style: 'Teacher warm bright sincere-warm celebrating-warm acknowledging, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-bright' },
      { speaker: 'sho_child', jp: '先生、作文、また、書きました。', en: 'Sensei, wrote another essay.', style: 'Tiny six-year-old soft small sincere proud-warm sharing-warm, the small real warmth audible, soft small warmth throughout delivery.', mood: 'softly-proud' },
      { speaker: 'sakura_teen', jp: 'しょう、本当に、上手になったの。先生も、見てください。', en: 'Sho — truly grown skilled. Sensei, please see.', style: 'Teen warm soft sincere proud-warm bright-warm advocating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-warm' },
      { speaker: 'asuka_teacher', jp: '皆、本当に、大きく、成長しましたね。', en: 'All — truly grown big.', style: 'Teacher warm soft sincere deep-warm philosophical-warm appreciating, the soft real real-warmth audible, gentle real warmth throughout delivery.', mood: 'sincerely-deep' },
      { speaker: 'hina_child', jp: 'これからも、先生と、一緒に、頑張る！', en: 'From now on too — with sensei, will work hard!', style: 'High child bright sincere enthusiastic-warm closing-committing, the soft real real-childish audible, gentle real warmth throughout delivery.', mood: 'enthusiastically-bright' },
      { speaker: 'sho_child', jp: 'ぼくも、ありがとう、先生。', en: 'Me too — thank you, sensei.', style: 'Tiny six-year-old soft small sincere tender-warm closing-grateful, the small real warmth audible, soft small warmth throughout delivery.', mood: 'tenderly-warm' }
    ]
  }
];

for (const conv of CONVERSATIONS) {
  const out = path.join(OUT_DIR, `${conv.id}.json`);
  fs.writeFileSync(out, JSON.stringify(conv, null, 2), 'utf-8');
}
console.log(`wrote ${CONVERSATIONS.length} conversation(s) to ${OUT_DIR}`);
