export function TRIM(value: string): string {
    return value.trim();
  }
  
  export function UPPER(value: string): string {
    return value.toUpperCase();
  }
  
  export function LOWER(value: string): string {
    return value.toLowerCase();
  }
  
  export function REMOVE_DUPLICATES(data: string[][]): string[][] {
    return Array.from(new Set(data.map(row => JSON.stringify(row)))).map(row =>
      JSON.parse(row)
    );
  }
  
  export function FIND_AND_REPLACE(data: string[][], find: string, replace: string): string[][] {
    return data.map(row => row.map(cell => cell.replace(new RegExp(find, 'g'), replace)));
  }
  