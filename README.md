# The challenge
Your challenge is to build out a jobs listing using a local data.json to retrieve the data.

Your users should be able to:
- See all jobs on the homepage
- Search for job title using an input field
- Be able to filter jobs on the index page by title, location, and whether a job is for a full-time position
- Be able to click a job from the index page so that they can read more information and apply for the job
- View the optimal layout for each page depending on their device's screen size (Mobile - 375px, Desktop - 1440px)
- Toggle the color scheme between light and dark mode

# Data example
```json
[
    {
        "id": "6b9a7121-f23b-4411-b733-61ab954a5cd9",
        "type": "Full Time",
        "url": "https://jobs.github.com/positions/6b9a7121-f23b-4411-b733-61ab954a5cd9",
        "created_at": "Mon Feb 10 20:02:41 UTC 2020",
        "company": "Kite",
        "company_url": "http://kite.com",
        "location": "San Francisco",
        "title": "Machine Learning Engineer",
        "description": "<p><em>“I really love the line-of-code completions in the new kite.com.” — Guido van Rossum, creator of Python</em></p>\n<p>Programmers spend too much time doing repetitive work — copying and pasting from StackOverflow, fixing simple errors, and writing boilerplate code. We're building an AI code engine that does this work for you. Programming using Kite is faster and more fun.</p>\n<p>Kite is well-funded by top investors in Silicon Valley, including the founders of PayPal, Stripe, Palantir, and Dropbox to name a few. We are looking to expand our 20-person startup with talented individuals who are interested in joining an early stage startup. The ideal candidate is excited to help guide the direction of our product and company. They will have a significant amount of ownership of critical technical components. Our team is growing rapidly and we hope you'll grow with us too!</p>\n<p><strong>What you'll do:</strong></p>\n<ul>\n<li>Work on exciting new applications for ML that combine large datasets with highly structured input and output spaces</li>\n<li>Use traditional ML techniques such as Probabilistic Graphical Models, SVMs, etc. along with the latest techniques from deep learning including graph neural networks</li>\n<li>Work with the Program Analysis Team to leverage techniques from static analysis to build rich representations of source code that are suitable for learning</li>\n<li>Work with the Program Analysis Team to improve the precision, robustness and scalability of traditional static analysis algorithms using techniques from machine learning</li>\n</ul>\n<p><strong>Who you are:</strong></p>\n<ul>\n<li>BA/BS degree or higher in Computer Science/Math/Physics or related technical field</li>\n<li>2+ years experience writing production-grade software</li>\n<li>Interest in pioneering the application of machine learning to code</li>\n<li>Experience with one or more general purpose programming languages including but not limited to: Java, C/C++ or Python</li>\n</ul>\n<p><strong>Preferred Qualifications:</strong></p>\n<ul>\n<li>MS degree or PhD in CS, Artificial Intelligence, Machine Learning, Math, Physics or related technical field</li>\n<li>Experience with one or more of the following: Natural Language Processing, text understanding, classification, pattern recognition, recommendation systems, targeting systems, ranking systems or similar</li>\n<li>Experience with Machine Learning Modeling</li>\n<li>Experience building complex software outside of frameworks or existing infrastructure</li>\n</ul>\n",
        "how_to_apply": "<p><a href=\"https://jobs.lever.co/kite\">Apply Here</a></p>\n",
        "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBazkrIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--553abf078bbf9211ad892d162c8c1d8abdf9449e/%2311182F%20-%20dark%20navy%202x%20Twitter%20Logo.png"
    },
    
    }
]
```