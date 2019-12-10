function Food() {
    
    this.x = 250;
    this.y = 250;
    
    this.create = function(x,y) {
        this.x = x - (x % 10);
        this.y = y - (y % 10);
        this.show();
    }
    
    this.show = function() {
        fill(0,200,0);
        rect(this.x,this.y,10,10);
    }
}