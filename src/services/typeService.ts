import { SortingDirection } from '../components/common/AdvancedSearch/AdvancedSearch';

export function arrayResult<T>(value: T | T[]): T[] {
    return Array.isArray(value) ? value : [];
}

export function singleResult(value: string | string[]): string {
    return Array.isArray(value) ? '' : value;
}

export function getSortingDirection(value: string | string[]): SortingDirection {
    return Array.isArray(value) ? 'ASC' :
        value === 'ASC' ? 'ASC' : 'DESC';
}