export const dynamic = "force-dynamic";
export const fetchCache = 'force-no-store'



import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import { getServerSession } from "next-auth";
import SessionProvider from "@/utils/SessionProvider";
import { Footer } from "./Components/Footer";
import { getNewsTopHeadlines } from "./api";
import { Add_Data_To_Global_Context } from "./Components/Add_Data_To_Global_Context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ada News",
  description: "ADA news for everyone's in the world",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();


  const fetchingData = async () => {
    const newsTop = await getNewsTopHeadlines();
    // const filterData = removeDuplicate(newsTop);
    // console.log(newsTop);
//     console.log(filterData);

    return newsTop.data;
  };

  let data = await fetchingData();
  
  
  //   {
  
  //     _id: '65df5a6fe4adbf5d7040b734',
  
  //     author: 'Ada News',
  
  //     title: 
  
  //       'The pressure on women to have the \'perfect\' birth',
  
  //     description: 
  
  //       'Many women strive for a "beautiful" birth experience without medical intervention. It works for some women, yet this ideal can be damaging if plans don\'t materialise.',
  
  //     url: '',
  
  //     urlToImage: 
  
  //       'https://i.ibb.co/VgwdfHq/p0dy2xdc.webp',
  
  //     publishedAt: '2024-02-28T21:41:42',
  
  //     content: 
  
  //       'Warning: This story includes details of traumatic birth that some readers may find distressing\n' +
  
  //       '\n' +
  
  //       'When Emma Carr fell pregnant in 2021, she had a vision for her ideal birth. At the most basic level, she wanted to feel empowered, listened to and in control. But, like many women, Carr’s vision went further than that. In particular, she hoped for a \'natural birth\' – generally described as a vaginal delivery with as little medical intervention and pharmacological pain relief as possible.\n' +
  
  //       '\n' +
  
  //       'She followed two courses, including one popular approach known as \'hypnobirthing\', which taught relaxation and breathing to help ease pain and help stay present during delivery. And, as her instructors recommended, she watched videos of healthy, happy, non-traumatic births to get her into the right mindset.\n' +
  
  //       '\n' +
  
  //       '"You watch all these videos of these babies being born, and it\'s so beautiful," says Carr, 36, who lives in London. “They come out really easily, and the woman grabs them, and you\'re just like, \'That\'s what\'ll happen to me\'."\n' +
  
  //       '\n' +
  
  //       'But when Carr\'s water broke, the fluid contained meconium – the foetus\' stool, which can be dangerous for mother and child. After she rushed to hospital, doctors told her they had to get the baby out immediately. Two hours later, she lay on the operating table under bright lights. Far from her ideal, intervention-free vaginal birth, her baby was born by caesarean section. Worst of all, she says, was how unprepared she felt for this kind of outcome, given how focused she had been – and had been encouraged to be in the courses she followed – on creating a positive mindset.\n' +
  
  //       '\n' +
  
  //       '"If I hadn\'t had in my head how it \'should\' have gone, then I wouldn\'t feel like it was a failure," she says. "I just wish [my instructors] were a bit more open about how these births happen. That it doesn\'t always go right, just because you did hypnobirthing." \n' +
  
  //       '\n' +
  
  //       'While she was pregnant, Carr says friends tried to warn her she might not have the labour she was hoping for. But she dismissed them, thinking they probably hadn\'t gone in with the mindset or techniques she would.\n' +
  
  //       '\n' +
  
  //       '"People that you would normally listen to, you stop listening to, because you\'ve got these other people in your head telling you birth should be natural and magical, and that your body is just perfectly designed to do it," she says. "But I don\'t think mine was."\n' +
  
  //       '\n' +
  
  //       'Many women do benefit from this approach to birth. Some even experience the ideal scenario that they hoped for. With the right techniques – like breathing, listening to affirmations or massage – some advocates say birth can be enjoyable, even orgasmic. But others, like Carr, are left reeling, and not only from a traumatic birth – they feel as if having been fixated on that vision, and not preparing for the many ways in which it might not happen, made their experience even worse.',
  
  //     category: 'lifestyle'
  
  //   },
  
  //   {
  
  //     _id: '65df59d6e4adbf5d7040b733',
  
  //     author: 'Ada News',
  
  //     title: 
  
  //       'In History: Martin Luther King Jr, a misunderstood icon of US history',
  
  //     description: 
  
  //       '"My work is simply an attempt to say to America that you have a marvellous ideal, and that you should live up to it," said Martin Luther King Jr in an exclusive 1961 BBC interview. What is the truth behind the mythology that surrounds the civil rights leader?',
  
  //     url: '',
  
  //     urlToImage: 
  
  //       'https://i.ibb.co/8j8MtMq/p0hfcl61.webp',
  
  //     publishedAt: '2024-02-28T21:41:42',
  
  //     content: 
  
  //       '"It is never easy for one to accept the role of symbolism without going through constant moments of self-examination," the Reverend Dr Martin Luther King Jr told the BBC\'s Face to Face programme in 1961.\n' +
  
  //       '\n' +
  
  //       'The BBC\'s interview took place between two milestones in the civil rights movement. It was recorded six years after King led the 381-day boycott of Montgomery\'s buses following Rosa Parks\' refusal to give up her bus seat to a white man, and two years before he made his I Have a Dream speech at the 1963 March on Washington. John Freeman\'s interview explores the early experiences that helped to form King\'s political and ethical outlook.\n' +
  
  //       '\n' +
  
  //       'Martin Luther King Jr is known as the face of the mid-20th Century fight for civil rights, a Nobel Peace Prize laureate and the only non-president whose birthday is a US holiday.\n' +
  
  //       '\n' +
  
  //       'More like this:\n' +
  
  //       '- Nina Simone on how fury fuelled her songs\n' +
  
  //       '- Toni Morrison on why \'writing for black people is tough\'\n' +
  
  //       '- The day Nelson Mandela walked out of prison a free man\n' +
  
  //       '\n' +
  
  //       'Born in a deeply segregated Atlanta, Georgia, on 15 January 1929, he was initially named Michael after his father Rev Michael King, who was senior pastor at Ebenezer Baptist Church in Atlanta. However, on a trip to Germany, King Sr was inspired to change his name and his son\'s name to Martin, after the leader of the Protestant Reformation.\n' +
  
  //       '\n' +
  
  //       'Growing up in the church and experiencing a "relatively strict" upbringing, King Jr enrolled in Morehouse College at the age of 15 and joined his family\'s long line of pastors, earning a degree in divinity from Crozer Theological Seminary. Later, at Boston University, King earned a doctorate in systematic theology.\n' +
  
  //       '\n' +
  
  //       '"I had no idea that I would be catapulted into a position of leadership and the civil rights struggle," says King.\n' +
  
  //       '\n' +
  
  //       'MLK\'s legacy plays a principal role in the messy project of the United States. Even his most famous speech, I Have a Dream, is quintessentially American: inspired by the Bible, the Declaration of Independence, the US Constitution, and Abraham Lincoln\'s Emancipation Proclamation and the Gettysburg Address.\n' +
  
  //       '\n' +
  
  //       '"My work is simply an attempt to say to America that you have a marvellous ideal, and that you should live up to it," says Martin Luther King in the BBC interview.\n' +
  
  //       '\n' +
  
  //       '"This problem can be solved in the United States if enough people give themselves to it; if they devote their lives to breaking down all of the barriers that separate men from men on the basis of race or colour," he says.\n' +
  
  //       '\n' +
  
  //       'Yet that was still a long way off. "The vast majority [of Black Americans] still confront problems of economic insecurity and social isolation," King told the BBC in 1961.',
  
  //     category: 'lifestyle'
  
  //   },
  
  //   {
  
  //     _id: '65df55efe4adbf5d7040b732',
  
  //     author: 'Ada News',
  
  //     title: 
  
  //       'Four-day workweek trial: The firms where it didn’t work',
  
  //     description: 
  
  //       'Nearly all firms that took part in the UK pilot are keeping reduced hours – but not all are fully embracing the new set-up.',
  
  //     url: '',
  
  //     urlToImage: 
  
  //       'https://i.ibb.co/DzKjRBZ/p0f9q4w7.webp',
  
  //     publishedAt: '2024-02-28T21:41:42',
  
  //     content: 
  
  //       'Long-awaited data from the large-scale UK four-day workweek pilot arrived in February – and results were overwhelmingly positive.\n' +
  
  //       '\n' +
  
  //       'Among the 60-plus companies that participated in the trial, from marketing agencies to financial firms, education services to fish and chip shops, 92% of employers said they would continue with a shorter workweek following the programme – with 30% making the change permanent. Among nearly 3,000 employees, 71% reported feeling reduced levels of burnout; there were also improvements in physical health and wellbeing.\n' +
  
  //       '\n' +
  
  //       'In many cases, firms that participated in the pilot, organised by non-profit 4 Day Week Global, reported their workers have been able to spend more time with their families, pursue hobbies and take greater personal care. \n' +
  
  //       '\n' +
  
  //       '“Our staff have had the intensity of their work ramp up following the pandemic and cost of living crisis,” explains Alison Dunn, chief executive of consumer-advice helpline Citizens Advice in Gateshead. “Burnout has been an issue, so the four-day week has given them space to decompress: we’ve had people spend their extra day off with their children, take forest walks and monetise their hobbies.” \n' +
  
  //       '\n' +
  
  //       'Employers on the trial also say a truncated workweek has boosted productivity and output. “When people enjoy having an extra day off, that creates better work-life balance which, in turn, makes people happier and less stressed,” says Claire Daniels, CEO of Leeds-based digital marketing agency Trio Media. “And happier people perform better at work.”\n' +
  
  //       '\n' +
  
  //       'Yet, despite these headline-grabbing results, the trial didn’t work for every business. Some firms abandoned the experiment; others haven’t yet made the move to adopt the format full-time. Even those firms continuing with reduced hours are navigating new challenges arising from shortened workweeks. Though this reflects a small portion of the trial’s participants, it means the four-day workweek isn’t an automatic solution for all.\n' +
  
  //       '\n' +
  
  //       '‘We couldn’t afford to give staff one day off every week’\n' +
  
  //       '\n' +
  
  //       'In June 2022, Mark Roderick’s engineering and industrial supplies company Allcap joined the UK four-day workweek trial. After operating at full tilt through the pandemic, the managing director of the Gloucester-based firm hoped that the six-month pilot programme would mean being able to offer his 40-strong team extra rest days.\n' +
  
  //       '\n' +
  
  //       '“We rushed it through the business,” says Roderick. “We joined the programme late, and knew it would be a challenge implementing it across five sites. But we wanted to be able to give our staff time off during the summer.”\n' +
  
  //       '\n' +
  
  //       'Rather than offer workers a three-day weekend like most of the 61 companies on the scheme, Allcap employees would have one workday off every fortnight. “We’re a trading business – customers call up all the time for manufacturing and construction components,” says Roderick. “We were already on a slightly reduced headcount, so we couldn’t afford to give staff one day off every week.”\n' +
  
  //       '\n' +
  
  //       'But even with this bespoke four-day week model, Roderick says his firm quickly ran into problems. “As opposed to 10 normal workdays, we found that employees would have nine extreme ones – once they got to their scheduled day off they were exhausted. Once we factored in holidays, sickness and caring responsibilities, we also struggled to find cover for an employee on their rest day.”\n' +
  
  //       '\n' +
  
  //       'As a result, Allcap abandoned its trial two months early at its three main trade sites (its warehouse and manufacturing centres have the resources to cope with a four-day week).  \n' +
  
  //       '\n' +
  
  //       'Alongside staffing issues, Roderick says the nature of his industry has made the four-day week harder to implement. “If you’re in professional services, you often have project-based work that affords greater flexibility in meeting deadlines. Here, we have milling machines, a trade counter and around-the-clock deliveries – working from home is impossible, so you need a minimum number of staff on site, or you don’t have a business.”',
  
  //     category: 'lifestyle'
  
  //   },
  
  //   {
  
  //     _id: '65df5524e4adbf5d7040b731',
  
  //     author: 'Ada News',
  
  //     title: 
  
  //       '\'Shrinkflation\' isn\'t a trend – it\'s a permanent hit to your wallet',
  
  //     description: 
  
  //       'Products are getting smaller, and you\'re paying the same. The problem won\'t go away, even if the economy rebounds and inflation abates.',
  
  //     url: '',
  
  //     urlToImage: 
  
  //       'https://i.ibb.co/zhb3M5t/p0gg6r9j.webp',
  
  //     publishedAt: '2024-02-28T21:41:42',
  
  //     content: 
  
  //       'If you\'ve noticed you\'re getting less while your bill at the till stays the same, it\'s not just you.\n' +
  
  //       '\n' +
  
  //       '\'Shrinkflation\' – reducing a product\'s size or quantity while keeping its price stable – is rampant. As the global economy grapples with issues including rising raw material costs, supply chain backlogs and higher post-pandemic labourer wages, consumers are bearing the brunt of spiking production expenses.\n' +
  
  //       '\n' +
  
  //       'Whether it\'s toilet roll or a bag of crisps, the practice, which mostly happens during times of inflation, is showing up in shops around the world. Last week, French supermarket Carrefour put stickers on products to warn consumers when a packet\'s contents have gotten smaller without a corresponding price decrease.\n' +
  
  //       '\n' +
  
  //       'Consumers are taking note of the shift to smaller packaging and – and, naturally, they aren\'t happy, especially as their purchasing power is already falling amid inflation. Yet as uncomfortable as the sticker shock is now, a longer-term problem looms large: past manifestations of the phenomenon show the story of shrinkflation doesn\'t end when inflation does. \n' +
  
  //       '\n' +
  
  //       'In terms of consumer frustrations, "they notice price increases more than they notice size decreases", says US-based Mark Stiving, the chief pricing educator at Impact Pricing, an organisation that educates companies on pricing. As a result, he says, companies use shrinkflation to raise prices "less painfully".',
  
  //     category: ''
  
  //   },
  
  //   {
  
  //     _id: '65df5389e4adbf5d7040b730',
  
  //     author: 'Ada News',
  
  //     title: 
  
  //       'I made my own plant-based milk to see if it was cheaper',
  
  //     description: 
  
  //       'Plant-based milks have skyrocketed in popularity. But they\'re still more expensive to buy than cow\'s milk. Lucy Sherriff explores if it\'s cheaper just to make her own.',
  
  //     url: '',
  
  //     urlToImage: 
  
  //       'https://i.ibb.co/CJR9mfK/p0hfhfx2.webp',
  
  //     publishedAt: '2024-02-28T19:39:35',
  
  //     content: 'I\n' +
  
  //       'I often like to say that I was drinking plant-based milks before it was cool. I\'ve had a dairy allergy my entire life, but it used to be pretty hard to find dairy-free alternatives – the only option I had for my morning cereal was a particular brand of soya milk – a thick and slightly sweet grey liquid. It didn\'t bother me because I never knew any different.\n' +
  
  //       '\n' +
  
  //       'But how times have changed! The choice of plant milks is now intimidatingly large. Along with their popularity has come controversy too, including an EU-wide ban on giving products dairy-like names. \n' +
  
  //       '\n' +
  
  //       'This popularity is partly driven by consumers\' growing preference for more sustainable food and drink choices. "They\'re attractive to people who are concerned about climate change and want to lower the carbon footprint of their diets," says Aviva Musicus, adjunct assistant professor of nutrition at Harvard\'s T H Chan School of Public Health.\n' +
  
  //       '\n' +
  
  //       'Producing a glass of dairy milk results in almost three times more greenhouse gas emissions than any plant-based milk and it uses nine times more land, a 2018 study found. \n' +
  
  //       '\n' +
  
  //       'Despite their explosion in popularity, they remain substantially more costly compared to dairy milk. Coffee shops often still charge extra money for dairy-free cappuccinos, and in US supermarkets plant-based milk costs an average of $7.27 (£5.73) a gallon compared to $4.21 (£3.32) a gallon for cow\'s milk. (This is in part due to dairy farms having an exceptionally efficient supply chain simply because they\'ve been around for so long).\n' +
  
  //       '\n' +
  
  //       'And just because they don\'t come from a cow doesn\'t mean plant-based milks have a low impact on the environment. "Not all plant-based diets conferred the same health and environmental benefits," says Musicus, who conducted research on the impacts of plant-based diets.\n' +
  
  //       '\n' +
  
  //       'Almond milk, which is the favourite dairy-free option in the US, has a particularly bad rep. California produces 80% of the world\'s almonds and one single almond grown in the state uses 4.6 litres (one gallon) of water. The way almonds are conventionally farmed is also bad for bees. There are also problems when it comes to rice and coconut milk. Rice is a water-guzzling crop, and there can be ethical problems in the coconut supply chain.\n' +
  
  //       '\n' +
  
  //       'So it\'s over to oat, hemp and soy, which are all more environmentally friendly options.\n' +
  
  //       '\n' +
  
  //       'But our dietary choices are partly influenced by cost, and if plant-based milks cost more because of the process and packaging involved, then could the problem be solved by just making it ourselves? I set myself this sustainability challenge and was surprised to find that evenwhen making milk at home worked out to be more expensive than buying milk in store, I actually really enjoyed doing it – and it was incredibly easy. I enjoy being in control of where my food comes from and what goes into it – and this felt like one step closer to that.',
  
  //     category: 'lifestyle'
  
  //   },
  
  //   {
  
  //     _id: '65df524ee4adbf5d7040b72f',
  
  //     author: 'Ada News',
  
  //     title: 
  
  //       'Did Me Too change the workplace for Gen Z?',
  
  //     description: 
  
  //       'Gen Z are the first generation to start their careers in a post-Me Too era. But how much the anti-harassment movement really shifted workplace culture is still up for debate.',
  
  //     url: '',
  
  //     urlToImage: 
  
  //       'https://i.ibb.co/LSGL5jm/p0f797hk.webp',
  
  //     publishedAt: '2024-02-28T19:39:35',
  
  //     content: 'L\n' +
  
  //       'Like many women, I remember watching the Me Too movement mushroom as I scrolled through Facebook and Twitter in October 2017. While the hashtag #MeToo was first used in 2006 by black feminist activist Tarana Burke, who wanted to tackle sexual violence within her own community, it gained momentum following a viral tweet by actress Alyssa Milano after Harvey Weinstein’s crimes were exposed. Women around the world also began posting about how the misuse of power and privilege enabled sexual misconduct in the workplace.\n' +
  
  //       '\n' +
  
  //       'For many women in the workforce, the Me Too movement triggered conversations about the inappropriate (and often illegal) behaviours we’d encountered in our own careers, prompting a mix of anger, catharsis and, for some, painful re-lived trauma. But that wasn’t the case for Gen Z who were still children or teenagers. Born between 1996 and 2012, only the oldest, now workforce-aged, were in university, or applying for their first jobs, when #MeToo trended across social media and grabbed headlines.\n' +
  
  //       '\n' +
  
  //       '“I think that for myself and the majority of my peers, we didn\'t quite link the movement to the workforce,” says Scott Millar, 22, who runs an ed-tech start-up in Brisbane, Australia, and is a public speaker on Gen Z’s role in the workplace. “At the time, I remember us thinking it was more about sexual harassment in Hollywood, and it was more of an issue confined to the rich and famous.” Miller only became aware of the broader impact via his teachers, and through the business conferences he began to attend as he started his company while he was still in high school. \n' +
  
  //       '\n' +
  
  //       'Danielle Farage, a speaker and influencer on Gen Z and work, was still an undergraduate at the University of Southern California when the movement took off. She says her peer group was aware of Me Too’s significance from the start though, especially due to her school’s proximity to Hollywood, and subsequent allegations on her own campus. “That did raise a lot of concerns, but there was also a sense of optimism that things were going to get better for our generation as we started work,” says the now-24-year-old.\n' +
  
  //       '\n' +
  
  //       'But other Zoomers failed to connect with the Me Too movement at all, says Anne Boysen, a futurist and Gen Z expert based in Austin, Texas. Some were simply “too young to have understood” the sexual crimes that Me Too campaigners were focussed on, she says. The fact that the movement grew exponentially after “a lot of privileged, mostly white, women” who were “already in high places” started voicing their concerns, also made it harder for some young people to see how it could possibly shape their own future life experiences, says Boysen. \n' +
  
  //       '\n' +
  
  //       'Gen Z are now in a unique position, as the first generation to have their entire adult careers develop in a post-Me Too era. The oldest members, like Farage and Millar, are a few years into their first full-time jobs, while others are still years on from entering the workforce. But it’s tricky to measure how much companies have shifted their cultures in the wake of Me Too, and what impact this is having on Gen Z’s early career experiences.\n' +
  
  //       '\n' +
  
  //       'Policies and paperwork\n' +
  
  //       '\n' +
  
  //       'On paper, at least, young people are largely entering organisations that have become “much more conscious about the repercussions of bad behaviour at work”, says New York-based organisational psychologist and author Tomas Chamorro-Premuzic. Most large businesses now provide mandatory training designed to prevent workplace harassment, he says, and encourage employees to speak out if they experience or witness unacceptable behaviours. “I think most employees today feel more empowered that they\'re able to [speak out] than they were before the Me Too era,” he says.\n' +
  
  //       '\n' +
  
  //       'Research suggests that Me Too has driven an increase in CEO firings for sexual misconduct, and that, compared with five years ago, workers are more confident that speaking out about sexual harassment or assault will have an impact. A 2022 study for the Pew Research Centre in the US showed that roughly seven out of 10 people polled believe bad actors are more likely to be held responsible for these types of behaviours in the workplace, and at least six out of 10 think accusers are more likely to be believed than they would have been in 2017. In a similar poll for a major union federation in England and Wales, seven out of 10 people who participated agreed that Me Too had allowed employees to be more open about sexual harassment.\n' +
  
  //       '\n' +
  
  //       'There have been significant legal developments as well. In the US, a new law means that employees alleging harassment can’t be forced into confidential – rather than open – arbitration proceedings. Employers in South Korea are now legally bound to investigate any harassment claims involving their staff (including at off-site locations such as karaoke bars), while Spain has toughened its definition of consent.\n' +
  
  //       '\n' +
  
  //       'Many employees themselves have also initiated changes to company culture in the wake of Me Too. This includes setting up women’s support groups and organising women-focused events, focused on tackling workplace harassment, and empowering more women to take on management positions, which research suggests can help limit workplace harassment.\n' +
  
  //       '\n' +
  
  //       'I think most employees today feel more empowered that they\'re able to [speak out] than they were before the Me Too era – Tomas Chamorro-Premuzic\n' +
  
  //       '“It started a lot of creativity and a sense of ‘no taboo, no limit, everything\'s possible now’’,” says Imène Maharzi, a 45-year-old Paris-based start-up advisor and mentor, who founded a platform to help promote financial independence for women in 2018. She says that she felt a renewed sense of empowerment as female colleagues of all ages began pushing for change. When she started out in her career, “nobody would have ever listened if [an intern] pushed a topic on the agenda” during a team meeting. But post-Me Too, younger colleagues no longer “wait to be allowed to initiate actions and open conversations”, about topics like harassment, and work to help create better workplace experiences for future generations.\n' +
  
  //       '\n' +
  
  //       'Polls also indicate that current support for the Me Too movement is even stronger among Gen Z than millennials and older generations – a sign that young people entering the workforce remain committed to its goals. The Pew Research Center study showed 64% of 18-to-29 year olds who’d heard of the movement said they supported it, with women younger than 30 showing more support for the movement than any other group.\n' +
  
  //       '',
  
  //     category: ''
  
  //   },
  
  //   {
  
  //     _id: '65df520ce4adbf5d7040b72e',
  
  //     author: 'Ada News',
  
  //     title: 
  
  //       'AI anxiety: The workers who fear losing their jobs to artificial intelligence',
  
  //     description: 
  
  //       'Many workers worry AI is coming for their jobs. Can we get past the fear and find a silver lining?',
  
  //     url: '',
  
  //     urlToImage: 
  
  //       'https://i.ibb.co/6gzPJz4/p0fh6sjs.webp',
  
  //     publishedAt: '2024-02-28T19:39:35',
  
  //     content: 
  
  //       'Claire has worked as a PR at a major consulting firm, based in London, for six years. The 34-year-old enjoys her job and earns a comfortable salary, but in the past six months, she’s started to feel apprehensive about the future of her career. The reason: artificial intelligence.\n' +
  
  //       '\n' +
  
  //       '“I don’t think the quality of the work that I’m producing could be matched by a machine just yet,” says Claire, whose last name is being withheld to protect her job security. “But at the same time, I’m amazed at how quickly ChatGPT has become so sophisticated. Give it a few more years, and I can absolutely imagine a world in which a bot does my job just as well as I can. I hate to think what that might mean for my employability.”\n' +
  
  //       '\n' +
  
  //       'In recent years, as headlines about robots stealing human jobs have proliferated – and as generative AI tools like ChatGPT have quickly become more accessible – some workers report starting to feel anxious about their futures and whether the skills they have will be relevant to the labour market in years to come. \n' +
  
  //       '\n' +
  
  //       'In March, Goldman Sachs published a report showing that AI could replace the equivalent of 300 million full-time jobs. Last year, PwC’s annual global workforce survey showed that almost a third of respondents said they were worried about the prospect of their role being replaced by technology in three years.\n' +
  
  //       '\n' +
  
  //       '“I think a lot of creatives are concerned,” says Alys Marshall, a 29-year-old copywriter based in Bristol, UK. “We’re all just hoping that our clients will recognise [our] value, and choose the authenticity of [a human] over the price and convenience of AI tools.”\n' +
  
  //       '\n' +
  
  //       'Now, career coaches and HR experts are saying that although some anxiety might be justified, employees need to focus on what they can control. Instead of panicking about possibly losing their jobs to machines, they should invest in learning how to work alongside technology. If they treat it as a resource and not a threat, add the experts, they’ll make themselves more valuable to potential employers – and feel less anxious. \n' +
  
  //       '\n' +
  
  //       'Fear of the unknown \n' +
  
  //       '\n' +
  
  //       'For some people, generative AI tools feel as if they’ve come on fast and furious. OpenAI’s ChatGPT broke out seemingly overnight, and the “AI arms race” is ramping up more every day, creating continuing uncertainty for workers.\n' +
  
  //       '\n' +
  
  //       'Carolyn Montrose, a career coach and lecturer at Columbia University in New York, acknowledges the pace of technological innovation and change can be scary. “It is normal to feel anxiety about the impact of AI because its evolution is fluid, and there are many unknown application factors,” she says.\n' +
  
  //       '\n' +
  
  //       'But as unnerving as the new technology is, she also says workers don’t necessarily have to feel existential dread. People have the power to make their own decisions about how much they worry: they can either “choose to feel anxious about AI, or empowered to learn about it and use it to their advantage”.\n' +
  
  //       '\n' +
  
  //       'PwC’s Scott Likens, who specialises in understanding issues around trust and technology, echoes this. “Technology advancements have shown us that, yes, technology has the potential to automate or streamline work processes. However, with the right set of skills, individuals are often able to progress alongside these advancements,” he says. “In order to feel less anxious about the rapid adoption of AI, employees must lean into the technology. Education and training [are] key for employees to learn about AI and what it can do for their particular role as well as help them develop new skills. Instead of shying away from AI, employees should plan to embrace and educate.”',
  
  //     category: 'lifestyle'
  
  //   },
  
  //   {
  
  //     _id: '65df51b7e4adbf5d7040b72d',
  
  //     author: 'Ada News',
  
  //     title: 
  
  //       'The stigma of the stay-at-home-dad',
  
  //     description: 
  
  //       'The stigma of the stay-at-home-dad',
  
  //     url: '',
  
  //     urlToImage: 
  
  //       'https://i.ibb.co/9tWRwZg/p0f0xz45.webp',
  
  //     publishedAt: '2024-02-28T19:39:35',
  
  //     content: 
  
  //       'While the role of a mum as full-time carer for children is widely accepted, fathers who take the same decision can be judged and isolated.\n' +
  
  //       'A\n' +
  
  //       'Ask Steven Lange what he does, and he\'ll tell you he\'s involved in start-ups. Or that he works from home. Or that he\'s semi-retired, though he might go back to work full-time once his youngest child graduates high school next year.\n' +
  
  //       '\n' +
  
  //       'What he\'s less likely to say is what he actually feels is most accurate.\n' +
  
  //       '\n' +
  
  //       '"I\'m a stay-at-home dad," says the Ohio, US-based 52-year-old, who worked in branding and product development for 30 years before he began staying home with his children in 2020. "But I don\'t think I would ever tell anybody that, or introduce myself that way," he adds. "I find myself feeling like I need to explain to you that I\'m not just folding laundry and cooking dinner and going grocery shopping. I\'ve got other stuff I\'m doing."\n' +
  
  //       '\n' +
  
  //       'That self-consciousness persists despite knowing just how beneficial his set-up has been: he\'s forged a closer relationship with his teenaged son; he\'s been around to help with his new grandchild; and the arrangement has enabled his wife to pursue a master\'s degree.\n' +
  
  //       '\n' +
  
  //       'Stay-at-home dads like Lange are becoming more common. In the US, for example, the number nearly doubled from 1989 to 2012. But they\'re still relatively unusual. Of US families with opposite-sex, married parents, 5.6% have working mothers and non-working fathers, compared to the 28.6% with working fathers and non-working mothers. (It\'s worth noting that this includes people who are unemployed but may be seeking work, so it\'s an imperfect estimate). In the EU, it\'s even rarer: about one in 100 men pause their careers for at least six months for childcare, compared to one in three women.\n' +
  
  //       'That relative rarity means that men who make this choice can feel like the odd ones out – and sometimes are judged harshly. Even in cultures where fathers are expected to be more involved than in the past, they are still expected to be the breadwinners of the family and are frequently stereotyped as less nurturing or domestically adept than mothers. \n' +
  
  //       '\n' +
  
  //       'All of this means that, for fathers like Lange, staying at home with the kids can feel unusual and ostracising – even if they wouldn\'t want it any other way.',
  
  //     category: 'lifestyle'
  
  //   },
  
  //   {
  
  //     _id: '65df5164e4adbf5d7040b72c',
  
  //     author: 'Ada News',
  
  //     title: 
  
  //       'Business in Russia: Why some firms haven\'t left',
  
  //     description: 
  
  //       'Hundreds of companies have exited Russia due to its invasion of Ukraine, but others cite revenue concerns – and even humanitarianism – as reasons to stay put.',
  
  //     url: '',
  
  //     urlToImage: 
  
  //       'https://i.ibb.co/XpTymMv/p0gfblgf.webp',
  
  //     publishedAt: '2024-02-28T19:39:35',
  
  //     content: 'W\n' +
  
  //       'When the first airstrikes fell on Ukraine in February 2022, corporate executives with operations or holdings in Russia were forced to pick a side. This decision had significant implications. Russia remains a major business market, with a population of 145 million; its 2022 GDP was a staggering $2.24tn (£1.81tn), right behind France. Fleeing companies would leave a lot of revenue on the table.\n' +
  
  //       '\n' +
  
  //       'Yet amid a gruelling war, with tens of thousands of civilian casualties and widespread international condemnation of Russia, companies risked severe reputational damage by staying put. Plus, a mix of international pressure, sanctions and risks of Russian government interference offered strong reasons for companies to leave when the conflict began.\n' +
  
  //       '\n' +
  
  //       '"Some decided to stay, some decided to go very quickly, and some dragged their feet," says Roman Sidortsov, an associate professor of energy policy at Michigan Technological University, US, who practised corporate law and taught in Russia.\n' +
  
  //       '\n' +
  
  //       'One of the biggest companies to pull out almost immediately was British Petroleum, which exited just three days after the conflict began. By 1 March, BMW also announced it would halt Russian production and imports. And after first announcing a plan to leave Russia in March 2022, Heineken sold off its Russian business to Russian packaging firm Arnest for a single euro this August, taking a €300m ($319m; £257m) loss on the division.\n' +
  
  //       '\n' +
  
  //       'Experts disagree on exactly how many companies have left Russia – and what constitutes a \'full departure\'. The Kyiv School of Economics Institute, which tracks the status of foreign companies selling or operating in Russia through its Leave Russia project, estimates around 300 have left.\n' +
  
  //       '\n' +
  
  //       'According to a similar list compiled by the Yale School of Management\'s Chief Executive Leadership Institute (CELI), roughly a thousand companies have exited.  \n' +
  
  //       '\n' +
  
  //       'However, hundreds of foreign companies continue to operate in, or sell to, Russia. The KSE Institute claims 1,400 companies are still conducting business in some form within the country; by the CELI’s count, around 500 companies are doing so.\n' +
  
  //       '\n' +
  
  //       'A recognisable name on the KSE list is PepsiCo. In early September, Ukraine\'s National Agency on Corruption Prevention accused the multinational soft-drink giant of continuing to produce food products in Russia despite it discontinuing Pepsi-Cola, 7Up and Miranda production. \n' +
  
  //       '\n' +
  
  //       'Tech and finance giants, including Chinese firm Alibaba, also continue to conduct business there, as does British-Swedish pharmaceutical firm AstraZeneca. Airlines including Emirates, China Eastern and Air Serbia still openly advertise flights to Russia on their websites. Other businesses, like Indian refiner Chennai Petroleum, are gearing up instead of exiting: the company is expanding its services to Russia because of the invasion. \n' +
  
  //       '\n' +
  
  //       'Critics of companies that have remained in Russia, including Yale Chief Executive Leadership Institute founder Jeffrey Sonnenfeld, denounce these businesses as greedy, or even complicit in Russia\'s invasion. But ceasing operations in a country with such major business implications isn\'t simple. Some businesses remain because of a lack of pressure on them to leave, or due to an existential threat. Others believe staying is the most humane option for their consumers.\n' +
  
  //       '\n' +
  
  //       'Why stay?\n' +
  
  //       '\n' +
  
  //       'Companies choose to continue operations in Russia for all sorts of reasons, despite immense public pressure from both consumers and governments.\n' +
  
  //       '\n' +
  
  //       'The simplest is financial solvency. Growing revenue and maintaining market share is critical for any firm, especially one dependent on Russian consumers. Andreas Rasche, a professor of business in society at the Copenhagen Business School\'s Centre for Sustainability, offers the example of family-owned German chocolate brand Ritter Sport, which pledged to stop investing and advertising in Russia, but still sells its products in the country. "They get 7% of their overall revenue out of Russia," he says. "They don\'t simply leave the market because, for them, it would potentially hurt a lot." ',
  
  //     category: 'lifestyle'
  
  //   },
  
  //   {
  
  //     _id: '65df5122e4adbf5d7040b72b',
  
  //     author: 'Ada News',
  
  //     title: 
  
  //       'How billion-dollar store makeovers are taking on the \'retail apocalypse\'',
  
  //     description: 
  
  //       'Retailers from JCPenney to Tiffany & Co are funnelling huge sums into store renovations. They\'re hoping massive makeovers will drive shoppers to spend.',
  
  //     url: '',
  
  //     urlToImage: 
  
  //       'https://i.ibb.co/qx6mwGx/p0gg7ksv.webp',
  
  //     publishedAt: '2024-02-28T19:39:35',
  
  //     content: 'A\n' +
  
  //       'At JCPenney stores across the US, shoppers may notice a fresh paint smell, better lighting and shiny new signage – with even more improvements planned for the coming months. Centralised checkout counters are replacing registers once spread across multiple departments, and posters promise a "new and improved shopping experience" once the remodels are complete. Change is afoot at the retailer, and not just in the form of upgraded carpet (though that, too, is on the list).\n' +
  
  //       '\n' +
  
  //       'The updates are part of a $1bn (£808m) investment the company announced in late August – a pricey effort to reinvigorate the brand following a high profile 2020 bankruptcy and subsequent restructuring. The funds will be partly dedicated to slicker technology and improved e-commerce features, but much of the focus remains on JCPenney\'s more than 650 physical stores. \n' +
  
  //       '\n' +
  
  //       'As a numbers game, this makes sense for the American department store chain: brick-and-mortar sales account for about 70% of the company\'s revenue, so enticing people to keep making those in-person trips will be crucial to recovery.\n' +
  
  //       '\n' +
  
  //       'Beyond that, in surveys and focus groups, shoppers continue to emphasise the importance of stores, says Katie Mullen, JCPenney\'s chief customer officer. "Our customer tells us that they care about the store environment," she says. "They tell us that they care about product availability, and they tell us that they care about inspiration."\n' +
  
  //       '\n' +
  
  //       'JCPenney is among the companies doubling down on their retail presences, for many different reasons. It may be surprising amid the recent narrative, in which experts and shoppers alike have declared once-thriving malls dead due to retailers\' losing battles against Amazon, economic challenges, demographic shifts and better-managed competition. Indeed, vacant storefronts across the US have been converted to apartment complexes, pickleball courts, medical centres, coworking spaces and entertainment venues.\n' +
  
  //       '\n' +
  
  //       'But while these trends paint a bearish picture of the future of traditional physical retail, some companies are making moves that suggest they still see in-store shopping as an opportunity for growth. Their strategies differ, but each are catering to what consumers say they want – and need.\n' +
  
  //       '\n' +
  
  //       'In-person shopping hasn\'t stopped, but it has slowed down. About 78% of global retail sales occurred offline in 2022, down from 85% in 2019. And amid the widespread growth of online shopping, especially throughout the past few years, brick-and-mortar stores have become an afterthought for many consumers. This behavioural transition has meant many middle-market retailers closed doors and tightened purse strings amid frenzied efforts to create glossy, easy-to-use e-commerce portals. It came at the cost of maintaining an inviting in-store experience.\n' +
  
  //       '\n' +
  
  //       'But now, companies are pouring money back into neglected stores – and they\'re investing in more than just repairs. Across the US, retailers in all sectors are snapping up leases and placing big bets on brick-and-mortar. At the end of the second quarter of 2023, just 4.8% of all retail space in the country was available for lease, according to a report from commercial real estate information company CoStar, which noted the US retail space market was "at its tightest level on record".\n' +
  
  //       '\n' +
  
  //       'What retailers are doing with that space is what sets today\'s approach apart from past endeavours. Yes, they\'re making sure the storefronts shine – but they\'re also building different kinds of physical spaces than they have in decades past. That\'s because consumer preferences have changed, and in many cases, they have even become more demanding.\n' +
  
  //       '\n' +
  
  //       '"Consumers are looking for fast and easy checkout. They\'re looking for retailers to have the products they want in stock when they make the trip to the store," says Michael Brown, a partner and Americas retail leader at the global strategy and management consulting firm Kearney. "They\'re expecting a little bit more technology to help them navigate stores\' assortments and aid their shopping experience, but not necessarily to just replace it."\n' +
  
  //       '\n' +
  
  //       'Saks is pouring $250m to $270m (£202m to £218m) into upgrading its Fifth Avenue flagship, with features like a photogenic Rem Koolhaas-designed escalator, scaled up handbag department and dedicated shop-in-shops for brands like Alexander McQueen and Burberry',
  
  //     category: 'lifestyle'
  
  //   },
  
  //   {
  
  //     _id: '65df4cc1e4adbf5d7040b72a',
  
  //     author: 'Ada News',
  
  //     title: 
  
  //       'The used electric vehicle market could tempt EV-curious drivers',
  
  //     description: 
  
  //       'For the first time, consumers will have a vast pool of used EVs available for purchase. Will hesitant drivers buy them?',
  
  //     url: '',
  
  //     urlToImage: 
  
  //       'https://i.ibb.co/KyVwcBs/p0hdgcbx.webp',
  
  //     publishedAt: '2024-02-28T19:39:35',
  
  //     content: 'T\n' +
  
  //       'Twenty-thousand Teslas are about to flood the US used-car market, as rental-car giant Hertz seeks to shed a third of its electric vehicle fleet.\n' +
  
  //       '\n' +
  
  //       'For drivers, it\'s a chance to snag a Tesla for well below market rate. The Hertz Car Sales website shows more than 200 used Teslas selling for less than $25,000 (£19,800), as of this writing. In comparison, a new Tesla Model 3 – the company\'s least-expensive offering – starts at $35,990 (£28,500). These prices are even lower than the US\'s cheapest new EV, a Nissan Leaf, which sells for around $29,000 (£22,965).\n' +
  
  //       '\n' +
  
  //       'As Hertz sheds its stock, experts also expect more used electric vehicles will hit the market from dealerships, other rental fleets and private owners, particularly as three-year leases expire. For consumers who have been EV-curious, the new global secondary market presents a prime opportunity to purchase one at a steep discount – especially at a time when automakers continue to struggle with bringing down prices on new models.\n' +
  
  //       '\n' +
  
  //       '"From next year onwards, there will be very significant volumes [of used EVs], and we can expect prices to go down significantly," says Thibaud Simphal, Global Head of Sustainability for Uber.\n' +
  
  //       '\n' +
  
  //       'If the price is right, even consumers who don\'t have first-hand experience with EVs might decide to jump in, says Felipe Smolka, a partner at EY and leader of the firm\'s mobility practice. Indeed, this unprecedented influx of discounted cars could mark an inflection point for EV sales – particularly in the US, where many Americans cite price as one of the major barriers to mass adoption. A record number of used electric vehicles are expected to sell in 2024, according to Recurrent, a vehicle-data research firm, which produces a quarterly Used Car Prices and Market Report.\n' +
  
  //       '\n' +
  
  //       'Some people have been waiting for this secondary market, and will be quick to buy these vehicles, say experts. And, as the first wave of consumers take the plunge, there could be a knock-on effect in which hesitant adopters may find the perceptions holding them back – repair costs, battery life and charging access – dispelled by satisfied drivers.\n' +
  
  //       '\n' +
  
  //       'One segment that has already experienced take-up of used EVs, even among a limited pool of stock, are rideshare drivers, says Simphal. Since 2021, Uber has partnered with Hertz and other rental agencies in multiple countries to incentivise their drivers to adopt EVs with credits and steeply-discounted weekly rental rates. In 2022, the company reported 92% of the drivers renting a Tesla in the US through Hertz said they were considering purchasing an EV.\n' +
  
  //       '\n' +
  
  //       'Due in part to these initiatives, the number of EVs on the Uber ride-hailing network has doubled in the past year, says Simphal. There are now more than 126,000 monthly active EV drivers on the Uber platform, which currently makes it the biggest network for electric vehicles, according to the company.\n' +
  
  //       '\n' +
  
  //       'Now that more professional and private drivers will have the opportunity to purchase a used EV amid a growing market, and more electric vehicles hit the road, consumers will increasingly learn about the realities and expenses of owning an EV. Beyond anecdotal accounts, more hard data will become available.\n' +
  
  //       '\n' +
  
  //       'Amid Uber\'s programme with Hertz, for instance, the company collected information on where chargers were – and were not – available, based on rideshare drivers\' trips in England and France. They also documented the mileage range of the Teslas after charging. Uber shared this data with governments and private companies to help improve infrastructure planning as well address consumer misconceptions.',
  
  //     category: ''
  
  //   },
  
  //   {
  
  //     _id: '65df4c84e4adbf5d7040b729',
  
  //     author: 'Ada News',
  
  //     title: 
  
  //       'How Amazon MGM Studios is writing the playbook for representation – on-screen and off',
  
  //     description: 
  
  //       'Latasha Gillespie, head of global diversity, equity, inclusion and accessibility at Amazon MGM Studios, enters the BBC\'s Executive Lounge to talk about leading the charge on inclusivity in entertainment.',
  
  //     url: '',
  
  //     urlToImage: 
  
  //       'https://i.ibb.co/vL7V76V/p0hdks53.webp',
  
  //     publishedAt: '2024-02-28T19:39:35',
  
  //     content: 'L\n' +
  
  //       'Latasha Gillespie knows inclusivity isn\'t one-sided. At Amazon MGM, the film and television production and distribution studio, she\'s a staunch believer that representation needs to be both in front of the camera and behind it.\n' +
  
  //       '\n' +
  
  //       'In a first in the entertainment industry, the company launched its inclusion policy guide and playbook under Gillespie\'s leadership as head of global diversity, equity, inclusion and accessibility. These resources – fully available to the public – aim to guide leaders both within Amazon MGM and the entire business landscape to ensure diverse, accurate storytelling.\n' +
  
  //       '\n' +
  
  //       '"Our policy guide and playbook codify the DEI work we\'ve been doing internally. In terms of formulating a practical approach to DEI, we\'ve done most of the heavy lifting for other business leaders," she tells the BBC. \n' +
  
  //       '\n' +
  
  //       'Gillespie\'s work comes at a pivot point in society for diversity, equity and inclusion. The term "DEI" is increasingly in the crosshairs amid a growing backlash from some powerful figures in corporate America. Gillespie knows the landscape is as politically charged as ever. But instead of bristling at the challenge, it\'s energised her more.\n' +
  
  //       '\n' +
  
  //       'Gillespie talks to the BBC about her outlook on representation, the role of data in diversity and her plan to move the entertainment industry towards a more inclusive future.\n' +
  
  //       '\n' +
  
  //       'What does organisational DEI look like, and what is the biggest barrier to achieving it?\n' +
  
  //       '\n' +
  
  //       'Organisational DEI promotes the equitable representation and participation of all employees irrespective of their race, gender, religion, sexual orientation, disability and the like.\n' +
  
  //       '\n' +
  
  //       'The biggest obstacle to achieving it is the mindset people sometimes adopt when they hear the words "diversity", "equity" and "inclusion". They mistakenly believe it\'s focused solely on race, gender or social justice.\n' +
  
  //       '\n' +
  
  //       'In reality, DEI is a core growth strategy that helps businesses and organisations alike become more profitable by identifying customers and global expansion opportunities. It also aids companies\' understanding of customers, potential customers and markets, which allows them to create products and provide services that meet their customers\' needs.\n' +
  
  //       '\n' +
  
  //       'You created and launched Amazon MGM Studios\' inclusion policy guide and playbook, which extend the company\'s DEI commitments to content and productions. How did the idea come about?\n' +
  
  //       '\n' +
  
  //       'Following the murder of George Floyd and the subsequent uprising against racial injustice, it was important that our efforts weren\'t performative. This wasn\'t the time to just give to charity or start another mentoring program, as well-intentioned and important as these efforts are.\n' +
  
  //       '\n' +
  
  //       'In this instance, we knew we had to dismantle corporate systems, processes and structures that have historically discriminated against minorities and other marginalised groups. On this basis, we decided to make our internal DEI commitments public, which enabled us to be held accountable. This is how our policy guide and playbook came into being.',
  
  //     category: 'lifestyle'
  
  //   }]




  // data= data
  // data= data.data
  const singledata = data[3];
  // console.log(singledata);
  // console.log(data);




  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <Add_Data_To_Global_Context data={data}/>
          <Navbar/>
          <div className="h-fit">
          {children}
          </div>
          <Footer/>
        </SessionProvider>
      </body>
    </html>
  );
}
