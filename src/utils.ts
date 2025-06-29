

type TPosition = { x: number, y: number  }
type TSize = { width: number, height: number }

export function haveIntersection(r1: TPosition & TSize, r2: TPosition & TSize) {
    return !(
        r2.x > r1.x + r1.width ||
        r2.x + r2.width < r1.x ||
        r2.y > r1.y + r1.height ||
        r2.y + r2.height < r1.y
    );
}