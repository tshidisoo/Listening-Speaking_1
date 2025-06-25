// Quiz Data
const quizData = [
    // Conversation Starters
    {
        id: 1,
        category: "Starting Conversations",
        type: "multiple-choice",
        question: "Which phrase is most appropriate for starting a casual conversation with a new colleague?",
        options: [
            "What's up?",
            "Hello! It's nice to meet you.",
            "Can I ask you something?",
            "Do you have a minute?"
        ],
        correct: 1,
        explanation: "'Hello! It's nice to meet you.' is the most professional and appropriate way to start a conversation with a new colleague."
    },
    
    // Opinion Expression
    {
        id: 2,
        category: "Expressing Opinions",
        type: "multiple-choice",
        question: "Complete the sentence: '_____, social media has both positive and negative effects.'",
        options: [
            "I think that",
            "In my opinion",
            "From my point of view",
            "All of the above are correct"
        ],
        correct: 3,
        explanation: "All these phrases are correct ways to introduce your opinion in English."
    },
    
    // Restaurant Scenario
    {
        id: 3,
        category: "At a Restaurant",
        type: "scenario-audio",
        question: "Listen to this restaurant conversation and choose the best response:",
        options: [
            "I'm fine, thank you.",
            "I'd like the chicken pasta, please.",
            "Yes, I do.",
            "No problem."
        ],
        correct: 1,
        explanation: "When asked what you'd like to order, you should specify your food choice clearly."
    },
    
    // Agreeing/Disagreeing
    {
        id: 4,
        category: "Agreeing & Disagreeing",
        type: "multiple-choice",
        question: "Which is the most polite way to disagree with someone?",
        options: [
            "You're wrong.",
            "I don't really agree.",
            "I see your point, but I think differently.",
            "That's not true."
        ],
        correct: 2,
        explanation: "'I see your point, but...' acknowledges their opinion before presenting your own, making it more polite."
    },
    
    // Airport Scenario
    {
        id: 5,
        category: "At the Airport",
        type: "fill-in",
        question: "Complete the conversation at airport security: 'Can you show me your _____ and boarding _____, please?'",
        answer: ["passport", "pass"],
        explanation: "Airport security typically asks for your 'passport' and 'boarding pass' for identification."
    },
    
    // Daily Routine
    {
        id: 6,
        category: "Daily Routines",
        type: "multiple-choice",
        question: "What's the best response to 'What time do you usually wake up?'",
        options: [
            "I wake up at 7 AM usually.",
            "I usually wake up at 7 AM.",
            "Usually I wake up at 7 AM.",
            "All answers are acceptable"
        ],
        correct: 3,
        explanation: "All these sentence structures are grammatically correct and commonly used."
    },
    
    // Shopping
    {
        id: 7,
        category: "Shopping",
        type: "scenario-audio",
        question: "You're in a clothing store. What would you ask to try on a shirt?",
        audio: "You see a shirt you like but need to check if it fits.",
        options: [
            "How much does this cost?",
            "Can I try this on?",
            "Do you have this in stock?",
            "Is there a discount?"
        ],
        correct: 1,
        explanation: "'Can I try this on?' is the standard phrase for asking to try clothes before buying."
    },
    
    // Asking for Clarification
    {
        id: 8,
        category: "Asking for Clarification",
        type: "multiple-choice",
        question: "If you didn't understand something someone said, which is most polite?",
        options: [
            "What?",
            "Sorry, I didn't catch that.",
            "I don't understand.",
            "Repeat that."
        ],
        correct: 1,
        explanation: "'Sorry, I didn't catch that' is polite and shows you were paying attention but missed something."
    },
    
    // Doctor's Office
    {
        id: 9,
        category: "At the Doctor's",
        type: "fill-in",
        question: "The doctor asks: 'How long have you _____ this way?' (feeling sick)",
        answer: ["felt"],
        explanation: "The correct form is 'felt' - past participle used with 'have' in present perfect tense."
    },
    
    // Giving Directions
    {
        id: 10,
        category: "Giving Directions",
        type: "multiple-choice",
        question: "Someone asks for directions to the train station. What's the most helpful response?",
        options: [
            "Go straight and turn left at the traffic light.",
            "It's over there.",
            "I don't know.",
            "Take a taxi."
        ],
        correct: 0,
        explanation: "Clear, step-by-step directions are most helpful when someone asks for directions."
    },
    
    // Making Plans
    {
        id: 11,
        category: "Making Plans",
        type: "scenario-audio",
        question: "Your friend suggests going to the cinema. You're not sure about the time. What do you say?",
        audio: "Friend: 'Do you want to go to the cinema tonight?'",
        options: [
            "No, I can't.",
            "What time should we meet?",
            "I don't like movies.",
            "Maybe next time."
        ],
        correct: 1,
        explanation: "Asking about the time shows interest while gathering more information to make a decision."
    },
    
    // Vocabulary - Adjectives
    {
        id: 12,
        category: "Vocabulary",
        type: "multiple-choice",
        question: "Which adjective best describes food that has too much pepper?",
        options: [
            "Sweet",
            "Salty",
            "Spicy",
            "Cold"
        ],
        correct: 2,
        explanation: "'Spicy' describes food with strong flavors from peppers or hot spices."
    },
    
    // Asking for Opinions
    {
        id: 13,
        category: "Asking for Opinions",
        type: "multiple-choice",
        question: "Which question would you ask to get someone's opinion about a movie?",
        options: [
            "Did you watch the movie?",
            "What do you think about the movie?",
            "When did you watch the movie?",
            "Where did you watch the movie?"
        ],
        correct: 1,
        explanation: "'What do you think about...' is a direct way to ask for someone's opinion."
    },
    
    // Complex Scenario
    {
        id: 14,
        category: "Problem Solving",
        type: "fill-in",
        question: "You're late for a meeting. Complete: 'I'm sorry I'm late. The traffic was _____.'",
        answer: ["terrible", "bad", "awful", "heavy"],
        explanation: "Common adjectives to describe bad traffic include 'terrible', 'bad', 'awful', or 'heavy'."
    },
    
    // Polite Requests
    {
        id: 15,
        category: "Polite Requests",
        type: "multiple-choice",
        question: "What's the most polite way to ask someone to repeat something?",
        options: [
            "Say that again.",
            "Could you repeat that, please?",
            "I didn't hear you.",
            "What did you say?"
        ],
        correct: 1,
        explanation: "'Could you repeat that, please?' uses modal verbs and 'please' to make the request very polite."
    },
    
    // Small Talk
    {
        id: 16,
        category: "Small Talk",
        type: "scenario-audio",
        question: "Someone asks about your weekend plans. Choose the most engaging response:",
        audio: "Person: 'What are you doing this weekend?'",
        options: [
            "Nothing special.",
            "I'm planning to visit the new art museum downtown. Have you been there?",
            "I don't know yet.",
            "The usual stuff."
        ],
        correct: 1,
        explanation: "This response gives specific information and asks a follow-up question to continue the conversation."
    },
    
    // Expressing Preferences
    {
        id: 17,
        category: "Expressing Preferences",
        type: "multiple-choice",
        question: "How would you politely say you don't like spicy food?",
        options: [
            "I hate spicy food.",
            "Spicy food is terrible.",
            "I'm not really a fan of spicy food.",
            "I never eat spicy food."
        ],
        correct: 2,
        explanation: "'I'm not really a fan of...' is a polite way to express that you don't like something."
    },
    
    // Work/School Context
    {
        id: 18,
        category: "Work & Study",
        type: "fill-in",
        question: "Complete the sentence: 'I usually _____ my homework right after school.'",
        answer: ["do", "finish", "complete"],
        explanation: "Common verbs used with homework are 'do', 'finish', or 'complete'."
    },
    
    // Emergency/Help
    {
        id: 19,
        category: "Getting Help",
        type: "multiple-choice",
        question: "You're lost and need directions. What's the best way to ask for help?",
        options: [
            "Where am I?",
            "Excuse me, could you help me find the train station?",
            "I'm lost.",
            "Do you know this area?"
        ],
        correct: 1,
        explanation: "This is polite, specific, and gives the person clear information about what help you need."
    },
    
    // Cultural Context
    {
        id: 20,
        category: "Cultural Communication",
        type: "multiple-choice",
        question: "When someone compliments your English, what's the most appropriate response?",
        options: [
            "No, my English is terrible.",
            "Thank you! I'm still learning and practicing.",
            "You're just being polite.",
            "I don't think so."
        ],
        correct: 1,
        explanation: "Accepting compliments gracefully while acknowledging continued learning shows confidence and humility."
    }
];

// Quiz State
let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let categoryScores = {};

// DOM Elements
const progressFill = document.getElementById('progressFill');
const questionCounter = document.getElementById('questionCounter');
const scoreDisplay = document.getElementById('score');
const scenarioBadge = document.getElementById('scenarioBadge');
const questionText = document.getElementById('questionText');
const audioSection = document.getElementById('audioSection');
const playAudioBtn = document.getElementById('playAudioBtn');
const audioText = document.getElementById('audioText');
const optionsSection = document.getElementById('optionsSection');
const inputSection = document.getElementById('inputSection');
const textInput = document.getElementById('textInput');
const submitInput = document.getElementById('submitInput');
const feedbackSection = document.getElementById('feedbackSection');
const feedbackContent = document.getElementById('feedbackContent');
const nextButton = document.getElementById('nextButton');
const resultsSection = document.getElementById('resultsSection');
const finalScore = document.getElementById('finalScore');
const performanceBreakdown = document.getElementById('performanceBreakdown');
const recommendations = document.getElementById('recommendations');
const restartBtn = document.getElementById('restartBtn');
const quizAudio = document.getElementById('quizAudio');

// Initialize Quiz
function initQuiz() {
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    categoryScores = {};
    resultsSection.style.display = 'none';
    loadQuestion();
}

// Load Current Question
function loadQuestion() {
    const question = quizData[currentQuestion];
    
    // Update progress and counters
    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    progressFill.style.width = `${progress}%`;
    questionCounter.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
    scoreDisplay.textContent = `Score: ${score}`;
    
    // Update question content
    scenarioBadge.textContent = question.category;
    questionText.textContent = question.question;
    
    // Hide all sections initially
    audioSection.style.display = 'none';
    optionsSection.style.display = 'none';
    inputSection.style.display = 'none';
    feedbackSection.style.display = 'none';
    
    // Show appropriate input method
    if (question.type === 'scenario-audio') {
        audioSection.style.display = 'block';
        audioText.textContent = question.audio;
        showOptions(question);
    } else if (question.type === 'fill-in') {
        inputSection.style.display = 'block';
        textInput.value = '';
        textInput.focus();
    } else {
        showOptions(question);
    }
}

// Show Multiple Choice Options
function showOptions(question) {
    optionsSection.style.display = 'block';
    optionsSection.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.innerHTML = `
            <span class="option-letter">${String.fromCharCode(65 + index)}</span>
            <span>${option}</span>
        `;
        button.addEventListener('click', () => selectOption(index, button));
        optionsSection.appendChild(button);
    });
}

// Handle Option Selection
function selectOption(selectedIndex, buttonElement) {
    // Remove previous selections
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
        btn.disabled = true;
    });
    
    // Mark selected option
    buttonElement.classList.add('selected');
    
    // Check answer after short delay
    setTimeout(() => checkAnswer(selectedIndex), 500);
}

// Check Answer
function checkAnswer(userAnswer) {
    const question = quizData[currentQuestion];
    let isCorrect = false;
    let feedbackHTML = '';
    
    if (question.type === 'fill-in') {
        const userInput = textInput.value.trim().toLowerCase();
        isCorrect = question.answer.some(answer => 
            userInput.includes(answer.toLowerCase())
        );
        
        if (isCorrect) {
            feedbackHTML = `
                <div class="feedback-correct">
                    <h3>✅ Correct!</h3>
                    <p>${question.explanation}</p>
                </div>
            `;
        } else {
            feedbackHTML = `
                <div class="feedback-incorrect">
                    <h3>❌ Not quite right</h3>
                    <div class="correct-answer">
                        <strong>Correct answer:</strong> ${question.answer.join(' or ')}
                    </div>
                    <p>${question.explanation}</p>
                </div>
            `;
        }
    } else {
        isCorrect = userAnswer === question.correct;
        
        // Update option buttons to show correct/incorrect
        document.querySelectorAll('.option-btn').forEach((btn, index) => {
            if (index === question.correct) {
                btn.classList.add('correct');
            } else if (index === userAnswer) {
                btn.classList.add('incorrect');
            }
        });
        
        if (isCorrect) {
            feedbackHTML = `
                <div class="feedback-correct">
                    <h3>✅ Excellent!</h3>
                    <p>${question.explanation}</p>
                </div>
            `;
        } else {
            feedbackHTML = `
                <div class="feedback-incorrect">
                    <h3>❌ Not quite right</h3>
                    <div class="correct-answer">
                        <strong>Correct answer:</strong> ${question.options[question.correct]}
                    </div>
                    <p>${question.explanation}</p>
                </div>
            `;
        }
    }
    
    // Update score and category tracking
    if (isCorrect) {
        score++;
        if (!categoryScores[question.category]) {
            categoryScores[question.category] = { correct: 0, total: 0 };
        }
        categoryScores[question.category].correct++;
    }
    
    if (!categoryScores[question.category]) {
        categoryScores[question.category] = { correct: 0, total: 0 };
    }
    categoryScores[question.category].total++;
    
    // Store user answer
    userAnswers.push({
        question: question.question,
        userAnswer: question.type === 'fill-in' ? textInput.value : question.options[userAnswer],
        correctAnswer: question.type === 'fill-in' ? question.answer[0] : question.options[question.correct],
        isCorrect: isCorrect,
        category: question.category
    });
    
    // Show feedback
    feedbackContent.innerHTML = feedbackHTML;
    feedbackSection.style.display = 'block';
    feedbackSection.className = isCorrect ? 'feedback-section' : 'feedback-section incorrect';
}

// Audio Button Handler
if (playAudioBtn && quizAudio) {
    playAudioBtn.addEventListener('click', function () {
        if (quizAudio.paused) {
            quizAudio.play();
            playAudioBtn.textContent = '⏸️ Pause Audio';
        } else {
            quizAudio.pause();
            playAudioBtn.textContent = '🔊 Play Audio';
        }
    });
    quizAudio.addEventListener('ended', function () {
        playAudioBtn.textContent = '🔊 Play Audio';
    });
}

// Submit Text Input
submitInput.addEventListener('click', function() {
    if (textInput.value.trim()) {
        checkAnswer(textInput.value);
    }
});

// Enter key for text input
textInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        if (textInput.value.trim()) {
            submitInput.click();
        }
    }
});

// Next Question
nextButton.addEventListener('click', function() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

// Show Final Results
function showResults() {
    const percentage = Math.round((score / quizData.length) * 100);
    
    finalScore.innerHTML = `
        <div>${score}/${quizData.length}</div>
        <div style="font-size: 0.6em; margin-top: 10px;">${percentage}% Correct</div>
    `;
    
    // Performance breakdown
    let breakdownHTML = '<h3>📊 Performance by Category</h3>';
    Object.keys(categoryScores).forEach(category => {
        const categoryData = categoryScores[category];
        const categoryPercentage = Math.round((categoryData.correct / categoryData.total) * 100);
        breakdownHTML += `
            <div class="category-score">
                <span><strong>${category}</strong></span>
                <span>${categoryData.correct}/${categoryData.total} (${categoryPercentage}%)</span>
            </div>
        `;
    });
    performanceBreakdown.innerHTML = breakdownHTML;
    
    // Recommendations
    let recommendationsHTML = '<h3>💡 Recommendations for Improvement</h3><ul>';
    
    if (percentage >= 90) {
        recommendationsHTML += '<li>🌟 Excellent work! You have strong English conversation skills.</li>';
        recommendationsHTML += '<li>🎯 Try practicing with native speakers to refine your pronunciation.</li>';
        recommendationsHTML += '<li>📚 Consider advanced conversation topics and idioms.</li>';
    } else if (percentage >= 70) {
        recommendationsHTML += '<li>👍 Good progress! Focus on areas where you scored lower.</li>';
        recommendationsHTML += '<li>🗣️ Practice daily conversations and role-playing exercises.</li>';
        recommendationsHTML += '<li>📖 Read English news and articles to expand vocabulary.</li>';
    } else if (percentage >= 50) {
        recommendationsHTML += '<li>📈 Keep practicing! Focus on basic conversation patterns.</li>';
        recommendationsHTML += '<li>🎧 Listen to English podcasts and watch English movies with subtitles.</li>';
        recommendationsHTML += '<li>✍️ Practice writing common phrases and expressions.</li>';
    } else {
        recommendationsHTML += '<li>🌱 Great start! Focus on fundamental conversation skills.</li>';
        recommendationsHTML += '<li>📝 Study basic greetings, polite expressions, and question forms.</li>';
        recommendationsHTML += '<li>👥 Join an English conversation group or find a language partner.</li>';
    }
    
    // Category-specific recommendations
    Object.keys(categoryScores).forEach(category => {
        const categoryData = categoryScores[category];
        const categoryPercentage = (categoryData.correct / categoryData.total) * 100;
        
        if (categoryPercentage < 50) {
            switch (category) {
                case 'Starting Conversations':
                    recommendationsHTML += '<li>🤝 Practice common greetings and ice-breaker questions.</li>';
                    break;
                case 'At a Restaurant':
                    recommendationsHTML += '<li>🍽️ Study menu vocabulary and practice ordering food.</li>';
                    break;
                case 'Expressing Opinions':
                    recommendationsHTML += '<li>💭 Learn opinion phrases like "I think that..." and "In my opinion..."</li>';
                    break;
                case 'Shopping':
                    recommendationsHTML += '<li>🛍️ Practice asking about prices, sizes, and trying on clothes.</li>';
                    break;
                case 'Giving Directions':
                    recommendationsHTML += '<li>🗺️ Study location words and practice giving step-by-step directions.</li>';
                    break;
            }
        }
    });
    
    recommendationsHTML += '</ul>';
    recommendations.innerHTML = recommendationsHTML;
    
    resultsSection.style.display = 'flex';
}

// Restart Quiz
restartBtn.addEventListener('click', function() {
    initQuiz();
});

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', function() {
    initQuiz();
});