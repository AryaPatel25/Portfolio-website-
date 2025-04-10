const projects = [
  {
    title: 'Chat Website',
    url: '#',
    description: 'Real-time chat with file sharing, calendar reminders, and responsive UI.',
  },
  {
    title: 'Neutra Fit App',
    url: '#',
    description: 'Fitness tracker with workouts, nutrition logs, and progress graphs.',
  },
  {
    title: 'Recreated Ohio.design',
    url: '#',
    description: 'Modern web animations using GSAP and UI layout recreation.',
  },
];

const projectList = document.getElementById('projectList');
projects.forEach(project => {
  const li = document.createElement('li');
  li.innerHTML = `
    <a href="${project.url}" target="_blank">
      <strong>${project.title}</strong><br/>
      <small>${project.description}</small>
    </a>
  `;
  projectList.appendChild(li);
});

// Animations using GSAP
window.addEventListener('DOMContentLoaded', () => {
  gsap.from('.logo, .social-icons a', {
    y: -20,
    opacity: 0,
    duration: 1,
    stagger: 0.1
  });

  gsap.from('.intro h1, .description', {
    x: -50,
    opacity: 0,
    delay: 0.4,
    duration: 1
  });

  gsap.from('.projects h2, .projects li', {
    x: 50,
    opacity: 0,
    delay: 0.6,
    duration: 1,
    stagger: 0.2
  });

  gsap.from('.resume h2, .resume-btn, .resume-preview', {
    y: 30,
    opacity: 0,
    delay: 0.9,
    duration: 1,
    stagger: 0.3
  });

  gsap.from('.contact h2, .contact li', {
    y: 20,
    opacity: 0,
    delay: 1.1,
    duration: 1,
    stagger: 0.2
  });

  gsap.from('.corner', {
    scale: 0,
    duration: 0.6,
    ease: 'elastic.out(1, 0.75)',
    stagger: 0.2
  });
});
