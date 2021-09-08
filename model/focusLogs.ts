
export interface focusLog  {
    totFocusedMin:number;
    drewFor:number;
    readFor:number;
    studiedFor:number;
    endsAt: string;
    id:number;
}
export interface focusLogSum {
    studiedFor:number;
    readFor:number;
    wroteFor:number;
    drewFor:number;
    totFocusedMin: number;
}