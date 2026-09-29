export type MovieFormat = "2D" | "3D" | "4D" | "5D";
export type LanguageMode = "castellano" | "subtitulada";

export interface Movie {
  id: number;
  name: string;
  imageUrl: string;
  synopsis: string;
  durationMinutes: number;
  genres: string[];
  ageRating: string;
  formats: MovieFormat[];
  languageModes: LanguageMode[];
  releaseDate: string;
}

export interface CinemaFunction {
  id: number;
  movieId: number;
  roomId: number;
  startsAt: string;
  format: MovieFormat;
  languageMode: LanguageMode;
  basePrice: number;
  presalePrice: number | null;
}

export interface Seat {
  id: number;
  row: string;
  number: number;
  accessible: boolean;
  vip: boolean;
  status: "available" | "sold";
}

export interface CartItem {
  type: "ticket" | "product";
  id: number;
  name: string;
  quantity: number;
  unitPrice: number;
  seatId?: number;
}

export interface Purchase {
  id: number;
  createdAt: string;
  total: number;
  status: "paid" | "cancelled" | "used";
  qrCode: string;
  items: CartItem[];
}