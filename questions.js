// questions.js
// Rå-spørsmålene dine slik du skrev dem:
const RAW_QUESTIONS = [
  // --------- EXAM BLOCK 1 (OIP / CORE / WASHOUT / NMR / SP / RESISTIVITY etc.) ----------

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
    // Net pay, drainage area, porosity, water saturation, permeability
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
    // Fra fasit i PDF: X ved NMR total porosity, Density-Neutron crossplot, Spontaneous Potential - SP.
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
    // PEF, Density-Neutron crossplot, Spectral GR
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
    // NMR T2 distribution + Resistivity separation
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
    // Formation pressure pre-test (mobility) + NMR T2 distribution
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
    // Sterkt påvirket: Bulk density, Micro-resistivity, SP
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
    // Vanlig fasit: Real-time data, higher sampling rate, measurements less affected by invasion
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
    // Thorium
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
    // lav porøsitet + gass → nøytronene går dypere
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
    // typisk: core plugs + Pickett plot in water zone
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
    // Ikke gunstig: Rmf = Rw (ingen kontrast), thin beds, OBM
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

  // --------- EXAM BLOCK 2 (BASIC LOGGING / ENV CORR / SOURCES) ----------

  {
    id: "Q1b_inplace",
    text: "Which reservoir properties are needed in order to calculate the in-place hydrocarbon volume:",
    options: [
      "Porosity",
      "Permeability",
      "Areal extent / drainage area",
      "Net pay height",
      "Hydrocarbon saturation",
      "Lithology"
    ],
    // hoved: porosity, net pay height, hydrocarbon saturation, areal extent
    correctAnswers: [0, 2, 3, 4],
    multi: true
  },

  {
    id: "Q2b_cuttings",
    text: "Wellsite cuttings analysis typically provides:",
    options: [
      "Porosity",
      "Permeability",
      "Areal extent",
      "Net pay height",
      "Hydrocarbon saturation",
      "Lithology"
    ],
    // typisk fra cuttings: lithology, hydrocarbon shows
    correctAnswers: [4, 5],
    multi: true
  },

  {
    id: "Q3b_LWD_advantages",
    text: "Formation evaluation based on Logging-While-Drilling (LWD) data has the following advantages over Wireline logging:",
    options: [
      "Improved depth control",
      "More accurate sensors",
      "Higher logging speed",
      "Saves rig time",
      "Less mud filtrate invasion",
      "Real-time data for drilling decisions"
    ],
    correctAnswers: [2, 3, 5],
    multi: true
  },

  {
    id: "Q4b_invasion_depth",
    text: "What is a typical depth of mud filtrate invasion in a permeable formation at the time of (wireline) logging:",
    options: [
      "< 5 mm",
      "5–20 cm",
      "> 2 m"
    ],
    correctAnswers: [1],
    multi: false
  },

  {
    id: "Q5b_mudcake_indication",
    text: "The presence of mud-cake on the borehole wall is an indication of:",
    options: [
      "Large borehole",
      "Low formation pressure",
      "Permeable formation",
      "Water-based mud",
      "High mud density"
    ],
    correctAnswers: [2],
    multi: false
  },

  {
    id: "Q6b_GR_source",
    text: "Which of the following logging tools use a gamma ray source for its measurement:",
    options: [
      "Neutron porosity tool",
      "Micro-resistivity tool",
      "Induced Gamma Spectroscopy tool",
      "Nuclear Magnetic Resonance (NMR) tool",
      "Litho-Density tool",
      "Natural Spectral Gamma Ray tool"
    ],
    correctAnswers: [2, 4],
    multi: true
  },

  {
    id: "Q7b_neutron_source",
    text: "Which of the following logging tools use a neutron source for its measurement:",
    options: [
      "Neutron porosity tool",
      "Micro-resistivity tool",
      "Induced Gamma Spectroscopy tool",
      "Nuclear Magnetic Resonance (NMR) tool",
      "Litho-Density tool",
      "Natural Spectral Gamma Ray tool"
    ],
    correctAnswers: [0],
    multi: false
  },

  {
    id: "Q8b_GR_applications",
    text: "Some common applications for the Gamma Ray (GR) log include:",
    options: [
      "Well-to-well correlation",
      "Porosity determination",
      "Borehole washout",
      "Mud pressure",
      "Formation depositional environment",
      "Shale identification"
    ],
    correctAnswers: [0, 4, 5],
    multi: true
  },

  {
    id: "Q9b_density_scale",
    text: "A bulk density log is displayed with a scale from 1.71 to 2.71 g/cc. What is then the limestone compatible neutron porosity scale (in l.p.u.):",
    options: [
      "0.45 to -0.15 p.u.",
      "0.45 to 0 p.u.",
      "0.50 to 0 p.u.",
      "0.58 to 0 p.u.",
      "0.58 to -0.02 p.u."
    ],
    correctAnswers: [0],
    multi: false
  },

  {
    id: "Q10b_PEF_indicator",
    text: "The Photoelectric factor, Pef, is a good indicator of:",
    options: [
      "Lithology",
      "Porosity",
      "Formation fluid type",
      "Hydrogen Index",
      "Electron density"
    ],
    correctAnswers: [0],
    multi: false
  },

  // --------- EXAM BLOCK 3 (OBM vs WBM, NMR, SHALY SAND etc.) ----------

  {
    id: "Q9c_OBM_limitations",
    text: "Which of the following measurements will not work well in oil-based mud:",
    options: [
      "Spontaneous Potential",
      "Induction resistivity",
      "Formation pressure",
      "Laterolog resistivity",
      "Nuclear Magnetic Resonance"
    ],
    correctAnswers: [0, 4],
    multi: true
  },

  {
    id: "Q10c_Rmf_salinity",
    text: "A log header lists the resistivity of the mud filtrate as: Rmf = 0.20 ohm-m @ 80°F. Using the salinity chart, what is the salinity (NaCl equivalent) of the mud filtrate?",
    options: [
      "2 000 ppm",
      "5 500 ppm",
      "30 000 ppm",
      "80 000 ppm",
      "100 000 ppm",
      "120 000 ppm"
    ],
    correctAnswers: [2],
    multi: false
  },

  {
    id: "Q11c_Rmf_at_temp",
    text: "What is the resistivity of this mud filtrate in a formation with a temperature of 250°F?",
    options: [
      "0.010 ohm-m",
      "0.065 ohm-m",
      "0.080 ohm-m",
      "0.100 ohm-m",
      "0.123 ohm-m",
      "0.200 ohm-m"
    ],
    correctAnswers: [2],
    multi: false
  },

  {
    id: "Q12c_KCl_vs_NaCl",
    text: "A set of logs is acquired with a Potassium Chloride water based mud (WBM) in the hole. The mud system is then changed to a Sodium Chloride WBM of similar mud weight. The well is then re-logged. Which of the following log curves are
 likely to show significant differences between the two logging runs:",
    options: [
      "Compressional sonic",
      "Density",
      "Deep induction",
      "Gamma Ray",
      "Photoelectric factor (PEF)",
      "Uranium"
    ],
    correctAnswers: [3],
    multi: false
  },

  {
    id: "Q13c_stuck_tool_variation",
    text: "During logging, if a tool string is temporarily stuck in the borehole while the cable continues to be pulled out of the well, some stationary tools will continue to show small variations because of the nature of the measurement. This is seen on which of these measurements:",
    options: [
      "Sonic",
      "Deep induction",
      "Caliper",
      "Shallow laterolog",
      "Neutron porosity",
      "Bulk density"
    ],
    correctAnswers: [0, 4],
    multi: true
  },

  {
    id: "Q19d_shaly_water_sand",
    text: "Well logs are recorded across a water-filled shaly sandstone. Which of the following effects can be expected (compared to a clean sandstone):",
    options: [
      "Increased Rt",
      "Higher GR",
      "Decreased Rt",
      "Higher NMR permeability",
      "Increased neutron porosity"
    ],
    correctAnswers: [1, 2, 4],
    multi: true
  },

  {
    id: "Q20d_shaly_oil_sand",
    text: "Well logs are recorded across an oil-filled shaly sandstone. Which of the following effects can be expected (compared to a clean oil-filled sandstone):",
    options: [
      "Increased Rt",
      "Higher GR",
      "Decreased Rt",
      "Higher NMR permeability",
      "Increased neutron porosity"
    ],
    correctAnswers: [0, 1, 4],
    multi: true
  },

  {
    id: "Q21d_clay_element",
    text: "Which of the following elements has the strongest correlation to clay content (tick one box only!):",
    options: [
      "Thorium",
      "Uranium",
      "Potassium"
    ],
    correctAnswers: [0],
    multi: false
  },

  {
    id: "Q23d_NMR_too_low",
    text: "Which of the following conditions will cause the total porosity from NMR to read too low:",
    options: [
      "Low permeability",
      "Gas in the formation",
      "Too short echo spacing, TE",
      "Tool not tuned to the Larmor frequency",
      "Oil-wet formation",
      "Insufficient polarization time (Wait Time)"
    ],
    correctAnswers: [1, 2, 5],
    multi: true
  },

  {
    id: "Q25d_permeable_zones",
    text: "Which zone(s) appear permeable (from the provided log):",
    options: [
      "Zone A",
      "Zone B",
      "Zone C",
      "Zone D",
      "Zone E"
    ],
    correctAnswers: [1, 2, 4],
    multi: true
  },

  {
    id: "Q26d_mud_system",
    text: "Which mud system has been used for this section of the well:",
    options: [
      "Oil-based mud (OBM)",
      "Sea water",
      "Water-based mud (WBM)"
    ],
    correctAnswers: [2],
    multi: false
  },

  {
    id: "Q27d_mudcake_indication",
    text: "Mudcake build-up as evidenced by the caliper reading is normally an indication of:",
    options: [
      "Barite in the mud",
      "Permeable formation",
      "Oil in the formation"
    ],
    correctAnswers: [1],
    multi: false
  }
];


// 🚀 Konverter til formatet som index.html forventer
window.QUESTIONS = RAW_QUESTIONS.map((q) => ({
  id: q.id,
  topic: "Eksamen",              // samme tema på alle – enkelt og greit
  text: q.text,
  options: q.options.map((optText, idx) => ({
    text: optText,
    correct: Array.isArray(q.correctAnswers)
      ? q.correctAnswers.includes(idx)
      : false
  })),
  explanation: q.explanation || ""
}));
