import React from 'react';
import './OrganPattern.css';
import humDry from '../../images/pattern/hum_dry.png';
import livHeatBlazing from '../../images/pattern/liv_heatBlazing.PNG';
import kidYinDeficiency from '../../images/pattern/kid_yinDeficiency.PNG';
import dampHeatInvadingSpleen from '../../images/pattern/Damp_HeatInvadingSpleen.PNG';
import coldInvadingLungs from '../../images/pattern/cold_invadingLungs.PNG';
import heartBloodDeficiency from '../../images/pattern/heart_bloodDeficiency.PNG';

import kid_yangDeficiency from '../../images/pattern/kid_yangDeficiency.PNG';
import kid_qiDeficiency from '../../images/pattern/kid_qiDeficiency.PNG';
import lung_dampPhlegm from '../../images/pattern/lung_dampPhlegm.PNG';
import lung_yinDeficiency from '../../images/pattern/lung_yinDeficiency.PNG';

import damp_coldLungs from '../../images/pattern/damp_coldLungs.PNG';
import phlegm_heatLungs from '../../images/pattern/phlegm_heatLungs.PNG';

import cold_dampInvadingSpleen from '../../images/pattern/cold_dampInvadingSpleen.PNG';
import spleen_liverBloodDeficiency from '../../images/pattern/spleen_liverBloodDeficiency.PNG';

import heart_yangDeficiency from '../../images/pattern/heart_yangDeficiency.PNG';
import heart_yinDeficiency from '../../images/pattern/heart_yinDeficiency.PNG';

import heart_fireBlazing from '../../images/pattern/heart_fireBlazing.PNG';


import liver_qiStagnation from '../../images/pattern/liver_qiStagnation.PNG';
import cold_stagnationLiver from '../../images/pattern/cold_stagnationLiver.PNG';

import liver_bloodDeficiency from '../../images/pattern/liver_bloodDeficiency.PNG';


import ExpandableList from '../util/expandableList/ExpandableList';

class OrganPattern extends React.Component{
    
    constructor(props){
        super(props);

        this.state ={
            organs:[{key:"1",organ:"Spleen",organpattern:[{"id":"21",
                    "title":"Spleen Qi Deficiency"},{"id":"24",
                    "title":"Damp-Heat Invading the Spleen"},{"id":"34",
                    "title":"Spleen and Liver Blood Deficiency"}],state:true},
                {key:"2",organ:"Liver",organpattern:[{"id":"22",
                    "title":"Liver Heat Blazing"},{"id":"38",
                    "title":"Liver Qi Stagnation"},{"id":"39",
                    "title":"Cold Stagnation in the Liver"},{"id":"29",
                    "title":"Liver Qi Deficiency"}],state:false},
                {key:"3",organ:"Kidney",organpattern:[{"id":"23",
                    "title":"Kidney yin Deficiency"},{"id":"25",
                    "title":"Cold Invading the Lungs"},{"id":"27",
                    "title":"Kidney Yang deficiency"},{"id":"28",
                    "title":"Kidney Qi Deficiency"},{"id":"33",
                    "title":"Cold-Damp Invading Spleen"}],state:false},
                {key:"4",organ:"Heart",organpattern:[{"id":"26",
                    "title":"Heart blood deficiency"},{"id":"35",
                    "title":"Heart yang deficiency"},,{"id":"36",
                    "title":"Heart Yin Deficiency"},{"id":"37",
                    "title":"Heart Fire Blazing"}],state:false},
                {key:"5",organ:"Lung",organpattern:[{"id":"29",
                    "title":"Lung Damp Phlegm"},{"id":"30",
                    "title":"Lung Yin deficiency"},{"id":"31",
                    "title":"Damp cold in Lungs"},{"id":"32",
                    "title":"Phlegm Heat in Lungs"}],state:false}],
            pattern:[{
                    "key":"21",
                    "title":"Spleen Qi Deficiency",
                    "imgURL":humDry,
                    "desc":"In TCM, the spleen is central to digestion and is considered a vital organ. The spleen is said to pull qi from all the foods we eat and deliver it to the rest of the body and it also keeps blood in the blood vessels. TCM pairs the stomach and spleen as the sources of digestion and the digestive system as a whole. Humid dry will be created, when spleen qi is disturbed due to improper food habits and lack of physical activity.",
                    "causes":["Lack of physical activity", "Irregular intake of food", "Taking heavy food", "Not forgiving", "Worry and depression", "Taking preserved or chemically contaminated food"],
                    "symptoms":["Loss of appetite", "Nausea or diarrhoea", "Gas or bloating", "Varicose veins", "Hemorrhoids", "Acid reflux", "Trouble waking up in the morning", "Brain fog throughout the day", "Diabetes", "Eating disorders", "Incomplete elimination", "Poor digestion", "Excess menstrual blood flow", "Weak Limbs", "Worry", "Dwelling", "Epigastric Pain", "Lethargy"],
                    "foodToAvoid":["Pulses","Sprouts","Refined Oil","Hybrid Wheat","Oil and Deep-fried food","Polished Rice","Milk","Red meat","Coffee","Sugar","Baking Soda"],
                    "dietSuggestion":["Sesame","Pumpkin","Sunflower seeds","Legumes","Lightly cooked vegetables","Figs","Coconuts","Grapes","Cherries","Dates","Potatoes","Brown rice","Oats","Ginger","Onions","Tea"],
                    "emotion":{
                        avoid:["Worries","Repetitive thoughts","Depression"],
                        suggest:["Forgive and Forget","Supporting and Caring","Be conscious"]
                    },
                    "active":true
                },{
                    "key":"22",
                    "title":"Liver Heat Blazing",
                    "imgURL":livHeatBlazing,
                    "desc":"The liver is responsible for food metabolism and the detoxification of natural and synthetic substances. From a TCM perspective, it is also part of a network that helps a person manage stress. Toxins that overload the liver are considered a form of Heat in TCM as stress that leads to anger. Due to a lot of processed food and non-biological substances, Wind heat will be generated.",
                    "causes":["Anger", "Resentment", "Frustration", "Stress", "Sour food "],
                    "symptoms":["Red face and eyes", "Irritability", "Outbursts of anger", "Dizziness", "Ringing in the ears", "Dry mouth and thirst", "Bitter taste in the mouth", "Muscle tightness in the neck and shoulders", "A headache especially on the sides of the head", "Feel hot", "Blood pressure rises with stress", "Migraine", "Dark scanty urine", "Insomnia", "Constipation"],
                    "foodToAvoid":["Chilies", "Cinnamon", "Garlic", "Ginger", "Onions", "Shallots", "Leeks", "Cloves", "Wasabi coffee", "Vinegar", "Mustard", "Horseradish", "Chocolate", "Lamb and largeamounts of other redmeats", "Shrimp", "Prawns", "Veal", "Cheese citrus fruits", "Peanuts", "Lard", "Sour Food"],
                    "dietSuggestion":["Rice", "Millet", "Barley", "Oats celery", "Spinach", "Swiss chard", "Cucumber", "Lettuce", "Daikon radish", "Asparagus", "Cabbage", "Tomato", "Broccoli", "Cauliflower", "Sprouts", "Carrots", "Water chestnuts", "Apples", "Pears", "Watermelon"],
                    "emotion":{
                        avoid:["Anger", "Frustration", "Irritation", "Jealous", "Envy"],
                        suggest:["Meditation", "Pleasant Music", "Think before taking decision", "Release Judgment towards others"]
                    },
                    "active":false
                },{
                    "key":"23",
                    "title":"Kidney Yin Deficiency",
                    "imgURL":kidYinDeficiency,
                    "desc":"The kidney stores essence. The essence stored in the kidney promotes growth, development and the reproductive functions of the body, and it is also closely related to the generation of blood. The kidney governs water. This means the kidney regulates water metabolism through the qi transformation function of the kidney yang; Lastly, the kidney governs qi reception, in the form of assisting the lung in regulating respiration. if one has a lifestyle of stress, constant activity, long hours, irregular eating habits, excess mental activity, etc. with not enough time allowed for the body to rejuvenate, all this weakens the deeper Yin energy.",
                    "causes":["Lack of sleep", "Working without rest", "Hyper sexuality", "Stress", "More Expectations"],
                    "symptoms":["Dizziness, deafness and tinnitus", "Low sex drive, infertility", "Premature aging and senility", "Poor skeletal development and brittle bones", "Soreness and weakness in the lumbar area and knees", "Premature greying and hair loss", "Dental and teeth problems", "Mental retardation, poor memory", "Dry mouth and throat", "Feverish sensation in the palms, soles and chest", "Night sweats", "Constipation", "Deep yellow urine"],
                    "foodToAvoid":["Hybrid wheat", "Spices", "Chicken", "Egg", "Caffeine", "Alcohol", "Chili", "Horseradish", "Black pepper", "Lemons", "Ginger", "Garlic", "Onions.", "Ice cream"],
                    "dietSuggestion":["Kidney shaped foods: Black beans, kidney beans", "Blueberries, blackberries, mulberry", "Walnuts, Chestnuts", "Deep green leaf vegetables", "Sea food such as kelp, seaweed, and fish are very healthy for your kidneys.", "Asparagus", "Pineapple", "Kale", "Grapefruit", "Apples", "Bone-Marrow Broths & Soups", "Watermelon", "Mil", "Black dates", "Banana"],
                    "emotion":{
                        avoid:["Thinking multiple things at a time","Reduce your desires"],
                        suggest:["Make your mind Rest", "Take work gap", "Build your kidney essence by proper exercise and mind relaxation"]
                    },
                    "active":false
                },{
                    "key":"24",
                    "title":"Damp-Heat Invading the Spleen",
                    "imgURL":dampHeatInvadingSpleen,
                    "desc":"Spleen Function : Food digestion and nutrient absorption. Helps in the formation of blood and energy. Keeps blood in the blood vessels. Connected with muscles, mouth, and lips. Involved in thinking, studying, and memory. The Stomach Fire condenses liquids is to thicken the mucus in your throat and chest, making Phlegm.Digestive Fire has direct influence from mind activity. When mind activity increases, it influences digestive fire and creates humid heat pulse.",
                    "causes":["Excessive mental works", "Stress", "Anger", "Frustration", "Disturbed sleep", "Unable to relax", "Jealous", "Irregular eating habits"],
                    "symptoms":["Gastric", "Diabetes", "Acidity", "Foot and palm burning sensation", "UTI", "Hyper food metabolism", "Varicose veins", "Frequent Urine", "Chest burning sensation", "Vomiting", "Pathogenic manifestation", "Hair fall", "Night-sweating"],
                    "foodToAvoid":["Milk", "Paneer", "Sweets", "Sugar", "Irregular eating habits", "Hybrid wheat", "Refined food", "Bakery items", "Processed food", "Ice cream", "Boiler egg", "Tea/coffee", "Spicy food.", "Drinks", "Alcohol"],
                    "dietSuggestion":["Green leaf vegetables", "Fruits", "Red meat", "Butter milk", "Ghee", "Seasonal Foods", "Protein food", "Sesame, pumpkin or sunflower seeds", "Legumes", "kidney beans", "Lightly cooked vegetables, small amounts of lean meats,", "Figs", "Coconuts", "Grapes", "Cherries", "Dates", "Potatoes", "Sweet potatoes", "Brown rice, Lime juice"],
                    "emotion":{
                        avoid:["Tension", "Stress", "Restless", "Anger","frustration", "Irritable, unsettled", "Jealous"],
                        suggest:["Meditation","Body massage","Good and deep sleep"]
                    },
                    "active":false
                },{
                    "key":"25",
                    "title":"Cold Invading the Lungs",
                    "imgURL":coldInvadingLungs,
                    "desc":"Results from an accumulation of bodily fluids due to a dysfunction of the lung, spleen and kidney with impairment of water metabolism.One aspect of healthy Lung function is the descent of Lung qi (and Fluids) to the Kidneys for reprocessing. When Lung qi is too weak to descend properly, it simply 'floats' upwards.",
                    "causes":["Too much cold food or liquid", "Over-lifting or over-straining physically", "Dairy foods", "Raw or chilled foods and drinks.", "Lack of Physical activities", "More expose to air conditioner, Dust, Pollution."],
                    "symptoms":["Sneezing", "Wheezing sound", "Itching nose", "Cold", "Phlegm", "Head heaviness", "Cough", "Panting", "No thirst or little thirst", "Inhibited urination", "Constipation", "Sudden swelling of the face", "Body aches", "Numbness", "Blurred vision", "Edema", "Dust allergy"],
                    "foodToAvoid":["Dairy foods", "Raw or chilled foods and drinks.", "Sugar products", "Banana", "Frozen food", "Watermelon", "Packed and chemically contaminated food", "Beer", "Fruit Salads"],
                    "dietSuggestion":["Pepper", "Garlic", "Ginger", "Onion", "Millets", "Jaggery", "Warm water", "Citrus food", "Soup"],
                    "emotion":{
                        avoid:["Fear", "Sadness", "Dissatisfaction"],
                        suggest:["Exercises", "Physical games", "Water Steam"]
                    },
                    "active":false
                },{
                    "key":"26",
                    "title":"Heart blood deficiency",
                    "imgURL":heartBloodDeficiency,
                    "desc":"Hyperactive heart fire due to external contraction of heat-fire pathogenic factors or stagnant qi transforming into fire as a result of emotional strain. When there is no stress, Flow of thoughts will be good but when heat and humid increases, Knots will be created in thoughts and stress will build.",
                    "causes":["Stress", "Dissatisfaction", "Sad", "Sorrow", "Lonely", "Lack of Physical activity"],
                    "symptoms":["Paralysis", "Thyroid", "Eye disorders", "Chest pain", "Digestive disorders", "Skin rashes", "Stress", "Dissatisfaction", "Hair fall", "Disturb sleep", "Tinitus", "Inflammation", "Hormonal Imbalance", "Acidity"],
                    "foodToAvoid":["Spices", "Hybrid Wheat", "Boiler Egg", "Processed Food", "Tea", "Coffee", "Alcohol", "Smoking", "Garlic", "Red chili"],
                    "dietSuggestion":["Curd", "Butter Milk", "Ghee", "Green Vegetables", "Cucumber", "Raw Onion", "Almonds", "Mutton", "Bottle gourd", "Pork", "Watermelon", "Tender coconut"],
                    "emotion":{
                        avoid:["Desire", "Stubborn", "Stress", "Hatred"],
                        suggest:["Meditate", "Physical Exercise", "Sharing and Spending Time with Loved ones"]
                    },
                    "active":false
                },{
                    "key":"27",
                    "title":"Kidney Yang deficiency",
                    "imgURL":kid_yangDeficiency ,
                    "desc":"kidneys are the source of yang metabolic fire for the entire body, a deficiency in kidney yang can make the individual especially prone to cold. When the Kidney Yang is deficient, fluids are not metabolized efficiently and edema may result. Generally, body metabolism slows and it is easier to put on weight and harder to shift it",
                    "causes":["Long duration expose to AC","Low physical activity"],
                    "symptoms":["Overweight", "Lethargy", "Lower back pain", "Bloating", "Doze", "Hibernation", "Blood deficiency", "Low libido", "Poor circulation", "Urinary disorders", "Edema", "Gastric", "Fear", "Skin dry & itching", "No sweating", "Slowness", "Digestive problems", "Dry Mouth", "Hypo thyroid", "Breathlessness", "Impotence", "Poor memory"],
                    "foodToAvoid":["Ice cream", "Cold foods", "Sweet potato", "Watermelon", "Cabbage", "Cold drinks", "Soybean", "Raw fruit", "Raw vegetables", "Sprouts", "Spinach", "Salad", "Vinegar", "Refined sugar"],
                    "dietSuggestion":["Ginger", "Garlic", "Spices", "Onion", "Sunflower seeds", "Sesame seed", "Walnut", "Citrus", "Pepper", "Warm food", "Barley malt", "Dates", "Turmeric"],
                    "emotion":{
                        avoid:["Fear of loosing", "Anxiety", "Lack of confidence"],
                        suggest:["Physical Exercise", "Expose to Sunshine", "Be joyful and happy"]
                    },
                    "active":false
                },{
                    "key":"28",
                    "title":"Kidney Qi Deficiency",
                    "imgURL":kid_qiDeficiency,
                    "desc":"As we use Kidney Yang energy in physical labor, the Postnatal Jing (derived from food and drink by the Spleen) replaces this quickly. However, if one has a lifestyle of stress, constant activity, long hours, irregular eating habits, excess mental activity, etc. with not enough time allowed for the body to rejuvenate, all this weakens the deeper Yin energy, which is less easily replaced. Worry and anxiety can lead to Empty Heat. It is assumed that Yin and Yang are equally deficient, and there are no additional Signs of Heat or Cold.",
                    "causes":["Heredity", "Emotions", "Excessive Sexual Activity", "Chronic Disease", "Aging: Kidney Jing declines with age", "Physical Overwork: Weakens Kidney Yang", "Mental Overwork"],
                    "symptoms":["Slow mental and physical development in children", "Late or incomplete fontanel closure in infants", "Poor skeletal development and brittle bones", "Soreness and weakness in the lumbar area and knees", "Premature greying and hair loss", "Dental and teeth problems", "Mental retardation, poor memory", "Premature aging and senility", "Dizziness, deafness and tinnitus", "Low sex drive, infertility"],
                    "foodToAvoid":["Thermally cold or cool foods", "Raw foods", "Ice water", "Sugar", "Alcohol", "Orange juice or tropical fruit juice", "Sour milk products", "Excess liquid consumption"],
                    "dietSuggestion":["Cabbage", "Sweet", "Potato", "Yam", "Onions", "Potato", "Radish", "Cherries", "Grapes", "Mulberry", "Black Beans", "Lentils", "Chicken", "Duck", "Goat", "Lamb", "Pork", "Mussels", "Smoked Fish", "Salmon", "Walnuts", "Chestnuts", "Lotus Seeds", "Sesame Seeds", "Buckwheat", "Oats", "Quinoa", "Corn", "Ginger", "Garlic", "Black Pepper", "Cinnamon"],
                    "emotion":{
                        avoid:[""],
                        suggest:[""]
                    },
                    "active":false
                },{
                    "key":"29",
                    "title":"Lung Damp Phlegm",
                    "imgURL":lung_dampPhlegm ,
                    "desc":"This is an Excess Interior Cold syndrome. While Phlegm is obstructing the Lungs, the pattern usually arises from chronic Spleen Deficiency with Dampness that eventually turns to Phlegm. When dampness is created by impaired digestion, caused by chronic improper nutrition, it likes to end up in the Lungs and Large Intestine. When dampness moves into the Lungs, the usual symptom is phlegm coming up while coughing.",
                    "causes":["Excessive consumption of greasy, cold, or raw foods", "Frequent or reoccurring invasions of exterior pathogenic factors will weaken the Lungs and Spleen"],
                    "symptoms":["Chronic cough", "Repeated coughing bouts lots of white phlegm to be easily spat or coughed out, which helps but there's always more of it!", "Often can't speak clearly for phlegm in the breathing passages", "Phlegm in the throat and back of mouth", "Chest feels full: they know it's full of gunge", "Breathing properly is difficult: wheezes", "Unable properly to catch the breath", "Sitting or standing upright is better than lying down: if they lie down they need to be well propped up or breathing becomes very difficult"],
                    "foodToAvoid":["Dairy Products", "Sugar and sweets", "Red meat", "Peanuts", "Tofu", "Miso", "Soy products", "Greasy", "Fatty", "Oily", "Fried foods", "Wheat", "Oats", "Avoid overeating"],
                    "dietSuggestion":["Daikon", "Mushrooms", "Onions", "Radish", "Seaweeds", "Turnips", "Watercress cherries fennel", "Flaxseed cardamom", "Cayenne", "Cinnamon", "Garlic", "Ginger", "Horseradish"],
                    "emotion":{
                        avoid:[""],
                        suggest:[""]
                    },
                    "active":false
                },{
                    "key":"30",
                    "title":"Lung Yin deficiency",
                    "imgURL":lung_yinDeficiency,
                    "desc":"Our bodies mostly have an organic tendency to warm up when Qi doesn't flow properly. So when Lung Yin has been deficient for some time - perhaps for years - an additional factor comes into play, called Empty Heat. Think of the moisturising qualities that healthy Lungs provide. If, because of deficient Lung Yin, this is absent, then a situation of weak heating occurs. This is because, by moisturising, the Lungs help to cool, just as on a hot day you can cool yourself by spraying water on your skin. But when there's no such moisturiser, and you don't sweat enough, you continue to warm up",
                    "causes":["Lung Yin Deficiency can develop from prolonged Lung Qi Deficiency.", "Can be due to Stomach Yin Deficiency, which can be caused by irregular eating habits or diet.", "Can develop from Lung Dryness (from external or internal causes).", "Lung Yin deficiency can also arise from other deficiencies, like Kidney Yin Deficiency which usually arises from overwork, and from Poor eating habits which caused Stomach Yin Deficiency"],
                    "symptoms":["Dry cough or cough with sticky sputum", "Dryness in your lungs", "Dry mouth and throat, Hoarse voice", "Sleep often wakeful or light between, typically, 3 and 5am", "In the long-term, you may lose weight", "Lower grade fever or heat sensation in the evening time, malar flush, night sweats, five palm heat", "Insomnia"],
                    "foodToAvoid":["Hot spices", "Basil", "Chili", "Cinnamon", "Cloves", "Garlic", "Ginger coffee", "Alcohol", "Cigarettes", "Careful with bitter, aromatic, and warming foods, as they tend to be drying"],
                    "dietSuggestion":["Seaweed", "String bean", "White fungus apple", "Banana", "Honeydew melon", "Orange", "Peach", "Pear", "Tangerine", "Watermelon chicken broth", "Clams", "Egg", "Oysters", "Pork almonds", "Almond", "Milk", "Flaxseed", "Peanuts pine nuts", "Sunflower seeds", "Sesame seeds cottage cheese", "Cow’s milk", "Farmer’s cheese", "Butter (careful, don’t use dairy in excess, or if spleen qi deficiency exists)", "Milk with honey"],
                    "emotion":{
                        avoid:[""],
                        suggest:[""]
                    },
                    "active":false
                },{
                    "key":"31",
                    "title":"Damp cold in Lungs",
                    "imgURL":damp_coldLungs,
                    "desc":"The vitality of Lung-Qi is directly related to one’s ability to fight pathogens; especially those that are airborne such as the cold and the flu. When a person constantly catches other people’s cold, Lung-Qi is often deficient. The same diagnosis applies when someone never seems to heal from a long-standing cold he/she caught a while back. The reason being, again, that the person’s weakened lung-Qi was not able to fight back, or return the body to a state of homeostasis and health",
                    "causes":["Bad posture", "too much sitting", "especially sitting hunched", "smoking", "lack of exercise", "not knowing how to breathe properly", "living in stale air or air that doesn't circulate", "wearing tight clothes that inhibit free breathing"],
                    "symptoms":["Light shortness of breath", "Slight cough", "Spontaneous daytime sweating", "Weak voice", "Dislike od speaking", "Bright pale complexion", "Propensity to cold", "Dislike of cold", "Tiredness", "Thin watery sputum", "Weakened Immunity"],
                    "foodToAvoid":["Avoid dairy foods", "junk food, sweet and sugar"],
                    "dietSuggestion":["Eat foods that are warm", "Garlic", "Ginger", "Millets", "Jaggery", "Warm water"],
                    "emotion":{
                        avoid:[""],
                        suggest:[""]
                    },
                    "active":false
                },{
                    "key":"32",
                    "title":"Phlegm Heat in Lungs",
                    "imgURL":phlegm_heatLungs,
                    "desc":"Phlegm-Heat is the consequence of an invasion of external Wind that has penetrated into the Interior and changed into Heat.Phlegm-Heat on a physical level always presents with profuse expectoration of sputum and often cough.Phlegm-Heat on a mental-emotional level does not necessarily present with the expectoration of actual sputum.The main symptoms of Phlegm in the latter case would be a feeling of oppression of the chest, a Swollen tongue and a Slippery pulse. However, in cases of mental-emotional PhlegmHeat, there may also be the occasional expectoration of scanty sputum. This may also be just the expectoration of some sputum just once in the morning.",
                    "causes":["Greasy food", "Spicy food","Foods with a heating effect such as roasted or fried meat and hot curries", "alcohol","Emotions such as fury, frustration, resentment and jealousy"],
                    "symptoms":["Breathing wheezes", "Easily short of breath on talking or exertion", "Feeling of a bar across the chest", "Thirst, often for very cold drinks", "Feels hot", "Head feels heavy and foggy: no desire for mental or physical exertion", "Anxious, easily upset, critical, fixed ideas, hard to persuade once they've made up their mind though often just haven't got the energy to think at all", "Often some dizziness", "Nose and/or throat often stuffed up with catarrh", "Snores: sleep is unrefreshing", "Tongue: red and swollen. Its coating is yellow and adhesive"],
                    "foodToAvoid":["meat", "sweets", "alcohol", "Banana", "Frozen food", "Watermelon", "Packed and chemically contaminated food"],
                    "dietSuggestion":["luke-warm water"],
                    "emotion":{
                        avoid:[""],
                        suggest:[""]
                    },
                    "active":false
                },{
                    "key":"33",
                    "title":"Cold-Damp Invading Spleen",
                    "imgURL":cold_dampInvadingSpleen,
                    "desc":"Due to exterior damp (and cold) in the weather or living conditions. However, once it hits the spleen, it is an interior pattern. Dampness is heavy, descending, yin, turbid, and it obstructs and lingers. It also prevents clear yang from rising. Can lead to spleen yang vacuity.",
                    "causes":[""],
                    "symptoms":["Heavy head and body", "Abdominal distention or fullness", "Cold epigastrium", "Prefers warmth", "Fatigue", "Cumbersome limbs", "Bland but slimy taste", "No thirst", "Nausea", "Poor appetite", "Epigastric oppression", "Pain and hyper tonicity of the epigastrium and abdomen", "Dull pale complexion", "Possibly smoky yellow skin", "Inhibited urine", "Sloppy stools", "Abnormal vaginal discharge", "Urine Inconstitancy"],
                    "foodToAvoid":["Raw foods", "Cool", "Boiled", "Steamed and braised foods", "Fatty foods Exotic food", "Rich food", "Junk food", "Alcohol and drugs", "Hot climates especially if damp", "Too many prescribed medications, or taken in excess", "Bad eating habits"],
                    "dietSuggestion":["Grilled and broiled foods", "Basil", "Butter", "Cardamom", "Cheese (goat or sheep)", "Chicken", "Cinnamon", "Clove", "Fennel", "Fennel seed", "Ginger", "Horseradish", "Jasmine tea", "Leek", "Lychee", "Nutmeg", "Pumpkin", "Rosemary", "Shrimp", "Sunflower seed", "Thyme"],
                    "emotion":{
                        avoid:["Fear", "Sadness", "Dissatisfaction"],
                        suggest:["Exercises", "Physical games", "Water Steam"]
                    },
                    "active":false
                },{
                    "key":"34",
                    "title":"Spleen and Liver Blood Deficiency",
                    "imgURL":spleen_liverBloodDeficiency,
                    "desc":"The Liver stores Blood, so deficiency of Blood can easily affect Liver. The Liver also opens to eyes, so when Liver Blood is deficient, the eyes may lack nourishment and be unable to see clearly. The Liver also affects muscular tension. When deficient Liver Blood cannot nourish the tendons, symptoms such as muscular weakness, cramping, and hyper tonicity of tendons appear. Liver manifests in nails, and when the nails are not nourished by Liver Blood, they become brittle.",
                    "causes":["Food Qi produced by Spleen is the basis for formation of Blood. When the Spleen Qi is deficient, not enough Blood is produced. The Liver stores the Blood, so deficient Blood results in lack of Blood in Liver, hence the dizziness, numbness and pale/orange color of the sides of the Tongue.","In TCM the spleen is a source of vital energy and blood and a controller of blood circulation. When spleen qi is weak its blood controlling function is disturbed and bleeding results. Further, the production of blood and qi are decreased. In the blood routine examinations of patients with diarrhoea attributive to the deficiency of spleen energy, there was revealed a decreased haemoglobin level. Other patients who had pale lips, sallow complexion and bleeding had fewer mitochondria in the parietal cells of the stomach and these had obviously damaged crystal membranes"],
                    "symptoms":["Blurred vision and floaters in the eyes", "Scanty menstruation and amenorrhea Deficient Liver Blood not nourishing the Ren Mai and Chong Mai", "Dull pale face, dizziness, orthostatic hypertension, pale lips Blood Deficiency", "Numbness of the Limbs, muscular weakness, muscle spasms, cramps Liver Blood not nourishing the muscles and tendons", "Pale, withered, and brittle nails Liver Blood not nourishing the nails", "Kidney Qi or Kidney Jing Deficiency can cause Deficient Blood This is because or Kidneys play an important role in production of Blood and Qi"],
                    "foodToAvoid":["Sweetened food", "Processed food", "Cool food", "Fatty food", "Exotic food", "Rich food", "Junk food", "Alcohol and drugs", "Hot climates especially if damp", "Too many prescribed medications, or taken in excess", "Bad eating habits"],
                    "dietSuggestion":["Alfalfa sprouts", "Avocado", "Barley", "Cayenne pepper", "Chard", "Coconut meat", "Dairy (cow)", "Dates", "Egg", "Fresh fig", "Grape", "Hazelnut", "Kidney bean", "Lychee", "Miso", "Molasses", "Oats", "Peanut", "Rice", "Salmon", "Sesame", "Shiitake mushroom", "Soybean", "Watercress"],
                    "emotion":{
                        avoid:[""],
                        suggest:[""]
                    },
                    "active":false
                },{
                    "key":"35",
                    "title":"Heart yang deficiency",
                    "imgURL":heart_yangDeficiency,
                    "desc":"Yang is the force that makes the body matter - Yin - function. It is the warming principle of the body. When Yang is deficient general “cold signs” manifest such as feeling of cold and/or fear of cold. When cold signs manifest together with the above mentioned symptoms of Heart Qi deficiency then the Yang of the Heart is apparently also deficient",
                    "causes":["The most common cause of Heart-yang deficiency is chronic sadness or depression.", "It can also be caused by severe blood loss following an injury, hemorrhage, or childbirth.", "The final possible cause of Heart-yang deficiency is chronic Kidney-yang deficiency. This comes about because the Kidneys are the source of all yang energy in the body, and they have a very close relationship with the Heart."],
                    "symptoms":["Palpitations, bright pale face, cold limbs (especially hands)", "Easily frightened, difficulty falling asleep despite desire to sleep, forgetfulness, slightly dark lips, tired, shortness of breath on exertion, slight feeling of stuffiness in the heart region, dislikes speaking, spontaneous sweating, fatigued spirit, lack of strength, fear of cold", "If severe (collapse of yang), copious dripping sweat, reverting cold of the four limbs, clouded spirit, weak shallow breathing, blue-purple lips, grey pale complexion, possibly stupor, faint pulse almost expiring, bound or regularly interrupted. Rescue yang, restore consciousness, and stop sweating.", "Phlegm may accumulate due to lack of yang, with phlegm in the throat, cloudy thinking, slippery pulse, etc."],
                    "foodToAvoid":["Sweetened foods", "Processed foods", "Exotic food", "Rich food", "Junk food", "Alcohol and drugs", "Hot climates especially if damp", "Too many prescribed medications, or taken in excess", "Bad eating habits"],
                    "dietSuggestion":["Aniseed", "Cayenne pepper", "Chili pepper", "Cinnamon", "Cocoa", "Garlic", "Green onion", "Pepper", "Rosemary"],
                    "emotion":{
                        avoid:[""],
                        suggest:[""]
                    },
                    "active":false
                },{
                    "key":"36",
                    "title":"Heart Yin Deficiency",
                    "imgURL":heart_yinDeficiency,
                    "desc":"Heart Yin deficiency arises from various causes but wouldn’t arise without there being Heart Blood Deficiency. Overwork weakens Heart-Yin which leads to Empty Heat. Because there are underlying syndromes such as Heart Blood deficiency in this syndrome, other factors may need to be treated, (such as Stomach and Spleen qi for Blood, and Kidney Yin to support Yin deficiency), but in so far as we look at Heart Yin deficiency just in itself, the aim is to calm the mind, and to tonify Heart Yin.",
                    "causes":["History of emotional problems over a long period. For example, sadness, fear, worry or anxiety for months or years on end.", "The menopause: the menopause occurs when a woman’s body stops making so much Blood and this can cause Blood deficiency.", "Always being active or ‘on the go’ or overworking – for years."],
                    "symptoms":["The signs include not only general Qi deficiency signs, but signs specific to Heart Qi Deficiency, like palpitations.", "Anxiety and restlessness, insomnia, dream disturbed sleep, easily startled, poor memory, fidgeting, mallor flush, night sweats, heat in the 5 palms (hands, feet and face) and/or dry mouth. This pattern may indicate any number of western psychological conditions.", "Palpitations", "Dry throat and mouth", "Mental restlessness and uneasiness", "Fatigue, Shortness of Breath, Spontaneous Sweating, Pale Face"],
                    "foodToAvoid":[""],
                    "dietSuggestion":["Apple", "Cocoa", "Coconut milk", "Egg", "Marjoram", "Milk", "Mung beans", "Oats", "Wheat berries", "Whole wheat pasta"],
                    "emotion":{
                        avoid:[""],
                        suggest:[""]
                    },
                    "active":false
                },{
                    "key":"37",
                    "title":"Heart Fire Blazing",
                    "imgURL":heart_fireBlazing,
                    "desc":"Emotional problems e.g. chronic anxiety, constant worrying and depression can lead to Heart Fire. Over a long time, these Emotions can lead to Stagnation of Qi, which leads to Fire. Especially, when Qi stagnation is associated with mental depression it can turn into Fire and produce Heart Fire Blazing. Often patients with chronic depression will show Signs of this pattern although they may appear subdued. Heart Fire is often transmitted from Liver Fire. Therefore, any of the causes of Liver Fire (anger, resentment and frustration) can cause Heart Fire.",
                    "causes":["The Fire arises here not from external factors but from internal energies not flowing smoothly. Liver-Qi-Stagnation over a long period builds up frictional tension from which the heat rises up and enters the Heart.", "Heat in the Small Intestine, which can arise from eating too many hot, spicy foods.", "Heart Fire can also build up when Liver Fire continues over a long time. Liver Fire arises mainly from unresolved emotional tension extending over a long period. In other words, you can get it from prolonged Liver Qi stagnation if the latter becomes Liver Fire"],
                    "symptoms":["Palpitations", "Mouth and tongue ulcers Heart heat affecting the Heart", "Mental restlessness, agitation, impulsiveness, insomnia, and dream disturbed sleep Heat disturbing the Shen", "Blood in the urine or dark urine Heart Fire moving to the Small Intestine", "Bitter taste in the mouth Heart opens to the Tongue", "Thirst and a sensation of heat General heat signs"],
                    "foodToAvoid":["Hot and spicy foods", "Fried Foods", "Grilled food", "Broiled Foods", "Exotic food", "Rich food", "Junk food", "Alcohol and drugs", "Hot climates especially ifdamp", "Too many prescribed medications, or taken in excess", "Bad eating habits"],
                    "dietSuggestion":["Cool", "Boiled", "Steamed and braised foods", "Apple", "Cantaloupe", "Coconut meat", "Endive", "Lemon zest", "Milk", "Mung beans", "Sage", "Watermelon", "Wheat berries", "Wheat germ", "Whole wheat past"],
                    "emotion":{
                        avoid:[""],
                        suggest:[""]
                    },
                    "active":false
                },{
                    "key":"38",
                    "title":"Liver Qi Stagnation",
                    "imgURL":liver_qiStagnation,
                    "desc":"Liver Qi stagnation is when the energy or Qi of the liver system does not flow as easily and freely as it should. Liver Qi can become blocked or slowed down as a result of anxiety or stress, as well as certain foods in the diet. When this happens, different symptoms can occur. Stress, frustration and repression are the main causes of liver qi stagnation. There are a variety of physical and emotional conditions that are thought to diminish your qi. Among the most common causes are chronic stress and sleep deprivation. Both of these can elevate the stress hormone cortisol, which can interfere with immune function and increase the risk of depression and burnout. According to traditional Chinese medicine, liver qi can stagnate (become blocked) as a result of stress or anxiety.1Liver qi is said to be responsible to a large degree for the movement of qi through the body. When liver qi is stagnant, the blood becomes stagnant, creating a variety of issues, many of which may relate to the female reproductive system.",
                    "causes":["The main cause is mental irritation.", "This is a nice term covering many mental and emotional conditions, including anger, resentment, fear, frustration and melancholy. Being urged to do something when there isn't time for it is a classic for producing this syndrome - especially if you don't want to do it, or can't see why it should be done at all, either now, or by you.", "One of the reasons Eastern philosophies emphasise the importance of a calm mind is to minimise the likelihood of Stagnant Liver Qi"],
                    "symptoms":["Pain or discomfort anywhere along the sides of the body", "Depression, Mood swings", "Sighing", "Hiccups", "Inappropriate anger, Frustrated easily", "Sensation of a lump in throat", "Difficulty swallowing", "Bitter taste in mouth", "Excessive sleep", "Abdominal pain and discomfort, Constipation", "Stomach ache that improves after massage", "Stomach ache that worsens with anger", "PMS with irritability or swollen breasts", "Irregular or painful periods", "Churning sensation in stomach, Poor appetite"],
                    "foodToAvoid":[""],
                    "dietSuggestion":["Garlic", "Turmeric", "Kumquat", "Cherry", "Chicken", "Coconut meat", "Dates", "Tofu", "Mustard seed", "Squash", "Sweet potato", "Red and black date", "Rice", "Caraway seed", "Spearmint", "Mushroom", "Oregano", "Red bean", "Sweet basil", "Saffron"],
                    "emotion":{
                        avoid:[""],
                        suggest:[""]
                    },
                    "active":false
                },{
                    "key":"39",
                    "title":"Cold Stagnation in the Liver",
                    "imgURL":cold_stagnationLiver,
                    "desc":"Caused by invasion of Liver channel by Cold. Liver channel traverses external genitals; Cold contracts, causing pain and contraction. Factors that can lead to Cold Stagnation are: Pathogenic Influences: Wind-Chill invading the skin, channels, Stomach, Intestines, or Uterus. Emotions: Inward behavior, passivity and dullness can all be signs of Cold Stagnation.",
                    "causes":["The cause is Cold, which can arise from external or internal causes.", "Externally, it can be due to exposure to cold weather or cold circumstances (though theoretically any kind of weather could produce the symptoms). It can occur from wearing too few clothes, a common problem where fashion demands it, or from getting wet, even on moderately warm days, then allowing the cool breeze to blow you dry.", "Internally, this may arise when there is deficiency of Yang, which occurs usually only after a period of time, such as after a serious illness, or where there has been a condition of dampness for years, or in old age. It can occur suddenly, or at least much faster, after heavy lifting or extra-ordinary physical effort, but here there would also be cold, invading after you exhausted yourself."],
                    "symptoms":["The headache is at the top of the head, or a vertex headache. This is the hallmark symptom of this pattern. This shouldn’t be confused with a headache that starts at the base of the head and goes up to the top. This pattern is isolated on top of the head. It is usually a dull pain and differs from a Liver Yang Rising headache which is sharper in quality and may also be on top of the head. It is often an intense headache, and sometimes alleviated by warming up the body or lying down, and generally aggravated by cold, internal or external.", "There is generally a feeling of cold in the body.", "There is a desire for constant sleep", "There is a cold feeling, pain, or fullness in the abdomen. This pain is often radiating to the external genital organs, especially the scrotum or testes in men. The testicular pain is described as a “bearing down”, expanding, or bursting sensation, and often with swelling, coldness, or contraction of the scrotum. It should be alleviated by warmth and aggravated by cold.", "Hernia, especially abdominal, including hiatal and inguinal hernias.", "Vomiting is common in this pattern, and it is often after eating. It may only be retching or spitting up of saliva or mucus, especially after eating cold or raw food.", "Contraction of the tendons, cramping, or spasm which is usually alleviated by warmth and aggravated by cold.", "For women, this can manifest as painful menstruation (dysmenorrhea) or infertility, with a lowered basal body temperature, or a small change in basal body temperature in the two different phases of menstruation.", "Infertility is often caused by this pattern.", "Constant nasal drip can be caused from this pattern."],
                    "foodToAvoid":[""],
                    "dietSuggestion":["Refrigerated foods and drinks", "Raw foods, including salads", "Iced drinks", "Frozen yogurt, ice cream, popsicles, etc.", "Most fruit juices", "Melons", "Bananas", "Crabmeat and shellfish", "Soy milk and tofu"],
                    "emotion":{
                        avoid:[""],
                        suggest:[""]
                    },
                    "active":false
                }
            ]   
        }
    }
    handleClick=(key)=>{
        let neworgans = this.state.organs.map( organ =>{
            if(organ.key===key){
                return {...organ,"state":true}
            }else{
                return {...organ,"state":false}
            }
        })
        this.setState({organs:neworgans})
    }
    handleCheck(val) {
        
        let newPattern = this.state.pattern.map( pat =>{
            if(pat.key===val){
                return {...pat,"active":true}
            }else{
                return {...pat,"active":false}
            }
        })
        this.setState({pattern:newPattern})

    }

    render(){
        return(
            <div className="container">
                <div className="row text-center m-4">
                    <div className="col-12">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <h1 className="Blue">Nadiswara Patterns</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div>
                            {/* <ExpandableList></ExpandableList> */}
                            <div>
                                <ol >
                                {this.state.organs.map(organ =>{
                                    var data =null;
                                    var sublist=null;
                                    if(organ.state){
                                        data = organ.organpattern.map(pattern =>{
                                            return(
                                                
                                                <li className="" key={pattern.id} onClick={()=>this.handleCheck(pattern.id)} ><a href="#patternDescSection">{pattern.title}</a></li>
                                            )
                                        })


                                        sublist=(
                                            <div className="Sublist">
                                                <ul className="Sublistpatterns">
                                                    {data}
                                                </ul>
                                            </div>
                                        )
                                    }
                                    
                                    return(
                                        <div>
                                            <li key={organ.key} className={organ.state?"OrganListItemActive": "OrganListItem"} onClick={()=>this.handleClick(organ.key)}>{organ.organ}</li>
                                            {sublist}
                                        </div>
                                    )
                                })}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col-12">
                        <div className="mt-3">
                            <ol>
                                {this.state.pattern.map(pat =>{
                                    return(
                                        <li key={pat.key} onClick={()=>this.handleCheck(pat.key)} ><a href="#patternDescSection">{pat.title}</a></li>
                                    )})}
                                
                            
                            
                            </ol>
                        </div>
                    </div>
                </div> */}
                {/* <div className="row">
                    {this.state.pattern.map(qns =>{
                        return(
                            <div className="col-12 m-2">
                                <h4>{qns.question}</h4>
                                <p>{qns.answer}</p>
                            </div>
                        )
                    })}
                </div> */}


                {this.state.pattern.map(pat =>{
                    if(pat.active){
                        return(
                        <div id="patternDescSection" className="row">
                            <div className="col-12">
                                <div className="Pattern mt-4">
                                    <h4>{pat.title}</h4>
                                    <div className="ImgBorder m-4">
                                        <img className="p-1" width="100%" src={pat.imgURL} alt="spleen pattern" />
                                    </div>
                                    <div className="PatternDesc">
                                        <p>{pat.desc}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="Causes">
                                    <h4>Causes</h4>
                                    <ul>
                                        {pat.causes.map(cause =>{
                                            return(
                                                <li>{cause}</li>
                                            )
                                        })}
                                
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="Symptoms">
                                    <h4>Symptoms</h4>
                                    <ul>
                                        {pat.symptoms.map(symptom =>{
                                            return(
                                                <li>{symptom}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="FoodToAvoid">
                                    <h4>Food To Avoid</h4>
                                    <ul>
                                        {pat.foodToAvoid.map(foodAvoid =>{
                                            return(
                                                <li>{foodAvoid}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="DietSuggestions">
                                    <h4>Diet Suggestions</h4>
                                    <ul>
                                        {pat.dietSuggestion.map(diet =>{
                                            return(
                                                <li>{diet}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="EmotionalCorrection">
                                    <h4>Emotional Corrections</h4>
                                    <div className="AvoidEmotions">
                                        <h5>Avoid</h5>
                                        <ul>
                                            {pat.emotion.avoid.map(avoid =>{
                                            return(
                                                <li>{avoid}</li>
                                            )
                                            })}
                                        </ul>
                                    </div>
                                    <div className="SuggestEmotions">
                                        <h5>Suggest</h5>
                                        <ul>
                                            {pat.emotion.suggest.map(suggest =>{
                                            return(
                                                <li>{suggest}</li>
                                            )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        )
                    }
                })}

                
            </div>
        )
    }

}


export default OrganPattern;