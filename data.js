const engineeringData = {
    "computer": {
        name: "Computer Engineering",
        icon: "fa-laptop-code",
        semesters: {
            1: ["Applied Mechanics", "Basic Electrical Engineering", "Engineering Physics", "Engineering Drawing I", "Engineering Mathematics I", "Computer Programming"],
            2: ["Engineering Mathematics II", "Engineering Drawing II", "Basic Electronics Engineering", "Engineering Chemistry", "Thermodynamics & Heat Transfer", "Workshop Technology"],
            3: ["Engineering Mathematics III", "Object Oriented Programming", "Electric Circuit Theory", "Theory of Computation", "Electronics Devices and Circuit", "Digital Logic", "Electromagnetics"],
            4: ["Numerical Method", "Applied Mathematics", "Instrumentation I", "Data Structure and Algorithm", "Microprocessor", "Discrete Structure", "Electrical Machine"],
            5: ["Communication English", "Probability and Statistics", "Computer Org & Architecture", "Software Engineering", "Computer Graphics", "Instrumentation II", "Data Communication"],
            6: ["Engineering Economics", "OOAD", "Artificial Intelligence", "Operating System", "Embedded System", "DBMS", "Minor Project"],
            7: ["ICT Project Management", "Organization and Management", "Energy Environment and Society", "Distributed System", "Computer Networks", "DSAP", "Project (Part A)", 
                { type: "elective", name: "Elective I", subjects: ["Advanced Java", "Data Mining", "Image Processing", "Web Technology", "Operating System"] }
            ],
            8: ["Professional Practice", "Information Systems", "Internet and Intranet", "Project (Part B)", "Simulation and Modelling",
                { type: "elective", name: "Elective II", subjects: ["Big Data Technologies", "Agile Software Development", "Network with IPv6", "Advanced Computer Architecture"] },
                { type: "elective", name: "Elective III", subjects: ["Multimedia System", "Remote Sensing", "Enterprise Application Design", "Geographical Information System"] }
            ]
        }
    },
    "electronics": {
        name: "Electronics (BEI New)",
        icon: "fa-microchip",
        semesters: {
            1: ["Engineering Drawing I", "Engineering Physics", "Basic Electrical Engineering", "Digital Logic", "Engineering Mathematics I", "Computer Programming"],
            2: ["Engineering Mathematics II", "Engineering Chemistry", "Workshop Technology", "OOP", "Microprocessor", "Electric Circuits and Machines"],
            3: ["Probability and Statistics", "Engineering Mathematics III", "Electronics Devices and Circuit", "Instrumentation (BEI)", "Control System", "Electromagnetics"],
            4: ["Applied Mathematics", "Numerical Method", "Data Structure and Algorithm", "Computer Graphics", "Discrete Structure"],
            5: ["Computer Org & Architecture", "Engineering Economics", "DBMS", "Operating System", "Filter Design", "Computer Networks"],
            6: ["Communication English", "Embedded System", "Antenna and Propagation", "Minor Project", "Communication System I"],
            7: ["Artificial Intelligence", "DSAP", "Organization and Management", "RF and Microwave", "Wireless Communication", "Project (Part A)"],
            8: ["Digital Signal Processing", "Project (Part B)", "Professional Practice", "Information Systems", "Telecommunication", "Energy Environment and Society"]
        }
    },
    "civil": {
        name: "Civil Engineering",
        icon: "fa-building",
        semesters: {
            1: ["Engineering Drawing I", "Engineering Mathematics I", "Thermodynamics & Heat Transfer", "Engineering Chemistry", "Workshop Technology", "Computer Programming"],
            2: ["Engineering Mathematics II", "Basic Electronics", "Engineering Drawing II", "Engineering Physics", "Applied Mechanics", "Basic Electrical Engineering"],
            3: ["Civil Engineering Materials", "Engineering Mathematics III", "Applied Mechanics (Dynamics)", "Engineering Geology I", "Strength of Materials", "Surveying I", "Fluid Mechanics"],
            4: ["Hydraulics", "Surveying II", "Theory of Structures I", "Probability and Statistics", "Engineering Geology II", "Building Drawing", "Soil Mechanics"],
            5: ["Theory of Structure II", "Water Supply Engineering", "Engineering Hydrology", "Concrete Technology", "Numerical Methods", "Foundation Engineering", "Survey Camp"],
            6: ["Design of Steel & Timber Structure", "Communication English", "Engineering Economics", "Building Technology", "Sanitary Engineering", "Transportation Engineering", "Irrigation and Drainage"],
            7: ["Hydropower Engineering", "Project Engineering", "Transportation Engineering II", "Estimating & Costing", "Design of RCC Structure", "Project (Part I)",
                { type: "elective", name: "Elective I", subjects: ["Bio-Engineering", "Structural Dynamics", "Solid Waste Management", "Earth Hazard", "Ropeway Engineering"] }
            ],
            8: ["Technology Environment and Society", "Construction Management", "Project (Part II)", "Professional Practice", "Computational Techniques",
                { type: "elective", name: "Elective II", subjects: ["Earthquake Resistant Design", "Design of Bridges", "Rural Road Engineering", "Climate Change"] },
                { type: "elective", name: "Elective III", subjects: ["Construction Safety Management", "GIS Application", "Disaster Risk Management", "EIA"] }
            ]
        }
    },
    "mechanical": {
        name: "Mechanical Engineering",
        icon: "fa-cogs",
        semesters: {
            1: ["Engineering Drawing I", "Engineering Mathematics I", "Thermodynamics & Heat Transfer", "Engineering Chemistry", "Workshop Technology", "Computer Programming"],
            2: ["Engineering Mathematics II", "Engineering Drawing II", "Basic Electronics", "Engineering Physics", "Basic Electrical", "Applied Mechanics"],
            3: ["Engineering Mathematics III", "Material Science", "Engineering Mechanics", "Metrology", "Applied Thermodynamics", "Computer Aided Drawing"],
            4: ["Probability and Statistics", "Manufacturing Processes", "Strength of Materials", "Instrumentation", "Fluid Mechanics", "Electrical Machine"],
            5: ["Numerical Methods", "Control System", "Organization and Management", "Mechanics of Solids", "Heat Transfer", "Fluid Machines"],
            6: ["Communication English", "Machine Design I", "Industrial Engineering", "Theory of Mechanism I", "IC Engines", "Energy Resources"],
            7: ["Machine Design II", "Theory of Mechanism II", "Engineering Economics", "Turbo Machines", "Environment Pollution Control",
                { type: "elective", name: "Elective I", subjects: ["Automobile Technology", "Basic Aircraft & Air Frame", "Micro Hydropower", "HVAC"] }
            ],
            8: ["Project Engineering", "Finite Element Method", "Professional Practice", "Project I & II",
                { type: "elective", name: "Elective II", subjects: ["Aircraft Dynamics", "Refrigeration", "System Design", "Quality Management"] },
                { type: "elective", name: "Elective III", subjects: ["Advance Mechanical Design", "Avionics", "Construction Equipment"] }
            ]
        }
    },
    "electrical": {
        name: "Electrical Engineering",
        icon: "fa-bolt",
        semesters: {
            1: ["Applied Mechanics", "Basic Electrical Engineering", "Engineering Physics", "Engineering Drawing I", "Engineering Mathematics I", "Computer Programming"],
            2: ["Engineering Mathematics II", "Engineering Drawing II", "Basic Electronics", "Engineering Chemistry", "Thermodynamics & Heat Transfer", "Workshop Technology"],
            3: ["Engineering Mathematics III", "Electric Circuit Theory", "Electrical Engineering Material", "Electronic Devices", "Digital Logic", "Electromagnetics"],
            4: ["Applied Mathematics", "Numerical Method", "Electrical Machine I", "Power System Analysis I", "Instrumentation I", "Microprocessor"],
            5: ["Communication English", "Probability and Statistics", "Electrical Machine II", "Power System Analysis II", "Instrumentation II", "Control System"],
            6: ["Engineering Economics", "Hydro Power", "Switchgear and Protection", "Digital Control System", "Signal Analysis", "Industrial Power Distribution and Illumination"],
            7: ["Project Engineering", "Organization and Management", "Technology,Environment and Society", "Power Electronics", "Utilization of Electrical Energy", "Power Plant Equipment", "Project I", 
                { type: "elective", name: "Elective I", subjects: ["Rural Electrification", "Energy Electrical System Management", "Reliability Engineering"] }
            ],
            8: ["Professional Practice", "High Voltage Engineering", "High Voltage Engineering", "Power Plant Design", "Transmission and Distribution Design", "Project II",
                { type: "elective", name: "Elective II", subjects: ["Advanced Power System Analysis", "Bio-Medical Instrumentation", "Applied Photovoltaic"] },
                { type: "elective", name: "Elective III", subjects: ["Wind Energy Conversion System", "Artificial Neural Network", "Micro-Hydropower"] }
            ]
        }
    },
    "architecture": {
        name: "Architecture",
        icon: "fa-hotel",
        semesters: {
            1: ["Applied Mechanics", "Basic Design I", "Introduction to Architecture", "Drafting I", "Free Hand Sketching I", "Building Materials I", "Mathematics I"],
            2: ["Mathematics II", "Drafting II", "Basic Design II", "Arts & Graphic", "Building Construction I", "Free Hand Sketching II", "Basic Skill Workshop"],
            3: ["Design Studio III", "History of Architecture I", "Building Materials II", "Building Construction II", "Building Science I", "Structure I", "Design Theory I"],
            4: ["Design Studio IV", "History of Architecture II", "Building Construction III", "Design Theory II", "Structure II", "Surveying"],
            5: ["Design Studio V", "Contemporary Architecture", "CAD & Drafting", "Building Construction IV", "Working Drawing", "Building Services I", "Building Services II"],
            6: ["Design Studio VI", "Urban & Settlement Planning", "Building Science II", "Structure III", "Specifications", "Estimating & Costing", "Sociology", "Building Economics"],
            7: ["Practicum"],
            8: ["Architectural Conservation", "Design Studio VII", "Construction Management", "Communications", "Structure IV", "Building Services III",
                { type: "elective", name: "Elective I", subjects: ["Interior Design", "Landscape Architecture", "Housing", "Urban Design"] }
            ]
        }
    },
    "agriculture": {
        name: "Agriculture",
        icon: "fa-seedling",
        semesters: {
            1: ["Engineering Physics", "Engineering Drawing I", "Applied Mechanics", "Basic Electrical", "Mathematics I", "Computer Programming"],
            2: ["Mathematics II", "Basic Electronics", "Engineering Drawing II", "Engineering Chemistry", "Thermodynamics", "Workshop Technology"],
            3: ["Mathematics III", "Fluid Mechanics", "Refrigeration", "Electric Systems", "Farm Power", "Soil Science", "Engineering Materials"],
            4: ["Numerical Method", "Hydraulics", "Surveying", "Strength of Materials", "Farm Machinery", "Crop Science"],
            5: ["Communication English", "Probability and Statistics", "Soil Mechanics", "Survey Camp", "Machine Elements", "Tractor Systems", "Bio-Materials", "Hydrology"],
            6: ["Design of Structures", "Field Operation", "Soil & Water Conservation", "Post Harvest", "Farm Structures", "Irrigation", "Economics"],
            7: ["Project Engineering", "Estimating", "Ground Water", "Dairy Engineering", "Renewable Energy", "Project (Part I)",
                { type: "elective", name: "Elective I", subjects: ["Bio Energy Tech", "Farm Machinery Design", "Surface Irrigation", "Watershed Management"] }
            ],
            8: ["Professional Practice", "Rural Infrastructure", "Industrial Training", "Extension Education", "Climate Change", "Project (Part II)",
                { type: "elective", name: "Elective II", subjects: ["Testing of Machinery", "Micro Irrigation", "Soil Conservation Structures", "Solar PV System"] },
                { type: "elective", name: "Elective III", subjects: ["Micro-Hydro", "Small Dams", "Tillage Machinery", "Remote Sensing & GIS"] }
            ]
        }
    }
};