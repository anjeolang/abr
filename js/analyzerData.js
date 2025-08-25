const analyzerData = [
  {
    category: "Systemic Vessels",
    list: [
      {
        name: "Blood Viscosity",
        HIGH: {
          meaning: "Dugo’y malapot, bumabagal ang daloy.",
          condition: "Hypertension, thrombosis, stroke risk.",
          advice: "Uminom ng maraming tubig araw-araw. Kumain ng prutas at gulay (high fiber). Iwasan ang matataba, maalat at matatamis na pagkain. Limitahan ang alak at itigil paninigarilyo. Maglakad o mag-swimming regularly. I-monitor ang blood pressure at cholesterol."
        },
        LOW: {
          meaning: "Dugo’y malabnaw, mabilis ang daloy pero madaling magdugo.",
          condition: "Risk ng anemia, malnutrition, internal bleeding, clotting problems.",
          advice: "Kumain ng iron-rich foods tulad ng spinach, karne, itlog. Iwasan ang sobrang pag-inom ng tubig na nagdudulot ng dilution. Bantayan ang pagdurugo at sintomas ng anemia. Kumonsulta sa doktor kung may abnormal na pagdurugo o laging pagod."
        }
      },
      {
        name: "Cholesterol Crystal",
        HIGH: {
          meaning: "Maraming cholesterol deposits sa arteries.",
          condition: "Atherosclerosis, heart attack, stroke.",
          advice: "Kumain ng low-fat diet, more fish, nuts, gulay at whole grains. Iwasan ang fast food, pritong pagkain, at processed food. Mag-ehersisyo araw-araw. Limitahan ang alak at itigil paninigarilyo. Magpa-check-up ng cholesterol levels."
        },
        LOW: {
          meaning: "Mababa ang cholesterol deposits.",
          condition: "Possible hormone imbalance, weak cell membranes, poor immune function.",
          advice: "Kumain ng healthy fats tulad ng avocado, olive oil, nuts, at fatty fish. Panatilihin ang balanseng diet, iwasan ang sobrang low-fat diet. Kumonsulta sa doktor kung may chronic malnutrition o unexplained weakness."
        }
      },
      {
        name: "Blood Fat",
        HIGH: {
          meaning: "Mataas ang triglycerides at blood lipids.",
          condition: "Risk sa metabolic syndrome, fatty liver, diabetes.",
          advice: "Iwasan ang matatamis at matatabang pagkain. Kumain ng fiber-rich foods at omega-3 sources (isda, chia seeds). Mag-exercise araw-araw at bantayan ang timbang."
        },
        LOW: {
          meaning: "Mababa ang blood lipids.",
          condition: "Malnutrition, poor absorption.",
          advice: "Dagdagan ang healthy fats at balanced meals. Siguraduhing may protina, nuts, avocado, olive oil. Kumonsulta sa dietitian kung may weight loss o nutrient deficiency."
        }
      },
      {
        name: "Vascular Resistance",
        HIGH: {
          meaning: "Mataas resistance sa blood vessels, mataas ang pressure.",
          condition: "Hypertension, arterial stiffness.",
          advice: "Low-salt diet, potassium-rich foods. Mag-aerobic exercise gaya ng walking o swimming. Iwasan ang stress, regular BP check. Limitahan ang processed food."
        },
        LOW: {
          meaning: "Mababa ang resistance, mababa ang blood pressure.",
          condition: "Hypotension, poor perfusion.",
          advice: "Uminom ng tubig at electrolytes. Iwasan ang biglaang pagtayo. Kumonsulta sa doktor kung palaging dizzy o mahina ang energy."
        }
      },
      {
        name: "Vascular Elasticity",
        HIGH: {
          meaning: "Sobrang flexible ang arteries.",
          condition: "Risk ng aneurysm, weak vessel wall.",
          advice: "I-monitor ang BP, kumain ng antioxidant-rich diet, iwasan ang heavy lifting o extreme strain."
        },
        LOW: {
          meaning: "Matigas ang arteries, mababa ang elasticity.",
          condition: "Atherosclerosis, aging vessels, hypertension.",
          advice: "Antioxidants at omega-3-rich diet, regular walking, iwasan ang unhealthy fats, bantayan ang BP at cholesterol."
        }
      }
    ]
  },

  {
    category: "Heart Function",
    list: [
      {
        name: "Myocardial Blood Demand",
        HIGH: {
          meaning: "Mataas ang pangangailangan ng dugo ng puso.",
          condition: "Overwork, ischemia risk.",
          advice: "Rest, low-fat diet, heart-healthy foods, stress management, monitor BP."
        },
        LOW: {
          meaning: "Mababa ang pangangailangan ng dugo—mahina ang puso.",
          condition: "Poor cardiac output, heart weakness.",
          advice: "Gentle cardio exercises, nutritious diet, regular cardiology check-up."
        }
      },
      {
        name: "Myocardial Blood Perfusion Volume",
        HIGH: {
          meaning: "Sobrang dugo sa puso.",
          condition: "Overload, strain.",
          advice: "Moderate fluid intake, avoid salt overload, regular monitoring of heart symptoms."
        },
        LOW: {
          meaning: "Kulang ang blood flow sa puso.",
          condition: "Ischemia, angina risk.",
          advice: "Quit smoking, low-trans-fat diet, seek medical care for chest discomfort."
        }
      },
      {
        name: "Myocardial Oxygen Consumption",
        HIGH: {
          meaning: "Mataas ang oxygen use ng puso.",
          condition: "Stress, high workload.",
          advice: "Limit stimulants (coffee, energy drinks), antioxidant diet, adequate rest."
        },
        LOW: {
          meaning: "Mababa ang oxygen use—mahinang activity.",
          condition: "Possible early heart failure.",
          advice: "Mild exercise, iron-rich foods, regular check-up."
        }
      },
      {
        name: "Stroke Volume",
        HIGH: {
          meaning: "Maraming dugo kada tibok ng puso.",
          condition: "Hyperdynamic state, strain.",
          advice: "Monitor BP, avoid stimulants, moderate exercise."
        },
        LOW: {
          meaning: "Kaunting dugo kada tibok—mahina output.",
          condition: "Heart failure, dehydration.",
          advice: "Hydration, light cardio, seek medical review if symptomatic."
        }
      },
      {
        name: "Left Ventricular Ejection Impedance",
        HIGH: {
          meaning: "Mataas resistance sa paglabas ng dugo.",
          condition: "Hypertension, aortic stenosis.",
          advice: "Low-salt diet, avoid smoking, BP control, moderate exercise."
        },
        LOW: {
          meaning: "Mababa resistance—madaling lumabas ang dugo.",
          condition: "Low BP or valve issue.",
          advice: "Balanced fluids and electrolytes, monitor dizziness, medical check-up if symptomatic."
        }
      },
      {
        name: "Left Ventricular Effective Pump Power",
        HIGH: {
          meaning: "Malakas ang pump power—posibleng overwork.",
          condition: "Cardiac hypertrophy risk.",
          advice: "Moderate training, rest, avoid stimulants, regular heart check-up."
        },
        LOW: {
          meaning: "Mahina ang pump ng puso.",
          condition: "Heart failure risk.",
          advice: "Heart-healthy diet, light walk, cardiology follow-up."
        }
      }
    ]
  },

  {
    category: "Coronary & Brain Circulation",
    list: [
      {
        name: "Coronary Artery Elasticity",
        HIGH: {
          meaning: "Sobrang malambot ang coronary arteries.",
          condition: "Aneurysm risk.",
          advice: "BP control, antioxidant-rich diet, avoid heavy lifting."
        },
        LOW: {
          meaning: "Matigas ang coronary arteries.",
          condition: "Atherosclerosis, heart attack risk.",
          advice: "Omega-3 foods, fiber, exercise, lipid control."
        }
      },
      {
        name: "Coronary Perfusion Pressure",
        HIGH: {
          meaning: "Mataas pressure sa coronary arteries.",
          condition: "Overstrain sa puso.",
          advice: "Low-salt diet, stress reduction, monitor BP."
        },
        LOW: {
          meaning: "Mababa ang coronary blood pressure.",
          condition: "Ischemia risk.",
          advice: "Hydration, avoid overexertion, heart check-up if symptoms."
        }
      },
      {
        name: "Cerebral Blood Vessel Elasticity",
        HIGH: {
          meaning: "Sobrang malambot ang utak na ugat.",
          condition: "Aneurysm risk.",
          advice: "BP control, vitamin C-rich diet, weight management."
        },
        LOW: {
          meaning: "Matigas ang utak na ugat.",
          condition: "Stroke, poor brain perfusion.",
          advice: "Brain-healthy diet, exercise, BP & cholesterol control."
        }
      },
      {
        name: "Brain Tissue Blood Supply Status",
        HIGH: {
          meaning: "Sobrang dugo sa utak.",
          condition: "Intracranial pressure, headaches.",
          advice: "Stress reduction, hydration, rest, consult if severe headache."
        },
        LOW: {
          meaning: "Kulang ang dugo sa utak.",
          condition: "Dizziness, cognitive decline, stroke risk.",
          advice: "Omega-3 foods, walking, hydration, seek medical help if frequent memory issues or fainting."
        }
      }
    ]
  },
  {
    category: "Gastrointestinal Function",
    list: [
      {
        name: "Pepsin Secretion Coefficient",
        HIGH: {
          meaning: "Sobrang paggawa ng pepsin sa tiyan.",
          condition: "Overactive gastric acid → acid reflux, gastritis risk.",
          advice: "Iwasan ang mataba, maaalat, maanghang at acidic foods. Kumain ng smaller meals pero mas madalas. Uminom ng sapat na tubig. Manage stress, avoid caffeine at alcohol. Light exercise tulad ng walking pagkatapos kumain."
        },
        LOW: {
          meaning: "Mababa ang pepsin production.",
          condition: "Poor protein digestion, nutrient malabsorption.",
          advice: "Kumain ng light, easily digestible proteins (egg whites, fish, tofu). Avoid heavy greasy meals. Maintain hydration. Gentle exercise, i-monitor digestion, kumonsulta kung may chronic bloating o indigestion."
        }
      },
      {
        name: "Gastric Peristalsis Function Coefficient",
        HIGH: {
          meaning: "Mabilis ang gastric motility.",
          condition: "Diarrhea, poor nutrient absorption.",
          advice: "Eat small, frequent meals. Focus sa soluble fiber (oats, banana). Avoid overly spicy and greasy foods. Hydrate properly. Stress management, moderate exercise."
        },
        LOW: {
          meaning: "Mabagal ang gastric motility.",
          condition: "Constipation, bloating, delayed digestion.",
          advice: "Increase dietary fiber (vegetables, whole grains), hydration. Light exercise (walking, yoga). Avoid heavy meals at night. Consider probiotics for gut health."
        }
      },
      {
        name: "Gastric Absorption Function Coefficient",
        HIGH: {
          meaning: "Sobrang absorption ng nutrients sa tiyan.",
          condition: "Risk of nutrient overload, possible metabolic strain.",
          advice: "Maintain balanced diet, avoid excessive fats and sugars. Regular exercise, hydration, and monitor weight."
        },
        LOW: {
          meaning: "Mababa ang nutrient absorption sa tiyan.",
          condition: "Malnutrition, vitamin/mineral deficiency.",
          advice: "Eat nutrient-dense foods (protein, vitamins, minerals). Consider supplements if needed. Light exercise, regular check-ups for deficiencies."
        }
      },
      {
        name: "Small Intestine Peristalsis Function Coefficient",
        HIGH: {
          meaning: "Mabilis ang small intestine motility.",
          condition: "Diarrhea, nutrient loss.",
          advice: "Eat easily digestible foods, avoid greasy/spicy meals. Stay hydrated, balance fiber intake, avoid caffeine/alcohol."
        },
        LOW: {
          meaning: "Mabagal ang small intestine motility.",
          condition: "Constipation, bacterial overgrowth risk.",
          advice: "Increase dietary fiber, hydration, light physical activity. Consider probiotic foods (yogurt, kefir). Eat regular meals, avoid heavy late-night dinners."
        }
      },
      {
        name: "Small Intestine Absorption Function Coefficient",
        HIGH: {
          meaning: "Sobrang absorption sa small intestine.",
          condition: "Risk of excess calorie/nutrient intake, metabolic strain.",
          advice: "Eat balanced meals, monitor portion sizes. Maintain hydration and regular exercise. Avoid overly processed or sugary foods."
        },
        LOW: {
          meaning: "Mababa ang nutrient absorption sa small intestine.",
          condition: "Malnutrition, vitamin/mineral deficiency.",
          advice: "Focus on nutrient-rich foods (protein, healthy fats, vitamins). Consider supplementation if needed. Stay hydrated, light exercise, regular health check-ups."
        }
      }
    ]
  },
  {
    category: "Large Intestine Function",
    list: [
      {
        name: "Large Intestine Peristalsis Function Coefficient",
        HIGH: {
          meaning: "Mabilis ang motility ng malaking bituka.",
          condition: "Diarrhea, nutrient loss, dehydration risk.",
          advice: "Eat small, frequent meals. Focus sa soluble fiber tulad ng oats, banana. Uminom ng sapat na tubig. Iwasan ang greasy at spicy foods. Moderate exercise at stress management."
        },
        LOW: {
          meaning: "Mabagal ang motility ng malaking bituka.",
          condition: "Constipation, bloating, toxin buildup.",
          advice: "Increase dietary fiber (vegetables, whole grains), stay hydrated. Regular walking o light yoga. Iwasan ang heavy meals bago matulog. Consider probiotics for gut health."
        }
      },
      {
        name: "Colonic Absorption Coefficient",
        HIGH: {
          meaning: "Sobrang absorption sa colon.",
          condition: "Possible excess calorie/nutrient absorption → metabolic strain.",
          advice: "Eat balanced diet, moderate portions. Avoid processed and sugary foods. Hydrate and maintain regular exercise."
        },
        LOW: {
          meaning: "Mababa ang absorption sa colon.",
          condition: "Malnutrition, vitamin/mineral deficiency, electrolyte imbalance.",
          advice: "Eat nutrient-dense foods, hydrate well. Consider supplements if necessary. Regular check-ups and light exercise."
        }
      },
      {
        name: "Intestinal Bacteria Coefficient",
        HIGH: {
          meaning: "Overgrowth ng intestinal bacteria.",
          condition: "Possible bloating, gas, inflammation, IBS-like symptoms.",
          advice: "Eat fiber-balanced meals, limit sugar and processed food. Include probiotic foods (yogurt, kefir, fermented vegetables). Hydrate and manage stress."
        },
        LOW: {
          meaning: "Mababa ang beneficial gut bacteria.",
          condition: "Poor digestion, weak immune function, constipation.",
          advice: "Include prebiotic and probiotic foods (banana, garlic, yogurt). Avoid unnecessary antibiotics. Hydrate and exercise lightly."
        }
      },
      {
        name: "Intraluminal Pressure Coefficient",
        HIGH: {
          meaning: "Mataas ang pressure sa bituka.",
          condition: "Risk ng diverticulosis, hemorrhoids, discomfort.",
          advice: "Eat high-fiber diet, hydrate well. Avoid straining at bowel movement. Regular light exercise. Maintain healthy bowel habits."
        },
        LOW: {
          meaning: "Mababa ang pressure sa bituka.",
          condition: "Slow bowel movement, constipation, poor transit.",
          advice: "Increase fiber intake, hydrate well. Encourage regular physical activity. Eat smaller, frequent meals. Consider probiotics if recommended."
        }
      }
    ]
  },
  {
  category: "Liver Function",
    list: [
    {
      "name": "Protein Metabolism",
      "HIGH": {
        "meaning": "Sobra ang pagproseso ng protina ng atay.",
        "condition": "Maaaring dahil sa mataas na protein intake, overwork ng liver, o early sign ng liver stress.",
        "advice": "Bawasan ang sobrang high-protein diet. Panatilihin ang balanseng pagkain na may gulay, prutas, at whole grains. Uminom ng sapat na tubig. Iwasan ang processed meats at sobrang protina supplements. Regular na pahinga at light exercise."
      },
      "LOW": {
        "meaning": "Mahina ang kakayahan ng atay sa paggamit o pagproseso ng protina.",
        "condition": "Posibleng nutrient deficiency, mahina ang liver function, o malnutrition.",
        "advice": "Dagdagan ng quality protein (isda, itlog, beans, nuts, tofu). Uminom ng sapat na tubig para matulungan ang digestion. Kumain ng gulay at prutas para sa vitamins at antioxidants. Iwasan ang alak at fatty foods. Regular na check-up kung chronic."
      }
    },
    {
      "name": "Energy Production Function",
      "HIGH": {
        "meaning": "Mataas ang energy conversion ng liver, maaaring overactive metabolism.",
        "condition": "Maaaring dahil sa stress, hyperthyroid influence, o sobrang sugar intake.",
        "advice": "Iwasan ang refined sugar at energy drinks. Kumain ng complex carbs (oats, brown rice, kamote) para stable energy. Magkaroon ng tamang tulog at stress management (breathing, meditation). Regular light-to-moderate exercise."
      },
      "LOW": {
        "meaning": "Mahina ang kapasidad ng atay sa paggawa ng energy mula sa pagkain.",
        "condition": "Maaari itong sanhi ng liver fatigue, poor nutrition, o weak metabolism.",
        "advice": "Dagdagan ang healthy carbs at protina sa diet. Kumain ng prutas na may natural sugar (saging, mansanas, ubas). Uminom ng maraming tubig. Magkaroon ng sapat na tulog at pahinga. Iwasan ang labis na alak at oily foods."
      }
    },
    {
      "name": "Detoxification Function",
      "HIGH": {
        "meaning": "Sobra ang detoxification activity ng atay, maaaring tanda ng mataas na toxin load.",
        "condition": "Possible exposure sa chemicals, gamot, alcohol, o unhealthy lifestyle.",
        "advice": "Bawasan ang exposure sa toxins (sigarilyo, alak, processed food). Uminom ng maraming tubig at herbal teas (salabat, green tea). Kumain ng gulay na mataas sa antioxidants (broccoli, spinach, malunggay). Magpahinga at iwasan ang stress."
      },
      "LOW": {
        "meaning": "Mahina ang kakayahan ng atay mag-detoxify.",
        "condition": "Maaaring dahil sa liver damage, fatty liver, o poor diet.",
        "advice": "Palakasin ang detox function sa pagkain ng prutas at gulay (lemon, cucumber, papaya). Uminom ng 8–10 basong tubig. Iwasan ang alak, fast food, at oily food. Gumamit ng healthy oils (olive, coconut). Gumalaw araw-araw para sa sirkulasyon."
      }
    },
    {
      "name": "Bile Secretion Function",
      "HIGH": {
        "meaning": "Mataas ang bile secretion, maaaring overactive ang gallbladder o liver response.",
        "condition": "Possible gallbladder irritation o sobra ang fatty food intake.",
        "advice": "Bawasan ang fatty foods at processed oils. Kumain ng gulay at prutas na tumutulong sa bile balance (beetroot, carrots, citrus). Uminom ng sapat na tubig. Mag-exercise moderately para ma-regulate ang digestion."
      },
      "LOW": {
        "meaning": "Mahina ang bile secretion.",
        "condition": "Maaaring humantong sa poor fat digestion, bloating, at gallstone risk.",
        "advice": "Dagdagan ang gulay na may fiber at prutas. Uminom ng sapat na tubig. Gumamit ng healthy fats (avocado, olive oil, nuts). Kumain ng small frequent meals. Iwasan ang sobrang oily food at alak."
      }
    },
    {
      "name": "Liver Fat Content",
      "HIGH": {
        "meaning": "Mataas ang taba sa atay (fatty liver).",
        "condition": "Posibleng Non-Alcoholic Fatty Liver Disease (NAFLD) o epekto ng alak.",
        "advice": "Magbawas ng timbang kung overweight. Kumain ng gulay, prutas, whole grains. Iwasan ang matatamis at oily food. Uminom ng tubig at green tea. Mag-exercise 30 mins araw-araw. Bawasan o iwasan ang alak. Regular check-up para sa liver enzymes."
      },
      "LOW": {
        "meaning": "Normal to mababa ang taba sa atay (healthy state).",
        "condition": "Ipinapakita na healthy ang liver sa aspeto ng fat storage.",
        "advice": "I-maintain ang healthy lifestyle. Kumain ng balanced diet na may gulay, prutas, lean protein. Iwasan ang sobrang alak at processed food. Panatilihin ang regular na exercise at tamang tulog."
      }
    }
  ]
  },
  {
    category: "Gallbladder Function",
    list: [
      {
        name: "Serum Globulin (A/G)",
        HIGH: {
          meaning: "Mataas ang globulin ratio sa dugo.",
          condition: "Maaaring senyales ng chronic inflammation, infection, o liver/gallbladder stress.",
          advice: "Iwasan ang sobrang processed foods at alcohol. Kumain ng prutas, gulay, at lean protein. Uminom ng sapat na tubig. Moderate exercise araw-araw. Magpatingin sa doktor para sa regular liver at gallbladder check-up."
        },
        LOW: {
          meaning: "Mababa ang globulin ratio.",
          condition: "Posibleng immune deficiency o malnutrition.",
          advice: "Dagdagan ang protein intake mula sa healthy sources (isda, itlog, beans). Kumain ng nutrient-rich foods at panatilihin hydration. Light exercise at regular health monitoring."
        }
      },
      {
        name: "Total Bilirubin (TBIL)",
        HIGH: {
          meaning: "Mataas ang bilirubin sa dugo.",
          condition: "Maaaring jaundice, gallstones, liver stress o obstruction.",
          advice: "Iwasan ang alak at fatty/oily foods. Kumain ng gulay, prutas, whole grains. Hydrate properly. Magpatingin sa gastroenterologist o liver specialist. Regular monitoring ng liver function tests."
        },
        LOW: {
          meaning: "Mababang bilirubin, kadalasan normal.",
          condition: "Generally not clinically significant, ngunit puwedeng indikasyon ng nutrient imbalance.",
          advice: "Panatilihin balanced diet, proper hydration, at healthy lifestyle. Kumain ng protein at antioxidant-rich foods."
        }
      },
      {
        name: "Alkaline Phosphatase (ALP)",
        HIGH: {
          meaning: "Mataas ang ALP level.",
          condition: "Maaaring gallstones, bile duct obstruction, liver stress.",
          advice: "Iwasan ang fatty, processed, at fried foods. Kumain ng gulay at prutas. Uminom ng maraming tubig. Regular light exercise. Magpatingin sa doktor para sa liver/gallbladder evaluation."
        },
        LOW: {
          meaning: "Mababang ALP level.",
          condition: "Maaaring indikasyon ng malnutrition, hypothyroidism, o rare liver issue.",
          advice: "Dagdagan ang nutrient-rich foods (protina, vitamins, minerals). Maintain hydration at light exercise. Kumonsulta sa doktor kung may symptoms ng fatigue o digestive issues."
        }
      },
      {
        name: "Serum Total Bile Acid (TBA)",
        HIGH: {
          meaning: "Sobrang bile acid sa dugo.",
          condition: "Maaaring bile obstruction, gallstones, liver dysfunction.",
          advice: "Bawasan ang oily at fried foods. Kumain ng gulay, prutas, whole grains. Uminom ng sapat na tubig. Mag-exercise moderately. Regular liver/gallbladder monitoring."
        },
        LOW: {
          meaning: "Mababang bile acid.",
          condition: "Maaaring poor fat digestion o gallbladder hypofunction.",
          advice: "Kumain ng healthy fats (olive oil, avocado, nuts) at fiber-rich foods. Hydrate well. Light exercise at small frequent meals. Monitor digestion at bowel movement."
        }
      },
      {
        name: "Bilirubin (DBIL)",
        HIGH: {
          meaning: "Mataas ang direct bilirubin.",
          condition: "Maaaring gallbladder obstruction, hepatitis, o liver stress.",
          advice: "Iwasan ang fatty foods at alcohol. Kumain ng gulay, prutas, at lean protein. Uminom ng maraming tubig. Magpatingin sa liver/gallbladder specialist. Regular monitoring ng liver enzymes."
        },
        LOW: {
          meaning: "Mababang direct bilirubin, kadalasan normal.",
          condition: "Generally not clinically significant.",
          advice: "Panatilihin healthy diet, hydration, at lifestyle. Kumain ng nutrient-rich foods. Regular exercise at sleep hygiene."
        }
      }
    ]
  },
  {
    category: "Pancreatic Function",
    list: [
      {
        name: "Insulin",
        HIGH: {
          meaning: "Sobrang insulin sa dugo (hyperinsulinemia).",
          condition: "Maaaring pre-diabetes, insulin resistance, metabolic syndrome.",
          advice: "Limit sugary foods at refined carbs. Kumain ng high fiber foods (gulay, oats, whole grains). Regular exercise (walking, jogging, resistance training). Maintain healthy weight. Monitor blood sugar regularly."
        },
        LOW: {
          meaning: "Mababa ang insulin production (hypoinsulinemia).",
          condition: "Maaaring type 1 diabetes, beta-cell dysfunction, malnutrition.",
          advice: "Monitor blood sugar and carbohydrate intake. Kumain ng balanced diet with complex carbs, protein, and healthy fats. Stay hydrated. Regular physical activity. Kumonsulta sa endocrinologist para sa management at possible insulin therapy."
        }
      },
      {
        name: "Pancreatic Polypeptide (PP)",
        HIGH: {
          meaning: "Mataas ang pancreatic polypeptide.",
          condition: "Maaaring pancreatic stress, endocrine imbalance, or digestive regulation issue.",
          advice: "Maintain balanced diet. Avoid overeating, high-fat, or processed foods. Light exercise. Stress management techniques like meditation or yoga. Hydrate adequately."
        },
        LOW: {
          meaning: "Mababa ang pancreatic polypeptide.",
          condition: "Maaaring digestive dysfunction, poor enzyme regulation, or endocrine imbalance.",
          advice: "Eat smaller frequent meals. Include fiber-rich foods and moderate protein. Stay hydrated. Light exercise to stimulate digestive motility. Regular check-ups to monitor pancreatic function."
        }
      },
      {
        name: "Glucagon",
        HIGH: {
          meaning: "Mataas ang glucagon level sa dugo.",
          condition: "Maaaring hyperglycemia risk, liver glucose release overactivity.",
          advice: "Limit high-sugar foods. Maintain balanced meals with complex carbs and protein. Regular exercise to improve glucose utilization. Monitor blood sugar. Avoid stress and inadequate sleep."
        },
        LOW: {
          meaning: "Mababa ang glucagon level.",
          condition: "Maaaring hypoglycemia risk, pancreatic alpha-cell dysfunction.",
          advice: "Eat regular meals with balanced protein and complex carbs. Keep snacks handy to prevent hypoglycemia. Stay hydrated. Light exercise. Regular monitoring of blood sugar levels and consult endocrinologist if needed."
        }
      }
    ]
  },
  {
    category: "Kidney Function",
    list: [
      {
        name: "Urobilinogen Index",
        HIGH: {
          meaning: "Sobrang urobilinogen sa ihi.",
          condition: "Maaaring senyales ng liver dysfunction, hemolysis, o biliary obstruction.",
          advice: "Iwasan ang sobrang fatty at processed foods. Kumain ng gulay at prutas. Uminom ng sapat na tubig araw-araw. Limit alcohol. Magpatingin sa doktor para sa liver at kidney evaluation."
        },
        LOW: {
          meaning: "Mababa o walang urobilinogen sa ihi.",
          condition: "Maaaring may biliary obstruction, antibiotic effect, o rare liver issue.",
          advice: "Panatilihin balanced diet, proper hydration, at healthy lifestyle. Kumain ng nutrient-rich foods. Regular check-up para sa liver at kidney function."
        }
      },
      {
        name: "Uric Acid Index",
        HIGH: {
          meaning: "Mataas ang uric acid sa dugo/ihi.",
          condition: "Maaaring gout, kidney stress, high purine diet, or metabolic syndrome.",
          advice: "Iwasan ang red meat, seafood, alcohol (lalo na beer), at sugary drinks. Uminom ng 8–10 basong tubig araw-araw. Kumain ng low-purine foods (gulay, whole grains, fruits). Regular exercise at maintain healthy weight."
        },
        LOW: {
          meaning: "Mababang uric acid sa dugo/ihi.",
          condition: "Maaaring kidney over-excretion, low protein intake, o rare metabolic issue.",
          advice: "Kumain ng balanced diet with moderate protein. Hydrate properly. Monitor kidney function. Consult doctor if persistent symptoms."
        }
      },
      {
        name: "Blood Urea Nitrogen (BUN) Index",
        HIGH: {
          meaning: "Mataas ang BUN sa dugo.",
          condition: "Possible kidney dysfunction, dehydration, high protein diet.",
          advice: "Uminom ng sapat na tubig (hydration). Bawasan ang sobrang protein at processed foods. Regular check-up sa kidney function. Light exercise at maintain healthy weight."
        },
        LOW: {
          meaning: "Mababa ang BUN sa dugo.",
          condition: "Maaaring malnutrition, liver dysfunction, o overhydration.",
          advice: "Kumain ng adequate protein (eggs, lean meat, beans). Maintain hydration, pero iwasan sobra. Balanced diet at regular check-up sa liver at kidney."
        }
      },
      {
        name: "Proteinuria Index",
        HIGH: {
          meaning: "May protein sa ihi (proteinuria).",
          condition: "Maaaring kidney damage, glomerular disease, diabetes, hypertension.",
          advice: "Iwasan ang high-salt, high-protein, processed foods. Uminom ng sapat na tubig. Maintain blood pressure at blood sugar control. Regular exercise at medical monitoring ng kidney function."
        },
        LOW: {
          meaning: "Normal or low protein in urine.",
          condition: "Healthy kidney filtration.",
          advice: "Panatilihin healthy lifestyle. Balanced diet with protein and fiber. Hydration and regular physical activity."
        }
      }
    ]
  },
  {
    category: "Lung Function",
    list: [
      {
        name: "Vital Capacity (VC)",
        HIGH: {
          meaning: "Mas mataas ang lung capacity kaysa normal.",
          condition: "Maaaring resulta ng regular aerobic exercise o lung adaptation, kadalasan normal.",
          advice: "Panatilihin ang active lifestyle. Regular aerobic exercise (swimming, jogging, cycling). Iwasan ang paninigarilyo at air pollution exposure. Maintain balanced diet para sa lung health."
        },
        LOW: {
          meaning: "Mababa ang lung capacity.",
          condition: "Maaaring chronic respiratory disease, asthma, COPD, or weak lung muscles.",
          advice: "Regular breathing exercises (deep breathing, diaphragmatic breathing). Avoid smoking at polluted areas. Kumain ng antioxidant-rich foods (fruits, vegetables). Moderate aerobic exercise kung kaya ng katawan. Kumonsulta sa pulmonologist kung persistent."
        }
      },
      {
        name: "Total Lung Capacity (TLC)",
        HIGH: {
          meaning: "Sobrang lung expansion.",
          condition: "Possible overinflation (emphysema) o lung adaptation sa athletes.",
          advice: "Regular monitoring ng lung function kung may symptoms. Maintain healthy lifestyle. Iwasan ang smoking at air pollutants. Balanced diet with antioxidants. Light to moderate exercise."
        },
        LOW: {
          meaning: "Mababa ang total lung volume.",
          condition: "Maaaring restrictive lung disease, fibrosis, o weak respiratory muscles.",
          advice: "Breathing exercises at pulmonary rehabilitation kung advised. Avoid smoking at pollutants. Kumain ng nutrient-rich foods, especially vitamins A, C, E. Hydrate properly. Regular check-up sa pulmonologist."
        }
      },
      {
        name: "Airway Resistance (RAM)",
        HIGH: {
          meaning: "Mataas ang airway resistance, mahirap huminga.",
          condition: "Maaaring asthma, bronchitis, COPD, or inflammation sa bronchi.",
          advice: "Avoid allergens, smoking, and pollution. Use prescribed inhalers if any. Regular breathing exercises. Kumain ng anti-inflammatory foods (fruits, vegetables, omega-3 rich foods). Moderate exercise to improve lung function."
        },
        LOW: {
          meaning: "Mababa ang airway resistance, lungs clear and unobstructed.",
          condition: "Normal lung function.",
          advice: "Maintain healthy lifestyle. Avoid smoking. Continue regular exercise and balanced diet for lung health."
        }
      },
      {
        name: "Arterial Oxygen Content (PaO2 / PaCO2)",
        HIGH: {
          meaning: "High oxygen content / low CO2 in blood.",
          condition: "May hyperventilation, early compensation, or high oxygen supplementation.",
          advice: "Practice controlled breathing. Avoid excessive oxygen supplementation. Maintain regular physical activity and hydration. Balanced diet for overall health."
        },
        LOW: {
          meaning: "Low oxygen content / high CO2 in blood.",
          condition: "Possible hypoxia, respiratory failure, chronic lung disease.",
          advice: "Seek medical evaluation immediately if symptomatic. Use prescribed oxygen therapy if needed. Breathing exercises under guidance. Avoid smoking and pollutants. Maintain nutrition and hydration."
        }
      }
    ]
  },
  {
    category: "Brain Nerve",
    list: [
      {
        name: "Status of Brain Tissue Blood Supply",
        HIGH: {
          meaning: "Sobrang daloy ng dugo sa utak.",
          condition: "Possible inflammation, high blood pressure, or hyperperfusion.",
          advice: "Maintain healthy blood pressure. Limit salty, fatty, processed foods. Regular aerobic exercise (walking, swimming). Hydrate properly. Stress management techniques (meditation, deep breathing)."
        },
        LOW: {
          meaning: "Kulang ang daloy ng dugo sa utak.",
          condition: "Risk ng ischemia, cognitive decline, stroke.",
          advice: "Improve circulation via moderate exercise. Eat blood circulation-friendly foods (beets, leafy greens, fish rich in omega-3). Avoid smoking, excessive alcohol. Monitor blood pressure and cholesterol. Stay hydrated."
        }
      },
      {
        name: "Cerebral Arteriosclerosis",
        HIGH: {
          meaning: "Thickening or hardening of brain arteries.",
          condition: "Risk ng stroke, cognitive decline, or memory problems.",
          advice: "Reduce saturated fats, trans fats, processed foods. Eat fruits, vegetables, whole grains, fish rich in omega-3. Exercise regularly. Control blood pressure and blood sugar. Avoid smoking and limit alcohol."
        },
        LOW: {
          meaning: "Normal elasticity / minimal arteriosclerosis.",
          condition: "Healthy cerebral arteries.",
          advice: "Maintain healthy lifestyle. Continue balanced diet, regular exercise, and avoid risk factors like smoking and high cholesterol."
        }
      },
      {
        name: "Functional Status of Cranial Nerve",
        HIGH: {
          meaning: "Overactive cranial nerve activity.",
          condition: "May indicate neuropathy, nerve irritation, or stress response.",
          advice: "Manage stress via relaxation, meditation, yoga. Ensure adequate sleep. Avoid excessive stimulants (caffeine). Regular neurologic check-up if persistent symptoms."
        },
        LOW: {
          meaning: "Reduced cranial nerve activity.",
          condition: "Possible neuropathy, nerve damage, or neurodegenerative condition.",
          advice: "Consult neurologist for evaluation. Engage in cognitive and motor exercises. Maintain balanced diet with vitamins B12, D, antioxidants. Avoid toxins and manage chronic conditions like diabetes or hypertension."
        }
      },
      {
        name: "Sentiment Index",
        HIGH: {
          meaning: "Overly positive / heightened emotional reactivity.",
          condition: "Possible stress, anxiety, or mood disorder.",
          advice: "Practice mindfulness, meditation, or breathing exercises. Maintain balanced sleep schedule. Physical activity to regulate mood. Avoid excessive stimulants and alcohol. Consider mental health professional if persistent."
        },
        LOW: {
          meaning: "Low emotional responsiveness or mood.",
          condition: "Possible depression, fatigue, or stress.",
          advice: "Engage in social activities. Regular physical exercise. Balanced diet with omega-3 and B vitamins. Seek mental health support if persistent low mood."
        }
      },
      {
        name: "Memory Index (ZS)",
        HIGH: {
          meaning: "Overactive memory index; may indicate stress or cognitive overload.",
          condition: "Possible anxiety, overthinking, or insomnia.",
          advice: "Practice cognitive relaxation, meditation, and sleep hygiene. Avoid multitasking excessively. Maintain regular mental exercises (reading, puzzles). Balanced diet with antioxidants and omega-3."
        },
        LOW: {
          meaning: "Reduced memory performance.",
          condition: "Risk of cognitive decline, aging effects, poor concentration.",
          advice: "Engage in memory exercises (mnemonics, puzzles, learning new skills). Balanced diet rich in omega-3, antioxidants, and vitamins. Adequate sleep and hydration. Moderate physical activity to improve cerebral blood flow."
        }
      }
    ]
  },
  {
    category: "Bone Disease / Musculoskeletal Function",
    list: [
      {
        name: "Lumbar Fiber Protruding Dimension (No Direction)",
        HIGH: {
          meaning: "Lumbar fiber protrusion is enlarged.",
          condition: "Possible herniated disc or lumbar disc bulge.",
          advice: "Avoid heavy lifting at bending. Maintain correct posture. Do core strengthening exercises. Kumain ng calcium- and vitamin D-rich foods (dairy, leafy greens, fish). Maintain healthy weight. Consult orthopedic kung may persistent pain."
        },
        LOW: {
          meaning: "Minimal lumbar fiber protrusion, normal disc status.",
          condition: "Healthy lumbar spine.",
          advice: "Maintain good posture at regular exercise. Balanced diet with calcium, vitamin D, at protein for bone health. Stretching at core exercises para maiwasan injury."
        }
      },
      {
        name: "Adhesion Degree of Shoulder Muscle (< 0.2)",
        HIGH: {
          meaning: "High muscle adhesion / stiffness sa shoulder.",
          condition: "Possible rotator cuff tightness, frozen shoulder, o muscle fibrosis.",
          advice: "Do shoulder mobility exercises at physiotherapy. Apply heat para mabawasan stiffness. Avoid repetitive overhead movements. Eat protein para sa muscle repair. Consult physiotherapist kung hindi bumubuti."
        },
        LOW: {
          meaning: "Low adhesion / normal flexibility.",
          condition: "Healthy shoulder muscles.",
          advice: "Continue regular stretching at strengthening exercises. Maintain balanced diet at hydration for muscle health."
        }
      },
      {
        name: "Limbs Circulation Limit (+)",
        HIGH: {
          meaning: "Reduced circulation sa limbs.",
          condition: "Possible peripheral vascular issue o muscular restriction.",
          advice: "Regular aerobic exercise (walking, cycling) para sa better blood flow. Avoid prolonged sitting. Maintain healthy weight. Kumain ng circulation-friendly foods (berries, leafy greens, omega-3 fish). Hydrate properly."
        },
        LOW: {
          meaning: "Normal limb circulation.",
          condition: "Healthy vascular at muscular function.",
          advice: "Maintain active lifestyle at healthy diet. Stretching at mobility exercises regularly."
        }
      },
      {
        name: "Age of Ligament (10%-40%)",
        HIGH: {
          meaning: "Ligaments show signs of aging o reduced elasticity.",
          condition: "Risk ng joint instability, sprains, or degenerative changes.",
          advice: "Do low-impact exercises (swimming, cycling) to strengthen surrounding muscles. Stretching para sa joint mobility. Eat collagen- and vitamin C-rich foods (fish, bone broth, citrus). Avoid high-impact activities na sobrang strain sa joints. Consult orthopedic o physiotherapist kung may pain."
        },
        LOW: {
          meaning: "Ligament elasticity within normal range.",
          condition: "Healthy joints.",
          advice: "Continue regular exercise at stretching. Balanced diet with protein, calcium, vitamin D, at antioxidants para sa joint health. Avoid overloading joints."
        }
      }
    ]
  },
  {
    category: "Bone Mineral Density",
    list: [
      {
        name: "Osteoclast Coefficient",
        HIGH: {
          meaning: "Sobrang activity ng osteoclasts, mabilis ang bone breakdown.",
          condition: "Risk ng osteoporosis at weak bones.",
          advice: "Kumain ng calcium- and vitamin D-rich foods (dairy, leafy greens, fish). Regular weight-bearing exercise (walking, light resistance training). Avoid smoking at excessive alcohol. Maintain healthy body weight. Consider medical evaluation for bone health."
        },
        LOW: {
          meaning: "Mababa ang osteoclast activity, normal or reduced bone turnover.",
          condition: "Healthy bone remodeling.",
          advice: "Maintain regular exercise at balanced diet with calcium, vitamin D, at protein. Avoid sedentary lifestyle. Continue healthy habits for bone maintenance."
        }
      },
      {
        name: "Amount of Calcium Loss",
        HIGH: {
          meaning: "Maraming calcium na nawawala sa katawan.",
          condition: "Risk ng weak bones, osteoporosis, fractures.",
          advice: "Increase calcium intake (milk, cheese, yogurt, leafy greens). Vitamin D supplementation for better absorption. Weight-bearing exercise. Avoid excessive caffeine at soft drinks. Maintain healthy lifestyle."
        },
        LOW: {
          meaning: "Normal or low calcium loss.",
          condition: "Bone calcium maintained properly.",
          advice: "Continue balanced diet with sufficient calcium and vitamin D. Regular exercise to maintain bone strength. Avoid smoking and limit alcohol."
        }
      },
      {
        name: "Degree of Bone Hyperplasia",
        HIGH: {
          meaning: "Sobrang bone growth o thickening.",
          condition: "Possible bone spurs, osteoarthritis, or abnormal bone remodeling.",
          advice: "Monitor joint health. Maintain moderate exercise and avoid overloading joints. Eat balanced diet with protein, calcium, and vitamin D. Consult orthopedic if joint pain develops."
        },
        LOW: {
          meaning: "Normal bone growth or remodeling.",
          condition: "Healthy bones.",
          advice: "Maintain regular exercise, balanced diet, at lifestyle to support normal bone health."
        }
      },
      {
        name: "Degree of Osteoporosis",
        HIGH: {
          meaning: "Mataas ang osteoporosis risk o na-detect na bone loss.",
          condition: "Fragile bones, higher risk ng fractures.",
          advice: "Calcium at vitamin D supplementation. Weight-bearing exercises (walking, light resistance). Avoid smoking at excessive alcohol. Fall prevention measures sa bahay. Regular bone density check-ups."
        },
        LOW: {
          meaning: "Low risk or healthy bone density.",
          condition: "Strong and healthy bones.",
          advice: "Maintain balanced diet with calcium, vitamin D, at protein. Regular weight-bearing exercise. Healthy lifestyle to prevent bone loss."
        }
      },
      {
        name: "Bone Mineral Density",
        HIGH: {
          meaning: "Sobrang density ng bone.",
          condition: "Possible bone sclerosis, low risk of fracture but monitor for abnormal growth.",
          advice: "Maintain balanced diet at regular exercise. Monitor joint health. Avoid overloading bones."
        },
        LOW: {
          meaning: "Mababa ang bone mineral density.",
          condition: "Risk ng osteoporosis at fractures.",
          advice: "Increase calcium and vitamin D intake. Weight-bearing exercise regularly. Avoid smoking at excessive alcohol. Regular bone density check-ups."
        }
      }
    ]
  },
  {
    category: "Rheumatoid Bone Disease",
    list: [
      {
        name: "Degree of Cervical Calcification",
        HIGH: {
          meaning: "Sobrang calcification sa cervical spine.",
          condition: "Risk ng cervical stiffness, nerve compression, degenerative changes.",
          advice: "Maintain good posture at proper ergonomics. Gentle neck stretches at physiotherapy exercises. Avoid heavy lifting o sudden neck movements. Kumain ng calcium- and vitamin D-rich foods (dairy, leafy greens, fish). Consult orthopedic kung may persistent pain or numbness."
        },
        LOW: {
          meaning: "Normal cervical calcification.",
          condition: "Healthy cervical spine.",
          advice: "Continue regular stretching at posture exercises. Balanced diet with calcium, vitamin D, at protein for healthy bones."
        }
      },
      {
        name: "Degree of Lumbar Calcification",
        HIGH: {
          meaning: "Sobrang calcification sa lumbar spine.",
          condition: "Possible stiffness, nerve compression, degenerative disc disease.",
          advice: "Regular core strengthening at lumbar mobility exercises. Avoid heavy lifting. Balanced diet with calcium, vitamin D, at protein. Maintain healthy weight. Consult orthopedic kung may persistent pain or numbness."
        },
        LOW: {
          meaning: "Normal lumbar calcification.",
          condition: "Healthy lumbar spine.",
          advice: "Maintain regular core exercises, stretching, at balanced diet for bone health."
        }
      },
      {
        name: "Bone Hyperplasia Coefficient",
        HIGH: {
          meaning: "Sobrang bone growth / thickening.",
          condition: "Possible osteophytes, joint stiffness, osteoarthritis.",
          advice: "Monitor joint health. Low-impact exercises (swimming, cycling). Eat balanced diet with protein, calcium, vitamin D. Avoid excessive strain sa joints. Consult orthopedic kung may pain or mobility issues."
        },
        LOW: {
          meaning: "Normal bone growth / remodeling.",
          condition: "Healthy bones.",
          advice: "Maintain active lifestyle at balanced diet. Continue regular exercise for bone maintenance."
        }
      },
      {
        name: "Osteoporosis Coefficient",
        HIGH: {
          meaning: "High osteoporosis risk / detected bone loss.",
          condition: "Fragile bones, increased fracture risk.",
          advice: "Calcium at vitamin D supplementation. Weight-bearing exercises (walking, light resistance). Avoid smoking at excessive alcohol. Fall prevention sa bahay. Regular bone density check-ups."
        },
        LOW: {
          meaning: "Low osteoporosis risk / healthy bone density.",
          condition: "Strong and healthy bones.",
          advice: "Continue balanced diet with calcium, vitamin D, at protein. Regular weight-bearing exercises. Maintain healthy lifestyle."
        }
      },
      {
        name: "Rheumatism Coefficient",
        HIGH: {
          meaning: "High rheumatism index / joint inflammation.",
          condition: "Possible rheumatoid arthritis, joint pain, stiffness.",
          advice: "Anti-inflammatory diet (fruits, vegetables, omega-3-rich fish). Maintain regular low-impact exercise (swimming, cycling). Avoid cold damp environments. Manage stress. Consult rheumatologist for persistent joint pain or swelling."
        },
        LOW: {
          meaning: "Normal rheumatism index / healthy joints.",
          condition: "No significant joint inflammation.",
          advice: "Maintain active lifestyle and healthy diet. Continue regular stretching and joint mobility exercises. Avoid overloading joints."
        }
      }
    ]
  },
  {
    category: "Bone Growth Index",
    list: [
      {
        name: "Bone Alkaline Phosphatase",
        HIGH: {
          meaning: "High bone alkaline phosphatase, active bone formation.",
          condition: "Possible rapid bone growth, healing fractures, or metabolic bone activity.",
          advice: "Maintain balanced diet with calcium, vitamin D, and protein. Regular weight-bearing exercises (walking, light resistance). Adequate sleep for bone recovery. Avoid smoking and excessive alcohol."
        },
        LOW: {
          meaning: "Low bone alkaline phosphatase, slow bone formation.",
          condition: "Possible impaired bone growth or delayed healing.",
          advice: "Increase intake of calcium, vitamin D, and protein. Engage in safe weight-bearing exercises. Consult physician if bone healing is delayed. Avoid vitamin deficiencies."
        }
      },
      {
        name: "Osteocalcin",
        HIGH: {
          meaning: "High osteocalcin, indicating active bone formation.",
          condition: "Bone metabolism is active; could be in growth phase or post-fracture healing.",
          advice: "Maintain healthy lifestyle with balanced diet, regular exercise, adequate sleep. Ensure sufficient vitamin K and D intake for bone mineralization."
        },
        LOW: {
          meaning: "Low osteocalcin, indicating reduced bone formation.",
          condition: "Risk of delayed bone growth, osteoporosis, or poor bone healing.",
          advice: "Increase intake of calcium, vitamin D, and protein. Engage in moderate physical activity. Consult physician for evaluation of bone health."
        }
      },
      {
        name: "Status of Long Bone Healing",
        HIGH: {
          meaning: "Accelerated or strong bone healing.",
          condition: "Good recovery after fracture or bone injury.",
          advice: "Continue proper nutrition (calcium, vitamin D, protein), maintain moderate activity as advised by physician or physiotherapist, avoid re-injury."
        },
        LOW: {
          meaning: "Delayed or slow long bone healing.",
          condition: "Risk of incomplete recovery, delayed fracture union.",
          advice: "Consult orthopedic for assessment. Ensure proper nutrition and supplementation. Follow physiotherapy or rehabilitation plan strictly."
        }
      },
      {
        name: "Short Bone Cartilage Healing Situation",
        HIGH: {
          meaning: "Strong or accelerated cartilage healing in short bones.",
          condition: "Good recovery from joint or small bone injury.",
          advice: "Maintain joint mobility with gentle exercises. Adequate protein and collagen-rich foods. Avoid high-impact activities. Hydrate well."
        },
        LOW: {
          meaning: "Delayed cartilage healing in short bones.",
          condition: "Risk of joint stiffness or impaired recovery.",
          advice: "Consult physiotherapist or orthopedic. Gentle rehabilitation exercises. Eat protein and collagen-rich foods. Avoid overloading injured joints."
        }
      },
      {
        name: "Epiphyseal Line",
        HIGH: {
          meaning: "Active growth plate activity.",
          condition: "Typical in children/adolescents; indicates bone growth.",
          advice: "Balanced nutrition with calcium, vitamin D, protein. Regular physical activity for bone growth. Adequate sleep for growth hormone release."
        },
        LOW: {
          meaning: "Closed or less active growth plate.",
          condition: "Normal in adults; limited bone length growth.",
          advice: "Maintain bone health through diet (calcium, vitamin D, protein), weight-bearing exercise, and healthy lifestyle."
        }
      }
    ]
  },
  {
    category: "Blood Sugar / Glucose Metabolism",
    list: [
      {
        name: "Coefficient of Insulin Secretion",
        HIGH: {
          meaning: "Sobrang insulin production.",
          condition: "Possible insulin resistance or early type 2 diabetes.",
          advice: "Maintain balanced diet with low-glycemic index foods (vegetables, whole grains, legumes). Regular aerobic exercise (walking, cycling). Avoid sugary drinks at processed foods. Maintain healthy weight. Consult endocrinologist if persistent."
        },
        LOW: {
          meaning: "Low insulin secretion.",
          condition: "Risk of type 1 or type 2 diabetes, poor glucose control.",
          advice: "Monitor blood sugar regularly. Balanced diet with controlled carbohydrate intake. Avoid refined sugar. Engage in moderate exercise. Consult endocrinologist for possible insulin therapy or medical management."
        }
      },
      {
        name: "Blood Sugar Coefficient",
        HIGH: {
          meaning: "High blood glucose level.",
          condition: "Hyperglycemia; risk of diabetes complications (heart, kidney, eyes, nerves).",
          advice: "Reduce sugar at refined carb intake. Eat fiber-rich foods (vegetables, whole grains, legumes). Regular aerobic exercise. Stay hydrated. Monitor blood glucose regularly. Consult endocrinologist for management."
        },
        LOW: {
          meaning: "Low blood glucose level.",
          condition: "Hypoglycemia; may cause dizziness, fainting, or shock.",
          advice: "Eat small, frequent meals with complex carbs and protein. Carry quick sugar source (juice, glucose tablets). Avoid skipping meals. Monitor blood sugar closely. Consult doctor if recurrent hypoglycemia."
        }
      },
      {
        name: "Urine Sugar Coefficient",
        HIGH: {
          meaning: "Presence of sugar in urine.",
          condition: "Indicates hyperglycemia; possible uncontrolled diabetes.",
          advice: "Check blood sugar levels regularly. Reduce sugar and refined carbs. Balanced diet with high fiber. Regular physical activity. Hydrate adequately. Consult endocrinologist for proper treatment."
        },
        LOW: {
          meaning: "No sugar in urine (normal).",
          condition: "Healthy glucose metabolism.",
          advice: "Maintain balanced diet, regular exercise, and healthy lifestyle to keep blood sugar stable."
        }
      }
    ]
  },
  {
    category: "Trace Element / Mineral Status",
    list: [
      {
        name: "Calcium",
        HIGH: {
          meaning: "Sobrang calcium sa katawan.",
          condition: "Risk ng kidney stones at vascular calcification.",
          advice: "Limit dairy o calcium supplements. Drink plenty water para i-flush kidneys. Maintain balanced diet."
        },
        LOW: {
          meaning: "Mababa ang calcium.",
          condition: "Risk ng weak bones, osteoporosis, muscle cramps.",
          advice: "Kumain ng dairy (milk 250ml ~30% RDI, cheese 30g ~20% RDI), leafy greens (spinach, kale ~10-15% RDI), small fish with bones (sardines ~20% RDI). Vitamin D supplementation for absorption. Weight-bearing exercise regularly."
        }
      },
      {
        name: "Iron",
        HIGH: {
          meaning: "High iron levels.",
          condition: "Risk ng hemochromatosis, liver/kidney damage.",
          advice: "Limit red meat at iron supplements. Avoid excessive vitamin C with iron-rich foods."
        },
        LOW: {
          meaning: "Low iron.",
          condition: "Risk ng anemia, fatigue, poor immunity.",
          advice: "Eat red meat (beef 100g ~20% RDI), poultry, fish, beans, lentils, spinach (~10-15% RDI). Vitamin C-rich foods (citrus, bell peppers) to improve absorption."
        }
      },
      {
        name: "Zinc",
        HIGH: {
          meaning: "Sobrang zinc.",
          condition: "May effect sa copper absorption, nausea, immune imbalance.",
          advice: "Limit supplements, diversify diet."
        },
        LOW: {
          meaning: "Mababa ang zinc.",
          condition: "Weak immunity, hair loss, slow wound healing.",
          advice: "Eat oysters (100g ~500% RDI), beef, pumpkin seeds (~15-20% RDI), lentils (~10% RDI). Maintain balanced diet."
        }
      },
      {
        name: "Selenium",
        HIGH: {
          meaning: "Excess selenium.",
          condition: "Risk ng hair loss, nail changes, GI upset.",
          advice: "Limit Brazil nuts (1-2 nuts = >100% RDI), supplements."
        },
        LOW: {
          meaning: "Low selenium.",
          condition: "Risk ng weakened immunity, thyroid issues.",
          advice: "Eat Brazil nuts (~1-2 nuts ~100% RDI), seafood, eggs (~20% RDI), whole grains (~5-10% RDI)."
        }
      },
      {
        name: "Phosphorus",
        HIGH: {
          meaning: "High phosphorus.",
          condition: "Kidney stress, mineral imbalance.",
          advice: "Limit processed foods, cola drinks."
        },
        LOW: {
          meaning: "Low phosphorus.",
          condition: "Weak bones, fatigue.",
          advice: "Eat dairy (~20-30% RDI), nuts (~10-15%), meat, fish (~20% RDI)."
        }
      },
      {
        name: "Potassium",
        HIGH: {
          meaning: "High potassium.",
          condition: "Risk ng heart arrhythmia, kidney issues.",
          advice: "Limit high-potassium foods (bananas, potatoes) if kidney compromised. Hydrate well."
        },
        LOW: {
          meaning: "Low potassium.",
          condition: "Muscle weakness, cramps, heart irregularities.",
          advice: "Eat bananas (~10% RDI per 100g), potatoes (~8%), spinach (~10%). Maintain hydration."
        }
      },
      {
        name: "Magnesium",
        HIGH: {
          meaning: "Sobrang magnesium.",
          condition: "Diarrhea, nausea, cardiac effects.",
          advice: "Limit supplements, diversify diet."
        },
        LOW: {
          meaning: "Low magnesium.",
          condition: "Muscle cramps, fatigue, arrhythmia.",
          advice: "Eat nuts (~15% RDI per 30g), seeds, spinach (~10%), whole grains (~5-10%)."
        }
      },
      {
        name: "Copper",
        HIGH: {
          meaning: "High copper.",
          condition: "Liver toxicity, nausea.",
          advice: "Avoid excessive supplements, monitor liver function."
        },
        LOW: {
          meaning: "Low copper.",
          condition: "Anemia, weak immunity, connective tissue issues.",
          advice: "Eat shellfish (~10% RDI per 100g), nuts (~10%), seeds (~10%). Maintain balanced diet."
        }
      },
      {
        name: "Cobalt",
        HIGH: {
          meaning: "Excess cobalt.",
          condition: "Cardiac and thyroid risk.",
          advice: "Avoid supplements containing cobalt."
        },
        LOW: {
          meaning: "Low cobalt.",
          condition: "Rare, may affect vitamin B12 metabolism.",
          advice: "Eat meat, fish, dairy (B12 sources) to maintain cobalt indirectly."
        }
      },
      {
        name: "Manganese",
        HIGH: {
          meaning: "High manganese.",
          condition: "Neurological effects, liver stress.",
          advice: "Limit supplements."
        },
        LOW: {
          meaning: "Low manganese.",
          condition: "Bone and connective tissue weakness.",
          advice: "Eat nuts, whole grains, leafy vegetables (~10-20% RDI)."
        }
      },
      {
        name: "Iodine",
        HIGH: {
          meaning: "High iodine.",
          condition: "Thyroid dysfunction risk.",
          advice: "Avoid excessive iodized salt or supplements."
        },
        LOW: {
          meaning: "Low iodine.",
          condition: "Goiter, hypothyroidism.",
          advice: "Use iodized salt, eat seafood (~10-20% RDI), dairy (~5-10%)."
        }
      },
      {
        name: "Nickel",
        HIGH: {
          meaning: "High nickel.",
          condition: "Rare, may cause dermatitis or GI upset.",
          advice: "Limit supplements."
        },
        LOW: {
          meaning: "Low nickel.",
          condition: "Usually not clinically significant.",
          advice: "Maintain varied diet with grains, legumes, nuts."
        }
      },
      {
        name: "Fluorine",
        HIGH: {
          meaning: "Excess fluoride.",
          condition: "Dental or skeletal fluorosis risk.",
          advice: "Avoid high-fluoride water, supplements."
        },
        LOW: {
          meaning: "Low fluoride.",
          condition: "Risk ng dental caries.",
          advice: "Drink fluoridated water. Use fluoride toothpaste. Eat tea leaves (~5-10% RDI)."
        }
      },
      {
        name: "Molybdenum",
        HIGH: {
          meaning: "High molybdenum.",
          condition: "Gout-like symptoms, joint pain.",
          advice: "Avoid supplements."
        },
        LOW: {
          meaning: "Low molybdenum.",
          condition: "Rare, may affect enzyme function.",
          advice: "Eat legumes, grains, nuts (~10-15% RDI)."
        }
      },
      {
        name: "Vanadium",
        HIGH: {
          meaning: "High vanadium.",
          condition: "Toxicity rare, possible GI upset.",
          advice: "Avoid supplements."
        },
        LOW: {
          meaning: "Low vanadium.",
          condition: "No major deficiency symptoms known.",
          advice: "Eat seafood, mushrooms, black pepper (~trace amounts)."
        }
      },
      {
        name: "Tin",
        HIGH: {
          meaning: "Excess tin.",
          condition: "Rare, GI irritation.",
          advice: "Avoid contaminated canned foods or supplements."
        },
        LOW: {
          meaning: "Low tin.",
          condition: "No known deficiency symptoms.",
          advice: "Maintain varied diet."
        }
      },
      {
        name: "Silicon",
        HIGH: {
          meaning: "High silicon.",
          condition: "Rare, usually harmless.",
          advice: "Maintain normal intake; avoid excessive supplements."
        },
        LOW: {
          meaning: "Low silicon.",
          condition: "May affect connective tissue and bone health.",
          advice: "Eat whole grains (~10% RDI), cereals, beer (~trace), vegetables."
        }
      },
      {
        name: "Strontium",
        HIGH: {
          meaning: "High strontium.",
          condition: "Rare, may affect bone mineralization.",
          advice: "Avoid supplements unless prescribed."
        },
        LOW: {
          meaning: "Low strontium.",
          condition: "Normal if diet adequate, may affect bone slightly.",
          advice: "Eat seafood, whole grains, leafy vegetables (~trace amounts)."
        }
      },
      {
        name: "Boron",
        HIGH: {
          meaning: "High boron.",
          condition: "Rare, may cause nausea or GI discomfort.",
          advice: "Avoid supplements."
        },
        LOW: {
          meaning: "Low boron.",
          condition: "May affect bone and joint health.",
          advice: "Eat fruits (apples, pears ~5-10% RDI), nuts, legumes (~trace amounts)."
        }
      }
    ]
  },
  {
    category: "Vitamin Status",
    list: [
      {
        name: "Vitamin A",
        HIGH: {
          meaning: "Excess Vitamin A (retinol).",
          condition: "May risk ng liver toxicity, headache, dizziness, nausea.",
          advice: "Limit liver, supplements, and high-dose fortified foods. Maintain balanced diet with moderate intake of vegetables/fruits."
        },
        LOW: {
          meaning: "Vitamin A deficiency.",
          condition: "Risk ng night blindness, dry skin, weak immunity.",
          advice: "Eat carrots, sweet potatoes, pumpkin (~100g = 100% RDI), dark leafy greens (~50g = 50% RDI), liver (~50g = 80% RDI). Include beta-carotene rich fruits like mangoes and papaya. Maintain healthy fat intake for absorption."
        }
      },
      {
        name: "Vitamin B1 (Thiamine)",
        HIGH: {
          meaning: "Excess B1.",
          condition: "Rare, may cause mild nausea.",
          advice: "Avoid high-dose supplements."
        },
        LOW: {
          meaning: "B1 deficiency.",
          condition: "Risk ng beriberi, fatigue, nerve problems.",
          advice: "Eat whole grains, brown rice (~100g = 15-20% RDI), pork (~50g = 25% RDI), legumes, nuts. Balanced diet."
        }
      },
      {
        name: "Vitamin B2 (Riboflavin)",
        HIGH: {
          meaning: "High B2.",
          condition: "Rare, usually harmless.",
          advice: "Avoid excessive supplements."
        },
        LOW: {
          meaning: "B2 deficiency.",
          condition: "Cheilosis (lip cracks), eye irritation, fatigue.",
          advice: "Eat dairy (~100ml milk = 20% RDI), eggs (~50g = 25% RDI), green leafy vegetables, fortified cereals (~10-15% RDI)."
        }
      },
      {
        name: "Vitamin B3 (Niacin)",
        HIGH: {
          meaning: "Excess niacin.",
          condition: "Flushing, liver stress.",
          advice: "Limit supplements, fortified foods."
        },
        LOW: {
          meaning: "Niacin deficiency.",
          condition: "Risk ng pellagra (dermatitis, diarrhea, dementia).",
          advice: "Eat meat (~50g = 15-20% RDI), poultry, fish, peanuts (~30g = 15% RDI), whole grains, legumes."
        }
      },
      {
        name: "Vitamin B6 (Pyridoxine)",
        HIGH: {
          meaning: "High B6.",
          condition: "Rare, may cause nerve issues with chronic excess.",
          advice: "Avoid high-dose supplements."
        },
        LOW: {
          meaning: "B6 deficiency.",
          condition: "Anemia, irritability, depression, neuropathy.",
          advice: "Eat poultry, fish, bananas (~100g = 20% RDI), fortified cereals (~10-15%), legumes, nuts."
        }
      },
      {
        name: "Vitamin B12 (Cobalamin)",
        HIGH: {
          meaning: "Excess B12.",
          condition: "Usually safe, water-soluble.",
          advice: "Avoid unnecessary high-dose supplements."
        },
        LOW: {
          meaning: "B12 deficiency.",
          condition: "Anemia, fatigue, nerve damage.",
          advice: "Eat meat, liver (~50g = 100% RDI), fish, eggs (~50g = 25% RDI), dairy, fortified cereals for vegetarians. Consider supplementation if deficient."
        }
      },
      {
        name: "Vitamin C",
        HIGH: {
          meaning: "Excess Vitamin C.",
          condition: "May cause diarrhea, kidney stones in sensitive people.",
          advice: "Avoid high-dose supplements. Maintain moderate intake from fruits/vegetables."
        },
        LOW: {
          meaning: "Vitamin C deficiency.",
          condition: "Scurvy risk (bleeding gums, bruising, fatigue).",
          advice: "Eat citrus fruits (~100g = 60-80% RDI), guava (~100g = 200% RDI), bell peppers (~50g = 50% RDI), tomatoes, broccoli. Maintain balanced diet."
        }
      },
      {
        name: "Vitamin D3",
        HIGH: {
          meaning: "Excess Vitamin D3.",
          condition: "Hypercalcemia, kidney issues.",
          advice: "Avoid high-dose supplements. Sun exposure in moderation."
        },
        LOW: {
          meaning: "Vitamin D deficiency.",
          condition: "Weak bones, rickets in children, osteomalacia in adults.",
          advice: "Sun exposure 10-15 min/day. Eat fatty fish (salmon ~100g = 50% RDI), fortified dairy (~100ml = 15-20% RDI), eggs. Consider supplementation if needed."
        }
      },
      {
        name: "Vitamin E",
        HIGH: {
          meaning: "Excess Vitamin E.",
          condition: "Rare, may increase bleeding risk.",
          advice: "Avoid high-dose supplements."
        },
        LOW: {
          meaning: "Vitamin E deficiency.",
          condition: "Muscle weakness, neuropathy, poor immunity.",
          advice: "Eat nuts (~30g = 50% RDI), seeds (~20g = 20% RDI), vegetable oils (~10g = 15% RDI), spinach (~50g = 10% RDI)."
        }
      },
      {
        name: "Vitamin K",
        HIGH: {
          meaning: "Excess Vitamin K.",
          condition: "May interfere with anticoagulant therapy.",
          advice: "Avoid high-dose supplements. Monitor intake if on warfarin."
        },
        LOW: {
          meaning: "Vitamin K deficiency.",
          condition: "Risk ng bleeding disorders.",
          advice: "Eat green leafy vegetables (~50g = 100% RDI), broccoli (~50g = 50% RDI), fermented foods like natto. Maintain balanced diet."
        }
      }
    ]
  },
  {
    category: "Amino Acid / Protein Status",
    list: [
      {
        name: "Lysine",
        HIGH: {
          meaning: "Sobrang lysine intake.",
          condition: "Rare, possible kidney stress if supplement overuse.",
          advice: "Avoid high-dose supplements. Maintain balanced protein intake from diet."
        },
        LOW: {
          meaning: "Low lysine.",
          condition: "Poor growth, immune weakness, fatigue.",
          advice: "Eat meat, poultry (~50g = 30% RDI), fish (~50g = 30%), eggs (~50g = 25%), legumes (~50g = 20%). Combine grains and beans for complete protein. Maintain regular meals."
        }
      },
      {
        name: "Tryptophan",
        HIGH: {
          meaning: "High tryptophan intake.",
          condition: "Rare, may affect sleepiness or mood with supplements.",
          advice: "Avoid excessive supplements, maintain balanced diet."
        },
        LOW: {
          meaning: "Low tryptophan.",
          condition: "Risk ng poor mood, sleep disorders, niacin deficiency.",
          advice: "Eat turkey (~50g = 15-20% RDI), chicken (~50g = 15%), eggs, dairy (~50g = 20%), nuts (~30g = 10%), seeds. Ensure sufficient protein intake daily."
        }
      },
      {
        name: "Phenylalanine",
        HIGH: {
          meaning: "Excess phenylalanine.",
          condition: "Rare, dangerous sa phenylketonuria patients.",
          advice: "Avoid high-dose supplements, monitor if PKU."
        },
        LOW: {
          meaning: "Low phenylalanine.",
          condition: "Poor protein synthesis, fatigue, mood disturbances.",
          advice: "Eat meat, fish (~50g = 25% RDI), eggs, dairy, soy products (~50g = 20%). Maintain balanced protein intake."
        }
      },
      {
        name: "Methionine",
        HIGH: {
          meaning: "Excess methionine.",
          condition: "Rare, may affect homocysteine levels, kidney stress.",
          advice: "Avoid high-dose supplements, diversify protein sources."
        },
        LOW: {
          meaning: "Low methionine.",
          condition: "Risk ng poor growth, liver function, antioxidant imbalance.",
          advice: "Eat meat, fish (~50g = 25% RDI), eggs, dairy, nuts (~30g = 10%). Include sulfur-rich foods (garlic, onions) for antioxidant support."
        }
      },
      {
        name: "Threonine",
        HIGH: {
          meaning: "High threonine intake.",
          condition: "Rare, usually harmless.",
          advice: "Avoid excessive supplements."
        },
        LOW: {
          meaning: "Low threonine.",
          condition: "Poor protein metabolism, immune issues.",
          advice: "Eat meat, poultry (~50g = 20% RDI), fish, eggs, dairy (~50g = 15-20%). Maintain daily protein balance."
        }
      },
      {
        name: "Isoleucine",
        HIGH: {
          meaning: "Excess isoleucine.",
          condition: "Rare, may affect metabolic balance.",
          advice: "Limit supplements. Maintain varied diet."
        },
        LOW: {
          meaning: "Low isoleucine.",
          condition: "Fatigue, poor muscle repair, weak immunity.",
          advice: "Eat meat, fish (~50g = 20% RDI), eggs, legumes (~50g = 15%), dairy. Exercise regularly to maintain muscle mass."
        }
      },
      {
        name: "Leucine",
        HIGH: {
          meaning: "High leucine intake.",
          condition: "Rare, possible metabolic imbalance.",
          advice: "Avoid overuse of supplements."
        },
        LOW: {
          meaning: "Low leucine.",
          condition: "Impaired muscle repair, fatigue, poor protein synthesis.",
          advice: "Eat meat, fish, poultry (~50g = 25% RDI), eggs, soy products (~50g = 15-20%). Include resistance exercise for muscle maintenance."
        }
      },
      {
        name: "Valine",
        HIGH: {
          meaning: "Excess valine intake.",
          condition: "Rare, may cause metabolic issues.",
          advice: "Limit supplement use, maintain varied protein diet."
        },
        LOW: {
          meaning: "Low valine.",
          condition: "Muscle weakness, fatigue, poor protein metabolism.",
          advice: "Eat meat, fish, poultry (~50g = 20% RDI), eggs, legumes (~50g = 15%). Combine plant and animal proteins for balance."
        }
      },
      {
        name: "Histidine",
        HIGH: {
          meaning: "High histidine intake.",
          condition: "Rare, may affect metabolic balance.",
          advice: "Avoid excess supplements."
        },
        LOW: {
          meaning: "Low histidine.",
          condition: "Anemia, poor growth, decreased enzyme function.",
          advice: "Eat meat, fish (~50g = 25% RDI), dairy, eggs (~50g = 15%), whole grains, nuts (~10%). Maintain balanced protein intake."
        }
      },
      {
        name: "Arginine",
        HIGH: {
          meaning: "High arginine intake.",
          condition: "Rare, may affect blood pressure or metabolic balance.",
          advice: "Limit supplements if unnecessary, maintain dietary variety."
        },
        LOW: {
          meaning: "Low arginine.",
          condition: "Poor wound healing, weak immunity, growth issues.",
          advice: "Eat meat, poultry (~50g = 20% RDI), fish, dairy (~50g = 15%), nuts and seeds (~10%). Include daily protein intake for overall health."
        }
      }
    ]
  },
  {
    category: "Coenzyme Status",
    list: [
      {
        name: "Nicotinamide (Vitamin B3)",
        HIGH: {
          meaning: "Excess nicotinamide intake.",
          condition: "May flushing, liver stress, nausea if high-dose supplements.",
          advice: "Limit supplements and fortified foods. Maintain balanced diet with moderate intake of meat, fish, and whole grains."
        },
        LOW: {
          meaning: "Low nicotinamide (B3).",
          condition: "Risk ng pellagra (dermatitis, diarrhea, dementia), fatigue.",
          advice: "Eat meat (~50g = 15% RDI), poultry, fish, peanuts (~30g = 10% RDI), whole grains. Maintain balanced diet."
        }
      },
      {
        name: "Biotin (Vitamin B7)",
        HIGH: {
          meaning: "High biotin intake.",
          condition: "Rare, usually safe.",
          advice: "Avoid unnecessary high-dose supplements."
        },
        LOW: {
          meaning: "Biotin deficiency.",
          condition: "Hair loss, skin rash, brittle nails, fatigue.",
          advice: "Eat eggs (~50g = 30% RDI), liver (~50g = 20%), nuts (~30g = 15%), seeds, avocado (~50g = 15%). Maintain balanced diet."
        }
      },
      {
        name: "Pantothenic Acid (Vitamin B5)",
        HIGH: {
          meaning: "Excess B5 intake.",
          condition: "Rare, may cause mild diarrhea.",
          advice: "Avoid high-dose supplements."
        },
        LOW: {
          meaning: "B5 deficiency.",
          condition: "Fatigue, headache, nausea, poor metabolism.",
          advice: "Eat chicken, beef (~50g = 15% RDI), eggs (~50g = 10%), whole grains (~50g = 15%), legumes. Maintain balanced diet."
        }
      },
      {
        name: "Folic Acid (Vitamin B9)",
        HIGH: {
          meaning: "Excess folic acid.",
          condition: "May mask B12 deficiency, nerve issues in chronic excess.",
          advice: "Avoid high-dose supplements without medical advice."
        },
        LOW: {
          meaning: "Folic acid deficiency.",
          condition: "Risk ng anemia, neural tube defects sa fetus, fatigue.",
          advice: "Eat leafy greens (~50g = 50% RDI), beans (~50g = 25%), citrus fruits (~100g = 40%), fortified cereals (~20%). Maintain balanced diet."
        }
      },
      {
        name: "Coenzyme Q10 (Ubiquinone)",
        HIGH: {
          meaning: "High CoQ10 intake.",
          condition: "Rare, may cause mild insomnia or digestive issues.",
          advice: "Limit supplement use if not needed."
        },
        LOW: {
          meaning: "Low CoQ10.",
          condition: "Fatigue, poor heart function, reduced cellular energy.",
          advice: "Eat fatty fish (~100g = 20% RDI), organ meats (~50g = 30%), whole grains, nuts (~30g = 10%). Consider supplementation if deficient, maintain exercise for mitochondrial health."
        }
      },
      {
        name: "Glutathione",
        HIGH: {
          meaning: "Excess glutathione intake.",
          condition: "Rare, generally safe.",
          advice: "Avoid unnecessary high-dose supplements."
        },
        LOW: {
          meaning: "Low glutathione.",
          condition: "Poor antioxidant defense, fatigue, liver stress.",
          advice: "Eat sulfur-rich foods: garlic (~10g = 15% RDI), onions (~50g = 10%), cruciferous vegetables (~50g = 15%), eggs (~50g = 10%). Consider supplementation under medical guidance. Maintain regular exercise and avoid toxins (alcohol, smoking)."
        }
      }
    ]
  },
  {
    category: "Fatty Acid / Omega Status",
    list: [
      {
        name: "Linoleic Acid (Omega-6)",
        HIGH: {
          meaning: "Excess omega-6 intake.",
          condition: "May promote inflammation, cardiovascular risk if imbalanced.",
          advice: "Limit processed vegetable oils (corn, soybean), fried foods. Maintain balanced intake with omega-3. Focus on whole foods and moderate fat intake."
        },
        LOW: {
          meaning: "Low omega-6.",
          condition: "Poor cell membrane function, dry skin, impaired growth.",
          advice: "Eat vegetable oils (sunflower, safflower, soybean), nuts (~30g = 20% RDI), seeds (~20g = 15% RDI), maintain balanced diet with adequate fats."
        }
      },
      {
        name: "α-Linolenic Acid (ALA, Omega-3)",
        HIGH: {
          meaning: "Excess omega-3 intake.",
          condition: "Rare, may increase bleeding tendency with high-dose supplements.",
          advice: "Avoid high-dose fish oil supplements unless prescribed. Balance with omega-6 intake."
        },
        LOW: {
          meaning: "Low omega-3.",
          condition: "Inflammation, cardiovascular risk, poor brain function.",
          advice: "Eat flaxseeds (~20g = 25% RDI), chia seeds (~20g = 20% RDI), walnuts (~30g = 15%), soybeans (~50g = 15%), leafy greens. Consider fish (salmon, mackerel) 2-3x/week."
        }
      },
      {
        name: "γ-Linolenic Acid (GLA, Omega-6 derivative)",
        HIGH: {
          meaning: "Excess GLA intake.",
          condition: "May cause digestive upset, rare mild inflammation.",
          advice: "Limit GLA supplements (borage oil, evening primrose) if unnecessary. Maintain balanced diet."
        },
        LOW: {
          meaning: "Low GLA.",
          condition: "Dry skin, poor immune response, inflammation imbalance.",
          advice: "Eat evening primrose oil (~1 tsp = 5% RDI), borage oil supplements if advised, hemp seeds (~20g = 10% RDI), maintain balanced omega-6 intake from diet."
        }
      },
      {
        name: "Arachidonic Acid (AA, Omega-6 derivative)",
        HIGH: {
          meaning: "High arachidonic acid.",
          condition: "May increase inflammation, cardiovascular risk.",
          advice: "Limit red meat, organ meats, egg yolk if excessive. Maintain balance with omega-3 intake."
        },
        LOW: {
          meaning: "Low arachidonic acid.",
          condition: "Poor immune response, muscle development, brain function.",
          advice: "Eat meat (~50g = 10-15% RDI), eggs (~50g = 5-10%), fish (~50g = 10%), maintain balanced diet including fats."
        }
      }
    ]
  },
  {
    category: "Endocrine System",
    list: [
      {
        name: "Thyroid Secretion Index",
        HIGH: {
          meaning: "Overactive thyroid.",
          condition: "Hyperthyroidism: weight loss, rapid heart rate, anxiety, heat intolerance.",
          advice: "Consult endocrinologist. Avoid excessive iodine intake. Maintain balanced diet, moderate caffeine. Regular checkups and stress management recommended."
        },
        LOW: {
          meaning: "Underactive thyroid.",
          condition: "Hypothyroidism: fatigue, weight gain, cold intolerance, hair loss.",
          advice: "Eat iodine-rich foods (seaweed, fish), selenium (Brazil nuts, eggs), zinc (meat, legumes). Consult endocrinologist for medication if needed. Moderate exercise and stress control helpful."
        }
      },
      {
        name: "Parathyroid Hormone Secretion Index",
        HIGH: {
          meaning: "Excess parathyroid hormone (PTH).",
          condition: "Hyperparathyroidism: high calcium, bone loss, kidney stones.",
          advice: "Limit excessive calcium supplementation, maintain hydration, eat balanced calcium & vitamin D foods. Consult doctor for evaluation."
        },
        LOW: {
          meaning: "Low PTH.",
          condition: "Hypoparathyroidism: low calcium, muscle cramps, tingling, fatigue.",
          advice: "Eat calcium-rich foods (dairy, leafy greens), vitamin D sources (sunlight, fortified foods). Regular lab monitoring and medical guidance required."
        }
      },
      {
        name: "Adrenal Glands Index",
        HIGH: {
          meaning: "Overactive adrenal function.",
          condition: "Excess cortisol: stress, high blood pressure, weight gain, insomnia.",
          advice: "Stress management, meditation, adequate sleep. Avoid excessive caffeine & stimulants. Balanced diet with whole grains, fruits, vegetables. Consult endocrinologist if persistent."
        },
        LOW: {
          meaning: "Underactive adrenal function.",
          condition: "Fatigue, low blood pressure, weakness, adrenal insufficiency.",
          advice: "Balanced diet with adequate salt, protein, and complex carbs. Manage stress, get enough sleep. Consult doctor for possible replacement therapy."
        }
      },
      {
        name: "Pituitary Secretion Index",
        HIGH: {
          meaning: "Pituitary overactivity.",
          condition: "May cause acromegaly, Cushing’s disease, hormonal imbalances.",
          advice: "Medical evaluation required. Maintain healthy lifestyle, balanced diet, moderate exercise, stress management."
        },
        LOW: {
          meaning: "Pituitary underactivity.",
          condition: "May cause growth issues, hypothyroidism, adrenal insufficiency.",
          advice: "Consult endocrinologist. Balanced nutrition, regular exercise, hormone replacement if prescribed."
        }
      },
      {
        name: "Pineal Secretion Index",
        HIGH: {
          meaning: "High melatonin or pineal activity.",
          condition: "May cause excessive sleepiness or circadian rhythm changes.",
          advice: "Maintain regular sleep schedule, moderate light exposure. Avoid unnecessary supplements. Stress management helpful."
        },
        LOW: {
          meaning: "Low melatonin or pineal activity.",
          condition: "Sleep disturbances, circadian rhythm disruption.",
          advice: "Ensure adequate darkness at night, consider melatonin-rich foods (cherries, walnuts). Maintain sleep hygiene and consistent bedtime routine."
        }
      },
      {
        name: "Thymus Gland Secretion Index",
        HIGH: {
          meaning: "Overactive thymus.",
          condition: "Rare, may affect immune response or autoimmune risk.",
          advice: "Maintain balanced nutrition, moderate exercise, stress control. Avoid over-supplementation of immune boosters."
        },
        LOW: {
          meaning: "Underactive thymus.",
          condition: "Weak immune function, higher infection risk.",
          advice: "Eat protein-rich foods, vitamins A, C, D, E (leafy greens, fruits, nuts). Regular exercise and adequate sleep to support immunity."
        }
      },
      {
        name: "Gland Secretion Index",
        HIGH: {
          meaning: "General endocrine hyperactivity.",
          condition: "May cause hormonal imbalance, metabolic disturbances.",
          advice: "Balanced diet, regular checkups, stress management, avoid unnecessary supplements. Consult endocrinologist if persistent symptoms."
        },
        LOW: {
          meaning: "General endocrine hypoactivity.",
          condition: "May cause fatigue, poor metabolism, hormone deficiencies.",
          advice: "Balanced nutrition, sufficient protein, vitamins, minerals. Exercise moderately. Medical evaluation for hormone therapy if needed."
        }
      }
    ]
  },
  {
    category: "Immune System",
    list: [
      {
        name: "Lymph Node Index",
        HIGH: {
          meaning: "Enlarged or overactive lymph nodes.",
          condition: "Possible infection, inflammation, or immune overactivity.",
          advice: "Consult doctor if persistent. Maintain balanced diet, hydration, rest. Avoid excessive stress."
        },
        LOW: {
          meaning: "Underactive lymph nodes.",
          condition: "Weaker immune response, higher infection risk.",
          advice: "Eat protein-rich foods, vitamins C & D (fruits, vegetables, dairy). Regular exercise, adequate sleep, stress management."
        }
      },
      {
        name: "Tonsil Immune Index",
        HIGH: {
          meaning: "Overactive tonsils.",
          condition: "May indicate chronic infection or immune hyperactivity.",
          advice: "Maintain oral hygiene, balanced nutrition, avoid excess sugar. Consult ENT if recurrent issues."
        },
        LOW: {
          meaning: "Underactive tonsils.",
          condition: "Reduced local immunity, higher risk of throat infections.",
          advice: "Eat fruits, vegetables rich in vitamins C & A, protein sources. Maintain hygiene and hydration."
        }
      },
      {
        name: "Bone Marrow Index",
        HIGH: {
          meaning: "Overactive bone marrow.",
          condition: "May indicate infection, inflammation, or hematologic disorders.",
          advice: "Consult hematologist if persistent. Balanced diet with iron, vitamin B12, folate (meat, eggs, leafy greens). Adequate rest and hydration."
        },
        LOW: {
          meaning: "Underactive bone marrow.",
          condition: "Low blood cell production, anemia, reduced immunity.",
          advice: "Eat iron-rich foods (meat, legumes, spinach), vitamin B12 (meat, eggs), folate (leafy greens, beans). Avoid toxins, get enough sleep."
        }
      },
      {
        name: "Spleen Index",
        HIGH: {
          meaning: "Enlarged spleen.",
          condition: "May indicate infection, inflammation, or immune overactivity.",
          advice: "Consult doctor for evaluation. Balanced diet, adequate hydration, moderate exercise."
        },
        LOW: {
          meaning: "Underactive spleen.",
          condition: "Reduced immune function.",
          advice: "Eat protein, vitamins A, C, E (fruits, vegetables, nuts). Moderate exercise, rest, stress control."
        }
      },
      {
        name: "Thymus Index",
        HIGH: {
          meaning: "Overactive thymus.",
          condition: "Rare, may cause autoimmune reactions.",
          advice: "Balanced diet, stress management, avoid unnecessary immune supplements."
        },
        LOW: {
          meaning: "Underactive thymus.",
          condition: "Weakened immune system, higher infection risk.",
          advice: "Eat protein-rich foods, vitamins A, C, D, E (leafy greens, fruits, nuts). Exercise moderately, get enough sleep."
        }
      },
      {
        name: "Immunoglobulin Index",
        HIGH: {
          meaning: "High immunoglobulin levels.",
          condition: "May indicate infection, inflammation, or autoimmune activity.",
          advice: "Consult doctor if persistent. Maintain hydration, balanced diet, rest, stress management."
        },
        LOW: {
          meaning: "Low immunoglobulin levels.",
          condition: "Poor immune defense, frequent infections.",
          advice: "Eat protein-rich foods, vitamin C & D sources (fruits, vegetables, dairy). Regular exercise, good sleep hygiene."
        }
      },
      {
        name: "Respiratory Immune Index",
        HIGH: {
          meaning: "Overactive respiratory immunity.",
          condition: "Possible allergy, asthma, or chronic inflammation.",
          advice: "Avoid allergens, maintain clean environment, balanced diet, consult doctor for management."
        },
        LOW: {
          meaning: "Underactive respiratory immunity.",
          condition: "Higher risk of respiratory infections.",
          advice: "Eat vitamin C-rich foods (citrus, peppers), zinc sources (meat, legumes), maintain hydration, regular exercise, adequate sleep."
        }
      },
      {
        name: "Gastrointestinal Immune Index",
        HIGH: {
          meaning: "Overactive gut immunity.",
          condition: "May indicate inflammation, food intolerance, or allergy.",
          advice: "Eat balanced diet, avoid inflammatory foods (processed, fried), probiotics (yogurt, kefir), consult doctor if needed."
        },
        LOW: {
          meaning: "Underactive gut immunity.",
          condition: "Higher infection risk, poor digestion.",
          advice: "Eat probiotics (yogurt, kefir), prebiotic foods (fiber-rich fruits, vegetables), maintain hydration, avoid excess antibiotics."
        }
      },
      {
        name: "Mucosa Immune Index",
        HIGH: {
          meaning: "Overactive mucosal immunity.",
          condition: "May indicate allergy or chronic inflammation in mucosal tissues (respiratory, digestive).",
          advice: "Avoid allergens, maintain hydration, balanced diet, moderate exercise, stress management."
        },
        LOW: {
          meaning: "Underactive mucosal immunity.",
          condition: "Higher risk of infection in respiratory or digestive tract.",
          advice: "Eat vitamin A & C-rich foods (carrots, citrus), maintain hydration, probiotics (yogurt, kefir), adequate sleep."
        }
      }
    ]
  },
  {
    category: "Thyroid Function",
    list: [
      {
        name: "Free Thyroxine (FT4)",
        HIGH: {
          meaning: "High FT4: excess thyroid hormone.",
          condition: "Hyperthyroidism: weight loss, rapid heart rate, anxiety, heat intolerance.",
          advice: "Consult endocrinologist. Avoid excessive iodine (seaweed, supplements). Maintain balanced diet, moderate caffeine, regular checkups, stress management."
        },
        LOW: {
          meaning: "Low FT4: insufficient thyroid hormone.",
          condition: "Hypothyroidism: fatigue, weight gain, cold intolerance, hair loss.",
          advice: "Eat iodine-rich foods (seaweed, fish), selenium (Brazil nuts, eggs), zinc (meat, legumes). Moderate exercise, stress control. Consult doctor for possible hormone therapy."
        }
      },
      {
        name: "Thyroglobulin",
        HIGH: {
          meaning: "Elevated thyroglobulin.",
          condition: "May indicate thyroid inflammation, goiter, or thyroid cancer monitoring.",
          advice: "Medical evaluation required. Maintain balanced diet, avoid excessive iodine. Follow doctor’s recommendations."
        },
        LOW: {
          meaning: "Low thyroglobulin.",
          condition: "May indicate reduced thyroid tissue activity.",
          advice: "Balanced diet with adequate protein and micronutrients. Follow doctor’s guidance if under thyroid therapy."
        }
      },
      {
        name: "Anti-Thyroglobulin Antibodies",
        HIGH: {
          meaning: "High anti-Tg antibodies.",
          condition: "Autoimmune thyroid disease (Hashimoto’s or Graves’ disease).",
          advice: "Consult endocrinologist. Eat anti-inflammatory foods (fruits, vegetables, omega-3 rich fish). Avoid excess iodine. Stress management and moderate exercise helpful."
        },
        LOW: {
          meaning: "Low or absent anti-Tg antibodies.",
          condition: "Normal, low risk of autoimmune thyroiditis.",
          advice: "Maintain healthy lifestyle, balanced diet, regular checkups."
        }
      },
      {
        name: "Triiodothyronine (T3)",
        HIGH: {
          meaning: "High T3 hormone.",
          condition: "Hyperthyroidism, may cause palpitations, anxiety, heat intolerance.",
          advice: "Consult doctor for management. Avoid high iodine foods or supplements. Balanced diet, adequate sleep, stress control."
        },
        LOW: {
          meaning: "Low T3 hormone.",
          condition: "Hypothyroidism, fatigue, weight gain, cognitive slowing.",
          advice: "Eat iodine-rich foods, selenium (Brazil nuts, eggs), zinc (meat, legumes). Follow doctor’s guidance on thyroid hormone therapy if needed. Maintain moderate exercise and good sleep."
        }
      }
    ]
  },
  {
    category: "Human Toxin",
    list: [
      {
        name: "Stimulating Beverage",
        HIGH: {
          meaning: "Excessive intake of coffee, energy drinks, or other caffeinated beverages.",
          condition: "May cause insomnia, anxiety, palpitations, elevated blood pressure, stomach irritation.",
          advice: "Limit caffeine intake. Drink more water. Replace with herbal teas or decaf options. Ensure adequate sleep and stress management."
        },
        LOW: {
          meaning: "Low intake of stimulating beverages.",
          condition: "Normal, low risk of stimulant-related issues.",
          advice: "Maintain hydration. Consume moderate caffeine if desired for alertness."
        }
      },
      {
        name: "Electromagnetic Radiation",
        HIGH: {
          meaning: "High exposure to EMF from devices, Wi-Fi, or industrial sources.",
          condition: "Potential risk of sleep disturbances, headaches, stress, cellular oxidative stress.",
          advice: "Limit prolonged device usage. Keep phone away from body while sleeping. Use EMF shields if necessary. Regular breaks from screens and outdoor activities recommended."
        },
        LOW: {
          meaning: "Low EMF exposure.",
          condition: "Normal, minimal risk.",
          advice: "Maintain safe device habits, balanced screen time, and outdoor activity."
        }
      },
      {
        name: "Tobacco / Nicotine",
        HIGH: {
          meaning: "High exposure to smoking or nicotine products.",
          condition: "Risk of lung disease, cardiovascular disease, cancer, reduced immunity.",
          advice: "Quit smoking. Seek support programs. Eat antioxidant-rich foods (fruits, vegetables). Exercise regularly, hydrate well, get adequate sleep."
        },
        LOW: {
          meaning: "Low or no exposure to tobacco/nicotine.",
          condition: "Normal, lower risk of toxin-related disease.",
          advice: "Maintain smoke-free lifestyle. Encourage healthy environment."
        }
      },
      {
        name: "Toxic Pesticide Residue",
        HIGH: {
          meaning: "High exposure to pesticides in food or environment.",
          condition: "May cause liver/kidney stress, endocrine disruption, neurological effects.",
          advice: "Wash fruits and vegetables thoroughly. Choose organic or low-pesticide produce when possible. Eat detox-supportive foods (fiber-rich fruits, vegetables, herbs like cilantro). Stay hydrated, consider antioxidant-rich diet."
        },
        LOW: {
          meaning: "Low exposure to pesticides.",
          condition: "Normal, low risk.",
          advice: "Maintain safe food handling, balanced diet with diverse produce."
        }
      }
    ]
  },
  {
    category: "Heavy Metal",
    list: [
      {
        name: "Lead",
        HIGH: {
          meaning: "High lead levels in blood – pwede magdulot ng anemia, kidney stress, brain problems, at high blood pressure.",
          condition: "Exposure sa lead (old paints, contaminated water, pipes) ay toxic sa katawan.",
          advice: "Avoid lead exposure. Kumain ng calcium-rich foods like milk, leafy greens; iron-rich foods like meat, beans; vitamin C-rich fruits para makatulong sa detox. Drink plenty of water. Consult your doctor for check-up or chelation therapy if needed."
        },
        LOW: {
          meaning: "Normal/low lead level – safe.",
          condition: "Minimal risk.",
          advice: "Maintain clean environment, balanced diet, safe water, regular check-up."
        }
      },
      {
        name: "Mercury",
        HIGH: {
          meaning: "High mercury levels – risk ng neurotoxicity, kidney stress, tremors, fatigue.",
          condition: "Common source: certain fish (shark, swordfish), industrial exposure.",
          advice: "Limit high-mercury fish. Eat selenium-rich foods (Brazil nuts, eggs) para protektahan cells. Hydrate well, eat antioxidant-rich fruits & veggies. Consult doctor if persistent."
        },
        LOW: {
          meaning: "Normal/low mercury – safe.",
          condition: "Minimal risk.",
          advice: "Maintain balanced diet, safe seafood choices."
        }
      },
      {
        name: "Cadmium",
        HIGH: {
          meaning: "High cadmium – kidney stress, bone demineralization, lung problems.",
          condition: "Exposure sa cigarette smoke, contaminated foods or environment.",
          advice: "Avoid smoking & contaminated foods. Kumain ng calcium & zinc-rich foods (dairy, nuts, meat). Hydrate well, antioxidant-rich diet. Monitor lab values regularly."
        },
        LOW: {
          meaning: "Normal cadmium – safe.",
          condition: "Low risk.",
          advice: "Maintain safe diet & environment."
        }
      },
      {
        name: "Chromium",
        HIGH: {
          meaning: "Excess chromium (esp. hexavalent) – kidney/liver stress, digestive issues.",
          condition: "Exposure sa industrial sources or contaminated water.",
          advice: "Avoid industrial exposure. Eat antioxidant-rich foods (fruits & veggies), hydrate well, balanced lifestyle."
        },
        LOW: {
          meaning: "Low chromium – blood sugar metabolism may be affected.",
          condition: "Possible mild insulin issues.",
          advice: "Eat chromium-rich foods: whole grains, broccoli, nuts. Regular exercise, balanced diet."
        }
      },
      {
        name: "Arsenic",
        HIGH: {
          meaning: "High arsenic – skin changes, heart problems, neurotoxicity, cancer risk.",
          condition: "Exposure from contaminated water or seafood.",
          advice: "Avoid contaminated sources. Kumain ng selenium-rich foods (Brazil nuts, eggs), antioxidant-rich fruits & veggies. Stay hydrated, medical consultation recommended."
        },
        LOW: {
          meaning: "Normal/low arsenic – safe.",
          condition: "Minimal risk.",
          advice: "Maintain safe environment, balanced diet."
        }
      },
      {
        name: "Antimony",
        HIGH: {
          meaning: "High antimony – may affect liver, lungs, heart; causes fatigue, nausea.",
          condition: "Exposure from contaminated environment.",
          advice: "Avoid exposure. Hydrate, eat antioxidant-rich foods, maintain healthy lifestyle. Consult doctor if persistent."
        },
        LOW: {
          meaning: "Normal/low antimony – safe.",
          condition: "Minimal risk.",
          advice: "Maintain balanced diet and safe environment."
        }
      },
      {
        name: "Thallium",
        HIGH: {
          meaning: "High thallium – neurotoxicity, hair loss, nerve problems, kidney/liver stress.",
          condition: "Exposure sa contaminated food/water, industrial sources.",
          advice: "Avoid contaminated sources. Eat antioxidant-rich fruits & veggies, hydrate well. Follow medical guidance for detox if needed."
        },
        LOW: {
          meaning: "Normal/low thallium – safe.",
          condition: "Minimal risk.",
          advice: "Maintain balanced diet & safe environment."
        }
      },
      {
        name: "Aluminum",
        HIGH: {
          meaning: "High aluminum – risk sa brain (neurotoxicity), bones, kidney stress.",
          condition: "Sources: cookware, antacids, processed food.",
          advice: "Limit aluminum-containing cookware & processed foods. Eat antioxidant-rich fruits & veggies. Hydrate well, consult doctor if persistent."
        },
        LOW: {
          meaning: "Normal/low aluminum – safe.",
          condition: "Minimal risk.",
          advice: "Maintain safe environment, balanced diet."
        }
      }
    ]
  },
  {
    category: "Basic Physical Quality",
    list: [
      {
        name: "Response Ability",
        HIGH: {
          meaning: "Fast or overactive responses – mabilis ang reflexes at reactions.",
          condition: "Pwede magpahiwatig ng stress o nervous system overactivity.",
          advice: "Practice deep breathing, meditation, or yoga. Ensure 7–8 hours sleep. Limit caffeine and stimulating drinks. Regular moderate exercise para balanced ang nervous system."
        },
        LOW: {
          meaning: "Slow or delayed responses – mabagal ang reflexes at reactions.",
          condition: "Pwede magpahiwatig ng fatigue o low alertness.",
          advice: "Improve sleep quality. Kumain ng protein-rich foods, vitamin B-rich foods, omega-3 (nuts, fish). Brain exercises (reading, puzzles). Moderate exercise to enhance alertness."
        }
      },
      {
        name: "Mental Power",
        HIGH: {
          meaning: "High mental activity – overthinking or hyper-focus.",
          condition: "Stress, anxiety, or mental overexertion.",
          advice: "Take breaks, practice mindfulness, ensure proper sleep. Balanced diet, hydrate, moderate caffeine intake."
        },
        LOW: {
          meaning: "Low mental energy or focus – mahina ang concentration.",
          condition: "Fatigue, nutrient deficiency, or poor sleep.",
          advice: "Eat brain-supportive foods: nuts, fish (omega-3), fruits, veggies. Mental exercises, proper sleep, hydration, regular physical activity."
        }
      },
      {
        name: "Water Shortage",
        HIGH: {
          meaning: "Dehydration – kulang ang tubig sa katawan.",
          condition: "Dry skin, fatigue, headache, reduced circulation.",
          advice: "Drink at least 2–3 liters water/day. Eat water-rich fruits & veggies (watermelon, cucumber). Limit caffeine & alcohol. Maintain electrolyte balance (potassium, magnesium)."
        },
        LOW: {
          meaning: "Normal hydration – sufficient water level.",
          condition: "Low risk of dehydration.",
          advice: "Maintain proper hydration and balanced electrolyte intake."
        }
      },
      {
        name: "Hypoxia",
        HIGH: {
          meaning: "Low oxygen delivery to tissues – high oxygen demand.",
          condition: "May indicate cardiovascular or respiratory stress.",
          advice: "Moderate aerobic exercise (walking, swimming). Proper breathing techniques. Avoid smoking. Ensure clean air and adequate sleep."
        },
        LOW: {
          meaning: "Normal oxygen supply – tissues receive enough oxygen.",
          condition: "Good health, low risk of hypoxia.",
          advice: "Maintain cardiovascular fitness, proper posture, outdoor activity. Avoid smoking or polluted environments."
        }
      },
      {
        name: "PH",
        HIGH: {
          meaning: "Body fluids too alkaline.",
          condition: "May cause metabolic imbalance, fatigue, muscle cramps.",
          advice: "Eat fruits & vegetables, balance protein & carb intake. Avoid excessive antacids. Stay hydrated and avoid extreme diets."
        },
        LOW: {
          meaning: "Body fluids too acidic.",
          condition: "May cause acid reflux, inflammation, fatigue.",
          advice: "Increase alkaline-forming foods (veggies, fruits). Limit processed foods, sugar, excessive meat. Hydrate and exercise regularly."
        }
      }
    ]
  },
  {
    category: "Allergy",
    list: [
      {
        name: "Drug allergy index",
        HIGH: {
          meaning: "May hypersensitivity sa ilang gamot. Cause: Family history ng drug allergy, previous exposure sa gamot, overactive immune response.",
          condition: "Pwede magdulot ng rashes, hives, swelling, anaphylaxis.",
          advice: "Avoid the drug. Inform doctor & pharmacist. Carry antihistamines or epinephrine if prescribed. Seek immediate care if severe reaction occurs."
        },
        LOW: {
          meaning: "Normal reaction sa drugs. Cause: Normal immune tolerance sa gamot.",
          condition: "Low risk ng allergic reaction.",
          advice: "Continue regular medications as prescribed. Monitor for new reactions with new drugs."
        }
      },
      {
        name: "Alcohol allergy index",
        HIGH: {
          meaning: "May sensitivity sa alcohol. Cause: Genetic predisposition, enzyme deficiency (ALDH2), frequent alcohol exposure.",
          condition: "Flushing, nausea, headache, respiratory issues.",
          advice: "Limit or avoid alcohol. Stay hydrated. Consider antioxidant-rich foods (fruits, vegetables). Consult doctor if reactions persist."
        },
        LOW: {
          meaning: "Normal tolerance sa alcohol. Cause: Normal alcohol metabolism.",
          condition: "Low risk.",
          advice: "Moderation if consuming alcohol."
        }
      },
      {
        name: "Pollen allergy index",
        HIGH: {
          meaning: "High sensitivity sa pollen (hay fever). Cause: Seasonal exposure, genetic predisposition, overactive immune response.",
          condition: "Sneezing, nasal congestion, itchy/watery eyes.",
          advice: "Avoid pollen during peak seasons. Use air purifiers. Consider antihistamines or nasal sprays. Wash hands/face after outdoor activity."
        },
        LOW: {
          meaning: "Normal tolerance sa pollen. Cause: Immune system handles pollen normally.",
          condition: "Low risk.",
          advice: "Maintain clean environment."
        }
      },
      {
        name: "Injection allergy index",
        HIGH: {
          meaning: "Hypersensitivity sa injections or vaccines. Cause: Previous exposure, overactive immune response, specific protein sensitivity.",
          condition: "Local redness, swelling, systemic reactions possible.",
          advice: "Inform healthcare provider about previous reactions. Allergy testing recommended. Carry emergency medication if prescribed."
        },
        LOW: {
          meaning: "Normal tolerance sa injections. Cause: Normal immune response to injections.",
          condition: "Low risk.",
          advice: "No special precautions needed."
        }
      },
      {
        name: "Chemical products allergy index",
        HIGH: {
          meaning: "Sensitivity sa detergents, cleaners, cosmetics. Cause: Frequent exposure, skin barrier issues, overactive immune response.",
          condition: "Skin rashes, itching, irritation.",
          advice: "Avoid known irritants. Use hypoallergenic products. Wash hands after contact. Apply moisturizer or barrier cream."
        },
        LOW: {
          meaning: "Normal tolerance sa chemical products. Cause: Immune system handles chemicals normally.",
          condition: "Low risk.",
          advice: "Maintain hygiene. Avoid harsh chemicals unnecessarily."
        }
      },
      {
        name: "Paint allergy index",
        HIGH: {
          meaning: "Sensitivity sa paint fumes/components. Cause: Frequent exposure, chemical sensitivity, pre-existing respiratory issues.",
          condition: "Respiratory irritation, skin reactions, headache.",
          advice: "Avoid freshly painted areas. Use masks & ventilate rooms. Consult doctor if symptoms persist."
        },
        LOW: {
          meaning: "Normal tolerance sa paints. Cause: Normal immune and respiratory response.",
          condition: "Low risk.",
          advice: "No special precautions needed."
        }
      },
      {
        name: "Dust allergy index",
        HIGH: {
          meaning: "High sensitivity sa dust/house dust mites. Cause: Environmental exposure, genetic predisposition, overactive immune response.",
          condition: "Sneezing, congestion, itchy eyes, respiratory irritation.",
          advice: "Keep home clean, use HEPA filters, wash bedding regularly. Antihistamines if prescribed."
        },
        LOW: {
          meaning: "Normal tolerance sa dust. Cause: Immune system handles dust normally.",
          condition: "Low risk.",
          advice: "Maintain clean environment."
        }
      },
      {
        name: "Smoke allergy index",
        HIGH: {
          meaning: "Sensitivity sa smoke (cigarette, fire, pollution). Cause: Frequent exposure, pre-existing asthma, overactive immune response.",
          condition: "Respiratory irritation, coughing, asthma triggers.",
          advice: "Avoid smoke exposure. Clean indoor air. Consider masks outdoors. Consult doctor if severe reactions occur."
        },
        LOW: {
          meaning: "Normal tolerance sa smoke. Cause: Normal respiratory and immune response.",
          condition: "Low risk.",
          advice: "Avoid prolonged smoke exposure as precaution."
        }
      },
      {
        name: "Hair dye allergy index",
        HIGH: {
          meaning: "Hypersensitivity sa hair dyes. Cause: Chemical exposure, previous reactions, overactive immune system.",
          condition: "Skin rashes, itching, swelling.",
          advice: "Avoid hair dyes with allergens. Perform patch test before new products. Use hypoallergenic options."
        },
        LOW: {
          meaning: "Normal tolerance sa hair dyes. Cause: Immune system tolerates dyes normally.",
          condition: "Low risk.",
          advice: "Normal precautions when dyeing hair."
        }
      },
      {
        name: "Animal fur allergy index",
        HIGH: {
          meaning: "Sensitivity sa animal dander/fur. Cause: Exposure to pets, genetic predisposition, overactive immune response.",
          condition: "Sneezing, itchy eyes, respiratory issues.",
          advice: "Avoid direct contact. Use air purifiers, vacuum regularly. Antihistamines if needed."
        },
        LOW: {
          meaning: "Normal tolerance sa animals. Cause: Immune system tolerates animal dander normally.",
          condition: "Low risk.",
          advice: "Regular hygiene and cleaning suffice."
        }
      },
      {
        name: "Metal jewelry allergy index",
        HIGH: {
          meaning: "Hypersensitivity sa metal jewelry (nickel, alloys). Cause: Metal sensitivity, previous reactions, overactive immune system.",
          condition: "Skin rashes, itching, redness.",
          advice: "Avoid allergenic metals. Use hypoallergenic jewelry. Apply barrier creams if needed."
        },
        LOW: {
          meaning: "Normal tolerance sa metal jewelry. Cause: Immune system tolerates metals normally.",
          condition: "Low risk.",
          advice: "No special precautions required."
        }
      },
      {
        name: "Seafood allergy index",
        HIGH: {
          meaning: "Hypersensitivity sa seafood. Cause: Previous reactions, genetic predisposition, overactive immune response.",
          condition: "Skin reactions, digestive upset, anaphylaxis possible.",
          advice: "Avoid triggering seafood. Read labels carefully. Carry emergency meds if prescribed. Consult allergist for testing."
        },
        LOW: {
          meaning: "Normal tolerance sa seafood. Cause: Immune system tolerates seafood normally.",
          condition: "Low risk.",
          advice: "Normal precautions when eating seafood."
        }
      },
      {
        name: "Milk allergy index",
        HIGH: {
          meaning: "Hypersensitivity sa milk/dairy products. Cause: Genetic predisposition, previous exposure, lactose/protein sensitivity.",
          condition: "Digestive issues, skin rashes, respiratory symptoms.",
          advice: "Avoid dairy if allergic. Substitute with plant-based milk (soy, oat, almond). Check labels. Consult doctor for testing/guidance."
        },
        LOW: {
          meaning: "Normal tolerance sa milk. Cause: Immune system tolerates milk normally.",
          condition: "Low risk.",
          advice: "Regular dairy consumption is safe unless otherwise advised."
        }
      }
    ]
  },
  {
    category: "Obesity",
    list: [
      {
        name: "Abnormal lipid metabolism coefficient",
        HIGH: {
          meaning: "May abnormal lipid metabolism, mataas ang cholesterol at triglycerides. Cause: Poor diet, sedentary lifestyle, genetic predisposition.",
          condition: "Risk ng hyperlipidemia, atherosclerosis, heart disease, fatty liver.",
          advice: "Eat fiber-rich foods (vegetables, fruits, whole grains). Limit saturated fat, fried foods, processed foods. Exercise regularly (30–60 mins/day). Stay hydrated. Regularly monitor blood lipid profile."
        },
        LOW: {
          meaning: "Low lipid levels, puwedeng kulang sa essential fats. Cause: Poor dietary intake, malabsorption, excessive exercise.",
          condition: "Risk ng hormonal imbalance, vitamin deficiencies, poor energy storage.",
          advice: "Include healthy fats (avocado, nuts, olive oil, fatty fish). Maintain balanced diet. Avoid crash diets. Consult doctor for assessment of absorption or metabolic issues."
        }
      },
      {
        name: "Brown adipose tissue abnormalities coefficient",
        HIGH: {
          meaning: "Brown fat function abnormal, inefficient energy burning. Cause: Sedentary lifestyle, aging, genetic factors.",
          condition: "Risk ng weight gain, metabolic slowdown, insulin resistance.",
          advice: "Regular physical activity (cardio + strength training). Cold exposure therapy or cooler environment may stimulate brown fat. Eat balanced diet. Ensure adequate sleep. Avoid prolonged inactivity."
        },
        LOW: {
          meaning: "Low brown fat activity, insufficient calorie burning. Cause: Lack of physical activity, aging, poor nutrition.",
          condition: "Risk ng fat accumulation, slow metabolism.",
          advice: "Exercise daily (especially high-intensity interval training). Eat protein-rich diet to boost metabolism. Maintain active lifestyle. Get enough sleep."
        }
      },
      {
        name: "Hyperinsulinemia coefficient",
        HIGH: {
          meaning: "High insulin levels. Cause: Insulin resistance due to obesity, high sugar intake, sedentary lifestyle.",
          condition: "Risk ng type 2 diabetes, metabolic syndrome, cardiovascular issues.",
          advice: "Limit sugary foods and beverages. Eat low-glycemic index foods (whole grains, legumes, vegetables). Exercise regularly. Maintain healthy weight. Monitor blood sugar and insulin levels."
        },
        LOW: {
          meaning: "Low insulin levels. Cause: Possible pancreatic dysfunction, malnutrition, over-exercise.",
          condition: "Risk ng hypoglycemia, poor glucose regulation.",
          advice: "Eat balanced meals with complex carbohydrates, protein, healthy fats. Avoid skipping meals. Monitor blood sugar. Consult doctor for pancreatic assessment if persistent."
        }
      },
      {
        name: "Nucleus of the hypothalamus abnormal coefficient",
        HIGH: {
          meaning: "Abnormal hypothalamus activity affecting appetite control. Cause: Genetic factors, hormonal imbalance, high-fat/high-sugar diet.",
          condition: "Risk ng overeating, weight gain, obesity-related hormonal disorders.",
          advice: "Eat structured meals, avoid high-calorie snacks. Increase fiber intake for satiety. Manage stress (meditation, yoga). Exercise regularly. Sleep well to regulate hormones."
        },
        LOW: {
          meaning: "Low hypothalamus activity affecting hunger regulation. Cause: Nutrient deficiencies, neurological factors.",
          condition: "Risk ng poor appetite, undernutrition, weight fluctuation.",
          advice: "Eat nutrient-dense meals regularly. Include proteins, healthy fats, vegetables. Monitor appetite and weight. Consult doctor if persistent appetite loss."
        }
      },
      {
        name: "Triglyceride content of abnormal coefficient",
        HIGH: {
          meaning: "High triglyceride levels. Cause: High sugar/fat intake, sedentary lifestyle, obesity, genetic predisposition.",
          condition: "Risk ng fatty liver, cardiovascular disease, pancreatitis.",
          advice: "Limit sugary drinks, desserts, fried and processed foods. Eat high-fiber foods, vegetables, fruits. Exercise regularly. Maintain healthy weight. Monitor triglycerides periodically."
        },
        LOW: {
          meaning: "Low triglyceride levels. Cause: Malnutrition, excessive exercise, metabolic issues.",
          condition: "Risk ng poor energy storage, vitamin absorption problems.",
          advice: "Include healthy fats (olive oil, nuts, fatty fish). Eat balanced meals. Avoid extreme dieting. Consult doctor if persistent."
        }
      }
    ]
  },
  {
    category: "Skin",
    list: [
      {
        name: "Skin Free Radical Index",
        HIGH: {
          meaning: "High free radical activity sa skin. Cause: UV exposure, pollution, smoking, poor diet.",
          condition: "Risk ng premature aging, wrinkles, dark spots, oxidative stress.",
          advice: "Eat antioxidant-rich foods (berries, nuts, green vegetables). Use sunscreen daily. Avoid smoking and excessive sun exposure. Apply antioxidant serums or creams."
        },
        LOW: {
          meaning: "Normal/low free radical activity. Cause: Balanced lifestyle, antioxidants intake.",
          condition: "Healthy skin, lower risk of oxidative damage.",
          advice: "Maintain antioxidant-rich diet. Avoid excessive sun exposure. Hydrate skin regularly."
        }
      },
      {
        name: "Skin Collagen Index",
        HIGH: {
          meaning: "High collagen content. Cause: Good nutrition, proper skincare, genetics.",
          condition: "Skin firm, elastic, youthful.",
          advice: "Maintain healthy diet rich in protein and vitamin C. Avoid smoking. Use collagen-supportive skincare products. Hydrate well."
        },
        LOW: {
          meaning: "Low collagen. Cause: Aging, UV exposure, poor nutrition, smoking.",
          condition: "Wrinkles, sagging, reduced elasticity.",
          advice: "Eat collagen-rich foods (bone broth, fish, eggs). Vitamin C-rich foods (citrus, berries). Avoid smoking and excessive sun. Use collagen serums and moisturizers."
        }
      },
      {
        name: "Skin Grease Index",
        HIGH: {
          meaning: "Excess oil production. Cause: Hormonal imbalance, diet, genetics, stress.",
          condition: "Acne, clogged pores, oily skin.",
          advice: "Use gentle cleansers, oil-control skincare. Limit oily/fried foods, sugar. Stay hydrated. Manage stress. Avoid touching face."
        },
        LOW: {
          meaning: "Dry skin, low oil. Cause: Aging, environmental factors, poor hydration.",
          condition: "Dryness, flakiness, sensitive skin.",
          advice: "Use hydrating creams and oils. Drink enough water. Avoid harsh soaps. Include healthy fats (avocado, nuts) in diet."
        }
      },
      {
        name: "Skin Immunity Index",
        HIGH: {
          meaning: "High skin immune activity. Cause: Allergies, inflammation, overactive response.",
          condition: "Redness, rashes, eczema, sensitive skin.",
          advice: "Avoid allergens. Use soothing skincare (aloe, oatmeal). Maintain balanced diet. Reduce stress. Consult dermatologist if persistent."
        },
        LOW: {
          meaning: "Low skin immunity. Cause: Poor nutrition, aging, excessive UV, weak barrier.",
          condition: "Skin prone to infections, slow healing.",
          advice: "Eat protein-rich diet, vitamin C, zinc. Use gentle, barrier-protective skincare. Hydrate well. Avoid harsh chemicals."
        }
      },
      {
        name: "Skin Moisture Index",
        HIGH: {
          meaning: "Excessive moisture. Cause: Over-hydration, heavy moisturizers, environmental factors.",
          condition: "Prone to fungal infections, clogged pores.",
          advice: "Use lightweight, non-comedogenic moisturizers. Avoid over-moisturizing. Maintain balanced skin routine."
        },
        LOW: {
          meaning: "Dry skin. Cause: Aging, low humidity, insufficient hydration.",
          condition: "Flakiness, rough texture, irritation.",
          advice: "Apply hydrating creams and serums. Drink plenty of water. Use humidifiers in dry environments. Avoid harsh soaps."
        }
      },
      {
        name: "Skin Moisture Loss",
        HIGH: {
          meaning: "Rapid moisture loss. Cause: Dry climate, aging, poor barrier function.",
          condition: "Dehydrated skin, tightness, fine lines.",
          advice: "Use occlusive moisturizers, drink enough water. Avoid hot showers. Include omega-3-rich foods (fish, flaxseed)."
        },
        LOW: {
          meaning: "Normal moisture retention. Cause: Healthy skin barrier and hydration.",
          condition: "Well-hydrated skin.",
          advice: "Maintain regular skincare routine and hydration. Protect skin from harsh environment."
        }
      },
      {
        name: "Skin Red Blood Trace Index",
        HIGH: {
          meaning: "High microcirculation. Cause: Inflammation, UV damage, skin irritation.",
          condition: "Redness, rosacea, vascular sensitivity.",
          advice: "Use soothing skincare. Avoid hot water and harsh products. Eat anti-inflammatory foods (berries, leafy greens). Protect skin from sun."
        },
        LOW: {
          meaning: "Low microcirculation. Cause: Poor blood flow, aging, cold exposure.",
          condition: "Pale skin, slower healing, dull complexion.",
          advice: "Facial massage, mild exercise, maintain warmth. Eat iron-rich foods (spinach, red meat). Stay hydrated."
        }
      },
      {
        name: "Skin Elasticity Index",
        HIGH: {
          meaning: "High elasticity. Cause: Good collagen, hydration, genetics.",
          condition: "Firm, resilient skin.",
          advice: "Maintain protein-rich diet, vitamin C, antioxidants. Avoid smoking. Regular hydration and skincare."
        },
        LOW: {
          meaning: "Low elasticity. Cause: Aging, UV exposure, poor nutrition.",
          condition: "Sagging, wrinkles, fine lines.",
          advice: "Eat collagen and protein-rich foods. Use retinol or peptides in skincare. Avoid excessive sun. Hydrate skin daily."
        }
      },
      {
        name: "Skin Melanin Index",
        HIGH: {
          meaning: "High melanin. Cause: Sun exposure, genetics, hormonal changes.",
          condition: "Hyperpigmentation, dark spots, uneven tone.",
          advice: "Use sunscreen daily. Include vitamin C-rich foods for skin brightening. Avoid excessive tanning. Skincare with niacinamide or antioxidants."
        },
        LOW: {
          meaning: "Low melanin. Cause: Genetics, low sun exposure.",
          condition: "Pale skin, more sensitive to UV damage.",
          advice: "Use sun protection. Maintain antioxidant-rich diet. Avoid harsh UV exposure."
        }
      },
      {
        name: "Skin Horniness Index",
        HIGH: {
          meaning: "Thickened stratum corneum. Cause: Chronic dryness, friction, poor exfoliation.",
          condition: "Rough, flaky skin, calluses.",
          advice: "Exfoliate gently, moisturize regularly, avoid friction. Eat vitamin A-rich foods (carrots, pumpkin) for skin renewal."
        },
        LOW: {
          meaning: "Thin stratum corneum. Cause: Over-exfoliation, aging, genetics.",
          condition: "Sensitive, easily irritated skin.",
          advice: "Avoid harsh exfoliants, moisturize gently, protect from irritants. Eat protein-rich foods to support skin barrier."
        }
      }
    ]
  },
  {
    category: "Eye",
    list: [
      {
        name: "Bags under the eyes",
        HIGH: {
          meaning: "Visible puffiness sa ilalim ng mata. Cause: Fluid retention, aging, lack of sleep, allergies.",
          condition: "Tired or swollen appearance.",
          advice: "Sleep 7–8 hours daily. Reduce salt intake. Cold compress para sa puffiness. Stay hydrated. Manage allergies kung may problema."
        },
        LOW: {
          meaning: "Minimal under-eye puffiness, normal condition. Cause: Healthy sleep and circulation.",
          condition: "Normal appearance.",
          advice: "Maintain regular sleep, hydration, and balanced lifestyle."
        }
      },
      {
        name: "Collagen eye wrinkle",
        HIGH: {
          meaning: "Prominent wrinkles around eyes. Cause: Collagen loss due to aging, sun exposure, smoking.",
          condition: "Fine lines, sagging skin.",
          advice: "Use eye creams with collagen/peptides/retinol. Eat protein and vitamin C-rich foods. Protect from sun. Avoid smoking."
        },
        LOW: {
          meaning: "Minimal wrinkles, healthy collagen. Cause: Proper care and nutrition.",
          condition: "Youthful eye appearance.",
          advice: "Maintain hydration, skincare routine, and balanced diet."
        }
      },
      {
        name: "Dark circles",
        HIGH: {
          meaning: "Dark pigmentation under eyes. Cause: Fatigue, poor circulation, allergies, genetics.",
          condition: "Tired appearance, uneven skin tone.",
          advice: "Sleep well. Cold compress. Manage allergies. Eat iron-rich foods. Use sunscreen and vitamin C/niacinamide eye creams."
        },
        LOW: {
          meaning: "Normal under-eye coloration. Cause: Healthy circulation and sleep.",
          condition: "No concern.",
          advice: "Maintain good sleep, hydration, and diet."
        }
      },
      {
        name: "Lymphatic obstruction",
        HIGH: {
          meaning: "Poor lymph drainage around eyes. Cause: Inflammation, fluid retention, aging.",
          condition: "Swelling and puffiness.",
          advice: "Gentle lymphatic massage. Reduce salt intake. Stay hydrated. Exercise to improve circulation."
        },
        LOW: {
          meaning: "Normal lymphatic function. Cause: Healthy circulation.",
          condition: "Normal appearance.",
          advice: "Maintain hydration, exercise, and healthy lifestyle."
        }
      },
      {
        name: "Sagging",
        HIGH: {
          meaning: "Drooping eyelids or under-eye skin. Cause: Collagen loss, aging, sun exposure, genetics.",
          condition: "Aesthetic concern, sometimes visual obstruction.",
          advice: "Use firming eye creams. Eat collagen-rich foods. Hydrate. Protect from sun. Facial exercises may help."
        },
        LOW: {
          meaning: "Firm skin around eyes. Cause: Healthy collagen and elasticity.",
          condition: "Normal appearance.",
          advice: "Maintain skincare, hydration, and balanced diet."
        }
      },
      {
        name: "Edema",
        HIGH: {
          meaning: "Swelling due to fluid accumulation. Cause: Allergies, high salt intake, poor sleep, systemic issues.",
          condition: "Puffy eyes, discomfort.",
          advice: "Reduce salt. Sleep well. Cold compress. Manage allergies. Stay hydrated. Consult doctor if persistent."
        },
        LOW: {
          meaning: "Normal fluid balance. Cause: Healthy lifestyle.",
          condition: "No concern.",
          advice: "Maintain hydration, sleep, and balanced diet."
        }
      },
      {
        name: "Eye cell activity",
        HIGH: {
          meaning: "Overactive eye cells. Cause: Eye strain, prolonged screen time, lack of rest.",
          condition: "Fatigue, redness, irritation.",
          advice: "Take regular screen breaks (20-20-20 rule). Eat vitamin A-rich foods. Lubricating eye drops if needed. Proper lighting."
        },
        LOW: {
          meaning: "Normal or low activity. Cause: Healthy eye function.",
          condition: "No concern.",
          advice: "Maintain eye exercises, hydration, and rest."
        }
      },
      {
        name: "Visual fatigue",
        HIGH: {
          meaning: "Tired or strained eyes. Cause: Long screen exposure, poor lighting, uncorrected vision.",
          condition: "Blurred vision, headaches.",
          advice: "Follow 20-20-20 rule. Ensure proper lighting. Wear corrective lenses if needed. Eat lutein and zeaxanthin-rich foods (kale, spinach, eggs). Rest eyes regularly."
        },
        LOW: {
          meaning: "Minimal visual fatigue. Cause: Healthy visual habits.",
          condition: "Normal vision comfort.",
          advice: "Maintain proper screen habits, hydration, sleep, and balanced diet."
        }
      }
    ]
    },
    {
      category: "Collagen",
  list: [
    {
      name: "Eye",
      HIGH: {
        meaning: "Collagen supports eye structure and hydration. Cause: Aging, free radicals, poor nutrition, excessive screen time weakens collagen in eyes.",
        condition: "Wrinkles around eyes, dry eyes, visual fatigue.",
        advice: "Eat foods rich in Vitamin C (citrus, bell peppers), Omega-3 (salmon, chia seeds), and lutein (spinach, kale). Avoid excessive screen time, smoking, and processed sugar. Hydrate well. Use eye exercises and eye creams with peptides or retinol. Regular sleep 7–8 hours."
      },
      LOW: {
        meaning: "Collagen levels in eyes are low, weakening support. Cause: Poor diet, aging, dehydration.",
        condition: "Dry eyes, fine lines, premature wrinkles.",
        advice: "Increase collagen-rich foods (bone broth, chicken skin), vitamin C, antioxidants (berries, green tea). Avoid smoking, UV exposure. Hydrate, proper sleep, eye massage and exercises."
      }
    },
    {
      name: "Tooth",
      HIGH: {
        meaning: "Collagen strengthens gums and tooth structure. Cause: Aging, poor oral care, low protein intake.",
        condition: "Gum bleeding, weak teeth, sensitivity.",
        advice: "Eat protein-rich foods (eggs, meat, beans), collagen-rich foods (bone broth), vitamin C (fruits, peppers), and calcium-rich foods (milk, yogurt). Avoid sugary foods and drinks. Maintain good oral hygiene and regular dental check-ups."
      },
      LOW: {
        meaning: "Low collagen weakens gums and tooth support. Cause: Malnutrition, vitamin deficiency, aging.",
        condition: "Gum recession, cavities, sensitivity.",
        advice: "Increase collagen-rich foods, vitamin C, calcium. Avoid excess sugar, soft drinks. Brush and floss daily. Consider collagen supplements if advised."
      }
    },
    {
      name: "Hair and Skin",
      HIGH: {
        meaning: "Collagen maintains skin elasticity, hydration, and hair strength. Cause: Aging, sun exposure, poor nutrition, stress.",
        condition: "Wrinkles, sagging skin, dry brittle hair, hair fall.",
        advice: "Eat protein-rich foods (eggs, fish, beans), antioxidants (berries, green tea), vitamin C-rich foods (citrus, bell peppers). Avoid excessive sun, smoking, processed sugar. Use sunscreen, moisturizers, and get 7–8 hours sleep."
      },
      LOW: {
        meaning: "Low collagen in skin and hair. Cause: Aging, poor nutrition, dehydration.",
        condition: "Dry, sagging skin, hair thinning, dull complexion.",
        advice: "Increase collagen-rich foods, vitamin C, antioxidants. Avoid harsh chemical treatments, smoking, excessive sun exposure. Hydrate well, sleep sufficiently, use skin/hair care routine."
      }
    },
    {
      name: "Endocrine system",
      HIGH: {
        meaning: "Collagen supports glands and hormone balance. Cause: Aging, stress, poor nutrition.",
        condition: "Fatigue, hormonal imbalance, mood swings.",
        advice: "Balanced diet with protein, healthy fats (avocado, olive oil), whole grains. Practice stress management, meditation, regular exercise. Sleep 7–8 hours daily. Avoid processed foods and alcohol."
      },
      LOW: {
        meaning: "Low collagen weakens gland support. Cause: Aging, nutrient deficiency, chronic stress.",
        condition: "Hormonal imbalance, fatigue, metabolic issues.",
        advice: "Increase collagen-rich foods, protein, vitamins. Manage stress, exercise regularly. Avoid smoking, excessive alcohol, and processed foods."
      }
    },
    {
      name: "Circulatory system",
      HIGH: {
        meaning: "Collagen strengthens blood vessels and improves circulation. Cause: Aging, smoking, high cholesterol, poor nutrition.",
        condition: "Weak blood vessels, risk of hypertension, varicose veins.",
        advice: "Eat vitamin C-rich foods, Omega-3 (fish, chia), antioxidants (berries). Avoid smoking, oily/processed foods. Exercise regularly. Stay hydrated."
      },
      LOW: {
        meaning: "Low collagen weakens vessels. Cause: Poor diet, aging, nutrient deficiency.",
        condition: "Fragile vessels, risk of bleeding, poor circulation.",
        advice: "Increase collagen intake, vitamin C, zinc (nuts, seeds). Exercise moderately, avoid smoking, maintain healthy weight."
      }
    },
    {
      name: "Digestive system",
      HIGH: {
        meaning: "Collagen repairs gut lining and supports digestion. Cause: Poor diet, processed foods, alcohol, stress.",
        condition: "Leaky gut, bloating, indigestion.",
        advice: "Eat collagen-rich foods (bone broth), probiotics (yogurt, kimchi), fiber-rich foods (vegetables, fruits). Avoid alcohol, processed/junk food. Manage stress and hydrate."
      },
      LOW: {
        meaning: "Low collagen weakens gut lining. Cause: Poor nutrition, chronic inflammation, aging.",
        condition: "Digestive discomfort, bloating, poor absorption.",
        advice: "Increase collagen and protein intake, consume probiotics, fiber-rich foods. Avoid alcohol and junk food. Drink water, exercise regularly."
      }
    },
    {
      name: "Immune system",
      HIGH: {
        meaning: "Collagen supports immune response and tissue repair. Cause: Low collagen, stress, poor nutrition.",
        condition: "Stronger immunity, faster tissue repair.",
        advice: "Eat foods rich in vitamin C, zinc (pumpkin seeds, seafood), and protein. Manage stress, sleep 7–8 hours, moderate exercise. Avoid overwork and smoking."
      },
      LOW: {
        meaning: "Low collagen weakens immunity. Cause: Aging, malnutrition, stress.",
        condition: "Frequent infections, slow wound healing.",
        advice: "Increase collagen, protein, vitamin C, zinc. Avoid excessive stress, alcohol, and processed foods. Sleep well and exercise moderately."
      }
    },
    {
      name: "Motion systems",
      HIGH: {
        meaning: "Collagen supports joints, ligaments, and cartilage. Cause: Aging, overuse, nutrient deficiency.",
        condition: "Stronger joints, better mobility.",
        advice: "Eat collagen-rich foods, Omega-3 (fish), calcium-rich foods. Avoid excessive strain, maintain healthy weight. Do low-impact exercises (walking, swimming) and stretching."
      },
      LOW: {
        meaning: "Low collagen weakens joints. Cause: Aging, poor nutrition, overuse.",
        condition: "Joint pain, stiffness, arthritis risk.",
        advice: "Increase collagen, calcium, vitamin C. Avoid heavy strain. Exercise moderately, stretch regularly, maintain healthy weight."
      }
    },
    {
      name: "Muscle Tissue",
      HIGH: {
        meaning: "Collagen supports muscle strength and recovery. Cause: Aging, high protein intake, regular exercise.",
        condition: "Better muscle tone and recovery.",
        advice: "Eat high-protein foods (eggs, lean meat, beans), collagen supplements. Hydrate, avoid overtraining, rest sufficiently."
      },
      LOW: {
        meaning: "Low collagen weakens muscles. Cause: Aging, protein deficiency, over-exercise.",
        condition: "Muscle weakness, slow recovery.",
        advice: "Increase protein and collagen intake. Avoid overtraining. Hydrate, rest, and perform moderate strength exercises."
      }
    },
    {
      name: "Fat Metabolism",
      HIGH: {
        meaning: "Collagen helps regulate fat metabolism. Cause: Balanced diet, exercise, adequate collagen.",
        condition: "Efficient energy use, healthy weight.",
        advice: "Maintain balanced meals, lean protein, vegetables, exercise regularly. Avoid processed foods and sugary drinks."
      },
      LOW: {
        meaning: "Low collagen impairs fat metabolism. Cause: Poor diet, sedentary lifestyle, low collagen.",
        condition: "Weight gain, slow metabolism.",
        advice: "Increase collagen, protein, and fiber intake. Exercise regularly. Avoid high-sugar and processed foods."
      }
    },
    {
      name: "Detoxification and metabolism",
      HIGH: {
        meaning: "Collagen supports liver and metabolism. Cause: Good nutrition, antioxidants.",
        condition: "Efficient detox and metabolism.",
        advice: "Eat detoxifying foods (lemon, garlic, leafy greens), collagen, drink 8–10 glasses water daily, avoid alcohol and processed foods."
      },
      LOW: {
        meaning: "Low collagen impairs detox. Cause: Poor diet, alcohol, toxins.",
        condition: "Fatigue, toxin buildup, sluggish metabolism.",
        advice: "Increase collagen intake, eat detox foods, hydrate, avoid alcohol and processed foods. Exercise regularly."
      }
    },
    {
      name: "Reproductive system",
      HIGH: {
        meaning: "Collagen supports reproductive organs and hormone balance. Cause: Healthy nutrition and lifestyle.",
        condition: "Better fertility, hormone balance.",
        advice: "Eat zinc-rich foods (pumpkin seeds, nuts, seafood), protein, vitamin C. Avoid stress, smoking, alcohol. Maintain healthy weight."
      },
      LOW: {
        meaning: "Low collagen weakens reproductive support. Cause: Aging, stress, poor diet.",
        condition: "Reduced fertility, hormonal imbalance.",
        advice: "Increase collagen, zinc, vitamin C, protein. Manage stress, avoid smoking and alcohol, maintain healthy lifestyle."
      }
    },
    {
      name: "Nervous system",
      HIGH: {
        meaning: "Collagen supports nerve sheaths and brain function. Cause: Adequate nutrition and exercise.",
        condition: "Better nerve conduction and cognitive function.",
        advice: "Eat omega-3-rich foods (fish, walnuts), vitamin B complex, antioxidants. Sleep 7–8 hours, exercise, and do brain activities."
      },
      LOW: {
        meaning: "Low collagen weakens nerves. Cause: Aging, poor diet, stress.",
        condition: "Memory loss, poor focus, nerve weakness.",
        advice: "Increase collagen, omega-3, B vitamins, antioxidants. Reduce stress, get enough sleep, moderate exercise."
      }
    },
    {
      name: "Skeleton",
      HIGH: {
        meaning: "Collagen supports bone strength and density. Cause: Adequate nutrition, calcium, vitamin D.",
        condition: "Strong bones, low fracture risk.",
        advice: "Eat calcium-rich foods (milk, sardines, leafy greens), vitamin D (sunlight, eggs), collagen. Avoid smoking, excessive soda. Do weight-bearing exercises."
      },
      LOW: {
        meaning: "Low collagen weakens bones. Cause: Aging, poor diet, calcium/vitamin D deficiency.",
        condition: "Osteoporosis, fractures, brittle bones.",
        advice: "Increase collagen, calcium, vitamin D. Avoid smoking and excess soft drinks. Perform weight-bearing exercises and maintain healthy lifestyle."
      }
    }
  ]
  },
  {
  category: "Channels and Collaterals",
  list: [
    {
      name: "Hand Tai Yin Lung Meridian",
      HIGH: {
        meaning: "Lung meridian sa kamay. Landmark point: thumb to chest. Overactive energy indicates respiratory overactivity o imbalance.",
        condition: "Cough, shortness of breath, chest tightness.",
        advice: "Eat lung-supportive foods (pear, honey, white fungus). Iwasan ang smoking, excessive dairy, fried/oily foods. Practice deep breathing, moderate exercise. Acupuncture helps balance lung energy."
      },
      LOW: {
        meaning: "Low activity sa lung meridian. Landmark point: thumb to chest.",
        condition: "Weak immunity, frequent colds, shortness of breath.",
        advice: "Eat warming and protein-rich foods (chicken soup, ginger), avoid cold/raw foods if sensitive. Hydrate well. Acupuncture and breathing exercises recommended."
      }
    },
    {
      name: "Hand Yangming Large Intestine Meridian",
      HIGH: {
        meaning: "Large intestine meridian sa kamay. Landmark point: index finger to shoulder. Overactive energy may cause digestive inflammation.",
        condition: "Constipation, diarrhea, abdominal discomfort.",
        advice: "Eat fiber-rich foods (vegetables, fruits), hydrate. Avoid greasy, spicy foods. Moderate exercise, abdominal massage. Acupuncture regulates meridian energy."
      },
      LOW: {
        meaning: "Low activity sa large intestine meridian. Landmark point: index finger to shoulder.",
        condition: "Poor bowel movement, bloating, fatigue.",
        advice: "Increase fiber and probiotics (yogurt, kimchi). Hydrate well. Avoid processed foods. Gentle exercise and acupuncture support normal function."
      }
    },
    {
      name: "Foot Yangming Stomach Meridian",
      HIGH: {
        meaning: "Stomach meridian sa paa. Landmark point: tip of second toe to mid-thigh. Overactive energy may cause acid reflux or bloating.",
        condition: "Acid reflux, nausea, bloating.",
        advice: "Eat easily digestible foods (rice, porridge, vegetables). Avoid fried/oily foods and alcohol. Moderate exercise, stomach massage. Acupuncture helps reduce stomach heat."
      },
      LOW: {
        meaning: "Low activity sa stomach meridian. Landmark point: tip of second toe to mid-thigh.",
        condition: "Weak digestion, poor appetite, fatigue.",
        advice: "Eat warm, nutrient-rich meals in small portions. Avoid cold/raw foods. Acupuncture and gentle exercise help digestion."
      }
    },
    {
      name: "Foot Tai Yin Spleen Meridian",
      HIGH: {
        meaning: "Spleen meridian sa paa. Landmark point: big toe to inner thigh. High energy may indicate overactive nutrient absorption or dampness.",
        condition: "Bloating, diarrhea, water retention.",
        advice: "Eat spleen-supportive foods (sweet potato, pumpkin, oats). Avoid cold/raw foods and excess sugar. Light exercise, acupuncture, and avoid overwork."
      },
      LOW: {
        meaning: "Low activity sa spleen meridian. Landmark point: big toe to inner thigh.",
        condition: "Weak digestion, fatigue, poor nutrient absorption.",
        advice: "Eat warm, cooked foods with protein. Avoid cold drinks and raw vegetables if sensitive. Acupuncture and mild exercise recommended."
      }
    },
    {
      name: "Hand Shao Yin Heart Meridian",
      HIGH: {
        meaning: "Heart meridian sa kamay. Landmark point: little finger to chest. High energy indicates overactive heart or stress.",
        condition: "Palpitations, insomnia, anxiety.",
        advice: "Eat heart-supportive foods (red dates, nuts, berries). Avoid caffeine and fried foods. Practice relaxation, meditation, moderate exercise. Acupuncture helps calm heart energy."
      },
      LOW: {
        meaning: "Low activity sa heart meridian. Landmark point: little finger to chest.",
        condition: "Fatigue, weak pulse, low circulation.",
        advice: "Eat warm, nourishing foods (chicken, beans), stay hydrated. Avoid overwork. Acupuncture and relaxation exercises recommended."
      }
    },
    {
      name: "Hand Shao Yang Triple Burner Meridian",
      HIGH: {
        meaning: "Triple Burner meridian sa kamay. Landmark point: ring finger to eyebrow region. High energy indicates excess heat or fluid imbalance.",
        condition: "Thirst, dry mouth, irritability, edema.",
        advice: "Eat cooling foods (cucumber, watermelon). Avoid spicy and greasy foods. Stay hydrated, moderate exercise. Acupuncture balances fluid energy."
      },
      LOW: {
        meaning: "Low activity sa triple burner meridian. Landmark point: ring finger to eyebrow region.",
        condition: "Fatigue, fluid retention, poor metabolism.",
        advice: "Eat warm, hydrating foods, moderate protein. Avoid excess cold drinks. Acupuncture and gentle exercise to boost energy."
      }
    },
    {
      name: "Foot Shao Yang Gall Bladder Meridian",
      HIGH: {
        meaning: "Gall bladder meridian sa paa. Landmark point: fourth toe to side of head. High energy may indicate liver/gall bladder heat.",
        condition: "Headaches, irritability, digestive discomfort.",
        advice: "Eat liver-friendly foods (green leafy vegetables, artichoke). Avoid alcohol, fried/oily foods. Acupuncture helps regulate gall bladder energy. Moderate exercise."
      },
      LOW: {
        meaning: "Low activity sa gall bladder meridian. Landmark point: fourth toe to side of head.",
        condition: "Weak digestion, fatigue, sluggish bile flow.",
        advice: "Eat light, warm foods, maintain hydration. Avoid alcohol and greasy foods. Acupuncture and stretching exercises help."
      }
    },
    {
      name: "Foot Jue Yin Liver Meridian",
      HIGH: {
        meaning: "Liver meridian sa paa. Landmark point: big toe to chest. High energy may indicate liver heat, stress, or anger.",
        condition: "Irritability, headaches, eye strain.",
        advice: "Eat liver-supportive foods (green vegetables, beets). Avoid alcohol, fried/oily foods, excess sweets. Stress management, acupuncture, and regular exercise recommended."
      },
      LOW: {
        meaning: "Low activity sa liver meridian. Landmark point: big toe to chest.",
        condition: "Fatigue, poor detox, weak immunity.",
        advice: "Eat light, nourishing foods, moderate protein. Avoid alcohol and processed foods. Acupuncture and moderate exercise recommended."
      }
    },
    {
      name: "Ren channel",
      HIGH: {
        meaning: "Ren channel sa front midline. Landmark point: perineum to chin. Overactive yin organ function.",
        condition: "Abdominal bloating, menstrual irregularities, fatigue.",
        advice: "Eat balanced diet with warm, cooked foods. Avoid cold/raw foods and excess sugar. Acupuncture and Qi exercises recommended."
      },
      LOW: {
        meaning: "Low activity sa Ren channel. Landmark point: perineum to chin.",
        condition: "Weak reproductive or digestive function.",
        advice: "Eat warm, nourishing foods, protein-rich meals. Acupuncture and gentle exercise to strengthen energy."
      }
    },
    {
      name: "Governor meridian",
      HIGH: {
        meaning: "Governor meridian sa back midline. Landmark point: coccyx to head. Overactive yang energy.",
        condition: "Insomnia, tension, headaches.",
        advice: "Relaxation, moderate exercise. Eat cooling foods, avoid caffeine and fried foods. Acupuncture to balance yang energy."
      },
      LOW: {
        meaning: "Low activity sa Governor meridian. Landmark point: coccyx to head.",
        condition: "Weak back muscles, poor spine support, fatigue.",
        advice: "Eat nourishing foods, warm meals. Acupuncture, posture exercises, and gentle stretching recommended."
      }
    },
    {
      name: "Vital meridian",
      HIGH: {
        meaning: "Vital meridian along the torso. Landmark point: chest and abdomen. Overactive metabolism.",
        condition: "Restlessness, anxiety, sweating.",
        advice: "Eat light, balanced meals. Avoid stimulants. Acupuncture, meditation, and moderate exercise."
      },
      LOW: {
        meaning: "Low activity sa Vital meridian. Landmark point: chest and abdomen.",
        condition: "Fatigue, low vitality, poor circulation.",
        advice: "Eat warm, nutrient-rich meals. Acupuncture, gentle exercise, and adequate sleep."
      }
    },
    {
      name: "Tai mai",
      HIGH: {
        meaning: "Tai mai meridian along spine. Landmark point: neck to coccyx. High energy may indicate overstressed back or nervous system.",
        condition: "Back tension, headaches, stress.",
        advice: "Practice spinal stretches, massage, acupuncture. Eat balanced diet. Avoid stress and overwork. Moderate exercise."
      },
      LOW: {
        meaning: "Low activity sa Tai mai meridian. Landmark point: neck to coccyx.",
        condition: "Weak spine support, poor circulation.",
        advice: "Eat protein and mineral-rich foods. Acupuncture, gentle stretching, and posture exercises recommended."
      }
    }
  ]
  },
  {
  category: "Pulse of Heart and Brain",
  list: [
    {
      name: "Stroke Index",
      HIGH: {
        meaning: "High stroke index. Cause: Heart is pumping more blood than usual, maaaring due to high cardiac output or stress.",
        condition: "Risk ng hypertension or heart strain, possible palpitations.",
        advice: "Eat low-sodium diet, maintain hydration, regular aerobic exercise (walking, swimming). Avoid caffeine, alcohol, and stress. Get enough sleep."
      },
      LOW: {
        meaning: "Low stroke index. Cause: Heart is pumping less blood, possible weak heart function or fatigue.",
        condition: "Reduced circulation, dizziness, fatigue, poor exercise tolerance.",
        advice: "Consume nutrient-rich foods (lean protein, whole grains, vegetables). Gentle exercise, adequate rest, stay hydrated, monitor blood pressure."
      }
    },
    {
      name: "Stroke Volume (SV)",
      HIGH: {
        meaning: "High stroke volume. Cause: Heart pumps more blood per beat, could be due to overactive heart or physical adaptation.",
        condition: "May stress sa heart, possible high blood pressure.",
        advice: "Maintain balanced diet, limit salt, engage in moderate exercise. Avoid stimulants and smoking. Regular health check-ups."
      },
      LOW: {
        meaning: "Low stroke volume. Cause: Weak cardiac contraction or reduced blood volume.",
        condition: "Low circulation, fatigue, shortness of breath on exertion.",
        advice: "Eat iron-rich and protein-rich foods, stay hydrated, gentle cardiovascular exercise, monitor heart health."
      }
    },
    {
      name: "Heart Peripheral Resistance (TRR)",
      HIGH: {
        meaning: "High peripheral resistance. Cause: Narrowed blood vessels due to stress, poor diet, or high cholesterol.",
        condition: "Increased blood pressure, strain sa heart and arteries.",
        advice: "Eat foods rich in Omega-3 (fish, flaxseed), fruits, and vegetables. Avoid fried, fatty, and processed foods. Exercise regularly and manage stress."
      },
      LOW: {
        meaning: "Low peripheral resistance. Cause: Dilated vessels or low vascular tone, possible dehydration or heart issues.",
        condition: "Low blood pressure, dizziness, fatigue.",
        advice: "Maintain hydration, eat balanced meals with adequate salt and nutrients. Gentle exercise to improve circulation. Monitor blood pressure."
      }
    },
    {
      name: "Pulse Wave Coefficient (K)",
      HIGH: {
        meaning: "High pulse wave coefficient. Cause: Stiff arteries or strong pulse pressure due to aging or poor diet.",
        condition: "Increased risk ng cardiovascular issues, higher strain sa heart.",
        advice: "Consume high-fiber, antioxidant-rich foods, limit salt and unhealthy fats. Regular aerobic exercise. Avoid smoking and excess alcohol."
      },
      LOW: {
        meaning: "Low pulse wave coefficient. Cause: Weak arterial elasticity, low blood pressure, or fatigue.",
        condition: "Reduced blood flow efficiency, dizziness, poor circulation.",
        advice: "Hydrate well, eat foods supporting vascular health (citrus, nuts, leafy greens). Gentle exercise and monitor heart function."
      }
    },
    {
      name: "Cerebrovascular Blood Oxygen Saturation (Sa)",
      HIGH: {
        meaning: "High cerebral oxygen saturation. Cause: Over-oxygenation or hyperventilation, possibly due to stress or anxiety.",
        condition: "May headache or dizziness, brain overstimulation.",
        advice: "Practice relaxation techniques, deep breathing, moderate aerobic exercise. Avoid excessive stimulants like caffeine."
      },
      LOW: {
        meaning: "Low cerebral oxygen saturation. Cause: Poor circulation, low oxygen delivery to brain.",
        condition: "Fatigue, poor concentration, headache, risk of stroke.",
        advice: "Engage in cardiovascular exercises, maintain healthy hemoglobin levels (iron-rich foods), ensure adequate sleep, avoid smoking."
      }
    },
    {
      name: "Cerebrovascular Blood Oxygen Volume (CaCO2)",
      HIGH: {
        meaning: "High cerebral blood oxygen volume. Cause: Excess blood flow to brain due to inflammation, hypertension, or stress.",
        condition: "Headache, dizziness, possible vascular strain.",
        advice: "Manage blood pressure, reduce stress, maintain hydration. Eat balanced diet with fruits and vegetables, avoid alcohol and stimulants."
      },
      LOW: {
        meaning: "Low cerebral blood oxygen volume. Cause: Reduced blood flow or anemia.",
        condition: "Fatigue, poor cognitive function, dizziness, higher stroke risk.",
        advice: "Increase iron-rich foods (spinach, meat), stay hydrated, moderate exercise to improve circulation, avoid smoking."
      }
    },
    {
      name: "Cerebrovascular Blood Oxygen Pressure (PaO2)",
      HIGH: {
        meaning: "High cerebral oxygen pressure. Cause: Hyperventilation, anxiety, or increased blood pressure.",
        condition: "May headache, dizziness, or feeling lightheaded.",
        advice: "Practice breathing exercises, moderate physical activity, maintain balanced diet, avoid stimulants and stress."
      },
      LOW: {
        meaning: "Low cerebral oxygen pressure. Cause: Hypoxia, respiratory issues, or poor circulation.",
        condition: "Fatigue, confusion, poor focus, dizziness.",
        advice: "Ensure proper oxygen intake, practice aerobic exercise, avoid smoking, stay hydrated, maintain good sleep habits."
      }
    }
  ]
  },
  {
  category: "Blood Lipids",
  list: [
    {
      name: "Blood Viscosity",
      HIGH: {
        meaning: "Thicker blood. Cause: High cholesterol, dehydration, or high sugar/fat diet.",
        condition: "Increased risk ng heart attack, stroke, and poor circulation.",
        advice: "Drink plenty of water, eat fiber-rich foods (oats, fruits, vegetables). Limit red meat, fried foods, and sugar. Regular aerobic exercise. Avoid smoking."
      },
      LOW: {
        meaning: "Thinner blood. Cause: Overhydration or blood disorders.",
        condition: "Risk ng bleeding or low blood pressure.",
        advice: "Maintain balanced hydration, eat protein-rich foods, avoid excessive alcohol. Monitor health with regular check-ups."
      }
    },
    {
      name: "Total Cholesterol (TC)",
      HIGH: {
        meaning: "High total cholesterol. Cause: Poor diet, excessive saturated fats, lack of exercise.",
        condition: "Risk ng atherosclerosis, heart disease, stroke.",
        advice: "Eat foods low in saturated fats (lean meats, fish, legumes). Increase fruits, vegetables, and whole grains. Exercise regularly. Avoid smoking and processed foods."
      },
      LOW: {
        meaning: "Low cholesterol. Cause: Poor nutrition, malabsorption.",
        condition: "Possible hormonal imbalance, nutrient deficiency.",
        advice: "Eat healthy fats (nuts, avocado, olive oil), protein-rich foods. Monitor health and ensure balanced diet."
      }
    },
    {
      name: "Triglyceride (TG)",
      HIGH: {
        meaning: "High triglycerides. Cause: Excess sugar, alcohol, fried foods.",
        condition: "Risk ng fatty liver, heart disease, pancreatitis.",
        advice: "Limit sugary drinks, alcohol, and fried foods. Eat high-fiber foods (vegetables, whole grains). Regular exercise (30 mins/day). Maintain healthy weight."
      },
      LOW: {
        meaning: "Low triglycerides. Cause: Malnutrition, hyperthyroidism.",
        condition: "Energy deficiency, nutrient imbalance.",
        advice: "Eat complex carbs, healthy fats, and protein. Maintain balanced diet and regular meals."
      }
    },
    {
      name: "High-Density Lipoprotein (HDL-C)",
      HIGH: {
        meaning: "High 'good' cholesterol. Cause: Good genetics, exercise, healthy diet.",
        condition: "Generally protective, lower risk ng heart disease.",
        advice: "Continue regular exercise, eat healthy fats (olive oil, nuts, fish). Maintain balanced diet and healthy lifestyle."
      },
      LOW: {
        meaning: "Low 'good' cholesterol. Cause: Sedentary lifestyle, poor diet, smoking.",
        condition: "Higher risk ng cardiovascular disease.",
        advice: "Exercise regularly (aerobic, cardio), eat healthy fats (nuts, fish, avocado). Avoid smoking and processed foods."
      }
    },
    {
      name: "Low-Density Lipoprotein (LDL-C)",
      HIGH: {
        meaning: "High 'bad' cholesterol. Cause: Diet high in saturated fats, genetics, inactivity.",
        condition: "Increased risk ng plaque formation, heart attack, stroke.",
        advice: "Limit red meat, fried and processed foods. Eat fiber-rich foods, fruits, vegetables. Exercise regularly. Avoid smoking."
      },
      LOW: {
        meaning: "Low 'bad' cholesterol. Cause: Poor nutrition, liver disease.",
        condition: "Possible hormonal and nutrient imbalance.",
        advice: "Eat balanced diet with healthy fats and proteins. Monitor health with regular check-ups."
      }
    },
    {
      name: "Neutral Fat (MB)",
      HIGH: {
        meaning: "High neutral fat. Cause: Excess calorie intake, alcohol, poor diet.",
        condition: "Risk ng obesity, fatty liver, cardiovascular disease.",
        advice: "Reduce sugary and fatty foods. Eat vegetables, whole grains, lean protein. Exercise daily. Limit alcohol intake."
      },
      LOW: {
        meaning: "Low neutral fat. Cause: Malnutrition, excessive metabolism.",
        condition: "Energy deficiency, poor cell function.",
        advice: "Eat balanced meals with carbs, proteins, and healthy fats. Maintain regular eating schedule."
      }
    },
    {
      name: "Circulating Immune Complex (CIC)",
      HIGH: {
        meaning: "High immune complex. Cause: Chronic inflammation, infection, autoimmune activity.",
        condition: "May cause vascular inflammation, fatigue, and organ strain.",
        advice: "Eat anti-inflammatory foods (berries, fatty fish, leafy greens). Avoid processed foods and excessive sugar. Regular moderate exercise, manage stress, and adequate sleep."
      },
      LOW: {
        meaning: "Low immune complex. Cause: Weak immune response, malnutrition.",
        condition: "Higher risk of infections, slower healing.",
        advice: "Eat protein-rich foods, fruits, and vegetables. Maintain balanced diet, proper sleep, and stress management."
      }
    }
  ]
 }, 
 {
  category: "Blood Lipids",
  list: [
    {
      name: "Blood Viscosity",
      HIGH: {
        meaning: "Ang dugo mo ay mas makapal ngayon. Puwedeng sanhi nito ay mataas na cholesterol, kulang sa tubig, o diet na mataas sa sugar at fats.",
        condition: "Mas mataas ang risk ng heart attack, stroke, at poor circulation.",
        advice: "Drink plenty of water, eat fiber-rich foods (oats, fruits, vegetables). Limit red meat, fried foods, and sugar. Regular aerobic exercise. Avoid smoking."
      },
      LOW: {
        meaning: "Mas manipis ang dugo mo. Puwedeng sanhi ay overhydration o blood disorders.",
        condition: "Risk ng bleeding o low blood pressure.",
        advice: "Maintain balanced hydration, eat protein-rich foods, avoid excessive alcohol. Monitor health with regular check-ups."
      }
    },
    {
      name: "Total Cholesterol (TC)",
      HIGH: {
        meaning: "Mataas ang total cholesterol mo. Puwedeng sanhi ay poor diet, sobra sa saturated fats, o lack of exercise.",
        condition: "Mas mataas ang risk ng atherosclerosis, heart disease, at stroke.",
        advice: "Eat foods low in saturated fats (lean meats, fish, legumes). Increase fruits, vegetables, and whole grains. Exercise regularly. Avoid smoking and processed foods."
      },
      LOW: {
        meaning: "Mababa ang cholesterol mo. Puwedeng sanhi ay poor nutrition o malabsorption.",
        condition: "Possible hormonal imbalance at nutrient deficiency.",
        advice: "Eat healthy fats (nuts, avocado, olive oil), protein-rich foods. Monitor health and ensure balanced diet."
      }
    },
    {
      name: "Triglyceride (TG)",
      HIGH: {
        meaning: "Mataas ang triglycerides mo. Puwedeng sanhi ay sobra sa sugar, alcohol, o fried foods.",
        condition: "Mas mataas ang risk ng fatty liver, heart disease, at pancreatitis.",
        advice: "Limit sugary drinks, alcohol, and fried foods. Eat high-fiber foods (vegetables, whole grains). Regular exercise (30 mins/day). Maintain healthy weight."
      },
      LOW: {
        meaning: "Mababa ang triglycerides mo. Puwedeng sanhi ay malnutrition o hyperthyroidism.",
        condition: "Energy deficiency at nutrient imbalance.",
        advice: "Eat complex carbs, healthy fats, and protein. Maintain balanced diet and regular meals."
      }
    },
    {
      name: "High-Density Lipoprotein (HDL-C)",
      HIGH: {
        meaning: "Mataas ang 'good' cholesterol mo. Puwedeng sanhi ay good genetics, regular exercise, at healthy diet.",
        condition: "Generally protective, lower risk ng heart disease.",
        advice: "Continue regular exercise, eat healthy fats (olive oil, nuts, fish). Maintain balanced diet and healthy lifestyle."
      },
      LOW: {
        meaning: "Mababa ang 'good' cholesterol mo. Puwedeng sanhi ay sedentary lifestyle, poor diet, o smoking.",
        condition: "Mas mataas ang risk ng cardiovascular disease.",
        advice: "Exercise regularly (aerobic, cardio), eat healthy fats (nuts, fish, avocado). Avoid smoking and processed foods."
      }
    },
    {
      name: "Low-Density Lipoprotein (LDL-C)",
      HIGH: {
        meaning: "Mataas ang 'bad' cholesterol mo. Puwedeng sanhi ay diet na mataas sa saturated fats, genetics, o inactivity.",
        condition: "Mas mataas ang risk ng plaque formation, heart attack, at stroke.",
        advice: "Limit red meat, fried and processed foods. Eat fiber-rich foods, fruits, vegetables. Exercise regularly. Avoid smoking."
      },
      LOW: {
        meaning: "Mababa ang 'bad' cholesterol mo. Puwedeng sanhi ay poor nutrition o liver disease.",
        condition: "Possible hormonal at nutrient imbalance.",
        advice: "Eat balanced diet with healthy fats and proteins. Monitor health with regular check-ups."
      }
    },
    {
      name: "Neutral Fat (MB)",
      HIGH: {
        meaning: "Mataas ang neutral fat mo. Puwedeng sanhi ay sobra sa calorie intake, alcohol, o poor diet.",
        condition: "Mas mataas ang risk ng obesity, fatty liver, at cardiovascular disease.",
        advice: "Reduce sugary and fatty foods. Eat vegetables, whole grains, lean protein. Exercise daily. Limit alcohol intake."
      },
      LOW: {
        meaning: "Mababa ang neutral fat mo. Puwedeng sanhi ay malnutrition o sobrang metabolism.",
        condition: "Energy deficiency at poor cell function.",
        advice: "Eat balanced meals with carbs, proteins, and healthy fats. Maintain regular eating schedule."
      }
    },
    {
      name: "Circulating Immune Complex (CIC)",
      HIGH: {
        meaning: "Mataas ang immune complex mo. Puwedeng sanhi ay chronic inflammation, infection, o autoimmune activity.",
        condition: "Maaaring magdulot ng vascular inflammation, fatigue, at organ strain.",
        advice: "Eat anti-inflammatory foods (berries, fatty fish, leafy greens). Avoid processed foods and excessive sugar. Regular moderate exercise, manage stress, and adequate sleep."
      },
      LOW: {
        meaning: "Mababa ang immune complex mo. Puwedeng sanhi ay weak immune response o malnutrition.",
        condition: "Mas mataas ang risk ng infections at slower healing.",
        advice: "Eat protein-rich foods, fruits, and vegetables. Maintain balanced diet, proper sleep, and stress management."
      }
    }
  ]
  },
  {
  category: "Gynecology",
  list: [
    {
      name: "Female Hormone",
      HIGH: {
        meaning: "Mataas ang level ng female hormones (estrogen/progesterone). Sanhi: Hormonal imbalance, polycystic ovary syndrome (PCOS), labis na timbang, stress. Maaaring makaapekto sa menstrual cycle, fertility, at mood.",
        condition: "Hindi regular ang regla, mood swings, acne, pagtaas ng timbang.",
        advice: "Kumain ng balanseng pagkain: gulay, prutas, whole grains. Iwasan ang pagkain ng mataas sa taba at processed foods. Mag-ehersisyo nang regular. Pamahalaan ang stress gamit ang meditation o yoga. Regular na check-up sa OB-GYN."
      },
      LOW: {
        meaning: "Mababang level ng female hormones. Sanhi: Menopause, malnutrition, labis na ehersisyo, stress. Maaaring magdulot ng mababang bone density at epekto sa fertility.",
        condition: "Hindi regular o absent ang regla, hot flashes, low energy, mababang fertility.",
        advice: "Kumain ng pagkain na may phytoestrogens (soy, flaxseed), calcium (gatas, leafy greens), at protina. Iwasan ang paninigarilyo at alak. Moderate na ehersisyo at sapat na tulog. Kumonsulta sa doktor kung kailangan ng hormone therapy."
      }
    },
    {
      name: "Gonadotropin",
      HIGH: {
        meaning: "Mataas ang gonadotropins (LH/FSH). Sanhi: Ovarian failure, menopause, hormonal imbalance. Nagpapakita ng overactive pituitary signaling.",
        condition: "Hindi regular ang regla, mababang fertility, posibleng ovarian dysfunction.",
        advice: "Kumain ng balanseng pagkain, pamahalaan ang stress, panatilihin ang healthy weight. Iwasan ang labis na caffeine at processed foods. Regular na reproductive health check-ups."
      },
      LOW: {
        meaning: "Mababang gonadotropin levels. Sanhi: Pituitary dysfunction, stress, malnutrition. Maaaring magdulot ng poor ovarian function at irregular cycles.",
        condition: "Hindi regular o absent na regla, mababang fertility.",
        advice: "Kumain ng nutrient-rich diet (protina, iron, B vitamins). Pamahalaan ang stress, sapat na tulog, at panatilihin ang healthy weight. Kumonsulta sa OB-GYN kung tuloy-tuloy ang problema."
      }
    },
    {
      name: "Prolactin",
      HIGH: {
        meaning: "Mataas ang prolactin. Sanhi: Pituitary adenoma, stress, ilang gamot. Maaaring makaapekto sa ovulation at menstrual cycle.",
        condition: "Infertility, irregular periods, breast discharge.",
        advice: "Bawasan ang stress gamit ang meditation o yoga. Iwasan ang stimulants tulad ng kape at alak. Kumain ng balanseng pagkain na may Vitamin B6 at zinc. Regular na follow-up sa doktor kung patuloy ang mataas na prolactin."
      },
      LOW: {
        meaning: "Mababang prolactin. Sanhi: Pituitary insufficiency, stress, malnutrition. Maaaring makaapekto sa breastfeeding at fertility.",
        condition: "Problema sa pagpapasuso, mababang reproductive function.",
        advice: "Kumain ng protein-rich foods, iron, at zinc. Sapat na pahinga, pamahalaan ang stress, at kumonsulta sa doktor kung may breastfeeding issues."
      }
    },
    {
      name: "Progesterone",
      HIGH: {
        meaning: "Mataas ang progesterone. Sanhi: Hormonal therapy, luteal cysts, pagbubuntis. Maaaring makaapekto sa mood at menstrual cycle.",
        condition: "Mood swings, breast tenderness, irregular cycles.",
        advice: "Kumain ng balanseng pagkain, iwasan ang labis na fatty foods. Moderate exercise. Pamahalaan ang stress at kumonsulta sa gynecologist kung patuloy ang imbalance."
      },
      LOW: {
        meaning: "Mababang progesterone. Sanhi: Luteal phase defect, stress, hormonal imbalance. Maaaring makaapekto sa fertility at regularidad ng regla.",
        condition: "Irregular cycles, difficulty conceiving, mood changes.",
        advice: "Kumain ng pagkain na may Vitamin B6 (saging, mani) at zinc. Pamahalaan ang stress, regular exercise, at sapat na tulog. Kumonsulta sa doktor kung nagbabalak magbuntis."
      }
    },
    {
      name: "Vaginitis Coefficient",
      HIGH: {
        meaning: "Mataas na coefficient ay nagpapakita ng impeksyon o pamamaga sa vaginal area. Sanhi: Bacterial, fungal, viral infection, poor hygiene, hormonal imbalance.",
        condition: "Pangangati, discharge, amoy, discomfort.",
        advice: "Panatilihing malinis ang vaginal area, magsuot ng cotton underwear, iwasan ang scented soaps. Kumain ng probiotic-rich foods (yogurt, kefir). Kumonsulta sa gynecologist para sa tamang treatment."
      },
      LOW: {
        meaning: "Mababang coefficient ay nagpapakita ng healthy vaginal environment.",
        condition: "Normal na vaginal health.",
        advice: "Panatilihing malinis, kumain ng balanseng pagkain, at iwasan ang unnecessary antibiotics."
      }
    },
    {
      name: "PID Coefficient",
      HIGH: {
        meaning: "Mataas na pelvic inflammatory disease (PID) coefficient. Sanhi: Untreated sexually transmitted infections, bacterial overgrowth.",
        condition: "Lower abdominal pain, lagnat, infertility risk.",
        advice: "Agad na magpatingin sa doktor kung may sintomas. Practice safe sex. Panatilihing malinis ang katawan. Regular gynecological check-ups."
      },
      LOW: {
        meaning: "Mababang PID coefficient ay nagpapakita ng healthy reproductive organs.",
        condition: "Walang kasalukuyang inflammation.",
        advice: "Panatilihin ang safe sexual practices at routine check-ups."
      }
    },
    {
      name: "Appendagitis Coefficient",
      HIGH: {
        meaning: "Mataas na appendagitis coefficient. Sanhi: Pamamaga sa appendix o kalapit na reproductive organs.",
        condition: "Sakit sa tiyan, tenderness, lagnat.",
        advice: "Agad na magpatingin sa doktor kung may sintomas. Iwasang mag self-medicate. Panatilihing healthy ang diet at hydration."
      },
      LOW: {
        meaning: "Mababang coefficient ay nagpapakita ng walang inflammation.",
        condition: "Normal na kondisyon.",
        advice: "Panatilihing healthy ang lifestyle at regular monitoring."
      }
    },
    {
      name: "Cervicitis Coefficient",
      HIGH: {
        meaning: "Mataas na cervicitis coefficient ay nagpapakita ng pamamaga ng cervix. Sanhi: Infection, irritation, hormonal imbalance.",
        condition: "Discharge, bleeding, pelvic discomfort.",
        advice: "Kumonsulta sa gynecologist para sa treatment. Panatilihin ang hygiene, safe sex, at iwasan ang irritants tulad ng scented products."
      },
      LOW: {
        meaning: "Mababang coefficient ay nagpapakita ng healthy cervix.",
        condition: "Normal cervical health.",
        advice: "Panatilihin ang hygiene at regular check-ups."
      }
    },
    {
      name: "Ovarian Cyst Coefficient",
      HIGH: {
        meaning: "Mataas na ovarian cyst coefficient. Sanhi: Hormonal imbalance, PCOS, follicular cysts.",
        condition: "Pelvic pain, bloating, irregular cycles, fertility issues.",
        advice: "Kumain ng balanced diet, iwasan ang high-fat processed foods. Moderate exercise. Regular ultrasound check-ups. Pamahalaan ang stress."
      },
      LOW: {
        meaning: "Mababang coefficient ay nagpapakita ng healthy ovaries na walang cysts.",
        condition: "Normal ovarian function.",
        advice: "Panatilihin ang balanced diet, exercise, at regular gynecological check-ups."
      }
    }
  ]
  },
  {
  category: "Breast",
  list: [
    {
      name: "Hyperplasia of Mammary Glands",
      HIGH: {
        meaning: "Sobrang paglaki ng tissue ng dibdib. Cause: Imbalance sa hormones (estrogen at progesterone), stress, at poor diet.",
        condition: "Masakit o namamaga ang dibdib, posibleng risk ng cyst sa hinaharap.",
        advice: "Kumain ng fiber-rich foods (prutas, gulay, whole grains). Limitahan ang fatty foods at caffeine. Mag-practice ng stress management (yoga, meditation). Regular breast self-exam. Sapat na tulog at moderate exercise."
      },
      LOW: {
        meaning: "Normal ang paglaki ng mammary tissue. Cause: Balanced hormones at proper nutrition.",
        condition: "Walang significant breast changes.",
        advice: "Panatilihin ang healthy diet, regular exercise, at monthly breast check."
      }
    },
    {
      name: "Acute Mastitis",
      HIGH: {
        meaning: "Inflammation at impeksyon ng breast tissue. Cause: Bacterial infection, blocked milk ducts, o breastfeeding issues.",
        condition: "Pamumula, pamamaga, pananakit, at lagnat.",
        advice: "Warm compress sa apektadong parte, tuloy ang gentle breastfeeding o pumping, uminom ng sapat na tubig, kumain ng protein-rich foods. Kumonsulta agad sa doktor para sa antibiotics."
      },
      LOW: {
        meaning: "Walang impeksyon o inflammation. Cause: Proper breastfeeding practice at hygiene.",
        condition: "Normal breast tissue.",
        advice: "Panatilihin ang hygiene, regular feeding, balanced nutrition, at bantayan ang anumang pagbabago."
      }
    },
    {
      name: "Chronic Mastitis",
      HIGH: {
        meaning: "Matagal na pamamaga ng breast tissue. Cause: Recurrent infections, poor lactation management, hormonal imbalance.",
        condition: "Persistent breast pain, nodules, mild swelling.",
        advice: "Kumonsulta sa doktor para sa tamang treatment. Kumain ng anti-inflammatory foods (berries, fatty fish, leafy greens). Iwasan ang smoking, alcohol, at high-fat processed foods. Regular breast exams at gentle massage kung advised."
      },
      LOW: {
        meaning: "Normal breast health, walang chronic inflammation.",
        condition: "Walang concern.",
        advice: "Panatilihin ang healthy diet, hygiene, at regular monitoring."
      }
    },
    {
      name: "Endocrine Dyscrasia",
      HIGH: {
        meaning: "Hormonal imbalance na nakakaapekto sa breast tissue. Cause: Thyroid issues, adrenal disorders, o reproductive hormones imbalance.",
        condition: "Irregular breast changes, tenderness, risk ng lumps.",
        advice: "Kumain ng foods na sumusuporta sa hormone balance (whole grains, vegetables, lean protein). Manage stress, sapat na tulog, iwasan ang sobrang caffeine at alcohol. Kumonsulta sa doktor para sa hormonal assessment."
      },
      LOW: {
        meaning: "Balanced hormones na sumusuporta sa normal breast health.",
        condition: "Normal breast tissue.",
        advice: "Maintain balanced diet, regular exercise, at routine medical check-ups."
      }
    },
    {
      name: "Fibroadenoma of Breast",
      HIGH: {
        meaning: "Benign lump sa dibdib. Cause: Hormonal fluctuation at genetics.",
        condition: "Palpable, smooth, mobile lump; kadalasan hindi masakit.",
        advice: "Regular breast self-exam, moderate exercise, iwasan ang sobrang caffeine. Maintain balanced diet, sapat na tulog, at routine check-ups sa doktor para monitoring."
      },
      LOW: {
        meaning: "Walang fibroadenoma detected.",
        condition: "Healthy breast tissue.",
        advice: "Maintain healthy lifestyle, regular breast exams, at balanced nutrition."
      }
    }
  ]
  },
  {
  category: "Menstrual Cycle",
  indicators: [
    {
      name: "Beta Hormone",
      HIGH: {
        meaning: "Mataas ang beta hormone na nakakaapekto sa menstrual cycle. Cause: Hormonal imbalance, stress, o reproductive disorders.",
        condition: "Irregular periods, heavy bleeding, bloating, mood swings.",
        advice: "Kumain ng foods na sumusuporta sa hormone balance (leafy greens, whole grains, lean protein). Practice stress management (yoga, meditation), sapat na tulog, at regular exercise. Iwasan ang excessive caffeine at processed foods. Kumonsulta sa doktor para sa hormonal assessment kung needed."
      },
      LOW: {
        meaning: "Mababa ang beta hormone, maaaring sanhi ng low ovarian function o nutritional deficiency.",
        condition: "Irregular periods, delayed menstruation, low fertility.",
        advice: "Kumain ng protein-rich foods (eggs, fish, nuts), iron-rich foods (spinach, beans), at healthy fats (avocado, olive oil). Maintain regular sleep at moderate exercise. Kumonsulta sa doktor kung patuloy ang irregularity."
      }
    },
    {
      name: "Reflect Protein",
      HIGH: {
        meaning: "Mataas ang reflect protein level. Cause: Inflammation o liver dysfunction.",
        condition: "Posibleng may infection o metabolic stress.",
        advice: "Maintain hydration, kumain ng anti-inflammatory foods (berries, fatty fish, leafy vegetables). Iwasan ang processed foods at sobrang alcohol. Rest well at manage stress."
      },
      LOW: {
        meaning: "Mababa ang reflect protein, maaaring nutritional deficiency o malabsorption.",
        condition: "Risk ng poor immunity at slow healing.",
        advice: "Kumain ng protein-rich foods (lean meat, eggs, legumes), maintain balanced diet, sapat na tulog, at regular exercise."
      }
    },
    {
      name: "Fibrinogen",
      HIGH: {
        meaning: "Mataas ang fibrinogen, na nagi-increase ng clotting tendency. Cause: Inflammation, hormonal changes, or high-fat diet.",
        condition: "Higher risk ng blood clots, stroke, at cardiovascular issues.",
        advice: "Eat high-fiber foods (vegetables, fruits, whole grains), limit saturated fat and fried foods. Stay hydrated, exercise regularly, at iwasan ang smoking. Regular medical check-ups recommended."
      },
      LOW: {
        meaning: "Mababa ang fibrinogen, na pwedeng magdulot ng bleeding tendency. Cause: Liver disease o nutritional deficiency.",
        condition: "Risk ng excessive bleeding at slow wound healing.",
        advice: "Kumain ng iron-rich foods (spinach, red meat), protein-rich diet (eggs, legumes). Regular health monitoring at avoid excessive alcohol."
      }
    },
    {
      name: "Sedimentation Rate",
      HIGH: {
        meaning: "High sedimentation rate, indicator ng inflammation. Cause: Infection, autoimmune conditions, hormonal imbalance.",
        condition: "Fatigue, menstrual irregularities, systemic inflammation.",
        advice: "Eat anti-inflammatory foods (berries, fatty fish, leafy greens). Avoid processed foods, limit sugar and alcohol. Rest well, manage stress, at regular exercise."
      },
      LOW: {
        meaning: "Low sedimentation rate, normal condition. Cause: Healthy immune and circulatory system.",
        condition: "No significant issues.",
        advice: "Maintain balanced diet, regular physical activity, sufficient sleep, and stress management."
      }
    }
  ]
  },
  {
  category: "Element of Human",
  list: [
    {
      name: "Intracellular Fluid (L)",
      HIGH: {
        meaning: "Mataas ang intracellular fluid sa cells. Cause: Excess fluid intake, electrolyte imbalance, o kidney function issues.",
        condition: "Swelling, bloating, imbalance sa electrolyte, muscle cramps.",
        advice: "Limit excessive salty foods, monitor water intake, maintain balanced electrolyte through fruits (banana, orange) and vegetables. Regular exercise helps regulate fluid balance. Avoid sugary drinks."
      },
      LOW: {
        meaning: "Mababa ang intracellular fluid. Cause: Dehydration, excessive sweating, poor hydration habits.",
        condition: "Fatigue, dry skin, dizziness, poor cell function.",
        advice: "Drink enough water daily (1.5–2L), eat hydrating foods (cucumber, watermelon), maintain electrolyte balance with potassium-rich foods. Avoid excessive caffeine and alcohol."
      }
    },
    {
      name: "Extracellular Fluid (L)",
      HIGH: {
        meaning: "High extracellular fluid. Cause: Water retention, high salt intake, kidney or heart issues.",
        condition: "Swelling in extremities, puffiness, high blood pressure.",
        advice: "Reduce salt intake, eat potassium-rich foods (banana, spinach), regular exercise to promote circulation. Avoid processed foods and excessive fluid intake at once. Monitor blood pressure regularly."
      },
      LOW: {
        meaning: "Low extracellular fluid. Cause: Dehydration, excessive sweating, or fluid loss.",
        condition: "Dizziness, low blood pressure, dry skin, fatigue.",
        advice: "Drink adequate water, consume hydrating foods, and restore electrolytes with natural sources (fruits and vegetables). Avoid excessive alcohol and caffeine."
      }
    },
    {
      name: "Protein (Kg)",
      HIGH: {
        meaning: "High body protein content. Cause: High protein diet or supplementation.",
        condition: "Generally healthy, but excessive intake may strain kidneys.",
        advice: "Maintain balanced protein intake from lean meat, fish, eggs, and legumes. Avoid excessive supplementation. Stay hydrated and exercise regularly."
      },
      LOW: {
        meaning: "Low protein levels. Cause: Poor nutrition, malabsorption, chronic illness.",
        condition: "Muscle weakness, slow recovery, poor immunity.",
        advice: "Eat protein-rich foods (eggs, meat, fish, beans), combine with vitamin C-rich foods for absorption. Avoid skipping meals. Exercise for muscle maintenance."
      }
    },
    {
      name: "Inorganic Substance (Kg)",
      HIGH: {
        meaning: "High mineral content. Cause: Excess supplementation or imbalance in diet.",
        condition: "Potential kidney strain, mineral imbalance.",
        advice: "Maintain balanced diet with natural sources of minerals (leafy greens, nuts, dairy). Avoid excessive supplements unless prescribed."
      },
      LOW: {
        meaning: "Low mineral content. Cause: Poor diet, malabsorption, excessive sweating.",
        condition: "Weak bones, muscle cramps, fatigue.",
        advice: "Eat mineral-rich foods (calcium from dairy, magnesium from nuts, iron from spinach and meat). Stay hydrated and maintain balanced nutrition."
      }
    },
    {
      name: "Body Fat (Kg)",
      HIGH: {
        meaning: "Excess body fat. Cause: Overeating, sedentary lifestyle, hormonal imbalance.",
        condition: "Obesity, risk ng diabetes, cardiovascular disease, joint stress.",
        advice: "Adopt balanced diet (reduce sugar, fried and processed foods), increase fiber intake (fruits, vegetables, whole grains). Engage in regular aerobic and strength exercises. Monitor body weight and avoid sedentary habits."
      },
      LOW: {
        meaning: "Low body fat. Cause: Undernutrition, over-exercise, metabolic issues.",
        condition: "Low energy, hormonal imbalance, weakened immunity.",
        advice: "Consume calorie-adequate, nutrient-dense meals (healthy fats from avocado, nuts, olive oil; protein-rich foods). Avoid extreme diets. Maintain moderate exercise and regular sleep."
      }
  }
  ]    
  },
 ];