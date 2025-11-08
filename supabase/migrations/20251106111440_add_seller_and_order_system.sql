/*
  # BizPlug Ethiopia - Seller, Order, and Contact System

  1. New Tables
    - `sellers`
      - `id` (uuid, primary key)
      - `business_name` (text)
      - `email` (text)
      - `phone` (text)
      - `product_type` (text)
      - `status` (text: pending, approved, rejected)
      - `created_at` (timestamptz)
    
    - `seller_listings`
      - `id` (uuid, primary key)
      - `seller_id` (uuid, foreign key)
      - `name` (text, product/service name)
      - `description` (text)
      - `price` (numeric)
      - `image_url` (text)
      - `category` (text)
      - `status` (text: pending, approved, rejected)
      - `created_at` (timestamptz)
    
    - `orders`
      - `id` (uuid, primary key)
      - `product_id` (uuid, foreign key to products or seller_listings)
      - `product_source` (text: bizplug or seller)
      - `buyer_name` (text)
      - `buyer_phone` (text)
      - `buyer_message` (text)
      - `status` (text: pending, confirmed, completed)
      - `created_at` (timestamptz)
    
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `subject` (text)
      - `message` (text)
      - `read` (boolean)
      - `created_at` (timestamptz)
    
    - `newsletter_subscribers`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `subscribed_at` (timestamptz)
  
  2. Security
    - Enable RLS on all tables
    - Public read access for products and sellers (status=approved)
    - Public insert access for contact forms and newsletter
    - Admin-only access for orders and pending requests
*/

CREATE TABLE IF NOT EXISTS sellers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  product_type text NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS seller_listings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  seller_id uuid NOT NULL REFERENCES sellers(id) ON DELETE CASCADE,
  name text NOT NULL,
  description text NOT NULL,
  price numeric(10, 2) NOT NULL,
  image_url text NOT NULL,
  category text NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid,
  product_source text NOT NULL CHECK (product_source IN ('bizplug', 'seller')),
  buyer_name text NOT NULL,
  buyer_phone text NOT NULL,
  buyer_message text,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed')),
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  read boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  subscribed_at timestamptz DEFAULT now()
);

ALTER TABLE sellers ENABLE ROW LEVEL SECURITY;
ALTER TABLE seller_listings ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view approved sellers"
  ON sellers FOR SELECT
  TO anon, authenticated
  USING (status = 'approved');

CREATE POLICY "Anyone can view approved seller listings"
  ON seller_listings FOR SELECT
  TO anon, authenticated
  USING (status = 'approved');

CREATE POLICY "Anyone can insert seller applications"
  ON sellers FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can insert seller listings"
  ON seller_listings FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can create orders"
  ON orders FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can insert contact messages"
  ON contact_messages FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_sellers_status ON sellers(status);
CREATE INDEX IF NOT EXISTS idx_seller_listings_seller_id ON seller_listings(seller_id);
CREATE INDEX IF NOT EXISTS idx_seller_listings_status ON seller_listings(status);
CREATE INDEX IF NOT EXISTS idx_orders_product_source ON orders(product_source);
CREATE INDEX IF NOT EXISTS idx_contact_messages_read ON contact_messages(read);