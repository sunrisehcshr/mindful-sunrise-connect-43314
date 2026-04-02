create table if not exists public.form_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  form_type text not null,
  data jsonb not null,
  ip inet,
  user_agent text
);

create index if not exists form_submissions_created_at_idx on public.form_submissions (created_at desc);
create index if not exists form_submissions_form_type_idx on public.form_submissions (form_type);

alter table public.form_submissions enable row level security;
