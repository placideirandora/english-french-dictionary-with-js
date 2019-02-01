


	function Initialisation ()


							{

								for (var loop = 0; loop < dictionary.length; loop++)

								{


	document.getElementById('english-words-list').innerHTML += "<li onclick='display(" + loop + ")'>" + dictionary[loop].english_word +  "</li>";


								}


							}


function display(loop)

								{


										document.getElementById ('english-word-area').innerHTML = "<h1>" + dictionary[loop].english_word + "</h1>";
										document.getElementById ('english-example-area').innerHTML = "<p>" + dictionary[loop].english_word_example + "</p>";
										document.getElementById ('french-word-area').innerHTML = "<h1>" + dictionary[loop].french_word + "</h1>";
										document.getElementById ('french-example-area').innerHTML = "<p>" + dictionary[loop].french_word_example + "</p>";
								}




				function search()


						{
							

							var word_to_find = document.getElementById("search-word").value;


							if (word_to_find == "")


							{


								alert ("No word found inside. Type in a word and try again!");


							}


							else {



							for (var loop = 0; loop < dictionary.length; loop++ )


									{


										if (dictionary[loop].english_word == word_to_find)

										{


											document.getElementById('english-word-area').innerHTML = "<h1>" + dictionary[loop].english_word + "</h1>";
											document.getElementById('english-example-area').innerHTML = "<p>" + dictionary[loop].english_word_example + "</p>";
											document.getElementById('french-word-area').innerHTML = "<h1>" + dictionary[loop].french_word + "</h1>";
											document.getElementById('french-example-area').innerHTML = "<p>" + dictionary[loop].french_word_example + "</p>";
											

											break;

										}


										else


										{

											document.getElementById('english-word-area').innerHTML = "<h1> WORD NOT FOUND </h1>";
											document.getElementById('english-example-area').innerHTML = "<p> Make sure that the word is written in upper case. If it is, The word is not currently included in this version 1.0 of the dictionary.</p>";
											document.getElementById('french-word-area').innerHTML = "<h1> MOT NON TROUV&Eacute </h1>";
											document.getElementById('french-example-area').innerHTML = "<p> Soyez s&ucirc;r que le mot est &eacutecrit en majuscule. S'il est, Le mot n'est pas actuellement inclus dans cette version 1.0 du dictionnaire.</p>";
											


										}




									}


								}









						}




			var dictionary = [


									{

										english_word: "ABANDON",
										english_word_example: "He abandoned his motorbike in the mud.",
										french_word: "ABANDONNER",
										french_word_example: "Il a abandonn&#233 sa moto dans la boue."

									},


									{

										english_word: "ABBREVIATION",
										english_word_example: "UNIV is an abbreviation for 'university'.",
										french_word: "ABR&#201VIATION",
										french_word_example: "UNIV est une abr&#233viation de &laquouniversit&eacute&raquo."

									},



									{

										english_word: "ABILITY",
										english_word_example: "He has the ability to win the match, but he must be careful.",
										french_word: "CAPACIT&#201",
										french_word_example: "Il a la capacit&#233 de gagner le match, mais il faut &#234tre prudent."

									},


									{

										english_word: "ABOVE",
										english_word_example: "Our television is above the cupboard.",
										french_word: "AU-DESSUS",
										french_word_example: "Notre t&#233l&#233vision est au-dessus de l'armoire."
										

									},




									{

										english_word: "ABROAD",
										english_word_example: "My grandmother lives abroad.",
										french_word: "&#192 L'&#201TRANGER",
										french_word_example: "Ma grande-m&#232re habite &#224 l'&#233tranger."

									}, 



									{

										english_word: "ABSENCE",
										english_word_example: "I will train you in the absence of your coach.",
										french_word: "ABSENCE",
										french_word_example: "Je vous entra&#238nerai en l'absence de votre entra&#238neur."

									},



									{

										english_word: "ACCEPT",
										english_word_example: "She accepted to visit me in the next week.",
										french_word: "ACCEPTER",
										french_word_example: "Elle a accept&#233e de me visiter dans la semaine prochaine."

									},

									{

										english_word: "ACCESS",
										english_word_example: "I don't have computer access at school.",
										french_word: "ACC&#200S",
										french_word_example: "Je n'ai pas d'acc&#232s &#224 utiliser les ordinateurs de l'&#233cole."

									},


									{

										english_word: "ACCIDENT",
										english_word_example: "They died in a car accident.",
										french_word: "ACCIDENT",
										french_word_example: "Ils mourraient dans un accident de voiture."

									},

									{

										english_word: "ACCOMPANY",
										english_word_example: "When you go to the city, I will accompany you.",
										french_word: "ACCOMPAGNER",
										french_word_example: "Quand tu vas dans la ville, Je t'accompagnerai."

									},


									{

										english_word: "ACCOMPLISH",
										english_word_example: "The soldiers have accomplished their mission.",
										french_word: "ACCOMPLIR",
										french_word_example: "Les soldats ont accompli leur mission."

									},

									{

										english_word: "ACCOUNT",
										english_word_example: "I have opened a new bank account.",
										french_word: "COMPTE",
										french_word_example: "J'ai ouvri un nouveau compte bancaire."

									},

									{

										english_word: "ACCOUNTANT",
										english_word_example: "My sister is an accountant at a local company.",
										french_word: "COMPTABLE",
										french_word_example: "Ma s&#156ur est une comptable d'une soci&eacutet&eacute locale."

									},

									{

										english_word: "ACCOUNTING",
										english_word_example: "She studied accounting at the university.",
										french_word: "COMPTABILIT&Eacute",
										french_word_example: "Elle &eacutetudait la comptabilit&eacute dans l'universit&eacute."

									},


									{

										english_word: "ACCURACY",
										english_word_example: "Accuracy is one of the computer's characteristics.",
										french_word: "EXACTITUDE",
										french_word_example: "Exactitude est l'une des caract&eacuteristiques d'ordinateur."

									},


									{

										english_word: "ACCURATE",
										english_word_example: "The found information is really accurate.",
										french_word: "EXACT/EXACTE",
										french_word_example: "Les informations trouv&eacutees sont vraiment exactes."

									},


									{

										english_word: "ACCUSE",
										english_word_example: "We will accuse any students who have stolen our notebooks.",
										french_word: "ACCUSER",
										french_word_example: "Nous accuserons n'importe quels &eacutetudiants qui ont vol&eacute nos cahiers de notes."

									},

									{

										english_word: "ACCUSTOM",
										english_word_example: "I'm acustomed to get home early.",
										french_word: "HABITUER",
										french_word_example: "Je suis habitu&eacute &agrave rentrer chez moi t&ocirct."

									},


									{

										english_word: "ACRONYM",
										english_word_example: "PI is the acronym of my name 'Placide IRANDORA'.",
										french_word: "SIGLE",
										french_word_example: "PI est le sigle de mon nom 'Placide IRANDORA'."

									},


									{

										english_word: "ACTOR",
										english_word_example: "Jack is the main actor in the movie 'Titanic'.",
										french_word: "ACTEUR/ACTRICE",
										french_word_example: "Jacques est l'acteur principal dans le film 'Titanic'."

									},


									{

										english_word: "ACTUALLY",
										english_word_example: "That stone looks like a diamond. But actually, It's a normal stone.",
										french_word: "R&EacuteELLEMENT",
										french_word_example: "Cette pierre-l&agrave ressemble un diamant. Mais r&eacuteellement, C'est une pierre normale."

									},


									{

										english_word: "ADAPT",
										english_word_example: "I have adapted myself to the new job.",
										french_word: "ADAPTER",
										french_word_example: "Je me suis adapt&eacute au nouvel emploi."

									},


									{

										english_word: "ADD",
										english_word_example: "Add more little water to make the food delicious.",
										french_word: "AJOUTER",
										french_word_example: "Ajoutez un peu d'eau pour faire la nourriture d&eacutelicieuse."

									},


									{

										english_word: "ADDRESS",
										english_word_example: "Tell me your address. I live in Kigali, Rwanda.",
										french_word: "ADRESSE",
										french_word_example: "Dis-moi ton adresse. J'habite &agrave Kigali, Rwanda."

									},


									{

										english_word: "ADEQUATE",
										english_word_example: "The refugees don't have adequate food to live.",
										french_word: "SUFFISANT/SUFFISANTE",
										french_word_example: "Les r&eacutefugi&eacutes n'ont pas de nourriture suffisante pour vivre."

									},


									{

										english_word: "ADJUST",
										english_word_example: "I've called a technician to adjust my satellite dish.",
										french_word: "R&EacuteGLER",
										french_word_example: "J'ai t&eacutel&eacutephon&eacute un technicien pour r&eacutegler mon antenne parabolique."

									},

									{

										english_word: "ADMIRE",
										english_word_example: "My children admire that choir. It sings well.",
										french_word: "ADMIRER",
										french_word_example: "Mes enfants admirent cette chorale-l&agrave. Elle chante bien."

									},


									{

										english_word: "ADMIT",
										english_word_example: "He refused to admit that he has committed the crime.",
										french_word: "ADMETTRE",
										french_word_example: "Il a refus&eacute d'admettre qu'il a commis le crime."

									},


									{

										english_word: "ADOLESCENT",
										english_word_example: "The adolescents are curious to try out everything. They have to be careful.",
										french_word: "ADOLESCENT/ADOLESCENTE",
										french_word_example: "Les adolescents sont curieux d'essayer presque toutes les choses. Ils doivent &ecirctre prudents."

									},


									{

										english_word: "ADORE",
										english_word_example: "I adore my familly. It makes me happy.",
										french_word: "ADORER",
										french_word_example: "J'adore ma famille. Elle me fait heureux."

									},


									{

										english_word: "BABY",
										english_word_example: "I like babies.",
										french_word: "B&#201B&#201",
										french_word_example: "j'aime les b&#233b&#233s."

									},



									{

										english_word: "BAD",
										english_word_example: "That's a bad idea to steal other people's money.",
										french_word: "MAUVAIS/MAUVAISE",
										french_word_example: "C'est une mauvaise id&#233e de voler l'argent d'autres gens."

									},


									{

										english_word: "BALL",
										english_word_example: "We are playing a ball.",
										french_word: "BALLON",
										french_word_example: "Nous jouons &agrave un ballon."

									},


									{

										english_word: "BAMBOO",
										english_word_example: "We passed through a bamboo forest in the holidays.",
										french_word: "BAMBOU",
										french_word_example: "Nous passions &#224 travers d'une for&#234t de bambou pendant les vacances."

									},



									{

										english_word: "BANDAGE",
										english_word_example: "I put a bandage where my leg was broken.",
										french_word: "BANDE",
										french_word_example: "J'ai mis une bande o&#249 la jambe &#233tait cass&#233e."

									},



									


									{

										english_word: "BANDIT",
										english_word_example: "Peter's money was stolen by bandits.",
										french_word: "BANDIT",
										french_word_example: "L'argent de Pi&#232rre est vol&#233 par des bandits."

									},


									{

										english_word: "BANK",
										english_word_example: "I am going to the bank to withdraw some money.",
										french_word: "BANQUE",
										french_word_example: "Je vais &#224 la banque pour retirer de l'argent."

									},


									{

										english_word: "BASKET",
										english_word_example: "The tomatoes are in the basket.",
										french_word: "PANIER",
										french_word_example: "Les tomates sont dans le panier."

									},




									{

										english_word: "BATHE",
										english_word_example: "Jane is taking a bathe.",
										french_word: "BAIGNER",
										french_word_example: "Jeanne se baigne."

									},



									{

										english_word: "BATTERY",
										english_word_example: "My phone's battery is strong.",
										french_word: "BATTERIE",
										french_word_example: "La batterie de mon t&#233l&#233phone est forte."

									},

											{

										english_word: "BATTLE",
										english_word_example: "I don't know who will win the battle.",
										french_word: "BATAILLE",
										french_word_example: "Je ne sais pas qui va gagner la bataille."

									},


									{

										english_word: "BEACH",
										english_word_example: "They are relaxing at the beach.",
										french_word: "PLAGE",
										french_word_example: "Ils se reposent sur la plage."

									},

									{

										english_word: "BEAN",
										english_word_example: "Today, We'll eat beans and rice.",
										french_word: "HARICOT",
										french_word_example: "Aujourd'hui, On va manger des haricots et du riz."

									},



									{

										english_word: "BEARD",
										english_word_example: "When you'll have a beard, You'll have come old!",
										french_word: "BARBE",
										french_word_example: "Quand tu porteras la barbe, Tu sera devenu vieux!"

									},


									{

										english_word: "BEAST",
										english_word_example: "Have you watched a movie called 'The Beauty And The Beast?' Yes, I have. It's great!",
										french_word: "B&EcircTE",
										french_word_example: "Avez-vous regard&eacute un film qui s'appele &laquoLa Belle Et La B&ecirc;te?&raquo D'Accord. Il est formidable!"

									},


									{

										english_word: "BEAT",
										english_word_example: "To kill a snake, You beat it on the head.",
										french_word: "BATTRE",
										french_word_example: "Pour tuer un serpant, Il faut le battre sur la t&ecircte."

									},


									{

										english_word: "BEAUTIFUL",
										english_word_example: "What a beautiful lady!",
										french_word: "BEAU/BELLE",
										french_word_example: "Quelle belle dame!"

									},


									{

										english_word: "BEAUTY",
										english_word_example: "They say that the beauty of a woman is in her hair.",
										french_word: "BEAUT&Eacute",
										french_word_example: "Ils disent que la beaut&eacute d'une femme se trouve dans les cheveux."

									},


									{

										english_word: "BECAUSE",
										english_word_example: "I haven't gone to school because i'm sick.",
										french_word: "PARCE QUE",
										french_word_example: "Je ne suis pas all&eacute &agrave l'&eacutecole parce que je suis malade."

									},


									{

										english_word: "BED",
										english_word_example: "Never forget to always make the bed whenever you wake up.",
										french_word: "LIT",
										french_word_example: "N'oubliez jamais faire le lit chaque fois que tu te l&egraveves."

									},

									{

										english_word: "BEE",
										english_word_example: "I enjoy eating the bees' honey.",
										french_word: "ABEILLE",
										french_word_example: "J'aime manger le miel des abeilles."

									},

									{

										english_word: "BEER",
										english_word_example: "My mother and i enjoy drinking beer!",
										french_word: "BI&EgraveRE",
										french_word_example: "Moi et ma m&egravere aime boire de la bi&egravere!"

									},


									{

										english_word: "BEFORE",
										english_word_example: "Before you leave, I would like to wish you a nice journey.",
										french_word: "AVANT",
										french_word_example: "Avant de partir, Je voudrais vous souhaite un bon voyage."

									},


									{

										english_word: "BEGIN",
										english_word_example: "Let us begin the match.",
										french_word: "COMMENCER/D&EacuteBUTER",
										french_word_example: "Laissons-nous commencer le match."

									},



									{

										english_word: "BEGINNING",
										english_word_example: "It is the beginning, Not the end.",
										french_word: "D&EacuteBUT/COMMENCEMENT",
										french_word_example: "C'est le d&eacutebut, Pas la fin."

									},


									{

										english_word: "BEHAVE",
										english_word_example: "Your children behave well at the school.",
										french_word: "SE CONDUIRE/SE COMPORTER",
										french_word_example: "Vos enfants se comportent bien &agrave l'&eacutecole."

									},

									{

										english_word: "BEHAVIOUR",
										english_word_example: "The students who don't get a half marks of behaviour are expelled yearly.",
										french_word: "CONDUITE",
										french_word_example: "Les &eacutel&egraveves qui n'obtiennent pas une moiti&eacute des points de conduite sont renvoy&eacutes annuellement."

									},


									{

										english_word: "BEHIND",
										english_word_example: "Go and bring me a stick which is behind the door.",
										french_word: "DERRI&EgraveRE",
										french_word_example: "Vas m'amener un b&acircton qui est derri&egravere la porte."

									},


									{

										english_word: "BELGIUM",
										english_word_example: "Belgium colonised african countries.",
										french_word: "BELGIQUE",
										french_word_example: "La Belgique colonisait des pays africains."

									},


									{

										english_word: "BELGIAN",
										english_word_example: "He studied at the belgian school.",
										french_word: "BELGE",
										french_word_example: "Il &eacutetudait &agrave l'&eacutecole belge."

									},


									{

										english_word: "CABBAGE",
										english_word_example: "We often eat cabbages at school.",
										french_word: "CHOU",
										french_word_example: "Nous mangeons souvent des choux &agrave l'&eacutecole."

									},


									{

										english_word: "CABLE",
										english_word_example: "My father is looking for his computer cable.",
										french_word: "C&AcircBLE",
										french_word_example: "Mon p&egravere cherche son c&acircble d'ordinateur."

									},


									{

										english_word: "CAKE",
										english_word_example: "Would he like a piece of cake?",
										french_word: "G&AcircTEAU",
										french_word_example: "Est-ce qu'il voudrait un morceau de g&acircteau?"

									},



									{

										english_word: "CALCULATE",
										english_word_example: "Calculate the sum of 100 plus 200.",
										french_word: "CALCULER",
										french_word_example: "Calculez la somme de 100 plus 200."

									},



									{

										english_word: "CALENDAR",
										english_word_example: "Have you got this year's calendar?",
										french_word: "CALENDRIER",
										french_word_example: "Avez-vous obtenu le calendrier de cette ann&eacutee?"

									},



									{

										english_word: "CALL",
										english_word_example: "I will call you later.",
										french_word: "APPELER",
										french_word_example: "Je t'appelerai plus tard."

									},


									{

										english_word: "CALM",
										english_word_example: "My son is always calm.",
										french_word: "CALME",
										french_word_example: "Mon fils est toujours calme."

									},


									{

										english_word: "CANCEL",
										english_word_example: "The meeting has been cancelled.",
										french_word: "ANNULER",
										french_word_example: "La r&eacuteunion a &eacutet&eacute annul&eacutee."

									},



									{

										english_word: "CANDIDATE",
										english_word_example: "She is a presidential candidate.",
										french_word: "CANDIDAT/CANDIDATE",
										french_word_example: "Elle est candidate pr&eacutesidentielle."

									},



									{

										english_word: "CANDLE",
										english_word_example: "Remind me to buy some candles at the market.",
										french_word: "BOUJIE",
										french_word_example: "Rappelez-moi d'ach&eacuteter des boujies au march&eacute."

									},



									{

										english_word: "CANTEEN",
										english_word_example: "I daily drink milk at the university's canteen.",
										french_word: "CANTINE",
										french_word_example: "Je bois du lait quotidiennement dans la cantine de l'universit&eacute."

									},


									{

										english_word: "CAPABLE",
										english_word_example: "Placide is capable to speak english and french well.",
										french_word: "CAPABLE",
										french_word_example: "Placide est capable de parler l'anglais et le fran&ccedilais bien."

									},


									{

										english_word: "CAPTAIN",
										english_word_example: "Eric is the captain of the team.",
										french_word: "CAPTAINE",
										french_word_example: "&Eacuteric est le captaine de l'&eacutequipe."

									},


									{

										english_word: "CAPTION",
										english_word_example: "What does the caption of the photo says? It says, 'A beatiful landscape'.",
										french_word: "SOUS-TITRE",
										french_word_example: "&Agrave quoi dit le sous-titre de la photo? Il dit, &laquoUn bon paysage&raquo."

									},


									{

										english_word: "CAR",
										english_word_example: "When i get rich, I will buy a car.",
										french_word: "VOITURE",
										french_word_example: "Quand je deviendrai riche, J'ach&egraveterai une voiture."

									},

									{

										english_word: "CARD",
										english_word_example: "Tomorrow, We will get our student cards.",
										french_word: "CARTE",
										french_word_example: "Demain, Nous obtenerons nos cartes d'&eacutetudiants."

									},


									{

										english_word: "CARE",
										english_word_example: "Take care of your sister, She's sick.",
										french_word: "SOIN",
										french_word_example: "Prends soin de ta s&#156ur, Elle est malade."

									},


									{

										english_word: "CAREER",
										english_word_example: "I chose the career of computer science.",
										french_word: "CARRI&EgraveRE",
										french_word_example: "Je choisisais la carri&eacutere d'informatique."

									},


									{

										english_word: "CAREFUL",
										english_word_example: "Be careful when you try to jumb over the fence. You might break your leg.",
										french_word: "PRUDENT/PRUDENTE",
										french_word_example: "Sois prudent quand tu essaie de sauter la cl&ocircture. Tu peux casser la jambe."

									},


									{

										english_word: "CARELESS",
										english_word_example: "She's careless for revising the notes.",
										french_word: "N&EacuteGLIGENT/N&EacuteGLIGENTE",
										french_word_example: "Elle est n&eacutegligente pour r&eacuteviser les notes ."

									},



									{

										english_word: "CARESS",
										english_word_example: "Mike caresses his dog when it becomes angry, In order to calm it down.",
										french_word: "CARESSER",
										french_word_example: "Mike caresse son  chien quand il devient f&acircch&eacute, Pour le calmer."

									},


									{

										english_word: "CARPENTER",
										english_word_example: "We need a carpenter to repair the roof of our house.",
										french_word: "CHARPENTIER",
										french_word_example: "Nous avons b&eacutesoin d'un charpentier pour r&eacuteparer le toit de notre maison."

									},


									{

										english_word: "CARPENTRY",
										english_word_example: "You can study carpentry if you like to build with the woods.",
										french_word: "CHARPENTERIE",
										french_word_example: "Vous pouvez &eacutetudier la charpenterie si vous aimez b&acirctir avec les bois."

									},

									{

										english_word: "CARPET",
										english_word_example: "The winner of the match passed on the red carpet.",
										french_word: "TAPIS",
										french_word_example: "Le gagnant du jeu a pass&eacute sur le tapis rouge."

									},



									{

										english_word: "CARROT",
										english_word_example: "We cultivated carrots in our field.",
										french_word: "CAROTTE",
										french_word_example: "Nous avons cultiv&eacute des carottes dans notre champ."

									},

									{

										english_word: "CARRY",
										english_word_example: "That lorry is carrying 100 sacks of irish potatoes.",
										french_word: "PORTER",
										french_word_example: "Cette camion-l&agrave porte 100 sacs de pommes de terre."

									},


									{

										english_word: "CARTOON",
										english_word_example: "When i was young, I liked to watch the cartoons so much. But now, I'm old and like them a little.",
										french_word: "DESSIN ANIM&Eacute",
										french_word_example: "Quand j'&eacutetais p&eacutetit, J'aimais regarder les dessins anim&eacutes. Mais maintenant, Je suis devenu vieux et je les aime un peu."

									},


									{

										english_word: "CASHIER",
										english_word_example: "Her mother is a bank cashier.",
										french_word: "CAISSIER/CAISSI&EacuteRE",
										french_word_example: "Sa m&egravere est une caissi&egravere de banque."

									},

									{

										english_word: "CATCH",
										english_word_example: "Catch that man who's running away. He's a thief!",
										french_word: "ATTRAPER",
										french_word_example: "Attrapez cet homme-l&agrave qui court. Il est voleur!"

									},

									{

										english_word: "CATEGORY",
										english_word_example: "What is the category of this book? It is in the category of politics.",
										french_word: "CAT&EacuteGORIE",
										french_word_example: "Quelle est la cat&eacutegorie de ce livre? Il est dans la categorie de politique."

									},

									{

										english_word: "DAILY",
										english_word_example: "These photographs explain my daily life.",
										french_word: "QUOTIDIEN/QUOTIDIENNE",
										french_word_example: "Ces photos expliquent ma vie quotidienne."

									},




									{

										english_word: "DANCE",
										english_word_example: "They dance well.",
										french_word: "DANSER",
										french_word_example: "Ils dansent bien."

									},



									{

										english_word: "DATE",
										english_word_example: "What's the date today?",
										french_word: "DATE",
										french_word_example: "Nous sommes quelle date aujourd'hui?"

									},





									{

										english_word: "DAUGHTER",
										english_word_example: "My daughter is courgeous in whatever she does.",
										french_word: "FILLE",
										french_word_example: "Ma fille est courageuse dans ce qu'elle fait."

									},



									{

										english_word: "DAY",
										english_word_example: "How many days do you work in a week?",
										french_word: "JOUR",
										french_word_example: "Combien de jours vous travaillez dans une semaine?"

									},




									{

										english_word: "DEAD",
										english_word_example: "We found him dead.",
										french_word: "MORT/MORTE",
										french_word_example: "Nous l'avons trouv&eacute mort."

									},


									{

										english_word: "DEAF",
										english_word_example: "That oldman is deaf, He doesn't hear what you're telling him.",
										french_word: "SOURD/SOURDE",
										french_word_example: "Ce vieux-l&agrave est sourd, Il n'entend pas ce que vous le dis."

									},


									{

										english_word: "DEATH",
										english_word_example: "We all fear death.",
										french_word: "MORT",
										french_word_example: "Nous avons tous peur de la mort."

									},


									{

										english_word: "DEBT",
										english_word_example: "The promise is a debt.",
										french_word: "DETTE",
										french_word_example: "La promesse est une dette."



									},


									{

										english_word: "DECEMBER",
										english_word_example: "December is the last month of the year.",
										french_word: "D&EacuteCEMBRE",
										french_word_example: "D&eacutecembre est le dernier mois de l'ann&eacutee."



									},

									{

										english_word: "DECIDE",
										english_word_example: "I have decided to stay in my native country. So, I won't go to study abroad.",
										french_word: "D&EacuteCIDER",
										french_word_example: "J'ai d&eacutecid&eacute de rester dans mon pays natal. Alors, Je n'irai pas &eacutetudier &agrave l'&eacutetranger."



									},


									{

										english_word: "DECORATE",
										english_word_example: "They are decorating the hall in which the guests will be welcomed.",
										french_word: "D&EacuteCORER",
										french_word_example: "Ils d&eacutecorent la salle dans laquelle les invit&eacutes seront accueillis."



									},




									{

										english_word: "DECREASE",
										english_word_example: "The music is too loud. Can you decrease the volume, Please?",
										french_word: "DIMINUER",
										french_word_example: "La musique est trop forte. Pouvez-vous diminuer la volume, S'il vous pla&icirct?"



									},



									{

										english_word: "DEDICATE",
										english_word_example: "He dedicates this song to you as your huasband.",
										french_word: "D&EacuteDIER",
										french_word_example: "Il de&eacutedie cette cahnson &agrave toi comme ton mari."



									},


									{

										english_word: "DEDICATION",
										english_word_example: "My book has a dedication section in which i dedicated it to my family.",
										french_word: "D&EacuteDICACE",
										french_word_example: "Mon livre a une section de d&eacutedicace dans laquelle je l'ai d&eacutedi%eacute &agrave ma famille."



									},

									{

										english_word: "DEFAULT",
										english_word_example: "By default, The homepage of the website has a whitebackground color. But, You can change it, Later.",
										french_word: "D&EacuteFAUT",
										french_word_example: "Par d&eacutefaut, La page d'accueil du site internet a une couleur blanche d'arri&egravere-plan. Mais, Vous pouvez la changer, Plus-tard."



									},


									

									{

										english_word: "DEFEAT",
										english_word_example: "Our team has defeated yours. We're great!",
										french_word: "VAINCRE",
										french_word_example: "Notre &eacutequipe a vaincu la votre. Nous sommes formidables."



									},

									{

										english_word: "DEFINE",
										english_word_example: "May you define this term for me?",
										french_word: "D&EacuteFINIR",
										french_word_example: "Pouvez-vous d&efinir cette terme pour moi?"



									},


									{

										english_word: "DEFINITION",
										english_word_example: "What is the definition of this term?",
										french_word: "D&EacuteFINITION",
										french_word_example: "Quelle la d&eacutefinition de ce mot?"



									},

									{

										english_word: "DELETE",
										english_word_example: "Delete the files from the computer. They are confidential.",
										french_word: "SUPPRIMER",
										french_word_example: "Supprimez les fichiers de l'ordinateur. Ils sont confidentiels."



									},


									{

										english_word: "DELICIOUS",
										english_word_example: "I like to eat biscuits because they are delicious.",
										french_word: "D&EacuteLICIEUX/D&EacuteLICIEUSE",
										french_word_example: "j'aime manger des buiscuits parce qu'ils sont d&eacutelicieux."



									},

									{

										english_word: "DELIVER",
										english_word_example: "The goods have been delivered to the customer.",
										french_word: "LIVRER",
										french_word_example: "Les marchandises sont livr&eacutees au client."



									},

									{

										english_word: "DELIVERY",
										english_word_example: "The delivery of the food is at eleven o'clock, Before noon.",
										french_word: "LIVRAISON",
										french_word_example: "La livraison de la nourriture est &agrave onze heures pr&eacutecise, avant-midi."



									},

									{

										english_word: "DEMAND",
										english_word_example: "The employees are demanding for the increase of the salary.",
										french_word: "EXIGER",
										french_word_example: "Les employ&eacutes exigent l'augmentation du salaire."



									},


									{

										english_word: "DEMOCRACY",
										english_word_example: "In our country, We have democracy because people elect the leaders.",
										french_word: "D&EacuteMOCRACIE",
										french_word_example: "Dans notre pays, Nous avons la d&eacutemocracie parce que les gens &eacutelisent des les leadeurs."



									},


									{

										english_word: "EAGER",
										english_word_example: "I am eager to go back home.",
										french_word: "IMPATIENT/IMPATIENTE",
										french_word_example: "Je suis impatient de rentre &agrave la maison."

									},



									{

										english_word: "EAGLE",
										english_word_example: "The eagles' team have bitten the lions' team and won the match.",
										french_word: "AIGLE",
										french_word_example: "L'&eacutequipe des aigles a battu l'&eacutequipe des lions et gagn&eacutee le match."

									},



									{

										english_word: "EAR",
										english_word_example: "The elephants have big ears.",
										french_word: "OREILLE",
										french_word_example: "Les &eacutel&eacutephants ont des grandes oreilles."

									},



									{

										english_word: "EARLY",
										english_word_example: "I will visit you tomorrow early.",
										french_word: "T&OcircT",
										french_word_example: "Je te visiterai demain t&ocirct."

									},



									{

										english_word: "EARN",
										english_word_example: "How much money do you earn monthly?",
										french_word: "GAGNER",
										french_word_example: "Combien d'argent vous gagnez mensuellement?"

									},




									{

										english_word: "EARTH",
										english_word_example: "God created the earth.",
										french_word: "TERRE",
										french_word_example: "Dieu cr&eacuteait la terre."

									},



									{

										english_word: "EASILY",
										english_word_example: "I learnt computer programming easily.",
										french_word: "FACILEMENT",
										french_word_example: "J'apprenais la programmation facilement."

									},


									{

										english_word: "EAST",
										english_word_example: "The sun rises from the east and sets in the west.",
										french_word: "EST",
										french_word_example: "Le soleil se l&egraveve de l'est et se couche &agrave l'ouest."

									},



									{

										english_word: "EASTER",
										english_word_example: "Happy Easter!",
										french_word: "P&AcircQUES",
										french_word_example: "Joyeuses P&acircques!"

									},



									{

										english_word: "EASY",
										english_word_example: "It is not easy to pass exams while you haven't revised your notes.",
										french_word: "FACILE",
										french_word_example: "Ce n'est pas facile de r&eacuteussir des exams tandis que vous n'avez pas r&eacutevis&eacute vos notes."

									},



									{

										english_word: "FACE",
										english_word_example: "Is my face clean? Of course!",
										french_word: "VISAGE",
										french_word_example: "Est-ce que mon visage est propre? Bien s&ucircr!"

									},



									{

										english_word: "FACILITATE",
										english_word_example: "You have to read books because they will facilitate your learning.",
										french_word: "FACILITER",
										french_word_example: "Vous devez lire des livres parce qu'ils facilitent votre apprentissage."

									},




									{

										english_word: "FACTORY",
										english_word_example: "My big brother works in a computer factory.",
										french_word: "USINE",
										french_word_example: "Mon grand-fr&egravere travaille dans une usine d'ordinateur."

									},




									{

										english_word: "FACULTY",
										english_word_example: "Placide IRANDORA studies the faculty of information technology at the university of Rwanda.",
										french_word: "FACULT&Eacute",
										french_word_example: "Placide IRANDORA &eacutetudie la facult&eacute de technologie d'information dans l'universit&eacute du Rwanda."

									},



									{

										english_word: "FAIL",
										english_word_example: "You have failed your test.",
										french_word: "&EacuteCHOUER",
										french_word_example: "Tu as &eacutechou&eacute ton essai."

									},



									{

										english_word: "FAILURE",
										english_word_example: "Many students have got failures in physics.",
										french_word: "&EacuteCHEC",
										french_word_example: "Beaucoup d'&eacutetudiants ont obtenu des &eacutechecs en physique."

									},



									{

										english_word: "FAKE",
										english_word_example: "We didn't buy the diamonds, Because they were fake.",
										french_word: "FAUX/FAUSSE",
										french_word_example: "Nous n'avons pas ach&eacutet&eacute les diamants parce qu'ils &eacutetaient faux."

									},


									{

										english_word: "FALL",
										english_word_example: "This children has fallen over the ground and got dirty.",
										french_word: "TOMBER",
										french_word_example: "Cet enfant est tomb&eacute sur le sol et devenu sale."

									},



									{

										english_word: "FAMILIAR",
										english_word_example: "I am familiar with this countryside.",
										french_word: "FAMILIER/FAMILI&EgraveRE",
										french_word_example: "Je suis famili&egravere avec cette campagne."

									},



									{

										english_word: "FAMILIARISE",
										english_word_example: "She is familiarising herself with the new computer system.",
										french_word: "FAMILIARISER",
										french_word_example: "Elle se familiarise avec le nouveau syst&egraveme informatique."

									},


									/*{

										english_word: "FAMILY",
										english_word_example: "You have a good family.",
										french_word: "FAMILLE",
										french_word_example: "Tu as une bonne famille."

									},


									{

										english_word: "FAMINE",
										english_word_example: "The famine is spreading around the whole country.",
										french_word: "FAMINE",
										french_word_example: "La famine se propage dans partout le pays."

									},



									{

										english_word: "FAMOUS",
										english_word_example: "Tom has become famous at school.",
										french_word: "C&EacuteL&EgraveBRE",
										french_word_example: "Tom est devenu c&eacutel&egravebre &agrave l'&eacutecole."

									},*/


									{

										english_word: "GALLERY",
										english_word_example: "You can find good paintings in a gallery.",
										french_word: "GALLERIE",
										french_word_example: "Vous pouvez trouver des beaux tableaux dans une gallerie."

									},



									{

										english_word: "GAME",
										english_word_example: "We like to play video games.",
										french_word: "JEU",
										french_word_example: "Nous aimeons jouer aux jeux vid&eacuteos."

									},


									{

										english_word: "GARDEN",
										english_word_example: "There were beautiful flowers in the garden.",
										french_word: "JARDIN",
										french_word_example: "Il y a eu des bonnes fleurs dans le jardin."

									},



									{

										english_word: "GAS",
										english_word_example: "We use a gas cooker at home.",
										french_word: "GAZ",
										french_word_example: "Nous utilisons une cuisini&egravere &agrave gaz chez nous."

									},




									{

										english_word: "GENERALLY",
										english_word_example: "Generally, There are no problems with these products.",
										french_word: "G&EacuteN&EacuteRALLEMENT",
										french_word_example: "G&eacuten&eacuterallement, Il n'y a pas de probl&egravemes avec ces produits."

									},




									{

										english_word: "GEOGRAPHY",
										english_word_example: "I am good at geography.",
										french_word: "G&EacuteOGRAPHIE",
										french_word_example: "Je suis bon en g&eacuteographie."

									},




									{

										english_word: "GERMANY",
										english_word_example: "My family is going to Germany in the next month.",
										french_word: "ALLEMAGNE",
										french_word_example: "Ma famille va en Allemagne au mois suivante."

									},




									{

										english_word: "GET",
										english_word_example: "I have got good results.",
										french_word: "OBTENIR",
										french_word_example: "J'ai obtenu bons r&eacutesultats."

									},


									{

										english_word: "GHOST",
										english_word_example: "People believe that ghosts exist.",
										french_word: "FANT&OcircME",
										french_word_example: "Les gens croient que les fant&ocircmes existent."

									},



									{

										english_word: "GIRL",
										english_word_example: "How many girls do you have in your class? Twelve girls.",
										french_word: "FILLE",
										french_word_example: "Combien de filles avez-vous dans votre classe? Douze filles."

									},



									{

										english_word: "HABIT",
										english_word_example: "I have a habit of waking up at 6:00 o'clock in the morning.",
										french_word: "HABITUDE",
										french_word_example: "J'ai une habitude de me lever &agrave 6:00 heures du matin."

									},




									{

										english_word: "HACKER",
										english_word_example: "I wanted to become a computer hacker and i've become one!",
										french_word: "PIRATE INFORMATIQUE",
										french_word_example: "Je voulais devenir pirate informatique et je suis l'un!"

									},


									{

										english_word: "HAIR",
										english_word_example: "Go and comb your hair.",
										french_word: "CHEVEU",
										french_word_example: "Allez vous paigner les cheveux."

									},



									{

										english_word: "HALF",
										english_word_example: "She would like a half of an orange.",
										french_word: "MOITI&Eacute",
										french_word_example: "Elle voudrait une moiti&eacute d'une orange."

									},


									{

										english_word: "HALL",
										english_word_example: "A hall of meetings.",
										french_word: "SALLE",
										french_word_example: "Une salle de r&eacuteunions."

									},



									{

										english_word: "HAMMER",
										english_word_example: "Can you lend me your hammer because i want to fix a nail?",
										french_word: "MARTEAU",
										french_word_example: "Pouvez-vous me pr&ecircter votre marteau parce que je veux fixer un clou?"

									},



									{

										english_word: "HAND",
										english_word_example: "Wash your hands with a soap before you eat.",
										french_word: "MAIN",
										french_word_example: "Lavez les mains avec un savon avant de manger."

									},




									{

										english_word: "HANDSOME",
										english_word_example: "That man is handsome.",
										french_word: "BEAU",
										french_word_example: "Cet homme-l&agrave est beau."

									},




									{

										english_word: "HAPPEN",
										english_word_example: "What's happening here?",
										french_word: "SE PASSER",
										french_word_example: "Qu'est-ce qui se passe ici?"

									},




									{

										english_word: "HAPPINESS",
										english_word_example: "Happiness is only what i need in my life, Not money.",
										french_word: "BONHEUR",
										french_word_example: "Le bonheur est seulement ce que je veux dans ma vie, Pas d'argent."

									},



									{

										english_word: "IDEA",
										english_word_example: "I don't have any idea about how we can escape.",
										french_word: "ID&EacuteE",
										french_word_example: "Je n'aucune id&eacutee concernant comment nous pouvons nous &eacutechapper."



									},


									{

										english_word: "IDENTITY",
										english_word_example: "Show me your identity card.",
										french_word: "IDENTIT&Eacute",
										french_word_example: "Montrez-moi votre carte d'identit&eacute."



									},


									{

										english_word: "IDEOLOGY",
										english_word_example: "Anyone who spreads genocide ideologies will be condemned.",
										french_word: "ID&EacuteOLOGIE",
										french_word_example: "N'importe quelle personne qui propage les id&eacuteologies de g&eacutenocide sera condamn&eacute."



									},


									{

										english_word: "IDIOT",
										english_word_example: "If he has cheated, He is an idiot.",
										french_word: "IDIOT/IDIOTE",
										french_word_example: "S'il a trich&eacute, Il est idiot."



									},


									{

										english_word: "IF",
										english_word_example: "If I get money, I will buy a house.",
										french_word: "SI",
										french_word_example: "Si J'obtiens de l'argent, J'ach&egraveterai une maison."



									},



									{

										english_word: "IGNORE",
										english_word_example: "I called him, But, He ignored me.",
										french_word: "IGNORER",
										french_word_example: "Je l'ai appel&eacute, Mais, Il m'a ignor&eacute."



									},


									{

										english_word: "ILL",
										english_word_example: "My sister is ill.",
										french_word: "MALADE",
										french_word_example: "Ma s&#156ur est malade."



									},





									{

										english_word: "ILLEGAL",
										english_word_example: "Hacking into other people's computer systems without their permission is illegal.",
										french_word: "ILL&EacuteGAL",
										french_word_example: "Le piratage des syst&egravemes informatiques d'autres gens sans leur permission est ill&eacutegal."



									},




									{

										english_word: "ILLEGIBLE",
										english_word_example: "Her handwriting is illegible, I cannot read what she's writen.",
										french_word: "ILLISIBLE",
										french_word_example: "Sa criture est illisible, Je ne peux pas lire ce qu'elle a &eacutecrit."



									},




									{

										english_word: "ILLNESS",
										english_word_example: "We are trying to find a remedy to cure the illness.",
										french_word: "MALADIE",
										french_word_example: "Nous sommes en train de trouver un rem&egravede pour gu&eacuterir la maladie."



									},




									{

										english_word: "JANUARY",
										english_word_example: "The New Year's party takes place on the first January.",
										french_word: "JANVIER",
										french_word_example: "La f&ecircte de Bonne Ann&eacutee a lieu le premier Janvier."



									},




									{

										english_word: "JAPAN",
										english_word_example: "Japan is one of the developed countries of the world.",
										french_word: "JAPON",
										french_word_example: "Le Japon est l'un des pays d&eacutevelopp&eacutes du monde."



									},




									{

										english_word: "JEALOUS",
										english_word_example: "My young sister has become jealous because of my new dress.",
										french_word: "JALOUX/JALOUSE",
										french_word_example: "Ma p&eacutetite-s&#156ur est devenue jalouse &agrave cause de ma nouvelle robe."



									},




									{

										english_word: "JESUS",
										english_word_example: "The chritians believe that Jesus-Christ is the son of God.",
										french_word: "J&EacuteSUS",
										french_word_example: "Les chr&eacutetiens croient que le J&eacutesus-Christ est le fils de Dieu."



									},




									{

										english_word: "JOB",
										english_word_example: "I'm now jobless and still looking for a job.",
										french_word: "EMPLOI",
										french_word_example: "Je suis maintenant ch&ocircmeur et en train de chercher un emploi."



									},




									{

										english_word: "JOKE",
										english_word_example: "His jokes make me laugh!",
										french_word: "BLAGUE",
										french_word_example: "Ses blagues me font rire!"



									},



									{

										english_word: "JOURNALISM",
										english_word_example: "Jack will study journalism in the university.",
										french_word: "JOURNALISME",
										french_word_example: "Jacques &eacutetudiera le journalisme dans l'universit&eacute."



									},



									{

										english_word: "JOURNALIST",
										english_word_example: "I met two journalists looking for information about the accident.",
										french_word: "JOURNALISTE",
										french_word_example: "J'ai rencontr&eacute deux journalistes cherchant des informations sur l'accident."



									},




									{

										english_word: "JOURNEY",
										english_word_example: "Have a nice journey sir!",
										french_word: "VOYAGE",
										french_word_example: "Bon voyage monsieur!"



									},




									{

										english_word: "JUDGE",
										english_word_example: "Don't judge anyone without an evidence.",
										french_word: "JUDGER",
										french_word_example: "Ne judgez aucune personne sans une preuve."



									},



									{

										english_word: "KARATE",
										english_word_example: "My father practices karate.",
										french_word: "KARAT&Eacute",
										french_word_example: "Mon p&egravere pratique le karat&eacute."



									},

	

									{

										english_word: "KEBAB",
										english_word_example: "I enjoy eating kababs.",
										french_word: "BROCHETTE",
										french_word_example: "J'aime manger les brochettes."



									},




									{

										english_word: "KEY",
										english_word_example: "I have lost my key.",
										french_word: "CL&Eacute",
										french_word_example: "J'ai perdu ma cl&eacute."



									},




									{

										english_word: "KICK",
										english_word_example: "The policeman gave the thief a kick when he tried to escape.",
										french_word: "COUP DE PIED",
										french_word_example: "Le policier donnait un coup de pied au voleur quand il essayait de s'&eacutechapper."



									},





									{

										english_word: "KILL",
										english_word_example: "The president has been killed by an unidentified person.",
										french_word: "TUER",
										french_word_example: "Le pr&eacutesident a &eacutet&eacute tu&eacute par une personne non-identifi&eacutee."



									},



									{

										english_word: "KIND",
										english_word_example: "Your mother is kind.",
										french_word: "GENTIL/GENTILLE",
										french_word_example: "Ta m&egravere est gentille."



									},



									{

										english_word: "KINDNESS",
										english_word_example: "I like your mother's kindness.",
										french_word: "GENTILLESSE",
										french_word_example: "J'aime la gentillesse de ta m&egravere."



									},




									{

										english_word: "KISS",
										english_word_example: "The husband gave a kiss to his wife.",
										french_word: "BISOU",
										french_word_example: "Le mari donnait un bisou &agrave son &eacutepouse."



									},





									{

										english_word: "KITCHEN",
										english_word_example: "My sister is cooking in the kitchen.",
										french_word: "CUISINE",
										french_word_example: "Ma s&#156ur est en train de faire la cuisine dans la cuisine."



									},





									{

										english_word: "KNEE",
										english_word_example: "I'm on my knees.",
										french_word: "GENOU",
										french_word_example: "Je suis aux genoux."



									},



										{

										english_word: "LAB",
										english_word_example: "The students are in the computer lab.",
										french_word: "LABO",
										french_word_example: "Les &eacutetudiants sont dans la labo informatique."



									},




										{

										english_word: "LADDER",
										english_word_example: "Bring me a ladder, I want to go to the roof.",
										french_word: "&EacuteCHELLE",
										french_word_example: "Amenez-moi une &eacutechelle, Je veux aller au toit."



									},


										{

										english_word: "LADY",
										english_word_example: "Good morning lady! Would you like any help about fixing that?",
										french_word: "MADEMOISELLE",
										french_word_example: "Bon avant-midi mademoiselle! Voudriez-vous une aide sur fixant &ccedila?"



									},


										{

										english_word: "LAKE",
										english_word_example: "They are fishing in the lake.",
										french_word: "LAC",
										french_word_example: "Ils p&ecircchent dans le lac."



									},



										{

										english_word: "LANDSCAPE",
										english_word_example: "Rwanda has beautiful landscapes.",
										french_word: "PAYSAGE",
										french_word_example: "Le Rwanda a des bons paysages."



									},


										{

										english_word: "LANGUAGE",
										english_word_example: "Which languages do you speak? English and French.",
										french_word: "LANGUE",
										french_word_example: "Quelles langues parlez-vous? Anglais et Fran&ccedilais."



									},


										{

										english_word: "LAPTOP",
										english_word_example: "My uncle has bought for me a new laptop.",
										french_word: "ORDINATEUR PORTABLE",
										french_word_example: "Mon oncle a ach&eacutet&eacute pour moi un nouveau ordianteur portable."



									},



										{

										english_word: "LAST",
										english_word_example: "Open the last box.",
										french_word: "DERNIER/DERNI&EgraveRE",
										french_word_example: "Ouvrez la derni&egravere bo&icircte."



									},



										{

										english_word: "LAUGH",
										english_word_example: "What are you laughing for? That comedy!",
										french_word: "RIRE",
										french_word_example: "Pourquoi tu ris? Cette com&eacutedie-l&agrave!"



									},



									{

										english_word: "LAW",
										english_word_example: "The people must obey the laws.",
										french_word: "LOI",
										french_word_example: "Le peuple doivent ob&eacuteir les lois."



									},





									{

										english_word: "MACHINE",
										english_word_example: "In a factory, There are machines wich perform different tasks.",
										french_word: "MACHINE",
										french_word_example: "Dans une usine, Il y a des machines qui font des t&acircches diff&eacuterentes."



									},


									{

										english_word: "MAD",
										english_word_example: "I think you're mad to walk in this rain.",
										french_word: "FOU/FOLLE",
										french_word_example: "Je pense que tu es folle de marcher dans cette pluie."



									},


									{

										english_word: "MAGIC",
										english_word_example: "Those who practice magic will be prisoned.",
										french_word: "MAGIE",
										french_word_example: "Ceux qui pratiquent la magie seront emprisonn&eacute."



									},



									{

										english_word: "MAGNET",
										english_word_example: "Magnets attract metals.",
										french_word: "AIMANT",
										french_word_example: "Les aimants attirent les m&eacutetaux."



									},


									{

										english_word: "MAINTAIN",
										english_word_example: "Paul is maintaining the washing machine.",
										french_word: "MAINTENIR",
										french_word_example: "Paul maintient la machine &agrave laver."



									},



									{

										english_word: "MAIZE",
										english_word_example: "It is time to harvest the maizes.",
										french_word: "MA&IumlS",
										french_word_example: "C'est le temps de moissonner les ma&iumls."



									},


									{

										english_word: "MAN",
										english_word_example: "I know this man. We met somewhere.",
										french_word: "HOMME",
										french_word_example: "Je connais cet homme. Nous nous rencontrions quelque part."



									},

									{

										english_word: "MANGO",
										english_word_example: "She bought these mangoes in the market.",
										french_word: "MANGUE",
										french_word_example: "Elle a ach&eacutet&eacute ces mangues dans le march&eacute."



									},




									{

										english_word: "MANIPULATE",
										english_word_example: "The teachers know how to manipulate their students.",
										french_word: "MANIPULER",
										french_word_example: "Les enseignants savent comment manipuler leurs &eacutel&egraveves."



									},


									{

										english_word: "MANPOWER",
										english_word_example: "We need manpower for the new department.",
										french_word: "MAIN-D'&#140VRE",
										french_word_example: "Nous avons b&eacutesoin de main-d'&#156vre pour le nouveau d&eacutepartement."



									},



										{

										english_word: "NAKED",
										english_word_example: "We are born naked.",
										french_word: "NU/NUE",
										french_word_example: "Nous sommes n&eacutes nus."



									},


										{

										english_word: "NAME",
										english_word_example: "What is your name? I'm called Placide IRANDORA.",
										french_word: "NOM",
										french_word_example: "Quel est ton nom? Je m'appelle Placide IRANDORA."



									},


										{

										english_word: "NATIONAL",
										english_word_example: "The soldiers are singing the national anthem.",
										french_word: "NATIONAL/NATIONALE",
										french_word_example: "Les soldats chantent l'hymne national."



									},



										{

										english_word: "NATIONALITY",
										english_word_example: "What's your nationality? I am Rwandese.",
										french_word: "NATIONALIT&Eacute",
										french_word_example: "Quelle est votre nationalit&eacute? Je suis Rwandaise."



									},


										{

										english_word: "NATIVE",
										english_word_example: "Her native country is Rwanda.",
										french_word: "NATAL/NATALE",
										french_word_example: "Son pays natal est le Rwanda."



									},


										{

										english_word: "NATURAL",
										english_word_example: "This forest is natural.",
										french_word: "NATUREL/NATURELLE",
										french_word_example: "Cette for&ecirct est naturelle."



									},






										{

										english_word: "NEAR",
										english_word_example: "The hospital is near the university.",
										french_word: "PR&EgraveS DE",
										french_word_example: "L'h&ocircpital est pr&egraves de l'universit&eacute."



									},


										{

										english_word: "NECESSARY",
										english_word_example: "It is necessary to drink enough water every day.",
										french_word: "N&EacuteCESSAIRE",
										french_word_example: "Il est n&eacutecessaire de boire assez d'eau tous les jours."



									},



										{

										english_word: "NEED",
										english_word_example: "My classmates need more money to buy notebooks.",
										french_word: "BESOIN",
										french_word_example: "Mes camarades de classe ont besoin de plus d'argent pour ach&eacuteter cahiers de notes."



									},



										{

										english_word: "NEEDLE",
										english_word_example: "I don't have a needle to sew a new sweater.",
										french_word: "AIGUILLE",
										french_word_example: "Je n'ai pas d'aiguille pour coudre un nouveau pull."



									},



										{

										english_word: "OBEY",
										english_word_example: "Children must obey their parents.",
										french_word: "OB&EacuteIR",
										french_word_example: "Les enfants doivent ob&eacuteir leurs parents."



									},




										{

										english_word: "OBTAIN",
										english_word_example: "I have obtained the information that i wanted.",
										french_word: "OBTENIR",
										french_word_example: "J'ai obtenu les informations lesquelles je voulus."



									},



										{

										english_word: "OCCUR",
										english_word_example: "The wedding ceremony will occur on saturday.",
										french_word: "AVOIR LIEU",
										french_word_example: "La c&eacuteremonie du mariage aura lieu samedi."



									},





										{

										english_word: "OCEAN",
										english_word_example: "The Pacific ocean is the biggest ocean in the world.",
										french_word: "OC&EacuteAN",
										french_word_example: "L'oc&eacutean Pacifique est le plus grand oc&eacutean dans le monde."



									},



										{

										english_word: "OCTOBER",
										english_word_example: "I started to study at the university of Rwanda in the month of October.",
										french_word: "OCTOBRE",
										french_word_example: "Je commen&ccedilais &eacutetudier dans l'universit&eacute du Rwanda au mois d'Octobre."



									},


										{

										english_word: "OFFICE",
										english_word_example: "The manager is busy preparing reports in his office.",
										french_word: "BUREAU",
										french_word_example: "Le g&eacuterant est occup&eacute dans son bureau pr&eacuteparant des rapports."



									},



										{

										english_word: "OFFICIAL",
										english_word_example: "The official announcement from the government says to not smoke in public places.",
										french_word: "OFFICIEL/OFFICIELLE",
										french_word_example: "L'annonce officielle du gouvernement dit de ne pas f&ucircmer dans les endroits publics."



									},





										{

										english_word: "OFTEN",
										english_word_example: "How often do you go to the market? Twice a week.",
										french_word: "SOUVENT",
										french_word_example: "Comment souvent allez-vous au march&eacute? Deux fois dans la semaine."



									},




										{

										english_word: "OIL",
										english_word_example: "He has gonne to buy cooking oil at the shops.",
										french_word: "HUILLE",
										french_word_example: "Il est all&eacute ach&eacuteter de l'huille de cuisine aux magasins."



									},






										{

										english_word: "ONLY",
										english_word_example: "I only want to help you do that.",
										french_word: "SEULEMENT",
										french_word_example: "Je veux seulement vous aider pour faire &ccedila."



									},



									{

										english_word: "PACKET",
										english_word_example: "There remains two packets of biscuits in the cupboard.",
										french_word: "PAQUET",
										french_word_example: "Il reste deux paquets des biscuits dans l'armoire."



									},



									{

										english_word: "PADLOCK",
										english_word_example: "That is the key which opens the gate's padlock.",
										french_word: "CADENAS",
										french_word_example: "Voil&agrave la cl&eacute qui ouvre le cadenas du portail."



									},




									{

										english_word: "PAGE",
										english_word_example: "Open and read the tenth page of the book.",
										french_word: "PAGE",
										french_word_example: "Ouvrez et lisez la dixi&egraveme page du livre."



									},


									{

										english_word: "PAIN",
										english_word_example: "I've got pain in my stomach.",
										french_word: "DOULEUR",
										french_word_example: "J'ai de la douleur dans mon estomac."



									},

									{

										english_word: "PAINT",
										english_word_example: "Our house has a white paint.",
										french_word: "PEINTURE",
										french_word_example: "Notre maison a une peinture blanche."



									},


									{

										english_word: "PAINTBRUSH",
										english_word_example: "I have bought a paintbrush to paint the room, tomorrow.",
										french_word: "PINCEAU",
										french_word_example: "J'ai ach&eacutet&eacute un pinceau pour paindre la pi&egravece, demain."



									},


									{

										english_word: "PAKISTAN",
										english_word_example: "Pakistan is muslim country.",
										french_word: "PAKISTAN",
										french_word_example: "Le Pakistan est un pays muslman."



									},


									{

										english_word: "PALESTINE",
										english_word_example: "Palestine is found on the continent of Asia.",
										french_word: "PALESTINE",
										french_word_example: "La Palestine se trouve dans le continent d'Asie."



									},



									{

										english_word: "PAPER",
										english_word_example: "Take a piece of paper and write your name on it.",
										french_word: "PAPIER",
										french_word_example: "Prenez un merceau de papier et &eacutecrivez votre nom sur le."



									},



									{

										english_word: "PARADE",
										english_word_example: "At school, We were taught how to march on the parade.",
										french_word: "D&EacuteFIL&Eacute",
										french_word_example: "&Agrave l'&eacutecole, Nous nous &eacutetions enseign&eacutes comment marcher sur le d&eacutefil&eacute."



									},






									{

										english_word: "QUALITY",
										english_word_example: "The quality of education is very important.",
										french_word: "QUALIT&Eacute",
										french_word_example: "La qualit&eacute de l'&eacuteducation est tr&egraves importante."



									},



									{

										english_word: "QUEBEC",
										english_word_example: "Quebec is found on the continet of America.",
										french_word: "QU&EacuteBEC",
										french_word_example: "Le Qu&eacutebec se trouve dans le continent d'Am&eacuterique."



									},



									{

										english_word: "QUEEN",
										english_word_example: "Elizabeth is the queen of The United Kingdom.",
										french_word: "REINE",
										french_word_example: "Elizab&eacuteth est la reine du Royaume-Uni."



									},



									{

										english_word: "QUESTION",
										english_word_example: "The children ask too many questions beacuse they are curious.",
										french_word: "QUESTION",
										french_word_example: "Les enfants posent trop de questions parce qu'ils sont curieux."



									},


									{

										english_word: "QUESTIONNAIRE",
										english_word_example: "There are twelve questions on the questionnaire that you must answer.",
										french_word: "QUESTIONNAIRE",
										french_word_example: "Il y a douze questions sur le questionnaire que vous devez r&eacutepondre."



									},




									{

										english_word: "QUEUE",
										english_word_example: "We had to form a queue to be able to enter into the stadium.",
										french_word: "QUEUE",
										french_word_example: "Nous devions former une queue pour &ecirctre capable d'entrer dans le stade."



									},



									{

										english_word: "QUICK",
										english_word_example: "The boss wants a quick answer from you.",
										french_word: "RAPIDE",
										french_word_example: "Le patron veut une r&eacuteponse rapide de vous."



									},



									{

										english_word: "QUICKLY",
										english_word_example: "Go quickly so that you won't be late to arrive at work.",
										french_word: "VITE",
										french_word_example: "Allez vite pour que vous ne serez pas en retard d'arriver au travail."



									},






									{

										english_word: "QUIET",
										english_word_example: "Keep quiet! And stop shouting.",
										french_word: "TRANQUILLE",
										french_word_example: "Soyez tranquille! Et arr&ecirctez de crier."



									},



									{

										english_word: "QUIETLY",
										english_word_example: "We entered into the class quietly because we were late.",
										french_word: "TRANQUILLEMENT",
										french_word_example: "Nous entrions tranquillement dans la classe parce que nous &eacutetions en retard."



									},




									{

										english_word: "RABBIT",
										english_word_example: "We raise rabbits at home.",
										french_word: "LAPIN",
										french_word_example: "Nous &eacutelevons les lapins chez nous."



									},



									{

										english_word: "RACE",
										english_word_example: "Augustin's father was the winner of the race, yesterday.",
										french_word: "COURSE",
										french_word_example: "Le p&egravere d'Augustin a &eacutet&eacute le gagnant de la course, hier."



									},


									{

										english_word: "RACE",
										english_word_example: "What's your race? Black race.",
										french_word: "RACE",
										french_word_example: "Quelle votre race? Race noire."



									},

									{

										english_word: "RACISM",
										english_word_example: "I hate racism.",
										french_word: "RACISME",
										french_word_example: "Je d&eacuteteste le racisme."



									},


									{

										english_word: "RADIO",
										english_word_example: "Turn on the radio, I want to listen to the news.",
										french_word: "RADIO",
										french_word_example: "Allumez la radio, Je veut &eacutecouter le journal."



									},


									{

										english_word: "RAILROAD",
										english_word_example: "The government of Rwanda planned to construct the railroad for train transport.",
										french_word: "CHEMIN DE FER",
										french_word_example: "Le gouvernement du Rwanda planifait de construire le chemin de fer pour le transport de train."



									},






									{

										english_word: "RAISE",
										english_word_example: "Raise up your hand if you want to answer the question.",
										french_word: "LEVER",
										french_word_example: "Levez la main si vous voulez r&eacutepondre &agrave la question."



									},



									{

										english_word: "RAKE",
										english_word_example: "We can use a rake to put the soil on the same level.",
										french_word: "R&AcircTEAU",
										french_word_example: "Nous pouvons utiliser un r&acircteau pour mettre le sol au m&ecircme niveau."



									},




									{

										english_word: "RANSOM",
										english_word_example: "You must pay a ransom to get back your grand-father.",
										french_word: "RAN&CcedilON",
										french_word_example: "Vous devez payer une ran&ccedilon pour obtenir de nouveau votre grand-p&egravere."



									},




									{

										english_word: "RAPE",
										english_word_example: "The police have finally caught the man who was trying to rape a lady.",
										french_word: "VIOLER",
										french_word_example: "La police a finallement attrap&eacute l'homme qui essayait de violer une dame."



									},


									{

										english_word: "SACK",
										english_word_example: "They have sold two sacks of rice.",
										french_word: "SAC",
										french_word_example: "Ils ont vendu deux sacs de riz."



									},


									{

										english_word: "SAD",
										english_word_example: "Why are you sad? I've failed. Sorry.",
										french_word: "TRISTE",
										french_word_example: "Pourquoi tu es triste? J'ai &eacutechou&eacute. D&eacutesol&eacute."



									},

									{

										english_word: "SAFE",
										english_word_example: "Your money is safe in the bank, now.",
										french_word: "EN S&EacuteCURIT&Eacute",
										french_word_example: "Votre argent est en s&eacutecurit&eacute dans la banque, maintenant."



									},


{

										english_word: "SAFETY",
										english_word_example: "We didn't have safety there. That's why we moved house.",
										french_word: "S&EacuteCURIT&Eacute",
										french_word_example: "Nous n'avions pas de s&eacutecurit&eacute l&agrave. C'est pourquoi, nous d&eacutem&eacutenagions."



									},






									{

										english_word: "SALARY",
										english_word_example: "The salary of the employees in our organization is good.",
										french_word: "SALAIRE",
										french_word_example: "Le salaire des employ&eacutes dans notre organisation est bon."



									},


									{

										english_word: "SALT",
										english_word_example: "We have run out the salt.",
										french_word: "SEL",
										french_word_example: "Nous n'avons plus de sel."



									},



									{

										english_word: "SAND",
										english_word_example: "They are playing volleyball in the sand.",
										french_word: "SABLE",
										french_word_example: "Ils jouent au volley dans le sable."



									},							


									{

										english_word: "SANDAL",
										english_word_example: "I am washing my sandals.",
										french_word: "SANDALE",
										french_word_example: "Je lave mes sandales."



									},


									{

										english_word: "SATELLITE",
										english_word_example: "Satellites help us to communicate around the world.",
										french_word: "SATELLITE",
										french_word_example: "Les satellites nous aident pour communiquer dans partout le monde."



									},

									{

										english_word: "SATURDAY",
										english_word_example: "He doesn't work on saturday.",
										french_word: "SAMEDI",
										french_word_example: "Il ne travaille pas sur samedi."



									},


									{

										english_word: "TABLE",
										english_word_example: "We sat around the table and ate.",
										french_word: "TABLE",
										french_word_example: "Nous nous asseyions autour de la table et mangions."



									},


									{

										english_word: "TABLET",
										english_word_example: "You have to drink all these tablets to get cured.",
										french_word: "COMPRIM&Eacute",
										french_word_example: "Tu dois boire tous ces comprim&eacutes pour &ecirctre gueri."



									},


									{

										english_word: "TABOO",
										english_word_example: "It's a taboo for a girl to be the first person to propose a boy in Rwanda.",
										french_word: "TABOU",
										french_word_example: "C'est un tabou au Rwanda, quand une fille est la premi&egravere personne pour demander un gar&ccedilon en mariage."



									},


									{

										english_word: "TAIL",
										english_word_example: "Don't touch the tail of the dog. If you do, It will bite you.",
										french_word: "QUEUE",
										french_word_example: "Ne touche pas la queue du chien. Si tu le fait, Il te mordra."



									},

									{

										english_word: "TAILOR",
										english_word_example: "I'm going to see if the tailor has finished mending my clothes.",
										french_word: "TAILLEUR",
										french_word_example: "Je vais voir si le tailleur a fini raccommoder mes v&ecirctements."



									},



									{

										english_word: "TALENT",
										english_word_example: "She has a talent of singing.",
										french_word: "TALENT",
										french_word_example: "Elle a un talent de chanter."



									},

									{

										english_word: "TALK",
										english_word_example: "What are you talking about?",
										french_word: "PARLER",
										french_word_example: "Est-ce que vous parlez sur quoi?"



									},


									{

										english_word: "TALKATIVE",
										english_word_example: "Some people are talkative.",
										french_word: "BAVARD/BAVARDE",
										french_word_example: "Quelques personnes sont bavardes."



									},


									{

										english_word: "TASTE",
										english_word_example: "This juice has a delicious taste.",
										french_word: "GO&UcircT",
										french_word_example: "Ce jus a un go&ucirct d&eacutelicieux."



									},


									{

										english_word: "TATTOO",
										english_word_example: "Many famous singers of hip hop have tattoos on their bodies.",
										french_word: "TATOUAGE",
										french_word_example: "Beaucoup de chanteurs c&eacutel&egravebres de hip hop ont des tatouages sur leurs corps."



									},



									/*{

										english_word: "TAX",
										english_word_example: "Anyone who does business must pay tax to the government.",
										french_word: "TAXE",
										french_word_example: "Quiconque qui fait l'affaire doit payer la taxe au gouvernement."



									},


									{

										english_word: "TAXI",
										english_word_example: "I took a taxi from the airport to home.",
										french_word: "TAXI",
										french_word_example: "J'ai pris un taxi de l'a&eacuteroport jusqu'&agrave la maison."



									},*/


									{

										english_word: "UK",
										english_word_example: "I've got a scholarship to study in the United Kingdom.",
										french_word: "ROYAUME-UNI",
										french_word_example: "J'ai obtenu une bourse d'&eacutetudier au Royaume-Uni."



									},


									{

										english_word: "UMBRELLA",
										english_word_example: "The rain has made me wet because i've forgotten to take an umbrella with me.",
										french_word: "PARAPLUIE",
										french_word_example: "La pluie m'a fait mouill&eacute parce que j'ai oubli&eacute amener une parapluie avec moi."



									},


									{

										english_word: "UNABLE",
										english_word_example: "Alice is unable to go quickly beacuse she's broken her leg.",
										french_word: "INCAPABLE",
										french_word_example: "Alice est incapable d'aller vite parce qu'elle a cass&eacute la jambe."



									},





									{

										english_word: "UNAIDED",
										english_word_example: "You have to accomplish the mission unaided.",
										french_word: "SANS AIDE",
										french_word_example: "Vous devez accomplir la mission sans aide."



									},



									{

										english_word: "UNARMED",
										english_word_example: "The thief was unarmed.",
										french_word: "NON ARM&Eacute",
										french_word_example: "Le voleur &eacutetait non arm&eacute."



									},


									{

										english_word: "UNAUTHORIZED",
										english_word_example: "Unauthorized access to other people's computers is illegal.",
										french_word: "NON AUTORIS&Eacute",
										french_word_example: "Acc&egraves non autoris&eacute aux ordinateurs d'autres gens est ill&eacutegal."



									},


									{

										english_word: "UNAVAILABLE",
										english_word_example: "The electricity is currently unavailable at home. It has gone.",
										french_word: "INDISPONIBLE",
										french_word_example: "L'&eacutelectricit&eacute est actuellement indisponible chez nous. Elle est partie."



									},



									{

										english_word: "UNAVOIDABLE",
										english_word_example: "The disease has finally become unavoidable.",
										french_word: "IN&EacuteVITABLE",
										french_word_example: "La maladie est finallement devenue in&eacutevitable."



									},




									{

										english_word: "UNBELIEVABLE",
										english_word_example: "It's unbelievable that we've become come old!",
										french_word: "INCROYABLE",
										french_word_example: "C'est incroyable que nous sommes devenus vieux!"



									},


									{

										english_word: "UNBREAKABLE",
										english_word_example: "The glass is unbreakable.",
										french_word: "INCASSABLE",
										french_word_example: "La verre est incassable."



									},



									{

										english_word: "VALENTINE",
										english_word_example: "The Saint-Valentine's Day.",
										french_word: "VALENTIN",
										french_word_example: "La Saint-Valentin."



									},




									{

										english_word: "VALIDATE",
										english_word_example: "Your passport is expired. You have to validate it.",
										french_word: "VALIDER",
										french_word_example: "Votre passeport est expir&eacute. Vous devez le valider."



									},




									{

										english_word: "VALUABLE",
										english_word_example: "Diamond is a valuable stone.",
										french_word: "PR&EacuteCIEUX/PR&EacuteCIEUSE",
										french_word_example: "Diamant est une pierre pr&eacutecieuse."



									},



									{

										english_word: "VALUE",
										english_word_example: "My computer laptop has a value of four hundred thousand Rwandan francs.",
										french_word: "VALEUR",
										french_word_example: "Mon ordinateur portable a la valeur de quatre cents milles francs Rwandais."



									},



									{

										english_word: "VEGETABLE",
										english_word_example: "The Cabbages and tomatoes are examples of vegetables.",
										french_word: "L&EacuteGUME",
										french_word_example: "Les choux et les tomates sont des examples de l&eacutegumes.."



									},




									{

										english_word: "VEHICLE",
										english_word_example: "Cars and motorbikes are the most popular vehicles in Rwanda.",
										french_word: "V&EacuteHICULE",
										french_word_example: "Les voitures et les motos sont les v&eacutehicules les plus populaires au Rwanda."



									},


									{

										english_word: "VEGETARIAN",
										english_word_example: "My mother is a vegetarian. She doesn't eat meat.",
										french_word: "VEG&EacuteTARIEN/VEG&EacuteTARIENNE",
										french_word_example: "Ma m&egravere est veg&eacutetarienne. Elle ne mange pas de viande."



									},



									{

										english_word: "VENOM",
										english_word_example: "Snakes have the powerful venom which can kill humans quickly.",
										french_word: "VENIN",
										french_word_example: "Les serpents ont le venin puissant qui peut tuer les humains rapidement."



									},




									{

										english_word: "VERB",
										english_word_example: "Verb shows an action in a sentence. I am writing now!",
										french_word: "VERBE",
										french_word_example: "Le verbe montre une action dans une phrase. J'&eacutecris maintenant!"



									},




									{

										english_word: "VERIFY",
										english_word_example: "I would like to verify that the door is really closed.",
										french_word: "V&EacuteRIFIER",
										french_word_example: "Je voudrais v&eacuterifier que la porte est vraiment ferm&eacutee."



									},





									{

										english_word: "WAIT",
										english_word_example: "Wait for me here. I will be back soon.",
										french_word: "ATTENDRE",
										french_word_example: "Attends-moi ici. Je retournerai bient&ocirct."



									},




									{

										english_word: "WAITER",
										english_word_example: "Call the waiter to come and serve us.",
										french_word: "SERVEUR",
										french_word_example: "Appelez le serveur pour venir et nous servir."



									},



									{

										english_word: "WAITRESS",
										english_word_example: "The waitress brought me one cold bottle of beer.",
										french_word: "SERVEUSE",
										french_word_example: "La serveuse m'a amen&eacute une bouteille froide de bi&egravere."



									},




									{

										english_word: "WAKE",
										english_word_example: "Wake the children up. It's time to prepare them to go to school.",
										french_word: "R&EacuteVEILLER",
										french_word_example: "R&eacuteveillez les enfants. C'est le temps de les pr&eacuteparer pour aller &agrave l'&eacutecole."



									},




									{

										english_word: "WALK",
										english_word_example: "I walk to to the market.",
										french_word: "MARCHER",
										french_word_example: "Je marche au march&eacute."



									},



									{

										english_word: "WALL",
										english_word_example: "The wall has been broken by the car which made the accident.",
										french_word: "MUR",
										french_word_example: "Le mur a &eacutet&eacute cass&eacute par la voiture qui a fait l'accident."



									},




									{

										english_word: "WALLET",
										english_word_example: "I have ten thousand francs in my wallet.",
										french_word: "PORTEFEUILLE",
										french_word_example: "J'ai dix milles francs dans mon portefeuille."



									},




									{

										english_word: "WANT",
										english_word_example: "I want to travel abroad in the united States.",
										french_word: "VOULOIR",
										french_word_example: "Je veux voyager &agrave l'&eacutetranger aux &Eacutetats-Unis."



									},




									{

										english_word: "WAR",
										english_word_example: "There are many refugees in the camp who are escaping the war from their country.",
										french_word: "GUERRE",
										french_word_example: "Il y a beaucoup de r&eacutefugi&eacutes dans le camp qui s'&eacutechappent la guerre de leur pays."



									},



									{

										english_word: "WARDROBE",
										english_word_example: "My sister has too many clothes in her wardrobe.",
										french_word: "GARDE-ROBE",
										french_word_example: "Ma s&#156ur a trop de v&ecirctement dans sa garde-robe."



									},




									{

										english_word: "XMASS",
										english_word_example: "Merry Xmass And Happy New Year!",
										french_word: "NO&#203L",
										french_word_example: "Joyeux No&#235l Et Bonne Ann&eacutee!"



									},


									{

										english_word: "YEAR",
										english_word_example: "Our academic year now starts in October, Not in September like before.",
										french_word: "ANN&EacuteE",
										french_word_example: "Notre ann&eacutee scolaire commence en Octobre, Pas en Septembre comme autrefois."



									},



									{

										english_word: "YELLOW",
										english_word_example: "Bananas which are already to be eaten are turned into yellow.",
										french_word: "JAUNE",
										french_word_example: "Les bananes qui sont pr&ecirctes &agrave &ecirctre mang&eacutees sont devenues jaune."



									},



									{

										english_word: "YES",
										english_word_example: "Do you know me? Yes, Bien s&ucircr!",
										french_word: "OUI",
										french_word_example: "Est-ce que tu me connais? Oui, Bien s&ucircr!"



									},


									{

										english_word: "YESTERDAY",
										english_word_example: "I visited my grand-father yesterday.",
										french_word: "HIER",
										french_word_example: "J'ai visit&eacute mon grand-p&egravere hier."



									},


									{

										english_word: "YOGHURT",
										english_word_example: "Our mother has bought two yoghurts for us, As her children!",
										french_word: "YAOURT",
										french_word_example: "Notre m&egravere nous a ach&eacutet&eacute deux yaourt, Comme ses enfants!"



									},





									{

										english_word: "YOUNG",
										english_word_example: "We are still young and we will achieve many things.",
										french_word: "JEUNE",
										french_word_example: "Nous sommes encore jeunes et nous acheverons beaucoup de choses."



									},


									{

										english_word: "YOUTH",
										english_word_example: "The youth is the power of the country.",
										french_word: "JEUNESSE",
										french_word_example: "La jeunesse est la puissance du pays."



									},


									{

										english_word: "ZEBRA",
										english_word_example: "We went to the national park to see zebras.",
										french_word: "Z&EgraveBRE",
										french_word_example: "Nous sommes all&eacutes au parc national pour voir les z&egravebres."



									},




									{

										english_word: "ZERO",
										english_word_example: "I don't want you to get zero in the test. So, You have to revise your notes.",
										french_word: "Z&EacuteRO",
										french_word_example: "Je ne veux pas que tu auras z&eacutero dans l'interrogation. Alors, tu dois r&eacuteviser tes notes."



									},


























								]




				



					
							





	
















