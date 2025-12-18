import { whatsappLink } from '@/content/siteContent';

interface WhatsappButtonProps {
  label?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function WhatsappButton({
  label = 'WhatsApp inmediato',
  variant = 'primary',
  className = '',
}: WhatsappButtonProps) {
  const baseStyles = variant === 'primary' ? 'btn-primary' : 'btn-secondary';

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      className={`${baseStyles} ${className}`}
      aria-label="Hablar por WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden
      >
        <path d="M12.04 2a9.9 9.9 0 0 0-8.6 14.84l-1 3.65 3.75-.98A9.93 9.93 0 1 0 12.04 2Zm0 18.08a8.14 8.14 0 0 1-4.15-1.14l-.3-.18-2.24.58.6-2.18-.2-.34a8.24 8.24 0 1 1 6.29 3.26Zm4.68-5.9c-.26-.13-1.53-.75-1.77-.84s-.41-.13-.58.13-.66.84-.8 1-.3.19-.56.06a6.65 6.65 0 0 1-2-1.21 7.45 7.45 0 0 1-1.37-1.7c-.15-.26 0-.4.11-.54.12-.13.26-.34.39-.5.13-.17.17-.3.26-.5s.04-.38-.02-.53-.57-1.4-.78-1.9c-.2-.48-.4-.42-.58-.43h-.5c-.17 0-.44.06-.67.31s-.88.86-.88 2.09 1 2.42 1.13 2.58c.13.17 2 3.05 4.95 4.28a6.67 6.67 0 0 0 1.85.55 1.57 1.57 0 0 0 1.02-.16c.32-.22 1-1 1.14-1.34s.14-.62.1-.68-.22-.17-.48-.3Z" />
      </svg>
      {label}
    </a>
  );
}
