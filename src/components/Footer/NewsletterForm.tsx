
import React from 'react';

const NewsletterForm: React.FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">Newsletter</h3>
      <p className="text-sm text-muted-foreground">
        Subscribe to our newsletter for helpful mental health tips and updates.
      </p>
      <form className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          placeholder="Your email address"
          className="flex-grow px-4 py-2 text-sm rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-sunrise-400 focus:ring-opacity-50"
          required
        />
        <button
          type="submit"
          className="btn-sunrise text-sm whitespace-nowrap"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;
