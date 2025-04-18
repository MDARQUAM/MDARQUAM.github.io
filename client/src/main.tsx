import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add font family classes to tailor the styling of the page
document.documentElement.classList.add("font-sans");

// Set custom styles for fonts in the document
const style = document.createElement("style");
style.textContent = `
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 47.4% 11.2%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 217 60% 27%;
    --primary: 217 60% 27%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --accent: 12 100% 44.3%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 100% 50%;
    --destructive-foreground: 210 40% 98%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 47.4% 11.2%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;

    /* Default to rounded corners */
    --radius: 0.5rem;
  }

  /* Set custom font families */
  .font-serif {
    font-family: 'Merriweather', serif;
  }

  .font-sans {
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  }

  .font-mono {
    font-family: 'Roboto Mono', monospace;
  }
`;

document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
