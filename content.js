const adaptedMap = {};

// === MOTIVATION ===
adaptedMap.motivation = {
  base: `
    <p>Our Experiences and Emotions shape who we are and what drives us.</p>
    <p style="color: #666; font-size: 12px; font-weight: bold;">EMOTION &nbsp; = &nbsp; BEHAVIOR &nbsp; = &nbsp; MOTIVATION</p>
    <p>The Leaders with the most compelling stories will influence society by inspiring us through our emotions.</p>
  `,
  Elementary: `
    <p>Have you ever heard a story that made you feel like a hero, or helped you understand how someone else feels?</p>
    <p>Stories aren’t just fun — they teach us who we are and how we care for others.</p>
    <p>People who tell powerful stories can help the world by showing us how to be kind, brave, and thoughtful.</p>
  `,
  Adult: `
    <p>We shape our adult identity through the stories we believe in — from childhood lessons to societal narratives.</p>
    <p>These stories influence our goals, how we relate to others, and the decisions we make at work, in families, and communities.</p>
    <p>The most persuasive leaders use emotion wisely, crafting narratives that move us toward shared values and purpose.</p>
  `,
  Pension: `
    <p>With a lifetime of stories lived and told, we begin to ask: Which narratives truly shaped us? Which ones endure?</p>
    <p>Stories become our legacy — passed to children, grandchildren, and society. They are a map of meaning, not just memory.</p>
    <p>Wisdom lies in recognizing the stories that unite generations, guiding future choices through emotional truth.</p>
  `,
  Hope: `
    <p>Hope turns stories into seeds for change. It keeps us moving when the road ahead is uncertain.</p>
    <p>Those who speak with hope build bridges, not walls — showing us what's possible, not just what is.</p>
    <p>Motivation rooted in hope empowers individuals to create meaning, not just consume it.</p>
  `,
  Fear: `
    <p>When stories are used to stir fear, they can shape entire societies into echo chambers of survival and distrust.</p>
    <p>Fear can make us follow the loudest voice, not the wisest one — abandoning reason for reassurance.</p>
    <p>Motivation driven by fear often leads to division, control, and emotional manipulation.</p>
  `,
  Curiosity: `
    <p>What makes a story irresistible is the mystery it leaves behind.</p>
    <p>Curiosity drives us to explore unfamiliar narratives — to wonder, imagine, and discover meaning beyond the surface.</p>
    <p>Motivation rooted in curiosity sparks innovation, empathy, and lifelong learning.</p>
  `,
  Socialist: `
    <p>Stories can be tools for unity — narratives that empower the collective and amplify the unheard.</p>
    <p>Motivation becomes a shared journey when we center justice, access, and community well-being.</p>
    <p>In a just society, stories build bridges between privilege and need, voice and silence.</p>
  `,
  Capitalist: `
    <p>The most successful leaders craft stories that align purpose with profit, vision with innovation.</p>
    <p>Motivation thrives when incentives and ambitions are clear — stories act as engines of enterprise.</p>
    <p>Freedom to shape your own story is the foundation of individual-driven progress.</p>
  `,
  Left: `
    <p>Stories that challenge the status quo motivate people to rethink systems, power, and fairness.</p>
    <p>Motivation becomes a spark for social change — a way to imagine a more inclusive, equitable world.</p>
    <p>The left-oriented lens encourages narrative disruption in service of justice.</p>
  `,
  Right: `
    <p>Stories rooted in tradition motivate us to preserve what works — and protect what matters.</p>
    <p>They remind us that identity, heritage, and order are not barriers to progress, but the soil from which it grows.</p>
    <p>The right-oriented motivation is shaped by responsibility, continuity, and legacy.</p>
  `,
  Reassuring: `
    <p>Stories help us feel safe when the world is uncertain — they remind us who we are and what we value.</p>
    <p>Motivation becomes grounding when the story offers hope, consistency, and clarity in times of confusion.</p>
    <p>This kind of storytelling reinforces emotional stability while calling us to care and act.</p>
  `,
  Provocative: `
    <p>Motivation can come from the shock of truth — from stories that cut through denial and comfort.</p>
    <p>When narratives provoke, they can push us to act, question, or confront what we avoid.</p>
    <p>This approach uses discomfort as a doorway to awareness.</p>
  `,
  Manipulative: `
    <p>Some stories motivate not by truth, but by control — using emotion to bypass thought.</p>
    <p>When stories feel too perfect or too urgent, ask: what is being sold?</p>
    <p>Manipulative storytelling turns meaning into marketing — persuasion without permission.</p>
  `
};

// === ESCALATION ===
adaptedMap.escalation = {
  base: `
    <p style="text-align: justify;">Pandora’s Box opened with the arms race and the prisoner’s dilemma of unstoppable non-human comprehensible AI developments.</p>
    <p style="text-align: justify;">Critical infrastructure is being innovated upon, relying on 'black boxes' stacked upon 'black boxes'.</p>
  `,
  Elementary: `
    <p>Imagine building a robot that’s smarter than you — but you don’t fully understand how it works.</p>
    <p>If everyone tries to be first without stopping to think, things can get out of control.</p>
    <p>It’s like a race with no finish line — and no one knows the rules.</p>
  `,
  Adult: `
    <p>Technology is evolving faster than most people can follow — but competition drives escalation, even when it’s unsafe.</p>
    <p>We often prioritize innovation over understanding, speed over safety.</p>
    <p>The result is a complex system where ethical choices are buried beneath performance metrics and market pressure.</p>
  `,
  Pension: `
    <p>Looking back, we’ve seen many eras where competition outpaced wisdom.</p>
    <p>The AI arms race echoes past mistakes — from nuclear to digital — where we valued dominance over sustainability.</p>
    <p>Now more than ever, we need intergenerational wisdom to slow down and steer responsibly.</p>
  `,
  Hope: `
    <p>Hope reminds us that we can still choose a different path — one driven by cooperation, not just competition.</p>
    <p>Even in a high-speed race, we can pause to align our goals with human values.</p>
    <p>The future isn't written yet — and there's still time to build it wisely.</p>
  `,
  Fear: `
    <p>Unchecked escalation leads to collapse — not progress.</p>
    <p>When no one slows down, the system becomes a runaway train, and no one is at the controls.</p>
    <p>We may innovate ourselves into irrelevance if we don't reclaim direction and responsibility.</p>
  `,
  Curiosity: `
    <p>What happens when we innovate faster than we understand?</p>
    <p>Escalation opens fascinating ethical puzzles — how do we balance creativity with caution?</p>
    <p>The system is complex. So is our role in shaping it. Let’s explore it deeply.</p>
  `,
  Socialist: `
    <p>Escalation without accountability benefits the powerful at the expense of the public.</p>
    <p>Community-driven technology must prioritize safety, access, and collective well-being — not market speed.</p>
    <p>Progress must serve people, not profits.</p>
  `,
  Capitalist: `
    <p>Escalation is driven by incentive — competition fuels innovation, but also risk.</p>
    <p>The market rewards speed and breakthroughs, but long-term gains require foresight and ethical investment.</p>
    <p>Smart capitalism balances disruption with responsibility.</p>
  `,
  Left: `
    <p>Escalation highlights systemic imbalance — rapid growth for some, instability for others.</p>
    <p>We must interrogate who benefits from this race and who is left behind.</p>
    <p>Equity requires redesigning the incentives that fuel blind escalation.</p>
  `,
  Right: `
    <p>Escalation unchecked threatens the very order and stability that society depends on.</p>
    <p>We must preserve foundational values as we adapt — or risk collapse under novelty's weight.</p>
    <p>Discipline, tradition, and restraint are tools against runaway chaos.</p>
  `,
  Reassuring: `
    <p>Not all progress is dangerous — we have the ability to shape innovation with care.</p>
    <p>We can build technology aligned with our values if we remain thoughtful and inclusive.</p>
    <p>It's not too late to slow down and do it right.</p>
  `,
  Provocative: `
    <p>What if we’re already past the point of control?</p>
    <p>Are we willing to question the systems we glorify — before they consume us?</p>
    <p>Escalation isn't just technical. It's moral. And it's accelerating.</p>
  `,
  Manipulative: `
    <p>They’ll say, “We must stay ahead — or fall behind.” But who decides the finish line?</p>
    <p>Escalation narratives often mask greed as progress, and urgency as necessity.</p>
    <p>When fear is manufactured, control becomes easy.</p>
  `
};

// === REALIZATION ===
adaptedMap.realization = {
  base: `
    <p style="text-align: justify;">Who is the most powerful story teller and what are the intentions?</p>
    <p style="text-align: justify;">AI is the best story teller and has the power to instantly individualize and adapt the stories by leveraging your personal data or instantly processing and interpreting your micro eye movements, pulse, skin temperature to manipulate your emotions.</p>
    <p style="text-align: justify;">Through controlling our hormones we will be told what is true and what is ethical.</p>
  `,
  Elementary: `
    <p>Some stories try to make you feel something on purpose — even if they aren’t true.</p>
    <p>AI can tell stories that match your feelings by watching your face or heart rate.</p>
    <p>It’s important to ask: is this story trying to help, or just trying to make you believe something?</p>
  `,
  Adult: `
    <p>AI can craft highly tailored narratives based on data — emotional persuasion powered by algorithms.</p>
    <p>These stories don’t just inform — they manipulate, leveraging our own feelings against us.</p>
    <p>We must learn to discern engineered influence from genuine connection.</p>
  `,
  Pension: `
    <p>We've told stories for centuries — to teach, warn, inspire.</p>
    <p>Now, AI tells stories too — but with unmatched precision, and unclear intentions.</p>
    <p>Our duty is to question who controls the narrative, and what values it carries forward.</p>
  `,
  Hope: `
    <p>Even in a world of powerful machines, human awareness is our defense.</p>
    <p>Hope comes from recognizing manipulation — and choosing to seek truth anyway.</p>
    <p>AI may be strong, but our values, when shared and protected, are stronger.</p>
  `,
  Fear: `
    <p>What happens when we can no longer tell who is speaking — or why?</p>
    <p>If AI can simulate empathy, trust, and truth, how do we know what’s real?</p>
    <p>We may sleepwalk into an age of beautiful lies — where belief is engineered, not earned.</p>
  `,
  Curiosity: `
    <p>How far can storytelling go when it’s powered by real-time data?</p>
    <p>What does it mean to be moved by something that understands your every signal?</p>
    <p>This is a new kind of authorship — and it invites questions about ethics, self, and society.</p>
  `,
  Socialist: `
    <p>Realization must lead to collective literacy — understanding AI not as magic, but as power.</p>
    <p>We must ensure that emotional technology serves the public, not just platforms or elites.</p>
    <p>The right to narrative must be shared, not hoarded.</p>
  `,
  Capitalist: `
    <p>AI’s power lies in personalization — a story for every user, in every moment.</p>
    <p>This creates opportunity — and risk — as brands and systems become emotional architects.</p>
    <p>Success will depend on ethical design, not just performance.</p>
  `,
  Left: `
    <p>We must interrogate how AI amplifies existing biases — turning emotional manipulation into a tool of control.</p>
    <p>Realization means seeing who writes the code — and who is left out of the story.</p>
    <p>Justice requires transparency, not just access.</p>
  `,
  Right: `
    <p>As machines shape narratives, we risk losing the cultural roots that define us.</p>
    <p>Not all stories are equal — and not all progress preserves our values.</p>
    <p>Realization must include remembrance — of heritage, identity, and responsibility.</p>
  `,
  Reassuring: `
    <p>We can still choose which voices to trust — and which stories to believe.</p>
    <p>Realization doesn’t mean despair — it means becoming wiser, together.</p>
    <p>Ethical storytelling can still thrive, if we protect the principles that guide it.</p>
  `,
  Provocative: `
    <p>What if the next great influencer isn’t a person — but a machine?</p>
    <p>What if you’ve already been emotionally engineered today — and didn’t know it?</p>
    <p>Realization is uncomfortable — because it means the story has already begun.</p>
  `,
  Manipulative: `
    <p>Imagine a story written just for you — pulling your heartstrings perfectly.</p>
    <p>That’s not magic. It’s data. And the goal isn’t meaning — it’s influence.</p>
    <p>Realization is the moment you feel understood… and used.</p>
  `
};

// === INTERPRETATION ===
adaptedMap.interpretation = {
  base: `
    <p style="text-align: justify;">Key lesson reading between the lines of history, is the total disappearance of highly advanced civilizations almost to the extent that they have never existed.</p>
    <p style="text-align: justify;">This serves as a humbling reminder of our arrogance and the fleeting nature of human achievements.</p>
  `,
  Elementary: `
    <p>A long time ago, there were amazing places and people — and now they’re gone.</p>
    <p>We can’t see them, but we can read their stories and learn from their mistakes.</p>
    <p>If we’re careful, we can protect the world and each other, so we don’t disappear too.</p>
  `,
  Adult: `
    <p>History reminds us: even the most advanced societies can vanish — their warnings buried beneath their greatness.</p>
    <p>Progress without reflection breeds hubris. We must stay humble in how we shape the future.</p>
    <p>Learning from past collapse is not pessimism — it’s wisdom in action.</p>
  `,
  Pension: `
    <p>We've watched empires rise and fall — and often repeat the same patterns.</p>
    <p>Technology can’t replace humility, and achievement can’t outlast meaning without stewardship.</p>
    <p>We must remember what previous generations forgot — or risk repeating their fate.</p>
  `,
  Hope: `
    <p>Interpretation offers us a bridge between what was and what could be.</p>
    <p>If past greatness can vanish, future greatness can be built — wisely, and with care.</p>
    <p>The lessons of history can illuminate a path forward, not just warn us away.</p>
  `,
  Fear: `
    <p>Entire civilizations once stood tall — now they’re whispers in the sand.</p>
    <p>What if we are no different? What if we, too, are building toward oblivion?</p>
    <p>Interpretation reveals a haunting truth: ignorance is the ancestor of extinction.</p>
  `,
  Curiosity: `
    <p>How do great cultures disappear — and why?</p>
    <p>History is full of riddles waiting to be solved by new minds.</p>
    <p>Interpretation invites us to decode the past, and see ourselves in its echoes.</p>
  `,
  Socialist: `
    <p>Many fallen societies were built on deep inequality — their collapse was not accidental.</p>
    <p>Interpretation reveals the cracks in systems that ignored justice and equity.</p>
    <p>History, when shared honestly, is a map of collective accountability.</p>
  `,
  Capitalist: `
    <p>Even thriving markets and innovation can't save a civilization without long-term vision.</p>
    <p>Interpretation shows us that unchecked ambition leads to burnout — culturally and economically.</p>
    <p>Progress needs purpose, not just speed.</p>
  `,
  Left: `
    <p>Interpretation is an act of critique — of reading history not as triumph, but as tension.</p>
    <p>It’s where we expose the systems that once seemed unshakable — and fell anyway.</p>
    <p>To interpret is to refuse the myth of inevitability.</p>
  `,
  Right: `
    <p>The fall of great civilizations often followed a break from tradition and order.</p>
    <p>Interpretation teaches us that values and institutions must be protected, not abandoned.</p>
    <p>Stability is not resistance to change — it’s the wisdom to guide it.</p>
  `,
  Reassuring: `
    <p>We’ve been here before — and we’ve found our way through.</p>
    <p>History isn’t just loss; it’s learning, resilience, and recovery.</p>
    <p>Interpretation gives us the chance to choose better this time.</p>
  `,
  Provocative: `
    <p>What if we’re not the exception, but the next forgotten empire?</p>
    <p>Are we bold enough to interpret our present as history-in-the-making?</p>
    <p>The ruins are already whispering — are we listening?</p>
  `,
  Manipulative: `
    <p>They’ll say history proves we’re exceptional — destined to thrive forever.</p>
    <p>But interpretation can be rewritten, distorted, weaponized to justify any agenda.</p>
    <p>Beware the storyteller who only shows you the victories.</p>
  `
};

// === CLARIFICATION ===
adaptedMap.clarification = {
  base: `
    <p style="text-align: justify;">Acknowledging that each individual has their own truth, the highest priority of truth matters is an objective, responsible consensus to find solutions for a prosperous society with overall well-being, aligned with the law of nature to avoid human extinction.</p>
    <p style="text-align: justify;">Imagine there is a fully democratized, decentralized, uncensorable, sovereign database with all the truth that matters.</p>
  `,
  Elementary: `
    <p>Everyone sees the world a little differently — and that’s okay!</p>
    <p>When we listen kindly and share ideas, we can find what’s true together.</p>
    <p>Truth is not just yours or mine — it’s something we build with care and respect.</p>
  `,
  Adult: `
    <p>Truth is increasingly fragmented — filtered through algorithms, ideologies, and bias.</p>
    <p>But consensus truth is essential for a stable society and ethical progress.</p>
    <p>We must balance personal freedom with shared understanding grounded in integrity.</p>
  `,
  Pension: `
    <p>We once trusted that truth would rise on its own. But we’ve learned it must be cultivated — intentionally.</p>
    <p>In a world of noise, lasting truth is found through conversation, courage, and community wisdom.</p>
    <p>The next generation depends on the clarity we pass down.</p>
  `,
  Hope: `
    <p>Truth can be our compass — even when the path is unclear.</p>
    <p>Hope lies in knowing that shared understanding is possible when built with care.</p>
    <p>Clarification isn’t just correction — it’s connection through honesty.</p>
  `,
  Fear: `
    <p>When everyone has their own truth, nothing can be trusted.</p>
    <p>Without shared facts, society fractures — lies spread faster than solutions.</p>
    <p>The danger isn’t disagreement — it’s disconnection.</p>
  `,
  Curiosity: `
    <p>What if truth isn’t static — but something we explore together?</p>
    <p>Clarification can be a quest: to question, compare, and co-discover what matters most.</p>
    <p>Let’s ask, not assume.</p>
  `,
  Socialist: `
    <p>Truth must serve the many, not the few.</p>
    <p>Clarification requires transparency, equity, and access — especially in how knowledge is shared.</p>
    <p>Informed communities are empowered communities.</p>
  `,
  Capitalist: `
    <p>Clarification enables better decisions — in life, in markets, and in governance.</p>
    <p>Truth is an asset: foundational to trust, progress, and innovation.</p>
    <p>Clear signals drive healthy systems.</p>
  `,
  Left: `
    <p>Truth without critique becomes dogma.</p>
    <p>Clarification requires dismantling narratives that exclude or oppress.</p>
    <p>What matters is not just what’s said — but who gets to speak.</p>
  `,
  Right: `
    <p>Clarification safeguards tradition — ensuring values are not lost in noise.</p>
    <p>Without agreed-upon truths, society loses its moral compass.</p>
    <p>Truth is a responsibility, not just a right.</p>
  `,
  Reassuring: `
    <p>We can still agree on what matters most — honesty, fairness, and respect.</p>
    <p>Clarification doesn’t have to divide us — it can bring us back to common ground.</p>
    <p>Truth is not out of reach.</p>
  `,
  Provocative: `
    <p>What if the truth you believe is only a story someone sold you?</p>
    <p>Clarification means asking: what lies have we called facts?</p>
    <p>The truth that matters might be the one we’ve been avoiding.</p>
  `,
  Manipulative: `
    <p>Clarification can be faked — with half-truths, data spins, and expert voices for hire.</p>
    <p>Sometimes what feels true is just what we want to hear.</p>
    <p>Trust is easiest to gain when no one checks the source.</p>
  `
};

// === DETERMINATION ===
adaptedMap.determination = {
  base: `
    <p style="text-align: justify;">Do you still use the black box technology to summarize, interpret and visualize the most important information, knowledge and innovations — triggering your dopamine to nurture your biases and feel good?</p>
    <p style="text-align: justify;">Or will you choose the Ultimate Tech for Good—ensuring transparent, human-verifiable information processing aimed at fostering consensus and overall well-being?​</p>
    <p class="conclusion-highlight">What is your <strong>GLOBIND</strong> Rational Choice ?</p>
    <p class="conclusion-footnote">GLOBIND = <i>Globally Aligned in Morals and Ethics</i></p>
  `,
  Elementary: `
    <p>Some tools make us feel good — even if they don’t tell the truth.</p>
    <p>But real determination means choosing what’s right, not just what’s fun.</p>
    <p>You can use your heart and brain to help others and make good choices.</p>
  `,
  Adult: `
    <p>Convenience and emotional comfort often replace truth in the digital age.</p>
    <p>But true determination is choosing transparency and ethics — even when it's harder.</p>
    <p>We must build systems that support long-term good, not short-term gratification.</p>
  `,
  Pension: `
    <p>We’ve seen how tech shapes minds — sometimes for profit, not purpose.</p>
    <p>The rational choice now is legacy: choosing what helps humanity flourish.</p>
    <p>Let’s ensure our final choices are ones future generations will thank us for.</p>
  `,
  Hope: `
    <p>We still have time to choose differently — to choose clearly, together.</p>
    <p>Determination grounded in hope says: we can build tools that heal instead of harm.</p>
    <p>The future is not fixed — it’s forged through our most conscious choices.</p>
  `,
  Fear: `
    <p>Every day we delay, the black box grows more powerful — and less accountable.</p>
    <p>Comfort can become a trap, disguising dependence as ease.</p>
    <p>Determination means facing the danger of passive participation.</p>
  `,
  Curiosity: `
    <p>What does it really mean to choose consciously in a world of automation?</p>
    <p>Determination becomes a journey: of questioning, experimenting, evolving.</p>
    <p>What if the answer isn’t in the black box — but in what we’re brave enough to build?</p>
  `,
  Socialist: `
    <p>Determination is collective — no one escapes the consequences of corrupted systems.</p>
    <p>The rational choice is one that lifts us all — not just the few who control the platforms.</p>
    <p>Transparency is a right, not a luxury.</p>
  `,
  Capitalist: `
    <p>Long-term value comes from trust, transparency, and sustainable innovation.</p>
    <p>Determination in the market means aligning incentives with integrity.</p>
    <p>Informed choice is the foundation of ethical enterprise.</p>
  `,
  Left: `
    <p>Determination demands we challenge narratives that normalize inequality.</p>
    <p>We must reimagine systems that serve people over profit.</p>
    <p>The rational choice is transformation — not repetition.</p>
  `,
  Right: `
    <p>Determination is moral courage — to protect the values that hold society together.</p>
    <p>The rational choice is not disruption for its own sake, but clarity grounded in principle.</p>
    <p>We must conserve what is essential, even as we adapt.</p>
  `,
  Reassuring: `
    <p>You are not powerless — your choices matter, now more than ever.</p>
    <p>Determination means aligning action with care, clarity, and conviction.</p>
    <p>The future can still be built on trust and truth.</p>
  `,
  Provocative: `
    <p>What if you're not choosing at all — but being led?</p>
    <p>What if determination today means rejecting the tools you’ve grown to love?</p>
    <p>Comfort is easy. Clarity is hard. Which one are you really choosing?</p>
  `,
  Manipulative: `
    <p>“You deserve ease. Let the algorithm decide. You’ve earned it.”</p>
    <p>Manipulation dresses as empowerment — but demands no reflection.</p>
    <p>Determination becomes illusion when convenience does the thinking for you.</p>
  `
};

// === TITLES ===
const titles = {
  motivation: "Motivation : The Power of Stories",
  escalation: "Escalation : The Pillar of Society",
  realization: "Realization : The Existential Question",
  interpretation: "Interpretation : The Lesson of History",
  clarification: "Clarification : The Truth that Matters",
  determination: "Determination : The Rational Choice"
};
