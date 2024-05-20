export default class KeyMap{
    public boost:string = 'none'
    public left:string = 'none'
    public right:string = 'none'
    public jump:string = 'none'

    constructor(boost: string, left: string, right: string, jump: string) {
        this.boost = boost;
        this.left = left;
        this.right = right;
        this.jump = jump;
    }
}