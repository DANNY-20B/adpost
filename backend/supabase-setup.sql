-- Enable schema usage for API roles
grant usage on schema public to anon, authenticated;

-- Products table
create table if not exists public.products (
  id text primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null check (char_length(title) between 1 and 70),
  category text not null,
  price numeric(14, 2) not null check (price > 0),
  location text not null,
  condition text not null check (condition in ('New', 'Used')),
  description text not null check (char_length(description) between 1 and 1800),
  seller text not null,
  phone text not null,
  images text[] not null default '{}',
  featured boolean not null default false,
  created_at timestamptz not null default now()
);

create index if not exists products_created_at_idx on public.products (created_at desc);
create index if not exists products_user_id_idx on public.products (user_id);

alter table public.products enable row level security;

-- Row Level Security policies for products
drop policy if exists "Anyone can browse products" on public.products;
drop policy if exists "Authenticated users can browse products" on public.products;
create policy "Anyone can browse products" on public.products
  for select using (true);

drop policy if exists "Users can create their own products" on public.products;
create policy "Users can create their own products" on public.products
  for insert to authenticated with check (auth.uid() = user_id);

drop policy if exists "Users can update their own products" on public.products;
create policy "Users can update their own products" on public.products
  for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "Users can delete their own products" on public.products;
create policy "Users can delete their own products" on public.products
  for delete to authenticated using (auth.uid() = user_id);

-- Prevent non-admin users from marking items as featured, preserving existing featured status on update
create or replace function public.keep_user_products_unfeatured()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if coalesce(auth.role(), '') <> 'service_role' then
    if tg_op = 'INSERT' then
      new.featured := false;
    elsif tg_op = 'UPDATE' then
      new.featured := old.featured;
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists keep_user_products_unfeatured on public.products;
create trigger keep_user_products_unfeatured
  before insert or update of featured on public.products
  for each row execute function public.keep_user_products_unfeatured();

grant select on public.products to anon, authenticated;
grant insert, update, delete on public.products to authenticated;

-- Saved products table
create table if not exists public.saved_products (
  user_id uuid not null references auth.users(id) on delete cascade,
  product_id text not null references public.products(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, product_id)
);

alter table public.saved_products enable row level security;

drop policy if exists "Users can manage their own saved products" on public.saved_products;
create policy "Users can manage their own saved products" on public.saved_products
  for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

grant select, insert, delete on public.saved_products to authenticated;

-- Storage configuration: allow common web image formats
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'product-images',
  'product-images',
  true,
  5242880,
  array['image/jpeg', 'image/png', 'image/webp', 'image/gif']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

-- Storage policies
drop policy if exists "Anyone can view product images" on storage.objects;
create policy "Anyone can view product images" on storage.objects
  for select using (bucket_id = 'product-images');

drop policy if exists "Users can upload product images to their folder" on storage.objects;
create policy "Users can upload product images to their folder" on storage.objects
  for insert to authenticated with check (
    bucket_id = 'product-images' and (storage.foldername(name))[1] = auth.uid()::text
  );

drop policy if exists "Users can update product images in their folder" on storage.objects;
create policy "Users can update product images in their folder" on storage.objects
  for update to authenticated using (
    bucket_id = 'product-images' and (storage.foldername(name))[1] = auth.uid()::text
  ) with check (
    bucket_id = 'product-images' and (storage.foldername(name))[1] = auth.uid()::text
  );

drop policy if exists "Users can delete product images in their folder" on storage.objects;
create policy "Users can delete product images in their folder" on storage.objects
  for delete to authenticated using (
    bucket_id = 'product-images' and (storage.foldername(name))[1] = auth.uid()::text
  );
