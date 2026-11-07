// KidsFun Academy — one-file learning game app.
    // Learning progress and theme are saved in this browser using localStorage.
    const categories = [
      {id:'math',name:'Maths World',icon:'🔢',description:'Numbers, adding, times tables and patterns.',color:'#fff0c8',games:['addition','tables','number-pattern']},
      {id:'english',name:'English Town',icon:'🔤',description:'New words, spelling and language adventures.',color:'#ffe4ee',games:['word-explorer','spelling-scramble']},
      {id:'science',name:'Science Lab',icon:'🧪',description:'Discover nature, animals, space and our planet.',color:'#dcf8ed',games:['nature-detective','space-ranger']},
      {id:'brain',name:'Brain Gym',icon:'🧠',description:'Train your memory and become a logic star.',color:'#e9e4ff',games:['memory-match','pattern-master']}
    ];
    const games = [
      {id:'addition',category:'math',name:'Addition Adventure',icon:'➕',mode:'quiz',modeLabel:'Quick quiz',description:'Solve addition and subtraction challenges. Each level brings bigger numbers.',how:'Choose the correct answer for each number challenge.',color:'#fff0c8'},
      {id:'tables',category:'math',name:'Times Table Trek',icon:'✖️',mode:'quiz',modeLabel:'Math challenge',description:'Practice multiplication and become a times-table champion.',how:'Solve five multiplication questions in every level.',color:'#e7edff'},
      {id:'number-pattern',category:'math',name:'Number Pattern Path',icon:'🔎',mode:'sequence',modeLabel:'Pattern puzzle',description:'Look carefully at number sequences and discover what comes next.',how:'Find the missing number in each sequence.',color:'#e4f8ef'},
      {id:'word-explorer',category:'english',name:'Word Explorer',icon:'📖',mode:'quiz',modeLabel:'Word quiz',description:'Learn the meaning of useful English words with friendly questions.',how:'Read the word and choose the meaning that matches it.',color:'#ffe4ee'},
      {id:'spelling-scramble',category:'english',name:'Spelling Scramble',icon:'🔠',mode:'scramble',modeLabel:'Word puzzle',description:'Unscramble mixed-up letters to discover the hidden word.',how:'Read the clue, rearrange the letters and type the correct word.',color:'#fff0c8'},
      {id:'nature-detective',category:'science',name:'Nature Detectives',icon:'🌱',mode:'quiz',modeLabel:'Science quiz',description:'Explore animals, plants, weather and the natural world.',how:'Answer five nature questions in each level.',color:'#dcf8ed'},
      {id:'space-ranger',category:'science',name:'Space Rangers',icon:'🚀',mode:'quiz',modeLabel:'Space quiz',description:'Travel through space and learn about planets, stars and the Moon.',how:'Pick the right answer to each space question.',color:'#e9e4ff'},
      {id:'memory-match',category:'brain',name:'Memory Match',icon:'🃏',mode:'memory',modeLabel:'Memory game',description:'Flip cards and find matching pairs. Later levels have more cards.',how:'Turn over two cards at a time and remember where each picture is.',color:'#ffe9d8'},
      {id:'pattern-master',category:'brain',name:'Pattern Master',icon:'🧩',mode:'sequence',modeLabel:'Logic puzzle',description:'Use your brain to solve number and shape patterns.',how:'Study the sequence and select the missing next item.',color:'#e7edff'}
    ];
    const vocab = [
      ['brave','Showing courage',['Afraid','Showing courage','Sleepy']],['tiny','Very small',['Very small','Very loud','Very fast']],['gigantic','Very large',['Very large','Very quiet','Very short']],['ancient','Very old',['Brand new','Very old','Very soft']],['cheerful','Happy and positive',['Angry','Happy and positive','Hungry']],
      ['rapid','Very fast',['Very slow','Very fast','Very weak']],['silent','Making no sound',['Making no sound','Very bright','Very cold']],['honest','Telling the truth',['Telling the truth','Running quickly','Feeling tired']],['fragile','Easy to break',['Hard to lift','Easy to break','Full of water']],['giggle','A small happy laugh',['A small happy laugh','A loud cry','A long walk']],
      ['enormous','Extremely big',['Extremely big','Extremely thin','Extremely late']],['polite','Showing good manners',['Showing good manners','Feeling sleepy','Moving slowly']],['swift','Moving quickly',['Moving quickly','Moving silently','Moving backwards']],['protect','Keep safe from harm',['Make something dirty','Keep safe from harm','Forget something']],['curious','Wanting to learn or know',['Wanting to learn or know','Very angry','Very hungry']]
    ];
    const spellingWords = [
      ['cat','A small pet that says meow'],['book','Something you read'],['star','A bright thing in the night sky'],['fish','An animal that swims'],['tree','A tall plant with branches'],
      ['apple','A fruit that can be red or green'],['school','A place where children learn'],['planet','A large world in space'],['flower','A colourful part of a plant'],['friend','Someone you like and trust'],
      ['rainbow','Colours seen in the sky after rain'],['giraffe','A tall animal with a long neck'],['library','A place full of books'],['diamond','A very hard shiny gemstone'],['holiday','A special day of rest or fun'],
      ['elephant','A huge animal with a trunk'],['beautiful','Something very pretty'],['butterfly','An insect with colourful wings'],['adventure','An exciting experience'],['wonderful','Something extremely good'],
      ['chocolate','A sweet treat made from cocoa'],['dinosaur','An animal that lived long ago'],['helicopter','A flying machine with spinning blades'],['important','Something that matters a lot'],['celebrate','To do something special for an event']
    ];
    const natureQuestions = [
      ['Which animal gives us milk?',['Cow','Tiger','Eagle','Snake'],0,'A cow can give us milk.'],['What do plants need from the Sun?',['Sunlight','Shoes','Music','Plastic'],0,'Plants use sunlight to help them grow.'],['Which animal has a long trunk?',['Elephant','Rabbit','Frog','Cat'],0,'An elephant uses its trunk to smell, drink and pick things up.'],['Where do fish live?',['Water','Trees','Deserts','Clouds'],0,'Fish live in water.'],['Which part of a plant takes in water?',['Roots','Flowers','Fruit','Petals'],0,'Roots take in water from the soil.'],
      ['What is a baby frog called?',['Tadpole','Cub','Chick','Calf'],0,'A young frog begins life as a tadpole.'],['Which is a mammal?',['Dolphin','Shark','Ant','Eagle'],0,'Dolphins are mammals and breathe air.'],['What do bees collect from flowers?',['Nectar','Stones','Sand','Leaves'],0,'Bees collect nectar from flowers.'],['Which season is usually the coldest?',['Winter','Summer','Spring','Autumn'],0,'Winter is usually the coldest season.'],['What do we call water falling from clouds?',['Rain','Smoke','Dust','Steam'],0,'Rain falls from clouds as drops of water.'],
      ['Which animal is known as the king of the jungle?',['Lion','Deer','Panda','Horse'],0,'The lion is often called the king of the jungle.'],['What is the green pigment in leaves called?',['Chlorophyll','Protein','Sugar','Calcium'],0,'Chlorophyll helps plants capture sunlight.'],['Which animal changes colour to hide?',['Chameleon','Cow','Sheep','Penguin'],0,'A chameleon can change its skin colour.'],['What do caterpillars become?',['Butterflies or moths','Fish','Birds','Frogs'],0,'Many caterpillars transform into butterflies or moths.'],['Which part of the body helps a bird fly?',['Wings','Fins','Paws','Horns'],0,'Birds use their wings to fly.']
    ];
    const spaceQuestions = [
      ['Which planet do we live on?',['Earth','Mars','Venus','Jupiter'],0,'We live on planet Earth.'],['What shines in the daytime sky?',['The Sun','The Moon','Mars','A comet'],0,'The Sun is our star.'],['What is Earth’s natural satellite?',['The Moon','The Sun','Saturn','Venus'],0,'The Moon travels around Earth.'],['Which planet is called the Red Planet?',['Mars','Neptune','Earth','Mercury'],0,'Mars looks reddish because of iron-rich dust.'],['What do astronauts travel in?',['Spacecraft','Submarine','Tractor','Bicycle'],0,'Astronauts use spacecraft to travel into space.'],
      ['Which is the biggest planet in our solar system?',['Jupiter','Earth','Mars','Mercury'],0,'Jupiter is the largest planet in our solar system.'],['What do we call a group of stars forming a pattern?',['Constellation','Ocean','Forest','Volcano'],0,'A constellation is a pattern of stars.'],['Which planet has famous rings?',['Saturn','Mercury','Earth','Mars'],0,'Saturn is famous for its bright rings.'],['Does the Moon make its own light?',['No, it reflects sunlight','Yes, like the Sun','It uses electricity','It burns fire'],0,'The Moon reflects light from the Sun.'],['What is the name of our galaxy?',['Milky Way','Andromeda only','Solar Road','Star River'],0,'Our solar system is in the Milky Way galaxy.'],
      ['Which planet is closest to the Sun?',['Mercury','Neptune','Saturn','Earth'],0,'Mercury is the closest planet to the Sun.'],['What keeps planets in orbit around the Sun?',['Gravity','Sound','Wind','Rain'],0,'Gravity helps keep planets in orbit.'],['What is a person who travels to space called?',['Astronaut','Sailor','Pilot fish','Geologist'],0,'A person trained to travel in space is an astronaut.'],['Which planet is famous for its Great Red Spot?',['Jupiter','Venus','Earth','Uranus'],0,'Jupiter has a giant storm called the Great Red Spot.'],['What is at the centre of our solar system?',['The Sun','Earth','The Moon','Saturn'],0,'The Sun is at the centre of our solar system.']
    ];
    const state = {view:'home',categoryId:null,gameId:null,level:1,questions:[],questionIndex:0,score:0,answered:false,firstCard:null,boardLocked:false,matches:0,wrongAttempts:0};
    const STORAGE_KEY='kidsfun-academy-progress-v1';
    let progress = loadProgress();
    function loadProgress(){try{return JSON.parse(localStorage.getItem(STORAGE_KEY))||{completed:{},best:{},last:null,theme:'light'}}catch{return {completed:{},best:{},last:null,theme:'light'}}}
    function saveProgress(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(progress))}catch(e){console.warn('Progress could not be saved in this browser.',e)}}
    function getGame(id){return games.find(g=>g.id===id)}
    function getCategory(id){return categories.find(c=>c.id===id)}
    function completedLevels(id){return progress.completed[id]||[]}
    function isUnlocked(id,level){return level===1||completedLevels(id).includes(level-1)}
    function gameCompletion(id){return completedLevels(id).length}
    function totalCompleted(){return Object.values(progress.completed).reduce((sum,arr)=>sum+arr.length,0)}
    function escapeHtml(value){return String(value).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]))}
    function shuffle(arr){const copy=[...arr];for(let i=copy.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[copy[i],copy[j]]=[copy[j],copy[i]]}return copy}
    function uniqueOptions(answer,extras){return shuffle([...new Set([String(answer),...extras.map(String)])].slice(0,4))}
    function q(prompt,answer,extras,explanation=''){const options=uniqueOptions(answer,extras);return {prompt,options,answer:String(answer),explanation}}
    function makeQuestions(gameId,level){
      const list=[];
      if(gameId==='addition'){
        for(let i=0;i<5;i++){const a=level*4+i*3+2,b=level*2+i+3,sub=(level>=3&&i%2===1),answer=sub?a-b:a+b;list.push(q(sub?`What is ${a} − ${b}?`:`What is ${a} + ${b}?`,answer,[answer+1,answer-1,answer+3],`The answer is ${answer}.`))}
      }else if(gameId==='tables'){
        for(let i=0;i<5;i++){const a=2+level+i,b=2+((i+level)%5),answer=a*b;list.push(q(`What is ${a} × ${b}?`,answer,[answer+2,answer-2,answer+5],`${a} groups of ${b} make ${answer}.`))}
      }else if(gameId==='number-pattern'||gameId==='pattern-master'){
        for(let i=0;i<5;i++){const step=level+i+2,start=(i+1)*level+1,seq=[0,1,2,3].map(n=>start+n*step),answer=start+4*step;list.push(q(`Find the next number: ${seq.join('  ·  ')}  ·  ?`,answer,[answer+step,answer-1,answer+2],`The pattern adds ${step} each time.`))}
      }else if(gameId==='word-explorer'){
        const offset=(level-1)*5;for(let i=0;i<5;i++){const item=vocab[(offset+i)%vocab.length];list.push(q(`What does “${item[0]}” mean?`,item[1],item[2].filter(x=>x!==item[1]),`“${item[0]}” means ${item[1].toLowerCase()}.`))}
      }else if(gameId==='nature-detective'||gameId==='space-ranger'){
        const bank=gameId==='nature-detective'?natureQuestions:spaceQuestions,offset=(level-1)*5;for(let i=0;i<5;i++){const item=bank[(offset+i)%bank.length];list.push({prompt:item[0],options:shuffle(item[1]),answer:item[1][item[2]],explanation:item[3]})}
      }
      return list;
    }
    function makeSpellQuestions(level){return spellingWords.slice((level-1)*5,level*5).map(([word,clue])=>({answer:word,clue,scramble:scrambleWord(word)}))}
    function scrambleWord(word){let mixed=word.split('');for(let tries=0;tries<8&&mixed.join('')===word;tries++)mixed=shuffle(mixed);return mixed.join('').toUpperCase()}
    function notify(message){const toast=document.getElementById('toast');toast.textContent=message;toast.classList.add('show');clearTimeout(notify.timer);notify.timer=setTimeout(()=>toast.classList.remove('show'),2300)}
    function setTheme(theme){document.documentElement.dataset.theme=theme;progress.theme=theme;saveProgress();document.getElementById('themeBtn').textContent=theme==='dark'?'☀️':'🌙';document.getElementById('themeBtn').title=theme==='dark'?'Switch to light theme':'Switch to dark theme'}
    function render(){
      const main=document.getElementById('appMain'),back=document.getElementById('backBtn'),label=document.getElementById('navLabel');
      back.classList.toggle('visible',state.view!=='home');
      label.textContent=state.view==='home'?'A happy place to learn and play':state.view==='category'?getCategory(state.categoryId).name:state.view==='game'?getGame(state.gameId).name:state.view==='play'?`${getGame(state.gameId).name} · Level ${state.level}`:'Learning adventure';
      if(state.view==='home')main.innerHTML=homeScreen();
      if(state.view==='category')main.innerHTML=categoryScreen();
      if(state.view==='game')main.innerHTML=gameScreen();
      if(state.view==='play')main.innerHTML=playScreen();
      window.scrollTo({top:0,behavior:'smooth'});
      bindScreenEvents();
    }
    function homeScreen(){
      const last=progress.last?getGame(progress.last):null;
      return `<div class="screen">
        <section class="hero"><div class="hero-copy"><span class="eyebrow">✨ LEARN · PLAY · GROW</span><h1>Big ideas for <span style="color:var(--primary-2)">little minds!</span></h1><p>Welcome to your learning playground. Explore fun games, unlock new levels and become a Maths, English, Science and Brain Games champion.</p><div class="hero-actions"><button class="btn btn-primary" data-action="explore">Explore games <span>→</span></button><button class="btn btn-secondary" data-action="continue">▶ Continue playing</button></div><p class="small" style="margin:17px 0 0;font-weight:800">🎈 Made for curious learners ages 5–10</p></div><div class="hero-visual"><div class="hero-orbit">📚</div><div class="hero-float float-a">⭐ Super learner!</div><div class="hero-float float-b">🚀 Ready, set, learn!</div><div class="hero-float float-c">✨</div></div></section>
        <div class="quick-stats"><div class="stat"><strong>${totalCompleted()}</strong><span>LEVELS COMPLETED</span></div><div class="stat"><strong>${games.length}</strong><span>FUN GAMES</span></div><div class="stat"><strong>4</strong><span>LEARNING WORLDS</span></div></div>
        ${last?`<section><div class="section-heading"><div><h2>Pick up where you left off</h2><p>Your last learning adventure is ready.</p></div></div><div class="continue-card"><div class="continue-emoji">${last.icon}</div><div class="continue-info"><b>${last.name}</b><span>${gameCompletion(last.id)} of 5 levels completed</span></div><button class="btn btn-primary" data-action="continue">Continue →</button></div></section>`:''}
        <section><div class="section-heading"><div><h2>Choose your learning world</h2><p>Tap a category to discover its games.</p></div></div><div class="category-grid">${categories.map(c=>`<button class="category-card" data-category="${c.id}" type="button"><span class="category-icon" style="background:${c.color}">${c.icon}</span><h3>${c.name}</h3><p>${c.description}</p><span class="category-meta">${c.games.length} GAMES &nbsp;·&nbsp; EXPLORE →</span></button>`).join('')}</div></section>
      </div>`;
    }
    function categoryScreen(){
      const category=getCategory(state.categoryId);if(!category)return homeScreen();
      return `<div class="screen"><div class="page-intro"><div><span class="eyebrow">${category.icon} LEARNING CATEGORY</span><h1 style="font-size:clamp(35px,4vw,49px);margin:13px 0 8px">${category.name}</h1><p>${category.description}</p></div><div class="small muted" style="font-weight:900">${category.games.length} games to explore</div></div><div class="game-grid">${category.games.map(id=>gameCard(getGame(id))).join('')}</div></div>`;
    }
    function gameCard(game){
      const done=gameCompletion(game.id),next=Math.min(5,done+1);
      return `<article class="game-card"><div class="game-card-top"><span class="game-emoji" style="background:${game.color}">${game.icon}</span><span class="mode-pill">${game.modeLabel}</span></div><h3>${game.name}</h3><p>${game.description}</p><div class="game-card-bottom"><span class="game-progress">${done}/5 LEVELS COMPLETE</span><button class="btn btn-primary" style="padding:10px 13px;font-size:12px" data-game="${game.id}">Open game →</button></div></article>`;
    }
    function gameScreen(){
      const game=getGame(state.gameId);if(!game)return homeScreen();const done=gameCompletion(game.id),unlocked=Math.min(5,done+1);
      return `<div class="screen"><div class="page-intro"><div><span class="eyebrow">🎮 GAME LOBBY</span><h1 style="font-size:clamp(35px,4vw,49px);margin:13px 0 8px">${game.name}</h1><p>Complete each level to unlock the next one.</p></div><span class="small muted" style="font-weight:900">${done}/5 levels completed</span></div>
        <div class="detail-panel"><div class="detail-summary"><div class="detail-icon" style="background:${game.color}">${game.icon}</div><h2 style="font-size:25px">Ready to play?</h2><p>${game.description}</p><div class="detail-badges"><span>👧 Ages 5–10</span><span>⭐ 5 levels</span><span>🎯 ${game.modeLabel}</span></div><p style="font-weight:900;color:var(--text);margin-bottom:16px">How to play</p><p>${game.how}</p><button class="btn btn-primary" data-start-level="${unlocked}" ${unlocked>5?'disabled':''}>${done===5?'Replay level 5':'Play level '+unlocked} →</button></div>
        <div class="levels-panel"><div class="levels-title"><h3>Choose a level</h3><span>${done} completed · ${5-done} to go</span></div><p class="small muted">🔐 Finish a level successfully to unlock the next challenge.</p><div class="levels-grid">${[1,2,3,4,5].map(level=>{const isDone=completedLevels(game.id).includes(level),open=isUnlocked(game.id,level);return `<button type="button" class="level-tile ${isDone?'done':open?'current':''}" data-start-level="${level}" ${open?'':'disabled'}><span class="level-number">${isDone?'★':open?level:'🔒'}</span><span class="level-status">${isDone?'DONE':open?'PLAY':'LOCKED'}</span></button>`}).join('')}</div><div class="level-legend"><span><i class="dot done"></i>Completed</span><span><i class="dot"></i>Available</span><span><i class="dot lock"></i>Locked</span></div></div></div>
      </div>`;
    }
    function playScreen(){
      const game=getGame(state.gameId);if(!game)return homeScreen();
      if(game.mode==='memory')return memoryPlayScreen(game);
      if(game.mode==='scramble')return scramblePlayScreen(game);
      return quizPlayScreen(game);
    }
    function playHeader(game,total,progressIndex){return `<div class="play-top"><div class="play-title"><div class="play-icon" style="background:${game.color}">${game.icon}</div><div><h2>${game.name}</h2><span>LEVEL ${state.level} · ${game.modeLabel.toUpperCase()}</span></div></div><button class="btn btn-secondary" style="padding:9px 12px;font-size:12px" data-action="exit-play">✕ Exit</button></div><div class="play-card"><div class="play-progress-row"><span>Challenge ${progressIndex+1} of ${total}</span><span id="playScore">⭐ Score: ${state.score}</span></div><div class="progress-track"><div class="progress-fill" id="playProgress" style="width:${progressIndex/total*100}%"></div></div>`}
    function quizPlayScreen(game){
      const item=state.questions[state.questionIndex];if(!item)return '';
      return `<div class="screen play-shell">${playHeader(game,state.questions.length,state.questionIndex)}<div class="question-text" id="questionText">${item.prompt}</div><div class="answer-grid" id="answerGrid">${item.options.map(option=>`<button class="answer-option" data-answer="${escapeHtml(option)}">${escapeHtml(option)}</button>`).join('')}</div><div class="feedback" id="feedback" aria-live="polite"></div><div class="play-bottom"><span class="score-label">⭐ ${state.score} correct</span><button class="btn btn-primary" id="nextChallenge" disabled>${state.questionIndex===state.questions.length-1?'Finish level':'Next question →'}</button></div></div></div>`;
    }
    function scramblePlayScreen(game){
      const item=state.questions[state.questionIndex];if(!item)return '';
      return `<div class="screen play-shell">${playHeader(game,state.questions.length,state.questionIndex)}<div class="scramble-box"><div class="question-text">Unscramble the letters!</div><p class="muted" style="font-weight:800">💡 Clue: ${escapeHtml(item.clue)}</p><div class="scramble-word">${escapeHtml(item.scramble)}</div><input class="word-input" id="wordInput" type="text" autocomplete="off" autocapitalize="none" placeholder="Type your answer here" aria-label="Your answer" /><div class="feedback" id="feedback" aria-live="polite"></div><div class="play-bottom"><span class="score-label">⭐ ${state.score} correct</span><button class="btn btn-primary" id="checkWord">Check answer</button><button class="btn btn-primary" id="nextChallenge" disabled style="display:none">Next →</button></div></div></div></div>`;
    }
    function memoryPlayScreen(game){
      const pairs=state.memoryPairs||[];return `<div class="screen play-shell">${playHeader(game,pairs.length,state.matches)}<div class="question-text" style="text-align:center">Find all the matching pairs!</div><p class="muted small" style="text-align:center;margin-top:-10px">Tap two cards to turn them over.</p><div class="memory-grid" id="memoryGrid">${state.memoryDeck.map((card,index)=>`<button class="memory-card" data-card="${index}" aria-label="Memory card">${card.flipped||card.matched?card.symbol:'?'}</button>`).join('')}</div><div class="feedback" id="memoryFeedback" style="text-align:center" aria-live="polite">🧠 Matches: ${state.matches} / ${pairs.length}</div><div class="play-bottom"><span class="score-label">↩️ Tries: ${state.wrongAttempts}</span><button class="btn btn-secondary" data-action="restart-memory">Restart level</button></div></div></div>`;
    }
    function beginLevel(gameId,level){
      const game=getGame(gameId);if(!game)return;if(!isUnlocked(gameId,level)){notify('🔒 Complete the previous level first!');return;}
      state.gameId=gameId;state.level=level;state.questionIndex=0;state.score=0;state.answered=false;state.firstCard=null;state.boardLocked=false;state.matches=0;state.wrongAttempts=0;
      progress.last=gameId;saveProgress();
      if(game.mode==='memory')setupMemory(level);else if(game.mode==='scramble')state.questions=makeSpellQuestions(level);else state.questions=makeQuestions(gameId,level);
      state.view='play';render();
    }
    function setupMemory(level){
      const symbols=['🐶','🐱','🦊','🐸','🐼','🦁','🐵','🐰','🐯','🐨'];const count=Math.min(4+level,8);state.memoryPairs=symbols.slice(0,count);state.memoryDeck=shuffle(state.memoryPairs.flatMap((symbol,i)=>[{id:i+'a',pair:i,symbol,flipped:false,matched:false},{id:i+'b',pair:i,symbol,flipped:false,matched:false}]));
    }
    function bindScreenEvents(){
      document.querySelectorAll('[data-category]').forEach(el=>el.addEventListener('click',()=>openCategory(el.dataset.category)));
      document.querySelectorAll('[data-game]').forEach(el=>el.addEventListener('click',()=>openGame(el.dataset.game)));
      document.querySelectorAll('[data-start-level]').forEach(el=>el.addEventListener('click',()=>beginLevel(state.gameId,Number(el.dataset.startLevel))));
      document.querySelectorAll('[data-action]').forEach(el=>el.addEventListener('click',()=>handleAction(el.dataset.action)));
      document.querySelectorAll('[data-answer]').forEach(el=>el.addEventListener('click',()=>chooseQuizAnswer(el.dataset.answer,el)));
      const next=document.getElementById('nextChallenge');if(next)next.addEventListener('click',()=>advanceChallenge());
      const check=document.getElementById('checkWord');if(check)check.addEventListener('click',checkSpelling);
      const input=document.getElementById('wordInput');if(input)input.addEventListener('keydown',e=>{if(e.key==='Enter')checkSpelling()});
      document.querySelectorAll('[data-card]').forEach(el=>el.addEventListener('click',()=>flipMemoryCard(Number(el.dataset.card))));
    }
    function handleAction(action){
      if(action==='explore'){document.getElementById('appMain').querySelector('.category-grid')?.scrollIntoView({behavior:'smooth'});}
      if(action==='continue'){
        const id=progress.last||'addition';const game=getGame(id);if(game){state.gameId=id;state.view='game';render();}
      }
      if(action==='exit-play'){state.view='game';render();}
      if(action==='restart-memory'){beginLevel(state.gameId,state.level)}
    }
    function openCategory(id){state.categoryId=id;state.view='category';render()}
    function openGame(id){state.gameId=id;state.view='game';render()}
    function chooseQuizAnswer(answer,button){
      if(state.answered)return;state.answered=true;const item=state.questions[state.questionIndex];const correct=String(answer)===String(item.answer);if(correct)state.score++;
      document.querySelectorAll('[data-answer]').forEach(el=>{el.disabled=true;if(String(el.dataset.answer)===String(item.answer))el.classList.add('correct')});
      if(!correct)button.classList.add('incorrect');const feedback=document.getElementById('feedback');feedback.textContent=correct?`🎉 Brilliant! ${item.explanation||'That is correct.'}`:`💡 Good try! ${item.explanation||'The correct answer is '+item.answer+'.'}`;feedback.style.color=correct?'var(--green)':'var(--red)';
      document.getElementById('playScore').textContent=`⭐ Score: ${state.score}`;document.querySelector('.score-label').textContent=`⭐ ${state.score} correct`;
      document.getElementById('nextChallenge').disabled=false;
    }
    function checkSpelling(){
      if(state.answered)return;const input=document.getElementById('wordInput'),item=state.questions[state.questionIndex],given=input.value.trim().toLowerCase();if(!given){notify('Type your answer first 🙂');input.focus();return;}
      state.answered=true;const correct=given===item.answer.toLowerCase();if(correct)state.score++;input.disabled=true;const feedback=document.getElementById('feedback');feedback.textContent=correct?'🎉 Excellent spelling!':`Nice try! The word is “${item.answer}”.`;feedback.style.color=correct?'var(--green)':'var(--red)';
      document.getElementById('playScore').textContent=`⭐ Score: ${state.score}`;document.querySelector('.score-label').textContent=`⭐ ${state.score} correct`;
      const check=document.getElementById('checkWord');check.style.display='none';const next=document.getElementById('nextChallenge');next.style.display='inline-flex';next.disabled=false;next.textContent=state.questionIndex===state.questions.length-1?'Finish level':'Next word →';
    }
    function advanceChallenge(){
      if(!state.answered)return;state.questionIndex++;
      if(state.questionIndex>=state.questions.length){finishLevel(state.score,state.questions.length);return;}
      state.answered=false;render();
    }
    function finishLevel(score,total){
      const game=getGame(state.gameId),passed=score>=Math.ceil(total*.8);if(passed){const completed=completedLevels(game.id);if(!completed.includes(state.level))completed.push(state.level);progress.completed[game.id]=completed;progress.best[game.id]=Math.max(progress.best[game.id]||0,score);saveProgress();}
      const nextLevel=state.level+1;
      const resultTitle=passed?(state.level===5?'You completed every level!':'Level unlocked!'):'Almost there — try again!';
      const resultText=passed?(state.level===5?'Amazing work! You are a true learning champion.':'Fantastic! You passed this level. The next level is now unlocked.'):`You need ${Math.ceil(total*.8)} correct answers to pass. Practice once more and you can do it!`;
      document.getElementById('appMain').innerHTML=`<div class="screen play-shell"><div class="play-card result-panel"><div class="result-emoji">${passed?'🏆':'💪'}</div><span class="eyebrow">LEVEL ${state.level} RESULTS</span><h2>${resultTitle}</h2><div class="result-score">${score} / ${total}</div><p>${resultText}</p><div class="result-actions">${passed&&state.level<5?`<button class="btn btn-primary" id="resultNext">Play level ${nextLevel} →</button>`:''}<button class="btn btn-secondary" id="resultLevels">${passed?'Choose a level':'Try level again'}</button><button class="btn btn-soft" id="resultHome">Home</button></div></div></div>`;
      state.view='result';
      document.getElementById('resultNext')?.addEventListener('click',()=>beginLevel(game.id,nextLevel));
      document.getElementById('resultLevels').addEventListener('click',()=>{state.view='game';render()});
      document.getElementById('resultHome').addEventListener('click',()=>{state.view='home';render()});
      updateHeaderForResult();
    }
    function updateHeaderForResult(){document.getElementById('backBtn').classList.add('visible');document.getElementById('navLabel').textContent='Level complete';}
    function flipMemoryCard(index){
      if(state.boardLocked)return;const card=state.memoryDeck[index];if(!card||card.matched||card.flipped)return;
      card.flipped=true;renderMemoryBoard();
      if(state.firstCard===null){state.firstCard=index;return;}
      const first=state.memoryDeck[state.firstCard];state.wrongAttempts++;
      if(first.pair===card.pair){first.matched=true;card.matched=true;state.matches++;state.firstCard=null;renderMemoryBoard();if(state.matches===state.memoryPairs.length)setTimeout(()=>finishLevel(state.memoryPairs.length,state.memoryPairs.length),450);}
      else{state.boardLocked=true;const firstIndex=state.firstCard;state.firstCard=null;setTimeout(()=>{state.memoryDeck[firstIndex].flipped=false;state.memoryDeck[index].flipped=false;state.boardLocked=false;renderMemoryBoard()},750);}
    }
    function renderMemoryBoard(){
      const grid=document.getElementById('memoryGrid');if(!grid)return;grid.innerHTML=state.memoryDeck.map((card,index)=>`<button class="memory-card ${card.flipped?'flipped':''} ${card.matched?'matched':''}" data-card="${index}" aria-label="Memory card">${card.flipped||card.matched?card.symbol:'?'}</button>`).join('');
      grid.querySelectorAll('[data-card]').forEach(el=>el.addEventListener('click',()=>flipMemoryCard(Number(el.dataset.card))));
      document.getElementById('memoryFeedback').textContent=`🧠 Matches: ${state.matches} / ${state.memoryPairs.length}`;document.getElementById('playScore').textContent=`⭐ Matches: ${state.matches}`;document.querySelector('.score-label').textContent=`↩️ Tries: ${state.wrongAttempts}`;document.getElementById('playProgress').style.width=`${state.matches/state.memoryPairs.length*100}%`;
    }
    document.getElementById('backBtn').addEventListener('click',()=>{
      if(state.view==='play'||state.view==='result'){state.view='game';render();}
      else if(state.view==='game'){state.view='category';render();}
      else if(state.view==='category'){state.view='home';render();}
    });
    document.getElementById('brandHome').addEventListener('click',e=>{e.preventDefault();state.view='home';render()});
    document.getElementById('themeBtn').addEventListener('click',()=>setTheme(progress.theme==='dark'?'light':'dark'));
    setTheme(progress.theme||'light');render();
