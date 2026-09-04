// ====== YOUR SETTINGS — fill in once, then leave this file alone ======
// This file is separate from index.html on purpose: whenever you get an
// updated index.html from Claude, you only replace THAT file. This one stays
// on your server untouched, so you never have to re-paste your keys again.

window.BCJR_CONFIG = {
  // Settings → API Keys in your Supabase project. Use the PUBLISHABLE key
  // (starts with sb_publishable_...), never the secret key.
  SUPABASE_URL: "https://jhkyptpidnoxhsyvxeev.supabase.co",
  SUPABASE_PUBLISHABLE_KEY: "sb_publishable_MfDYPsXWX9tPFguJDRcTIw_9o3rd47A",

  // Optional — only if you've deployed the ics-feed Edge Function for the
  // subscribable calendar. Leave blank otherwise.
  ICS_FEED_URL: "https://jhkyptpidnoxhsyvxeev.supabase.co/functions/v1/ics-feed?key=17p3paa8pmv9pztgp8"
};
