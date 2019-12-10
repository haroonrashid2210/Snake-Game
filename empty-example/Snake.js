function Snake() {
    
    this.speed = 10;
    this.arrX = [0];
    this.arrY = [0];

    this.create = function(){
        fill(255,0,255);
        for(var i = 0 ; i < this.arrX.length ; i++){
            rect(this.arrX[i],this.arrY[i],10,10);
        }
    }
    
    this.eated = function(x,y){
        this.arrX.push(x);
        this.arrY.push(y);
    }
    
    
   this.updateLength = function(x,y){
       var tempx1 = x;
       var tempx2 = 0;
       var tempy1 = y;
       var tempy2 = 0;
        
       for(var i = 0 ; i < this.arrX.length ; i++){
            tempx2 = this.arrX[i];
            tempy2 = this.arrY[i];
            
            this.arrX[i] = tempx1;
            this.arrY[i] = tempy1;
            
            tempx1 = tempx2;
            tempy1 = tempy2;
        }
    }
}