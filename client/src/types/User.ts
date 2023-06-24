export type UserResponse = {
    isLoading: boolean;
    error: Error | null;
    data?: User[];
};

export type User = {
    email: string;
    number?: string;
};