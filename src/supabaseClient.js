import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hnihlndudmzfnvvuupou.supabase.co' // Replace with your Supabase URL

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhuaWhsbmR1ZG16Zm52dnV1cG91Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwMTE4MDAsImV4cCI6MjA2MDU4NzgwMH0.mfR8HdEgQvKL4oYnKUhmS3IZ596RJgbx4Gs8aezlqJA' // Replace with your Supabase anon key

export const supabase = createClient(supabaseUrl, supabaseKey) 