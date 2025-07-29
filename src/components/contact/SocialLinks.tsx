import { Github, Mail, Linkedin } from "lucide-react";

export const SocialLinks = () => {
  return (
    <div className="flex gap-6">
      <a
        href="https://github.com/JLCurtsinger"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full bg-accent/5 hover:bg-accent/10 transition-colors"
      >
        <Github className="w-6 h-6" />
      </a>
      <a
        href="https://www.linkedin.com/in/justin-curtsinger-5a06b9345/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="p-2 rounded-full bg-accent/5 hover:bg-accent/10 transition-colors"
      >
        <Linkedin className="w-6 h-6" />
      </a>
      <a
        href="mailto:cjcurtsinger502@aol.com"
        className="p-2 rounded-full bg-accent/5 hover:bg-accent/10 transition-colors"
      >
        <Mail className="w-6 h-6" />
      </a>
    </div>
  );
};