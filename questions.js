// questions.js

// 1) Rå-dataene dine slik du skrev dem
const RAW_QUESTIONS = [
  {
    id: "Q1_OIP",
    text: "In order to calculate the volume of hydrocarbons in a reservoir (OIP – Oil In Place) the following properties must be determined:",
    options: [
      "Bulk density",
      "Deep resistivity",
      "Net pay",
      "Drainage area",
      "Porosity",
      "Permeability",
      "Water saturation",
      "Shale content",
      "Formation pressure"
    ],
    correctAnswers: [2, 3, 4, 5, 6],
    multi: true
  },

  {
    id: "Q2_core_plug",
    text: "Which of the following measurements are made during a basic laboratory core plug analysis:",
    options: [
      "Resistivity separation",
      "Compressional delta-T",
      "NMR total porosity",
      "Density–Neutron crossplot",
      "Mud cake build-up",
      "Spontaneous Potential (SP)"
    ],
    correctAnswers: [2, 3, 5],
    multi: true
  },

  {
    id: "Q3_lithology",
    text: "Formation lithology is commonly determined from:",
    options: [
      "Compressional delta-T (sonic)",
      "Photoelectric factor (PEF)",
      "NMR total porosity",
      "Density–Neutron crossplot",
      "Deep resistivity",
      "Spectral Gamma Ray"
    ],
    correctAnswers: [1, 3, 5],
    multi: true
  },

  {
    id: "Q4_permeable_beds",
    text: "Permeable beds can be identified from:",
    options: [
      "Bulk density",
      "Formation pressure pre-test measurement",
      "NMR total porosity",
      "Density–Neutron crossplot",
      "NMR T2 distribution",
      "Resistivity separation (Rxo vs. Rt)"
    ],
    correctAnswers: [4, 5],
    multi: true
  },

  {
    id: "Q5_permeability_quantified",
    text: "Formation permeability can be quantified from:",
    options: [
      "Bulk density",
      "Formation pressure pre-test measurement",
      "NMR total porosity",
      "Density–Neutron crossplot",
      "NMR T2 distribution",
      "Resistivity separation"
    ],
    correctAnswers: [1, 4],
    multi: true
  },

  {
    id: "Q6_washout",
    text: "Which of the following measurements may be severely affected by borehole washout:",
    options: [
      "Formation pressure",
      "Bulk density",
      "Deep laterolog",
      "Micro-resistivity",
      "Spontaneous Potential (SP)",
      "PEF (Photoelectric Factor)"
    ],
    correctAnswers: [1, 3, 4],
    multi: true
  },

  {
    id: "Q7_LWD_vs_WL",
    text: "Logging While Drilling (LWD) measurements typically offer the following benefits compared to Wireline measurements:",
    options: [
      "Real time data during drilling",
      "Improved depth accuracy",
      "Higher sampling rate",
      "More sensor types available",
      "Measurements less affected by filtrate invasion"
    ],
    correctAnswers: [0, 2, 4],
    multi: true
  },

  {
    id: "Q8_high_GR_lithology",
    text: "Which of these lithologies can be expected to give increased Gamma Ray readings:",
    options: [
      "Mica-rich sandstone",
      "K-feldspar-rich sandstone",
      "Calcitic limestone",
      "Anhydrite",
      "Dolomite",
      "Shale"
    ],
    correctAnswers: [0, 1, 5],
    multi: true
  },

  {
    id: "Q9_high_U",
    text: "A high Uranium reading from a spectral GR tool indicates:",
    options: [
      "Gas in the formation",
      "Mica-rich formation",
      "Anhydrite",
      "An organic-rich formation",
      "High clay content"
    ],
    correctAnswers: [3],
    multi: false
  },

  {
    id: "Q10_shaly_element",
    text: "Which of these elements are most closely associated with shaly formations (tick one box only!):",
    options: [
      "Potassium (K)",
      "Uranium (U)",
      "Thorium (Th)"
    ],
    correctAnswers: [2],
    multi: false
  },

  {
    id: "Q11_neutron_in_gas_sand",
    text: "In a clean gas bearing sandstone the neutron porosity will show:",
    options: [
      "Too low porosity",
      "Correct porosity",
      "Too high porosity"
    ],
    correctAnswers: [0],
    multi: false
  },

  {
    id: "Q12_neutron_DOI",
    text: "The depth of investigation for a neutron porosity tool will be larger if the formation is:",
    options: [
      "Highly porous and gas filled",
      "Highly porous and water filled",
      "Low porosity and gas filled"
    ],
    correctAnswers: [2],
    multi: false
  },

  {
    id: "Q14_m_exponent",
    text: "The cementation exponent, m, in Archie's equation is commonly determined from:",
    options: [
      "Formation resistivity alone",
      "Core plug measurements",
      "NMR T2 distribution",
      "Pickett plot in a water zone",
      "Pickett plot in an oil zone",
      "NMR permeability"
    ],
    correctAnswers: [1, 3],
    multi: true
  },

  {
    id: "Q15_m_fractured_limestone",
    text: "In a highly fractured limestone the cementation exponent, m, is usually:",
    options: [
      "Less than 2",
      "Equal to 2",
      "Higher than 2"
    ],
    correctAnswers: [0],
    multi: false
  },

  {
    id: "Q16_n_oil_wet",
    text: "In a strongly oil-wet reservoir the saturation exponent, n, in Archie's equation is usually:",
    options: [
      "Less than 2",
      "Equal to 2",
      "Higher than 2"
    ],
    correctAnswers: [2],
    multi: false
  },

  {
    id: "Q18_neutron_slow_down",
    text: "High energy neutrons are slowed down most efficiently by colliding with:",
    options: [
      "Carbon nuclei",
      "Iron nuclei",
      "Gamma rays",
      "Electrons",
      "Protons (Hydrogen nuclei)",
      "Chlorine nuclei"
    ],
    correctAnswers: [4],
    multi: false
  },

  {
    id: "Q19_Cl_correction",
    text: "Thermal neutron environmental corrections are needed to correct for Chlorine because:",
    options: [
      "Chlorine absorbs many low energy neutrons",
      "Chlorine absorbs many high energy neutrons",
      "Chlorine increases the thermal neutron population",
      "Chlorine slows down high energy neutrons",
      "Chlorine reduces the epithermal neutron population"
    ],
    correctAnswers: [0],
    multi: false
  },

  {
    id: "Q20_SP_not_favourable",
    text: "Which of the following conditions are not favourable for the Spontaneous Potential (SP) measurement:",
    options: [
      "Rmf >> Rw",
      "Rmf = Rw",
      "Thin beds",
      "Oil based mud",
      "High well temperature",
      "Permeable beds"
    ],
    correctAnswers: [1, 2, 3],
    multi: true
  },

  {
    id: "Q21_Laterolog_optimum",
    text: "The optimum conditions for measuring Rt with a Laterolog tool are:",
    options: [
      "High Rt, Rxo > Rt",
      "Low Rt, Rxo > Rt",
      "High Rt, Rt > Rxo",
      "Low Rt, Rt > Rxo",
      "Low Rt, Rw > Rmf"
    ],
    correctAnswers: [2],
    multi: false
  },

  {
    id: "Q22_Induction_optimum",
    text: "The optimum conditions for measuring Rt with an Induction tool are:",
    options: [
      "High Rt, Rxo > Rt",
      "Low Rt, Rxo > Rt",
      "High Rt, Rt > Rxo",
      "Low Rt, Rt > Rxo",
      "Low Rt, Rw > Rmf"
    ],
    correctAnswers: [3],
    multi: false
  },

  {
    id: "Q24_salinity_from_Rmf",
    text: "From data given in the log header and salinity chart, what is the salinity of the borehole fluid:",
    options: [
      "70 000 ppm",
      "46 000 ppm",
      "85 000 ppm",
      "39 000 ppm",
      "14 000 ppm"
    ],
    correctAnswers: [1],
    multi: false
  },

  {
    id: "Q25_water_depth",
    text: "What is the water depth at the well location:",
    options: [
      "23.0 m",
      "46.0 m",
      "374.0 m",
      "397.0 m",
      "1249.5 m"
    ],
    correctAnswers: [4],
    multi: false
  },

  {
    id: "Q28_T2_cutoff",
    text: "What is a commonly used free-fluid / bound-fluid T2 cut-off value for sandstone reservoirs:",
    options: [
      "100 ms",
      "33 ms",
      "3 ms"
    ],
    correctAnswers: [1],
    multi: false
  },

  // --- resten av spørsmålene dine her (samme format som du allerede har skrevet) ---

];

// 2) Konverter til formatet som index.html forventer
window.QUESTIONS = RAW_QUESTIONS.map((q) => ({
  id: q.id,
  topic: "Eksamen",
  text: q.text,
  options: q.options.map((optText, idx) => ({
    text: optText,
    correct: q.correctAnswers.includes(idx)
  })),
  explanation: q.explanation || ""
}));
