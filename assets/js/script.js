// javascript to toggle dark and light modes 
if(localStorage.getItem('theme') === 'dark'){
    document.body.classList.add(`dark-mode`);
    document.getElementById('theme-icon').classList.remove('bi-moon');
    document.getElementById('theme-icon').classList.add('bi-sun');
  }
  
  document.getElementById('theme-icon').addEventListener('click', function(){
    if (document.body.classList.contains('dark-mode')){
        document.body.classList.remove('dark-mode');
        this.classList.remove('bi-sun');
        this.classList.add('bi-moon');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.add('dark-mode');
        this.classList.remove('bi-moon');
        this.classList.add('bi-sun');
        localStorage.setItem('theme', 'dark');
    }
  });
  
  // Automatically switch to system's dark or light mode 
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  if (prefersDarkScheme.matches){
    document.body.classList.add('dark-mode');
    document.getElementById('theme-icon').classList.remove('bi-moon');
    document.getElementById('theme-icon').classList.add('bi-sun');
  } else {
    document.body.classList.remove('dark-mode');
    document.getElementById('theme-icon').classList.remove('bi-sun');
    document.getElementById('theme-icon').classList.add('bi-moon');
  }
  
  // code to greet the user 
  const greetingElement = document.getElementById('greeting');
  const userName = 'Excels';
  const now = new Date();
  const hour = now.getHours();
  if (hour < 12){
      greetingElement.textContent = `Good Morning, ${userName}!`;
  } else if (hour < 18){
      greetingElement.textContent = `Good Afternoon, ${userName}!`;
  } else {
      greetingElement.textContent = `Good Evening, ${userName}!`;
  }

  // print page
  function printMain(){
    const printContents = document.querySelector('section').innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();

    //replace the body content with main content
    document.body.innerHTML = originalContents;
  }