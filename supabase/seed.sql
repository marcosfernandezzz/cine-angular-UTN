insert into public.movies
(name, image_url, synopsis, duration_minutes, genres, age_rating, formats, language_modes, release_date)
values
('Neon City', 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=700&q=80',
 'Una ciudad futurista queda atrapada entre una corporacion y un grupo de rebeldes.', 124,
 array['Accion','Ciencia ficcion'], '13+', array['2D','3D'], array['castellano','subtitulada'], current_date),
('La Ultima Funcion', 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=700&q=80',
 'Un proyeccionista descubre una cinta que parece mostrar hechos del futuro.', 108,
 array['Drama','Misterio'], '13+', array['2D'], array['castellano'], current_date),
('Horizonte', 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=700&q=80',
 'Tres astronautas reciben una señal que cambia su mision para siempre.', 136,
 array['Ciencia ficcion','Drama'], 'ATP', array['2D','4D'], array['subtitulada'], current_date);
