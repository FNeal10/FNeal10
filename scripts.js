function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}


const skills = 
[
    "Python",
    "C#",
    ".Net",
    "Bash",
    "SQL",
    "ETL / ELT",
    "Azure",
    "AWS",
    "Azure Data Factory",
    "CI / CD",
    "Airflow",
    "Databricks",
    "IBM Cognos",
    "Snowflake",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Data Modeling",
    "REST APIs",
    "Docker",
    "Azure Data Lake",
    "PowerShell",
    "S3",
    "dbt"
];
const colors = 
[
    "#0EA5E9", "#06B6D4", "#10B981", "#8B5CF6", "#F43F5E",
    "#6366F1", "#475569", "#94A3B8", "#1E293B", "#38bdf8",
    "#34d399", "#a78bfa", "#fb7185", "#f8fafc", "#fbbf24",
    "#14B8A6", "#F59E0B", "#64748B", "#475569", "#93C5FD"
];

const layer = document.getElementById("skills-layer");
let activeSkills = []; 

function spawnSkill() {
    if (document.hidden || activeSkills.length > 12) return;

    const skill = document.createElement("div");
    const text = skills[Math.floor(Math.random() * skills.length)];
    
    // Calculate estimated dimensions for collision box
    const fontSize = 18; 
    const estimatedWidth = text.length * (fontSize * 0.6) + 20; 
    const estimatedHeight = fontSize + 15;

    skill.className = "skill";
    skill.textContent = text;
    skill.style.color = colors[Math.floor(Math.random() * colors.length)];
    skill.style.setProperty("--rot", `${Math.random() * 20 - 10}deg`);

    const centerX = window.innerWidth / 2;
    const baseY = window.innerHeight - 150;
    const radius = 180 + Math.random() * 80;

    let x, y, attempts = 0;
    let foundSpot = false;

    while (attempts < 15) {
        // Arc: -140deg to -40deg
        const angle = (Math.random() * (Math.PI / 1.8)) - (3.2 * Math.PI / 4); 
        x = centerX + Math.cos(angle) * radius - (estimatedWidth / 2);
        y = baseY + Math.sin(angle) * radius;

        if (!isOverlapping(x, y, estimatedWidth, estimatedHeight)) {
            foundSpot = true;
            break;
        }
        attempts++;
    }

    if (!foundSpot) return; // Skip this spawn if we can't find room

    skill.style.left = `${x}px`;
    skill.style.top = `${y}px`;
    layer.appendChild(skill);

    const skillObj = { x, y, w: estimatedWidth, h: estimatedHeight, el: skill };
    activeSkills.push(skillObj);

    requestAnimationFrame(() => skill.classList.add("show"));

    // Cleanup logic
    setTimeout(() => {
        skill.classList.remove("show");
        skill.addEventListener('transitionend', () => {
            skill.remove();
            activeSkills = activeSkills.filter(s => s.el !== skill);
        }, { once: true });
    }, 2500 + Math.random() * 1500);
}

function isOverlapping(x, y, w, h) {
    const padding = 15; // Extra space between skills
    return activeSkills.some(other => {
        return (
            x < other.x + other.w + padding &&
            x + w + padding > other.x &&
            y < other.y + other.h + padding &&
            y + h + padding > other.y
        );
    });
}

setInterval(spawnSkill, 800);