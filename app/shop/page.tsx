@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: dark;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  background:
    radial-gradient(circle at top, rgba(124, 58, 237, 0.26), transparent 25%),
    #020817;
  color: #e2e8f0;
}

* {
  box-sizing: border-box;
}

img {
  max-width: 100%;
  display: block;
}

button,
input,
select,
textarea {
  font: inherit;
}

::selection {
  background: rgba(168, 85, 247, 0.6);
}

.gradient-text {
  background: linear-gradient(90deg, #f8fafc 0%, #c4b5fd 30%, #7dd3fc 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
