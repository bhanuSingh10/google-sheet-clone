export function SUM(...values: number[]): number {
    return values.reduce((acc, val) => acc + val, 0);
  }
  
  export function AVERAGE(...values: number[]): number {
    return SUM(...values) / values.length;
  }
  
  export function MAX(...values: number[]): number {
    return Math.max(...values);
  }
  
  export function MIN(...values: number[]): number {
    return Math.min(...values);
  }
  
  export function COUNT(...values: any[]): number {
    return values.filter(v => typeof v === "number").length;
  }
  