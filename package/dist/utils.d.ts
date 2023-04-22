import { DateRange } from './types';
export declare const identity: <T>(x: T) => T;
export declare const chunks: <T>(array: readonly T[], size: number) => T[][];
export declare const combine: (...args: any[]) => string;
export declare const getDaysInMonth: (date: Date) => Date[];
export declare const isStartOfRange: ({ startDate }: DateRange, day: Date) => boolean;
export declare const isEndOfRange: ({ endDate }: DateRange, day: Date) => boolean;
export declare const inDateRange: ({ startDate, endDate }: DateRange, day: Date) => boolean;
export declare const isRangeSameDay: ({ startDate, endDate }: DateRange) => boolean;
type Falsy = false | null | undefined | 0 | '';
export declare const parseOptionalDate: (date: Date | string | Falsy, defaultValue: Date) => Date;
export declare const getValidatedMonths: (range: DateRange, minDate: Date, maxDate: Date) => (Date | undefined)[];
export {};
