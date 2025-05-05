export interface IBaseResponse<T = unknown> {
  status: boolean;
  message: string;
  data?: T;
}

export interface IPaginatedResponse<T = unknown> {
  status: boolean;
  message: string;
  data?: T;
  pagination: IPagination;
}

interface IPagination {
  total_records: number;
  current_page: number;
  total_page: number;
  next_page: number | null;
  prev_page: number | null;
}
