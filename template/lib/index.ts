function percent (part: number, total: number) :number {
    if (total === 0) return 0
    return parseInt((part/total*100).toFixed(0))
}
export { percent }