import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Languages,
  Brain,
  Database,
  Code2,
  BarChart3,
  TrendingUp,
  MessageSquare,
  FileText,
  Sparkles
} from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".observe").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      title: "Predicting Root Length for Plants",
      description: "Built a computer vision pipeline to segment roots from plant images and predict primary root length. Annotated training data, trained a U-Net model, and applied reinforcement learning and PID control for robotic inoculation. Competed in a Kaggle challenge to optimize performance.",
      icon: Sparkles,
      tags: ["U-Net", "PyTorch", "RL", "Kaggle"],
      gradient: "from-cyan-500 to-blue-500",
      badge: "CV"
    },
    {
      title: "Building a Pipeline for Emotion Classification",
      description: "Developed an NLP pipeline to detect emotions from video transcripts using machine learning models. Used Whisper and AssemblyAI for transcription, trained and compared Logistic Regression, LSTM, and Transformer models, and integrated translation, prompt engineering, and explainability techniques (XAI).",
      icon: MessageSquare,
      tags: ["Whisper", "AssemblyAI", "LogReg", "LSTM", "Transformers"],
      gradient: "from-blue-500 to-cyan-500",
      badge: "NLP"
    },
    {
      title: "SDG No Poverty — Female Poverty Analytics Dashboard",
      description: "Interactive dashboard for United Nations SDG 1 (No Poverty) focused on regional female poverty rates. Defined a research question, sourced and cleaned datasets, ran EDA in Python/Power BI, and used simple linear regression to explain relationships across the $1.90 / $3.20 / $5.50 thresholds. Delivered a multi-page Power BI report with maps, box plots, and navigation buttons to communicate insights and recommendations.",
      icon: TrendingUp,
      tags: ["Power BI", "Python", "EDA", "Data Cleaning", "Data Viz", "Linear Regression", "CRISP-DM"],
      gradient: "from-purple-500 to-pink-500",
      badge: "BI"
    },
    {
      title: "Football Data Analytics for NAC Breda",
      description: "End-to-end data science project with NAC Breda football club. Cleaned and preprocessed large player datasets (16k+ rows, 100+ features), ran EDA on market value, goals, contracts, and engineered features (correlation, SelectKBest). Trained and compared ML models — Linear/Logistic Regression, Random Forest, Gradient Boosting, XGBoost, and K-Means — and evaluated with MSE/MAE/R²/Accuracy. Final deliverables included a linear regression baseline for market value, clustering insights for recruitment, and regression-from-scratch with gradient descent.",
      icon: Database,
      tags: ["Python", "Scikit-learn", "XGBoost", "Random Forest", "Linear Regression", "EDA", "Feature Engineering"],
      gradient: "from-indigo-500 to-purple-500",
      badge: "DS"
    },
    {
      title: "Image Classifier App",
      description: "Developed a deep learning application to classify fruit images into fresh vs. rotten apples/bananas (4 classes, ~200–300 images per class). Followed the CRISP-DM framework, incorporating market and consumer research, risk assessment, and prototype design. Implemented MLP and CNN baselines, and achieved 97.3% test accuracy with a VGG16 transfer learning model and data augmentation. Addressed dataset bias (class imbalance, color sensitivity) with fairness-through-awareness techniques, and applied explainability methods to highlight decision regions. Conducted user testing (think-aloud and A/B studies) and delivered a user-centered demo.",
      icon: Sparkles,
      tags: ["TensorFlow/Keras", "CNN", "VGG16", "Transfer Learning", "XAI", "Fairness", "A/B Testing", "CRISP-DM"],
      gradient: "from-pink-500 to-rose-500",
      badge: "CV"
    },
    {
      title: "Road Safety Risk Prediction – Breda",
      description: "Client project with ANWB to improve road safety in Breda by predicting danger zones. Integrated datasets from ANWB (driver behavior), KNMI (rainfall), and Open-Meteo (weather) to classify streets into low, mid, or high risk levels. Performed preprocessing (feature engineering, normalization, outlier handling, SMOTE), then trained and compared models including Decision Trees, Random Forest, K-Means clustering, and Deep Neural Networks. Achieved up to 98.8% accuracy with Random Forest and DNN. Delivered a prototype interface with alerts for risky road segments, aligning with EU AI Act and GDPR requirements.",
      icon: Brain,
      tags: ["Python", "SQL", "Scikit-learn", "Random Forest", "Decision Trees", "DNN", "K-Means", "SMOTE", "XAI"],
      gradient: "from-violet-500 to-purple-500",
      badge: "AI"
    }
  ];

  const skills = {
    "Languages & Tools": [
      { name: "Python", icon: Code2 },
      { name: "SQL", icon: Database },
      { name: "Git", icon: Code2 }
    ],
    "ML & Data": [
      { name: "Scikit-learn", icon: Brain },
      { name: "PyTorch", icon: Brain },
      { name: "TensorFlow/Keras", icon: Brain },
      { name: "Pandas", icon: Database },
      { name: "EDA", icon: BarChart3 },
      { name: "Data Cleaning", icon: Database },
      { name: "Linear Regression", icon: TrendingUp },
      { name: "CRISP-DM", icon: Brain }
    ],
    "Ops & Visualization": [
      { name: "Docker", icon: Database },
      { name: "FastAPI", icon: Code2 },
      { name: "Azure ML", icon: Database },
      { name: "Power BI", icon: BarChart3 },
      { name: "Data Visualization", icon: BarChart3 }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 glass border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gradient">Mohamed Elshami</h1>
          <nav className="hidden md:flex gap-6">
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center observe">
        <div className="mb-8 inline-block">
          <img
            src={profileImage}
            alt="Mohamed Elshami"
            className="w-40 h-40 rounded-full mx-auto border-4 border-primary glow-primary hover:scale-105 hover:glow-accent transition-all duration-300"
          />
        </div>
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">
          Applied Data Science & AI
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          BUas • NLP • Computer Vision • MLOps
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-20 observe">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">About Me</h3>
          <Card className="glass hover-lift p-8">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Motivated and passionate Data Science and AI student at Breda University of Applied Sciences. 
              Experienced in NLP, Computer Vision, and MLOps through academic and group projects. 
              Currently seeking an internship to apply technical expertise and contribute to real-world AI solutions.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Badge className="glass gap-2 px-4 py-2">
                <MapPin className="w-4 h-4" />
                Breda, NL
              </Badge>
              <Badge className="glass gap-2 px-4 py-2 bg-accent/20">
                <Sparkles className="w-4 h-4" />
                Open to internships
              </Badge>
              <Badge className="glass gap-2 px-4 py-2">
                <Languages className="w-4 h-4" />
                English / Dutch (A2–B1) / Arabic
              </Badge>
            </div>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20 observe">
        <h3 className="text-3xl font-bold mb-12 text-center">Featured Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={index} 
                className="glass hover-lift p-6 group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <span className="text-white font-mono font-bold text-sm">{project.badge}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">{project.title}</h4>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center opacity-20`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-4 py-20 observe">
        <h3 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {Object.entries(skills).map(([category, items]) => (
            <Card key={category} className="glass p-6">
              <h4 className="text-xl font-semibold mb-4 text-gradient">{category}</h4>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <Badge 
                      key={index} 
                      className="glass gap-2 px-3 py-2 hover:bg-primary/20 hover:scale-105 transition-all cursor-pointer"
                    >
                      <Icon className="w-4 h-4" />
                      {skill.name}
                    </Badge>
                  );
                })}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20 observe">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Let's Connect</h3>
          <p className="text-muted-foreground mb-8">
            Open to AI/Data internships in the Netherlands and EU. The fastest way is email.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              className="gradient-primary hover:opacity-90 gap-2 glow-primary"
              onClick={() => window.location.href = 'mailto:melshami909@gmail.com'}
            >
              <Mail className="w-5 h-5" />
              melshami909@gmail.com
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="glass hover:bg-primary/20 gap-2"
              onClick={() => window.open('https://www.linkedin.com/in/mohamed-elshami', '_blank')}
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="glass hover:bg-primary/20 gap-2"
              onClick={() => window.open('https://github.com/MohamedElshami233464', '_blank')}
            >
              <Github className="w-5 h-5" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Mohamed Elshami. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
