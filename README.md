S-09: Online Misinformation Awareness Campaign for Young Adults
This repository contains the design, implementation resources, and technical assets for the Online Misinformation Awareness Campaign for Young Adults (S-09). This initiative is designed to assess baseline digital media literacy, execute an educational campaign using physical and digital channels, and provide young adults (ages 18–25) with practical validation techniques based on established media literacy frameworks (SIFT, CRAAP, and UNESCO MIL).
📂 Repository Structure
code
Text
├── .github/                       # GitHub actions and issue templates
├── campaign-assets/               # Creative assets for digital and print distribution
│   ├── posters/                   # PDF and high-res print-ready posters
│   ├── reels/                     # Short-form video scripts and storyboards
│   └── whatsapp-stickers/         # PNG/WEBP files and sticker pack configurations
├── workshops/                     # Facilitation guides and presentations
│   ├── workshop-1-detective/      # SIFT framework slides, exercises, and handouts
│   └── workshop-2-deepfakes/      # Deepfake identification and peer multiplier guides
├── survey-tools/                  # Evaluation and metric gathering instruments
│   ├── baseline_survey.md         # Pre-campaign survey questions and scale details
│   ├── endline_survey.md          # Post-campaign survey questions
│   └── analysis/                  # Python scripts for pre/post statistical comparison
├── resource-guide/                # Open-access reference materials
│   └── digital-detective-guide.pdf # Digital-ready quick reference guide
├── bot-prototype/                 # Proof-of-concept WhatsApp validation bot
│   ├── app.py                     # Flask application for webhook handling
│   ├── requirements.txt           # Python dependency file
│   └── README.md                  # Bot configuration and setup instructions
├── docs/                          # Additional project documentation
│   └── policy_brief.md            # University administration integration proposal
├── LICENSE                        # MIT License
└── README.md                      # This file
🚀 Getting Started
To deploy or utilize the assets in this repository, follow the guidelines below for each component.
1. Conducting the Surveys (/survey-tools)
The surveys are designed to measure shifts in misinformation susceptibility and behavioral adoption.
The raw questionnaire is available in baseline_survey.md.
You can import the questions directly into tools like Google Forms, Microsoft Forms, or Qualtrics.
To analyze the pre- and post-campaign data, a sample analysis script is provided in /survey-tools/analysis/.
Running the Analysis Script:
Navigate to the directory:
code
Bash
cd survey-tools/analysis
Install dependencies:
code
Bash
pip install pandas scipy matplotlib
Run the comparison script:
code
Bash
python analyze_results.py --pre pre_results.csv --post post_results.csv
2. Conducting Workshops (/workshops)
The workshops are split into two interactive modules:
Workshop 1: Digital Detective (Practical Tools): Focuses on the SIFT methodology, reverse-image searching, and using local fact-checking platforms.
Workshop 2: Advanced Verification & Closed Networks: Focuses on synthetic media (deepfakes) and interpersonal negotiation in private messaging groups (family WhatsApp chats).
Each directory contains a markdown facilitation guide outlining timing, slide transitions, and hands-on exercises.
3. Deploying the WhatsApp Bot Prototype (/bot-prototype)
The repository contains a lightweight, Flask-based WhatsApp bot that integrates with the Google Custom Search API to allow users to query local fact-checking sites directly from WhatsApp.
Prerequisites
Python 3.8+
A Twilio account with the WhatsApp Sandbox enabled
A Google Programmable Search Engine ID configured to search fact-checking domains (e.g., boomlive.in, altnews.in, snopes.com)
A Google Custom Search API Key
Installation
Navigate to the directory:
code
Bash
cd bot-prototype
Install the required libraries:
code
Bash
pip install -r requirements.txt
Configure your environment variables in a .env file:
code
Env
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
GOOGLE_API_KEY=your_google_api_key
CUSTOM_SEARCH_CX=your_search_engine_id
Start the local server:
code
Bash
python app.py
Expose your local port (e.g., using ngrok or similar tools) to set up the Twilio webhook:
code
Bash
ngrok http 5000
Copy the generated forwarding URL (e.g., https://<subdomain>.ngrok-free.app/sms) and paste it into the "A Message Comes In" webhook field in your Twilio WhatsApp Sandbox console.
📊 Campaign Impact Metrics
The campaign targets the following success metrics over a 6-week deployment cycle:
Metric	Target	Verification Method
Campaign Reach	
≥
≥
 1,000 Impressions	Social Media Analytics & Event Logs
Workshop Attendees	
≥
≥
 100 Students	Sign-in sheets / Digital attendance logs
Susceptibility Score	Measurable Decrease	Pre/Post Likert Scale Comparison
Fact-Checking Practice Shift	
≥
≥
 40% positive shift	Post-survey behavioral frequency self-reports
Peer Multipliers Trained	
≥
≥
 10 Students	Active participation in Workshop 2
📜 Policy Integration
To help sustain media literacy education beyond temporary campaigns, review docs/policy_brief.md. This document outlines a structured proposal for university administrations to integrate verification training directly into first-year orientation programs and general education requirements.
🤝 Contributing
We welcome contributions to this project, including new workshop activities, translated campaign materials, and updates to the chatbot prototype.
Fork the project repository.
Create your feature branch (git checkout -b feature/AmazingFeature).
Commit your changes (git commit -m 'Add some AmazingFeature').
Push to the branch (git push origin feature/AmazingFeature).
Open a Pull Request.