// Create animated lines for background
        function createLines() {
            const linesContainer = document.getElementById('lines');
            const lineCount = 15;
            
            for (let i = 0; i < lineCount; i++) {
                const line = document.createElement('div');
                line.classList.add('line');
                
                // Random width and position
                const width = Math.random() * 2 + 1;
                const left = Math.random() * 100;
                const height = Math.random() * 200 + 50;
                const delay = Math.random() * 5;
                const duration = Math.random() * 10 + 5;
                
                line.style.width = `${width}px`;
                line.style.height = `${height}px`;
                line.style.left = `${left}%`;
                line.style.animationDuration = `${duration}s`;
                line.style.animationDelay = `${delay}s`;
                
                linesContainer.appendChild(line);
            }
        }
        
        // Hamburger menu toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Experience image carousel
        const experienceImages = document.querySelectorAll('.exp-img');
        const mobileExperienceImages = document.querySelectorAll('.mobile-exp-img');
        let currentImageIndex = 0;
        let currentMobileImageIndex = 0;
        
        function showExperienceImage(index) {
            experienceImages.forEach(img => img.classList.remove('active'));
            if (experienceImages[index]) {
                experienceImages[index].classList.add('active');
            }
        }
        
        function showMobileExperienceImage(index) {
            mobileExperienceImages.forEach(img => img.classList.remove('active'));
            if (mobileExperienceImages[index]) {
                mobileExperienceImages[index].classList.add('active');
            }
        }
        
        function rotateExperienceImages() {
            // Desktop images
            currentImageIndex = (currentImageIndex + 1) % experienceImages.length;
            showExperienceImage(currentImageIndex);
            
            // Mobile images
            currentMobileImageIndex = (currentMobileImageIndex + 1) % mobileExperienceImages.length;
            showMobileExperienceImage(currentMobileImageIndex);
        }
        
        // Set up image rotation
        setInterval(rotateExperienceImages, 3000);
        
        // Carousel functionality
        let currentAchievementIndex = 0;
        let currentProjectIndex = 0;
        let currentCertificateIndex = 0;
        
        // Achievement carousel
        const achievementCards = document.querySelectorAll('.achievement-card');
        const prevAchievementBtn = document.getElementById('prevAchievement');
        const nextAchievementBtn = document.getElementById('nextAchievement');
        
        function showAchievement(index) {
            achievementCards.forEach((card, i) => {
                card.style.display = i === index ? 'flex' : 'none';
            });
        }
        
        if (prevAchievementBtn && nextAchievementBtn) {
            prevAchievementBtn.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent default scrolling behavior
                currentAchievementIndex = currentAchievementIndex === 0 ? achievementCards.length - 1 : currentAchievementIndex - 1;
                showAchievement(currentAchievementIndex);
            });
            
            nextAchievementBtn.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent default scrolling behavior
                currentAchievementIndex = (currentAchievementIndex + 1) % achievementCards.length;
                showAchievement(currentAchievementIndex);
            });
        }
        
        // Project carousel
        const projectCards = document.querySelectorAll('.project-card');
        const prevProjectBtn = document.getElementById('prevProject');
        const nextProjectBtn = document.getElementById('nextProject');
        
        function showProject(index) {
            projectCards.forEach((card, i) => {
                card.style.display = i === index ? 'flex' : 'none';
            });
        }
        
        if (prevProjectBtn && nextProjectBtn) {
            prevProjectBtn.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent default scrolling behavior
                currentProjectIndex = currentProjectIndex === 0 ? projectCards.length - 1 : currentProjectIndex - 1;
                showProject(currentProjectIndex);
            });
            
            nextProjectBtn.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent default scrolling behavior
                currentProjectIndex = (currentProjectIndex + 1) % projectCards.length;
                showProject(currentProjectIndex);
            });
        }
        
        // Certificate carousel
        const certificateCards = document.querySelectorAll('.certificate-card');
        const prevCertificateBtn = document.getElementById('prevCertificate');
        const nextCertificateBtn = document.getElementById('nextCertificate');
        
        function showCertificate(index) {
            certificateCards.forEach((card, i) => {
                card.style.display = i === index ? 'flex' : 'none';
            });
        }
        
        if (prevCertificateBtn && nextCertificateBtn) {
            prevCertificateBtn.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent default scrolling behavior
                currentCertificateIndex = currentCertificateIndex === 0 ? certificateCards.length - 1 : currentCertificateIndex - 1;
                showCertificate(currentCertificateIndex);
            });
            
            nextCertificateBtn.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent default scrolling behavior
                currentCertificateIndex = (currentCertificateIndex + 1) % certificateCards.length;
                showCertificate(currentCertificateIndex);
            });
        }
        
        // Initialize carousels
        function initializeCarousels() {
            if (achievementCards.length > 0) showAchievement(0);
            if (projectCards.length > 0) showProject(0);
            if (certificateCards.length > 0) showCertificate(0);
        }
        
        // Initialize on load
        document.addEventListener('DOMContentLoaded', () => {
            createLines();
            showExperienceImage(0);
            showMobileExperienceImage(0); // Initialize mobile images
            initializeCarousels();
        });
   