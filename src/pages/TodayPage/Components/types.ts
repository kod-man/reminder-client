export interface Reminder {
  _id: string;
  title: string;
  description: string;
  date?: string;
  priority: string;
  label: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
