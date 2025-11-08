// This file defines the Employee type used throughout the app
export interface Employee {
    id: number;
    name: string;
    age: number;
    joinDate: string; // format: YYYY-MM-DD
    department: string;
    fullTime: boolean;
}
